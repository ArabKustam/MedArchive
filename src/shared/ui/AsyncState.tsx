// Универсальные UI-состояния для асинхронных списков (loading / error / empty).
// Тонкая обёртка вокруг shadcn Skeleton и текстовых заглушек.

import { Skeleton } from "@/shared/ui/shadcn/skeleton";

export function TableSkeleton({ rows = 8, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    <div className="divide-y divide-border">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="grid gap-3 px-4 py-3" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
          {Array.from({ length: cols }).map((__, c) => (
            <Skeleton key={c} className="h-4 w-full" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="px-4 py-12 text-center">
      <p className="text-sm font-medium text-foreground">{title}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function ErrorState({
  error,
  onRetry,
}: {
  error: unknown;
  onRetry?: () => void;
}) {
  const message = error instanceof Error ? error.message : "Неизвестная ошибка";
  return (
    <div className="px-4 py-10 text-center">
      <p className="text-sm font-medium text-destructive">Ошибка загрузки</p>
      <p className="mx-auto mt-1 max-w-md text-xs text-muted-foreground">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 inline-flex h-8 items-center rounded-md bg-brand px-3 text-xs font-medium text-brand-foreground hover:bg-brand-light"
        >
          Повторить
        </button>
      )}
    </div>
  );
}
