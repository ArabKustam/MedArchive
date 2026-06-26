// queryOptions для TanStack Query — централизованные ключи и fetcher'ы.

import { queryOptions } from "@tanstack/react-query";
import { apiFetch } from "./client";
import type {
  Page,
  PartnerDTO,
  PriceDocumentDTO,
  PriceItemDTO,
  ServiceDTO,
  ServicePartnerPriceDTO,
} from "./types";

const PAGE_SIZE = 25;

// ---------- meta ----------
export const citiesQuery = () =>
  queryOptions({
    queryKey: ["meta", "cities"],
    queryFn: () => apiFetch<string[]>("/meta/cities"),
    staleTime: 5 * 60_000,
  });

export const priceTypesQuery = () =>
  queryOptions({
    queryKey: ["meta", "price-types"],
    queryFn: () => apiFetch<string[]>("/meta/price-types"),
    staleTime: 60 * 60_000,
  });

// ---------- partners ----------
export type PartnersParams = {
  query?: string;
  city?: string;
  page?: number;
  page_size?: number;
};

export const partnersQuery = (params: PartnersParams = {}) =>
  queryOptions({
    queryKey: ["partners", params],
    queryFn: () =>
      apiFetch<Page<PartnerDTO>>("/partners", {
        query: params.query,
        city: params.city,
        page: params.page ?? 1,
        page_size: params.page_size ?? PAGE_SIZE,
      }),
  });

export const partnerQuery = (id: string) =>
  queryOptions({
    queryKey: ["partner", id],
    queryFn: () => apiFetch<PartnerDTO>(`/partners/${encodeURIComponent(id)}`),
  });

export const partnerPricesQuery = (id: string, params: { query?: string; page?: number } = {}) =>
  queryOptions({
    queryKey: ["partner", id, "prices", params],
    queryFn: () =>
      apiFetch<Page<PriceItemDTO>>(`/partners/${encodeURIComponent(id)}/prices`, {
        query: params.query,
        page: params.page ?? 1,
        page_size: PAGE_SIZE,
      }),
  });

export const partnerDocumentsQuery = (id: string) =>
  queryOptions({
    queryKey: ["partner", id, "documents"],
    queryFn: () =>
      apiFetch<Page<PriceDocumentDTO>>("/documents", {
        partner_id: id,
        page: 1,
        page_size: 100,
      }),
  });

// ---------- services ----------
export type ServicesParams = {
  query?: string;
  category?: string;
  page?: number;
};

export const servicesQuery = (params: ServicesParams = {}) =>
  queryOptions({
    queryKey: ["services", params],
    queryFn: () =>
      apiFetch<Page<ServiceDTO>>("/services", {
        query: params.query,
        category: params.category,
        page: params.page ?? 1,
        page_size: PAGE_SIZE,
      }),
  });

export const serviceQuery = (id: string) =>
  queryOptions({
    queryKey: ["service", id],
    queryFn: () => apiFetch<ServiceDTO>(`/services/${encodeURIComponent(id)}`),
  });

export const servicePartnersQuery = (id: string, params: { city?: string; page?: number } = {}) =>
  queryOptions({
    queryKey: ["service", id, "partners", params],
    queryFn: () =>
      apiFetch<Page<ServicePartnerPriceDTO>>(`/services/${encodeURIComponent(id)}/partners`, {
        city: params.city,
        page: params.page ?? 1,
        page_size: PAGE_SIZE,
      }),
  });

// ---------- search ----------
export type SearchParams = {
  query?: string;
  city?: string;
  partner_id?: string;
  min_price?: number;
  max_price?: number;
  matched_only?: boolean;
  page?: number;
};

export const searchQuery = (params: SearchParams = {}) =>
  queryOptions({
    queryKey: ["search", params],
    queryFn: () =>
      apiFetch<Page<PriceItemDTO>>("/search", {
        ...params,
        page: params.page ?? 1,
        page_size: PAGE_SIZE,
      }),
  });

// ---------- admin ----------
export const adminStatsQuery = () =>
  queryOptions({
    queryKey: ["admin", "stats"],
    queryFn: () => apiFetch<Record<string, unknown>>("/admin/stats"),
    staleTime: 30_000,
  });

// ---------- documents ----------
export const documentsQuery = (params: { status?: string; page?: number } = {}) =>
  queryOptions({
    queryKey: ["documents", params],
    queryFn: () =>
      apiFetch<Page<PriceDocumentDTO>>("/documents", {
        status: params.status,
        page: params.page ?? 1,
        page_size: 50,
      }),
  });
