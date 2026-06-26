// Страница карточки услуги — данные из backend /services/{id} и /services/{id}/partners.

import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AppLayout } from "@/widgets/app-layout";
import { Pager } from "@/shared/ui/Pager";
import { TableSkeleton, EmptyState, ErrorState } from "@/shared/ui/AsyncState";
import { formatBYN } from "@/shared/api/mock-data";
import { serviceQuery, servicePartnersQuery } from "@/shared/api/queries";
import type { ServicePartnerPriceDTO } from "@/shared/api/types";

export function ServiceDetailPage({ serviceId }: { serviceId: string }) {
  const [page, setPage] = useState(1);
  const service = useQuery(serviceQuery(serviceId));
  const list = useQuery(servicePartnersQuery(serviceId, { page }));

  if (service.isLoading) {
    return (
      <AppLayout>
        <div className="rounded-xl bg-panel p-8 ring-1 ring-border">
          <TableSkeleton rows={3} cols={4} />
        </div>
      </AppLayout>
    );
  }
  if (service.isError) {
    return (
      <AppLayout>
        <div className="rounded-xl bg-panel ring-1 ring-border">
          <ErrorState error={service.error} onRetry={() => service.refetch()} />
        </div>
      </AppLayout>
    );
  }
  const s = service.data;
  if (!s) {
    return (
      <AppLayout>
        <EmptyState title="Услуга не найдена" />
      </AppLayout>
    );
  }

  const items: ServicePartnerPriceDTO[] = list.data?.items ?? [];
  const total = list.data?.total ?? 0;
  const pageSize = list.data?.page_size ?? 25;

  // Простые агрегаты по цене резидента (по текущей странице — нормально для UI-сводки).
  const residentPrices: number[] = items
    .map((i) => i.price_resident_kzt)
    .filter((v): v is number => typeof v === "number" && v > 0);
  const minPrice = residentPrices.length ? Math.min(...residentPrices) : 0;
  const maxPrice = residentPrices.length ? Math.max(...residentPrices) : 0;
  const avgPrice = residentPrices.length
    ? Math.round(residentPrices.reduce((a, b) => a + b, 0) / residentPrices.length)
    : 0;

  return (
    <AppLayout>
      <nav className="mb-4 text-xs text-muted-foreground">
        <Link to="/services" className="hover:text-foreground">
          Каталог услуг
        </Link>
        <span className="mx-1.5 text-zinc-400">/</span>
        <span className="text-foreground">{s.service_name}</span>
      </nav>

      <header className="mb-6 rounded-xl bg-panel p-6 ring-1 ring-border">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {s.category}
        </div>
        <h1 className="mt-1 text-xl font-semibold tracking-tight">{s.service_name}</h1>
        <dl className="mt-4 grid grid-cols-4 gap-6 text-sm">
          <Stat label="Клиник" value={total.toString()} />
          <Stat label="Минимум" value={minPrice ? formatBYN(minPrice) : "—"} />
          <Stat label="Средняя" value={avgPrice ? formatBYN(avgPrice) : "—"} />
          <Stat label="Максимум" value={maxPrice ? formatBYN(maxPrice) : "—"} />
        </dl>
      </header>

      <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
        <div className="border-b border-border bg-muted/40 px-4 py-2.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Клиники-партнёры · {total.toLocaleString("ru-RU")}
        </div>

        {list.isLoading ? (
          <TableSkeleton rows={6} cols={4} />
        ) : list.isError ? (
          <ErrorState error={list.error} onRetry={() => list.refetch()} />
        ) : items.length === 0 ? (
          <EmptyState title="Ни одна клиника пока не оказывает эту услугу" />
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Клиника</th>
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Город</th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Резидент</th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Не-резидент</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {items.map((r: ServicePartnerPriceDTO) => (
                <tr key={r.partner.partner_id} className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      to="/partners/$id"
                      params={{ id: r.partner.partner_id }}
                      className="text-brand hover:underline"
                    >
                      {r.partner.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{r.partner.city}</td>
                  <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                    {r.price_resident_kzt != null ? formatBYN(r.price_resident_kzt) : "—"}
                  </td>
                  <td className="px-4 py-3 text-right text-sm tabular-nums text-muted-foreground">
                    {r.price_nonresident_kzt != null ? formatBYN(r.price_nonresident_kzt) : "—"}
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-base font-semibold tabular-nums">{value}</div>
    </div>
  );
}
