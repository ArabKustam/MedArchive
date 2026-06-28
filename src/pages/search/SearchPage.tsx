// Страница «Поиск» (FSD: pages/search).
// Сбалансированный светло-зеленый интерфейс с интерактивной сортировкой по столбцам (Услуга, Цена, Совпадение)
// и полноценной пагинацией результатов.

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { AppLayout } from "@/widgets/app-layout";
import { searchQuery } from "@/shared/api/queries";
import { formatBYN } from "@/shared/api/mock-data";
import { Pager } from "@/shared/ui/Pager";
import { exportAllSearchResults } from "@/shared/lib/export-utils";
import type { PriceItemDTO } from "@/shared/api/types";
import { ArrowUpDown, ArrowUp, ArrowDown, Download, Search as SearchIcon, RefreshCw } from "lucide-react";

type SortOption = "relevance" | "price_asc" | "price_desc" | "name_asc" | "name_desc" | "match_score_desc";

export function SearchPage() {
  const [inputVal, setInputVal] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>("relevance");

  const pageSize = 25;

  // Выполнение поиска
  const searchReq = useQuery({
    ...searchQuery({
      query: searchTerm || undefined,
      sort_by: sortBy,
      page,
    }),
    enabled: true,
  });

  const items: PriceItemDTO[] = searchReq.data?.items ?? [];
  const total = searchReq.data?.total ?? items.length;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSearchTerm(inputVal.trim());
    setPage(1);
  }

  // Переключение сортировок по клику на заголовки столбцов
  const handleSortName = () => {
    if (sortBy === "name_asc") setSortBy("name_desc");
    else setSortBy("name_asc");
    setPage(1);
  };

  const handleSortPrice = () => {
    if (sortBy === "price_asc") setSortBy("price_desc");
    else setSortBy("price_asc");
    setPage(1);
  };

  const handleSortMatch = () => {
    if (sortBy === "match_score_desc") setSortBy("relevance");
    else setSortBy("match_score_desc");
    setPage(1);
  };

  return (
    <AppLayout>
      {/* Шапка страницы */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[#1c2e1d]">Поиск Услуг и Цен</h1>
          <p className="mt-1 text-sm text-[#52796f] font-medium">Поиск по всей базе медицинских прайс-листов клиник.</p>
        </div>
        <button
          type="button"
          onClick={() => searchReq.refetch()}
          className="flex items-center gap-2 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-4 py-2 rounded-xl transition-all cursor-pointer"
        >
          <RefreshCw className="size-3.5 text-[#2d6a4f]" />
          <span>Обновить результаты</span>
        </button>
      </header>

      {/* Главная карточка */}
      <div className="bg-white rounded-3xl border border-[#d4e4d4] p-7 shadow-xs space-y-6">
        {/* Верхняя панель */}
        <div className="flex items-center justify-between border-b border-[#eaf4ea] pb-4">
          <div>
            <h2 className="text-lg font-bold text-[#1c2e1d]">Панель поиска</h2>
            <p className="text-xs text-[#52796f] mt-0.5 font-medium">Введите наименование процедуры или исследованию.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => exportAllSearchResults({ query: searchTerm || undefined, sort_by: sortBy }, "csv")}
              className="flex items-center gap-1.5 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-3.5 py-1.5 rounded-xl transition-all cursor-pointer"
            >
              <Download className="size-3.5 text-[#2d6a4f]" />
              <span>CSV</span>
            </button>
            <button
              type="button"
              onClick={() => exportAllSearchResults({ query: searchTerm || undefined, sort_by: sortBy }, "xlsx")}
              className="flex items-center gap-1.5 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-3.5 py-1.5 rounded-xl transition-all cursor-pointer"
            >
              <Download className="size-3.5 text-[#2d6a4f]" />
              <span>XLSX</span>
            </button>
          </div>
        </div>

        {/* Форма поиска */}
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-4 top-3.5 size-4 text-[#52796f]" />
            <input
              type="text"
              value={inputVal}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)}
              placeholder="Например: УЗИ или Прием врача"
              className="w-full border border-[#d4e4d4] bg-white pl-11 pr-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-[#2d6a4f] font-bold text-[#1c2e1d]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold px-7 py-3 rounded-xl text-sm shadow-xs transition-colors cursor-pointer"
          >
            Искать
          </button>
        </form>

        {/* Секция таблицы и результатов */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-[#52796f]">
              {searchTerm ? `Результаты по запросу «${searchTerm}»: ${total} позиций` : `Всего в базе: ${total} позиций`}
            </span>
            {searchReq.isFetching && (
              <span className="text-xs text-[#2d6a4f] font-bold animate-pulse">Выполняю поиск по каталогам...</span>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[#d4e4d4] bg-[#f4fcf4] text-[11px] font-bold uppercase tracking-wider text-[#52796f]">
                  {/* Кликабельный заголовок Услуга */}
                  <th
                    onClick={handleSortName}
                    className="py-3.5 px-4 rounded-l-xl cursor-pointer hover:bg-[#eaf4ea] transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Услуга</span>
                      {sortBy === "name_asc" ? (
                        <ArrowUp className="size-3.5 text-[#2d6a4f]" />
                      ) : sortBy === "name_desc" ? (
                        <ArrowDown className="size-3.5 text-[#2d6a4f]" />
                      ) : (
                        <ArrowUpDown className="size-3.5 text-slate-400 opacity-60" />
                      )}
                    </div>
                  </th>

                  <th className="py-3.5 px-4">Клиника / Партнёр</th>

                  {/* Кликабельный заголовок Цена */}
                  <th
                    onClick={handleSortPrice}
                    className="py-3.5 px-4 text-right cursor-pointer hover:bg-[#eaf4ea] transition-colors select-none"
                  >
                    <div className="flex items-center justify-end gap-1.5">
                      <span>Цена (Резидент)</span>
                      {sortBy === "price_asc" ? (
                        <ArrowUp className="size-3.5 text-[#2d6a4f]" />
                      ) : sortBy === "price_desc" ? (
                        <ArrowDown className="size-3.5 text-[#2d6a4f]" />
                      ) : (
                        <ArrowUpDown className="size-3.5 text-slate-400 opacity-60" />
                      )}
                    </div>
                  </th>

                  {/* Кликабельный заголовок Совпадение */}
                  <th
                    onClick={handleSortMatch}
                    className="py-3.5 px-4 text-right rounded-r-xl cursor-pointer hover:bg-[#eaf4ea] transition-colors select-none"
                  >
                    <div className="flex items-center justify-end gap-1.5">
                      <span>Совпадение</span>
                      {sortBy === "match_score_desc" ? (
                        <ArrowDown className="size-3.5 text-[#2d6a4f]" />
                      ) : (
                        <ArrowUpDown className="size-3.5 text-slate-400 opacity-60" />
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eaf4ea]">
                {items.map((row) => (
                  <tr key={row.item_id} className="hover:bg-[#f4fcf4]/80 transition-colors">
                    <td className="py-4 px-4 text-xs font-bold text-[#1c2e1d]">{row.service_name_raw}</td>
                    <td className="py-4 px-4 text-xs text-[#52796f] font-semibold">
                      {row.partner_name || row.partner_id}
                    </td>
                    <td className="py-4 px-4 text-right text-xs font-black tabular-nums text-[#1c2e1d]">
                      {row.price_resident_kzt != null ? formatBYN(row.price_resident_kzt) : "—"}
                    </td>
                    <td className="py-4 px-4 text-right text-xs tabular-nums font-bold text-[#2d6a4f]">
                      {Math.round(row.match_score * 100)}%
                    </td>
                  </tr>
                ))}

                {items.length === 0 && !searchReq.isFetching && (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-xs text-[#52796f] font-medium">
                      {searchTerm ? `По запросу «${searchTerm}» ничего не найдено.` : "Позиций не найдено."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Полноценная пагинация результатов поиска */}
          <div className="mt-6">
            <Pager
              page={page}
              pageSize={pageSize}
              total={total}
              onChange={setPage}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
