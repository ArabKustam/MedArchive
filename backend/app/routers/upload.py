"""POST /upload — эндпоинт загрузки ZIP-архивов или отдельных документов (PDF/DOCX/XLSX/PNG) с фоновой обработкой."""
from __future__ import annotations

import tempfile
import threading
from pathlib import Path

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from ..db import get_db
from ..pipeline import VALID_EXTS, process_queue_bg, register_upload
from ..schemas import PriceDocumentOut, UploadResult

router = APIRouter(prefix="/upload", tags=["upload"])


@router.post("", response_model=UploadResult, summary="Загрузить документ или ZIP-архив прайсов")
async def upload_archive(
    file: UploadFile = File(..., description="ZIP или отдельный файл PDF/DOCX/XLSX/PNG"),
    db: Session = Depends(get_db),
) -> UploadResult:
    """
    Принимает файл от пользователя (ZIP-архив или одиночный документ),
    сохраняет его во временное хранилище, регистрирует документы в базой данных
    и запускает фоновый поток для парсинга и нормализации.
    """
    # Проверка наличия имени файла
    if not file.filename:
        raise HTTPException(400, "Имя файла не передано")

    # Проверка поддерживаемого расширения файла
    ext = Path(file.filename).suffix.lower().lstrip(".")
    if ext != "zip" and ext not in VALID_EXTS:
        raise HTTPException(
            400, f"Неподдерживаемый формат файла .{ext}. Поддерживаются: ZIP, PDF, XLSX, XLS, DOCX, JPG, PNG."
        )

    # Сохранение входящего файла во временный каталог на диске
    tmp = Path(tempfile.mkdtemp()) / file.filename
    tmp.write_bytes(await file.read())

    # Регистрация загруженного файла/архива в базе данных и создание записей PriceDocument
    documents = register_upload(db, tmp)

    # Запуск фонового демонического потока для обработки созданных документов (парсинг + сопоставление)
    doc_ids = [d.doc_id for d in documents]
    threading.Thread(target=process_queue_bg, args=(doc_ids,), daemon=True).start()

    # Возврат результата с перечнем созданных документов
    return UploadResult(
        documents=[PriceDocumentOut.model_validate(d) for d in documents],
        total_files=len(documents),
        total_items=0,
    )

