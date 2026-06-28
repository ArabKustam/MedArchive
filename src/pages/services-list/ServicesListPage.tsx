// Страница «Справочник» (FSD: pages/services-list).
// Точное соответствие дизайну со скриншота пользователя: блок автозагрузки,
// ручного импорта резерва и таблицы с кнопкой «Проверить».

import { useState, useRef, type ChangeEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AppLayout } from "@/widgets/app-layout";
import { servicesQuery, uploadDocument } from "@/shared/api/queries";
import type { ServiceDTO } from "@/shared/api/types";
import { Pager } from "@/shared/ui/Pager";
import { RefreshCw, CheckCircle2, Search, Upload } from "lucide-react";

export function ServicesListPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const servicesReq = useQuery(servicesQuery({ query: query || undefined, page }));
  const items: ServiceDTO[] = servicesReq.data?.items ?? [];

  // Импорт справочника
  const importMut = useMutation({
    mutationFn: (file: File) => uploadDocument(file),
    onSuccess: () => {
      setStatusMessage("Справочник успешно импортирован!");
      setSelectedFile(null);
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (err: any) => {
      setStatusMessage(`Ошибка импорта: ${err.message || err}`);
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setStatusMessage(null);
    }
  };

  const handleImport = () => {
    if (selectedFile) {
      importMut.mutate(selectedFile);
    } else {
      fileInputRef.current?.click();
    }
  };

  return (
    <AppLayout>
      {/* Шапка страницы */}
      <header className="mb-6">
        <h1 className="text-3xl font-black tracking-tight text-zinc-900">Справочник</h1>
        <p className="mt-1 text-sm text-zinc-500 font-semibold">Загруженный каталог услуг.</p>
      </header>

      {/* Главная карточка */}
      <div className="bg-white rounded-2xl border border-[#e2ded4] p-6 shadow-xs space-y-8">
        {/* Шапка внутри карточки */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#f0ede6]">
            <div>
              <h2 className="text-lg font-bold text-zinc-900">Справочник</h2>
              <p className="text-xs text-zinc-500 mt-0.5 font-medium">
                Автозагрузка при старте. Ручной импорт — резерв.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                servicesReq.refetch();
                alert("Проверка целостности справочника завершена.");
              }}
              className="border border-[#e2ded4] bg-white hover:bg-zinc-50 text-xs font-bold text-zinc-700 px-4 py-2 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Проверить
            </button>
          </div>

          {/* Пунктирный блок ручного импорта */}
          <div className="mt-4 bg-[#f4f2eb] border-2 border-dashed border-[#d8d4ca] rounded-xl p-5 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-zinc-900">
                {selectedFile ? selectedFile.name : "Файл справочника"}
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-0.5">CSV, XLSX или JSON</div>
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="border border-[#e2ded4] bg-white hover:bg-zinc-50 text-xs font-bold text-zinc-700 px-4 py-2 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Выбрать файл
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv,.xlsx,.xls,.json"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Подсказка снизу от блока */}
          <p className="text-xs text-zinc-400 mt-2 font-medium">
            Ручная загрузка нужна только если автозагрузка не сработала.
          </p>

          {statusMessage && (
            <div className="mt-3 text-xs font-bold text-[#3b4e28]">{statusMessage}</div>
          )}

          {/* Правая кнопка Импортировать */}
          <div className="flex justify-end mt-3">
            <button
              type="button"
              onClick={handleImport}
              disabled={importMut.isPending}
              className="bg-[#3b4e28] hover:bg-[#2d3e1d] text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-xs transition-colors cursor-pointer disabled:opacity-50"
            >
              {importMut.isPending ? "Импорт..." : "Импортировать"}
            </button>
          </div>
        </div>

        {/* Раздел «Загруженный справочник» */}
        <div className="pt-6 border-t border-[#f0ede6]">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-bold text-zinc-900">Загруженный справочник</h2>
              <p className="text-xs text-zinc-500 mt-0.5 font-medium">Показываю справочник из базы.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 size-3.5 text-zinc-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Найти в справочнике"
                  className="border border-[#e2ded4] bg-white pl-8 pr-3 py-1.5 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-[#3b4e28] w-64 font-medium"
                />
              </div>
              <button
                type="button"
                onClick={() => servicesReq.refetch()}
                className="flex items-center gap-1.5 border border-[#e2ded4] bg-white hover:bg-zinc-50 text-xs font-bold text-zinc-700 px-3.5 py-1.5 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <RefreshCw className="size-3.5 text-zinc-500" />
                <span>Обновить</span>
              </button>
            </div>
          </div>

          {/* Таблица */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[#e2ded4] bg-[#f8f6f1] text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  <th className="py-2.5 px-3">ID Услуги</th>
                  <th className="py-2.5 px-3">Наименование услуги</th>
                  <th className="py-2.5 px-3">Категория</th>
                  <th className="py-2.5 px-3 text-right">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0ede6]">
                {items.map((s) => (
                  <tr key={s.service_id} className="hover:bg-[#fcfbf9] transition-colors">
                    <td className="py-3 px-3 text-xs font-mono text-zinc-400">{s.service_id.slice(0, 8)}</td>
                    <td className="py-3 px-3 text-xs font-medium text-zinc-900">{s.service_name}</td>
                    <td className="py-3 px-3 text-xs text-zinc-500">{s.category || "Общие"}</td>
                    <td className="py-3 px-3 text-right">
                      <span className="bg-[#eaf4eb] text-[#2d6a37] text-[10px] font-bold px-2.5 py-0.5 rounded-md inline-flex items-center gap-1">
                        <CheckCircle2 className="size-3" />
                        <span>АКТИВНА</span>
                      </span>
                    </td>
                  </tr>
                ))}

                {items.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-xs text-[#52796f] font-medium">
                      Загрузка справочника...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Пагинация справочника */}
          <div className="mt-6">
            <Pager
              page={page}
              pageSize={25}
              total={servicesReq.data?.total ?? items.length}
              onChange={setPage}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
