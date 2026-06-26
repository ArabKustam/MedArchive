// Роут «/partners/$id». Загружает партнёра в loader и передаёт в pages/partner-detail.
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppLayout } from "@/widgets/app-layout";
import { getPartner } from "@/entities/partner";
import { PartnerDetailPage } from "@/pages/partner-detail/PartnerDetailPage";

export const Route = createFileRoute("/partners/$id")({
  loader: ({ params }) => {
    // Ищем партнёра по id. Если нет — отдаём 404, чтобы сработал notFoundComponent.
    const partner = getPartner(params.id);
    if (!partner) throw notFound();
    return { partner };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.partner.name ?? "Клиника";
    return {
      meta: [
        { title: `${name} · MedArchive` },
        {
          name: "description",
          content: `Прайс-лист, история изменения цен и документы клиники ${name} в архиве MedArchive.`,
        },
        { property: "og:title", content: `${name} · MedArchive` },
        { property: "og:description", content: `Прайс-лист и история цен клиники ${name}.` },
      ],
    };
  },
  component: PartnerRoute,
  notFoundComponent: () => (
    <AppLayout>
      <div className="rounded-xl bg-panel p-10 text-center ring-1 ring-border">
        <h1 className="text-lg font-semibold">Клиника не найдена</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Запрошенный партнёр отсутствует в архиве.
        </p>
        <Link
          to="/partners"
          className="mt-6 inline-flex h-9 items-center rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground hover:bg-brand-light"
        >
          К списку клиник
        </Link>
      </div>
    </AppLayout>
  ),
  errorComponent: ({ error }) => (
    <AppLayout>
      <div className="rounded-xl bg-panel p-10 text-center ring-1 ring-border">
        <h1 className="text-lg font-semibold">Не удалось загрузить клинику</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </AppLayout>
  ),
});

function PartnerRoute() {
  const { partner } = Route.useLoaderData();
  return <PartnerDetailPage partner={partner} />;
}
