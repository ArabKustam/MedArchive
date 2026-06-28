// Главный лейаут приложения (FSD: widgets/app-layout).
// Чистый светлый зеленый интерфейс без блока аккаунта и без нижней подсказки в боковой панели.

import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  FileCode2,
  Building2,
  Search,
  CheckCircle2,
  Activity,
  Database,
  Sparkles,
} from "lucide-react";

type NavItem = {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const mainNav: NavItem[] = [
  { to: "/admin/upload", label: "Прайсы", icon: FileCode2 },
  { to: "/partners", label: "Партнёры", icon: Building2 },
  { to: "/", label: "Поиск", icon: Search },
  { to: "/admin/verify", label: "Ревью", icon: CheckCircle2 },
  { to: "/admin", label: "Статистика", icon: Activity },
  { to: "/services", label: "Справочник", icon: Database },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => {
    if (to === "/") {
      return pathname === "/";
    }
    if (to === "/admin") {
      return pathname === "/admin" || pathname === "/admin/";
    }
    return pathname === to || pathname.startsWith(to + "/");
  };

  return (
    <div className="min-h-screen bg-[#f3f8f3] text-[#1c2e1d] font-sans flex text-base">
      {/* Светлая боковая панель (w-72) */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r-2 border-[#d4e4d4] bg-[#eaf4ea]">
        <div className="p-6">
          {/* Бренд / Логотип */}
          <Link to="/admin/upload" className="mb-8 block group">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-[#2d6a4f] text-white shadow-sm">
                <Sparkles className="size-6" />
              </div>
              <div>
                <div className="text-xl font-black tracking-tight text-[#1c2e1d] leading-none group-hover:text-[#2d6a4f] transition-colors">
                  Price Parser
                </div>
                <div className="mt-1.5 text-[10px] uppercase font-bold tracking-widest text-[#52796f]">
                  MEDICAL ADMINISTRATION
                </div>
              </div>
            </div>
          </Link>

          {/* Пункты навигационного меню */}
          <nav className="space-y-1.5">
            {mainNav.map((item) => {
              const active = isActive(item.to);
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm transition-all " +
                    (active
                      ? "bg-[#d8ebd8] text-[#1b4332] font-black shadow-xs border-l-4 border-[#2d6a4f]"
                      : "text-[#52796f] hover:bg-[#d8ebd8]/60 hover:text-[#1c2e1d] font-bold")
                  }
                >
                  <IconComponent
                    className={
                      "size-5 transition-transform flex-shrink-0 " +
                      (active ? "text-[#2d6a4f] scale-110" : "text-[#52796f]")
                    }
                  />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Основная область контента (ml-72) */}
      <div className="flex-1 ml-72 flex flex-col min-h-screen">
        {/* Главный контент */}
        <main className="px-8 pt-8 pb-12 flex-1">{children}</main>
      </div>
    </div>
  );
}
