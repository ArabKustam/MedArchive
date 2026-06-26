"""GET /meta/* — справочные значения для фильтров фронтенда."""
from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy import distinct, select
from sqlalchemy.orm import Session

from ..db import get_db
from ..models import Partner

router = APIRouter(prefix="/meta", tags=["meta"])


@router.get("/cities", response_model=list[str], summary="Список городов из БД партнёров")
def cities(db: Session = Depends(get_db)) -> list[str]:
    rows = db.execute(select(distinct(Partner.city)).order_by(Partner.city)).all()
    return [r[0] for r in rows if r[0]]


@router.get("/price-types", response_model=list[str], summary="Категории цен")
def price_types() -> list[str]:
    # Жёсткий enum по ТЗ: резидент / нерезидент / любая.
    return ["Любая", "Резидент", "Не-резидент"]
