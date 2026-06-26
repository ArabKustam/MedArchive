"""Verification queue: items awaiting manual review."""
from __future__ import annotations

from math import ceil
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..db import get_db
from ..deps import Pagination, pagination_params
from ..models import Partner, PriceDocument, PriceItem, Service
from ..normalize import load_normalizer
from ..schemas import (
    Page,
    VerificationCandidate,
    VerificationDecision,
    VerificationItemOut,
)

router = APIRouter(prefix="/verification", tags=["verification"])


@router.get("/queue", response_model=Page[VerificationItemOut])
def queue(
    partner_id: Optional[str] = Query(None),
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    base = select(PriceItem).where(PriceItem.match_status == "review")
    if partner_id:
        base = base.where(PriceItem.partner_id == partner_id)
    from sqlalchemy import func

    total = db.scalar(select(func.count()).select_from(base.subquery())) or 0
    items = (
        db.execute(base.order_by(PriceItem.created_at.desc()).offset(pg.offset).limit(pg.limit))
        .scalars()
        .all()
    )

    normalizer = load_normalizer(db)
    by_id = {s.service_id: s for s in db.query(Service).all()}
    partners = {p.partner_id: p for p in db.query(Partner).all()}
    docs = {d.doc_id: d for d in db.query(PriceDocument).all()}

    out = []
    for it in items:
        m = normalizer.match(it.service_name_raw, top_k=5)
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
        out.append(
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
            )
        )
    return Page[VerificationItemOut](
        items=out,
        page=pg.page,
        page_size=pg.page_size,
        total=total,
        pages=max(1, ceil(total / pg.page_size)) if total else 0,
    )


@router.post("/{item_id}/decide", response_model=VerificationItemOut)
def decide(item_id: str, decision: VerificationDecision, db: Session = Depends(get_db)):
    item = db.get(PriceItem, item_id)
    if not item:
        raise HTTPException(404, "Item not found")

    if decision.action == "accept" and decision.service_id:
        item.service_id = decision.service_id
        item.match_status = "verified"
        item.match_score = 1.0
    elif decision.action == "reject":
        item.service_id = None
        item.match_status = "unmatched"
    elif decision.action == "create_new" and decision.new_service_name:
        svc = Service(
            service_name=decision.new_service_name,
            category=decision.new_category or "",
        )
        db.add(svc)
        db.flush()
        item.service_id = svc.service_id
        item.match_status = "verified"
        item.match_score = 1.0
    else:
        raise HTTPException(400, "Invalid decision")

    db.commit()
    db.refresh(item)
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
    )
