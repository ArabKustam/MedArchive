"""GET /search — full-text search across price items."""
from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, Depends, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..db import get_db
from ..deps import Pagination, paginate, pagination_params
from ..models import Partner, PriceDocument, PriceItem, Service
from ..schemas import Page, PriceItemOut

router = APIRouter(prefix="/search", tags=["search"])


@router.get("", response_model=Page[PriceItemOut], summary="Поиск позиций прайса")
def search(
    query: str = Query("", description="Подстрока в названии услуги"),
    city: Optional[str] = Query(None),
    partner_id: Optional[str] = Query(None),
    doc_id: Optional[str] = Query(None, description="Фильтр по конкретному документу"),
    min_price: Optional[float] = Query(None, ge=0),
    max_price: Optional[float] = Query(None, ge=0),
    matched_only: bool = Query(False, description="Только сопоставленные со справочником"),
    sort_by: Optional[str] = Query("relevance", description="Сортировка: relevance|price_asc|price_desc|name_asc|name_desc|match_score_desc|filename_asc"),
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    stmt = select(PriceItem).where(PriceItem.is_active == True)
    if query:
        stmt = stmt.where(PriceItem.service_name_raw.ilike(f"%{query}%"))
    if partner_id:
        stmt = stmt.where(PriceItem.partner_id == partner_id)
    if doc_id:
        stmt = stmt.where(PriceItem.doc_id == doc_id)
    if city:
        stmt = stmt.join(Partner, Partner.partner_id == PriceItem.partner_id).where(
            Partner.city == city
        )
    if min_price is not None:
        stmt = stmt.where(PriceItem.price_resident_kzt >= min_price)
    if max_price is not None:
        stmt = stmt.where(PriceItem.price_resident_kzt <= max_price)
    if matched_only:
        stmt = stmt.where(PriceItem.service_id.is_not(None))

    # Sorting logic
    if sort_by == "price_asc":
        stmt = stmt.order_by(PriceItem.price_resident_kzt.asc().nullslast())
    elif sort_by == "price_desc":
        stmt = stmt.order_by(PriceItem.price_resident_kzt.desc().nullslast())
    elif sort_by == "name_asc":
        stmt = stmt.order_by(PriceItem.service_name_raw.asc())
    elif sort_by == "name_desc":
        stmt = stmt.order_by(PriceItem.service_name_raw.desc())
    elif sort_by == "match_score_desc":
        stmt = stmt.order_by(PriceItem.match_score.desc())
    elif sort_by == "filename_asc":
        stmt = stmt.join(PriceDocument, PriceDocument.doc_id == PriceItem.doc_id).order_by(PriceDocument.filename.asc())
    else:
        stmt = stmt.order_by(PriceItem.match_score.desc(), PriceItem.service_name_raw)

    page_res = paginate(db, stmt, pg, PriceItemOut)

    # Populate partner_name, filename, and category for UI display
    if page_res.items:
        p_ids = {item.partner_id for item in page_res.items if item.partner_id}
        d_ids = {item.doc_id for item in page_res.items if item.doc_id}
        s_ids = {item.service_id for item in page_res.items if item.service_id}

        partners_map = dict(
            db.query(Partner.partner_id, Partner.name).filter(Partner.partner_id.in_(p_ids)).all()
        ) if p_ids else {}
        docs_map = dict(
            db.query(PriceDocument.doc_id, PriceDocument.filename).filter(PriceDocument.doc_id.in_(d_ids)).all()
        ) if d_ids else {}
        services_map = dict(
            db.query(Service.service_id, Service.category).filter(Service.service_id.in_(s_ids)).all()
        ) if s_ids else {}

        for item in page_res.items:
            item.partner_name = partners_map.get(item.partner_id)
            item.filename = docs_map.get(item.doc_id)
            if item.service_id and item.service_id in services_map:
                item.category = services_map[item.service_id]
            
    return page_res

