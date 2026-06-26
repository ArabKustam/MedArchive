// Главный лейаут приложения (FSD: widgets/app-layout).
// Содержит закреплённую боковую панель навигации и контейнер для контента.
// Бейдж количества несопоставленных позиций берётся из реактивного стора,
// чтобы автоматически уменьшаться по мере подтверждения позиций оператором.
import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useVerificationQueue } from "@/entities/verification";

type NavItem = {
  to: string;
  label: string;
  badge?: number;
};

const mainNav: NavItem[] = [
  { to: "/", label: "Поиск услуг" },
  { to: "/services", label: "Каталог услуг" },
  { to: "/partners", label: "Клиники-партнёры" },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // Активная ссылка: точное совпадение для «/» и префиксное — для остального.
  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");

  const adminActive = pathname.startsWith("/admin");
  const queue = useVerificationQueue();

  return (
    <div className="min-h-screen bg-surface text-foreground">
      <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-panel">
        <div className="p-6">
          <Link to="/" className="mb-8 flex items-center gap-2">
            <div className="grid size-7 place-items-center rounded-md bg-brand">
              <div className="size-2 rounded-full bg-brand-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight">MedArchive</span>
          </Link>

          <nav className="space-y-1">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors " +
                  (isActive(item.to)
                    ? "bg-brand/8 text-brand"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground")
                }
              >
                <span
                  className={
                    "size-2 rounded-sm " + (isActive(item.to) ? "bg-brand" : "bg-zinc-300")
                  }
                />
                {item.label}
              </Link>
            ))}

            <div className="px-3 pt-5 pb-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                Администрирование
              </span>
            </div>

            <Link
              to="/admin"
              className={
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors " +
                (adminActive
                  ? "bg-brand/8 text-brand"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground")
              }
            >
              <span
                className={"size-2 rounded-sm " + (adminActive ? "bg-brand" : "bg-zinc-300")}
              />
              Верификация
              <span className="ml-auto rounded-full bg-zinc-200 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-700">
                {queue.length}
              </span>
            </Link>
          </nav>
        </div>

        <div className="mt-auto border-t border-border p-6">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-full bg-brand/10 text-sm font-semibold text-brand ring-1 ring-border">
              АО
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium">А. Оператор</span>
              <span className="text-[10px] text-muted-foreground">Администратор</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}
