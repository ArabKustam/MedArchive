// Роут «/services/$id». Без loader — данные тянет сама страница через useQuery.
import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/pages/service-detail/ServiceDetailPage";

export const Route = createFileRoute("/services/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Услуга ${params.id} · MedArchive` },
      {
        name: "description",
        content: `Клиники-партнёры и цены по услуге ${params.id} в архиве MedArchive.`,
      },
    ],
  }),
  component: ServiceRoute,
});

function ServiceRoute() {
  const { id } = Route.useParams();
  return <ServiceDetailPage serviceId={id} />;
}
