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


class DocumentMetaOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    doc_id: str
    filename: str
    partner_id: str


class PriceItemOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    item_id: str
    doc_id: str
    filename: Optional[str] = None
    partner_id: str
    partner_name: Optional[str] = None
    service_id: Optional[str] = None
    category: Optional[str] = None
    service_name_raw: str
    service_code_source: Optional[str] = None
    category: Optional[str] = "Медицинские услуги"
    price_resident_kzt: Optional[float] = None
    price_nonresident_kzt: Optional[float] = None
    currency_original: str = "KZT"
    match_score: float = 0.0
    match_status: str = "unmatched"
    is_active: bool = True


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
    extraction_method: Optional[str] = None
    raw_llm_json: Optional[str] = None


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
    reason: Optional[str] = "low_match"
    reason_label: Optional[str] = "Низкое совпадение со справочником"
    page_number: Optional[int] = 1
    raw_context_snippet: Optional[str] = None
    match_score: Optional[float] = 0.0


class VerificationDecision(BaseModel):
    service_id: Optional[str] = None  # accept => set; reject => null
    action: str  # "accept" | "reject" | "create_new" | "update_and_accept"
    new_service_name: Optional[str] = None
    new_category: Optional[str] = None
    updated_price_resident: Optional[float] = None
    updated_price_nonresident: Optional[float] = None
    updated_service_name: Optional[str] = None


class UploadResult(BaseModel):
    documents: List[PriceDocumentOut]
    total_files: int
    total_items: int
