# MedArchive — Python backend (FastAPI)

Полная реализация бэкенда из ТЗ хакатона: загрузка ZIP-архива прайсов, парсинг PDF/DOCX/XLSX
(+ опционально OCR через Tesseract), нормализация со справочником через RapidFuzz, REST API
с пагинацией и фильтрацией, очередь верификации, история цен.

## Стек

- FastAPI + Uvicorn — REST API и OpenAPI-документация.
- SQLAlchemy + SQLite — хранилище (легко переключается на PostgreSQL через `DATABASE_URL`).
- pdfplumber, python-docx, openpyxl/pandas, python-calamine — парсеры форматов.
- pytesseract + Pillow — OCR для PDF-сканов (опционально).
- RapidFuzz — нечёткое сопоставление услуг со справочником.
- pydantic — валидация входов/выходов.

## Установка и запуск

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# (опционально) загрузить справочник услуг из XLSX/JSON
python -m app.seed --catalog ./data/catalog.xlsx

# запуск API
uvicorn app.main:app --reload --port 8000
```

OpenAPI/Swagger: http://localhost:8000/docs · ReDoc: http://localhost:8000/redoc

## Структура

```
backend/
├── requirements.txt
├── app/
│   ├── main.py              # FastAPI приложение, CORS, lifespan
│   ├── db.py                # SQLAlchemy engine/session
│   ├── models.py            # Partner/PriceDocument/PriceItem/Service/PriceHistory
│   ├── schemas.py           # Pydantic-схемы с пагинацией
│   ├── deps.py              # пагинация и общие зависимости
│   ├── parsers.py           # PDF/DOCX/XLSX + OCR-fallback
│   ├── normalize.py         # сопоставление со справочником (RapidFuzz)
│   ├── pipeline.py          # обработка ZIP → строки → нормализация → сохранение
│   ├── seed.py              # загрузка справочника услуг
│   └── routers/
│       ├── partners.py      # /partners, /partners/{id}
│       ├── services.py      # /services, /services/{id}/partners
│       ├── search.py        # /search?query=...
│       ├── documents.py     # /documents, /documents/{id}
│       ├── upload.py        # POST /upload (ZIP)
│       └── verification.py  # /verification/queue, accept/reject
```

Все списковые эндпоинты принимают `page` и `page_size` (по умолчанию 1/25, максимум 200) и возвращают
конверт `{ items, page, page_size, total, pages }`.
