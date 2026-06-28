"""End-to-end pipeline: Upload / ZIP → parsed rows → DB rows with matched services."""
from __future__ import annotations

import logging
import os
import re
import shutil
import threading
import uuid
from datetime import datetime
from pathlib import Path
from typing import Iterable, List, Optional

from sqlalchemy.orm import Session

from .models import Partner, PriceDocument, PriceHistory, PriceItem
from .normalize import Normalizer, load_normalizer
from .parsers import ExtractedRow, iter_archive, parse_file
from .validation import validate_item

logger = logging.getLogger(__name__)
_BG_QUEUE_LOCK = threading.Lock()

DATE_RE = re.compile(r"(20\d{2})[._-]?(\d{1,2})?[._-]?(\d{1,2})?")

STORAGE_DIR = Path(__file__).resolve().parents[1] / "storage" / "uploads"
VALID_EXTS = {"pdf", "docx", "xlsx", "xls", "jpg", "jpeg", "png", "webp", "tiff"}


def _ensure_storage_dir() -> Path:
    STORAGE_DIR.mkdir(parents=True, exist_ok=True)
    return STORAGE_DIR


def _partner_name_from_filename(name: str) -> str:
    stem = Path(name).stem
    stem = re.sub(r"\b(прайс|price|цены|тариф|2\d{3}|\d{2}\.\d{2}\.\d{2,4})\b", "", stem, flags=re.I)
    stem = re.sub(r"[_\-.]+", " ", stem).strip()
    return stem[:200] or Path(name).stem


def _date_from_filename(name: str) -> datetime | None:
    m = DATE_RE.search(name)
    if not m:
        return None
    y = int(m.group(1))
    mo = int(m.group(2) or 1)
    d = int(m.group(3) or 1)
    try:
        return datetime(y, max(1, min(12, mo)), max(1, min(28, d)))
    except ValueError:
        return None


def _get_or_create_partner(db: Session, name: str) -> Partner:
    existing = db.query(Partner).filter(Partner.name == name).first()
    if existing:
        return existing
    p = Partner(name=name)
    db.add(p)
    db.flush()
    return p


def register_upload(db: Session, file_path: Path) -> List[PriceDocument]:
    """Register uploaded file (ZIP or single PDF/XLSX/DOCX) into persistent storage with status 'queued'."""
    base_dir = _ensure_storage_dir() / f"{int(datetime.utcnow().timestamp())}_{uuid.uuid4().hex[:8]}"
    base_dir.mkdir(parents=True, exist_ok=True)

    ext = file_path.suffix.lower().lstrip(".")
    documents: List[PriceDocument] = []

    if ext == "zip":
        extracted_files = sorted(iter_archive(file_path, base_dir), key=lambda p: p.name)
        for target_path in extracted_files:
            partner_name = _partner_name_from_filename(target_path.name)
            partner = _get_or_create_partner(db, partner_name)

            doc = PriceDocument(
                partner_id=partner.partner_id,
                filename=target_path.name,
                file_type=target_path.suffix.lower().lstrip("."),
                status="queued",
                price_date=_date_from_filename(target_path.name),
                storage_path=str(target_path),
            )
            db.add(doc)
            documents.append(doc)
    elif ext in VALID_EXTS:
        target_path = base_dir / file_path.name
        shutil.copy2(file_path, target_path)

        partner_name = _partner_name_from_filename(target_path.name)
        partner = _get_or_create_partner(db, partner_name)

        doc = PriceDocument(
            partner_id=partner.partner_id,
            filename=target_path.name,
            file_type=ext,
            status="queued",
            price_date=_date_from_filename(target_path.name),
            storage_path=str(target_path),
        )
        db.add(doc)
        documents.append(doc)

    db.commit()
    for doc in documents:
        db.refresh(doc)
    return documents


def unpack_zip(db: Session, zip_path: Path) -> List[PriceDocument]:
    """Alias for register_upload for backwards compatibility."""
    return register_upload(db, zip_path)


def _clean_and_deduplicate_rows(rows: List[ExtractedRow]) -> List[ExtractedRow]:
    """Perform deduplication, header filtering, junk noise filtering, and price sanity checks on extracted rows."""
    cleaned: List[ExtractedRow] = []
    seen = set()
    skip_kw = {
        "наименование", "название", "услуга", "услуги", "стоимость", "цена",
        "код", "номер", "№", "итого", "всего", "раздел", "прейскурант", "примечание",
        "страница", "стр", "лист", "срочность", "зеленый коридор"
    }

    for r in rows:
        if not r.service_name_raw:
            continue

        name_clean = r.service_name_raw.strip()
        name_lower = name_clean.lower()

        # Filter out very short or junk text fragments
        if len(name_clean) < 4:
            continue

        if name_lower in skip_kw or any(name_lower.startswith(kw) for kw in ("стр.", "страница ", "лист ")):
            continue

        # Filter out broken string fragments (e.g. "(rs", "+предрасположенность", starting with closing brackets or isolated symbols)
        if re.match(r"^[\)\+\.\,\:\;\-\_\/\\0-9\s]+$", name_clean):
            continue
        if re.match(r"^\([a-zA-Z0-9]{1,3}$", name_clean):  # e.g. (rs
            continue
        if name_clean.startswith("+") and len(name_clean) < 25:
            continue

        p_res = r.price_resident_kzt
        if p_res is not None and (p_res < 5.0 or p_res > 10_000_000.0):
            p_res = None
            r.price_resident_kzt = None

        p_nonres = r.price_nonresident_kzt
        if p_nonres is not None and (p_nonres < 5.0 or p_nonres > 10_000_000.0):
            p_nonres = None
            r.price_nonresident_kzt = None

        key = (name_lower, r.service_code_source, p_res, p_nonres)
        if key in seen:
            continue
        seen.add(key)
        cleaned.append(r)

    return cleaned


def process_document(db: Session, doc_id: str, normalizer: Normalizer) -> PriceDocument:
    """Process a single queued document by doc_id."""
    doc = db.get(PriceDocument, doc_id)
    if not doc:
        raise ValueError(f"Document {doc_id} not found")

    doc.status = "processing"
    db.commit()

    file_path = Path(doc.storage_path)
    if not file_path.exists():
        doc.status = "error"
        doc.error_message = "Файл документа не найден на сервере"
        db.commit()
        return doc

    try:
        file_type, rows = parse_file(file_path)
        doc.file_type = file_type

        # Check local parser extraction quality
        valid_local_rows = [
            r for r in rows
            if r.service_name_raw and (r.price_resident_kzt is not None or r.price_nonresident_kzt is not None)
        ]
        success_ratio = len(valid_local_rows) / len(rows) if rows else 0.0

        doc.extraction_method = "local_parser"

        # Trigger LLM Fallback if file is PDF/Scan, local parsing failed, or quality is below 85%
        is_pdf_or_scan = doc.file_type in ("pdf", "jpg", "jpeg", "png", "webp", "tiff")
        if is_pdf_or_scan or not rows or len(valid_local_rows) < 10 or success_ratio < 0.85:
            if os.getenv("GROQ_API_KEY"):
                doc.status = "llm_processing"
                db.commit()

                from .llm_service import LLMExtractionService

                llm_service = LLMExtractionService()
                llm_items, raw_json = llm_service.parse_with_llm(file_path)
                if llm_items:
                    doc.extraction_method = "llm_llama3"
                    doc.raw_llm_json = raw_json
                    rows = [
                        ExtractedRow(
                            service_name_raw=item.service,
                            price_resident_kzt=item.price,
                            service_code_source=item.code,
                            currency_original=item.currency or "KZT",
                        )
                        for item in llm_items
                    ]
            else:
                logger.info(
                    f"[Pipeline] Fallback threshold reached for {doc.filename}, but GROQ_API_KEY is not configured."
                )

        # Deduplicate and clean rows
        rows = _clean_and_deduplicate_rows(rows)

        matched = 0
        raw_names = [r.service_name_raw for r in rows]
        matches = normalizer.match_batch(raw_names)
        for r, m in zip(rows, matches):
            v = validate_item(
                db,
                partner_id=doc.partner_id,
                service_id=m.service_id,
                service_name_raw=r.service_name_raw,
                price_resident=r.price_resident_kzt,
                price_nonresident=r.price_nonresident_kzt,
                currency=r.currency_original,
                effective_date=doc.price_date,
            )
            if not v.is_valid:
                continue

            # Deactivate previous active prices for the same partner and service
            if m.service_id:
                db.query(PriceItem).filter(
                    PriceItem.partner_id == doc.partner_id,
                    PriceItem.service_id == m.service_id,
                    PriceItem.is_active == True,
                ).update({"is_active": False}, synchronize_session=False)
            else:
                db.query(PriceItem).filter(
                    PriceItem.partner_id == doc.partner_id,
                    PriceItem.service_name_raw == r.service_name_raw,
                    PriceItem.is_active == True,
                ).update({"is_active": False}, synchronize_session=False)

            item = PriceItem(
                doc_id=doc.doc_id,
                partner_id=doc.partner_id,
                service_id=m.service_id,
                service_name_raw=r.service_name_raw[:1024],
                service_code_source=r.service_code_source,
                price_resident_kzt=v.price_resident_kzt,
                price_nonresident_kzt=v.price_nonresident_kzt,
                currency_original=r.currency_original,
                match_score=m.score,
                match_status=m.status,
                is_active=True,
            )
            db.add(item)
            if m.service_id:
                matched += 1
                db.add(
                    PriceHistory(
                        partner_id=doc.partner_id,
                        service_id=m.service_id,
                        price_resident_kzt=v.price_resident_kzt,
                        price_nonresident_kzt=v.price_nonresident_kzt,
                        effective_date=doc.price_date or datetime.utcnow(),
                        source_doc_id=doc.doc_id,
                    )
                )
        doc.items_total = len(rows)
        doc.items_matched = matched
        doc.status = "done" if rows else "error"
        if not rows:
            doc.error_message = "Не удалось извлечь распознаваемые позиции"
    except Exception as e:  # noqa: BLE001
        doc.status = "error"
        doc.error_message = str(e)[:1000]

    db.commit()
    db.refresh(doc)
    return doc


def process_zip(db: Session, zip_path: Path, normalizer: Normalizer) -> List[PriceDocument]:
    """Synchronous fallback processing for all files in ZIP."""
    documents = register_upload(db, zip_path)
    for doc in documents:
        process_document(db, doc.doc_id, normalizer)
    return documents


def process_document_bg(doc_id: str):
    """Background task wrapper creating an isolated DB session."""
    from .db import SessionLocal
    with SessionLocal() as db:
        normalizer = load_normalizer(db)
        process_document(db, doc_id, normalizer)


def process_queue_bg(doc_ids: List[str]):
    """Background task worker processing queued documents sequentially one-by-one in natural order."""
    with _BG_QUEUE_LOCK:
        from .db import SessionLocal
        with SessionLocal() as db:
            normalizer = load_normalizer(db)
            docs = (
                db.query(PriceDocument)
                .filter(PriceDocument.doc_id.in_(doc_ids))
                .order_by(PriceDocument.uploaded_at.asc(), PriceDocument.filename.asc())
                .all()
            )
            for doc in docs:
                try:
                    logger.info(f"[Queue Worker] Processing queued document {doc.filename}...")
                    process_document(db, doc.doc_id, normalizer)
                except Exception as e:  # noqa: BLE001
                    logger.error(f"[Queue Worker] Error processing document {doc.doc_id}: {e}")
