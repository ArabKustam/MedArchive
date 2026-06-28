// Страница «Ревью» (FSD: pages/admin-verify).
// Переосмысленная удобная система верификации с точной фильтрацией по категориям на уровне бэкенда,
// понятной пагинацией страниц, авто-переходом к следующему элементу и просмотром снайпета оригинала.

import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AppLayout } from "@/widgets/app-layout";
import { verificationQueueQuery, decideVerification } from "@/shared/api/queries";
import type { VerificationItemDTO, VerificationDecisionDTO } from "@/shared/api/types";
import {
  CheckCircle2,
  XCircle,
  PlusCircle,
  FileText,
  DollarSign,
  Edit3,
  RefreshCw,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

type ReasonFilter = "all" | "suspicious_price" | "unmatched" | "low_match";

export function AdminVerifyPage() {
  const [page, setPage] = useState(1);
  const [reasonFilter, setReasonFilter] = useState<ReasonFilter>("all");
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const [editPrice, setEditPrice] = useState<string>("");
  const [editServiceName, setEditServiceName] = useState<string>("");
  const [customCategory, setCustomCategory] = useState<string>("Общие");
  const [statusAlert, setStatusAlert] = useState<string | null>(null);

  const queryClient = useQueryClient();

  // Бэкенд-запрос с фильтром по причине и пагинацией по 50 позиций
  const queueReq = useQuery(
    verificationQueueQuery({
      page,
      page_size: 50,
      reason: reasonFilter,
    })
  );

  const items: VerificationItemDTO[] = queueReq.data?.items ?? [];
  const totalItems = queueReq.data?.total ?? items.length;
  const totalPages = queueReq.data?.pages ?? 1;

  // Выбранная позиция
  const activeItem = useMemo(() => {
    if (selectedItemId) {
      const found = items.find((it) => it.item_id === selectedItemId);
      if (found) return found;
    }
    return items[0] ?? null;
  }, [items, selectedItemId]);

  // Смена элемента с авто-предзаполнением
  const handleSelectItem = (item: VerificationItemDTO) => {
    setSelectedItemId(item.item_id);
    setEditPrice(item.price_resident_kzt != null ? String(item.price_resident_kzt) : "");
    setEditServiceName(item.service_name_raw);
    setStatusAlert(null);
  };

  // Мутация принятия решения
  const decideMut = useMutation({
    mutationFn: ({ id, decision }: { id: string; decision: VerificationDecisionDTO }) =>
      decideVerification(id, decision),
    onSuccess: () => {
      setStatusAlert("Изменения успешно сохранены!");
      queryClient.invalidateQueries({ queryKey: ["verification"] });
      queryClient.invalidateQueries({ queryKey: ["search"] });

      // Автоматический выбор следующего элемента для быстрого прохождения всей очереди!
      if (items.length > 1 && activeItem) {
        const currentIndex = items.findIndex((it) => it.item_id === activeItem.item_id);
        const nextItem = items[currentIndex + 1] || items[0];
        if (nextItem) handleSelectItem(nextItem);
      }
    },
    onError: (err: any) => {
      setStatusAlert(`Ошибка: ${err.message || err}`);
    },
  });

  const handleApplyDecision = (action: "accept" | "reject" | "create_new" | "update_and_accept", serviceId?: string) => {
    if (!activeItem) return;

    const parsedPrice = editPrice ? floatOrNull(editPrice) : activeItem.price_resident_kzt;

    const decision: VerificationDecisionDTO = {
      action,
      service_id: serviceId,
      updated_price_resident: parsedPrice,
      updated_service_name: editServiceName !== activeItem.service_name_raw ? editServiceName : undefined,
      new_service_name: action === "create_new" ? editServiceName : undefined,
      new_category: action === "create_new" ? customCategory : undefined,
    };

    decideMut.mutate({ id: activeItem.item_id, decision });
  };

  function floatOrNull(val: string): number | null {
    const n = parseFloat(val.replace(",", "."));
    return isNaN(n) ? null : n;
  }

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Шапка */}
        <header className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black tracking-tight text-[#1c2e1d]">Ревью и Верификация</h1>
              <span className="bg-[#2d6a4f] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-xs">
                Позиций в категории: {totalItems}
              </span>
            </div>
            <p className="mt-1 text-sm text-[#52796f] font-medium">
              Удобное построчное подтверждение сопоставлений с авто-переходом к следующей услуге.
            </p>
          </div>
          <button
            type="button"
            onClick={() => queueReq.refetch()}
            className="flex items-center gap-2 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-4 py-2 rounded-xl transition-all cursor-pointer"
          >
            <RefreshCw className="size-3.5 text-[#2d6a4f]" />
            <span>Обновить очередь</span>
          </button>
        </header>

        {/* 3 Подсказки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-[#d4e4d4] p-5 shadow-xs flex items-start gap-3.5">
            <div className="size-8 rounded-xl bg-[#eaf4ea] text-[#2d6a4f] grid place-items-center font-bold text-sm flex-shrink-0">
              1
            </div>
            <div>
              <div className="text-xs font-bold text-[#1c2e1d]">Выберите вкладку причины</div>
              <div className="text-[11px] text-[#52796f] mt-0.5">
                Каждая вкладка загружает с бэкенда точный список позиций именно по этой проблеме.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#d4e4d4] p-5 shadow-xs flex items-start gap-3.5">
            <div className="size-8 rounded-xl bg-[#eaf4ea] text-[#2d6a4f] grid place-items-center font-bold text-sm flex-shrink-0">
              2
            </div>
            <div>
              <div className="text-xs font-bold text-[#1c2e1d]">Листайте страницы очереди</div>
              <div className="text-[11px] text-[#52796f] mt-0.5">
                Используйте навигатор `Страница X из Y` для удобного просмотра всего массива.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#d4e4d4] p-5 shadow-xs flex items-start gap-3.5">
            <div className="size-8 rounded-xl bg-[#eaf4ea] text-[#2d6a4f] grid place-items-center font-bold text-sm flex-shrink-0">
              3
            </div>
            <div>
              <div className="text-xs font-bold text-[#1c2e1d]">Быстрое подтверждение</div>
              <div className="text-[11px] text-[#52796f] mt-0.5">
                При клике на решение система сразу предлагает подставить следующую строку!
              </div>
            </div>
          </div>
        </div>

        {/* Карточка очереди */}
        <div className="bg-white rounded-3xl border border-[#d4e4d4] p-7 shadow-xs space-y-6">
          {/* Фильтры по категориям причин */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eaf4ea] pb-5">
            <div className="flex items-center gap-2">
              <Layers className="size-4 text-[#2d6a4f]" />
              <span className="text-xs font-extrabold text-[#1c2e1d] uppercase tracking-wider">
                Категория ревью:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "Все категории" },
                { id: "unmatched", label: "Нет в справочнике" },
                { id: "low_match", label: "Низкое совпадение" },
                { id: "suspicious_price", label: "Подозрительная цена" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setReasonFilter(f.id as ReasonFilter);
                    setPage(1);
                  }}
                  className={
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer " +
                    (reasonFilter === f.id
                      ? "bg-[#2d6a4f] text-white shadow-xs"
                      : "bg-[#f4fcf4] hover:bg-[#eaf4ea] text-[#1b4332] border border-[#d4e4d4]")
                  }
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Главный Split View */}
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Левая колонка: Элементы очереди с полноценной навигацией страниц */}
            <div className="col-span-12 lg:col-span-5 border-r border-[#eaf4ea] pr-3 space-y-3">
              {/* Удобный блок переключения страниц */}
              <div className="flex items-center justify-between bg-[#f4fcf4] border border-[#d4e4d4] p-3 rounded-2xl text-xs font-bold text-[#1c2e1d]">
                <span className="text-[#52796f]">
                  Стр. <strong className="text-[#1c2e1d]">{page}</strong> из {totalPages} (Показано {items.length})
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page <= 1}
                    className="p-1.5 rounded-lg border border-[#d4e4d4] bg-white hover:bg-[#eaf4ea] disabled:opacity-30 cursor-pointer flex items-center gap-1 text-[11px] font-bold text-[#1b4332]"
                  >
                    <ChevronLeft className="size-4 text-[#2d6a4f]" />
                    <span>Назад</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page >= totalPages}
                    className="p-1.5 rounded-lg border border-[#d4e4d4] bg-white hover:bg-[#eaf4ea] disabled:opacity-30 cursor-pointer flex items-center gap-1 text-[11px] font-bold text-[#1b4332]"
                  >
                    <span>Далее</span>
                    <ChevronRight className="size-4 text-[#2d6a4f]" />
                  </button>
                </div>
              </div>

              {/* Список элементов текущей страницы */}
              <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
                {items.map((it) => {
                  const isSelected = activeItem?.item_id === it.item_id;
                  return (
                    <div
                      key={it.item_id}
                      onClick={() => handleSelectItem(it)}
                      className={
                        "p-4 rounded-2xl border transition-all cursor-pointer space-y-2 " +
                        (isSelected
                          ? "border-[#2d6a4f] bg-[#f4fcf4] shadow-xs ring-2 ring-[#2d6a4f]"
                          : "border-[#d4e4d4] bg-white hover:bg-[#f4fcf4]/50")
                      }
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#52796f] uppercase truncate max-w-[180px]">
                          {it.partner_name || "Клиника"}
                        </span>
                        <span
                          className={
                            "text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase " +
                            (it.reason === "suspicious_price"
                              ? "bg-amber-100 text-amber-800"
                              : it.reason === "unmatched"
                                ? "bg-rose-100 text-rose-800"
                                : "bg-[#eaf4ea] text-[#2d6a4f]")
                          }
                        >
                          {it.reason_label}
                        </span>
                      </div>

                      <div className="text-xs font-bold text-[#1c2e1d] leading-snug">{it.service_name_raw}</div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="font-mono text-[#52796f] font-semibold">
                          {it.price_resident_kzt != null ? `${it.price_resident_kzt.toLocaleString()} ₸` : "Цена не указана"}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">📄 {it.filename}</span>
                      </div>
                    </div>
                  );
                })}

                {items.length === 0 && (
                  <div className="py-20 text-center text-xs text-[#52796f] font-medium bg-[#f4fcf4] rounded-2xl border border-dashed border-[#d4e4d4]">
                    В категории «{reasonFilter}» на странице {page} позиций не найдено.
                  </div>
                )}
              </div>
            </div>

            {/* Правая колонка: Инспектор файла и Контекстное редактирование */}
            <div className="col-span-12 lg:col-span-7 pl-2 space-y-6">
              {activeItem ? (
                <>
                  {/* Просмотрщик оригинала */}
                  <div className="bg-[#f4fcf4] border border-[#d4e4d4] rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#1c2e1d]">
                        <FileText className="size-4 text-[#2d6a4f]" />
                        <span>Просмотр строки оригинала документа</span>
                      </div>
                      <span className="text-[10px] font-bold bg-[#eaf4ea] text-[#2d6a4f] px-2.5 py-0.5 rounded-md">
                        Файл: {activeItem.filename}
                      </span>
                    </div>

                    <div className="text-xs font-mono bg-white p-3.5 rounded-xl border border-[#d4e4d4] text-[#1c2e1d] leading-relaxed break-all">
                      {activeItem.raw_context_snippet || `Строка из файла: ${activeItem.service_name_raw} — ${activeItem.price_resident_kzt} ₸`}
                    </div>
                  </div>

                  {statusAlert && (
                    <div className="p-3.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600" />
                      <span>{statusAlert}</span>
                    </div>
                  )}

                  {/* Контекстные редакторы */}
                  <div className="space-y-5">
                    <h3 className="text-sm font-black text-[#1c2e1d] uppercase tracking-wider flex items-center gap-2">
                      <Edit3 className="size-4 text-[#2d6a4f]" />
                      <span>Редактирование и решение</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                      <div className="sm:col-span-8 space-y-1">
                        <label className="text-[11px] font-bold text-[#52796f]">
                          Наименование услуги (исправление вручную):
                        </label>
                        <input
                          type="text"
                          value={editServiceName}
                          onChange={(e) => setEditServiceName(e.target.value)}
                          className="w-full border border-[#d4e4d4] bg-white px-3.5 py-2 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-[#2d6a4f] font-bold text-[#1c2e1d]"
                        />
                      </div>

                      <div className="sm:col-span-4 space-y-1">
                        <label className="text-[11px] font-bold text-[#52796f]">Цена (Резидент, ₸):</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 size-3.5 text-[#52796f]" />
                          <input
                            type="text"
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                            placeholder="0"
                            className="w-full border border-[#d4e4d4] bg-white pl-8 pr-3 py-2 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-[#2d6a4f] font-mono font-bold text-[#1c2e1d]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Кандидаты */}
                    <div className="space-y-3 pt-2">
                      <label className="text-[11px] font-bold text-[#52796f] block">
                        Подходящие варианты из базового справочника:
                      </label>

                      {activeItem.candidates.length > 0 ? (
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {activeItem.candidates.map((cand) => (
                            <div
                              key={cand.service_id}
                              className="p-3 rounded-xl border border-[#d4e4d4] bg-white hover:bg-[#f4fcf4] flex items-center justify-between text-xs transition-colors"
                            >
                              <div>
                                <div className="font-bold text-[#1c2e1d]">{cand.service_name}</div>
                                <div className="text-[10px] text-[#52796f]">Категория: {cand.category || "Общие"}</div>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleApplyDecision("accept", cand.service_id)}
                                disabled={decideMut.isPending}
                                className="flex items-center gap-1.5 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                              >
                                <CheckCircle2 className="size-3.5" />
                                <span>Сопоставить ({Math.round(cand.score * 100)}%)</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-xs text-[#52796f] bg-slate-50 p-3 rounded-xl border border-dashed border-[#d4e4d4]">
                          Прямых совпадений в базовом справочнике не найдено. Вы можете создась новую услугу ниже.
                        </div>
                      )}
                    </div>

                    {/* Кнопки действий */}
                    <div className="pt-4 border-t border-[#eaf4ea] flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => handleApplyDecision("reject")}
                        disabled={decideMut.isPending}
                        className="flex items-center gap-1.5 border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                      >
                        <XCircle className="size-4" />
                        <span>Отклонить</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleApplyDecision("create_new")}
                          disabled={decideMut.isPending}
                          className="flex items-center gap-1.5 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-[#1b4332] text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                        >
                          <PlusCircle className="size-4 text-[#2d6a4f]" />
                          <span>Создать новую услугу</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleApplyDecision("update_and_accept")}
                          disabled={decideMut.isPending}
                          className="flex items-center gap-1.5 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
                        >
                          <CheckCircle2 className="size-4" />
                          <span>Подтвердить и Далее</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-20 text-center text-xs text-[#52796f] font-medium bg-[#f4fcf4] rounded-2xl border border-[#d4e4d4]">
                  Выберите позицию слева для проверки.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
