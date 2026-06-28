// Компонент просмотра содержимого и ИИ-инспектора документа (FSD: features/document-view).
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { documentItemsQuery } from "@/shared/api/queries";
import { Pager } from "@/shared/ui/Pager";
import type { PriceDocumentDTO } from "@/shared/api/types";
import { Sparkles, FileText, CheckCircle2, X, Database, Code } from "lucide-react";

interface DocumentViewerModalProps {
  document: PriceDocumentDTO;
  onClose: () => void;
}

export function DocumentViewerModal({ document, onClose }: DocumentViewerModalProps) {
  const [activeTab, setActiveTab] = useState<"items" | "ai">("items");
  const [page, setPage] = useState(1);
  const itemsReq = useQuery(documentItemsQuery(document.doc_id, page));

  const items = itemsReq.data?.items ?? [];
  const total = itemsReq.data?.total ?? 0;

  const isLLM = document.extraction_method === "llm_llama3" || Boolean(document.raw_llm_json);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="flex max-h-[90vh] w-full max-w-5xl flex-col rounded-3xl bg-white p-7 ring-1 ring-[#d4e4d4] shadow-2xl space-y-5">
        {/* Шапка модального окна */}
        <div className="flex items-center justify-between border-b border-[#eaf4ea] pb-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl font-bold text-[#1c2e1d] flex items-center gap-2">
                <span>📄 Просмотр документа:</span>
                <span className="font-mono text-[#2d6a4f]">{document.filename}</span>
              </h2>
              {isLLM && (
                <span className="bg-purple-100 text-purple-900 text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase flex items-center gap-1">
                  <Sparkles className="size-3 text-purple-600" />
                  Извлечено через Llama 3.3 AI
                </span>
              )}
            </div>
            <p className="text-xs text-[#52796f] mt-1 font-medium">
              Всего позиций: <strong className="text-[#1c2e1d]">{document.items_total}</strong> · 
              Авто-сопоставлено: <strong className="text-[#2d6a4f]">{document.items_matched}</strong>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-[#52796f] hover:bg-[#f4fcf4] hover:text-[#1c2e1d] transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Переключатель вкладок */}
        <div className="flex items-center gap-2 border-b border-[#eaf4ea] pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("items")}
            className={
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer " +
              (activeTab === "items"
                ? "bg-[#2d6a4f] text-white shadow-xs"
                : "bg-[#f4fcf4] hover:bg-[#eaf4ea] text-[#1b4332] border border-[#d4e4d4]")
            }
          >
            <Database className="size-3.5" />
            <span>Извлечённые позиции ({document.items_total})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("ai")}
            className={
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer " +
              (activeTab === "ai"
                ? "bg-purple-700 text-white shadow-xs"
                : "bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200")
            }
          >
            <Sparkles className="size-3.5" />
            <span>Инспектор ИИ / Сырой JSON 🤖</span>
          </button>
        </div>

        {/* Контент активной вкладки */}
        {activeTab === "items" ? (
          <div className="flex-1 overflow-auto rounded-2xl border border-[#d4e4d4] space-y-4 p-1">
            {itemsReq.isLoading ? (
              <div className="p-12 text-center text-xs text-[#52796f] animate-pulse font-medium">
                ⚙️ Загрузка спаршенных позиций документа...
              </div>
            ) : items.length === 0 ? (
              <div className="p-12 text-center text-xs text-[#52796f] font-medium">
                В данном документе позиций не найдено или обработка ещё завершается.
              </div>
            ) : (
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-[#d4e4d4] bg-[#f4fcf4] text-[10px] uppercase font-bold text-[#52796f]">
                    <th className="px-4 py-3">Код</th>
                    <th className="px-4 py-3">Спаршенное наименование услуги</th>
                    <th className="px-4 py-3 text-right">Цена (Резидент)</th>
                    <th className="px-4 py-3 text-right">Статус Match</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eaf4ea]">
                  {items.map((item) => {
                    const isAuto = item.match_status === "auto" || item.match_status === "verified";
                    return (
                      <tr key={item.item_id} className="hover:bg-[#f4fcf4]/80 transition-colors">
                        <td className="px-4 py-3 font-mono text-[11px] text-[#52796f]">{item.service_code_source || "—"}</td>
                        <td className="px-4 py-3 font-bold text-[#1c2e1d]">{item.service_name_raw}</td>
                        <td className="px-4 py-3 text-right font-mono font-black text-[#1c2e1d] tabular-nums">
                          {item.price_resident_kzt ? `${item.price_resident_kzt.toLocaleString("ru-RU")} ₸` : "—"}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span
                            className={
                              "inline-flex items-center rounded-lg px-2.5 py-1 text-[10px] font-extrabold " +
                              (isAuto
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800")
                            }
                          >
                            {isAuto ? `✅ Match ${Math.round((item.match_score || 1) * 100)}%` : "⚠️ На проверку"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}

            <div className="p-3">
              <Pager page={page} pageSize={50} total={total} onChange={setPage} />
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-auto rounded-2xl border border-purple-200 bg-slate-950 p-5 space-y-4 text-xs font-mono text-emerald-400">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-300">
              <div className="flex items-center gap-2">
                <Code className="size-4 text-purple-400" />
                <span className="font-bold">Метод извлечения:</span>
                <span className="text-purple-300">
                  {document.extraction_method === "llm_llama3" ? "Groq LLM Fallback (Llama 3.3 70B Versatile)" : "Стандартный локальный векторный парсер"}
                </span>
              </div>
            </div>

            <div>
              <div className="text-slate-400 text-[11px] mb-2 font-bold uppercase tracking-wider">
                Сырой ответ от нейросети (Raw JSON Output):
              </div>
              <pre className="bg-slate-900 p-4 rounded-xl text-slate-200 text-[11px] leading-relaxed overflow-x-auto border border-slate-800">
                {document.raw_llm_json || JSON.stringify(
                  items.map((it) => ({
                    code: it.service_code_source,
                    service: it.service_name_raw,
                    price: it.price_resident_kzt,
                    currency: it.currency_original,
                  })),
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
