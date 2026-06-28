import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDocument } from "@/shared/api/queries";

type Props = {
  document: { id: string; filename: string };
  onDeleted?: (id: string) => void;
};

export function DeleteDocumentButton({ document, onDeleted }: Props) {
  const [confirming, setConfirming] = useState(false);
  const queryClient = useQueryClient();

  const deleteMut = useMutation({
    mutationFn: () => deleteDocument(document.id),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
      await queryClient.refetchQueries();
      onDeleted?.(document.id);
      setConfirming(false);
    },
  });

  function handleDelete() {
    deleteMut.mutate();
  }

  if (confirming) {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span className="text-[11px] text-muted-foreground">Удалить?</span>
        <button
          type="button"
          disabled={deleteMut.isPending}
          onClick={handleDelete}
          className="rounded border border-rose-300 bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-700 hover:bg-rose-100 disabled:opacity-50"
        >
          {deleteMut.isPending ? "..." : "Да"}
        </button>
        <button
          type="button"
          disabled={deleteMut.isPending}
          onClick={() => setConfirming(false)}
          className="rounded border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-muted-foreground hover:text-foreground disabled:opacity-50"
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
