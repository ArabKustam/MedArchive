"""GET /meta/* — справочные значения для фильтров и выпадающих списков фронтенда."""
from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy import distinct, select
from sqlalchemy.orm import Session

from ..db import get_db
from ..models import Partner, PriceDocument
from ..schemas import DocumentMetaOut

router = APIRouter(prefix="/meta", tags=["meta"])


@router.get("/cities", response_model=list[str], summary="Список городов из БД партнёров")
def cities(db: Session = Depends(get_db)) -> list[str]:
    """Возвращает отсортированный список уникальных городов, в которых расположены клиники-партнёры."""
    rows = db.execute(select(distinct(Partner.city)).order_by(Partner.city)).all()
    return [r[0] for r in rows if r[0]]


@router.get("/price-types", response_model=list[str], summary="Категории цен")
def price_types() -> list[str]:
    """Возвращает варианты категорий цен для фильтрации (согласно техническому заданию)."""
    # Фиксированный список категорий цен по ТЗ: Любая / Резидент / Не-резидент
    return ["Любая", "Резидент", "Не-резидент"]


@router.get("/documents", response_model=list[DocumentMetaOut], summary="Список загруженных документов")
def documents(db: Session = Depends(get_db)) -> list[DocumentMetaOut]:
    """Возвращает список всех обработанных прайс-листов для селекторов фильтрации."""
    docs = db.execute(select(PriceDocument).order_by(PriceDocument.filename)).scalars().all()
    return docs


