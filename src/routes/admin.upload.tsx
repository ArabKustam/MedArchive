import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { priceDocuments, type PriceDocument } from "../lib/mock-data";

export const Route = createFileRoute("/admin/upload")({
  component: AdminUpload,
});

function AdminUpload() {
  const [drag, setDrag] = useState(false);
  const [docs, setDocs] = useState<PriceDocument[]>(priceDocuments);
  const fileRef = useRef<HTMLInputElement | null>(null);

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const additions: PriceDocument[] = Array.from(files).map((f, i) => ({
      id: `up-${Date.now()}-${i}`,
      filename: f.name,
      partnerId: "p1",
      uploadedAt: "Только что",
      status: "queued",
      itemsTotal: 0,
      itemsMatched: 0,
    }));
    setDocs((d) => [...additions, ...d]);
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
          "cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-colors " +
          (drag ? "border-brand bg-brand/5" : "border-border bg-panel hover:border-brand/40")
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

      <div className="rounded-xl bg-panel p-5 ring-1 ring-border">
        <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Последние загрузки
        </div>
        <ul className="space-y-2">
          {docs.slice(0, 5).map((d) => (
            <li
              key={d.id}
              className="flex items-center justify-between rounded-md bg-card px-3 py-2 ring-1 ring-border"
            >
              <span className="font-mono text-sm">{d.filename}</span>
              <span className="text-xs text-muted-foreground">{d.uploadedAt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
