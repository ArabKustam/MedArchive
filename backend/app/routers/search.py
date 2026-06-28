"""GET /search — full-text domain-specific contextual search across price items."""
from __future__ import annotations

import re
from typing import List, Optional

from fastapi import APIRouter, Depends, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..db import get_db
from ..deps import Pagination, paginate, pagination_params
from ..models import Partner, PriceDocument, PriceItem, Service
from ..schemas import Page, PriceItemOut

router = APIRouter(prefix="/search", tags=["search"])

MEDICAL_SYNONYMS_MAP = {
    "кт": ["компьютерная томография", "компьютерная", "мскт"],
    "мскт": ["кт", "компьютерная томография", "компьютерная"],
    "компьютерная": ["кт", "мскт", "компьютерная томография"],
    "мрт": ["магнитно-резонансная томография", "магнитно резонансная томография", "магнитно-резонансная"],
    "узи": ["ультразвуковое исследование", "ультразвук", "ультразвуковая"],
    "экг": ["электрокардиография", "электрокардиограмма"],
    "фгдс": ["фиброгастродуоденоскопия", "гастроскопия"],
    "оак": ["общий анализ крови"],
    "оам": ["общий анализ мочи"],
}


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
    
    q_clean = query.strip().lower()
    expanded_terms: List[str] = []
    if q_clean:
        synonyms = MEDICAL_SYNONYMS_MAP.get(q_clean, [])
        expanded_terms = [q_clean] + synonyms

    if expanded_terms:
        from sqlalchemy import or_
        conditions = []
        for t in expanded_terms:
            conditions.append(PriceItem.service_name_raw.ilike(f"%{t}%"))
        stmt = stmt.where(or_(*conditions))

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

    # Fetch all database candidates to apply Word-Boundary Filtering & Custom Relevance Ranking
    raw_candidates: List[PriceItem] = db.scalars(stmt).all()

    filtered_items: List[PriceItem] = []
    if q_clean and len(q_clean) <= 4:
        # Word-Boundary Matching for short medical acronyms (e.g. КТ, МРТ, УЗИ)
        pattern_str = r"(?i)\b(" + "|".join([re.escape(t) for t in expanded_terms]) + r")\b"
        wb_regex = re.compile(pattern_str)
        for item in raw_candidates:
            if wb_regex.search(item.service_name_raw):
                filtered_items.append(item)
    elif expanded_terms:
        pattern_str = r"(?i)(" + "|".join([re.escape(t) for t in expanded_terms]) + r")"
        sub_regex = re.compile(pattern_str)
        for item in raw_candidates:
            if sub_regex.search(item.service_name_raw):
                filtered_items.append(item)
    else:
        filtered_items = raw_candidates

    # Custom Relevance Ranking Engine
    def calc_rank_tuple(item: PriceItem):
        text = item.service_name_raw.lower()
        exact_acronym_match = 0
        if q_clean:
            # Word boundary match of exact user query
            if re.search(r"(?i)\b" + re.escape(q_clean) + r"\b", item.service_name_raw):
                exact_acronym_match = 2
            elif any(re.search(r"(?i)\b" + re.escape(t) + r"\b", item.service_name_raw) for t in expanded_terms):
                exact_acronym_match = 1

        if sort_by == "price_asc":
            return (item.price_resident_kzt if item.price_resident_kzt is not None else float("inf"))
        elif sort_by == "price_desc":
            return (-(item.price_resident_kzt or 0))
        elif sort_by == "name_asc":
            return item.service_name_raw
        elif sort_by == "name_desc":
            return item.service_name_raw
        elif sort_by == "match_score_desc":
            return (-(item.match_score or 0))
        else:
            # Relevance: Exact acronym match top 1 -> match_score -> name
            return (-exact_acronym_match, -(item.match_score or 0), item.service_name_raw)

    if sort_by in ("name_desc",):
        filtered_items.sort(key=calc_rank_tuple, reverse=True)
    else:
        filtered_items.sort(key=calc_rank_tuple)

    total = len(filtered_items)
    start_idx = (pg.page - 1) * pg.page_size
    end_idx = start_idx + pg.page_size
    page_items_models = filtered_items[start_idx:end_idx]

    # Convert models to DTOs
    dto_items = [PriceItemOut.model_validate(m) for m in page_items_models]

    # Populate partner_name, filename, and category for UI display
    if dto_items:
        p_ids = {item.partner_id for item in dto_items if item.partner_id}
        d_ids = {item.doc_id for item in dto_items if item.doc_id}
        s_ids = {item.service_id for item in dto_items if item.service_id}

        partners_map = dict(
            db.query(Partner.partner_id, Partner.name).filter(Partner.partner_id.in_(p_ids)).all()
        ) if p_ids else {}
        docs_map = dict(
            db.query(PriceDocument.doc_id, PriceDocument.filename).filter(PriceDocument.doc_id.in_(d_ids)).all()
        ) if d_ids else {}
        services_map = dict(
            db.query(Service.service_id, Service.category).filter(Service.service_id.in_(s_ids)).all()
        ) if s_ids else {}

        for item in dto_items:
            item.partner_name = partners_map.get(item.partner_id)
            item.filename = docs_map.get(item.doc_id)
            if item.service_id and item.service_id in services_map:
                item.category = services_map[item.service_id]

    pages_count = (total + pg.page_size - 1) // pg.page_size if pg.page_size > 0 else 1
    return Page[PriceItemOut](
        items=dto_items,
        page=pg.page,
        page_size=pg.page_size,
        total=total,
        pages=pages_count,
    )

