// Роут «/admin» (index). Дашборд админ-панели.
import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboardPage } from "@/pages/admin-dashboard/AdminDashboardPage";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboardPage,
});
