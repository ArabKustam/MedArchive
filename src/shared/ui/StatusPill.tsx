// Универсальный «пилюлька»-индикатор статуса документа.
// Используется в таблицах документов на разных страницах (карточка клиники, админка).

import type { PriceDocument } from "@/shared/api/mock-data";

type Status = PriceDocument["status"];

// Карта визуальных стилей и подписей для каждого статуса.
const STATUS_MAP: Record<Status, { label: string; cls: string; dot: string }> = {
  queued: { label: "В очереди", cls: "bg-zinc-200 text-zinc-700", dot: "bg-zinc-500" },
  processing: {
    label: "Обработка",
    cls: "bg-amber-100 text-amber-800",
    dot: "bg-amber-500 animate-pulse",
  },
  done: { label: "Готов", cls: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500" },
  error: { label: "Ошибка", cls: "bg-rose-100 text-rose-700", dot: "bg-rose-500" },
};

export function StatusPill({ status }: { status: Status }) {
  const s = STATUS_MAP[status];
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
