"""GET /search — smart, precise relevance search across price items with unicode SQLite support."""
from __future__ import annotations

import re
from typing import Optional

from fastapi import APIRouter, Depends, Query
from sqlalchemy import select, or_, and_, String, cast, case, func, literal
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
    
    relevance_score = None
    
    if query:
        q_clean = query.strip().lower()
        q_clean_spaces = re.sub(r'\s+', ' ', q_clean)
        
        conditions = []
        
        # Exact short abbreviation logic (e.g. "кт", "мрт", "узи", "экг")
        if q_clean_spaces in ["кт", "kt"]:
            # Match standalone CT or computer tomography phrases using func.lower for unicode support
            abbr_patterns = [
                "кт %", "% кт %", "% кт", "%/кт%", "%(кт)%", "%кт-%", "кт-%", "%кт/%"
            ]
            for pat in abbr_patterns:
                conditions.append(func.lower(PriceItem.service_name_raw).like(pat))
                conditions.append(func.lower(Service.service_name).like(pat))
            
            conditions.append(func.lower(PriceItem.service_name_raw).like("кт"))
            conditions.append(func.lower(Service.service_name).like("кт"))
            
            # Full tomography forms
            conditions.append(func.lower(PriceItem.service_name_raw).like("%компьютерн%томограф%"))
            conditions.append(func.lower(Service.service_name).like("%компьютерн%томограф%"))
            conditions.append(func.lower(cast(Service.synonyms, String)).like("%компьютерн%томограф%"))
            
            # Relevance boost: items starting with "КТ" or containing "компьютерная томография" get rank 1!
            relevance_score = case(
                (func.lower(PriceItem.service_name_raw).like("кт%"), 1),
                (func.lower(PriceItem.service_name_raw).like("%компьютерн%томограф%"), 1),
                (func.lower(PriceItem.service_name_raw).like("%кт%"), 2),
                else_=3
            )
            
        elif q_clean_spaces in ["мрт", "mrt"]:
            abbr_patterns = ["мрт %", "% мрт %", "% мрт", "%/мрт%", "%(мрт)%", "%мрт-%", "мрт-%"]
            for pat in abbr_patterns:
                conditions.append(func.lower(PriceItem.service_name_raw).like(pat))
                conditions.append(func.lower(Service.service_name).like(pat))
            conditions.append(func.lower(PriceItem.service_name_raw).like("%магнитн%резонанс%"))
            conditions.append(func.lower(Service.service_name).like("%магнитн%резонанс%"))
            
            relevance_score = case(
                (func.lower(PriceItem.service_name_raw).like("мрт%"), 1),
                (func.lower(PriceItem.service_name_raw).like("%магнитн%резонанс%"), 1),
                (func.lower(PriceItem.service_name_raw).like("%мрт%"), 2),
                else_=3
            )

        elif q_clean_spaces in ["узи", "uzi"]:
            abbr_patterns = ["узи %", "% узи %", "% узи", "%/узи%", "%(узи)%", "%узи-%", "узи-%"]
            for pat in abbr_patterns:
                conditions.append(func.lower(PriceItem.service_name_raw).like(pat))
                conditions.append(func.lower(Service.service_name).like(pat))
            conditions.append(func.lower(PriceItem.service_name_raw).like("%ультразвук%"))
            conditions.append(func.lower(Service.service_name).like("%ультразвук%"))
            
            relevance_score = case(
                (func.lower(PriceItem.service_name_raw).like("узи%"), 1),
                (func.lower(PriceItem.service_name_raw).like("%ультразвук%"), 1),
                (func.lower(PriceItem.service_name_raw).like("%узи%"), 2),
                else_=3
            )
            
        else:
            # Standard query matching using unicode lower
            conditions.append(func.lower(PriceItem.service_name_raw).like(f"%{q_clean_spaces}%"))
            conditions.append(func.lower(Service.service_name).like(f"%{q_clean_spaces}%"))
            conditions.append(func.lower(cast(Service.synonyms, String)).like(f"%{q_clean_spaces}%"))
            
            relevance_score = case(
                (func.lower(PriceItem.service_name_raw).like(f"{q_clean_spaces}%"), 1),
                (func.lower(PriceItem.service_name_raw).like(f"%{q_clean_spaces}%"), 2),
                else_=3
            )

        stmt = stmt.outerjoin(Service, Service.service_id == PriceItem.service_id).where(or_(*conditions))

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
        if relevance_score is not None:
            stmt = stmt.order_by(relevance_score.asc(), PriceItem.service_name_raw.asc())
        else:
            stmt = stmt.order_by(PriceItem.match_score.desc(), PriceItem.service_name_raw.asc())

    page_res = paginate(db, stmt, pg, PriceItemOut)

    # Populate partner_name, filename, and category for UI display
    if page_res.items:
        p_ids = {item.partner_id for item in page_res.items}
        d_ids = {item.doc_id for item in page_res.items}
        s_ids = {item.service_id for item in page_res.items if item.service_id}
        
        partners_map = dict(
            db.query(Partner.partner_id, Partner.name).filter(Partner.partner_id.in_(p_ids)).all()
        )
        docs_map = dict(
            db.query(PriceDocument.doc_id, PriceDocument.filename).filter(PriceDocument.doc_id.in_(d_ids)).all()
        )
        services_map = dict(
            db.query(Service.service_id, Service.category).filter(Service.service_id.in_(s_ids)).all()
        ) if s_ids else {}
        
        for item in page_res.items:
            item.partner_name = partners_map.get(item.partner_id)
            item.filename = docs_map.get(item.doc_id)
            if item.service_id:
                item.category = services_map.get(item.service_id) or "Общая медицина"
            else:
                item.category = "Не сопоставлено"
            
    return page_res
