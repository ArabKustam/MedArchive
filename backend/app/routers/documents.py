"""GET /documents — list of uploaded price documents."""
from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..db import get_db
from ..deps import Pagination, paginate, pagination_params
from ..models import PriceDocument
from ..schemas import Page, PriceDocumentOut

router = APIRouter(prefix="/documents", tags=["documents"])


@router.get("", response_model=Page[PriceDocumentOut])
def list_documents(
    partner_id: Optional[str] = Query(None),
    status: Optional[str] = Query(None, pattern="^(queued|processing|done|error)$"),
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    stmt = select(PriceDocument)
    if partner_id:
        stmt = stmt.where(PriceDocument.partner_id == partner_id)
    if status:
        stmt = stmt.where(PriceDocument.status == status)
    stmt = stmt.order_by(PriceDocument.uploaded_at.desc())
    return paginate(db, stmt, pg, PriceDocumentOut)


@router.get("/{doc_id}", response_model=PriceDocumentOut)
def get_document(doc_id: str, db: Session = Depends(get_db)):
    d = db.get(PriceDocument, doc_id)
    if not d:
        raise HTTPException(404, "Document not found")
    return d
