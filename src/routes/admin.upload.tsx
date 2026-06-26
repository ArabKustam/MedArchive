// Роут «/admin/upload». Загрузка ZIP-архивов прайс-листов.
import { createFileRoute } from "@tanstack/react-router";
import { AdminUploadPage } from "@/pages/admin-upload/AdminUploadPage";

export const Route = createFileRoute("/admin/upload")({
  component: AdminUploadPage,
});
