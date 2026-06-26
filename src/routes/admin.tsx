import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { AppLayout } from "../components/AppLayout";

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

const tabs = [
  { to: "/admin", label: "Дашборд", exact: true },
  { to: "/admin/upload", label: "Загрузка" },
  { to: "/admin/documents", label: "Документы" },
  { to: "/admin/verify", label: "Верификация" },
];

function AdminLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AppLayout>
      <header className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">Админ-панель</h1>
        <p className="max-w-[60ch] text-sm text-muted-foreground">
          Управление архивом прайс-листов: загрузка, обработка, верификация и метрики качества.
        </p>
      </header>
      <nav className="mb-6 flex gap-1 border-b border-border">
        {tabs.map((t) => {
          const active = t.exact ? pathname === t.to : pathname === t.to || pathname.startsWith(t.to + "/");
          return (
            <Link
              key={t.to}
              to={t.to}
              className={
                "border-b-2 px-4 py-2 text-sm font-medium transition-colors " +
                (active
                  ? "border-brand text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground")
              }
            >
              {t.label}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </AppLayout>
  );
}
