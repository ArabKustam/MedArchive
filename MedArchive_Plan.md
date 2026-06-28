# 🏥 MedArchive — План разработки MVP
> **Хакатон 2025 | MedPartners**  
> Автоматическая обработка архива прайсов клиник-партнёров и формирование базы услуг и цен

---

## 📋 Мастер-промт для команды

```
Мы участвуем в хакатоне и строим систему MedArchive — автоматическую обработку прайс-листов 
клиник-партнёров. Система должна:

1. Принимать ZIP-архив с прайсами в форматах PDF (текстовый), PDF (скан), XLSX/XLS, DOCX
2. Извлекать из каждого файла: название услуги, цену резидента, цену нерезидента
3. Нормализовать извлечённые услуги к единому справочнику (fuzzy matching + эмбеддинги)
4. Хранить историю изменений цен, поддерживать версионирование
5. Предоставлять REST API (FastAPI + OpenAPI docs) для поиска партнёров по услугам
6. Иметь веб-интерфейс: поиск, карточка партнёра, админ-панель с очередью верификации

Стек: Python (FastAPI), PostgreSQL, Celery + Redis, React, pdfplumber/PyMuPDF, Tesseract OCR,
sentence-transformers для эмбеддингов, RapidFuzz для нечёткого поиска.

БД содержит 4 сущности: Partner, PriceDocument, PriceItem, Service.
Каждая позиция прайса автоматически сопоставляется со справочником (cosine similarity > 0.85 
→ авто, иначе → очередь ручной разметки для оператора).
```

---

## 🗂️ Структура проекта

```
medarchive/
├── backend/
│   ├── app/
│   │   ├── api/          # FastAPI роутеры
│   │   ├── parsers/      # Парсеры по форматам
│   │   ├── normalizer/   # Нормализация и matching
│   │   ├── models/       # SQLAlchemy модели
│   │   ├── schemas/      # Pydantic схемы
│   │   ├── tasks/        # Celery задачи
│   │   └── main.py
│   ├── alembic/          # Миграции БД
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── pages/        # Search, Partner, Admin
│   │   ├── components/
│   │   └── api/          # API клиент
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

---

## ✅ Чеклист задач по фазам

### 🔧 Фаза 0 — Подготовка окружения
- [ ] Инициализировать репозиторий, настроить `.gitignore`
- [ ] Написать `docker-compose.yml` (PostgreSQL, Redis, backend, frontend, Celery worker)
- [ ] Настроить `.env` файл с переменными окружения
- [ ] Установить зависимости backend (`requirements.txt`)
- [ ] Установить зависимости frontend (`package.json`)
- [ ] Проверить, что `docker-compose up` поднимает все сервисы

---

### 🗄️ Фаза 1 — База данных и модели

> **Промт для разработчика БД:**
> ```
> Создай SQLAlchemy модели для PostgreSQL со следующими сущностями:
> Partner (partner_id uuid PK, name, city, address, bin, contact_email, contact_phone, 
>          is_active bool, created_at, updated_at)
> PriceDocument (doc_id uuid PK, partner_id FK, file_name, file_format enum, effective_date, 
>                parsed_at, parse_status enum, parse_log text, raw_content text)
> PriceItem (item_id uuid PK, doc_id FK, partner_id FK, service_name_raw, service_code_source,
>            service_id FK nullable, price_resident_kzt decimal, price_nonresident_kzt decimal,
>            price_original decimal, currency_original enum, is_verified bool, 
>            verification_note, effective_date, is_active bool)
> Service (service_id uuid PK, service_name, synonyms jsonb, category, icd_code, is_active bool)
> Используй alembic для миграций. Добавь индексы на partner_id, service_id, is_active.
> ```

- [ ] Создать SQLAlchemy модели: `Partner`, `PriceDocument`, `PriceItem`, `Service`
- [ ] Написать Pydantic схемы для всех моделей (in/out)
- [ ] Настроить Alembic, создать первую миграцию
- [ ] Применить миграцию, проверить структуру таблиц
- [ ] Написать CRUD-функции для каждой модели
- [ ] Добавить индексы: `partner_id`, `service_id`, `is_active`, `is_verified`

---

### 📥 Фаза 2 — Загрузка и очередь обработки

> **Промт для разработчика загрузки:**
> ```
> Реализуй FastAPI эндпоинт POST /upload для приёма ZIP-архива.
> После загрузки:
> 1. Распаковать архив во временную директорию
> 2. Для каждого файла определить тип (по расширению + python-magic)
> 3. Создать запись PriceDocument со статусом "pending"
> 4. Поставить задачу в Celery очередь для обработки
> 5. Сохранить оригинальный файл в storage (локально или S3-compatible)
> Вернуть: список созданных doc_id со статусами.
> ```

- [ ] Реализовать `POST /upload` — приём ZIP-архива
- [ ] Написать распаковку ZIP и определение типа файла (python-magic)
- [ ] Создать Celery задачу `process_document(doc_id)`
- [ ] Реализовать сохранение оригинальных файлов (не удалять!)
- [ ] Добавить `GET /documents` — список документов со статусами
- [ ] Добавить `GET /documents/{id}` — детали и лог обработки

---

### 🔍 Фаза 3 — Парсеры по форматам

#### 3.1 PDF текстовый
> **Промт:**
> ```
> Напиши парсер PDF с текстовым слоем на pdfplumber.
> Задача: извлечь таблицы прайса из PDF.
> Логика: перебрать все страницы, на каждой извлечь table (page.extract_tables()).
> Определить заголовочную строку (содержит слова: услуга/наименование/цена/стоимость).
> Для каждой строки данных вернуть dict: {service_name, price_resident, price_nonresident}.
> Обработать случаи: merged cells, многострочные названия услуг, пустые строки.
> Если таблицы не найдены — извлечь весь текст и вернуть как raw_content для ручного разбора.
> ```

- [ ] Парсер `pdf_text_parser.py` на `pdfplumber`
- [ ] Определение заголовков таблицы (ключевые слова на рус/каз/англ)
- [ ] Обработка merged cells и многострочных ячеек
- [ ] Fallback: извлечение raw text при отсутствии таблиц

#### 3.2 PDF скан (OCR)
> **Промт:**
> ```
> Напиши парсер для сканированных PDF через Tesseract OCR.
> Шаги:
> 1. Конвертировать PDF в изображения (pdf2image, dpi=300)
> 2. Для каждой страницы применить pytesseract (lang=rus+kaz+eng)
> 3. Постобработка: убрать лишние пробелы, исправить типичные OCR-ошибки (0→О, l→1 и т.д.)
> 4. Попробовать распарсить таблицу из текста регулярными выражениями
> 5. Если не удалось — сохранить raw_text, поставить статус needs_review
> Время обработки не более 3 минут на документ.
> ```

- [ ] Парсер `pdf_scan_parser.py` с Tesseract
- [ ] Конвертация PDF → изображения (`pdf2image`, dpi=300)
- [ ] Применение `pytesseract` (lang=`rus+kaz+eng`)
- [ ] Постобработка OCR-текста (regex очистка)
- [ ] Таймаут 180 сек на документ

#### 3.3 XLSX / XLS
> **Промт:**
> ```
> Напиши парсер Excel-файлов (openpyxl для xlsx, xlrd для xls).
> Логика для каждого листа книги:
> 1. Найти заголовочную строку (перебрать первые 10 строк, найти ту, где >= 2 ячеек 
>    содержат ключевые слова: услуга, цена, наименование, стоимость)
> 2. Определить индексы колонок: service_name, price_resident, price_nonresident
> 3. Извлечь все строки данных ниже заголовка
> 4. Пропустить пустые строки и строки-разделители (итого, всего, subtotal)
> 5. Вернуть list[dict] с полями service_name, price_resident, price_nonresident, sheet_name
> ```

- [ ] Парсер `xlsx_parser.py` на `openpyxl` + `pandas`
- [ ] Поддержка `.xls` через `xlrd`
- [ ] Обход всех листов книги
- [ ] Авто-определение заголовочной строки (не обязательно первая)
- [ ] Определение колонок цены резидент/нерезидент

#### 3.4 DOCX
> **Промт:**
> ```
> Напиши парсер DOCX на python-docx.
> 1. Принять все tracked changes (работать с финальным текстом)
> 2. Извлечь все таблицы документа (doc.tables)
> 3. Для каждой таблицы: определить заголовочную строку, извлечь данные
> 4. Также обработать параграфы с паттерном "Название услуги — цена"
> 5. Вернуть унифицированный list[dict] как в остальных парсерах
> ```

- [ ] Парсер `docx_parser.py` на `python-docx`
- [ ] Обработка таблиц (поиск по заголовкам)
- [ ] Обработка tracked changes (принять все изменения)
- [ ] Парсинг параграфов с ценами (regex паттерны)

---

### 🔗 Фаза 4 — Нормализация и сопоставление

> **Промт для разработчика нормализации:**
> ```
> Реализуй модуль нормализации услуг к справочнику Service.
> Алгоритм (каскадный):
> 1. Точное совпадение service_name_raw == service_name (case-insensitive)
> 2. Совпадение с синонимами из Service.synonyms
> 3. Нечёткое совпадение через RapidFuzz (ratio > 85) — по всем именам и синонимам
> 4. Семантическое сходство через sentence-transformers (модель paraphrase-multilingual-MiniLM-L12-v2):
>    - cosine_similarity > 0.85 → автосопоставление
>    - 0.65–0.85 → в очередь unmatched с предложенным вариантом  
>    - < 0.65 → неизвестная услуга, requires_review
> Результат: service_id (если найдено) + confidence_score + match_method
> Предвычислить эмбеддинги всего справочника при старте и кешировать в Redis.
> ```

- [ ] Загрузка справочника `Service` из XLSX/JSON организаторов
- [ ] Точный и синонимный матчинг (шаг 1–2)
- [ ] Fuzzy matching через `RapidFuzz` (шаг 3)
- [ ] Семантические эмбеддинги `sentence-transformers` (шаг 4)
- [ ] Кеширование эмбеддингов справочника в Redis при старте
- [ ] Сохранение `confidence_score` и `match_method` в `PriceItem`
- [ ] Порог auto-match: `cosine_similarity > 0.85` (конфигурируемо через `.env`)
- [ ] Позиции ниже порога → очередь `unmatched`

---

### ✔️ Фаза 5 — Валидация данных

> **Промт:**
> ```
> Реализуй модуль валидации PriceItem перед сохранением в БД.
> Проверки и действия:
> - Цена > 0 и является числом → иначе: статус needs_review, запись в parse_log
> - Цена нерезидента >= цены резидента → предупреждение, флаг для ревью
> - Название услуги не пустое → иначе: пропустить строку
> - Дата прайса не в будущем → предупреждение
> - Дубликат (та же клиника + услуга + дата) → dedup: обновить запись, старую архивировать
> - Отклонение цены > 50% от предыдущей версии → флаг аномалии
> - Валюта не KZT → конвертировать по курсу на дату (ЦБ РК API), сохранить original
> Вернуть: ValidationResult с полями is_valid, warnings[], errors[], dedup_action
> ```

- [ ] Проверка: цена > 0, является числом
- [ ] Проверка: цена нерезидента >= цены резидента
- [ ] Проверка: название услуги не пустое
- [ ] Проверка: дата прайса не в будущем
- [ ] Дедупликация: та же клиника + услуга + дата → архивировать старую
- [ ] Флаг аномалии: отклонение цены > 50% от предыдущей
- [ ] Конвертация валют: USD/RUB → KZT через API ЦБ РК (или фиксированный курс fallback)
- [ ] Версионирование: старые цены не удаляются, `is_active = False`

---

### 🌐 Фаза 6 — REST API

> **Промт для разработчика API:**
> ```
> Реализуй FastAPI роутеры с OpenAPI документацией:
> GET /services?category=&q= — список услуг справочника с фильтрацией
> GET /services/{id}/partners — партнёры, оказывающие услугу (с ценами, сортировка по цене)
> GET /partners?city=&is_active= — список партнёров
> GET /partners/{id}/services — все услуги партнёра с актуальными ценами
> GET /search?q= — полнотекстовый поиск (PostgreSQL FTS или pg_trgm) по услугам и партнёрам
> GET /unmatched?page=&limit= — несопоставленные позиции для операторов
> POST /match — body: {item_id, service_id} — ручное сопоставление оператором
> GET /documents — список документов со статусами обработки
> POST /upload — загрузка ZIP-архива
> Все эндпоинты: пагинация (page/limit), возврат total_count, OpenAPI теги и описания.
> ```

- [ ] `GET /services` — с фильтром по категории и полнотекстовым поиском
- [ ] `GET /services/{id}/partners` — с ценами резидент/нерезидент, сортировка по цене
- [ ] `GET /partners` — фильтр по городу, статусу
- [ ] `GET /partners/{id}/services` — полный прайс партнёра
- [ ] `GET /search?q=` — полнотекстовый поиск (FTS PostgreSQL)
- [ ] `GET /unmatched` — очередь несопоставленных для оператора
- [ ] `POST /match` — ручное сопоставление оператором
- [ ] `GET /documents` + `GET /documents/{id}` — статусы обработки
- [ ] `POST /upload` — загрузка ZIP
- [ ] Настроить OpenAPI / Swagger документацию (`/docs`)
- [ ] Добавить пагинацию и `total_count` во все list-эндпоинты

---

### 🖥️ Фаза 7 — Фронтенд (React)

#### 7.1 Публичная часть
> **Промт:**
> ```
> Создай React страницу поиска услуг MedArchive.
> Компоненты:
> - SearchBar: input с debounce 300ms, вызывает GET /search
> - ServiceCard: название услуги, категория, кнопка "Найти партнёров"
> - PartnersTable: таблица с колонками Партнёр | Город | Цена резидент | Цена нерезидент | 
>   Дата актуальности, сортировка по цене
> - PartnerPage: карточка партнёра, полный прайс с фильтром по категории
> Дизайн: медицинский, чистый, white + blue accent (#2563EB).
> ```

- [ ] Страница `/search` — поиск услуг с debounce
- [ ] Компонент `ServiceCard` — результаты поиска
- [ ] Компонент `PartnersTable` — партнёры с ценами, сортировка
- [ ] Страница `/partners/{id}` — карточка партнёра, полный прайс

#### 7.2 Административная панель
> **Промт:**
> ```
> Создай Admin Panel для MedArchive.
> Страницы:
> 1. /admin/upload — drag-and-drop загрузка ZIP, прогресс обработки
> 2. /admin/documents — таблица документов: имя файла, партнёр, статус, действия
> 3. /admin/verify — очередь верификации:
>    - Слева: фрагмент исходного документа (или raw_text)
>    - Справа: извлечённые данные + предложенное сопоставление из справочника
>    - Кнопки: ✓ Подтвердить | ✗ Отклонить | ✎ Исправить + выбор из справочника
> 4. /admin/dashboard — метрики: обработано документов, % нормализации, очередь
> ```

- [ ] Страница `/admin/upload` — drag-and-drop ZIP, прогресс
- [ ] Страница `/admin/documents` — таблица со статусами и логами
- [ ] Страница `/admin/verify` — очередь верификации (split-view)
- [ ] Компонент ручного сопоставления (autocomplete по справочнику)
- [ ] Страница `/admin/dashboard` — дашборд с метриками
- [ ] Polling или WebSocket для обновления статуса в реальном времени

---

### 📊 Фаза 8 — Качество и финальные штрихи

- [ ] Написать README с инструкцией запуска (`docker-compose up`)
- [ ] Написать скрипт загрузки тестового архива и справочника
- [ ] Проверить обработку всех 4 форматов на тестовых файлах
- [ ] Сформировать отчёт качества: кол-во документов, % нормализации, очередь
- [ ] Нагрузочное тестирование: 1 PDF ≤ 60 сек, 1 скан ≤ 3 мин
- [ ] Написать OpenAPI документацию (проверить `/docs`)
- [ ] Подготовить презентацию (5–7 слайдов: архитектура, демо, метрики)
- [ ] Записать демо-видео 1–3 минуты (опционально)

---

## 📐 Архитектура системы

```
ZIP Upload
    │
    ▼
FastAPI /upload ──► Сохранить файлы ──► Создать PriceDocument (pending)
    │
    ▼
Celery Queue (Redis)
    │
    ├── pdf_text_parser  (pdfplumber)
    ├── pdf_scan_parser  (Tesseract OCR)
    ├── xlsx_parser      (openpyxl/pandas)
    └── docx_parser      (python-docx)
          │
          ▼
    Извлечённые строки
          │
          ▼
    Валидация (цены, дубли, аномалии)
          │
          ▼
    Нормализатор (exact → fuzzy → embeddings)
          │
          ├── score > 0.85 → PriceItem (is_verified=auto)
          └── score < 0.85 → PriceItem (очередь unmatched)
                                │
                                ▼
                        Оператор: /admin/verify
                                │
                                ▼
                        POST /match → is_verified=true

PostgreSQL: Partner, PriceDocument, PriceItem, Service
Redis: кеш эмбеддингов справочника, Celery broker
```

---

## 🔑 Критерии оценки и приоритеты

| Критерий | Вес | Приоритет |
|---|---|---|
| Качество извлечения (все 4 формата) | 30% | 🔴 Высший |
| Нормализация (% авто-сопоставления) | 25% | 🔴 Высший |
| Валидация и верификация | 20% | 🟡 Высокий |
| REST API + OpenAPI docs | 15% | 🟡 Высокий |
| UX админ-панели | 10% | 🟢 Средний |

> ⚡ **Минимальный MVP:** фазы 1–6 (без фронтенда можно показать через Swagger)  
> 🏆 **Полный MVP:** все фазы 0–8

---

## ⚡ Быстрые промты для отдельных задач

### Промт: fuzzy matching
```
Реализуй функцию match_service(raw_name: str, services: list[Service]) -> MatchResult.
Используй RapidFuzz process.extractOne для поиска по service_name и всем synonyms.
Верни: {service_id, matched_name, score, method: "exact"|"synonym"|"fuzzy"|"embedding"|"none"}
```

### Промт: Celery worker
```
Создай Celery задачу process_document(doc_id: str).
Шаги: загрузить PriceDocument из БД → определить формат → вызвать нужный парсер → 
провалидировать каждую строку → нормализовать → сохранить PriceItem → обновить статус документа.
Обработать исключения: при ошибке установить статус "error", сохранить traceback в parse_log.
```

### Промт: полнотекстовый поиск
```
Реализуй полнотекстовый поиск по PostgreSQL.
Создай tsvector колонку для Service.service_name + synonyms.
Создай GIN индекс. Реализуй функцию search(q: str) → list[SearchResult] 
возвращающую как услуги, так и партнёров, отсортированных по релевантности (ts_rank).
```

### Промт: дашборд метрик
```
Реализуй GET /admin/stats endpoint возвращающий:
- total_documents: int (всего документов)
- by_status: dict (pending/processing/done/error/needs_review)
- total_price_items: int
- auto_matched: int (is_verified=true, автоматически)
- unmatched: int (service_id is null)
- match_rate: float (auto_matched / total * 100)
- partners_count: int
- services_covered: int (уникальных service_id в PriceItem)
```
