// Страница «Поиск услуг» — работает с backend /search, /meta/cities, /meta/price-types.
// Состояния: skeleton при загрузке, error при ошибке, empty при пустой выдаче.

import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type ChangeEvent } from "react";
import { AppLayout } from "@/widgets/app-layout";
import { Pager } from "@/shared/ui/Pager";
import { TableSkeleton, EmptyState, ErrorState } from "@/shared/ui/AsyncState";
import { formatBYN } from "@/shared/api/mock-data";
import {
  citiesQuery,
  priceTypesQuery,
  searchQuery,
  type SearchParams,
} from "@/shared/api/queries";
import type { PriceItemDTO } from "@/shared/api/types";

const ALL_CITIES = "Все города";
const ANY_PRICE = "Любая";

export function SearchPage() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [city, setCity] = useState<string>(ALL_CITIES);
  const [priceType, setPriceType] = useState<string>(ANY_PRICE);
  const [page, setPage] = useState(1);

  // Дебаунс 300 мс на поисковую строку.
  useEffect(() => {
    const t = setTimeout(() => {
      setDebounced(query);
      setPage(1);
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  // Справочники для фильтров — из backend.
  const cities = useQuery(citiesQuery());
  const priceTypes = useQuery(priceTypesQuery());

  // Параметры запроса /search.
  const params: SearchParams = {
    query: debounced || undefined,
    city: city !== ALL_CITIES ? city : undefined,
    page,
  };
  const search = useQuery(searchQuery(params));

  const total = search.data?.total ?? 0;
  const pageSize = search.data?.page_size ?? 25;
  const items: PriceItemDTO[] = search.data?.items ?? [];

  return (
    <AppLayout>
      <section className="mb-12">
        <header className="mb-6">
          <h1 className="mb-2 text-balance text-2xl font-semibold tracking-tight">
            Поиск медицинских услуг
          </h1>
          <p className="max-w-[56ch] text-pretty text-sm text-muted-foreground">
            Единый поиск по архиву прайс-листов клиник-партнёров. Данные подтягиваются из backend
            MedArchive.
          </p>
        </header>

        <div className="mb-6 flex flex-wrap items-end gap-4 rounded-xl bg-panel p-4 ring-1 ring-border">
          <div className="min-w-[300px] flex-1">
            <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Поиск по названию
            </label>
            <input
              type="text"
              value={query}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              placeholder="Например: МРТ головного мозга..."
              className="h-9 w-full rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-brand"
            />
          </div>

          <div className="w-48">
            <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Город
            </label>
            <select
              value={city}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setCity(e.target.value);
                setPage(1);
              }}
              disabled={cities.isLoading}
              className="h-9 w-full cursor-pointer rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-brand disabled:opacity-60"
            >
              <option>{ALL_CITIES}</option>
              {(cities.data ?? []).map((c: string) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="w-44">
            <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Тип цены
            </label>
            <select
              value={priceType}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setPriceType(e.target.value)}
              disabled={priceTypes.isLoading}
              className="h-9 w-full cursor-pointer rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-brand disabled:opacity-60"
            >
              {(priceTypes.data ?? [ANY_PRICE]).map((p: string) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Результаты · {total.toLocaleString("ru-RU")}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {search.isFetching ? "Загрузка…" : "Сортировка: по релевантности"}
            </span>
          </div>

          {search.isLoading ? (
            <TableSkeleton rows={8} cols={5} />
          ) : search.isError ? (
            <ErrorState error={search.error} onRetry={() => search.refetch()} />
          ) : items.length === 0 ? (
            <EmptyState
              title="Ничего не найдено"
              hint="Измените запрос или убедитесь, что backend содержит загруженные документы."
            />
          ) : (
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Клиника</th>
                  <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Услуга</th>
                  <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Резидент</th>
                  <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Не-резидент</th>
                  <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Match</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {items.map((row: PriceItemDTO) => (
                  <tr key={row.item_id} className="transition-colors hover:bg-muted/30">
                    <td className="px-4 py-3 text-sm font-medium">
                      <Link
                        to="/partners/$id"
                        params={{ id: row.partner_id }}
                        className="text-brand hover:underline"
                      >
                        {row.partner_id}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm">{row.service_name_raw}</td>
                    <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                      {priceType === "Не-резидент"
                        ? "—"
                        : row.price_resident_kzt != null
                          ? formatBYN(row.price_resident_kzt)
                          : "—"}
                    </td>
                    <td className="px-4 py-3 text-right text-sm tabular-nums text-muted-foreground">
                      {priceType === "Резидент"
                        ? "—"
                        : row.price_nonresident_kzt != null
                          ? formatBYN(row.price_nonresident_kzt)
                          : "—"}
                    </td>
                    <td className="px-4 py-3 text-right text-[11px] tabular-nums text-zinc-400">
                      {(row.match_score * 100).toFixed(0)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <Pager page={page} pageSize={pageSize} total={total} onChange={setPage} />
        </div>
      </section>
    </AppLayout>
  );
}
