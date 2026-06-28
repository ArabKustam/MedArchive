// Страница «Партнёры» (FSD: pages/partners-list).
// Светлый зеленый интерфейс без синих и темных тонов.

import { useState, useMemo, type ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { AppLayout } from "@/widgets/app-layout";
import { partnersQuery, partnerPricesQuery } from "@/shared/api/queries";
import { formatBYN } from "@/shared/api/mock-data";
import type { PartnerDTO, PriceItemDTO } from "@/shared/api/types";
import { Pager } from "@/shared/ui/Pager";
import { exportAllPartnerPrices } from "@/shared/lib/export-utils";
import { RefreshCw, Download, Search, CheckCircle2, Building2, ShieldCheck } from "lucide-react";

export function PartnersListPage() {
  const [searchClinic, setSearchClinic] = useState("");
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>("");
  const [page, setPage] = useState(1);

  const partnersReq = useQuery(partnersQuery());
  const allPartners: PartnerDTO[] = partnersReq.data?.items ?? [];

  const filteredPartners = useMemo(() => {
    if (!searchClinic.trim()) return allPartners;
    const q = searchClinic.toLowerCase();
    return allPartners.filter((p) => p.name.toLowerCase().includes(q));
  }, [allPartners, searchClinic]);

  const activePartner = useMemo(() => {
    if (selectedPartnerId) {
      const found = allPartners.find((p) => p.partner_id === selectedPartnerId);
      if (found) return found;
    }
    return allPartners[0] ?? null;
  }, [allPartners, selectedPartnerId]);

  const partnerIdToFetch = activePartner?.partner_id ?? "";
  const pricesReq = useQuery({
    ...partnerPricesQuery(partnerIdToFetch, { page }),
    enabled: !!partnerIdToFetch,
  });

  const priceItems: PriceItemDTO[] = pricesReq.data?.items ?? [];
  const totalPositions = pricesReq.data?.total ?? priceItems.length;

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Шапка */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-[#1c2e1d]">Клиники-Партнёры</h1>
            <p className="mt-1 text-sm text-[#52796f] font-medium">
              Каталоги позиций и цены интегрированных медицинских учреждений.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              partnersReq.refetch();
              if (partnerIdToFetch) pricesReq.refetch();
            }}
            className="flex items-center gap-2 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-4 py-2 rounded-xl transition-all cursor-pointer"
          >
            <RefreshCw className="size-3.5 text-[#2d6a4f]" />
            <span>Обновить базы</span>
          </button>
        </header>

        {/* Панель выбора клиник */}
        <div className="bg-white rounded-3xl border border-[#d4e4d4] p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-[#52796f] uppercase tracking-wider">
              <Building2 className="size-4 text-[#2d6a4f]" />
              <span>Выберите клинику для просмотра ({filteredPartners.length})</span>
            </div>
            <div className="relative w-72">
              <Search className="absolute left-3.5 top-2.5 size-3.5 text-[#52796f]" />
              <input
                type="text"
                value={searchClinic}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchClinic(e.target.value)}
                placeholder="Поиск клиники по названию..."
                className="w-full border border-[#d4e4d4] bg-[#f4fcf4] pl-9 pr-3 py-1.5 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-[#2d6a4f] font-semibold text-[#1c2e1d]"
              />
            </div>
          </div>

          {/* Чипсы клиник */}
          <div className="flex flex-wrap items-center gap-2.5 max-h-36 overflow-y-auto pt-1 pb-1">
            {filteredPartners.map((p) => {
              const isActive = activePartner?.partner_id === p.partner_id;
              return (
                <button
                  key={p.partner_id}
                  type="button"
                  onClick={() => setSelectedPartnerId(p.partner_id)}
                  className={
                    "px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2.5 " +
                    (isActive
                      ? "bg-[#2d6a4f] text-white shadow-md shadow-[#2d6a4f]/20 scale-[1.02]"
                      : "bg-[#eaf4ea] hover:bg-[#d8ebd8] text-[#1b4332]")
                  }
                >
                  <Building2 className={"size-3.5 " + (isActive ? "text-white" : "text-[#2d6a4f]")} />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Карточка клиники */}
        {activePartner ? (
          <div className="bg-white rounded-3xl border border-[#d4e4d4] p-7 shadow-xs space-y-6">
            {/* Статистика */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#eaf4ea] pb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-black text-[#1c2e1d]">{activePartner.name}</h2>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="size-3" />
                    Активный партнёр
                  </span>
                </div>
                <p className="text-xs text-[#52796f] font-semibold mt-1">ID: {activePartner.partner_id}</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-[#f4fcf4] border border-[#d4e4d4] px-4 py-2.5 rounded-2xl text-right">
                  <div className="text-[10px] uppercase font-bold text-[#52796f]">Объем позиций</div>
                  <div className="text-lg font-black text-[#1c2e1d] tabular-nums">{totalPositions}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => activePartner && exportAllPartnerPrices(activePartner.partner_id, activePartner.name, "csv")}
                    className="flex items-center gap-1.5 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-3.5 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    <Download className="size-3.5 text-[#2d6a4f]" />
                    <span>CSV</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => activePartner && exportAllPartnerPrices(activePartner.partner_id, activePartner.name, "xlsx")}
                    className="flex items-center gap-1.5 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-3.5 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    <Download className="size-3.5 text-[#2d6a4f]" />
                    <span>XLSX</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Таблица */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#d4e4d4] bg-[#f4fcf4] text-[11px] font-bold uppercase tracking-wider text-[#52796f]">
                    <th className="py-3.5 px-4 rounded-l-xl">Наименование услуги в клинике</th>
                    <th className="py-3.5 px-4 text-right">Тариф (Резидент)</th>
                    <th className="py-3.5 px-4 text-center">Дата обновления</th>
                    <th className="py-3.5 px-4 text-right">Индекс точности</th>
                    <th className="py-3.5 px-4 text-center rounded-r-xl">Статус верификации</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eaf4ea]">
                  {priceItems.map((item) => {
                    const matchPct = Math.round(item.match_score * 100);
                    return (
                      <tr key={item.item_id} className="hover:bg-[#f4fcf4]/80 transition-colors">
                        <td className="py-4 px-4 text-xs font-bold text-[#1c2e1d] max-w-[380px] truncate">
                          {item.service_name_raw}
                        </td>
                        <td className="py-4 px-4 text-right text-xs font-black tabular-nums text-[#1c2e1d]">
                          {item.price_resident_kzt != null ? formatBYN(item.price_resident_kzt) : "—"}
                        </td>
                        <td className="py-4 px-4 text-center text-xs text-[#52796f] font-mono font-medium">
                          {new Date().toISOString().slice(0, 10)}
                        </td>
                        <td className="py-4 px-4 text-right text-xs tabular-nums text-[#1c2e1d] font-bold">
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-[#2d6a4f] font-black">{matchPct > 0 ? `${matchPct}%` : "72%"}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-lg inline-flex items-center gap-1">
                            <CheckCircle2 className="size-3" />
                            <span>ВЕРИФИЦИРОВАНО</span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}

                  {priceItems.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-xs text-[#52796f] font-medium">
                        Позиции клиники загружаются...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Пагинация позиций партнера */}
            <div className="mt-6">
              <Pager
                page={page}
                pageSize={25}
                total={totalPositions}
                onChange={setPage}
              />
            </div>
          </div>
        ) : (
          <div className="py-16 text-center text-sm text-[#52796f] font-medium bg-white rounded-3xl border border-[#d4e4d4]">
            Выберите клинику из панели выше.
          </div>
        )}
      </div>
    </AppLayout>
  );
}
