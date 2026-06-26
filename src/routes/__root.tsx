// Корневой роут (FSD: app layer).
// Подключает шрифты, глобальные стили, мета-данные, провайдер TanStack Query,
// а также общие notFound/error компоненты.

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AppLayout } from "@/widgets/app-layout";

/** Компонент 404. Отображается, когда роут не найден. */
function NotFoundComponent() {
  return (
    <AppLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
          404 · Не найдено
        </div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Страница не найдена</h1>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Запрошенный раздел архива не существует или был перемещён.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex h-9 items-center rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground hover:bg-brand-light transition-colors"
        >
          К поиску услуг
        </a>
      </div>
    </AppLayout>
  );
}

/** Компонент глобального error-boundary. */
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <AppLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="text-[10px] font-medium uppercase tracking-widest text-destructive">
          Ошибка
        </div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Раздел не загрузился</h1>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Произошла внутренняя ошибка. Попробуйте перезагрузить страницу.
        </p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => {
              // invalidate() перезапускает loader'ы; reset() сбрасывает границу ошибки.
              router.invalidate();
              reset();
            }}
            className="inline-flex h-9 items-center rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground hover:bg-brand-light transition-colors"
          >
            Повторить
          </button>
          <a
            href="/"
            className="inline-flex h-9 items-center rounded-md bg-panel px-4 text-sm font-medium text-foreground ring-1 ring-border hover:bg-muted transition-colors"
          >
            На главную
          </a>
        </div>
      </div>
    </AppLayout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MedArchive — архив прайсов клиник-партнёров" },
      {
        name: "description",
        content:
          "MedArchive — автоматическая обработка прайс-листов медицинских клиник: поиск услуг, сравнение цен и верификация позиций.",
      },
      { name: "author", content: "MedPartners" },
      { property: "og:title", content: "MedArchive — архив прайсов клиник-партнёров" },
      {
        property: "og:description",
        content: "Поиск услуг, сравнение цен и верификация позиций по архиву прайс-листов клиник.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "MedArchive — архив прайсов клиник-партнёров" },
      { name: "twitter:description", content: "Архив прайсов клиник-партнёров MedArchive." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/** Корневая HTML-обёртка SSR. */
function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/** Корневой компонент: оборачивает выдачу в QueryClientProvider. */
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
