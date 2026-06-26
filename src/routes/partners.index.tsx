// Роут «/partners». Тонкая обёртка над страницей списка клиник.
import { createFileRoute } from "@tanstack/react-router";
import { PartnersListPage } from "@/pages/partners-list/PartnersListPage";

export const Route = createFileRoute("/partners/")({
  head: () => ({
    meta: [
      { title: "Клиники-партнёры · MedArchive" },
      {
        name: "description",
        content:
          "Список клиник-партнёров MedArchive: контакты, статус интеграции и объём загруженных прайсов.",
      },
      { property: "og:title", content: "Клиники-партнёры · MedArchive" },
      {
        property: "og:description",
        content: "Список клиник-партнёров, объём загруженных прайсов и статус интеграции.",
      },
    ],
  }),
  component: PartnersListPage,
});
