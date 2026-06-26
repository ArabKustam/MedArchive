import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { AppLayout } from "../components/AppLayout";
import {
  formatBYN,
  priceDocuments as initialDocs,
  verificationQueue as initialQueue,
  type PriceDocument,
  type VerificationItem,
} from "../lib/mock-data";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Админ-панель · MedArchive" },
      {
        name: "description",
        content:
          "Загрузка ZIP-архивов прайс-листов, статус обработки документов и очередь верификации несопоставленных позиций.",
      },
      { property: "og:title", content: "Админ-панель · MedArchive" },
      {
        property: "og:description",
        content: "Загрузка прайсов и ручная верификация несопоставленных позиций.",
      },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [queue, setQueue] = useState<VerificationItem[]>(initialQueue);
  const [docs, setDocs] = useState<PriceDocument[]>(initialDocs);
  const [activeId, setActiveId] = useState<string>(initialQueue[0]?.id ?? "");
  const [selectedCandidate, setSelectedCandidate] = useState<string>(
    initialQueue[0]?.candidates[0]?.serviceId ?? "",
  );
  const [drag, setDrag] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const active = useMemo(() => queue.find((q) => q.id === activeId), [queue, activeId]);

  function resolveItem(action: "confirm" | "reject" | "create") {
    if (!active) return;
    setQueue((prev) => {
      const next = prev.filter((q) => q.id !== active.id);
      const upcoming = next[0];
      setActiveId(upcoming?.id ?? "");
      setSelectedCandidate(upcoming?.candidates[0]?.serviceId ?? "");
      return next;
    });
    // touch action variable so it's used
    void action;
  }

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const additions: PriceDocument[] = Array.from(files).map((f, i) => ({
      id: `up-${Date.now()}-${i}`,
      filename: f.name,
      partnerId: "lode",
      uploadedAt: "Только что",
      status: "queued",
      itemsTotal: 0,
      itemsMatched: 0,
    }));
    setDocs((d) => [...additions, ...d]);
  }

  return (
    <AppLayout>
      <header className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="mb-2 text-2xl font-semibold tracking-tight">Админ-панель</h1>
          <p className="max-w-[56ch] text-sm text-muted-foreground">
            Загрузка ZIP-архивов прайс-листов, статусы обработки и верификация несопоставленных
            позиций оператором.
          </p>
        </div>
      </header>

      {/* Upload */}
      <section className="mb-10 grid grid-cols-12 gap-6">
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
            "col-span-7 cursor-pointer rounded-xl border-2 border-dashed p-10 text-center transition-colors " +
            (drag
              ? "border-brand bg-brand/5"
              : "border-border bg-panel hover:border-brand/40")
          }
        >
          <div className="mx-auto mb-3 grid size-10 place-items-center rounded-full bg-muted">
            <div className="size-2 rounded-full bg-muted-foreground" />
          </div>
          <p className="text-sm font-medium">
            Перетащите ZIP-архив с прайс-листами для автоматической обработки
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Поддерживаются PDF, XLSX/XLS, DOCX внутри архива · до 128 МБ
          </p>
          <input
            ref={fileRef}
            type="file"
            multiple
            accept=".zip,.pdf,.xlsx,.xls,.docx"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        <div className="col-span-5 rounded-xl bg-panel p-5 ring-1 ring-border">
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Сводка обработки
          </div>
          <div className="grid grid-cols-3 gap-3">
            <SummaryStat
              label="В очереди"
              value={docs.filter((d) => d.status === "queued").length}
            />
            <SummaryStat
              label="Обработка"
              value={docs.filter((d) => d.status === "processing").length}
              tone="amber"
            />
            <SummaryStat
              label="Ошибок"
              value={docs.filter((d) => d.status === "error").length}
              tone="rose"
            />
          </div>
          <div className="mt-4 border-t border-border pt-4">
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Несопоставленных позиций</span>
              <span className="font-semibold tabular-nums">{queue.length}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-brand transition-all"
                style={{ width: `${Math.max(8, 100 - queue.length * 8)}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documents table */}
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Документы
        </h2>
        <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Файл
                </th>
                <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Загружено
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Позиций
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Сопоставлено
                </th>
                <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Статус
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {docs.map((d) => (
                <tr key={d.id} className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-mono text-sm">{d.filename}</td>
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
            </tbody>
          </table>
        </div>
      </section>

      {/* Verification */}
      <section>
        <header className="mb-3 flex items-end justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Очередь верификации
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Подтвердите соответствие позиции справочнику или создайте новую запись.
            </p>
          </div>
          <div className="text-xs text-muted-foreground">Осталось: {queue.length}</div>
        </header>

        <div className="grid grid-cols-12 items-start gap-6">
          <div className="col-span-4 flex max-h-[560px] flex-col overflow-hidden rounded-xl bg-panel ring-1 ring-border">
            <div className="flex justify-between border-b border-border bg-muted/40 p-3">
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Несопоставленные ({queue.length})
              </span>
            </div>
            <div className="divide-y divide-border overflow-y-auto">
              {queue.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => {
                      setActiveId(item.id);
                      setSelectedCandidate(item.candidates[0]?.serviceId ?? "");
                    }}
                    className={
                      "w-full p-4 text-left transition-colors " +
                      (isActive
                        ? "border-l-2 border-brand bg-card"
                        : "border-l-2 border-transparent hover:bg-muted/40")
                    }
                  >
                    <span className="mb-1 block text-[10px] uppercase tracking-wider text-zinc-400">
                      {item.partnerName} · {item.document}
                    </span>
                    <p className="truncate text-sm font-medium">{item.rawTitle}</p>
                    <span className="mt-1 inline-block text-[11px] text-muted-foreground tabular-nums">
                      {item.rawPrice}
                    </span>
                  </button>
                );
              })}
              {queue.length === 0 && (
                <div className="p-10 text-center text-sm text-muted-foreground">
                  Очередь пуста. Все позиции сопоставлены автоматически.
                </div>
              )}
            </div>
          </div>

          <div className="col-span-8 rounded-xl bg-panel p-6 ring-1 ring-border">
            {active ? (
              <>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Извлечено из файла
                    </h3>
                    <div className="rounded-lg bg-card p-4 ring-1 ring-border">
                      <dl className="space-y-3">
                        <Field label="Партнёр" value={active.partnerName} />
                        <Field label="Документ" value={active.document} mono />
                        <Field label="Строка услуги" value={active.rawTitle} />
                        <Field label="Цена" value={active.rawPrice} />
                      </dl>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Кандидаты из справочника
                    </h3>
                    <div className="space-y-2">
                      {active.candidates.map((c) => {
                        const isPicked = c.serviceId === selectedCandidate;
                        return (
                          <button
                            key={c.serviceId}
                            type="button"
                            onClick={() => setSelectedCandidate(c.serviceId)}
                            className={
                              "flex w-full items-center justify-between rounded-lg p-3 text-left transition-shadow " +
                              (isPicked
                                ? "bg-brand/5 ring-1 ring-brand/50"
                                : "bg-card ring-1 ring-border hover:ring-zinc-300")
                            }
                          >
                            <div>
                              <div className="text-sm font-medium">{c.title}</div>
                              <div className="text-[10px] text-muted-foreground">
                                {c.code} · {c.category}
                              </div>
                            </div>
                            <span
                              className={
                                "rounded px-1.5 py-0.5 text-[10px] font-semibold tabular-nums " +
                                (isPicked
                                  ? "bg-brand text-brand-foreground"
                                  : "bg-muted text-muted-foreground")
                              }
                            >
                              {Math.round(c.score * 100)}% match
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end gap-3 border-t border-border pt-6">
                  <button
                    type="button"
                    onClick={() => resolveItem("reject")}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Отклонить
                  </button>
                  <button
                    type="button"
                    onClick={() => resolveItem("create")}
                    className="rounded-md bg-card px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border transition-colors hover:bg-muted"
                  >
                    Создать новую
                  </button>
                  <button
                    type="button"
                    onClick={() => resolveItem("confirm")}
                    className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground ring-1 ring-brand transition-colors hover:bg-brand-light"
                  >
                    Подтвердить сопоставление
                  </button>
                </div>
              </>
            ) : (
              <div className="grid place-items-center py-20 text-center">
                <div>
                  <div className="mx-auto mb-3 grid size-10 place-items-center rounded-full bg-emerald-100">
                    <div className="size-2 rounded-full bg-emerald-500" />
                  </div>
                  <h3 className="text-sm font-semibold">Очередь верификации пуста</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Загрузите новые архивы или дождитесь обработки текущих.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

function SummaryStat({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: number;
  tone?: "default" | "amber" | "rose";
}) {
  const toneCls =
    tone === "amber"
      ? "text-amber-600"
      : tone === "rose"
        ? "text-rose-600"
        : "text-foreground";
  return (
    <div className="rounded-lg bg-card p-3 ring-1 ring-border">
      <div className={"text-2xl font-semibold tabular-nums " + toneCls}>{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Field({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wider text-zinc-400">{label}</dt>
      <dd className={"text-sm font-medium " + (mono ? "font-mono" : "")}>{value}</dd>
    </div>
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

// formatBYN imported but might be unused in some refactors — re-export reference to silence TS unused warnings.
void formatBYN;
