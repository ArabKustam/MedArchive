"""GET /search — full-text search across price items."""
from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, Depends, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..db import get_db
from ..deps import Pagination, paginate, pagination_params
from ..models import Partner, PriceItem
from ..schemas import Page, PriceItemOut

router = APIRouter(prefix="/search", tags=["search"])


@router.get("", response_model=Page[PriceItemOut], summary="Поиск позиций прайса")
def search(
    query: str = Query("", description="Подстрока в названии услуги"),
    city: Optional[str] = Query(None),
    partner_id: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None, ge=0),
    max_price: Optional[float] = Query(None, ge=0),
    matched_only: bool = Query(False, description="Только сопоставленные со справочником"),
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    stmt = select(PriceItem)
    if query:
        stmt = stmt.where(PriceItem.service_name_raw.ilike(f"%{query}%"))
    if partner_id:
        stmt = stmt.where(PriceItem.partner_id == partner_id)
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
    stmt = stmt.order_by(PriceItem.match_score.desc(), PriceItem.service_name_raw)
    return paginate(db, stmt, pg, PriceItemOut)
