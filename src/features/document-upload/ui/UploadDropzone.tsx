// Фича «Загрузка документов» (FSD: features/document-upload).
// Drag-and-drop зона + актуальный серверный список загрузок и асинхронное отслеживание статусов.

import { useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { documentsQuery, uploadDocument } from "@/shared/api/queries";

export function UploadDropzone() {
  const [drag, setDrag] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState<string>("Регистрация файла...");
  const [statusAlert, setStatusAlert] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Получаем актуальные документы из базы через React Query с авто-опросом раз в 2 секунды если идет обработка
  const docsReq = useQuery({
    ...documentsQuery({ page: 1 }),
    refetchInterval: (query) => {
      const items = query.state.data?.items ?? [];
      const hasActive = items.some((d) => d.status === "processing" || d.status === "queued");
      return hasActive ? 2000 : false;
    },
  });
  const docs = docsReq.data?.items ?? [];

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;

    setStatusAlert(null);
    const fileArray = Array.from(files);
    const count = fileArray.length;
    setLoadingText(count > 1 ? `Регистрация пакета из ${count} файлов...` : "Регистрация файла и запуск распознавания...");
    setIsLoading(true);

    try {
      const uploadRes = await uploadDocument(files);
      setIsLoading(false);

      if (!uploadRes.documents || uploadRes.documents.length === 0) {
        setStatusAlert({
          type: "error",
          text: "Не найдено поддерживаемых документов (PDF, DOCX, XLSX, PNG).",
        });
        return;
      }

      setStatusAlert({
        type: "success",
        text: `Зарегистрировано файлов: ${uploadRes.total_files}. Все файлы отправлены на фоновую обработку!`,
      });

      // Обновляем состояние запросов в кэше
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "stats"] });
    } catch (err: any) {
      setIsLoading(false);
      setStatusAlert({
        type: "error",
        text: `Ошибка при загрузке файлов: ${err.message || err}`,
      });
    }
  }

  return (
    <div className="space-y-6">
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
          "cursor-pointer rounded-xl border-2 border-dashed p-10 text-center transition-all " +
          (drag ? "border-brand bg-brand/5" : "border-border bg-panel hover:border-brand/40")
        }
      >
        <div className="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-brand/10 text-brand">
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <p className="text-base font-semibold text-foreground">
          Перетащите файлы прайс-листов или ZIP-архив для автоматической обработки
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Поддерживаются одиночные файлы PDF, XLSX/XLS, DOCX, сканы, а также ZIP-архивы · до 128 МБ
        </p>
        <input
          ref={fileRef}
          type="file"
          multiple
          accept=".zip,.pdf,.docx,.xlsx,.xls,.png,.jpg,.jpeg,.webp,.tiff"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* Индикаторы состояния загрузки */}
      {isLoading && (
        <div className="flex items-center gap-3 rounded-xl bg-amber-500/10 p-4 text-amber-700 dark:text-amber-400 ring-1 ring-amber-500/20 animate-pulse">
          <div className="size-5 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
          <span className="text-sm font-medium">{loadingText}</span>
        </div>
      )}

      {statusAlert && (
        <div
          className={
            "rounded-xl p-4 text-sm font-medium ring-1 " +
            (statusAlert.type === "error"
              ? "bg-rose-500/10 text-rose-700 dark:text-rose-400 ring-rose-500/20"
              : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 ring-emerald-500/20")
          }
        >
          {statusAlert.type === "error" ? "❌ " : "🚀 "}
          {statusAlert.text}
        </div>
      )}

      {/* Список последних обработанных документов из сервера */}
      <div className="rounded-xl bg-panel p-5 ring-1 ring-border">
        <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
          <div>
            <h3 className="text-sm font-semibold">📋 Загруженные документы и прогресс</h3>
            <p className="text-xs text-muted-foreground">
              Статусы распознавания и результаты сопоставления обновляются автоматически
            </p>
          </div>
          <span className="text-xs text-muted-foreground">
            Всего: {docs.length}
          </span>
        </div>

        <div className="space-y-2.5">
          {docs.map((d) => {
            const isDone = d.status === "done";
            const isError = d.status === "error";
            const isProcessing = d.status === "processing";
            const isQueued = d.status === "queued";
            const percent = d.items_total ? Math.round((d.items_matched / d.items_total) * 100) : 0;
            const isScan = d.file_type === "scan" || ["jpg", "png", "jpeg"].includes(d.file_type || "");

            return (
              <div
                key={d.doc_id}
                className={
                  "flex items-center justify-between rounded-lg p-3 ring-1 transition-all " +
                  (isDone
                    ? "bg-card ring-border"
                    : isError
                      ? "bg-rose-500/5 ring-rose-500/20"
                      : "bg-brand/10 ring-brand/40 shadow-sm")
                }
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="text-xl">
                    {d.file_type === "pdf" || d.file_type === "scan"
                      ? "📄"
                      : d.file_type?.includes("xls")
                        ? "📊"
                        : "📝"}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{d.filename}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {isDone && (
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                          Извлечено: {d.items_total} услуг · Сопоставлено: {d.items_matched} ({percent}%)
                        </span>
                      )}
                      {isError && (
                        <span className="text-rose-600 dark:text-rose-400 font-medium">
                          ❌ {d.error_message || "Ошибка распознавания"}
                        </span>
                      )}
                      {isProcessing && (
                        <span className="text-brand font-medium animate-pulse flex items-center gap-1.5">
                          ⚙️ {isScan ? "Распознавание скана (Google Vision OCR)..." : "Извлечение таблиц и парсинг позиций..."}
                        </span>
                      )}
                      {isQueued && (
                        <span className="text-amber-600 font-medium animate-pulse">
                          ⏳ В очереди на обработку...
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="pl-3 text-right flex-shrink-0 flex items-center gap-2">
                  {(isProcessing || isQueued) && (
                    <div className="size-4 animate-spin rounded-full border-2 border-brand border-t-transparent" />
                  )}
                  <span
                    className={
                      "text-xs font-semibold " +
                      (isDone ? "text-emerald-600" : isError ? "text-rose-600" : "text-brand")
                    }
                  >
                    {isDone ? "Обработан" : isError ? "Ошибка" : isProcessing ? "Обработка..." : "В очереди"}
                  </span>
                </div>
              </div>
            );
          })}

          {docs.length === 0 && (
            <div className="text-center py-8 text-xs text-muted-foreground">
              Документы ещё не загружались. Загрузите первый прайс-лист выше!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
