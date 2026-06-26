import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppLayout } from "../components/AppLayout";
import { Pager } from "../components/Pager";
import {
  cities,
  formatBYN,
  priceRows,
  priceTypes,
  partners,
  priceDocuments,
} from "../lib/mock-data";

const PAGE_SIZE = 25;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Поиск услуг · MedArchive" },
      {
        name: "description",
        content:
          "Сводная база цен медицинских услуг по всем клиникам-партнёрам с учётом категорий гражданства.",
      },
      { property: "og:title", content: "Поиск услуг · MedArchive" },
      {
        property: "og:description",
        content: "Сравнение цен услуг по клиникам-партнёрам в едином архиве MedArchive.",
      },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState<(typeof cities)[number]>("Все города");
  const [priceType, setPriceType] = useState<(typeof priceTypes)[number]>("Любая");
  const [page, setPage] = useState(1);

  const partnerCity = useMemo(
    () => Object.fromEntries(partners.map((p) => [p.id, p.city])) as Record<string, string>,
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return priceRows.filter((row) => {
      if (q && !row.service.toLowerCase().includes(q) && !row.partnerName.toLowerCase().includes(q))
        return false;
      if (city !== "Все города" && partnerCity[row.partnerId] !== city) return false;
      return true;
    });
  }, [query, city, partnerCity]);

  const pageRows = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const processing = priceDocuments.find((d) => d.status === "processing");
  const doneCount = priceDocuments.filter((d) => d.status === "done").length;
  const errorCount = priceDocuments.filter((d) => d.status === "error").length;

  return (
    <AppLayout>
      <section className="mb-12">
        <header className="mb-6">
          <h1 className="mb-2 text-balance text-2xl font-semibold tracking-tight">
            Поиск медицинских услуг
          </h1>
          <p className="max-w-[56ch] text-pretty text-sm text-muted-foreground">
            Сводная база цен по {partners.length} клиникам-партнёрам с учётом категорий
            гражданства. Данные обновляются автоматически из загруженных прайс-листов.
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
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Например: МРТ головного мозга..."
              className="h-9 w-full rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border transition-shadow focus:ring-2 focus:ring-brand"
            />
          </div>

          <div className="w-48">
            <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Город
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value as (typeof cities)[number])}
              className="h-9 w-full cursor-pointer rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-brand"
            >
              {cities.map((c) => (
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
              onChange={(e) => setPriceType(e.target.value as (typeof priceTypes)[number])}
              className="h-9 w-full cursor-pointer rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-brand"
            >
              {priceTypes.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => {
              /* filtering is live */
            }}
            className="h-9 rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground ring-1 ring-brand transition-colors hover:bg-brand-light"
          >
            Найти
          </button>
        </div>

        <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Результаты · {results.length}
            </span>
            <span className="text-[10px] text-muted-foreground">
              Сортировка: по релевантности
            </span>
          </div>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Клиника
                </th>
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Услуга
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Резидент
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Не-резидент
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Актуальность
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {results.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium">
                    <Link
                      to="/partners/$id"
                      params={{ id: row.partnerId }}
                      className="text-brand hover:underline"
                    >
                      {row.partnerName}
                    </Link>
                    <div className="text-[11px] text-muted-foreground">
                      {partnerCity[row.partnerId]}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {row.service}
                    <div className="text-[11px] text-muted-foreground">{row.category}</div>
                  </td>
                  <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                    {priceType === "Не-резидент" ? (
                      <span className="text-muted-foreground">—</span>
                    ) : (
                      formatBYN(row.resident)
                    )}
                  </td>
                  <td className="px-4 py-3 text-right text-sm tabular-nums text-muted-foreground">
                    {priceType === "Резидент" ? "—" : formatBYN(row.nonResident)}
                  </td>
                  <td className="px-4 py-3 text-right text-[11px] text-zinc-400">
                    {row.updatedAt}
                  </td>
                </tr>
              ))}
              {results.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-sm text-muted-foreground">
                    По заданным фильтрам ничего не найдено.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-8 rounded-xl bg-zinc-800 px-6 py-4 text-zinc-300">
          <div className="flex items-center gap-3">
            <div className="size-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-medium">
              {processing
                ? `Обработка: ${processing.filename} (${Math.round((processing.itemsMatched / Math.max(processing.itemsTotal, 1)) * 100)}%)`
                : "Очередь обработки пуста"}
            </span>
          </div>
          <div className="h-4 w-px bg-zinc-700" />
          <div className="flex items-center gap-2">
            <span className="text-xs">
              Документов готово:{" "}
              <span className="font-medium text-white">{doneCount}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">
              Ошибок: <span className="font-medium text-red-400">{errorCount}</span>
            </span>
          </div>
          <div className="ml-auto">
            <Link
              to="/admin"
              className="rounded-md bg-zinc-700/60 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Открыть админ-панель →
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
