// Роут «/partners/$id». Без loader — данные подтягиваются страницей через useQuery.
import { createFileRoute } from "@tanstack/react-router";
import { PartnerDetailPage } from "@/pages/partner-detail/PartnerDetailPage";

export const Route = createFileRoute("/partners/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Клиника ${params.id} · MedArchive` },
      {
        name: "description",
        content: `Прайс-лист, документы и история цен клиники ${params.id} в архиве MedArchive.`,
      },
    ],
  }),
  component: PartnerRoute,
});

function PartnerRoute() {
  const { id } = Route.useParams();
  return <PartnerDetailPage partnerId={id} />;
}
