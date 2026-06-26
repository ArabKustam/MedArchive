// Страница каталога услуг (FSD: pages/services-list).

import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppLayout } from "@/widgets/app-layout";
import { Pager } from "@/shared/ui/Pager";
import { PAGE_SIZE_DEFAULT } from "@/shared/config/constants";
import { services, serviceCategories } from "@/entities/service";
import { formatBYN } from "@/shared/api/mock-data";

export function ServicesListPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof serviceCategories)[number]>("Все категории");
  const [page, setPage] = useState(1);

  // Фильтрация: поиск по имени + категория.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      if (q && !s.name.toLowerCase().includes(q)) return false;
      if (cat !== "Все категории" && s.category !== cat) return false;
      return true;
    });
  }, [query, cat]);

  const pageRows = filtered.slice((page - 1) * PAGE_SIZE_DEFAULT, page * PAGE_SIZE_DEFAULT);

  return (
    <AppLayout>
      <header className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">Каталог услуг</h1>
        <p className="max-w-[56ch] text-sm text-muted-foreground">
          {services.length.toLocaleString("ru-RU")} нормализованных позиций справочника. Для каждой
          услуги — число клиник, диапазон и средняя цена.
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
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Например: УЗИ, МРТ, консультация..."
            className="h-9 w-full rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-brand"
          />
        </div>
        <div className="w-56">
          <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Категория
          </label>
          <select
            value={cat}
            onChange={(e) => {
              setCat(e.target.value as (typeof serviceCategories)[number]);
              setPage(1);
            }}
            className="h-9 w-full cursor-pointer rounded-md bg-card px-3 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-brand"
          >
            {serviceCategories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Услуг · {filtered.length.toLocaleString("ru-RU")}
          </span>
        </div>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Услуга</th>
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Категория</th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Клиник</th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Мин.</th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Средняя</th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Макс.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pageRows.map((s) => (
              <tr key={s.id} className="hover:bg-muted/30">
                <td className="px-4 py-3 text-sm font-medium">
                  <Link to="/services/$id" params={{ id: s.id }} className="text-brand hover:underline">
                    {s.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{s.category}</td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">{s.partnersCount}</td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">
                  {s.minPrice ? formatBYN(s.minPrice) : "—"}
                </td>
                <td className="px-4 py-3 text-right text-sm font-medium tabular-nums">
                  {s.avgPrice ? formatBYN(s.avgPrice) : "—"}
                </td>
                <td className="px-4 py-3 text-right text-sm tabular-nums text-muted-foreground">
                  {s.maxPrice ? formatBYN(s.maxPrice) : "—"}
                </td>
              </tr>
            ))}
            {pageRows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-sm text-muted-foreground">
                  Ничего не найдено.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pager page={page} pageSize={PAGE_SIZE_DEFAULT} total={filtered.length} onChange={setPage} />
      </div>
    </AppLayout>
  );
}
