// HTTP-клиент к backend с авто-переключением 127.0.0.1 <-> localhost и детализацией ошибок.

const RAW_BASE =
  (typeof import.meta !== "undefined" && (import.meta as ImportMeta).env?.VITE_API_BASE_URL) ||
  "http://127.0.0.1:8765";

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
 */
export async function apiFetch<T>(
  path: string,
  params?: Record<string, string | number | boolean | null | undefined>,
  init?: RequestInit,
): Promise<T> {
  const primaryUrl = new URL(API_BASE + path);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v === null || v === undefined || v === "") continue;
      primaryUrl.searchParams.set(k, String(v));
    }
  }

  let res: Response | null = null;
  let lastError: any = null;

  // Попытка 1: Через основной URL (127.0.0.1)
  try {
    res = await fetch(primaryUrl.toString(), {
      ...init,
      headers: { Accept: "application/json", ...(init?.headers ?? {}) },
    });
  } catch (e) {
    lastError = e;
  }

  // Попытка 2: Резервный фолбэк на localhost, если 127.0.0.1 заблокирован браузером
  if (!res && API_BASE.includes("127.0.0.1")) {
    try {
      const fallbackUrlStr = primaryUrl.toString().replace("127.0.0.1", "localhost");
      res = await fetch(fallbackUrlStr, {
        ...init,
        headers: { Accept: "application/json", ...(init?.headers ?? {}) },
      });
    } catch (e) {
      lastError = e;
    }
  }

  if (!res) {
    const errDetail = lastError?.message || String(lastError || "NetworkError");
    throw new ApiError(
      `Не удалось связаться с backend сервером (${API_BASE}). Детали: ${errDetail}`,
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
