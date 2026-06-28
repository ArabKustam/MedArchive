"""SQLAlchemy engine, session, and Base with WAL mode and multi-threading support."""
from __future__ import annotations

import os
from contextlib import contextmanager
from typing import Iterator

from sqlalchemy import create_engine, event, text
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

DATABASE_URL = os.environ.get("DATABASE_URL", "sqlite:///./medarchive.db")

connect_args: dict = {}
if DATABASE_URL.startswith("sqlite"):
    connect_args = {"check_same_thread": False, "timeout": 60}

engine = create_engine(DATABASE_URL, connect_args=connect_args, future=True)

if DATABASE_URL.startswith("sqlite"):
    @event.listens_for(engine, "connect")
    def set_sqlite_pragma(dbapi_connection, connection_record):
        cursor = dbapi_connection.cursor()
        cursor.execute("PRAGMA journal_mode=WAL")
        cursor.execute("PRAGMA synchronous=NORMAL")
        cursor.close()

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)


class Base(DeclarativeBase):
    pass


def get_db() -> Iterator[Session]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@contextmanager
def session_scope() -> Iterator[Session]:
    db = SessionLocal()
    try:
        yield db
        db.commit()
    except Exception:
        db.rollback()
        raise
    finally:
        db.close()


def init_db() -> None:
    from . import models  # noqa: F401  ensure models are imported

    Base.metadata.create_all(bind=engine)

    # Auto-migration for SQLite missing columns on price_documents
    with engine.connect() as conn:
        try:
            res = conn.execute(text("PRAGMA table_info(price_documents)")).fetchall()
            cols = [r[1] for r in res]
            if cols:
                if "extraction_method" not in cols:
                    conn.execute(text("ALTER TABLE price_documents ADD COLUMN extraction_method VARCHAR(64)"))
                if "raw_llm_json" not in cols:
                    conn.execute(text("ALTER TABLE price_documents ADD COLUMN raw_llm_json TEXT"))
                conn.commit()
        except Exception as e:
            print(f"[DB Auto-migration] Notice: {e}")
