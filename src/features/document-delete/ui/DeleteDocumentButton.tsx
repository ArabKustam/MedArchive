// Фича «Удаление документа» (FSD: features/document-delete).
// Самодостаточная кнопка: показывает confirm, обращается к стору документов.
// Не знает ничего о таблице, в которой отображается — её можно вставить куда угодно.

import { useState } from "react";
import { documentStore, type PriceDocument } from "@/entities/price-document";

type Props = {
  /** Документ, который нужно удалить. */
  document: Pick<PriceDocument, "id" | "filename">;
  /** Опциональный колбэк после успешного удаления (например, сброс выделения). */
  onDeleted?: (id: string) => void;
};

export function DeleteDocumentButton({ document, onDeleted }: Props) {
  // Локальный флаг «ожидание подтверждения» — две стадии вместо системного confirm,
  // чтобы UI оставался единообразным.
  const [confirming, setConfirming] = useState(false);

  function handleDelete() {
    documentStore.remove(document.id);
    onDeleted?.(document.id);
  }

  if (confirming) {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span className="text-[11px] text-muted-foreground">Удалить?</span>
        <button
          type="button"
          onClick={handleDelete}
          className="rounded border border-rose-300 bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-700 hover:bg-rose-100"
        >
          Да
        </button>
        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="rounded border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-muted-foreground hover:text-foreground"
        >
          Отмена
        </button>
      </span>
    );
  }

  return (
    <button
      type="button"
      title={`Удалить документ ${document.filename}`}
      aria-label={`Удалить документ ${document.filename}`}
      onClick={() => setConfirming(true)}
      className="rounded border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-rose-300 hover:text-rose-600"
    >
      Удалить
    </button>
  );
}
