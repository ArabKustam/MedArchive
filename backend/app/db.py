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
        dbapi_connection.create_function("lower", 1, lambda s: s.lower() if s is not None else "")

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

    # Auto-migration for SQLite missing columns
    with engine.connect() as conn:
        try:
            res = conn.execute(text("PRAGMA table_info(price_documents)")).fetchall()
            cols = [r[1] for r in res]
            if cols:
                if "extraction_method" not in cols:
                    conn.execute(text("ALTER TABLE price_documents ADD COLUMN extraction_method VARCHAR(64)"))
                if "raw_llm_json" not in cols:
                    conn.execute(text("ALTER TABLE price_documents ADD COLUMN raw_llm_json TEXT"))
            
            res_p = conn.execute(text("PRAGMA table_info(partners)")).fetchall()
            cols_p = [r[1] for r in res_p]
            if cols_p:
                if "bin" not in cols_p:
                    conn.execute(text("ALTER TABLE partners ADD COLUMN bin VARCHAR(12)"))
                if "contact_phone" not in cols_p:
                    conn.execute(text("ALTER TABLE partners ADD COLUMN contact_phone VARCHAR(64)"))
                if "contact_email" not in cols_p:
                    conn.execute(text("ALTER TABLE partners ADD COLUMN contact_email VARCHAR(128)"))
                if "is_active" not in cols_p:
                    conn.execute(text("ALTER TABLE partners ADD COLUMN is_active BOOLEAN DEFAULT 1"))
                if "updated_at" not in cols_p:
                    conn.execute(text("ALTER TABLE partners ADD COLUMN updated_at DATETIME"))

            res_s = conn.execute(text("PRAGMA table_info(services)")).fetchall()
            cols_s = [r[1] for r in res_s]
            if cols_s and "icd_code" not in cols_s:
                conn.execute(text("ALTER TABLE services ADD COLUMN icd_code VARCHAR(64)"))

            res_pi = conn.execute(text("PRAGMA table_info(price_items)")).fetchall()
            cols_pi = [r[1] for r in res_pi]
            if cols_pi:
                if "is_verified" not in cols_pi:
                    conn.execute(text("ALTER TABLE price_items ADD COLUMN is_verified BOOLEAN DEFAULT 0"))
                if "verification_note" not in cols_pi:
                    conn.execute(text("ALTER TABLE price_items ADD COLUMN verification_note VARCHAR(512)"))

            conn.commit()
        except Exception as e:
            print(f"[DB Auto-migration] Notice: {e}")
