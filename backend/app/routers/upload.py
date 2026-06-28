"""POST /upload — эндпоинт загрузки одного или нескольких файлов (ZIP/PDF/DOCX/XLSX/PNG) с фоновой обработкой."""
from __future__ import annotations

import tempfile
import threading
from pathlib import Path
from typing import Optional, List

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from ..db import get_db
from ..pipeline import VALID_EXTS, process_queue_bg, register_upload
from ..schemas import PriceDocumentOut, UploadResult

router = APIRouter(prefix="/upload", tags=["upload"])


@router.post("", response_model=UploadResult, summary="Загрузить один или несколько документов/ZIP-архивов")
async def upload_archive(
    files: List[UploadFile] = File(None, description="Список файлов для массовой загрузки"),
    file: Optional[UploadFile] = File(None, description="Одиночный файл"),
    db: Session = Depends(get_db),
) -> UploadResult:
    """
    Принимает один или несколько файлов от пользователя (ZIP-архивы или одиночные документы PDF/XLSX/DOCX),
    сохраняет их во временное хранилище, регистрирует в базе данных
    и последовательно обрабатывает в фоновом потоке.
    """
    upload_list: List[UploadFile] = []
    if files:
        upload_list.extend(files)
    if file:
        upload_list.append(file)

    if not upload_list:
        raise HTTPException(400, "Файлы для загрузки не переданы")

    all_documents = []
    for f in upload_list:
        if not f.filename:
            continue
        ext = Path(f.filename).suffix.lower().lstrip(".")
        if ext != "zip" and ext not in VALID_EXTS:
            continue
        tmp = Path(tempfile.mkdtemp()) / f.filename
        tmp.write_bytes(await f.read())
        docs = register_upload(db, tmp)
        all_documents.extend(docs)

    if not all_documents:
        raise HTTPException(400, "Ни один из переданных файлов не имеет поддерживаемого формата")

    # Запуск фонового демонического потока для обработки всех созданных документов
    doc_ids = [d.doc_id for d in all_documents]
    threading.Thread(target=process_queue_bg, args=(doc_ids,), daemon=True).start()

    return UploadResult(
        documents=[PriceDocumentOut.model_validate(d) for d in all_documents],
        total_files=len(all_documents),
        total_items=0,
    )
