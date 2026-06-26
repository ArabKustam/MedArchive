// Страница «Документы» в админке (FSD: pages/admin-documents).
// Таблица всех загруженных документов с фильтром по статусу, пагинацией
// и кнопкой удаления (фича document-delete).

import { useMemo, useState } from "react";
import { Pager } from "@/shared/ui/Pager";
import { PAGE_SIZE_DOCUMENTS } from "@/shared/config/constants";
import { partners } from "@/shared/api/mock-data";
import { useDocuments, StatusPill, type PriceDocument } from "@/entities/price-document";
import { DeleteDocumentButton } from "@/features/document-delete/ui/DeleteDocumentButton";

type StatusFilter = "all" | PriceDocument["status"];

const STATUSES: StatusFilter[] = ["all", "queued", "processing", "done", "error"];

// Подписи кнопок-фильтров статуса.
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

  // Данные из реактивного стора: после удаления документ исчезнет из таблицы.
  const documents = useDocuments();

  // Карта partnerId → имя клиники.
  const partnerName = useMemo(
    () => Object.fromEntries(partners.map((p) => [p.id, p.name])) as Record<string, string>,
    [],
  );

  // Документы после применения фильтра по статусу.
  const filtered = useMemo(
    () => documents.filter((d) => status === "all" || d.status === status),
    [documents, status],
  );
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE_DOCUMENTS, page * PAGE_SIZE_DOCUMENTS);

  return (
    <div className="space-y-4">
      {/* Фильтры по статусу. */}
      <div className="flex gap-2">
        {STATUSES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setStatus(s);
              setPage(1); // сбрасываем пагинацию при смене фильтра
            }}
            className={
              "rounded-md px-3 py-1.5 text-xs font-medium ring-1 transition-colors " +
              (status === s
                ? "bg-brand text-brand-foreground ring-brand"
                : "bg-card text-muted-foreground ring-border hover:text-foreground")
            }
          >
            {STATUS_LABELS[s]}
          </button>
        ))}
        <span className="ml-auto self-center text-xs text-muted-foreground">
          Всего: {filtered.length}
        </span>
      </div>

      <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-[10px] uppercase tracking-wider text-muted-foreground">
              <th className="px-4 py-3 font-medium">Файл</th>
              <th className="px-4 py-3 font-medium">Партнёр</th>
              <th className="px-4 py-3 font-medium">Загружено</th>
              <th className="px-4 py-3 text-right font-medium">Позиций</th>
              <th className="px-4 py-3 text-right font-medium">Сопоставлено</th>
              <th className="px-4 py-3 text-right font-medium">Статус</th>
              {/* Колонка действий: пока только удаление. */}
              <th className="px-4 py-3 text-right font-medium">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pageRows.map((d) => (
              <tr key={d.id} className="hover:bg-muted/30">
                <td className="px-4 py-3 font-mono text-sm">{d.filename}</td>
                <td className="px-4 py-3 text-sm">{partnerName[d.partnerId] ?? "—"}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{d.uploadedAt}</td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">{d.itemsTotal || "—"}</td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">
                  {d.itemsTotal
                    ? `${d.itemsMatched} (${Math.round((d.itemsMatched / d.itemsTotal) * 100)}%)`
                    : "—"}
                </td>
                <td className="px-4 py-3 text-right">
                  <StatusPill status={d.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  {/* Фича-кнопка удаления. Стор сам уведомит подписчиков. */}
                  <DeleteDocumentButton document={{ id: d.id, filename: d.filename }} />
                </td>
              </tr>
            ))}
            {pageRows.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm text-muted-foreground">
                  Документов нет.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pager
        page={page}
        pageSize={PAGE_SIZE_DOCUMENTS}
        total={filtered.length}
        onChange={setPage}
      />
    </div>
  );
}
