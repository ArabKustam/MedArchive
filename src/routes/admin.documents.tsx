// Роут «/admin/documents». Таблица документов с удалением.
import { createFileRoute } from "@tanstack/react-router";
import { AdminDocumentsPage } from "@/pages/admin-documents/AdminDocumentsPage";

export const Route = createFileRoute("/admin/documents")({
  component: AdminDocumentsPage,
});
