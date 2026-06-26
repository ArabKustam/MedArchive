// Реактивное хранилище документов прайс-листов (FSD: entities/price-document).
// На текущем этапе данные мокаются, но мы оборачиваем их в подписываемый стор,
// чтобы UI (admin/documents, upload, dashboard) синхронно реагировал на удаление
// и добавление новых документов без перезагрузки страницы.

import { useSyncExternalStore } from "react";
import { priceDocuments as initial, type PriceDocument } from "@/shared/api/mock-data";

// Текущее состояние списка документов.
let docs: PriceDocument[] = [...initial];

// Подписчики на изменения — вызываются при любой мутации.
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

/**
 * Низкоуровневое API стора. Используется из хуков и features.
 * Снимок (snapshot) обновляется ТОЛЬКО при мутациях — это требование
 * useSyncExternalStore (стабильная ссылка между рендерами).
 */
export const documentStore = {
  /** Получить текущий снимок. */
  getSnapshot: () => docs,

  /** Подписаться на изменения. Возвращает функцию отписки. */
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  /** Удалить документ по id. */
  remove(id: string) {
    docs = docs.filter((d) => d.id !== id);
    emit();
  },

  /** Добавить документ в начало списка (например, после загрузки). */
  add(doc: PriceDocument) {
    docs = [doc, ...docs];
    emit();
  },
};

/** Хук для подписки React-компонентов на актуальный список документов. */
export function useDocuments(): PriceDocument[] {
  return useSyncExternalStore(
    documentStore.subscribe,
    documentStore.getSnapshot,
    // Серверный снимок: всегда отдаём исходный массив, чтобы SSR-результат
    // совпадал с первой клиентской отрисовкой.
    () => initial,
  );
}
