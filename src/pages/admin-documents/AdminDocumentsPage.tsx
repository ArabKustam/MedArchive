// Страница «Документы» в админке (FSD: pages/admin-documents).
// Таблица всех загруженных документов с фильтром по статусу, счетчиками в кнопках,
// номерами очередности для queued элементов, просмотром позиций и удалением.

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pager } from "@/shared/ui/Pager";
import { PAGE_SIZE_DOCUMENTS } from "@/shared/config/constants";
import { StatusPill } from "@/entities/price-document";
import { DeleteDocumentButton } from "@/features/document-delete/ui/DeleteDocumentButton";
import { DocumentViewerModal } from "@/features/document-view/ui/DocumentViewerModal";
import { documentsQuery, partnersQuery } from "@/shared/api/queries";
import { TableSkeleton, ErrorState } from "@/shared/ui/AsyncState";
import { AppLayout } from "@/widgets/app-layout";
import type { PriceDocumentDTO } from "@/shared/api/types";

type StatusFilter = "all" | "queued" | "processing" | "done" | "error";

const STATUSES: StatusFilter[] = ["all", "queued", "processing", "done", "error"];

const STATUS_LABELS: Record<StatusFilter, string> = {
  all: "Все",
  queued: "В очереди",
  processing: "Обработка",
  done: "Готовы",
  error: "Ошибки",
};

export function AdminDocumentsPage() {
  const [status, setStatus] = useState<StatusFilter>("all");
  const [page, setPage] = useState(1);
  const [selectedDoc, setSelectedDoc] = useState<PriceDocumentDTO | null>(null);

  // Fetch partners map from backend dynamically
  const partnersReq = useQuery(partnersQuery({ page_size: 200 }));
  const partnerName = useMemo(() => {
    const list = partnersReq.data?.items ?? [];
    return Object.fromEntries(list.map((p) => [p.partner_id, p.name])) as Record<string, string>;
  }, [partnersReq.data]);

  // Fetch documents for the current status tab (with 2s refetchInterval to update status live)
  const docsReq = useQuery({
    ...documentsQuery({
      status: status !== "all" ? status : undefined,
      page,
    }),
    refetchInterval: 2000,
  });

  // Fetch overall documents list (to calculate exact counts per status tab)
  const allDocsReq = useQuery({
    ...documentsQuery({ page: 1 }),
    refetchInterval: 3000,
  });

  const statusCounts = useMemo(() => {
    const items = allDocsReq.data?.items ?? [];
    const counts: Record<StatusFilter, number> = {
      all: allDocsReq.data?.total ?? items.length,
      queued: 0,
      processing: 0,
      done: 0,
      error: 0,
    };
    for (const item of items) {
      if (item.status in counts) {
        counts[item.status as StatusFilter]++;
      }
    }
    return counts;
  }, [allDocsReq.data]);

  const total = docsReq.data?.total ?? 0;
  const pageRows = docsReq.data?.items ?? [];

  // Calculate queue index for items in 'queued' status
  const queuedItems = useMemo(() => {
    return pageRows.filter((d) => d.status === "queued");
  }, [pageRows]);

  return (
    <AppLayout>
      <div className="space-y-4">
        {/* Фильтры по статусу со счетчиками прямо в кнопках */}
        <div className="flex flex-wrap items-center gap-2">
          {STATUSES.map((s) => {
            const count = statusCounts[s];
            return (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setStatus(s);
                  setPage(1);
                }}
                className={
                  "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ring-1 transition-colors " +
                  (status === s
                    ? "bg-brand text-brand-foreground ring-brand shadow-sm"
                    : "bg-card text-muted-foreground ring-border hover:bg-muted hover:text-foreground")
                }
              >
                <span>{STATUS_LABELS[s]}</span>
                <span
                  className={
                    "rounded-full px-1.5 py-0.2 text-[10px] font-bold " +
                    (status === s
                      ? "bg-brand-foreground/20 text-brand-foreground"
                      : "bg-muted text-muted-foreground")
                  }
                >
                  {count}
                </span>
              </button>
            );
          })}
          <span className="ml-auto self-center text-xs font-medium text-muted-foreground">
            Всего документов: <strong>{statusCounts.all}</strong>
          </span>
        </div>

        <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border shadow-sm">
          {docsReq.isLoading ? (
            <TableSkeleton rows={8} cols={7} />
          ) : docsReq.isError ? (
            <ErrorState error={docsReq.error} onRetry={() => docsReq.refetch()} />
          ) : (
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  <th className="px-4 py-3">Файл</th>
                  <th className="px-4 py-3">Партнёр</th>
                  <th className="px-4 py-3">Загружено</th>
                  <th className="px-4 py-3 text-right">Позиций</th>
                  <th className="px-4 py-3 text-right">Сопоставлено</th>
                  <th className="px-4 py-3 text-right">Статус / Очередь</th>
                  <th className="px-4 py-3 text-right">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {pageRows.map((d) => {
                  const queueIdx = d.status === "queued" ? queuedItems.findIndex((q) => q.doc_id === d.doc_id) + 1 : null;

                  return (
                    <tr key={d.doc_id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 font-mono text-sm">
                        <button
                          type="button"
                          onClick={() => setSelectedDoc(d)}
                          className="text-brand hover:underline font-medium text-left"
                          title="Нажмите, чтобы просмотреть спаршенные позиции"
                        >
                          📄 {d.filename}
                        </button>
                      </td>
                      <td className="px-4 py-3 text-sm">{partnerName[d.partner_id] ?? d.partner_id}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        {new Date(d.uploaded_at).toLocaleString("ru-RU")}
                      </td>
                      <td className="px-4 py-3 text-right text-sm tabular-nums font-medium">{d.items_total || "—"}</td>
                      <td className="px-4 py-3 text-right text-sm tabular-nums">
                        {d.items_total
                          ? `${d.items_matched} (${Math.round((d.items_matched / d.items_total) * 100)}%)`
                          : "—"}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {queueIdx && (
                            <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-bold text-amber-600 ring-1 ring-amber-500/20">
                              №{queueIdx} в очереди
                            </span>
                          )}
                          <StatusPill status={d.status as "queued" | "processing" | "done" | "error"} />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedDoc(d)}
                          className="rounded bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand hover:bg-brand/20 transition-colors"
                        >
                          👁️ Позиции
                        </button>
                        {d.status === "queued" && (
                          <button
                            type="button"
                            onClick={async () => {
                              const { processDocument } = await import("@/shared/api/queries");
                              await processDocument(d.doc_id);
                              docsReq.refetch();
                              allDocsReq.refetch();
                            }}
                            className="rounded bg-amber-500/10 px-2 py-1 text-xs font-semibold text-amber-600 hover:bg-amber-500/20 transition-colors"
                          >
                            Обработать
                          </button>
                        )}
                        <DeleteDocumentButton document={{ id: d.doc_id, filename: d.filename }} />
                      </td>
                    </tr>
                  );
                })}
                {pageRows.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-sm text-muted-foreground">
                      Документов со статусом «{STATUS_LABELS[status]}» нет.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        <Pager
          page={page}
          pageSize={PAGE_SIZE_DOCUMENTS}
          total={total}
          onChange={setPage}
        />

        {/* Модальное окно просмотра содержимого документа */}
        {selectedDoc && (
          <DocumentViewerModal document={selectedDoc} onClose={() => setSelectedDoc(null)} />
        )}
      </div>
    </AppLayout>
  );
}
