// Страница «Статистика» (FSD: pages/admin-dashboard).
// Панель аналитики со светлой зелёной эстетикой и работающей кнопкой очистки базы прайсов.

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AppLayout } from "@/widgets/app-layout";
import { adminStatsQuery, resetDatabase } from "@/shared/api/queries";
import { RefreshCw, Trash2, ShieldCheck, Database, FileText, CheckCircle2, AlertTriangle, Building2 } from "lucide-react";

export function AdminDashboardPage() {
  const queryClient = useQueryClient();
  const statsQuery = useQuery(adminStatsQuery());
  const stats = statsQuery.data ?? {};

  // Рабочая очистка базы прайсов
  const clearMut = useMutation({
    mutationFn: () => resetDatabase(),
    onSuccess: () => {
      alert("База данных прайсов и документов успешно очищена!");
      queryClient.invalidateQueries();
    },
    onError: (err: any) => {
      alert(`Ошибка очистки базы: ${err.message || err}`);
    },
  });

  function handleClearPrices() {
    if (confirm("Вы уверены, что хотите полностью очистить все загруженные прайсы и документы? Базовый справочник сохранится.")) {
      clearMut.mutate();
    }
  }

  const partnersCount = Number(stats.partners_count ?? 0);
  const totalItems = Number(stats.total_price_items ?? 0);
  const matchRate = Number(stats.match_rate ?? 0);
  const servicesTotal = Number(stats.services_total ?? 0);
  const totalDocs = Number(stats.total_documents ?? 0);
  const unmatched = Number(stats.unmatched ?? 0);

  return (
    <AppLayout>
      {/* Шапка страницы */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[#1c2e1d]">Статистика и Мониторинг</h1>
          <p className="mt-1 text-sm text-[#52796f] font-medium">Общие метрики состояния архива медицинских услуг.</p>
        </div>
        <button
          type="button"
          onClick={() => statsQuery.refetch()}
          className="flex items-center gap-2 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-4 py-2.5 rounded-xl transition-all cursor-pointer"
        >
          <RefreshCw className="size-3.5 text-[#2d6a4f]" />
          <span>Обновить метрики</span>
        </button>
      </header>

      {/* Главная карточка */}
      <div className="bg-white rounded-3xl border border-[#d4e4d4] p-7 shadow-xs space-y-8">
        <div className="flex items-center justify-between border-b border-[#eaf4ea] pb-5">
          <div>
            <h2 className="text-lg font-bold text-[#1c2e1d]">Обзор показателей</h2>
            <p className="text-xs text-[#52796f] mt-0.5 font-medium">Текущий объем данных в базе системных архивов.</p>
          </div>
        </div>

        {/* Сетка метрик 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 1. Партнёры */}
          <div className="bg-[#f4fcf4] rounded-2xl border border-[#d4e4d4] p-6 space-y-2">
            <div className="flex items-center justify-between text-[#52796f]">
              <span className="text-[11px] font-extrabold uppercase tracking-wider">ПАРТНЁРЫ</span>
              <Building2 className="size-4 text-[#2d6a4f]" />
            </div>
            <div className="text-3xl font-black text-[#1c2e1d]">{partnersCount}</div>
            <div className="text-[11px] text-[#52796f]">Интегрированных клиник</div>
          </div>

          {/* 2. Позиции */}
          <div className="bg-[#f4fcf4] rounded-2xl border border-[#d4e4d4] p-6 space-y-2">
            <div className="flex items-center justify-between text-[#52796f]">
              <span className="text-[11px] font-extrabold uppercase tracking-wider">ПОЗИЦИИ</span>
              <Database className="size-4 text-[#2d6a4f]" />
            </div>
            <div className="text-3xl font-black text-[#1c2e1d]">{totalItems.toLocaleString("ru-RU")}</div>
            <div className="text-[11px] text-[#52796f]">Извлеченных тарифов</div>
          </div>

          {/* 3. Совпадение */}
          <div className="bg-[#f4fcf4] rounded-2xl border border-[#d4e4d4] p-6 space-y-2">
            <div className="flex items-center justify-between text-[#52796f]">
              <span className="text-[11px] font-extrabold uppercase tracking-wider">СОВПАДЕНИЕ</span>
              <CheckCircle2 className="size-4 text-[#2d6a4f]" />
            </div>
            <div className="text-3xl font-black text-[#1c2e1d]">{matchRate}%</div>
            <div className="text-[11px] text-[#52796f]">Точность автосопоставления</div>
          </div>

          {/* 4. Справочник */}
          <div className="bg-[#f4fcf4] rounded-2xl border border-[#d4e4d4] p-6 space-y-2">
            <div className="flex items-center justify-between text-[#52796f]">
              <span className="text-[11px] font-extrabold uppercase tracking-wider">СПРАВОЧНИК</span>
              <ShieldCheck className="size-4 text-[#2d6a4f]" />
            </div>
            <div className="text-3xl font-black text-[#1c2e1d]">{servicesTotal}</div>
            <div className="text-[11px] text-[#52796f]">Эталонных процедур</div>
          </div>

          {/* 5. Документы */}
          <div className="bg-[#f4fcf4] rounded-2xl border border-[#d4e4d4] p-6 space-y-2">
            <div className="flex items-center justify-between text-[#52796f]">
              <span className="text-[11px] font-extrabold uppercase tracking-wider">ДОКУМЕНТЫ</span>
              <FileText className="size-4 text-[#2d6a4f]" />
            </div>
            <div className="text-3xl font-black text-[#1c2e1d]">{totalDocs}</div>
            <div className="text-[11px] text-[#52796f]">Загруженных файлов</div>
          </div>

          {/* 6. Проверка */}
          <div className="bg-[#f4fcf4] rounded-2xl border border-[#d4e4d4] p-6 space-y-2">
            <div className="flex items-center justify-between text-[#52796f]">
              <span className="text-[11px] font-extrabold uppercase tracking-wider">ПРОВЕРКА</span>
              <AlertTriangle className="size-4 text-amber-600" />
            </div>
            <div className="text-3xl font-black text-[#1c2e1d]">{unmatched}</div>
            <div className="text-[11px] text-[#52796f]">Строк в очереди ревью</div>
          </div>
        </div>

        {/* Футер карточки с административной очисткой */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#eaf4ea]">
          <div className="text-xs text-[#52796f]">
            <span className="font-bold text-[#1c2e1d] block">Административное действие:</span>
            Полностью очистить загруженные прайсы и документы. Базовый справочник сохранится.
          </div>
          <button
            type="button"
            onClick={handleClearPrices}
            disabled={clearMut.isPending}
            className="flex items-center gap-2 border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            <Trash2 className="size-4 text-rose-600" />
            <span>{clearMut.isPending ? "Очистка базы..." : "Очистить прайсы"}</span>
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
