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

export type PriceItemDTO = {
  item_id: string;
  doc_id: string;
  partner_id: string;
  service_id: string | null;
  service_name_raw: string;
  service_code_source: string | null;
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
  status: "queued" | "processing" | "done" | "error";
  items_total: number;
  items_matched: number;
  error_message: string | null;
};

export type ServicePartnerPriceDTO = {
  partner: PartnerDTO;
  price_resident_kzt: number | null;
  price_nonresident_kzt: number | null;
  effective_date: string | null;
  doc_id: string | null;
};
