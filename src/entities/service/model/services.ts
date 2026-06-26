// Построение нормализованного каталога услуг из «сырых» строк прайсов.
// Группируем по паре (название услуги, категория) и считаем агрегаты:
// число клиник, минимальную / среднюю / максимальную цены резидента.
import { priceRows, type PriceRow } from "@/shared/api/mock-data";

export type ServiceCatalogItem = {
  id: string;
  name: string;
  category: string;
  partnersCount: number;
  minPrice: number;
  maxPrice: number;
  avgPrice: number;
  rows: PriceRow[];
};

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-zа-я0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

const byKey = new Map<string, ServiceCatalogItem>();

for (const row of priceRows) {
  const key = `${row.service}::${row.category}`.toLowerCase();
  let item = byKey.get(key);
  if (!item) {
    item = {
      id: slug(row.service) || `svc-${byKey.size + 1}`,
      name: row.service,
      category: row.category,
      partnersCount: 0,
      minPrice: Infinity,
      maxPrice: 0,
      avgPrice: 0,
      rows: [],
    };
    byKey.set(key, item);
  }
  item.rows.push(row);
}

const _ids = new Set<string>();
export const services: ServiceCatalogItem[] = Array.from(byKey.values()).map((s) => {
  let id = s.id;
  let n = 2;
  while (_ids.has(id)) id = `${s.id}-${n++}`;
  _ids.add(id);
  const prices = s.rows.map((r) => r.resident).filter((p) => p > 0);
  const partners = new Set(s.rows.map((r) => r.partnerId));
  return {
    ...s,
    id,
    partnersCount: partners.size,
    minPrice: prices.length ? Math.min(...prices) : 0,
    maxPrice: prices.length ? Math.max(...prices) : 0,
    avgPrice: prices.length ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length) : 0,
  };
});

export const serviceCategories = [
  "Все категории",
  ...Array.from(new Set(services.map((s) => s.category))).sort(),
] as const;

export function getService(id: string) {
  return services.find((s) => s.id === id);
}
