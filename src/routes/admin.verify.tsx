// Роут «/admin/verify». Ручная верификация позиций.
import { createFileRoute } from "@tanstack/react-router";
import { AdminVerifyPage } from "@/pages/admin-verify/AdminVerifyPage";

export const Route = createFileRoute("/admin/verify")({
  component: AdminVerifyPage,
});
