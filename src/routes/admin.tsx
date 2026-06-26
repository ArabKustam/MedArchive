// Лейаут-роут «/admin». Подключает виджет вкладок и Outlet для вложенных страниц.
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppLayout } from "@/widgets/app-layout";
import { AdminTabs } from "@/widgets/admin-tabs/ui/AdminTabs";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Админ-панель · MedArchive" },
      {
        name: "description",
        content:
          "Загрузка ZIP-архивов прайс-листов, статус обработки документов, очередь верификации и метрики качества нормализации.",
      },
      { property: "og:title", content: "Админ-панель · MedArchive" },
      {
        property: "og:description",
        content: "Загрузка прайсов, верификация и дашборд метрик MedArchive.",
      },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <AppLayout>
      <AdminTabs />
      {/* Сюда монтируются /admin, /admin/upload, /admin/documents, /admin/verify. */}
      <Outlet />
    </AppLayout>
  );
}
