// Реактивная очередь ручной верификации (FSD: entities/verification).
// Каждый элемент очереди — нераспознанная строка прайса плюс набор кандидатов
// из справочника услуг. Удаление элемента из очереди = решение оператора.

import { useSyncExternalStore } from "react";
import { verificationQueue as initial, type VerificationItem } from "@/shared/api/mock-data";

let queue: VerificationItem[] = [...initial];
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const verificationStore = {
  getSnapshot: () => queue,
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  /** Удалить элемент очереди (после подтверждения / отказа / создания новой услуги). */
  resolve(id: string) {
    queue = queue.filter((q) => q.id !== id);
    emit();
  },
};

export function useVerificationQueue(): VerificationItem[] {
  return useSyncExternalStore(
    verificationStore.subscribe,
    verificationStore.getSnapshot,
    () => initial,
  );
}
