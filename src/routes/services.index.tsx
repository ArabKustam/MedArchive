// Роут «/services». Каталог услуг.
import { createFileRoute } from "@tanstack/react-router";
import { ServicesListPage } from "@/pages/services-list/ServicesListPage";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Каталог услуг · MedArchive" },
      {
        name: "description",
        content:
          "Единый справочник медицинских услуг с количеством клиник-партнёров и диапазоном цен.",
      },
      { property: "og:title", content: "Каталог услуг · MedArchive" },
      {
        property: "og:description",
        content: "Справочник услуг MedArchive — клиники и диапазон цен по каждой позиции.",
      },
    ],
  }),
  component: ServicesListPage,
});
