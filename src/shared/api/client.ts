// HTTP-клиент к backend (FastAPI на http://localhost:8765 по умолчанию).
// База настраивается через VITE_API_BASE_URL — задайте её в .env для прод-сборки.

const RAW_BASE =
  (typeof import.meta !== "undefined" && (import.meta as ImportMeta).env?.VITE_API_BASE_URL) ||
  "http://localhost:8765";

export const API_BASE: string = String(RAW_BASE).replace(/\/+$/, "");

/** Ошибка HTTP-запроса с человекочитаемым сообщением. */
export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Универсальный fetch с типизированным ответом. Бросает ApiError при !ok.
 * params сериализуется в querystring; пустые/undefined значения отбрасываются.
 */
export async function apiFetch<T>(
  path: string,
  params?: Record<string, string | number | boolean | null | undefined>,
  init?: RequestInit,
): Promise<T> {
  const url = new URL(API_BASE + path);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v === null || v === undefined || v === "") continue;
      url.searchParams.set(k, String(v));
    }
  }
  let res: Response;
  try {
    res = await fetch(url.toString(), {
      ...init,
      headers: { Accept: "application/json", ...(init?.headers ?? {}) },
    });
  } catch (e) {
    throw new ApiError(
      `Не удалось связаться с backend (${API_BASE}). Проверьте, что сервер запущен.`,
      0,
    );
  }
  if (!res.ok) {
    let detail = res.statusText;
    try {
      const body = (await res.json()) as { detail?: string };
      if (body?.detail) detail = body.detail;
    } catch {
      /* ignore */
    }
    throw new ApiError(`HTTP ${res.status}: ${detail}`, res.status);
  }
  return (await res.json()) as T;
}
