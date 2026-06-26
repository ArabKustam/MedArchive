"""GET /partners, GET /partners/{id}."""
from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..db import get_db
from ..deps import Pagination, paginate, pagination_params
from ..models import Partner, PriceItem
from ..schemas import Page, PartnerOut, PriceItemOut

router = APIRouter(prefix="/partners", tags=["partners"])


@router.get("", response_model=Page[PartnerOut], summary="Список клиник-партнёров")
def list_partners(
    query: Optional[str] = Query(None, description="Поиск по названию"),
    city: Optional[str] = Query(None),
    status: Optional[str] = Query(None, pattern="^(active|paused)$"),
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    stmt = select(Partner)
    if query:
        stmt = stmt.where(Partner.name.ilike(f"%{query}%"))
    if city:
        stmt = stmt.where(Partner.city == city)
    if status:
        stmt = stmt.where(Partner.status == status)
    stmt = stmt.order_by(Partner.name)
    return paginate(db, stmt, pg, PartnerOut)


@router.get("/{partner_id}", response_model=PartnerOut)
def get_partner(partner_id: str, db: Session = Depends(get_db)):
    p = db.get(Partner, partner_id)
    if not p:
        raise HTTPException(404, "Partner not found")
    return p


@router.get(
    "/{partner_id}/prices",
    response_model=Page[PriceItemOut],
    summary="Прайс-лист партнёра (текущие позиции)",
)
def partner_prices(
    partner_id: str,
    query: Optional[str] = Query(None),
    match_status: Optional[str] = Query(None),
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    if not db.get(Partner, partner_id):
        raise HTTPException(404, "Partner not found")
    stmt = select(PriceItem).where(PriceItem.partner_id == partner_id)
    if query:
        stmt = stmt.where(PriceItem.service_name_raw.ilike(f"%{query}%"))
    if match_status:
        stmt = stmt.where(PriceItem.match_status == match_status)
    stmt = stmt.order_by(PriceItem.service_name_raw)
    return paginate(db, stmt, pg, PriceItemOut)
