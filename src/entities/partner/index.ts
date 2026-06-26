// Сущность «Партнёр/Клиника» (FSD: entities/partner).
// Слайс реэкспортирует типы и базовые данные из shared/api, чтобы UI-слои
// зависели от уровня entities, а не напрямую от источника данных.

export {
  partners,
  cities,
  getPartner,
  type Partner,
} from "@/shared/api/mock-data";
