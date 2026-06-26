"""ORM models matching the TZ schema."""
from __future__ import annotations

import uuid
from datetime import datetime
from typing import Optional

from sqlalchemy import JSON, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .db import Base


def _uuid() -> str:
    return str(uuid.uuid4())


class Partner(Base):
    __tablename__ = "partners"

    partner_id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    name: Mapped[str] = mapped_column(String(512), index=True)
    city: Mapped[str] = mapped_column(String(128), index=True, default="")
    address: Mapped[str] = mapped_column(String(512), default="")
    phone: Mapped[str] = mapped_column(String(64), default="")
    email: Mapped[str] = mapped_column(String(128), default="")
    status: Mapped[str] = mapped_column(String(16), default="active")  # active|paused
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    documents: Mapped[list["PriceDocument"]] = relationship(back_populates="partner")
    items: Mapped[list["PriceItem"]] = relationship(back_populates="partner")


class Service(Base):
    __tablename__ = "services"

    service_id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    service_name: Mapped[str] = mapped_column(String(512), index=True)
    category: Mapped[str] = mapped_column(String(128), index=True, default="")
    synonyms: Mapped[Optional[list]] = mapped_column(JSON, default=list)
    is_active: Mapped[bool] = mapped_column(default=True)


class PriceDocument(Base):
    __tablename__ = "price_documents"

    doc_id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    partner_id: Mapped[str] = mapped_column(ForeignKey("partners.partner_id"), index=True)
    filename: Mapped[str] = mapped_column(String(512))
    file_type: Mapped[str] = mapped_column(String(16))  # pdf|docx|xlsx|xls|scan
    storage_path: Mapped[str] = mapped_column(String(1024), default="")
    price_date: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    uploaded_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    status: Mapped[str] = mapped_column(String(16), default="queued")  # queued|processing|done|error
    items_total: Mapped[int] = mapped_column(Integer, default=0)
    items_matched: Mapped[int] = mapped_column(Integer, default=0)
    error_message: Mapped[Optional[str]] = mapped_column(Text, nullable=True)

    partner: Mapped[Partner] = relationship(back_populates="documents")
    items: Mapped[list["PriceItem"]] = relationship(back_populates="document")


class PriceItem(Base):
    __tablename__ = "price_items"

    item_id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    doc_id: Mapped[str] = mapped_column(ForeignKey("price_documents.doc_id"), index=True)
    partner_id: Mapped[str] = mapped_column(ForeignKey("partners.partner_id"), index=True)
    service_id: Mapped[Optional[str]] = mapped_column(
        ForeignKey("services.service_id"), nullable=True, index=True
    )

    service_name_raw: Mapped[str] = mapped_column(String(1024), index=True)
    service_code_source: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)
    price_resident_kzt: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    price_nonresident_kzt: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    currency_original: Mapped[str] = mapped_column(String(8), default="KZT")
    price_original: Mapped[Optional[float]] = mapped_column(Float, nullable=True)

    match_score: Mapped[float] = mapped_column(Float, default=0.0)
    match_status: Mapped[str] = mapped_column(String(16), default="unmatched")  # auto|review|verified|unmatched
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    document: Mapped[PriceDocument] = relationship(back_populates="items")
    partner: Mapped[Partner] = relationship(back_populates="items")
    service: Mapped[Optional[Service]] = relationship()


class PriceHistory(Base):
    """Append-only price change log."""

    __tablename__ = "price_history"

    history_id: Mapped[str] = mapped_column(String(36), primary_key=True, default=_uuid)
    partner_id: Mapped[str] = mapped_column(ForeignKey("partners.partner_id"), index=True)
    service_id: Mapped[Optional[str]] = mapped_column(
        ForeignKey("services.service_id"), nullable=True, index=True
    )
    price_resident_kzt: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    price_nonresident_kzt: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    effective_date: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    source_doc_id: Mapped[str] = mapped_column(ForeignKey("price_documents.doc_id"))
