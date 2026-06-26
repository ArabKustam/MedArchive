// Роут «/services/$id». Загружает услугу в loader и передаёт в pages/service-detail.
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppLayout } from "@/widgets/app-layout";
import { getService } from "@/entities/service";
import { ServiceDetailPage } from "@/pages/service-detail/ServiceDetailPage";

export const Route = createFileRoute("/services/$id")({
  loader: ({ params }) => {
    const service = getService(params.id);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.service.name ?? "Услуга";
    return {
      meta: [
        { title: `${name} · MedArchive` },
        {
          name: "description",
          content: `Клиники, оказывающие услугу «${name}», и цены в разрезе резидент/нерезидент.`,
        },
        { property: "og:title", content: `${name} · MedArchive` },
        {
          property: "og:description",
          content: `Список клиник-партнёров и цен на «${name}» в архиве MedArchive.`,
        },
      ],
    };
  },
  component: ServiceRoute,
  notFoundComponent: () => (
    <AppLayout>
      <div className="rounded-xl bg-panel p-10 text-center ring-1 ring-border">
        <h1 className="text-lg font-semibold">Услуга не найдена</h1>
        <Link to="/services" className="mt-4 inline-block text-sm text-brand hover:underline">
          ← К каталогу
        </Link>
      </div>
    </AppLayout>
  ),
});

function ServiceRoute() {
  const { service } = Route.useLoaderData();
  return <ServiceDetailPage service={service} />;
}
