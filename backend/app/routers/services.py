"""GET /services, GET /services/{id}/partners."""
from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..db import get_db
from ..deps import Pagination, paginate, pagination_params
from ..models import Partner, PriceItem, Service
from ..schemas import Page, ServiceOut, ServicePartnerPrice, PartnerOut

router = APIRouter(prefix="/services", tags=["services"])


@router.get("", response_model=Page[ServiceOut], summary="Список услуг справочника")
def list_services(
    query: Optional[str] = Query(None, description="Поиск по названию"),
    category: Optional[str] = Query(None, description="Фильтр по категории"),
    is_active: Optional[bool] = Query(None),
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    stmt = select(Service)
    if query:
        stmt = stmt.where(Service.service_name.ilike(f"%{query}%"))
    if category:
        stmt = stmt.where(Service.category == category)
    if is_active is not None:
        stmt = stmt.where(Service.is_active.is_(is_active))
    stmt = stmt.order_by(Service.service_name)
    return paginate(db, stmt, pg, ServiceOut)


@router.get("/{service_id}", response_model=ServiceOut, summary="Карточка услуги")
def get_service(service_id: str, db: Session = Depends(get_db)):
    s = db.get(Service, service_id)
    if not s:
        raise HTTPException(404, "Service not found")
    return s


@router.get(
    "/{service_id}/partners",
    response_model=Page[ServicePartnerPrice],
    summary="Партнёры, оказывающие услугу, с актуальными ценами",
)
def list_service_partners(
    service_id: str,
    city: Optional[str] = Query(None),
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    if not db.get(Service, service_id):
        raise HTTPException(404, "Service not found")

    stmt = (
        select(PriceItem, Partner)
        .join(Partner, Partner.partner_id == PriceItem.partner_id)
        .where(PriceItem.service_id == service_id)
    )
    if city:
        stmt = stmt.where(Partner.city == city)
    stmt = stmt.order_by(PriceItem.price_resident_kzt.asc().nullslast())

    total_stmt = select(PriceItem).where(PriceItem.service_id == service_id)
    if city:
        total_stmt = total_stmt.join(Partner).where(Partner.city == city)

    from sqlalchemy import func

    total = db.scalar(select(func.count()).select_from(total_stmt.subquery())) or 0
    rows = db.execute(stmt.offset(pg.offset).limit(pg.limit)).all()

    items = [
        ServicePartnerPrice(
            partner=PartnerOut.model_validate(partner),
            price_resident_kzt=item.price_resident_kzt,
            price_nonresident_kzt=item.price_nonresident_kzt,
            doc_id=item.doc_id,
        )
        for item, partner in rows
    ]
    from math import ceil

    return Page[ServicePartnerPrice](
        items=items,
        page=pg.page,
        page_size=pg.page_size,
        total=total,
        pages=max(1, ceil(total / pg.page_size)) if total else 0,
    )
