// Страница каталога услуг — данные из backend /services.

import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type ChangeEvent } from "react";
import { AppLayout } from "@/widgets/app-layout";
import { Pager } from "@/shared/ui/Pager";
import { TableSkeleton, EmptyState, ErrorState } from "@/shared/ui/AsyncState";
import { servicesQuery } from "@/shared/api/queries";
import type { ServiceDTO } from "@/shared/api/types";

export function ServicesListPage() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebounced(query);
      setPage(1);
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  const services = useQuery(servicesQuery({ query: debounced || undefined, page }));
  const items: ServiceDTO[] = services.data?.items ?? [];
  const total = services.data?.total ?? 0;
  const pageSize = services.data?.page_size ?? 25;

  return (
    <AppLayout>
      <header className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">Каталог услуг</h1>
        <p className="max-w-[56ch] text-sm text-muted-foreground">
          {total.toLocaleString("ru-RU")} нормализованных позиций справочника.
        </p>
      </header>

      <div className="mb-4 flex flex-wrap items-end gap-4 rounded-xl bg-panel p-4 ring-1 ring-border">
        <div className="min-w-[280px] flex-1">
          <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Поиск услуги
          </label>
          <input
            type="text"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Например: УЗИ, МРТ, консультация..."
            className="h-9 w-full rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-brand"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Услуг · {total.toLocaleString("ru-RU")}
          </span>
          {services.isFetching && !services.isLoading && (
            <span className="text-[10px] text-muted-foreground">Обновление…</span>
          )}
        </div>

        {services.isLoading ? (
          <TableSkeleton rows={8} cols={3} />
        ) : services.isError ? (
          <ErrorState error={services.error} onRetry={() => services.refetch()} />
        ) : items.length === 0 ? (
          <EmptyState
            title="Справочник услуг пуст"
            hint="Загрузите ZIP-архив прайс-листов в админ-панели для наполнения каталога."
          />
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Услуга</th>
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Категория</th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {items.map((s: ServiceDTO) => (
                <tr key={s.service_id} className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      to="/services/$id"
                      params={{ id: s.service_id }}
                      className="text-brand hover:underline"
                    >
                      {s.service_name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{s.category}</td>
                  <td className="px-4 py-3 text-right text-[11px] text-muted-foreground">
                    {s.is_active ? "Активна" : "Архив"}
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
