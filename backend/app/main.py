"""FastAPI application entry point."""
from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .db import init_db
from .routers import documents, meta, partners, search, services, stats, upload, verification


@asynccontextmanager
async def lifespan(_app: FastAPI):
    init_db()
    # Auto-resume processing any queued or interrupted documents on server startup
    import threading
    from .db import SessionLocal
    from .models import PriceDocument
    from .pipeline import process_queue_bg

    with SessionLocal() as db:
        stuck = db.query(PriceDocument.doc_id).filter(
            PriceDocument.status.in_(["queued", "processing", "llm_processing"])
        ).all()
        doc_ids = [d[0] for d in stuck]
        if doc_ids:
            threading.Thread(target=process_queue_bg, args=(doc_ids,), daemon=True).start()
    yield


app = FastAPI(
    title="MedArchive API",
    description=(
        "REST API архива прайс-листов клиник-партнёров. "
        "Загрузка ZIP-архива, парсинг PDF/DOCX/XLSX, нормализация со справочником, "
        "поиск услуг и партнёров, очередь верификации."
    ),
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "*",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(services.router)
app.include_router(partners.router)
app.include_router(search.router)
app.include_router(documents.router)
app.include_router(upload.router)
app.include_router(verification.router)
app.include_router(stats.router)
app.include_router(meta.router)


@app.get("/health", tags=["meta"])
def health() -> dict:
    return {"status": "ok"}


@app.get("/unmatched", tags=["verification"], summary="Несопоставленные позиции (по ТЗ 4.5)")
def unmatched_endpoint(
    partner_id: str | None = None,
    page: int = 1,
    page_size: int = 50,
    db = Depends(verification.get_db),
):
    return verification.queue(partner_id=partner_id, reason="unmatched", page=page, page_size=page_size, db=db)


@app.post("/match", tags=["verification"], summary="Ручное сопоставление (по ТЗ 4.5)")
def match_endpoint(
    item_id: str,
    decision: verification.VerificationDecision,
    db = Depends(verification.get_db),
):
    return verification.decide(item_id=item_id, decision=decision, db=db)
# PDF parser modules loaded cleanly

