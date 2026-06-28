"""Verification queue: items awaiting manual review with reason classification and live source context."""
from __future__ import annotations

from math import ceil
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import or_, select, func
from sqlalchemy.orm import Session

from ..db import get_db
from ..models import Partner, PriceDocument, PriceItem, Service
from ..normalize import load_normalizer
from ..schemas import (
    Page,
    VerificationCandidate,
    VerificationDecision,
    VerificationItemOut,
)

router = APIRouter(prefix="/verification", tags=["verification"])


def _determine_review_reason(it: PriceItem) -> tuple[str, str]:
    """Classify why this item ended up in the review queue."""
    price = it.price_resident_kzt or it.price_nonresident_kzt or 0.0
    if price > 0 and price < 1000.0:
        return "suspicious_price", "Подозрительная цена"
    if it.match_status == "unmatched" or not it.service_id:
        return "unmatched", "Нет в справочнике"
    if it.match_score < 0.75:
        return "low_match", "Низкое совпадение"
    return "manual_flag", "Нужна привязка"


@router.get("/queue", response_model=Page[VerificationItemOut])
def queue(
    partner_id: Optional[str] = Query(None),
    reason: Optional[str] = Query(None),
    page: int = Query(1, ge=1),
    page_size: int = Query(50, ge=1, le=500),
    db: Session = Depends(get_db),
):
    base_query = db.query(PriceItem).filter(PriceItem.match_status.in_(("review", "unmatched")))

    if isinstance(partner_id, str) and partner_id.strip() and partner_id != "None":
        base_query = base_query.filter(PriceItem.partner_id == partner_id)

    # Apply reason filter directly in SQL for instant query execution & accurate counts
    if isinstance(reason, str) and reason and reason != "all" and reason != "None":
        if reason == "suspicious_price":
            base_query = base_query.filter(
                or_(
                    (PriceItem.price_resident_kzt > 0) & (PriceItem.price_resident_kzt < 1000.0),
                    (PriceItem.price_nonresident_kzt > 0) & (PriceItem.price_nonresident_kzt < 1000.0),
                )
            )
        elif reason == "unmatched":
            base_query = base_query.filter(or_(PriceItem.match_status == "unmatched", PriceItem.service_id.is_(None)))
        elif reason == "low_match":
            base_query = base_query.filter(PriceItem.match_score < 0.75)

    # Fast SQL count
    total_count = base_query.count()

    # Apply SQL pagination offset & limit directly
    offset = (page - 1) * page_size
    paged_raw_items = base_query.order_by(PriceItem.created_at.desc()).offset(offset).limit(page_size).all()

    normalizer = load_normalizer(db)
    by_id = {s.service_id: s for s in db.query(Service).all()}
    partners = {p.partner_id: p for p in db.query(Partner).all()}
    docs = {d.doc_id: d for d in db.query(PriceDocument).all()}

    # Batch match all candidates at once for instant response speed
    raw_names = [it.service_name_raw for it in paged_raw_items]
    batch_matches = normalizer.match_batch(raw_names, top_k=5) if raw_names else []

    items_out = []
    for it, m in zip(paged_raw_items, batch_matches):
        reason_code, reason_text = _determine_review_reason(it)
        cands = [
            VerificationCandidate(
                service_id=sid,
                service_name=by_id[sid].service_name if sid in by_id else "",
                category=by_id[sid].category if sid in by_id else "",
                score=round(score, 3),
            )
            for sid, score in m.candidates
            if sid in by_id
        ]

        snippet = f"Строка из файла: {it.service_code_source or ''} {it.service_name_raw} — {it.price_resident_kzt or 0} ₸"

        items_out.append(
            VerificationItemOut(
                item_id=it.item_id,
                partner_id=it.partner_id,
                partner_name=partners[it.partner_id].name if it.partner_id in partners else "",
                doc_id=it.doc_id,
                filename=docs[it.doc_id].filename if it.doc_id in docs else "",
                service_name_raw=it.service_name_raw,
                price_resident_kzt=it.price_resident_kzt,
                price_nonresident_kzt=it.price_nonresident_kzt,
                candidates=cands,
                reason=reason_code,
                reason_label=reason_text,
                page_number=1,
                raw_context_snippet=snippet,
                match_score=it.match_score,
            )
        )

    return Page[VerificationItemOut](
        items=items_out,
        page=page,
        page_size=page_size,
        total=total_count,
        pages=max(1, ceil(total_count / page_size)) if total_count else 0,
    )


@router.post("/{item_id}/decide", response_model=VerificationItemOut)
def decide(item_id: str, decision: VerificationDecision, db: Session = Depends(get_db)):
    item = db.get(PriceItem, item_id)
    if not item:
        raise HTTPException(404, "Item not found")

    if decision.updated_price_resident is not None:
        item.price_resident_kzt = decision.updated_price_resident
    if decision.updated_price_nonresident is not None:
        item.price_nonresident_kzt = decision.updated_price_nonresident
    if decision.updated_service_name:
        item.service_name_raw = decision.updated_service_name

    if decision.action in ("accept", "update_and_accept") and decision.service_id:
        item.service_id = decision.service_id
        item.match_status = "verified"
        item.match_score = 1.0
    elif decision.action == "reject":
        item.service_id = None
        item.match_status = "unmatched"
    elif decision.action == "create_new" and (decision.new_service_name or decision.updated_service_name):
        svc_name = decision.new_service_name or decision.updated_service_name or item.service_name_raw
        svc = Service(
            service_name=svc_name,
            category=decision.new_category or "Общие",
        )
        db.add(svc)
        db.flush()
        item.service_id = svc.service_id
        item.match_status = "verified"
        item.match_score = 1.0
    else:
        item.match_status = "verified"
        item.match_score = 1.0

    db.commit()
    db.refresh(item)

    reason_code, reason_text = _determine_review_reason(item)
    return VerificationItemOut(
        item_id=item.item_id,
        partner_id=item.partner_id,
        partner_name="",
        doc_id=item.doc_id,
        filename="",
        service_name_raw=item.service_name_raw,
        price_resident_kzt=item.price_resident_kzt,
        price_nonresident_kzt=item.price_nonresident_kzt,
        candidates=[],
        reason=reason_code,
        reason_label=reason_text,
        page_number=1,
        raw_context_snippet="",
        match_score=item.match_score,
    )
