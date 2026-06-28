"""GET & POST /documents — list, process, and manage uploaded price documents."""
from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..db import get_db
from ..deps import Pagination, paginate, pagination_params
from ..models import PriceDocument, PriceItem, PriceHistory
from ..normalize import load_normalizer
from ..pipeline import process_document
from ..schemas import Page, PriceDocumentOut, PriceItemOut

router = APIRouter(prefix="/documents", tags=["documents"])


@router.get("", response_model=Page[PriceDocumentOut])
def list_documents(
    partner_id: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    stmt = select(PriceDocument)
    if partner_id:
        stmt = stmt.where(PriceDocument.partner_id == partner_id)
    if status:
        stmt = stmt.where(PriceDocument.status == status)
    stmt = stmt.order_by(PriceDocument.uploaded_at.asc(), PriceDocument.filename.asc())
    return paginate(db, stmt, pg, PriceDocumentOut)


@router.get("/{doc_id}", response_model=PriceDocumentOut)
def get_document(doc_id: str, db: Session = Depends(get_db)):
    d = db.get(PriceDocument, doc_id)
    if not d:
        raise HTTPException(404, "Document not found")
    return d


@router.get("/{doc_id}/items", response_model=Page[PriceItemOut], summary="Получить спаршенные позиции документа")
def get_document_items(
    doc_id: str,
    pg: Pagination = Depends(pagination_params),
    db: Session = Depends(get_db),
):
    stmt = select(PriceItem).where(PriceItem.doc_id == doc_id).order_by(PriceItem.item_id.asc())
    return paginate(db, stmt, pg, PriceItemOut)


@router.post("/{doc_id}/process", response_model=PriceDocumentOut, summary="Обработать конкретный документ (OCR / парсинг / Реран)")
def process_single_document(doc_id: str, db: Session = Depends(get_db)):
    import threading
    from ..pipeline import process_document_bg
    updated = db.query(PriceDocument).filter(PriceDocument.doc_id == doc_id).update(
        {"status": "processing", "error_message": None},
        synchronize_session=False,
    )
    if not updated:
        raise HTTPException(404, "Document not found")
    db.commit()
    d = db.get(PriceDocument, doc_id)
    threading.Thread(target=process_document_bg, args=(doc_id,), daemon=True).start()
    return d


@router.post("/process-all", summary="Запустить обработку всех документов в очереди")
def process_all_queued(db: Session = Depends(get_db)):
    import threading
    from ..pipeline import process_queue_bg
    queued_docs = db.query(PriceDocument.doc_id).filter(PriceDocument.status == "queued").all()
    doc_ids = [d[0] for d in queued_docs]
    if doc_ids:
        threading.Thread(target=process_queue_bg, args=(doc_ids,), daemon=True).start()
    return {"message": f"Запущена обработка {len(doc_ids)} документов", "queued_count": len(doc_ids)}


@router.delete("/{doc_id}", summary="Удалить документ прайс-листа")
def delete_document(doc_id: str, db: Session = Depends(get_db)):
    d = db.get(PriceDocument, doc_id)
    if not d:
        raise HTTPException(404, "Document not found")
    
    partner_id = d.partner_id
    storage_path = d.storage_path

    # 1. Delete associated PriceItems
    db.query(PriceItem).filter(PriceItem.doc_id == doc_id).delete(synchronize_session=False)
    
    # 2. Delete associated PriceHistories
    db.query(PriceHistory).filter(PriceHistory.source_doc_id == doc_id).delete(synchronize_session=False)
    
    # 3. Delete the document record cleanly via query
    db.query(PriceDocument).filter(PriceDocument.doc_id == doc_id).delete(synchronize_session=False)
    db.commit()

    # 4. Remove file from disk
    if storage_path:
        from pathlib import Path
        p = Path(storage_path)
        if p.exists():
            try:
                p.unlink()
            except Exception:
                pass

    # 5. Check if partner has any remaining documents, if not delete partner
    remaining_docs = db.query(PriceDocument).filter(PriceDocument.partner_id == partner_id).count()
    if remaining_docs == 0:
        from ..models import Partner
        db.query(Partner).filter(Partner.partner_id == partner_id).delete(synchronize_session=False)
        db.commit()

    return {"message": "Document deleted successfully"}
