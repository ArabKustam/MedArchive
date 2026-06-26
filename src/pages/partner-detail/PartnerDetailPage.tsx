// Страница карточки клиники — данные тянутся из backend.
// Вкладки: прайс-лист (/partners/{id}/prices), документы (/documents?partner_id),
// история — пока заглушка (backend ещё не отдаёт ряды истории).

import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AppLayout } from "@/widgets/app-layout";
import { StatusPill } from "@/shared/ui/StatusPill";
import { TableSkeleton, EmptyState, ErrorState } from "@/shared/ui/AsyncState";
import { Pager } from "@/shared/ui/Pager";
import { formatBYN } from "@/shared/api/mock-data";
import {
  partnerDocumentsQuery,
  partnerPricesQuery,
  partnerQuery,
} from "@/shared/api/queries";
import type { PartnerDTO, PriceDocumentDTO, PriceItemDTO } from "@/shared/api/types";

type Tab = "prices" | "history" | "documents";

export function PartnerDetailPage({ partnerId }: { partnerId: string }) {
  const [tab, setTab] = useState<Tab>("prices");
  const [pricePage, setPricePage] = useState(1);

  const partner = useQuery(partnerQuery(partnerId));
  const prices = useQuery(partnerPricesQuery(partnerId, { page: pricePage }));
  const docs = useQuery(partnerDocumentsQuery(partnerId));

  // ---------- header / loading / error ----------
  if (partner.isLoading) {
    return (
      <AppLayout>
        <div className="rounded-xl bg-panel p-8 ring-1 ring-border">
          <TableSkeleton rows={3} cols={4} />
        </div>
      </AppLayout>
    );
  }
  if (partner.isError) {
    return (
      <AppLayout>
        <div className="rounded-xl bg-panel ring-1 ring-border">
          <ErrorState error={partner.error} onRetry={() => partner.refetch()} />
        </div>
      </AppLayout>
    );
  }
  const p: PartnerDTO | undefined = partner.data;
  if (!p) {
    return (
      <AppLayout>
        <EmptyState title="Клиника не найдена" />
      </AppLayout>
    );
  }

  const priceItems: PriceItemDTO[] = prices.data?.items ?? [];
  const docItems: PriceDocumentDTO[] = docs.data?.items ?? [];

  return (
    <AppLayout>
      <nav className="mb-4 text-xs text-muted-foreground">
        <Link to="/partners" className="hover:text-foreground">
          Клиники-партнёры
        </Link>
        <span className="mx-1.5 text-zinc-400">/</span>
        <span className="text-foreground">{p.name}</span>
      </nav>

      <header className="mb-8 flex flex-wrap items-start justify-between gap-6 rounded-xl bg-panel p-6 ring-1 ring-border">
        <div className="flex gap-5">
          <div className="grid size-14 place-items-center rounded-lg bg-brand/10 text-base font-semibold text-brand ring-1 ring-border">
            {p.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-semibold tracking-tight">{p.name}</h1>
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
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {p.city}, {p.address}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {p.phone} · {p.email}
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-1 text-right">
          <Stat label="Позиций" value={(prices.data?.total ?? 0).toLocaleString("ru-RU")} />
          <Stat label="Документов" value={(docs.data?.total ?? 0).toString()} />
        </dl>
      </header>

      <div className="mb-4 flex gap-1 border-b border-border">
        <TabButton active={tab === "prices"} onClick={() => setTab("prices")}>
          Прайс-лист
        </TabButton>
        <TabButton active={tab === "history"} onClick={() => setTab("history")}>
          История цен
        </TabButton>
        <TabButton active={tab === "documents"} onClick={() => setTab("documents")}>
          Документы ({docs.data?.total ?? 0})
        </TabButton>
      </div>

      {tab === "prices" && (
        <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
          {prices.isLoading ? (
            <TableSkeleton rows={8} cols={4} />
          ) : prices.isError ? (
            <ErrorState error={prices.error} onRetry={() => prices.refetch()} />
          ) : priceItems.length === 0 ? (
            <EmptyState title="Прайс-лист пуст" hint="Документы клиники ещё не обработаны." />
          ) : (
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Услуга</th>
                  <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Резидент</th>
                  <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Не-резидент</th>
                  <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Match</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {priceItems.map((row: PriceItemDTO) => (
                  <tr key={row.item_id} className="hover:bg-muted/30">
                    <td className="px-4 py-3 text-sm font-medium">{row.service_name_raw}</td>
                    <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                      {row.price_resident_kzt != null ? formatBYN(row.price_resident_kzt) : "—"}
                    </td>
                    <td className="px-4 py-3 text-right text-sm tabular-nums text-muted-foreground">
                      {row.price_nonresident_kzt != null ? formatBYN(row.price_nonresident_kzt) : "—"}
                    </td>
                    <td className="px-4 py-3 text-right text-[11px] text-zinc-400">
                      {(row.match_score * 100).toFixed(0)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <Pager
            page={pricePage}
            pageSize={prices.data?.page_size ?? 25}
            total={prices.data?.total ?? 0}
            onChange={setPricePage}
          />
        </div>
      )}

      {tab === "history" && (
        <div className="rounded-xl bg-panel p-10 text-center text-sm text-muted-foreground ring-1 ring-border">
          История цен будет доступна после накопления нескольких прайс-листов клиники.
        </div>
      )}

      {tab === "documents" && (
        <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
          {docs.isLoading ? (
            <TableSkeleton rows={5} cols={5} />
          ) : docs.isError ? (
            <ErrorState error={docs.error} onRetry={() => docs.refetch()} />
          ) : docItems.length === 0 ? (
            <EmptyState title="Документов нет" />
          ) : (
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Файл</th>
                  <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Загружено</th>
                  <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Позиций</th>
                  <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Сопоставлено</th>
                  <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {docItems.map((d: PriceDocumentDTO) => (
                  <tr key={d.doc_id} className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-mono text-sm">{d.filename}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {new Date(d.uploaded_at).toLocaleString("ru-RU")}
                    </td>
                    <td className="px-4 py-3 text-right text-sm tabular-nums">{d.items_total}</td>
                    <td className="px-4 py-3 text-right text-sm tabular-nums">{d.items_matched}</td>
                    <td className="px-4 py-3 text-right">
                      <StatusPill status={d.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </AppLayout>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="col-start-auto row-start-2 text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="row-start-1 text-base font-semibold tabular-nums">{value}</dd>
    </>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors " +
        (active
          ? "border-brand text-foreground"
          : "border-transparent text-muted-foreground hover:text-foreground")
      }
    >
      {children}
    </button>
  );
}
