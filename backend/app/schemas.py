"""Pydantic schemas for API responses with pagination envelope."""
from __future__ import annotations

from datetime import datetime
from typing import Generic, List, Optional, TypeVar

from pydantic import BaseModel, ConfigDict, Field

T = TypeVar("T")


class Page(BaseModel, Generic[T]):
    items: List[T]
    page: int
    page_size: int
    total: int
    pages: int


class PartnerOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    partner_id: str
    name: str
    city: str
    address: str
    phone: str
    email: str
    status: str


class ServiceOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    service_id: str
    service_name: str
    category: str
    synonyms: Optional[list] = None
    is_active: bool = True


class PriceItemOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    item_id: str
    doc_id: str
    partner_id: str
    service_id: Optional[str] = None
    service_name_raw: str
    service_code_source: Optional[str] = None
    price_resident_kzt: Optional[float] = None
    price_nonresident_kzt: Optional[float] = None
    currency_original: str = "KZT"
    match_score: float = 0.0
    match_status: str = "unmatched"


class PriceDocumentOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    doc_id: str
    partner_id: str
    filename: str
    file_type: str
    price_date: Optional[datetime] = None
    uploaded_at: datetime
    status: str
    items_total: int
    items_matched: int
    error_message: Optional[str] = None


class ServicePartnerPrice(BaseModel):
    partner: PartnerOut
    price_resident_kzt: Optional[float] = None
    price_nonresident_kzt: Optional[float] = None
    effective_date: Optional[datetime] = None
    doc_id: Optional[str] = None


class VerificationCandidate(BaseModel):
    service_id: str
    service_name: str
    category: str
    score: float


class VerificationItemOut(BaseModel):
    item_id: str
    partner_id: str
    partner_name: str
    doc_id: str
    filename: str
    service_name_raw: str
    price_resident_kzt: Optional[float] = None
    price_nonresident_kzt: Optional[float] = None
    candidates: List[VerificationCandidate] = Field(default_factory=list)


class VerificationDecision(BaseModel):
    service_id: Optional[str] = None  # accept => set; reject => null
    action: str  # "accept" | "reject" | "create_new"
    new_service_name: Optional[str] = None
    new_category: Optional[str] = None


class UploadResult(BaseModel):
    documents: List[PriceDocumentOut]
    total_files: int
    total_items: int
