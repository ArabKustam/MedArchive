"""POST /upload — accept a ZIP archive of price lists and process it."""
from __future__ import annotations

import tempfile
from pathlib import Path

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from ..db import get_db
from ..normalize import load_normalizer
from ..pipeline import process_zip
from ..schemas import PriceDocumentOut, UploadResult

router = APIRouter(prefix="/upload", tags=["upload"])


@router.post("", response_model=UploadResult, summary="Загрузить ZIP-архив прайсов")
async def upload_archive(
    file: UploadFile = File(..., description="ZIP с PDF/DOCX/XLSX"),
    db: Session = Depends(get_db),
) -> UploadResult:
    if not file.filename or not file.filename.lower().endswith(".zip"):
        raise HTTPException(400, "Ожидается ZIP-архив")
    tmp = Path(tempfile.mkdtemp()) / file.filename
    tmp.write_bytes(await file.read())

    normalizer = load_normalizer(db)
    documents = process_zip(db, tmp, normalizer)

    return UploadResult(
        documents=[PriceDocumentOut.model_validate(d) for d in documents],
        total_files=len(documents),
        total_items=sum(d.items_total for d in documents),
    )
