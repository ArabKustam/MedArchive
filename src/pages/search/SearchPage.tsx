// Страница «Поиск услуг» (FSD: pages/search).
// Главный экран приложения: поиск по названию услуги/клиники с фильтрами
// по городу и типу цены (резидент / нерезидент). Под таблицей — статус-бар
// процессинга документов.

import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AppLayout } from "@/widgets/app-layout";
import { Pager } from "@/shared/ui/Pager";
import { PAGE_SIZE_DEFAULT } from "@/shared/config/constants";
import {
  cities,
  formatBYN,
  priceRows,
  priceTypes,
  partners,
} from "@/shared/api/mock-data";
import { useDocuments } from "@/entities/price-document";

export function SearchPage() {
  // Сырой ввод пользователя (управляемый input).
  const [query, setQuery] = useState("");
  // Дебаунсированное значение, по которому фактически фильтруются строки.
  const [debounced, setDebounced] = useState("");
  const [city, setCity] = useState<(typeof cities)[number]>("Все города");
  const [priceType, setPriceType] = useState<(typeof priceTypes)[number]>("Любая");
  const [page, setPage] = useState(1);

  // Реактивно считываем актуальный список документов (статус-бар внизу страницы).
  const documents = useDocuments();

  // Дебаунс 300 мс — снижает нагрузку при наборе текста.
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  // Карта partnerId → город. Мемоизируем, чтобы не пересоздавать каждый рендер.
  const partnerCity = useMemo(
    () => Object.fromEntries(partners.map((p) => [p.id, p.city])) as Record<string, string>,
    [],
  );

  // Применяем все фильтры к строкам прайса.
  const results = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    return priceRows.filter((row) => {
      if (q && !row.service.toLowerCase().includes(q) && !row.partnerName.toLowerCase().includes(q))
        return false;
      if (city !== "Все города" && partnerCity[row.partnerId] !== city) return false;
      return true;
    });
  }, [debounced, city, partnerCity]);

  // Подмножество для текущей страницы.
  const pageRows = results.slice((page - 1) * PAGE_SIZE_DEFAULT, page * PAGE_SIZE_DEFAULT);

  // Агрегаты для статус-бара процессинга.
  const processing = documents.find((d) => d.status === "processing");
  const doneCount = documents.filter((d) => d.status === "done").length;
  const errorCount = documents.filter((d) => d.status === "error").length;

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

        {/* Панель фильтров. */}
        <div className="mb-6 flex flex-wrap items-end gap-4 rounded-xl bg-panel p-4 ring-1 ring-border">
          <div className="min-w-[300px] flex-1">
            <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Поиск по названию
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1); // при смене фильтра сбрасываем пагинацию
              }}
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
            className="h-9 rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground ring-1 ring-brand transition-colors hover:bg-brand-light"
          >
            Найти
          </button>
        </div>

        {/* Таблица результатов. */}
        <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Результаты · {results.length.toLocaleString("ru-RU")}
            </span>
            <span className="text-[10px] text-muted-foreground">Сортировка: по релевантности</span>
          </div>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Клиника</th>
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Услуга</th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Резидент</th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Не-резидент</th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Актуальность</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pageRows.map((row, idx) => (
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
                  <td className="px-4 py-3 text-right text-[11px] text-zinc-400">{row.updatedAt}</td>
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
          <Pager page={page} pageSize={PAGE_SIZE_DEFAULT} total={results.length} onChange={setPage} />
        </div>
      </section>

      {/* Статус-бар обработки документов. */}
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
              Документов готово: <span className="font-medium text-white">{doneCount}</span>
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
