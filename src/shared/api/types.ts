// DTO-типы ответов backend (FastAPI). Соответствуют backend/app/schemas.py.

export type Page<T> = {
  items: T[];
  page: number;
  page_size: number;
  total: number;
  pages: number;
};

export type PartnerDTO = {
  partner_id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  status: "active" | "paused" | string;
};

export type ServiceDTO = {
  service_id: string;
  service_name: string;
  category: string;
  synonyms?: string[] | null;
  is_active: boolean;
};

export type DocumentMetaDTO = {
  doc_id: string;
  filename: string;
  partner_id: string;
};

export type PriceItemDTO = {
  item_id: string;
  doc_id: string;
  filename?: string | null;
  partner_id: string;
  partner_name?: string | null;
  service_id: string | null;
  service_name_raw: string;
  service_code_source: string | null;
  category?: string | null;
  price_resident_kzt: number | null;
  price_nonresident_kzt: number | null;
  currency_original: string;
  match_score: number;
  match_status: string;
};

export type PriceDocumentDTO = {
  doc_id: string;
  partner_id: string;
  filename: string;
  file_type: string;
  price_date: string | null;
  uploaded_at: string;
  status: "queued" | "processing" | "llm_processing" | "done" | "error";
  items_total: number;
  items_matched: number;
  error_message: string | null;
  extraction_method?: string | null;
  raw_llm_json?: string | null;
};

export type ServicePartnerPriceDTO = {
  partner: PartnerDTO;
  price_resident_kzt: number | null;
  price_nonresident_kzt: number | null;
  effective_date: string | null;
  doc_id: string | null;
};

export type VerificationCandidateDTO = {
  service_id: string;
  service_name: string;
  category: string;
  score: number;
};

export type VerificationItemDTO = {
  item_id: string;
  partner_id: string;
  partner_name: string;
  doc_id: string;
  filename: string;
  service_name_raw: string;
  price_resident_kzt: number | null;
  price_nonresident_kzt: number | null;
  candidates: VerificationCandidateDTO[];
  reason?: string;
  reason_label?: string;
  page_number?: number;
  raw_context_snippet?: string;
  match_score?: number;
};

export type VerificationDecisionDTO = {
  action: "accept" | "reject" | "create_new" | "update_and_accept";
  service_id?: string | null;
  new_service_name?: string | null;
  new_category?: string | null;
  updated_price_resident?: number | null;
  updated_price_nonresident?: number | null;
  updated_service_name?: string | null;
};

export type UploadResultDTO = {
  documents: PriceDocumentDTO[];
  total_files: number;
  total_items: number;
};
