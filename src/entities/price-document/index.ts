// Публичный API сущности «Документ прайс-листа».
// Скрываем внутренности модели за барель-импортом.

export { documentStore, useDocuments } from "./model/store";
export { type PriceDocument } from "@/shared/api/mock-data";
export { StatusPill } from "@/shared/ui/StatusPill";
