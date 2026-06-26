// Страница ручной верификации (FSD: pages/admin-verify).
// Слева — список нераспознанных позиций, справа — split-view с кандидатами
// из справочника и кнопками решения. После решения позиция уходит из очереди.

import { useEffect, useMemo, useState } from "react";
import { useVerificationQueue, verificationStore } from "@/entities/verification";

export function AdminVerifyPage() {
  const queue = useVerificationQueue();

  // Активный элемент очереди и выбранный кандидат.
  const [activeId, setActiveId] = useState<string>(() => queue[0]?.id ?? "");
  const [selectedCandidate, setSelectedCandidate] = useState<string>(
    () => queue[0]?.candidates[0]?.serviceId ?? "",
  );

  // Текущий активный элемент.
  const active = useMemo(() => queue.find((q) => q.id === activeId), [queue, activeId]);

  // Если активный элемент исчез (был решён или очередь пустая),
  // переключаемся на первый доступный.
  useEffect(() => {
    if (!active && queue.length > 0) {
      setActiveId(queue[0].id);
      setSelectedCandidate(queue[0].candidates[0]?.serviceId ?? "");
    }
  }, [active, queue]);

  // Любое решение оператора убирает позицию из стора верификации.
  function resolveItem(_action: "confirm" | "reject" | "create") {
    if (!active) return;
    verificationStore.resolve(active.id);
  }

  return (
    <div className="grid grid-cols-12 items-start gap-6">
      {/* Левая колонка: список нераспознанных позиций. */}
      <div className="col-span-4 flex max-h-[640px] flex-col overflow-hidden rounded-xl bg-panel ring-1 ring-border">
        <div className="border-b border-border bg-muted/40 p-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Несопоставленные ({queue.length})
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

      {/* Правая колонка: split-view с деталями и кандидатами. */}
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

            {/* Действия. */}
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
          // Пустое состояние: очередь верификации полностью обработана.
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
