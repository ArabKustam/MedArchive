"""POST /upload — эндпоинт пакетной или одиночной загрузки документов (PDF/DOCX/XLSX/PNG/ZIP) с фоновой обработкой."""
from __future__ import annotations

import tempfile
import threading
from pathlib import Path
from typing import List, Optional

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from ..db import get_db
from ..pipeline import VALID_EXTS, process_queue_bg, register_upload
from ..schemas import PriceDocumentOut, UploadResult

router = APIRouter(prefix="/upload", tags=["upload"])


@router.post("", response_model=UploadResult, summary="Загрузить документы или ZIP-архив прайсов")
async def upload_archive(
    files: Optional[List[UploadFile]] = File(None, description="Список файлов для пакетной загрузки"),
    file: Optional[UploadFile] = File(None, description="Одиночный файл"),
    db: Session = Depends(get_db),
) -> UploadResult:
    """
    Принимает файлы от пользователя (один или несколько ZIP-архивов / документов),
    регистрирует документы в базе данных и запускает фоновую очередь обработки.
    """
    incoming_files: List[UploadFile] = []
    if files:
        incoming_files.extend([f for f in files if f and f.filename])
    if file and file.filename and file not in incoming_files:
        incoming_files.append(file)

    if not incoming_files:
        raise HTTPException(400, "Файлы не переданы")

    all_created_docs = []
    tmp_dir = Path(tempfile.mkdtemp())

    for f in incoming_files:
        ext = Path(f.filename).suffix.lower().lstrip(".")
        if ext != "zip" and ext not in VALID_EXTS:
            continue

        tmp_path = tmp_dir / f.filename
        tmp_path.write_bytes(await f.read())

        docs = register_upload(db, tmp_path)
        all_created_docs.extend(docs)

    if not all_created_docs:
        raise HTTPException(400, "Не удалось зарегистрировать валидные файлы (поддерживаются ZIP, PDF, XLSX, DOCX, PNG)")

    doc_ids = [d.doc_id for d in all_created_docs]
    threading.Thread(target=process_queue_bg, args=(doc_ids,), daemon=True).start()

    return UploadResult(
        documents=[PriceDocumentOut.model_validate(d) for d in all_created_docs],
        total_files=len(all_created_docs),
        total_items=0,
    )
