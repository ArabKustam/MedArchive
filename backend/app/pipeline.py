"""End-to-end pipeline: ZIP → parsed rows → DB rows with matched services."""
from __future__ import annotations

import re
import shutil
import tempfile
from datetime import datetime
from pathlib import Path
from typing import List

from sqlalchemy.orm import Session

from .models import Partner, PriceDocument, PriceHistory, PriceItem
from .normalize import Normalizer
from .parsers import iter_archive, parse_file

DATE_RE = re.compile(r"(20\d{2})[._-]?(\d{1,2})?[._-]?(\d{1,2})?")


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


def process_zip(db: Session, zip_path: Path, normalizer: Normalizer) -> List[PriceDocument]:
    work = Path(tempfile.mkdtemp(prefix="medarchive_"))
    documents: List[PriceDocument] = []
    try:
        for file_path in iter_archive(zip_path, work):
            partner_name = _partner_name_from_filename(file_path.name)
            partner = _get_or_create_partner(db, partner_name)

            doc = PriceDocument(
                partner_id=partner.partner_id,
                filename=file_path.name,
                file_type=file_path.suffix.lower().lstrip("."),
                status="processing",
                price_date=_date_from_filename(file_path.name),
                storage_path=str(file_path),
            )
            db.add(doc)
            db.flush()

            try:
                file_type, rows = parse_file(file_path)
                doc.file_type = file_type
                matched = 0
                for r in rows:
                    m = normalizer.match(r.service_name_raw)
                    item = PriceItem(
                        doc_id=doc.doc_id,
                        partner_id=partner.partner_id,
                        service_id=m.service_id,
                        service_name_raw=r.service_name_raw[:1024],
                        service_code_source=r.service_code_source,
                        price_resident_kzt=r.price_resident_kzt,
                        price_nonresident_kzt=r.price_nonresident_kzt,
                        currency_original=r.currency_original,
                        match_score=m.score,
                        match_status=m.status,
                    )
                    db.add(item)
                    if m.service_id:
                        matched += 1
                        db.add(
                            PriceHistory(
                                partner_id=partner.partner_id,
                                service_id=m.service_id,
                                price_resident_kzt=r.price_resident_kzt,
                                price_nonresident_kzt=r.price_nonresident_kzt,
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
            documents.append(doc)
        db.commit()
    finally:
        shutil.rmtree(work, ignore_errors=True)
    return documents
