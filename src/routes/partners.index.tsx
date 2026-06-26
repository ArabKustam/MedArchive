import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "../components/AppLayout";
import { partners } from "../lib/mock-data";

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
  component: PartnersList,
});

function PartnersList() {
  return (
    <AppLayout>
      <header className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">Клиники-партнёры</h1>
        <p className="max-w-[56ch] text-sm text-muted-foreground">
          {partners.length} активных партнёров с автоматической загрузкой прайс-листов.
        </p>
      </header>

      <div className="overflow-hidden rounded-xl bg-panel ring-1 ring-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Клиника
              </th>
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Город
              </th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Услуг
              </th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Документов
              </th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Статус
              </th>
              <th className="px-4 py-3 text-right text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Обновлено
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {partners.map((p) => (
              <tr key={p.id} className="transition-colors hover:bg-muted/30">
                <td className="px-4 py-3 text-sm font-medium">
                  <Link
                    to="/partners/$id"
                    params={{ id: p.id }}
                    className="text-brand hover:underline"
                  >
                    {p.name}
                  </Link>
                  <div className="text-[11px] text-muted-foreground">{p.address}</div>
                </td>
                <td className="px-4 py-3 text-sm">{p.city}</td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">
                  {p.servicesCount.toLocaleString("ru-RU")}
                </td>
                <td className="px-4 py-3 text-right text-sm tabular-nums">{p.docsCount}</td>
                <td className="px-4 py-3 text-right">
                  <span
                    className={
                      "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-semibold uppercase " +
                      (p.status === "active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-zinc-200 text-zinc-600")
                    }
                  >
                    <span
                      className={
                        "size-1.5 rounded-full " +
                        (p.status === "active" ? "bg-emerald-500" : "bg-zinc-400")
                      }
                    />
                    {p.status === "active" ? "Активен" : "Пауза"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-[11px] text-zinc-400">{p.lastUpload}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
