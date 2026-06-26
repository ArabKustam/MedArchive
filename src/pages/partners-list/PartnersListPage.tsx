// Страница «Клиники-партнёры» — данные из backend /partners + /meta/cities.

import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type ChangeEvent } from "react";
import { AppLayout } from "@/widgets/app-layout";
import { Pager } from "@/shared/ui/Pager";
import { TableSkeleton, EmptyState, ErrorState } from "@/shared/ui/AsyncState";
import { citiesQuery, partnersQuery } from "@/shared/api/queries";
import type { PartnerDTO } from "@/shared/api/types";

const ALL_CITIES = "Все города";

export function PartnersListPage() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [city, setCity] = useState<string>(ALL_CITIES);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebounced(query);
      setPage(1);
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  const cities = useQuery(citiesQuery());
  const partners = useQuery(
    partnersQuery({
      query: debounced || undefined,
      city: city !== ALL_CITIES ? city : undefined,
      page,
    }),
  );

  const items: PartnerDTO[] = partners.data?.items ?? [];
  const total = partners.data?.total ?? 0;
  const pageSize = partners.data?.page_size ?? 25;

  return (
    <AppLayout>
      <header className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">Клиники-партнёры</h1>
        <p className="max-w-[56ch] text-sm text-muted-foreground">
          Всего партнёров: <span className="font-medium">{total.toLocaleString("ru-RU")}</span>.
        </p>
      </header>

      <div className="mb-4 flex flex-wrap items-end gap-4 rounded-xl bg-panel p-4 ring-1 ring-border">
        <div className="min-w-[260px] flex-1">
          <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Поиск по названию
          </label>
          <input
            type="text"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Например: Клиника №1"
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
      </div>

      <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
        <div className="border-b border-border bg-muted/40 px-4 py-2.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Партнёров · {total.toLocaleString("ru-RU")}
          {partners.isFetching && !partners.isLoading ? " · обновление…" : ""}
        </div>

        {partners.isLoading ? (
          <TableSkeleton rows={8} cols={4} />
        ) : partners.isError ? (
          <ErrorState error={partners.error} onRetry={() => partners.refetch()} />
        ) : items.length === 0 ? (
          <EmptyState
            title="Партнёров не найдено"
            hint="Загрузите ZIP-архив прайс-листов в админ-панели."
          />
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Клиника</th>
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Город</th>
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Контакты</th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {items.map((p: PartnerDTO) => (
                <tr key={p.partner_id} className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      to="/partners/$id"
                      params={{ id: p.partner_id }}
                      className="text-brand hover:underline"
                    >
                      {p.name}
                    </Link>
                    <div className="text-[11px] text-muted-foreground">{p.address}</div>
                  </td>
                  <td className="px-4 py-3 text-sm">{p.city}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {p.phone} · {p.email}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span
                      className={
                        "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-semibold uppercase " +
                        (p.status === "active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-zinc-200 text-zinc-600")
                      }
                    >
                      <span
                        className={
                          "size-1.5 rounded-full " +
                          (p.status === "active" ? "bg-emerald-500" : "bg-zinc-400")
                        }
                      />
                      {p.status === "active" ? "Активен" : "Пауза"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <Pager page={page} pageSize={pageSize} total={total} onChange={setPage} />
      </div>
    </AppLayout>
  );
}
