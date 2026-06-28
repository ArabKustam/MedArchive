"""FastAPI application entry point."""
from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .db import init_db
from .routers import documents, meta, partners, search, services, stats, upload, verification


@asynccontextmanager
async def lifespan(_app: FastAPI):
    init_db()
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
