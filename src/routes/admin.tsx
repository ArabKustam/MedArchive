// Лейаут-роут «/admin». Пробрасывает Outlet для вложенных страниц администратора.
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Админ-панель · Price Parser" },
      {
        name: "description",
        content: "Обработка прайс-листов медицинских клиник, верификация и статистика.",
      },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  return <Outlet />;
}
