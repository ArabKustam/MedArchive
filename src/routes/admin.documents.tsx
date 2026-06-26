import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Pager } from "../components/Pager";
import { partners, priceDocuments } from "../lib/mock-data";

const PAGE_SIZE = 15;

export const Route = createFileRoute("/admin/documents")({
  component: AdminDocuments,
});

function AdminDocuments() {
  const [status, setStatus] = useState<"all" | "queued" | "processing" | "done" | "error">("all");
  const [page, setPage] = useState(1);

  const partnerName = useMemo(
    () => Object.fromEntries(partners.map((p) => [p.id, p.name])) as Record<string, string>,
    [],
  );

  const filtered = useMemo(
    () => priceDocuments.filter((d) => status === "all" || d.status === status),
    [status],
  );
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(["all", "queued", "processing", "done", "error"] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setStatus(s);
              setPage(1);
            }}
            className={
              "rounded-md px-3 py-1.5 text-xs font-medium ring-1 transition-colors " +
              (status === s
                ? "bg-brand text-brand-foreground ring-brand"
                : "bg-card text-muted-foreground ring-border hover:text-foreground")
            }
          >
            {labelFor(s)}
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
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pageRows.map((d) => (
              <tr key={d.id} className="hover:bg-muted/30">
                <td className="px-4 py-3 font-mono text-sm">{d.filename}</td>
                <td className="px-4 py-3 text-sm">{partnerName[d.partnerId] ?? "—"}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{d.uploadedAt}</td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">
                  {d.itemsTotal || "—"}
                </td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">
                  {d.itemsTotal
                    ? `${d.itemsMatched} (${Math.round((d.itemsMatched / d.itemsTotal) * 100)}%)`
                    : "—"}
                </td>
                <td className="px-4 py-3 text-right">
                  <StatusPill status={d.status} />
                </td>
              </tr>
            ))}
            {pageRows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-sm text-muted-foreground">
                  Документов нет.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pager page={page} pageSize={PAGE_SIZE} total={filtered.length} onPageChange={setPage} />
    </div>
  );
}

function labelFor(s: string) {
  return (
    { all: "Все", queued: "В очереди", processing: "Обработка", done: "Готовы", error: "Ошибки" }[
      s
    ] ?? s
  );
}

function StatusPill({ status }: { status: "queued" | "processing" | "done" | "error" }) {
  const map = {
    queued: { label: "В очереди", cls: "bg-zinc-200 text-zinc-700", dot: "bg-zinc-500" },
    processing: {
      label: "Обработка",
      cls: "bg-amber-100 text-amber-800",
      dot: "bg-amber-500 animate-pulse",
    },
    done: { label: "Готов", cls: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500" },
    error: { label: "Ошибка", cls: "bg-rose-100 text-rose-700", dot: "bg-rose-500" },
  } as const;
  const s = map[status];
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-semibold uppercase " +
        s.cls
      }
    >
      <span className={"size-1.5 rounded-full " + s.dot} />
      {s.label}
    </span>
  );
}
