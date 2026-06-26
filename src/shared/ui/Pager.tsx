type Props = {
  page: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
};

export function Pager({ page, pageSize, total, onChange }: Props) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (pages <= 1) return null;
  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  const window: (number | "…")[] = [];
  const push = (v: number | "…") => {
    if (window[window.length - 1] !== v) window.push(v);
  };
  for (let i = 1; i <= pages; i++) {
    if (i === 1 || i === pages || Math.abs(i - page) <= 1) push(i);
    else if (i < page) push("…");
    else push("…");
  }

  return (
    <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-2.5 text-xs">
      <span className="text-muted-foreground tabular-nums">
        {from.toLocaleString("ru-RU")}–{to.toLocaleString("ru-RU")} из{" "}
        {total.toLocaleString("ru-RU")}
      </span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="h-7 rounded border border-border bg-card px-2 font-medium text-foreground hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
        >
          ←
        </button>
        {window.map((p, i) =>
          p === "…" ? (
            <span key={`e${i}`} className="px-1.5 text-muted-foreground">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              className={
                "h-7 min-w-7 rounded px-2 font-medium tabular-nums " +
                (p === page
                  ? "bg-brand text-brand-foreground"
                  : "border border-border bg-card hover:bg-muted")
              }
            >
              {p}
            </button>
          ),
        )}
        <button
          type="button"
          onClick={() => onChange(Math.min(pages, page + 1))}
          disabled={page === pages}
          className="h-7 rounded border border-border bg-card px-2 font-medium text-foreground hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
        >
          →
        </button>
      </div>
    </div>
  );
}
