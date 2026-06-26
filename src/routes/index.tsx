// Роут «/». Тонкая обёртка над страницей поиска (FSD: pages/search).
import { createFileRoute } from "@tanstack/react-router";
import { SearchPage } from "@/pages/search/SearchPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Поиск услуг · MedArchive" },
      {
        name: "description",
        content:
          "Сводная база цен медицинских услуг по всем клиникам-партнёрам с учётом категорий гражданства.",
      },
      { property: "og:title", content: "Поиск услуг · MedArchive" },
      {
        property: "og:description",
        content: "Сравнение цен услуг по клиникам-партнёрам в едином архиве MedArchive.",
      },
    ],
  }),
  component: SearchPage,
});
