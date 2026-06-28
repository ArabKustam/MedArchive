// Универсальный индикатор статуса документа с поддержкой стадий ИИ-извлечения.

type Status = "queued" | "processing" | "llm_processing" | "done" | "error" | string;

const STATUS_MAP: Record<string, { label: string; cls: string; dot: string }> = {
  queued: { label: "В очереди ⌛", cls: "bg-amber-100/80 text-amber-900 border border-amber-300", dot: "bg-amber-500" },
  processing: {
    label: "Локальный парсинг ⚙️",
    cls: "bg-blue-100 text-blue-900 border border-blue-300",
    dot: "bg-blue-600 animate-ping",
  },
  llm_processing: {
    label: "Обработка ИИ 🤖",
    cls: "bg-purple-100 text-purple-900 border border-purple-300 font-bold",
    dot: "bg-purple-600 animate-bounce",
  },
  done: { label: "Готово ✅", cls: "bg-emerald-100 text-emerald-900 border border-emerald-300", dot: "bg-emerald-600" },
  error: { label: "Ошибка ❌", cls: "bg-rose-100 text-rose-900 border border-rose-300", dot: "bg-rose-600" },
};

export function StatusPill({ status, errorMessage }: { status: Status; errorMessage?: string | null }) {
  const s = STATUS_MAP[status] || {
    label: status.toUpperCase(),
    cls: "bg-slate-100 text-slate-800 border border-slate-300",
    dot: "bg-slate-500",
  };

  return (
    <span
      title={status === "error" ? errorMessage || "При распознавании файла возникла ошибка" : undefined}
      className={
        "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[10px] font-extrabold uppercase shadow-2xs " +
        (status === "error" ? "cursor-help " : "") +
        s.cls
      }
    >
      <span className={"size-1.5 rounded-full " + s.dot} />
      {s.label}
    </span>
  );
}
