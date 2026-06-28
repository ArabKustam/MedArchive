"""GET /admin/stats & POST /admin/reset — dashboard metrics and clear database endpoints."""
from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy import distinct, func
from sqlalchemy.orm import Session

from ..db import get_db
from ..models import Partner, PriceDocument, PriceHistory, PriceItem, Service

router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/stats")
def admin_stats(db: Session = Depends(get_db)) -> dict:
    total_documents = db.query(func.count(PriceDocument.doc_id)).scalar() or 0

    by_status_rows = (
        db.query(PriceDocument.status, func.count(PriceDocument.doc_id))
        .group_by(PriceDocument.status)
        .all()
    )
    by_status = {status: count for status, count in by_status_rows}

    total_items = db.query(func.count(PriceItem.item_id)).scalar() or 0
    auto_matched = (
        db.query(func.count(PriceItem.item_id))
        .filter(PriceItem.match_status.in_(("auto", "verified")))
        .scalar()
        or 0
    )
    review = (
        db.query(func.count(PriceItem.item_id))
        .filter(PriceItem.match_status == "review")
        .scalar()
        or 0
    )
    unmatched = (
        db.query(func.count(PriceItem.item_id))
        .filter(PriceItem.service_id.is_(None))
        .scalar()
        or 0
    )

    services_covered = (
        db.query(func.count(distinct(PriceItem.service_id)))
        .filter(PriceItem.service_id.isnot(None))
        .scalar()
        or 0
    )
    partners_count = db.query(func.count(distinct(PriceDocument.partner_id))).scalar() or 0
    services_total = db.query(func.count(Service.service_id)).scalar() or 0

    match_rate = round(auto_matched / total_items * 100, 1) if total_items else 0.0

    return {
        "total_documents": total_documents,
        "by_status": by_status,
        "total_price_items": total_items,
        "auto_matched": auto_matched,
        "review": review,
        "unmatched": unmatched,
        "match_rate": match_rate,
        "partners_count": partners_count,
        "services_total": services_total,
        "services_covered": services_covered,
    }


@router.post("/reset")
def reset_database(db: Session = Depends(get_db)) -> dict:
    """Clear all uploaded documents, price items, price histories, and partners."""
    db.query(PriceHistory).delete(synchronize_session=False)
    db.query(PriceItem).delete(synchronize_session=False)
    db.query(PriceDocument).delete(synchronize_session=False)
    db.query(Partner).delete(synchronize_session=False)
    db.commit()
    return {"message": "База данных успешно очищена"}
