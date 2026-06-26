import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppLayout } from "../components/AppLayout";
import { Pager } from "../components/Pager";
import { cities, partners } from "../lib/mock-data";

const PAGE_SIZE = 20;

export const Route = createFileRoute("/partners/")({
  head: () => ({
    meta: [
      { title: "Клиники-партнёры · MedArchive" },
      {
        name: "description",
        content:
          "Список клиник-партнёров MedArchive: контакты, статус интеграции и объём загруженных прайсов.",
      },
      { property: "og:title", content: "Клиники-партнёры · MedArchive" },
      {
        property: "og:description",
        content: "Список клиник-партнёров, объём загруженных прайсов и статус интеграции.",
      },
    ],
  }),
  component: PartnersList,
});

function PartnersList() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState<(typeof cities)[number]>("Все города");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return partners.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (city !== "Все города" && p.city !== city) return false;
      return true;
    });
  }, [query, city]);

  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <AppLayout>
      <header className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">Клиники-партнёры</h1>
        <p className="max-w-[56ch] text-sm text-muted-foreground">
          {partners.length} активных партнёров с автоматической загрузкой прайс-листов.
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
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
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
            onChange={(e) => {
              setCity(e.target.value as (typeof cities)[number]);
              setPage(1);
            }}
            className="h-9 w-full cursor-pointer rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-brand"
          >
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
        <div className="border-b border-border bg-muted/40 px-4 py-2.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Партнёров · {filtered.length}
        </div>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Клиника
              </th>
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Город
              </th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Услуг
              </th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Документов
              </th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Статус
              </th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Обновлено
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pageRows.map((p) => (
              <tr key={p.id} className="transition-colors hover:bg-muted/30">
                <td className="px-4 py-3 text-sm font-medium">
                  <Link
                    to="/partners/$id"
                    params={{ id: p.id }}
                    className="text-brand hover:underline"
                  >
                    {p.name}
                  </Link>
                  <div className="text-[11px] text-muted-foreground">{p.address}</div>
                </td>
                <td className="px-4 py-3 text-sm">{p.city}</td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">
                  {p.servicesCount.toLocaleString("ru-RU")}
                </td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">{p.docsCount}</td>
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
                <td className="px-4 py-3 text-right text-[11px] text-zinc-400">{p.lastUpload}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pager page={page} pageSize={PAGE_SIZE} total={filtered.length} onChange={setPage} />
      </div>
    </AppLayout>
  );
}
