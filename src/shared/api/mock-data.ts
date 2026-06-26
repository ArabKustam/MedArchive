// Источник данных слайса shared/api.
// Mock-данные удалены — массивы пусты, UI рендерит пустые состояния.
// Реальные данные подтягиваются из backend (FastAPI, /docs).

export type Partner = {
  id: string; name: string; city: string; address: string; phone: string; email: string;
  status: "active" | "paused"; apiVersion: string; docsCount: number; servicesCount: number; lastUpload: string;
};
export type PriceRow = {
  partnerId: string; partnerName: string; service: string; category: string;
  resident: number; nonResident: number; updatedAt: string;
};
export type HistoryPoint = { date: string; resident: number; nonResident: number };
export type PriceDocument = {
  id: string; filename: string; partnerId: string; uploadedAt: string;
  status: "queued" | "processing" | "done" | "error"; itemsTotal: number; itemsMatched: number;
};
export type VerificationCandidate = { serviceId: string; title: string; code: string; category: string; score: number };
export type VerificationItem = {
  id: string; partnerId: string; partnerName: string; document: string;
  rawTitle: string; rawPrice: string; candidates: VerificationCandidate[];
};

// Пустые коллекции — структура сохранена, чтобы типы и импорты остались валидными.
export const partners: Partner[] = [];
export const priceRows: PriceRow[] = [];
export const priceDocuments: PriceDocument[] = [];
export const verificationQueue: VerificationItem[] = [];
export const partnerHistory: Record<string, HistoryPoint[]> = {};

// Список городов для селектов: только опция «Все города».
export const cities = ["Все города"] as const;

// Поиск партнёра по id. Без данных всегда вернёт undefined.
export function getPartner(id: string): Partner | undefined {
  return partners.find((p) => p.id === id);
}

// Форматирование цены в тенге (KZT). Оставляем тут, т.к. используется
// единообразно во всём UI и реэкспортируется из shared/lib/format.
export function formatBYN(value: number): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "KZT",
    maximumFractionDigits: 0,
  }).format(value);
}
