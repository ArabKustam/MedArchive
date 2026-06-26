import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "../components/AppLayout";
import {
  formatBYN,
  getPartner,
  partnerHistory,
  partnerPriceList,
  priceDocuments,
} from "../lib/mock-data";

export const Route = createFileRoute("/partners/$id")({
  loader: ({ params }) => {
    const partner = getPartner(params.id);
    if (!partner) throw notFound();
    return { partner };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.partner.name ?? "Клиника";
    return {
      meta: [
        { title: `${name} · MedArchive` },
        {
          name: "description",
          content: `Прайс-лист, история изменения цен и документы клиники ${name} в архиве MedArchive.`,
        },
        { property: "og:title", content: `${name} · MedArchive` },
        {
          property: "og:description",
          content: `Прайс-лист и история цен клиники ${name}.`,
        },
      ],
    };
  },
  component: PartnerPage,
  notFoundComponent: () => (
    <AppLayout>
      <div className="rounded-xl bg-panel p-10 text-center ring-1 ring-border">
        <h1 className="text-lg font-semibold">Клиника не найдена</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Запрошенный партнёр отсутствует в архиве.
        </p>
        <Link
          to="/partners"
          className="mt-6 inline-flex h-9 items-center rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground hover:bg-brand-light"
        >
          К списку клиник
        </Link>
      </div>
    </AppLayout>
  ),
  errorComponent: ({ error }) => (
    <AppLayout>
      <div className="rounded-xl bg-panel p-10 text-center ring-1 ring-border">
        <h1 className="text-lg font-semibold">Не удалось загрузить клинику</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </AppLayout>
  ),
});

type Tab = "prices" | "history" | "documents";

function PartnerPage() {
  const { partner } = Route.useLoaderData();
  const [tab, setTab] = useState<Tab>("prices");

  const prices = partnerPriceList[partner.id] ?? [];
  const history = partnerHistory[partner.id] ?? [];
  const docs = priceDocuments.filter((d) => d.partnerId === partner.id);

  return (
    <AppLayout>
      <nav className="mb-4 text-xs text-muted-foreground">
        <Link to="/partners" className="hover:text-foreground">
          Клиники-партнёры
        </Link>
        <span className="mx-1.5 text-zinc-400">/</span>
        <span className="text-foreground">{partner.name}</span>
      </nav>

      <header className="mb-8 flex flex-wrap items-start justify-between gap-6 rounded-xl bg-panel p-6 ring-1 ring-border">
        <div className="flex gap-5">
          <div className="grid size-14 place-items-center rounded-lg bg-brand/10 text-base font-semibold text-brand ring-1 ring-border">
            {partner.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-semibold tracking-tight">{partner.name}</h1>
              <span
                className={
                  "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-semibold uppercase " +
                  (partner.status === "active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-zinc-200 text-zinc-600")
                }
              >
                <span
                  className={
                    "size-1.5 rounded-full " +
                    (partner.status === "active" ? "bg-emerald-500" : "bg-zinc-400")
                  }
                />
                {partner.status === "active" ? "Активен" : "Пауза"}
              </span>
              <span className="rounded bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">
                API {partner.apiVersion}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {partner.city}, {partner.address}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {partner.phone} · {partner.email}
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-x-8 gap-y-1 text-right">
          <Stat label="Услуг" value={partner.servicesCount.toLocaleString("ru-RU")} />
          <Stat label="Документов" value={partner.docsCount.toString()} />
          <Stat label="Обновлено" value={partner.lastUpload} />
        </dl>
      </header>

      <div className="mb-4 flex gap-1 border-b border-border">
        <TabButton active={tab === "prices"} onClick={() => setTab("prices")}>
          Прайс-лист ({prices.length})
        </TabButton>
        <TabButton active={tab === "history"} onClick={() => setTab("history")}>
          История цен
        </TabButton>
        <TabButton active={tab === "documents"} onClick={() => setTab("documents")}>
          Документы ({docs.length})
        </TabButton>
      </div>

      {tab === "prices" && (
        <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Услуга
                </th>
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Категория
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Резидент
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Не-резидент
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {prices.map((row, idx) => (
                <tr key={idx} className="hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium">{row.service}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{row.category}</td>
                  <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                    {formatBYN(row.resident)}
                  </td>
                  <td className="px-4 py-3 text-right text-sm tabular-nums text-muted-foreground">
                    {formatBYN(row.nonResident)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "history" && <HistoryChart data={history} />}

      {tab === "documents" && (
        <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Файл
                </th>
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Загружено
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Позиций
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Сопоставлено
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Статус
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {docs.map((d) => (
                <tr key={d.id} className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-mono text-sm">{d.filename}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{d.uploadedAt}</td>
                  <td className="px-4 py-3 text-right text-sm tabular-nums">{d.itemsTotal}</td>
                  <td className="px-4 py-3 text-right text-sm tabular-nums">
                    {d.itemsMatched}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <StatusPill status={d.status} />
                  </td>
                </tr>
              ))}
              {docs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-sm text-muted-foreground">
                    Документов нет.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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

function HistoryChart({ data }: { data: { date: string; resident: number; nonResident: number }[] }) {
  if (data.length === 0) {
    return (
      <div className="rounded-xl bg-panel p-10 text-center text-sm text-muted-foreground ring-1 ring-border">
        Нет данных за период.
      </div>
    );
  }

  const W = 720;
  const H = 220;
  const PAD = 32;
  const maxY = Math.max(...data.map((d) => d.nonResident)) * 1.1;
  const minY = Math.min(...data.map((d) => d.resident)) * 0.9;
  const sx = (i: number) => PAD + (i * (W - PAD * 2)) / Math.max(data.length - 1, 1);
  const sy = (v: number) => H - PAD - ((v - minY) / (maxY - minY)) * (H - PAD * 2);
  const path = (key: "resident" | "nonResident") =>
    data.map((d, i) => `${i === 0 ? "M" : "L"} ${sx(i)} ${sy(d[key])}`).join(" ");

  const last = data[data.length - 1];
  const first = data[0];
  const deltaR = (((last.resident - first.resident) / first.resident) * 100).toFixed(1);
  const deltaN = (((last.nonResident - first.nonResident) / first.nonResident) * 100).toFixed(1);

  return (
    <div className="rounded-xl bg-panel p-6 ring-1 ring-border">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold">Динамика цен · 6 мес.</h2>
          <p className="text-xs text-muted-foreground">
            Изменение для категорий «Резидент» и «Не-резидент» по эталонной услуге.
          </p>
        </div>
        <div className="flex gap-6 text-right">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Резидент
            </div>
            <div className="text-sm font-semibold tabular-nums">
              {formatBYN(last.resident)}{" "}
              <span className={Number(deltaR) >= 0 ? "text-rose-500" : "text-emerald-500"}>
                {Number(deltaR) >= 0 ? "+" : ""}
                {deltaR}%
              </span>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Не-резидент
            </div>
            <div className="text-sm font-semibold tabular-nums">
              {formatBYN(last.nonResident)}{" "}
              <span className={Number(deltaN) >= 0 ? "text-rose-500" : "text-emerald-500"}>
                {Number(deltaN) >= 0 ? "+" : ""}
                {deltaN}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        {[0.25, 0.5, 0.75].map((p) => (
          <line
            key={p}
            x1={PAD}
            x2={W - PAD}
            y1={PAD + p * (H - PAD * 2)}
            y2={PAD + p * (H - PAD * 2)}
            stroke="currentColor"
            className="text-zinc-200"
            strokeDasharray="2 3"
          />
        ))}
        <path d={path("nonResident")} fill="none" stroke="oklch(0.69 0.13 178)" strokeWidth={2} />
        <path d={path("resident")} fill="none" stroke="oklch(0.5 0.085 178)" strokeWidth={2} />
        {data.map((d, i) => (
          <g key={i}>
            <circle cx={sx(i)} cy={sy(d.resident)} r={3} fill="oklch(0.5 0.085 178)" />
            <circle cx={sx(i)} cy={sy(d.nonResident)} r={3} fill="oklch(0.69 0.13 178)" />
            <text
              x={sx(i)}
              y={H - 8}
              textAnchor="middle"
              className="fill-zinc-400 text-[10px]"
            >
              {d.date}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function StatusPill({ status }: { status: "queued" | "processing" | "done" | "error" }) {
  const map = {
    queued: { label: "В очереди", cls: "bg-zinc-200 text-zinc-700", dot: "bg-zinc-500" },
    processing: {
      label: "Обработка",
      cls: "bg-amber-100 text-amber-800",
      dot: "bg-amber-500 animate-pulse",
    },
    done: { label: "Готов", cls: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500" },
    error: { label: "Ошибка", cls: "bg-rose-100 text-rose-700", dot: "bg-rose-500" },
  } as const;
  const s = map[status];
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-semibold uppercase " +
        s.cls
      }
    >
      <span className={"size-1.5 rounded-full " + s.dot} />
      {s.label}
    </span>
  );
}
