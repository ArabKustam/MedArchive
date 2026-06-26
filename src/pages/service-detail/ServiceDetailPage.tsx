// Страница деталей одной услуги (FSD: pages/service-detail).
// Показывает агрегированную статистику и список клиник, оказывающих услугу.

import { Link } from "@tanstack/react-router";
import { AppLayout } from "@/widgets/app-layout";
import type { ServiceCatalogItem } from "@/entities/service";
import { formatBYN, partners } from "@/shared/api/mock-data";

export function ServiceDetailPage({ service }: { service: ServiceCatalogItem }) {
  // Маппинг partnerId → партнёр (для быстрого доступа к городу).
  const partnerById = Object.fromEntries(partners.map((p) => [p.id, p]));
  // Сортировка строк прайса по возрастанию цены резидента.
  const rows = [...service.rows].sort((a, b) => a.resident - b.resident);

  return (
    <AppLayout>
      <nav className="mb-4 text-xs text-muted-foreground">
        <Link to="/services" className="hover:text-foreground">
          Каталог услуг
        </Link>
        <span className="mx-1.5 text-zinc-400">/</span>
        <span className="text-foreground">{service.name}</span>
      </nav>

      <header className="mb-6 rounded-xl bg-panel p-6 ring-1 ring-border">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {service.category}
        </div>
        <h1 className="mt-1 text-xl font-semibold tracking-tight">{service.name}</h1>
        <dl className="mt-4 grid grid-cols-4 gap-6 text-sm">
          <Stat label="Клиник" value={service.partnersCount.toString()} />
          <Stat label="Минимум" value={service.minPrice ? formatBYN(service.minPrice) : "—"} />
          <Stat label="Средняя" value={service.avgPrice ? formatBYN(service.avgPrice) : "—"} />
          <Stat label="Максимум" value={service.maxPrice ? formatBYN(service.maxPrice) : "—"} />
        </dl>
      </header>

      <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
        <div className="border-b border-border bg-muted/40 px-4 py-2.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Клиники-партнёры · {rows.length}
        </div>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Клиника</th>
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Город</th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Резидент</th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Не-резидент</th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Обновлено</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-muted/30">
                <td className="px-4 py-3 text-sm font-medium">
                  <Link to="/partners/$id" params={{ id: r.partnerId }} className="text-brand hover:underline">
                    {r.partnerName}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {partnerById[r.partnerId]?.city ?? "—"}
                </td>
                <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                  {formatBYN(r.resident)}
                </td>
                <td className="px-4 py-3 text-right text-sm tabular-nums text-muted-foreground">
                  {formatBYN(r.nonResident)}
                </td>
                <td className="px-4 py-3 text-right text-[11px] text-zinc-400">{r.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 text-base font-semibold tabular-nums">{value}</dd>
    </div>
  );
}
