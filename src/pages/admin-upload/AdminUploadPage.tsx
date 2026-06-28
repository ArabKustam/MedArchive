// Страница «Прайсы» (FSD: pages/admin-upload).
// Полнофункциональный интерфейс загрузки и управления прайс-листами
// с отображением всех файлов, понятными именами клиник, прогрессом обработки и действиями (просмотр, удаление).

import { useRef, useState, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AppLayout } from "@/widgets/app-layout";
import { documentsQuery, uploadDocument, searchQuery, partnersQuery } from "@/shared/api/queries";
import { DocumentViewerModal } from "@/features/document-view/ui/DocumentViewerModal";
import { DeleteDocumentButton } from "@/features/document-delete/ui/DeleteDocumentButton";
import { StatusPill } from "@/entities/price-document";
import { Pager } from "@/shared/ui/Pager";
import type { PriceDocumentDTO } from "@/shared/api/types";
import {
  Upload,
  FileText,
  FileSpreadsheet,
  CheckCircle2,
  Loader2,
  RefreshCw,
  Sparkles,
  Download,
  Eye,
  Building2,
} from "lucide-react";

export function AdminUploadPage() {
  const [drag, setDrag] = useState(false);
  const [page, setPage] = useState(1);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState<string>("Регистрация файла...");
  const [statusAlert, setStatusAlert] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [selectedDocForModal, setSelectedDocForModal] = useState<PriceDocumentDTO | null>(null);

  // Картография имен клиник
  const partnersReq = useQuery(partnersQuery({ page_size: 200 }));
  const partnerMap = useMemo(() => {
    const list = partnersReq.data?.items ?? [];
    return Object.fromEntries(list.map((p) => [p.partner_id, p.name])) as Record<string, string>;
  }, [partnersReq.data]);

  // Запрос списка всех загруженных документов (с авто-обновлением во время обработки)
  const docsReq = useQuery({
    ...documentsQuery({ page, page_size: 50 }),
    refetchInterval: (query) => {
      const items = query.state.data?.items ?? [];
      const hasActive = items.some((d) => d.status === "processing" || d.status === "queued");
      return hasActive ? 2000 : false;
    },
  });
  const docs = docsReq.data?.items ?? [];
  const totalDocs = docsReq.data?.total ?? docs.length;

  // Динамические метрики
  const metrics = useMemo(() => {
    const totalFiles = totalDocs;
    const doneFiles = docs.filter((d) => d.status === "done").length;
    const totalPositions = docs.reduce((acc, d) => acc + (d.items_total || 0), 0);
    const needReview = docs.reduce((acc, d) => acc + Math.max(0, (d.items_total || 0) - (d.items_matched || 0)), 0);

    return {
      filesStr: totalFiles > 0 ? `${doneFiles}/${totalFiles}` : "0/0",
      positions: totalPositions,
      review: needReview,
    };
  }, [docs, totalDocs]);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const file = files[0];

    setStatusAlert(null);
    const isZip = file.name.toLowerCase().endsWith(".zip");
    setLoadingText(isZip ? "Распаковка ZIP-архива и регистрация документов..." : "Регистрация файла и запуск распознавания...");
    setIsLoading(true);

    try {
      const uploadRes = await uploadDocument(file);
      setIsLoading(false);

      if (!uploadRes.documents || uploadRes.documents.length === 0) {
        setStatusAlert({
          type: "error",
          text: "Не найдено поддерживаемых документов в архиве (PDF, DOCX, XLSX).",
        });
        return;
      }

      setStatusAlert({
        type: "success",
        text: `Загрузка успешна! Файл запущен в обработку. Зарегистрировано документов: ${uploadRes.total_files || uploadRes.documents.length}.`,
      });

      queryClient.invalidateQueries();
    } catch (err: any) {
      setIsLoading(false);
      setStatusAlert({
        type: "error",
        text: `Ошибка при загрузке: ${err.message || err}`,
      });
    }
  }

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Шапка */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-[#1c2e1d]">Прайсы и Документы</h1>
            <p className="mt-1 text-sm text-[#52796f] font-medium">
              Загрузка новых файлов клиник и управление архивом обработанных документов.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#eaf4ea] border border-[#d4e4d4] text-[#2d6a4f] px-4 py-2 rounded-2xl text-xs font-bold shadow-xs">
            <Sparkles className="size-4" />
            <span>AI Processing Engine Active</span>
          </div>
        </header>

        {/* Главная сетка 2-х колонок */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Левая колонка: Загрузка прайсов */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl border border-[#d4e4d4] p-7 shadow-xs space-y-5">
              <div>
                <h2 className="text-xl font-bold text-[#1c2e1d]">Загрузить новый прайс</h2>
                <p className="text-xs text-[#52796f] mt-1 font-medium">
                  Выберите файл в формате ZIP, PDF, XLSX, DOCX или PNG.
                </p>
              </div>

              {/* Дропзона */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDrag(true);
                }}
                onDragLeave={() => setDrag(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDrag(false);
                  handleFiles(e.dataTransfer.files);
                }}
                onClick={() => fileRef.current?.click()}
                className={
                  "border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-3 " +
                  (drag
                    ? "border-[#2d6a4f] bg-[#eaf4ea]"
                    : "border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea]/60")
                }
              >
                <div className="size-12 rounded-2xl bg-[#eaf4ea] text-[#2d6a4f] grid place-items-center">
                  <Upload className="size-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1c2e1d]">
                    Перетащите сюда ZIP или отдельный файл
                  </div>
                  <div className="text-xs text-[#52796f] mt-1">
                    Поддерживаются PDF, XLSX, XLS, DOCX, JPG, PNG
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Обзор файлов
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  onChange={(e) => handleFiles(e.target.files)}
                  accept=".zip,.pdf,.docx,.xlsx,.xls,.png,.jpg,.jpeg"
                  className="hidden"
                />
              </div>

              {/* Состояние загрузки */}
              {isLoading && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3 text-amber-900 text-xs font-bold">
                  <Loader2 className="size-4 animate-spin text-amber-600 flex-shrink-0" />
                  <span>{loadingText}</span>
                </div>
              )}

              {/* Алерт статуса */}
              {statusAlert && (
                <div
                  className={
                    "p-4 rounded-2xl text-xs font-bold flex items-center gap-3 " +
                    (statusAlert.type === "success"
                      ? "bg-emerald-100 border border-emerald-300 text-emerald-900"
                      : "bg-rose-100 border border-rose-300 text-rose-900")
                  }
                >
                  {statusAlert.type === "success" ? (
                    <CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <FileText className="size-4 text-rose-600 flex-shrink-0" />
                  )}
                  <span>{statusAlert.text}</span>
                </div>
              )}
            </div>
          </div>

          {/* Правая колонка: Монитор статуса и метрик */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl border border-[#d4e4d4] p-7 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#1c2e1d]">Монитор процессов</h2>
                  <p className="text-xs text-[#52796f] mt-1 font-medium">Текущий статус очереди обработки документов.</p>
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    const { apiFetch } = await import("@/shared/api/client");
                    await apiFetch("/documents/process-all", undefined, { method: "POST" });
                    docsReq.refetch();
                  }}
                  className="flex items-center gap-1.5 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  <RefreshCw className="size-3.5" />
                  <span>Запустить обработку</span>
                </button>
              </div>

              {/* 3 Карточки метрик */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#f4fcf4] border border-[#d4e4d4] p-4 rounded-2xl text-center">
                  <div className="text-[10px] font-extrabold uppercase text-[#52796f]">ФАЙЛЫ</div>
                  <div className="text-lg font-black text-[#1c2e1d] mt-1 tabular-nums">{metrics.filesStr}</div>
                </div>

                <div className="bg-[#f4fcf4] border border-[#d4e4d4] p-4 rounded-2xl text-center">
                  <div className="text-[10px] font-extrabold uppercase text-[#52796f]">ПОЗИЦИИ</div>
                  <div className="text-lg font-black text-[#1c2e1d] mt-1 tabular-nums">
                    {metrics.positions.toLocaleString("ru-RU")}
                  </div>
                </div>

                <div className="bg-[#f4fcf4] border border-[#d4e4d4] p-4 rounded-2xl text-center">
                  <div className="text-[10px] font-extrabold uppercase text-[#52796f]">ПРОВЕРКА</div>
                  <div className="text-lg font-black text-[#1c2e1d] mt-1 tabular-nums">
                    {metrics.review.toLocaleString("ru-RU")}
                  </div>
                </div>
              </div>

              {/* Экспорт и прогресс */}
              <div className="bg-[#f4fcf4] border border-[#d4e4d4] rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#1c2e1d]">Экспорт обработки</div>
                  <div className="text-[11px] text-[#52796f]">Выгрузка текущего каталога.</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => alert("Выгрузка в CSV")}
                    className="flex items-center gap-1.5 border border-[#d4e4d4] bg-white hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-3 py-1.5 rounded-xl cursor-pointer shadow-xs"
                  >
                    <Download className="size-3.5 text-[#2d6a4f]" />
                    <span>CSV</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Выгрузка в XLSX")}
                    className="flex items-center gap-1.5 border border-[#d4e4d4] bg-white hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-3 py-1.5 rounded-xl cursor-pointer shadow-xs"
                  >
                    <Download className="size-3.5 text-[#2d6a4f]" />
                    <span>XLSX</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя карточка: Полнофункциональный список загруженных файлов */}
        <div className="bg-white rounded-3xl border border-[#d4e4d4] p-7 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#eaf4ea] pb-5">
            <div>
              <h2 className="text-xl font-bold text-[#1c2e1d]">Список загруженных файлов и архивов</h2>
              <p className="text-xs text-[#52796f] mt-1 font-medium">
                Полный архив обработанных прайс-листов с возможностью просмотра и удаления.
              </p>
            </div>
            <button
              type="button"
              onClick={() => docsReq.refetch()}
              className="flex items-center gap-2 border border-[#d4e4d4] bg-[#f4fcf4] hover:bg-[#eaf4ea] text-xs font-bold text-[#1b4332] px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              <RefreshCw className="size-3.5 text-[#2d6a4f]" />
              <span>Обновить список</span>
            </button>
          </div>

          {docs.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#52796f] font-medium bg-[#f4fcf4] rounded-2xl border border-dashed border-[#d4e4d4]">
              Список загруженных документов пуст. Загрузите первый прайс-лист в блоке выше.
            </div>
          ) : (
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#d4e4d4] text-[11px] font-bold uppercase tracking-wider text-[#52796f] bg-[#f4fcf4]">
                      <th className="py-3.5 px-4 rounded-l-xl">Имя файла</th>
                      <th className="py-3.5 px-4">Клиника / Партнёр</th>
                      <th className="py-3.5 px-4">Дата загрузки</th>
                      <th className="py-3.5 px-4 text-right">Позиций</th>
                      <th className="py-3.5 px-4 text-right">Статус</th>
                      <th className="py-3.5 px-4 text-right rounded-r-xl">Действия</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eaf4ea]">
                    {docs.map((d) => {
                      const isExcel = d.file_type?.includes("xls");
                      const cName = partnerMap[d.partner_id] || "Медицинский центр";
                      return (
                        <tr key={d.doc_id} className="hover:bg-[#f4fcf4]/80 transition-colors">
                          <td className="py-4 px-4 text-xs font-bold text-[#1c2e1d]">
                            <div className="flex items-center gap-2.5">
                              {isExcel ? (
                                <FileSpreadsheet className="size-4 text-emerald-600 flex-shrink-0" />
                              ) : (
                                <FileText className="size-4 text-[#2d6a4f] flex-shrink-0" />
                              )}
                              <span>{d.filename}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-xs text-[#52796f] font-bold">
                            <div className="flex items-center gap-1.5">
                              <Building2 className="size-3.5 text-[#2d6a4f]" />
                              <span>{cName}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-xs text-[#52796f] font-medium">
                            {new Date(d.uploaded_at).toLocaleString("ru-RU")}
                          </td>
                          <td className="py-4 px-4 text-right text-xs font-bold tabular-nums text-[#1c2e1d]">
                            {d.items_total || 0}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <StatusPill status={d.status as any} />
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => setSelectedDocForModal(d)}
                                className="flex items-center gap-1 bg-[#eaf4ea] hover:bg-[#d8ebd8] text-[#1b4332] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                              >
                                <Eye className="size-3.5" />
                                <span>Позиции</span>
                              </button>
                              <DeleteDocumentButton document={{ id: d.doc_id, filename: d.filename }} />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <Pager
                page={page}
                pageSize={50}
                total={totalDocs}
                onChange={setPage}
              />
            </div>
          )}
        </div>

        {/* Модальное окно просмотра позиций документа */}
        {selectedDocForModal && (
          <DocumentViewerModal document={selectedDocForModal} onClose={() => setSelectedDocForModal(null)} />
        )}
      </div>
    </AppLayout>
  );
}
