// Страница дашборда админ-панели (FSD: pages/admin-dashboard).
// Метрики берутся из реактивных сторов, чтобы показатели обновлялись
// сразу после загрузки/удаления документа или подтверждения позиции.

import { useMemo } from "react";
import { priceRows, partners } from "@/shared/api/mock-data";
import { services } from "@/entities/service";
import { useDocuments } from "@/entities/price-document";
import { useVerificationQueue } from "@/entities/verification";

export function AdminDashboardPage() {
  const documents = useDocuments();
  const queue = useVerificationQueue();

  // Считаем агрегаты единожды при изменении входных данных.
  const stats = useMemo(() => {
    const totalDocs = documents.length;
    // Группировка документов по статусу.
    const byStatus = documents.reduce<Record<string, number>>((a, d) => {
      a[d.status] = (a[d.status] ?? 0) + 1;
      return a;
    }, {});
    const totalItems = priceRows.length;
    const autoMatched = totalItems - queue.length;
    const unmatched = queue.length;
    // % автосопоставленных позиций с точностью до 0.1.
    const matchRate = totalItems ? Math.round((autoMatched / totalItems) * 1000) / 10 : 0;
    // Сколько уникальных услуг покрыты хотя бы одной клиникой.
    const servicesCovered = new Set(priceRows.map((r) => r.service)).size;
    return {
      totalDocs,
      byStatus,
      totalItems,
      autoMatched,
      unmatched,
      matchRate,
      partners: partners.length,
      servicesTotal: services.length,
      servicesCovered,
    };
  }, [documents, queue]);

  return (
    <div className="space-y-8">
      {/* Сетка с ключевыми метриками. */}
      <section className="grid grid-cols-4 gap-4">
        <Metric label="Документов" value={stats.totalDocs} />
        <Metric label="Позиций прайса" value={stats.totalItems.toLocaleString("ru-RU")} />
        <Metric label="Автосопоставлено" value={`${stats.matchRate}%`} tone="emerald" />
        <Metric label="В очереди ручной верификации" value={stats.unmatched} tone="amber" />
        <Metric label="Партнёров" value={stats.partners} />
        <Metric label="Услуг в справочнике" value={stats.servicesTotal} />
        <Metric label="Услуг с покрытием" value={stats.servicesCovered} />
        <Metric label="Готовых документов" value={stats.byStatus.done ?? 0} tone="emerald" />
      </section>

      {/* Прогресс-бары по статусам документов. */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Статусы документов
        </h2>
        <div className="rounded-xl bg-panel p-5 ring-1 ring-border">
          <div className="space-y-3">
            {(["queued", "processing", "done", "error"] as const).map((s) => {
              const v = stats.byStatus[s] ?? 0;
              const pct = stats.totalDocs ? (v / stats.totalDocs) * 100 : 0;
              // Цвет полоски зависит от типа статуса.
              const color =
                s === "done"
                  ? "bg-emerald-500"
                  : s === "processing"
                    ? "bg-amber-500"
                    : s === "error"
                      ? "bg-rose-500"
                      : "bg-zinc-400";
              return (
                <div key={s}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="capitalize text-muted-foreground">{s}</span>
                    <span className="tabular-nums">{v}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className={"h-full " + color} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/** Карточка одной метрики на дашборде. */
function Metric({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: number | string;
  tone?: "default" | "emerald" | "amber";
}) {
  const cls =
    tone === "emerald"
      ? "text-emerald-600"
      : tone === "amber"
        ? "text-amber-600"
        : "text-foreground";
  return (
    <div className="rounded-xl bg-panel p-5 ring-1 ring-border">
      <div className={"text-2xl font-semibold tabular-nums " + cls}>{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
