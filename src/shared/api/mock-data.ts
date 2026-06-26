// AUTO-GENERATED from real clinic price files. Do not edit by hand.
export type Partner = {
  id: string; name: string; city: string; address: string; phone: string; email: string;
  status: "active" | "paused"; apiVersion: string; docsCount: number; servicesCount: number; lastUpload: string;
};
export type PriceRow = {
  partnerId: string; partnerName: string; service: string; category: string;
  resident: number; nonResident: number; updatedAt: string;
};
export type HistoryPoint = { date: string; resident: number; nonResident: number; };
export type PriceDocument = {
  id: string; filename: string; partnerId: string; uploadedAt: string;
  status: "queued" | "processing" | "done" | "error"; itemsTotal: number; itemsMatched: number;
};
export type VerificationCandidate = { serviceId: string; title: string; code: string; category: string; score: number; };
export type VerificationItem = {
  id: string; partnerId: string; partnerName: string; document: string;
  rawTitle: string; rawPrice: string; candidates: VerificationCandidate[];
};

export const partners: Partner[] = [
  {
    "id": "clinic-1",
    "name": "Клиника №1",
    "city": "Алматы",
    "address": "ул. Абая, 12",
    "phone": "+7 727 250-10-01",
    "email": "info@clinic1.kz",
    "status": "active",
    "apiVersion": "v2",
    "docsCount": 2,
    "servicesCount": 1662,
    "lastUpload": "2026"
  },
  {
    "id": "clinic-2",
    "name": "Клиника №2",
    "city": "Астана",
    "address": "пр. Республики, 45",
    "phone": "+7 717 250-20-02",
    "email": "info@clinic2.kz",
    "status": "active",
    "apiVersion": "v2",
    "docsCount": 2,
    "servicesCount": 760,
    "lastUpload": "2026"
  },
  {
    "id": "clinic-3",
    "name": "Клиника №3",
    "city": "Алматы",
    "address": "ул. Толе би, 84",
    "phone": "+7 727 250-30-03",
    "email": "info@clinic3.kz",
    "status": "active",
    "apiVersion": "v2",
    "docsCount": 1,
    "servicesCount": 52,
    "lastUpload": "2026"
  },
  {
    "id": "clinic-4",
    "name": "Клиника №4",
    "city": "Шымкент",
    "address": "пр. Тауке хана, 18",
    "phone": "+7 725 250-40-04",
    "email": "info@clinic4.kz",
    "status": "active",
    "apiVersion": "v2",
    "docsCount": 1,
    "servicesCount": 363,
    "lastUpload": "2026"
  },
  {
    "id": "clinic-5",
    "name": "Клиника №5",
    "city": "Караганда",
    "address": "ул. Алиханова, 33",
    "phone": "+7 721 250-50-05",
    "email": "info@clinic5.kz",
    "status": "paused",
    "apiVersion": "v2",
    "docsCount": 1,
    "servicesCount": 0,
    "lastUpload": "2025"
  },
  {
    "id": "clinic-6",
    "name": "Клиника №6",
    "city": "Алматы",
    "address": "мкр. Самал-2, 77",
    "phone": "+7 727 250-60-06",
    "email": "info@clinic6.kz",
    "status": "active",
    "apiVersion": "v2",
    "docsCount": 1,
    "servicesCount": 3749,
    "lastUpload": "2026"
  },
  {
    "id": "clinic-7",
    "name": "Клиника №7",
    "city": "Астана",
    "address": "ул. Кенесары, 56",
    "phone": "+7 717 250-70-07",
    "email": "info@clinic7.kz",
    "status": "active",
    "apiVersion": "v2",
    "docsCount": 1,
    "servicesCount": 2877,
    "lastUpload": "2026"
  },
  {
    "id": "clinic-8",
    "name": "Клиника №8",
    "city": "Актобе",
    "address": "пр. Абилкайыр хана, 22",
    "phone": "+7 713 250-80-08",
    "email": "info@clinic8.kz",
    "status": "active",
    "apiVersion": "v2",
    "docsCount": 1,
    "servicesCount": 1790,
    "lastUpload": "2026"
  }
];

export const priceRows: PriceRow[] = [
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Консультативный прием врача д.м.н",
    "category": "Консультации",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "и 1.2 Консультативный прием врача к.м.н",
    "category": "Консультации",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Консультация второго врача",
    "category": "Консультации",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Услуги переводчика ( программы, справки)",
    "category": "Прочие услуги",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Услуги сотрудника переводчика (до 60 минут)",
    "category": "Прочие услуги",
    "resident": 6900.0,
    "nonResident": 6900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Услуги сотрудника переводчика 30 минут",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Осмотр врача",
    "category": "Консультации",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Выезд машины",
    "category": "Прочие услуги",
    "resident": 5600.0,
    "nonResident": 5600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Патронаж медсестры на дому",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Осмотр врача в праздничные и выходные дни",
    "category": "Консультации",
    "resident": 27700.0,
    "nonResident": 27700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Выезд машины в праздничные и выходные дни",
    "category": "Прочие услуги",
    "resident": 9700.0,
    "nonResident": 9700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Осмотр врача",
    "category": "Консультации",
    "resident": 23500.0,
    "nonResident": 23500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Выезд машины",
    "category": "Прочие услуги",
    "resident": 9700.0,
    "nonResident": 9700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Выезд машины в праздничные и выходные дни",
    "category": "Прочие услуги",
    "resident": 12500.0,
    "nonResident": 12500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "DR3.1 Прием врача дерматовенеролога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "DR3.2 Прием врача трихолога И",
    "category": "Консультации",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "DR3.4 Санация влагалища,уретры 1 процедура без стоимости материала",
    "category": "Прочие услуги",
    "resident": 4900.0,
    "nonResident": 4900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "DR3.5 Удаление моллюска размером до 0,5 см (1 штука)",
    "category": "Хирургия",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "DR3.6 Соскоб/ресницы. Обнаружение демодекса (дерматолог)",
    "category": "Прочие услуги",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "DR3.7 Соскоб кожи на демодекс (дерматолог)",
    "category": "Прочие услуги",
    "resident": 1400.0,
    "nonResident": 1400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "DR3.8 Забор материала на демодекоз, ресницы (1 глаз) (дерматолог)",
    "category": "Прочие услуги",
    "resident": 1400.0,
    "nonResident": 1400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "DR3.9 удаление папиломы (электрокаогуляция до 3 мл 1 шт)",
    "category": "Хирургия",
    "resident": 3000.0,
    "nonResident": 3000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.1 Прием врача аллерголога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.2 Кожные тесты с пыльцевыми аллергенами",
    "category": "Прочие услуги",
    "resident": 2400.0,
    "nonResident": 2400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.3 Кожные тесты с пищевыми аллергенами",
    "category": "Прочие услуги",
    "resident": 2400.0,
    "nonResident": 2400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.4 Кожные тесты с грибковыми аллергеноми",
    "category": "Прочие услуги",
    "resident": 2400.0,
    "nonResident": 2400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.5 Кожные тесты с эпидермальными аллергеноми",
    "category": "Прочие услуги",
    "resident": 2400.0,
    "nonResident": 2400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.6 Проведение специфической иммунотерапии 1 год:-один аллерген",
    "category": "Прочие услуги",
    "resident": 149700.0,
    "nonResident": 149700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Приложение № 1 от 01.01",
    "category": "Прочие услуги",
    "resident": 2026.0,
    "nonResident": 2026.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.7 Проведение специфической иммунотерапии 1 год:-два аллергена",
    "category": "Прочие услуги",
    "resident": 182900.0,
    "nonResident": 182900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.8 Проведение специфической иммунотерапии 1 год:-три аллергена",
    "category": "Прочие услуги",
    "resident": 216300.0,
    "nonResident": 216300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.9 Проба на непереносимость лекарственных средств",
    "category": "Прочие услуги",
    "resident": 4800.0,
    "nonResident": 4800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "AL4.10 Прием врача аллерголога по внутреннему направлению",
    "category": "Консультации",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.1 Прием врача кардиолога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.2 Эхокардиография с допплерографией (Узи сердца)",
    "category": "Ультразвуковая диагностика",
    "resident": 13100.0,
    "nonResident": 13100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.3 ЭКГ",
    "category": "Функциональная диагностика",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.4 Суточное мониторирование ЭКГ (Холтер ЭКГ )",
    "category": "Функциональная диагностика",
    "resident": 16000.0,
    "nonResident": 16000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.5 Суточное мониторирование АД(СМАД)",
    "category": "Функциональная диагностика",
    "resident": 16000.0,
    "nonResident": 16000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.6 Спирометрия",
    "category": "Функциональная диагностика",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.7 Эхокардиография с допплерографией для детей (УЗИ сердца)",
    "category": "Ультразвуковая диагностика",
    "resident": 11800.0,
    "nonResident": 11800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.8 Дубликат ранее проведенных обследований",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.9 Ночное мониторирование АД(ДМАД)",
    "category": "Прочие услуги",
    "resident": 4800.0,
    "nonResident": 4800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.10 Суточное мониторирование ЭКГ (Холтер ЭКГ- 12 ти канальный )",
    "category": "Функциональная диагностика",
    "resident": 16800.0,
    "nonResident": 16800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.11 ЭКГ с нагрузкой",
    "category": "Функциональная диагностика",
    "resident": 6900.0,
    "nonResident": 6900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.1 , Прием врача оториноларинголога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.2 Анемизация слизистой носа",
    "category": "Прочие услуги",
    "resident": 1800.0,
    "nonResident": 1800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.3 Вливание в носоглотку лекарственных средств",
    "category": "Прочие услуги",
    "resident": 2300.0,
    "nonResident": 2300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.4 Обработка слизистой перегородки носа, трещин преддверия носа",
    "category": "Прочие услуги",
    "resident": 1400.0,
    "nonResident": 1400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.5 Лечение методом «перемещения» по Проецу на аппарате",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.6 Блокада внутриносовая - односторонняя",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.7 Пункция гайморовой пазухи - односторонняя",
    "category": "Прочие услуги",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.8 Промывание через соустье верхней пазухи",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.9 Промывание полости носа",
    "category": "Прочие услуги",
    "resident": 2900.0,
    "nonResident": 2900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.Ю Инсуфляция порошка в нос на аппарате",
    "category": "Прочие услуги",
    "resident": 2300.0,
    "nonResident": 2300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.11 Удаление инородного тела из носа:несложное",
    "category": "Хирургия",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.12 Удаление инородного тела из носа:сложное",
    "category": "Хирургия",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.13 Передняя тампонада полости носа при кровотечениях",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.14 Промывание миндалин на аппарате",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.15 Смазывание слизистой задней стенки глотки, миндалин",
    "category": "Прочие услуги",
    "resident": 1200.0,
    "nonResident": 1200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.16 Вскрытие паратонзиллярного абсцесса",
    "category": "Прочие услуги",
    "resident": 8300.0,
    "nonResident": 8300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.17 Орошение задней стенки глотки на аппарате",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.18 Внутригортанное вливание",
    "category": "Прочие услуги",
    "resident": 3800.0,
    "nonResident": 3800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.19 Удаление инородного тела из глотки, гортани:несложное",
    "category": "Хирургия",
    "resident": 4700.0,
    "nonResident": 4700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.20 Удаление инородного тела из глотки, гортани:сложное",
    "category": "Хирургия",
    "resident": 6600.0,
    "nonResident": 6600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.21 Удаление инородного тела из уха, носа: несложное",
    "category": "Хирургия",
    "resident": 5500.0,
    "nonResident": 5500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.22 Удаление инородного тела из уха, носа:сложное",
    "category": "Хирургия",
    "resident": 5600.0,
    "nonResident": 5600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.25 Турунда в ухо мазевая",
    "category": "Прочие услуги",
    "resident": 1200.0,
    "nonResident": 1200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.26 Туалет уха (механический)-промывание одного уха",
    "category": "Прочие услуги",
    "resident": 2300.0,
    "nonResident": 2300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Пункция отогематомы",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.28 Вдувание порошка в полость среднего уха на аппарате",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.29 Туширование полипов уха",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.ЭО Продувание Евстахиевой трубы по Полицеру",
    "category": "Прочие услуги",
    "resident": 1900.0,
    "nonResident": 1900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.31 Пневмомассаж барабанной перепонки на аппарате",
    "category": "Физиотерапия",
    "resident": 1800.0,
    "nonResident": 1800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.32 Катетеризация одной слуховой трубы одностороннее",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.34 Парамеатальная блокада",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.35 Вскрытие нагноившейся атеромы уха с обезбаливанием",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.36 Перевязки после вскрытий фурункула",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.37 Задняя тампонада полости носа при кровотечениях",
    "category": "Прочие услуги",
    "resident": 5600.0,
    "nonResident": 5600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.38 Вскрытие нагноившихся кист небных миндалин",
    "category": "Прочие услуги",
    "resident": 6900.0,
    "nonResident": 6900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.39 Аппликационная анестезия",
    "category": "Прочие услуги",
    "resident": 1200.0,
    "nonResident": 1200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.41 . Аудиометрия",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.43 Промывание лакун небных миндалин",
    "category": "Прочие услуги",
    "resident": 3900.0,
    "nonResident": 3900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.44 Смазывание задней стенки ротоглотки раствором Люголя",
    "category": "Прочие услуги",
    "resident": 1800.0,
    "nonResident": 1800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.45 Взятие мазка из слизистой носа на риноцитограмму",
    "category": "Прочие услуги",
    "resident": 1200.0,
    "nonResident": 1200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.47 Биопсия йз ЛОР органов на гистологическое исследования",
    "category": "Хирургия",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.48 Прижигание кровоточащего участка в полости носа",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.49 Эндоскопический осмотр ЛОР органов",
    "category": "Консультации",
    "resident": 8100.0,
    "nonResident": 8100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.50 Первичная хирургическая обработка ран",
    "category": "Хирургия",
    "resident": 2700.0,
    "nonResident": 2700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.51 Парацентез барабанной перепонки",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.54 Удаление атеромы ушной раковины и заушной области",
    "category": "Хирургия",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.55 •Эхосинусоскопия придаточных пазух носа",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.56 Вакум-дренаж носовых пазух и синусов",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.57 Эндоскопия носоглотки",
    "category": "Прочие услуги",
    "resident": 8100.0,
    "nonResident": 8100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.58 Эндоскопия уха",
    "category": "Прочие услуги",
    "resident": 2900.0,
    "nonResident": 2900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.59 Эндоскопия гортани",
    "category": "Прочие услуги",
    "resident": 8100.0,
    "nonResident": 8100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.60 Вскрытие, дренирование, тампонада гематомы носовой перегородки",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.61 Вскрытие фурункула носа,слухового прохода",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.62 Орошение глотки",
    "category": "Прочие услуги",
    "resident": 2700.0,
    "nonResident": 2700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.63 Вскрытие абсцесса перегородки носа",
    "category": "Прочие услуги",
    "resident": 19600.0,
    "nonResident": 19600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.65 Установка катетора,катетеризация гайморовой пазухи)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.66 Прижигание гранул задней стенки глотки",
    "category": "Прочие услуги",
    "resident": 2700.0,
    "nonResident": 2700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.67 Лечение ЯМИК-катетером",
    "category": "Прочие услуги",
    "resident": 15200.0,
    "nonResident": 15200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.68 Рассечение синехий полости носа",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.69 Анестезия инфильтрационная",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.70 Удаление(снятие)кожных и слизистых швов после JIOP-операции",
    "category": "Хирургия",
    "resident": 2700.0,
    "nonResident": 2700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.73 Растампонирование",
    "category": "Прочие услуги",
    "resident": 2300.0,
    "nonResident": 2300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.74 Блокады боковых валиков глотки",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.1 Прием врача офтальмолога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.2 Биомикроскопия (2 глаза)",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.4 Подбор очков: простая коррекция",
    "category": "Прочие услуги",
    "resident": 2400.0,
    "nonResident": 2400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.7 Автокераторефрактометрия (2 глаза)",
    "category": "Прочие услуги",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.8 Тонометрия бесконтактная оба глаза",
    "category": "Прочие услуги",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.9 Тонометрия контактная по Маклакову (2 глаза)",
    "category": "Прочие услуги",
    "resident": 3000.0,
    "nonResident": 3000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.12 Офтальмоскопия",
    "category": "Прочие услуги",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.13 Определение цветоощущения (цветотест с таблицей Рабкина)",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.14 Определение угла девиации по Гиршбергу",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.17 Массаж слезного мешка (2 глаза)",
    "category": "Физиотерапия",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.18 Удаление инородного тела конъюнктивы",
    "category": "Хирургия",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.19 Удаление инородного тела роговицы (1 глаз)",
    "category": "Хирургия",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.20 Удаление неправильно растущих ресниц (1 глаз)",
    "category": "Хирургия",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.23 Инъекция подконъюктивальная ( 1 глаз)",
    "category": "Прочие услуги",
    "resident": 2400.0,
    "nonResident": 2400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.24 Инъекция парабульбарная (1 глаз, без стоимости препарата)",
    "category": "Прочие услуги",
    "resident": 2400.0,
    "nonResident": 2400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.25 Инъекция под кожу виска (1 инъекция, без стоимости препарата)",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.30 Компьютерная периметрия ( исследование полей зрения)",
    "category": "Прочие услуги",
    "resident": 4900.0,
    "nonResident": 4900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.31 Лечение на аппарате \"Визотроник\" (1 сеанс)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.4 Лечебные тампоны (1 процедура) без стоимости материала",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Приложение № 1 от 01.01,",
    "category": "Прочие услуги",
    "resident": 2026.0,
    "nonResident": 2026.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.6 Извлечение ВМС",
    "category": "Прочие услуги",
    "resident": 6600.0,
    "nonResident": 6600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.7 Извлечение ВМС крючком",
    "category": "Прочие услуги",
    "resident": 13300.0,
    "nonResident": 13300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.8 Извлечение ВМС крючком сложное",
    "category": "Прочие услуги",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.9 Введение ВМС (без стоимости ВМС) после обследования",
    "category": "Прочие услуги",
    "resident": 11700.0,
    "nonResident": 11700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.10 Введение ВМС (со стоимостью ВМС) после обследования",
    "category": "Прочие услуги",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.11 Парацервикальная инъекция",
    "category": "Гинекология",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.12 Взятие материала на гистологическое исследование",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.13 Биопсия",
    "category": "Хирургия",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.15 АПК - аргоноплазменная коагуляция",
    "category": "Лабораторная диагностика",
    "resident": 58200.0,
    "nonResident": 58200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.16 Вскрытие абсцесса бартолиновой железы",
    "category": "Прочие услуги",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.17 Перевязка после вскрытия абсцесса",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.18 Удаление остроконечных кондилом (1 единица)",
    "category": "Хирургия",
    "resident": 2700.0,
    "nonResident": 2700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.20 Взятие аспирата из полости матки",
    "category": "Прочие услуги",
    "resident": 11700.0,
    "nonResident": 11700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.22 Гименопластика",
    "category": "Прочие услуги",
    "resident": 91500.0,
    "nonResident": 91500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.23 Медикаментозное прерывание беременности",
    "category": "Прочие услуги",
    "resident": 74900.0,
    "nonResident": 74900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.24 Кардиотокография (КТГ)",
    "category": "Прочие услуги",
    "resident": 4900.0,
    "nonResident": 4900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.25 Установка гинекологического пессария (без стоимости материала)",
    "category": "Гинекология",
    "resident": 4900.0,
    "nonResident": 4900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.26 Лечение шейки матки с солковагином (2 процедуры)",
    "category": "Прочие услуги",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.27 Коррекция интимной зоны (задняя спайка)",
    "category": "Прочие услуги",
    "resident": 158000.0,
    "nonResident": 158000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.28 Коррекция интимной зоны (большие половые губы)",
    "category": "Прочие услуги",
    "resident": 232900.0,
    "nonResident": 232900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.29 Коррекция интимной зоны (область влагалища)",
    "category": "Прочие услуги",
    "resident": 307700.0,
    "nonResident": 307700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.31 Коррекция интимной зоны (аугментация точки G,капюшон клитора)",
    "category": "Прочие услуги",
    "resident": 158000.0,
    "nonResident": 158000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.32 Коррекция интимной зоны (область вульвы при краузоре)",
    "category": "Прочие услуги",
    "resident": 304900.0,
    "nonResident": 304900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.33 Длазмолифтинг гинекологический",
    "category": "Гинекология",
    "resident": 33300.0,
    "nonResident": 33300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.54 Ушивание задней стенки влагалища",
    "category": "Прочие услуги",
    "resident": 13300.0,
    "nonResident": 13300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.55 Инфильтрационная анестезия",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.56 Плазмогель гинекологический (1 прбирка)",
    "category": "Гинекология",
    "resident": 40400.0,
    "nonResident": 40400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.57 Нитевой лифтинг гинекологический",
    "category": "Гинекология",
    "resident": 231000.0,
    "nonResident": 231000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.58 Конусная биопсия шейки матки",
    "category": "Хирургия",
    "resident": 52500.0,
    "nonResident": 52500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Ведение беременности 1 триместр",
    "category": "Прочие услуги",
    "resident": 201460.0,
    "nonResident": 201460.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.1 Прием врача гинеколога",
    "category": "Консультации",
    "resident": 19000.0,
    "nonResident": 19000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.2 Прием врача гинеколога",
    "category": "Консультации",
    "resident": 29000.0,
    "nonResident": 29000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.1 Прием врача терапевта",
    "category": "Консультации",
    "resident": 9000.0,
    "nonResident": 9000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.1 Прием врача офтальмолога",
    "category": "Консультации",
    "resident": 9000.0,
    "nonResident": 9000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.1 Осмотр и консультация стоматолога",
    "category": "Консультации",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB10.6 Другие специалисты (по показания)",
    "category": "Прочие услуги",
    "resident": 19000.0,
    "nonResident": 19000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB10.6 Другие специалисты (по показания)",
    "category": "Прочие услуги",
    "resident": 29000.0,
    "nonResident": 29000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.1 Прием врача оториноларинголога",
    "category": "Консультации",
    "resident": 9000.0,
    "nonResident": 9000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GN29.1 Г енетик",
    "category": "Прочие услуги",
    "resident": 15000.0,
    "nonResident": 15000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UZ21.26 УЗИ беременных (скрининг)",
    "category": "Ультразвуковая диагностика",
    "resident": 14500.0,
    "nonResident": 14500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.3 ЭКГ (по показаниям)",
    "category": "Функциональная диагностика",
    "resident": 3000.0,
    "nonResident": 3000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Забор крови с вены",
    "category": "Прочие услуги",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Клинический анализ крови с лейкоцитарной формулой (ОАК)",
    "category": "Лабораторная диагностика",
    "resident": 1960.0,
    "nonResident": 1960.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВО 1.077.002 Моча. Общий анализ (ОАМ)",
    "category": "Лабораторная диагностика",
    "resident": 1250.0,
    "nonResident": 1250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.335.002 Глюкоза (сахар в крови)",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Мазок на степень чистоты",
    "category": "Прочие услуги",
    "resident": 1710.0,
    "nonResident": 1710.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Забора материала на степень чистоты и РИФ",
    "category": "Прочие услуги",
    "resident": 1500.0,
    "nonResident": 1500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "05 Забор мазка на онкоцитологию",
    "category": "Прочие услуги",
    "resident": 1500.0,
    "nonResident": 1500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Исследование крови методом ИФА на АТ к ВИЧ",
    "category": "Прочие услуги",
    "resident": 3850.0,
    "nonResident": 3850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "реакция Вассермана",
    "category": "Прочие услуги",
    "resident": 2950.0,
    "nonResident": 2950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.398.002 Билирубин общий",
    "category": "Прочие услуги",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.363.002 Креатинин",
    "category": "Прочие услуги",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.155.002 Аланинаминотрансфераза (AJIT)",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Аспартатаминотрансфераза (ACT)",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Гомоцистейн",
    "category": "Прочие услуги",
    "resident": 6360.0,
    "nonResident": 6360.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТТГ (Тиреотропный гормон) ультрачувствительность",
    "category": "Лабораторная диагностика",
    "resident": 2400.0,
    "nonResident": 2400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Т4 (Тироксин) свободный",
    "category": "Прочие услуги",
    "resident": 2620.0,
    "nonResident": 2620.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Токсоплазмоз. Т. gondi (соскоб), ПЦР",
    "category": "Лабораторная диагностика",
    "resident": 4030.0,
    "nonResident": 4030.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Anti-Rub IgG (антитела класса IgG к вирусу краснухи)",
    "category": "Лабораторная диагностика",
    "resident": 2950.0,
    "nonResident": 2950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.340.002 Железо (Fe)",
    "category": "Прочие услуги",
    "resident": 1350.0,
    "nonResident": 1350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HBsAg (V2) (гепатит В - поверхностный или австралийский антиген)",
    "category": "Лабораторная диагностика",
    "resident": 3610.0,
    "nonResident": 3610.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Anti-HCV (гепатит С) суммарнный",
    "category": "Прочие услуги",
    "resident": 3630.0,
    "nonResident": 3630.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.549.002 Пренатальный скрининг PR1SCA I триместр",
    "category": "Прочие услуги",
    "resident": 14220.0,
    "nonResident": 14220.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Забор соскоба на ПЦР исследование у женщин",
    "category": "Лабораторная диагностика",
    "resident": 1500.0,
    "nonResident": 1500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "gonorrhoeae,Chlamydia trachomatis, Mycoplasma genitalium, Trichomonas",
    "category": "Прочие услуги",
    "resident": 6410.0,
    "nonResident": 6410.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "vaginae,Lactobacillus spp., Bacteria spp.), количественное определение",
    "category": "Прочие услуги",
    "resident": 6410.0,
    "nonResident": 6410.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Обнаружение CMV методом ПЦР в режиме реального времени",
    "category": "Лабораторная диагностика",
    "resident": 3170.0,
    "nonResident": 3170.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Ведение беременности 2 триместр",
    "category": "Прочие услуги",
    "resident": 95530.0,
    "nonResident": 95530.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.1 Прием врача гинеколога",
    "category": "Консультации",
    "resident": 29000.0,
    "nonResident": 29000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.1 Прием врача гинеколога",
    "category": "Консультации",
    "resident": 39000.0,
    "nonResident": 39000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.1 Прием врача гинеколога",
    "category": "Консультации",
    "resident": 49000.0,
    "nonResident": 49000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB10.6 Другие специалисты (по показания)",
    "category": "Прочие услуги",
    "resident": 9000.0,
    "nonResident": 9000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB10.34 УЗИ комплекс (по показаниям)",
    "category": "Ультразвуковая диагностика",
    "resident": 9000.0,
    "nonResident": 9000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UZ21.27 УЗИ плода (скрининг)",
    "category": "Ультразвуковая диагностика",
    "resident": 14500.0,
    "nonResident": 14500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UZ21.41 Цервикометрия (по показаниям)",
    "category": "Гинекология",
    "resident": 4500.0,
    "nonResident": 4500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Моча. Общий анализ (ОАМ)",
    "category": "Лабораторная диагностика",
    "resident": 1250.0,
    "nonResident": 1250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.335.002 Глюкоза (сахар в крови)",
    "category": "Прочие услуги",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.386.002 ' Мочевина",
    "category": "Лабораторная диагностика",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.353.002 Кальций общий (Са)",
    "category": "Прочие услуги",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Ведение беременности 3 триместр с послеродовым посещением",
    "category": "Прочие услуги",
    "resident": 157510.0,
    "nonResident": 157510.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.1 Прием врача гинеколога",
    "category": "Консультации",
    "resident": 59000.0,
    "nonResident": 59000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.1 Прием врача гинеколога",
    "category": "Консультации",
    "resident": 69000.0,
    "nonResident": 69000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.1 Прием врача гинеколога",
    "category": "Консультации",
    "resident": 79000.0,
    "nonResident": 79000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.1 Прием врача гинеколога",
    "category": "Консультации",
    "resident": 89000.0,
    "nonResident": 89000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.1 Терапевт ,",
    "category": "Прочие услуги",
    "resident": 9000.0,
    "nonResident": 9000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB 10.47 Доплерометрия",
    "category": "Прочие услуги",
    "resident": 8000.0,
    "nonResident": 8000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UZ21.28 УЗИ плода(скрининг)",
    "category": "Ультразвуковая диагностика",
    "resident": 14500.0,
    "nonResident": 14500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "вого^.оог Моча. Общий анализ (ОАМ)",
    "category": "Лабораторная диагностика",
    "resident": 1250.0,
    "nonResident": 1250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "В01.(Г7.002 Моча. Общий анализ (ОАМ)",
    "category": "Лабораторная диагностика",
    "resident": 1250.0,
    "nonResident": 1250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВО 1.458.001 Мазок на степень чистоты",
    "category": "Прочие услуги",
    "resident": 1710.0,
    "nonResident": 1710.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "В03.39'7.002 Общий белок",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.398.002 Билирубин общий",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.526.002 Фосфатаза щелочная общая",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.386.002 Мочевина",
    "category": "Лабораторная диагностика",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.155.002 Аланинаминотрансфераза (AJTT)",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Определение фибриногена в плазме крови на анализаторе",
    "category": "Лабораторная диагностика",
    "resident": 1080.0,
    "nonResident": 1080.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "РК24.15 КТГ плода (по показаниям)",
    "category": "Прочие услуги",
    "resident": 3600.0,
    "nonResident": 3600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UZ21.18 УЗИ OMT в послеродовом периоде",
    "category": "Ультразвуковая диагностика",
    "resident": 7500.0,
    "nonResident": 7500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB 10.53 Дописследование",
    "category": "Прочие услуги",
    "resident": 4280.0,
    "nonResident": 4280.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Ведение беременности Полный период",
    "category": "Прочие услуги",
    "resident": 454500.0,
    "nonResident": 454500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Ведение беременности (Двойня) 1 триместр",
    "category": "Прочие услуги",
    "resident": 216070.0,
    "nonResident": 216070.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.1 Терапевт",
    "category": "Прочие услуги",
    "resident": 9000.0,
    "nonResident": 9000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "OF8.1 Окулист",
    "category": "Прочие услуги",
    "resident": 9000.0,
    "nonResident": 9000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.1 Стоматолог",
    "category": "Стоматология",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОТ7.1 Отоларинголог",
    "category": "Прочие услуги",
    "resident": 9000.0,
    "nonResident": 9000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GN29.1 Генетик",
    "category": "Прочие услуги",
    "resident": 15000.0,
    "nonResident": 15000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB10.9 УЗИ плода (скрининг)",
    "category": "Ультразвуковая диагностика",
    "resident": 29000.0,
    "nonResident": 29000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "KR5.3 ЭКГ( по показаниям)",
    "category": "Функциональная диагностика",
    "resident": 3000.0,
    "nonResident": 3000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "___ . . ПЫгГ>",
    "category": "Прочие услуги",
    "resident": 1500.0,
    "nonResident": 1500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Цитологическое исследование мазка из шейки матки на аппарате",
    "category": "Прочие услуги",
    "resident": 7460.0,
    "nonResident": 7460.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Определение группы крови по системе АВ (0) и резус-фактора RN в",
    "category": "Прочие услуги",
    "resident": 1630.0,
    "nonResident": 1630.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Флороценоз-Микоплазмы (Ureaplasma parvum, Ureaplasma urealyticum,",
    "category": "Прочие услуги",
    "resident": 6410.0,
    "nonResident": 6410.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Флороценоз-Аэробы (Enterobacteriaceae, Streptococcus spp.,",
    "category": "Прочие услуги",
    "resident": 6410.0,
    "nonResident": 6410.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Глюкоза (сахар в крови)",
    "category": "Прочие услуги",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB10.53 Дополнительные исследования",
    "category": "Прочие услуги",
    "resident": 5000.0,
    "nonResident": 5000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "GK9.1 ■ Прием врача гинеколога",
    "category": "Консультации",
    "resident": 89000.0,
    "nonResident": 89000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB 10.47 Доплерометрия (по показаниям)",
    "category": "Прочие услуги",
    "resident": 8000.0,
    "nonResident": 8000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB10.9 УЗИ плода (скрининг)",
    "category": "Ультразвуковая диагностика",
    "resident": 129000.0,
    "nonResident": 129000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.397.002 Общий белок",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.155.002 Аланинаминотрансфераза (AJ1T)",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ВОЗ.293.002 Аспартатаминотрансфераза (ACT)",
    "category": "Прочие услуги",
    "resident": 1190.0,
    "nonResident": 1190.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": ".Определение фибриногена в плазме крови на анализаторе",
    "category": "Лабораторная диагностика",
    "resident": 1080.0,
    "nonResident": 1080.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UZ21.18 УЗИ ОМТ в послеродовом периоде",
    "category": "Ультразвуковая диагностика",
    "resident": 7500.0,
    "nonResident": 7500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "VB 10.53 Дополнительные исследования",
    "category": "Прочие услуги",
    "resident": 5560.0,
    "nonResident": 5560.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Ведение беременности (Двойня) полный период",
    "category": "Прочие услуги",
    "resident": 504500.0,
    "nonResident": 504500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.1 Осмотр и консультация стоматолога",
    "category": "Консультации",
    "resident": 4100.0,
    "nonResident": 4100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.2 Анестезия инфильтрационная",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.3 Анестезия аппликационная",
    "category": "Прочие услуги",
    "resident": 1400.0,
    "nonResident": 1400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.4 Лечение поверхностного кариеса",
    "category": "Стоматология",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "STM.5 Лечение-среднего кариеса",
    "category": "Стоматология",
    "resident": 17300.0,
    "nonResident": 17300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.6 Лечение глубокого кариеса",
    "category": "Стоматология",
    "resident": 20300.0,
    "nonResident": 20300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.7 Покрытие молочного зуба р.серебра (процедура)",
    "category": "Стоматология",
    "resident": 6900.0,
    "nonResident": 6900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.8 Лечение кариеса молочного зуба (композитный материал)",
    "category": "Стоматология",
    "resident": 15000.0,
    "nonResident": 15000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.9 Лечение кариеса молочного зуба (стеклоиномерный материал)",
    "category": "Стоматология",
    "resident": 9200.0,
    "nonResident": 9200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.10 Лечение пульпита однокорневого зуба",
    "category": "Стоматология",
    "resident": 31200.0,
    "nonResident": 31200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.11 Лечение пульпита двухкорневого зуба",
    "category": "Стоматология",
    "resident": 34700.0,
    "nonResident": 34700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST 11.12 Лечение пульпита трехкорневого зуба",
    "category": "Стоматология",
    "resident": 38100.0,
    "nonResident": 38100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.13 . Лечение периодонтита однокорневого зуба",
    "category": "Стоматология",
    "resident": 34700.0,
    "nonResident": 34700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.14 Лечение периодонтита двухкорневого зуба",
    "category": "Стоматология",
    "resident": 37000.0,
    "nonResident": 37000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST 11.15 Лечение периодонтита трехкорневого зуба",
    "category": "Стоматология",
    "resident": 42700.0,
    "nonResident": 42700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.16 Снятие пломбы",
    "category": "Стоматология",
    "resident": 1800.0,
    "nonResident": 1800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.17 Распломбирование корневых каналов",
    "category": "Стоматология",
    "resident": 8100.0,
    "nonResident": 8100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.18 Восстановление разрушенной коронки",
    "category": "Прочие услуги",
    "resident": 25400.0,
    "nonResident": 25400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.19 Реставрация",
    "category": "Прочие услуги",
    "resident": 28900.0,
    "nonResident": 28900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.20 Лечение периодонтита в первое посещение",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.21 Наложение девитализирующей пасты",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST 11.22 Установка штифта (анкерного, стекловолоконного)",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.23 Устранение дефекта пломбы",
    "category": "Стоматология",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.24 Установка адгезивного моста",
    "category": "Прочие услуги",
    "resident": 76200.0,
    "nonResident": 76200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.25 Удаление зубных отложений (полировка, медобр.)",
    "category": "Стоматология",
    "resident": 26600.0,
    "nonResident": 26600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST 11.26 Инъекция лекарственных средств",
    "category": "Прочие услуги",
    "resident": 2300.0,
    "nonResident": 2300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.27 Вскрытие пародонтального абсцесса",
    "category": "Прочие услуги",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.28 Гингивотомия, гингивоэктомия",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.29 Медобработка",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.30 Удаление зуба несложное",
    "category": "Стоматология",
    "resident": 16200.0,
    "nonResident": 16200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "Stll",
    "category": "Прочие услуги",
    "resident": 3117300.0,
    "nonResident": 3117300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.33 Герметизация фиссур 1 зуб",
    "category": "Стоматология",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST 11.34 Наложение коффердама",
    "category": "Прочие услуги",
    "resident": 4100.0,
    "nonResident": 4100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.35 Временная пломба",
    "category": "Стоматология",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.36 Покрытие зубов фторлаком (1 сеанс), снятие гиперестезии",
    "category": "Стоматология",
    "resident": 9200.0,
    "nonResident": 9200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.37 Полировка зубов пастой",
    "category": "Стоматология",
    "resident": 10400.0,
    "nonResident": 10400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST 11.38 Снятие зубных отложений аппаратом\"Prophy Mate Neo\"",
    "category": "Стоматология",
    "resident": 34700.0,
    "nonResident": 34700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.39 Взятие мазка из полости рта",
    "category": "Прочие услуги",
    "resident": 1400.0,
    "nonResident": 1400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.41 Плазмолифтинг десен 1 процедура",
    "category": "Прочие услуги",
    "resident": 26600.0,
    "nonResident": 26600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.42 . Справка",
    "category": "Прочие услуги",
    "resident": 2900.0,
    "nonResident": 2900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST 11.43 Репаративный цемент MTA-ANGELUS",
    "category": "Прочие услуги",
    "resident": 4100.0,
    "nonResident": 4100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.44 Анестезия проводниковая",
    "category": "Прочие услуги",
    "resident": 5300.0,
    "nonResident": 5300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.45 Закрытие клиновидного дефекта",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ST11.46 Удаление молочного зуба",
    "category": "Стоматология",
    "resident": 8100.0,
    "nonResident": 8100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "S'T 11.47 Мазевая аппликация",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.1 Прием врача хирурга",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.2 Лечение ожогов, отморожений 1-2 ст",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.16 Первичная хирургическая обработка",
    "category": "Хирургия",
    "resident": 8300.0,
    "nonResident": 8300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR 12.17 Наложение швов",
    "category": "Прочие услуги",
    "resident": 11800.0,
    "nonResident": 11800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.18 Снятие швов",
    "category": "Прочие услуги",
    "resident": 4800.0,
    "nonResident": 4800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.22 Перевязка",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.23 ■Циркумцизия (обрезание) под местной анестезией (взрослые)",
    "category": "Прочие услуги",
    "resident": 58200.0,
    "nonResident": 58200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.24 Циркумцизия (обрезание) под местной анестезией (дети)",
    "category": "Прочие услуги",
    "resident": 34700.0,
    "nonResident": 34700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.25 Оказание первой помощи при переломах (обезболивание, ПХО ран)",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.26 Снятие гипса",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.27 Наложение косметического шва (внутрикожное)",
    "category": "Прочие услуги",
    "resident": 23500.0,
    "nonResident": 23500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.28 Удаление рубцов",
    "category": "Хирургия",
    "resident": 23500.0,
    "nonResident": 23500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.32 Подрезание уздечки языка",
    "category": "Прочие услуги",
    "resident": 4800.0,
    "nonResident": 4800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.33 Вскрытие гематомы",
    "category": "Прочие услуги",
    "resident": 33300.0,
    "nonResident": 33300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.37 Удаление вросшего ногтя",
    "category": "Хирургия",
    "resident": 20100.0,
    "nonResident": 20100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.38 Вскрытие фурункула",
    "category": "Прочие услуги",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.39 Вскрытие панариция",
    "category": "Прочие услуги",
    "resident": 21500.0,
    "nonResident": 21500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.40 Вскрытие атеромы нагноившейся",
    "category": "Прочие услуги",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.44 Удаление липомы I степени сложности",
    "category": "Хирургия",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.47 Удаление атеромы I степени сложности",
    "category": "Хирургия",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.49 Вскрытие карбункула",
    "category": "Прочие услуги",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.50 Вскрытие гидраденита",
    "category": "Прочие услуги",
    "resident": 21500.0,
    "nonResident": 21500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.52 Удаление рубцов",
    "category": "Хирургия",
    "resident": 31900.0,
    "nonResident": 31900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "HR12.2.1 Прием врача флеболога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.1 Прием врача проктолога",
    "category": "Консультации",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.2 Ректроманоскопия",
    "category": "Прочие услуги",
    "resident": 9200.0,
    "nonResident": 9200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.3 Ректоскопия",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.7 Удаление наружных геморроидальных узлов (1 узел)",
    "category": "Хирургия",
    "resident": 49900.0,
    "nonResident": 49900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.11 Вскрытие острого подкожного парапроктита (под местной анестезией)",
    "category": "Прочие услуги",
    "resident": 61600.0,
    "nonResident": 61600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.15 Консервативное лечение острой анальной трещины",
    "category": "Прочие услуги",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.22 Блокада при кондигорении и аноконгиковом болевом синдроме",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.23 Блокада хронической анальной трещины",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.25 Латексное лигирование внутренних геморроидальных узлов(1узел)",
    "category": "Прочие услуги",
    "resident": 41600.0,
    "nonResident": 41600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.39 Вапоризация геморроидальных узлов (хронический геморрой)",
    "category": "Прочие услуги",
    "resident": 262500.0,
    "nonResident": 262500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "PR12.40 Удаление тромба геморроидальных узлов (острый тромбоз)",
    "category": "Хирургия",
    "resident": 31500.0,
    "nonResident": 31500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.1 Прием врача ортопеда",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.2 Пункция сустава (артроцентез)",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.3 Наложение скотчкаст",
    "category": "Прочие услуги",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.4 Внутрисуставное введение лекарственных препаратов(1 процедура)",
    "category": "Прочие услуги",
    "resident": 11800.0,
    "nonResident": 11800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.5 Лечение гигромы,ганглиомы,эпикандилита,стеллоидита",
    "category": "Прочие услуги",
    "resident": 13100.0,
    "nonResident": 13100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.6 Лечение \"щелкающего пальца\"",
    "category": "Прочие услуги",
    "resident": 13100.0,
    "nonResident": 13100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.7 Пункция сустава (синовиальная жидкость)",
    "category": "Прочие услуги",
    "resident": 8300.0,
    "nonResident": 8300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.8 Пункция сустава (Гемморагическая жидкость)",
    "category": "Прочие услуги",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.9 Параартикулярные блокады стероидами",
    "category": "Прочие услуги",
    "resident": 13100.0,
    "nonResident": 13100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.Ю Плазмолифтинг сустава",
    "category": "Прочие услуги",
    "resident": 49900.0,
    "nonResident": 49900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.11 Тейпирование",
    "category": "Прочие услуги",
    "resident": 8300.0,
    "nonResident": 8300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ОР12.12 Удаление металлоконструкции (спицы)",
    "category": "Хирургия",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UR13.1 Прием врача уролога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UR13.5 Массаж простаты, вкл. медикаменты, 1 сеанс",
    "category": "Физиотерапия",
    "resident": 4800.0,
    "nonResident": 4800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UR13.6 Массаж уретры, без стоимости медикаментов, 1 сеанс",
    "category": "Физиотерапия",
    "resident": 4800.0,
    "nonResident": 4800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UR13.7 Инстилляция уретры, без стоимости медикаментов, 1 процедура",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UR13.10 Тампонада уретры по Вашкевичу (со стоимостью лекарств)",
    "category": "Прочие услуги",
    "resident": 8300.0,
    "nonResident": 8300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UR13.11 Лечение аппаратом Интромаг",
    "category": "Прочие услуги",
    "resident": 13100.0,
    "nonResident": 13100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UR13.12 Забор секрета простаты",
    "category": "Прочие услуги",
    "resident": 4800.0,
    "nonResident": 4800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UR13.13 Перевязка",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "UR13.14 Бужирование",
    "category": "Прочие услуги",
    "resident": 11800.0,
    "nonResident": 11800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "NR15.1 Прием врача невролога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "NR15.2 ‘Прием врача эпилептолога",
    "category": "Консультации",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "NR15.3 Проведение блокад",
    "category": "Прочие услуги",
    "resident": 4800.0,
    "nonResident": 4800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "NR15.4 ЭЭГ рутинная",
    "category": "Функциональная диагностика",
    "resident": 8300.0,
    "nonResident": 8300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "NR15.5 ЭЭГ мониторинг трехчасовой",
    "category": "Функциональная диагностика",
    "resident": 33300.0,
    "nonResident": 33300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "NR15.6 ЭЭГ мониторинг часовой",
    "category": "Функциональная диагностика",
    "resident": 11800.0,
    "nonResident": 11800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "NR15.10 ЭЭГ мониторинг двухчасовой",
    "category": "Функциональная диагностика",
    "resident": 23500.0,
    "nonResident": 23500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ED16.3 Прием врача эндокринолога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.1 Прием врача терапевта",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.1.1 Прием врача пульмонолога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.49 Прием врача реабилитолога",
    "category": "Консультации",
    "resident": 11600.0,
    "nonResident": 11600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.1 Плазмолифтинг (1 пробирка)",
    "category": "Прочие услуги",
    "resident": 34700.0,
    "nonResident": 34700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.3 Плазмолифтинг (3 пробирки)",
    "category": "Прочие услуги",
    "resident": 62400.0,
    "nonResident": 62400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.4 Плазмолифтинг (4 пробирки)",
    "category": "Прочие услуги",
    "resident": 69300.0,
    "nonResident": 69300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.5 Тейпирование(лицо 10)",
    "category": "Прочие услуги",
    "resident": 11100.0,
    "nonResident": 11100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.6 Тейпирование(лицо 30)",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.7 Тейпирование (лицо 100)",
    "category": "Прочие услуги",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.8 Тейпирование (плечевой пояс 10)",
    "category": "Прочие услуги",
    "resident": 11100.0,
    "nonResident": 11100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР 17.4.9 Тейпирование (плечевой пояс 30)",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.10 Тейпирование (плечевой пояс 100)",
    "category": "Прочие услуги",
    "resident": 17300.0,
    "nonResident": 17300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.11 Тейпирование (локтевой сустав 10)",
    "category": "Прочие услуги",
    "resident": 11100.0,
    "nonResident": 11100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.12 Тейпирование (локтевой сустав 30)",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.13 Тейпирование (локтевой сустав 100)",
    "category": "Прочие услуги",
    "resident": 18700.0,
    "nonResident": 18700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.14 Тейпирование (лучезапястный сустав 10)",
    "category": "Прочие услуги",
    "resident": 9700.0,
    "nonResident": 9700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.15 Тейпирование (лучезапястный сустав 30)",
    "category": "Прочие услуги",
    "resident": 12500.0,
    "nonResident": 12500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.16 Тейпирование (лучезапястный сустав 100)",
    "category": "Прочие услуги",
    "resident": 15200.0,
    "nonResident": 15200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.17 . Тейпирование (кисть 10)",
    "category": "Прочие услуги",
    "resident": 9700.0,
    "nonResident": 9700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР 17.4.18 Тейпирование (кисть 30)",
    "category": "Прочие услуги",
    "resident": 12500.0,
    "nonResident": 12500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.20 Тейпирование (шейный отдел позвоночника 10)",
    "category": "Прочие услуги",
    "resident": 9700.0,
    "nonResident": 9700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.21 Тейпирование (шейный отдел позвоночника 30)",
    "category": "Прочие услуги",
    "resident": 12500.0,
    "nonResident": 12500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.22 Тейпирование (шейный отдел позвоночника 100)",
    "category": "Прочие услуги",
    "resident": 15200.0,
    "nonResident": 15200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.23 Тейпирование (грудной отдел позвоночника 10)",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.24 Тейпирование (грудной отдел позвоночника 30)",
    "category": "Прочие услуги",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.25 Тейпирование (грудной отдел позвоночника 100)",
    "category": "Прочие услуги",
    "resident": 33300.0,
    "nonResident": 33300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.26 Тейпирование (пояснично-крестцовый отдел позвоночника 10)",
    "category": "Прочие услуги",
    "resident": 15200.0,
    "nonResident": 15200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.27 Тейпирование (пояснично-крестцовый отдел позвоночника 30)",
    "category": "Прочие услуги",
    "resident": 25000.0,
    "nonResident": 25000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.28 Тейпирование (пояснично-крестцовый отдел позвоночника 100)",
    "category": "Прочие услуги",
    "resident": 40200.0,
    "nonResident": 40200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.29 Тейпирование (мышцы верхней конечности 10)",
    "category": "Прочие услуги",
    "resident": 12500.0,
    "nonResident": 12500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.30 Тейпирование (мышцы верхней конечности 30)",
    "category": "Прочие услуги",
    "resident": 15200.0,
    "nonResident": 15200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.31 Тейпирование (мышцы верхней конечности 100)",
    "category": "Прочие услуги",
    "resident": 22900.0,
    "nonResident": 22900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.32 Тейпирование (мышцы нижней конечности 10)",
    "category": "Прочие услуги",
    "resident": 13100.0,
    "nonResident": 13100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.33 Тейпирование (мышцы нижней конечности 30)",
    "category": "Прочие услуги",
    "resident": 19400.0,
    "nonResident": 19400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.34 Тейпирование (мышцы нижней конечности 100)",
    "category": "Прочие услуги",
    "resident": 29800.0,
    "nonResident": 29800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.35 Тейпирование (коленный сустав 10)",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.36 Тейпирование (коленный сустав 30)",
    "category": "Прочие услуги",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.37 Тейпирование (коленный сустав 100)",
    "category": "Прочие услуги",
    "resident": 33300.0,
    "nonResident": 33300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "service": "ТР17.4.38 Тейпирование (голеностопный сустав 10)",
    "category": "Прочие услуги",
    "resident": 11100.0,
    "nonResident": 11100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием врача первичный прием",
    "category": "Консультации",
    "resident": 30000.0,
    "nonResident": 30000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием врача повторный прием 8 800 II",
    "category": "Консультации",
    "resident": 22000.0,
    "nonResident": 22000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "без самостоятельного оказания медицинской услуги",
    "category": "Прочие услуги",
    "resident": 53000.0,
    "nonResident": 53000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием врача отоларинголога (взрослый, детский) повторный прием",
    "category": "Консультации",
    "resident": 24000.0,
    "nonResident": 24000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием врача офтальмолога «взрослый, детский) повторный прием",
    "category": "Консультации",
    "resident": 24000.0,
    "nonResident": 24000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием доктора медицинских наук, профессора первичный прием",
    "category": "Консультации",
    "resident": 40000.0,
    "nonResident": 40000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "11рием доктора медицинских наук, профессора повторный прием",
    "category": "Консультации",
    "resident": 36000.0,
    "nonResident": 36000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием врача кандидата медицинских наук. РЫ) первичный прием",
    "category": "Консультации",
    "resident": 30000.0,
    "nonResident": 30000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием врача кандидата медицинских наук. PhD повторный прием",
    "category": "Консультации",
    "resident": 24000.0,
    "nonResident": 24000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "устный перевод на иностранный язык)",
    "category": "Прочие услуги",
    "resident": 7700.0,
    "nonResident": 7700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием нейрохирурга первичный прием",
    "category": "Консультации",
    "resident": 44000.0,
    "nonResident": 44000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием нейрохирурга повторный прием",
    "category": "Консультации",
    "resident": 40000.0,
    "nonResident": 40000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием детского невролога первичный прием II",
    "category": "Консультации",
    "resident": 1500030.0,
    "nonResident": 1500030.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием детского невролог а повторный прием",
    "category": "Консультации",
    "resident": 20000.0,
    "nonResident": 20000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием пульмонолога Мукатовой И Ю первичный прием",
    "category": "Консультации",
    "resident": 60000.0,
    "nonResident": 60000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием пульмонолога Мукатовой И Ю повторный прием",
    "category": "Консультации",
    "resident": 54000.0,
    "nonResident": 54000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Первичный прием врача гематолога прием",
    "category": "Консультации",
    "resident": 30000.0,
    "nonResident": 30000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Повторный прием врача гематолога прием",
    "category": "Консультации",
    "resident": 4000.0,
    "nonResident": 4000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Первичный прием ангио хирурга прием",
    "category": "Консультации",
    "resident": 30000.0,
    "nonResident": 30000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Повторный прием ангио хирурга прием",
    "category": "Консультации",
    "resident": 24000.0,
    "nonResident": 24000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Предоперационная консультация анестезиолога прием",
    "category": "Консультации",
    "resident": 20000.0,
    "nonResident": 20000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "пособия которых по шкале составляет ASA l-ASA II",
    "category": "Прочие услуги",
    "resident": 19000.0,
    "nonResident": 19000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием ревматолога первичный прием II",
    "category": "Консультации",
    "resident": 1500030.0,
    "nonResident": 1500030.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием маммолога-онколога первичный прием",
    "category": "Консультации",
    "resident": 30000.0,
    "nonResident": 30000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием маммолога-онколога повторный прием II",
    "category": "Консультации",
    "resident": 1200024.0,
    "nonResident": 1200024.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Консультация приглашенного iвнешнего) специалиста прием",
    "category": "Консультации",
    "resident": 48400.0,
    "nonResident": 48400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "перевод на английский язык, оформление бумаг",
    "category": "Прочие услуги",
    "resident": 6600.0,
    "nonResident": 6600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Сопровождение пациента услуга",
    "category": "Прочие услуги",
    "resident": 5000.0,
    "nonResident": 5000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Выезд врача на дом. включает услуга",
    "category": "Прочие услуги",
    "resident": 45000.0,
    "nonResident": 45000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Индивидуальный пост медицинской сестры услуга",
    "category": "Прочие услуги",
    "resident": 2000.0,
    "nonResident": 2000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "медицинского работника за пределы г Астаны (1 час)",
    "category": "Прочие услуги",
    "resident": 55000.0,
    "nonResident": 55000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Выписка рецептов для страховых компаний услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "ф052-2/у Паспорт здоровья ребенка 1 педиатр - 4 900 тенге, невропатолог",
    "category": "Прочие услуги",
    "resident": 1200.0,
    "nonResident": 1200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "тенге, офтальмолог • 2 400 тенге, лор - 2 400 тенге, хирург - 1 200 тенге. ОАК • 3 услуга",
    "category": "Лабораторная диагностика",
    "resident": 46800.0,
    "nonResident": 46800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "ф065 у Карта профилактических прививок услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 21000.0,
    "nonResident": 21000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 9400.0,
    "nonResident": 9400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "|ражданского и служебного оружия (терапевт - 4 900 тенге, невропатолог - 2 400 услуга",
    "category": "Прочие услуги",
    "resident": 9400.0,
    "nonResident": 9400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "или педиатр - 4 900 тенге, микрореакция • 1 800 тенге) без стоимости ренттсна услуга",
    "category": "Прочие услуги",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "на работах с вредными и (или) опасными производственными факторами услуга",
    "category": "Прочие услуги",
    "resident": 45800.0,
    "nonResident": 45800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Заключение терапевта в санитарную книжку ♦ допуск к работе услуга",
    "category": "Прочие услуги",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Выдача медицинской справки или дубликата в течении 1 месяца услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Оформление международного (вакцинального) паспорта для учебы за рубежом услуга",
    "category": "Прочие услуги",
    "resident": 250.0,
    "nonResident": 250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "С - 3 000 тенге, бак исследование - 5 600 тенге, кал на я гельминтов *",
    "category": "Прочие услуги",
    "resident": 1500.0,
    "nonResident": 1500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "компаний (рентген грудной клетки - 3 000. исследование мазка из зева",
    "category": "Лучевая диагностика",
    "resident": 3600.0,
    "nonResident": 3600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "тенге, кровь на ВИЧ - 4 900 тенге, микрореакция - 1 700 тенге, гепатит В - 3 200 услуга",
    "category": "Лабораторная диагностика",
    "resident": 55000.0,
    "nonResident": 55000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "600 тенге, микрореакция - 1 700 тенге, гепатит В - 3 200 тенге, гепатит С • 3 200 услуга",
    "category": "Прочие услуги",
    "resident": 45200.0,
    "nonResident": 45200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "микрореакция -1 700 тенге, гепатит В - 3 200 тенге, гепатит С - 3 200 тенге, бак услуга",
    "category": "Прочие услуги",
    "resident": 49000.0,
    "nonResident": 49000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 39200.0,
    "nonResident": 39200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вакцинация против гриппа услуга II 000 II",
    "category": "Прочие услуги",
    "resident": 22000.0,
    "nonResident": 22000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Превенар 13 (пневмококковая) услуга",
    "category": "Прочие услуги",
    "resident": 53000.0,
    "nonResident": 53000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Гардасил t против ВПЧ) услуга",
    "category": "Прочие услуги",
    "resident": 210000.0,
    "nonResident": 210000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вакцина против менингококковой инфекциипримерная пена услуга",
    "category": "Прочие услуги",
    "resident": 84000.0,
    "nonResident": 84000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вакцина «Гексаксим» (гексавакнина) услуга",
    "category": "Прочие услуги",
    "resident": 94000.0,
    "nonResident": 94000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вакцина «Пентаксим» услуга",
    "category": "Прочие услуги",
    "resident": 84000.0,
    "nonResident": 84000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вакцина от гепатита В услуга",
    "category": "Прочие услуги",
    "resident": 32000.0,
    "nonResident": 32000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вакцина для профилактики ротавирусной инфекции услуга",
    "category": "Прочие услуги",
    "resident": 42000.0,
    "nonResident": 42000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вакцина против клешевого энцефалита услуга",
    "category": "Прочие услуги",
    "resident": 42000.0,
    "nonResident": 42000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вакцина против кори, краснухи, паротита услуга",
    "category": "Прочие услуги",
    "resident": 64000.0,
    "nonResident": 64000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Внутривенная инъекция (без ЛС. ИМИ) услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Внутривенно-капельная инфузия (без ЛС. ИМИ) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Лечебные услуги процедурного кабинета на дому (без ЛС) услуга",
    "category": "Прочие услуги",
    "resident": 36400.0,
    "nonResident": 36400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Клизма услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Выезд мобильной группы, включает услуга",
    "category": "Прочие услуги",
    "resident": 87000.0,
    "nonResident": 87000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "осмотр врача на домр прием 16500 IS /",
    "category": "Консультации",
    "resident": 36200.0,
    "nonResident": 36200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "табор а нити зов на дому услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Электрокардиография (ЭКГ) с расшифровкой услуга",
    "category": "Функциональная диагностика",
    "resident": 2000.0,
    "nonResident": 2000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Электрокардиография ( ЭКГ) с нагрузкой и расшифровкой услуга",
    "category": "Функциональная диагностика",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Суточное Холтеровское мониторирование ЭКГ услуга",
    "category": "Функциональная диагностика",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Суточное мониторирование артериального давления (СМАД) услуга",
    "category": "Функциональная диагностика",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Комплекс многосуточного мониторирования АД и ЭКГ (по Холтеру) услуга",
    "category": "Функциональная диагностика",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "ЭхоКГ с доплером услуга",
    "category": "Прочие услуги",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "‘>9 Тред мил-тест услуга",
    "category": "Прочие услуги",
    "resident": 27200.0,
    "nonResident": 27200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Спирометрия услуга",
    "category": "Функциональная диагностика",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Спирометрия с пробой услуга",
    "category": "Функциональная диагностика",
    "resident": 9400.0,
    "nonResident": 9400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Кардиотокография плода (КТГ) услуга",
    "category": "Прочие услуги",
    "resident": 4000.0,
    "nonResident": 4000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 25400.0,
    "nonResident": 25400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ органов брюшной полости (без почек и надпочечников) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 15500.0,
    "nonResident": 15500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ органов брюшной полости комплекс детям от 0 до 14 лет услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ желчного пузыря с определением функции услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ органов малого таза - транс абдоминальное исследование услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 15000.0,
    "nonResident": 15000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ органов малого таза - транс вагинальное исследование услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 14600.0,
    "nonResident": 14600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "no УЗИ органов малого таза (2 исследования > услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 23600.0,
    "nonResident": 23600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Фолликул метрия повторный осмотр услуга",
    "category": "Консультации",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ щитовидной железы и шейных лимфоузлов услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ паращитовидной железы услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ молочных желез услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "18 УЗИ почек • надпочечников услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ надпочечников услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ почек и надпочечников детям от 0 до 14 лет услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ мочевого пузыря с определением остаточной мочи услуга",
    "category": "Лабораторная диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ мошонки услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ беременных (скрининг) 11-13 недель услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 22500.0,
    "nonResident": 22500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ беременных (скрининг) 19-21 недели услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 30000.0,
    "nonResident": 30000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ беременных (скрининг) 30*33 недель услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 25500.0,
    "nonResident": 25500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ головного мозга у детей от 0 до 1 года услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ слюнных желез услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ вилочковой железы услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ послеоперационных рубцов, промежности, мягких тканей 1 зона услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ легких ycjiyi'a",
    "category": "Ультразвуковая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ плевральной полости услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ плечевого сустава (1 сустав > услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ плечевого сустава (2 сустава) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ локтевого сустава < 1 сустав) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ локтевого сустава (2 сустава) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ лучезапястного сустава (1 сусгав) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ лучезапястного сустава (2 сустава) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ суставов кисти конечностей (1 сустав) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ суставов кисти конечностей (2 сустава) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ лонного сочленения услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ тазобедренного сустава (1 сустав) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ тазобедренного сустава (2 сустава) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ периферических лимфатических узлов 1 зона услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ периферических лимфатических узлов 2 зоны и более услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ фыжи (паховая, бедренная, спигелевая) 1 зона услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 6400.0,
    "nonResident": 6400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ мягких тканей 1 зона услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ коленного сустава (1 сустав) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ коленного сустава (2 сустава) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ голеностопного сустава < 1 сустав) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ голеностопного сустава (2 сустава) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ суставов стопы конечности (1 сустав» услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ суставов стопы конечности (2 сустава) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ печени услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ брахицефальных артерий и вен головы (интра! услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ брахицефальных артерий и вен шеи (экстра) услуга",
    "category": "Прочие услуги",
    "resident": 20000.0,
    "nonResident": 20000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ брахицефальных артерий и вен головы и шеи (интра-экстра) услуга",
    "category": "Прочие услуги",
    "resident": 28200.0,
    "nonResident": 28200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ артерий верхних конечностей услуга",
    "category": "Прочие услуги",
    "resident": 15500.0,
    "nonResident": 15500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ вен верхних конечностей услуга",
    "category": "Прочие услуги",
    "resident": 15500.0,
    "nonResident": 15500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ артерий и вен верхних конечностей услуга",
    "category": "Прочие услуги",
    "resident": 23600.0,
    "nonResident": 23600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ артерий нижних конечностей услуга II",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ вен нижних конечностей услуга II",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ артерий и вен нижних конечностей услуга",
    "category": "Прочие услуги",
    "resident": 30900.0,
    "nonResident": 30900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ портальной и селезеночной вен услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ сосудов почек услуга",
    "category": "Прочие услуги",
    "resident": 20000.0,
    "nonResident": 20000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ вен малого таза услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗДГ сосудов плода услуга",
    "category": "Прочие услуги",
    "resident": 30000.0,
    "nonResident": 30000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Гране пункционная аспирационная биопсия образований иод контролем УЗИ услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Нейросонография взрослая услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Косметическая микропенная склеротерапия услуга",
    "category": "Прочие услуги",
    "resident": 90600.0,
    "nonResident": 90600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Кольпоскопия услуга",
    "category": "Гинекология",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Введение внутриматочной спирали (ВМС) услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Извлечение внутриматочной спирали «ВМС) услуга",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Введение внутриматочной спирали (ВМС) со спиралью Клиники услуга",
    "category": "Прочие услуги",
    "resident": 18200.0,
    "nonResident": 18200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Введение ВМС Мирена со спиралью пациента услуга",
    "category": "Прочие услуги",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Извлечение внутриматочной спирали «ВМС) петлей услуга",
    "category": "Прочие услуги",
    "resident": 18200.0,
    "nonResident": 18200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 63500.0,
    "nonResident": 63500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Взятие мазка соскоб на маркеры инфекции (Г1ЦР) услуга",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Снятие послеоперационных швов услуга",
    "category": "Хирургия",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Санация влагалища (ванночки) услуга 1 700 I",
    "category": "Прочие услуги",
    "resident": 9002900.0,
    "nonResident": 9002900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 45300.0,
    "nonResident": 45300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 54500.0,
    "nonResident": 54500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Введение внутриматочной спирали (ВМС) \"Мирена\" со спиралью Клиники услуга",
    "category": "Прочие услуги",
    "resident": 144900.0,
    "nonResident": 144900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Санация влагалища (ванночки) с препаратами клиники услуга",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Лечебные тампоны (без ЛС) с препаратами клиники услуга",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Плазмалифтинг полости матки услуга",
    "category": "Прочие услуги",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Медикаментозное прерывание беременности, включает услуга",
    "category": "Прочие услуги",
    "resident": 110400.0,
    "nonResident": 110400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "меоикаченто зное cjxocmeo услуга V",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "общий анализ крови tafntj) крови услуга 3900 4 300 S",
    "category": "Лабораторная диагностика",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "группа к/х/ви и /уезус (/юктор услуга 1700 1 N",
    "category": "Прочие услуги",
    "resident": 3600.0,
    "nonResident": 3600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "прием гинеколога прием /Я 700 20 600 4/",
    "category": "Консультации",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Медикаментозное прерывание беременности, включает услуга",
    "category": "Прочие услуги",
    "resident": 74000.0,
    "nonResident": 74000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "меоикаментозное среоство услуга V",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "общий анализ крови забор крови услуга 3 900 4 ЗОО •V",
    "category": "Лабораторная диагностика",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "прием гинеколога прие.ч /Я 700 20 600 4/",
    "category": "Консультации",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Прием уролога после операции 1 контрольный) прием",
    "category": "Консультации",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Взятие секрета простаты услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Выведение мочи катетором услуга",
    "category": "Лабораторная диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Замена эпицистостомы услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Инстилляции мочевого пузыря (орошение) услуга",
    "category": "Лабораторная диагностика",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Инстилляция уретры (орошение) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Перевязка услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Внутри кавернозная инъекция услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Массаж предстательной железы услуга",
    "category": "Физиотерапия",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Блокада семенного канатика услуга И",
    "category": "Прочие услуги",
    "resident": 1210018.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Установка мочевого катетера услуга",
    "category": "Лабораторная диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Бужирование уретры услуга",
    "category": "Прочие услуги",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Биопсия простаты пункционная услуга",
    "category": "Хирургия",
    "resident": 108800.0,
    "nonResident": 108800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Биопсия яичек услуга",
    "category": "Хирургия",
    "resident": 54450.0,
    "nonResident": 54450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление мочеточникового стенда под УЗИ контролем (у женщин» услуга",
    "category": "Лабораторная диагностика",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Урофлоумстрия услуга",
    "category": "Прочие услуги",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Урстсрография с контрастом услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Перевязка чистая услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Перевязка с мазью (без ЛС] услуга 4 400 4‘>",
    "category": "Прочие услуги",
    "resident": 9800.0,
    "nonResident": 9800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Первичная хирургическая обработка ран без наложения швов услуга",
    "category": "Хирургия",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Наложение швов первичных вторичных услуга",
    "category": "Прочие услуги",
    "resident": 18200.0,
    "nonResident": 18200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Наложение косметического шва услуга",
    "category": "Прочие услуги",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Снятие швов с раны услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Полное удаление вросшего ногтя (один) услуга",
    "category": "Хирургия",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие паронихия услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие подкожного панариция ■ не осложненный) услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие подкожного панариция (осложненный) услуга",
    "category": "Прочие услуги",
    "resident": 20000.0,
    "nonResident": 20000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Иссечение анальных бахромок услуга",
    "category": "Прочие услуги",
    "resident": 45300.0,
    "nonResident": 45300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Иссечение образований кожи и мягких тканей (атерома, липома) более 5см услуга",
    "category": "Прочие услуги",
    "resident": 90600.0,
    "nonResident": 90600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Тромбэктомия услуга",
    "category": "Прочие услуги",
    "resident": 34500.0,
    "nonResident": 34500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление атеромы липомы услуга",
    "category": "Хирургия",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Краевая резекция ногтевой пластины услуга",
    "category": "Хирургия",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Новокаиновая блокада местная инфильтрационная услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие малой гематомы поверхностной услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие крупной гематомы поверхностной услуга",
    "category": "Прочие услуги",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление мозолей, натоптышей и бородавок, малых келоидных рубцов услуга",
    "category": "Хирургия",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие гидраденита (I элемент) услуга",
    "category": "Прочие услуги",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Подрезание уздечки языка услуга",
    "category": "Прочие услуги",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Подкожная пункция услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Радиоволновое удаление образований кожи до 5 см аппаратом Сургитрон услуга",
    "category": "Хирургия",
    "resident": 30900.0,
    "nonResident": 30900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Радиоволновое удаление образований кожи более 5 см аппаратом Сургитрон услуга",
    "category": "Хирургия",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Радиоволновое удаление образований кожи с 10 см аппаратом Сургитрон услуга",
    "category": "Хирургия",
    "resident": 45300.0,
    "nonResident": 45300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Радиоволновая полипэктомия в анальном канале аппаратом Сургитрон услуга",
    "category": "Прочие услуги",
    "resident": 63500.0,
    "nonResident": 63500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление фибромы услуга II",
    "category": "Хирургия",
    "resident": 1210018.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Радиоволновое удаление папиллом на коже за единицу до 2.9 мм услуга",
    "category": "Хирургия",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Радиоволновое удаление папиллом на коже за единицу от 0 до 4.9 мм и.та",
    "category": "Хирургия",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Радиоволновое удаление папиллом на коже за единицу свыше 10 мм услуга",
    "category": "Хирургия",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие абсцесса (флегмона, фурункул, карбункул) до 5 см услуга",
    "category": "Прочие услуги",
    "resident": 38100.0,
    "nonResident": 38100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие абсцесса (флегмона, фурункул, карбункул) от 5 см до 10 см услуга",
    "category": "Прочие услуги",
    "resident": 48900.0,
    "nonResident": 48900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие абсцесса (флегмона, фурункул, карбункул) более 10 см услуга",
    "category": "Прочие услуги",
    "resident": 63500.0,
    "nonResident": 63500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление подкожно-мышечной лигатуры услуга",
    "category": "Хирургия",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление инородного тела мягких тканей (простое) услуга",
    "category": "Хирургия",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление инородного тела мягких тканей (сложное) услуга",
    "category": "Хирургия",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Перевязка различных форм колостом детям взрослым услуга И",
    "category": "Прочие услуги",
    "resident": 1210018.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Устранение парафимоза услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Взятие материала на биопсию (иссечение участка ткани) услуга II",
    "category": "Хирургия",
    "resident": 1210018.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Склеро терапия 1 категория услуга",
    "category": "Прочие услуги",
    "resident": 75000.0,
    "nonResident": 75000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Склеро терапия 2а категория услуга",
    "category": "Прочие услуги",
    "resident": 112500.0,
    "nonResident": 112500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Склеро терапия 26 категория услуга",
    "category": "Прочие услуги",
    "resident": 150000.0,
    "nonResident": 150000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Склеро терапия 3 категория услуга",
    "category": "Прочие услуги",
    "resident": 187500.0,
    "nonResident": 187500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Склеро терапия 1 категория услуга",
    "category": "Прочие услуги",
    "resident": 225000.0,
    "nonResident": 225000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Пункция инъекция околосуставной сумки (1 сустав) услуга",
    "category": "Прочие услуги",
    "resident": 2400.0,
    "nonResident": 2400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Замена гипсовой повязки (без стоимости гипса) услуга II",
    "category": "Прочие услуги",
    "resident": 1220018.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Снятие гипсовой повязки услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Закрытое вправление неосложненных вывихов конечностей услуга",
    "category": "Прочие услуги",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Закрытая репозиция неосложненных переломов конечностей услуга",
    "category": "Прочие услуги",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "(спиц Киршнера) услуга",
    "category": "Прочие услуги",
    "resident": 45300.0,
    "nonResident": 45300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Снятие скотч-каст повязки электродрелью услуга",
    "category": "Прочие услуги",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Ослабление гипсовой повязки с перевязкой услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Пункция сустава услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Видеоэзофагогастродуоденоскопия (ВГДС) диагностическая услуга",
    "category": "Прочие услуги",
    "resident": 30900.0,
    "nonResident": 30900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "месяцев) услуга",
    "category": "Прочие услуги",
    "resident": 25500.0,
    "nonResident": 25500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Видеоэзофагогастродуоденоскопия (ВГДС) лечебная услуга",
    "category": "Прочие услуги",
    "resident": 89900.0,
    "nonResident": 89900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "ХЕЛПИЛ-тест услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эпифаринголарингоскопия диагностическая услуга",
    "category": "Прочие услуги",
    "resident": 25500.0,
    "nonResident": 25500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Видеоколоноскопня диагностическая услуга",
    "category": "Прочие услуги",
    "resident": 45000.0,
    "nonResident": 45000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Видеоколоноскопия лечебная услуга",
    "category": "Прочие услуги",
    "resident": 90600.0,
    "nonResident": 90600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Ректосигмоскопия услуга",
    "category": "Прочие услуги",
    "resident": 25500.0,
    "nonResident": 25500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Анестезия для эндоскопических исследований (с ЛС и ИМИ) услуга",
    "category": "Прочие услуги",
    "resident": 29100.0,
    "nonResident": 29100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Запись видеоизображение на СД-диск услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "т Э о н л д с о т с о к г о о п к и и ч ш ес е к ч а н я и к р а езекция новообразования пищевода, желудка, тонкого, услуга",
    "category": "Прочие услуги",
    "resident": 45300.0,
    "nonResident": 45300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эндоскопический гемостаз диатермокоагуляцией услуга",
    "category": "Лабораторная диагностика",
    "resident": 49100.0,
    "nonResident": 49100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эндоскопический гемостаз инъекционный услуга",
    "category": "Прочие услуги",
    "resident": 49100.0,
    "nonResident": 49100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эндоскопический гемостаз механический (легирование) - 1 кольцо услуга",
    "category": "Прочие услуги",
    "resident": 49100.0,
    "nonResident": 49100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эндоскопический гемостаз механический (клипирование) - 1 клипса услуга",
    "category": "Прочие услуги",
    "resident": 63500.0,
    "nonResident": 63500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Лечебное пособие при услуге \"Видсоколоноскопия диагностическая \" услуга",
    "category": "Прочие услуги",
    "resident": 21800.0,
    "nonResident": 21800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Промывание по Проетиу (двустороннее) услуга",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Пункция гайморовой пазухи услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Анемизаиия слизистой носовых ходов услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Блокада внутриносовая (односторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Блокада внутриносовая (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Передняя тампонада полости носа при кровотечениях услуга",
    "category": "Прочие услуги",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Задняя тампонада при кровотечениях услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Растомпонирование полости носа услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие, дренирование, тампонада гематомы носовой перегородки услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие фурункула уха. носа услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Иссечение синсхий с установкой пленки услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "11ромывание небных миндалин шприцом услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Промывание барабанной полости услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие пара тонзиллярного абсцесса услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Расширение пара тонзиллярного абсцесса (одностороннее) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие нагноившихся кист небных миндалин услуга",
    "category": "Прочие услуги",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "ЗП Внутри гортанное вливание лекарственных средств услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Первичная хирургическая обработка раны услуга",
    "category": "Хирургия",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эндоскопическое исследование (одностороннее) услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эндоскопическое исследование носоглотки услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эндоскопическое обследование ЛОР органов услуга 5 300 5 800 II",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Туалет уха (односторонний) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Турунда в ухо с лекарственным средством (односторонняя) (без ЛС) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Транстимпональное введение лекарственных препаратов (без ЛС) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Перевязка с мазями и медикаментами лор органов (односторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие отогематомы. атеромы услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление серной пробки наружного слухового прохода (одностороннее) услуга",
    "category": "Хирургия",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Парацентез барабанной перепонки (односторонний) услуга",
    "category": "Прочие услуги",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Катетеризация одной слуховой трубы через нос услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление инородного тела услуга",
    "category": "Хирургия",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Перевязки после вскрытия услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Повторные перевязки после вскрытия услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Установка гемостатической губки в полости носа услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Введение гемостатической губки в носовую полосты одностороннее услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Тимпанометрия (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эхосинусоскопия (УЗИ придаточных пазух носа) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Аппликационная анестезия (с ЛС и ИМИ) услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Меатотимпанальная блокада услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Пункция лобной пазухи услуга",
    "category": "Прочие услуги",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Электро-жцефалография (ЭЭГ) 40 минут исследование услуга",
    "category": "Функциональная диагностика",
    "resident": 15500.0,
    "nonResident": 15500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Электроэнцефалография (ЭЭГ) Зх часовая услуга",
    "category": "Функциональная диагностика",
    "resident": 54500.0,
    "nonResident": 54500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Нейросонография у детей услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Эхоэнцефалография головного мозга у детей услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Блокада мышцы услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Блокада нервных стволов услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Внутри кожная блокада услуга",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Подкожная блокада услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Паравертебральная блокада услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Инфильтрация новокаином с В12 триперных и болевых точек (1 зона) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Околосуставная блокада услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Периартикулярная блокада услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Блокада препаратом плексатроном услуга",
    "category": "Прочие услуги",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Плазмотерапия услуга",
    "category": "Прочие услуги",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "В суставная инъекция препаратом Хронотрон гель услуга",
    "category": "Прочие услуги",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Переартикулярная инъекция препаратом Хронотрон гель услуга",
    "category": "Прочие услуги",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Иглорефлексотерапия лицевая услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Иглорефлексотерапия обшая услуга",
    "category": "Прочие услуги",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Программа лечения (дневной стационар без ЛС. 1 врачебная процедура №7 услуга",
    "category": "Стационар",
    "resident": 72500.0,
    "nonResident": 72500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "PRP терапия \"Cortexil\" услуга",
    "category": "Прочие услуги",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Офтальмоскопия (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Периметрия (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Тонометрия без контактная (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Тонометрия контактная по Маклокову (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Тонометрия контактная (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Кераторефрактометрия (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Скиаскопия (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Гониоскопия (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Циклоскопия (односторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Оптическая коррекция (подбор очков) (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Компьютерная периметрия (двусторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 17400.0,
    "nonResident": 17400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УЗИ В скан (двустороннее) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Инъекция парабульбарная (1 инъекция, без ЛС) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Инъекция под конъюнктиву (1 инъекция, без ЛС) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Инъекция пол кожу виска < 1 инъекция, без ЛС) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление инородного тела конъюнктивы услуга",
    "category": "Хирургия",
    "resident": 3100.0,
    "nonResident": 3100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление инородного тела роговицы услуга",
    "category": "Хирургия",
    "resident": 17400.0,
    "nonResident": 17400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Промывание слезно-носового канала (одностороннее) услуга",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Зондирование слезно-носового канала (одностороннее) услуга",
    "category": "Прочие услуги",
    "resident": 30900.0,
    "nonResident": 30900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Слезно-носовая проба (односторонняя) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Определение цветоощущения < цветотест с таблицей Рабкина) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Взятие мазка из конъюнктивы (одностороннее) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Забор материала на демодекоз (ресницы) (односторонний) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие абсцесса века услуга",
    "category": "Прочие услуги",
    "resident": 17400.0,
    "nonResident": 17400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Вскрытие ячменя века услуга",
    "category": "Прочие услуги",
    "resident": 3100.0,
    "nonResident": 3100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление неправильно растущих ресниц (одностороннее) услуга",
    "category": "Хирургия",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Снятие кожных швов услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Наложение конъюнктивальных швов (одностороннее) услуга",
    "category": "Прочие услуги",
    "resident": 20000.0,
    "nonResident": 20000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Снятие конъюнктивальных швов (одностороннее) услуга",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Тренировка фузионных резервов на Синоптофоре (двусторонняя) услуга",
    "category": "Ультразвуковая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Иссечение халязиона услуга",
    "category": "Прочие услуги",
    "resident": 47100.0,
    "nonResident": 47100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Устранение гттеригиума. пингвекулы услуга",
    "category": "Прочие услуги",
    "resident": 56300.0,
    "nonResident": 56300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Удаление папилломы века услуга",
    "category": "Хирургия",
    "resident": 40100.0,
    "nonResident": 40100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Оптическая когерентная ангиография (1 глаз) услуга",
    "category": "Прочие услуги",
    "resident": 2500.0,
    "nonResident": 2500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Оптическая когерентная томография макулы (1 глаз) услуга",
    "category": "Лучевая диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Оптическая когерентная томография переднего отрезка пахиметрия 11 глаз) услуга",
    "category": "Лучевая диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Оптическая когерентная томография диска зрительного нерва (ДЗН)( 1 глаз) услуга",
    "category": "Лучевая диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Оптическая когерентная томография в ангио-режиме (1 глаз) услуга",
    "category": "Лучевая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Снимок глазного дна (фундус камера) (1 глаз) услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Взятие мазка с кожного элемента услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Инъекция ботллинического токсина типа \"А\" услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Многопрофильный консилиум прием",
    "category": "Консультации",
    "resident": 217400.0,
    "nonResident": 217400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Подбор (коррекция) СИПАП БИПАП- терапии услуга",
    "category": "Прочие услуги",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Пробная СИПАП БИПАГ1 терапия 3 суток услуга",
    "category": "Прочие услуги",
    "resident": 81600.0,
    "nonResident": 81600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Легочная реабилитация индивидуальная (взрослая). 1 занятие услуга",
    "category": "Прочие услуги",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Легочная реабилитация индивидуальная (взрослая). 5 занятий услуга",
    "category": "Прочие услуги",
    "resident": 181200.0,
    "nonResident": 181200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Легочная реабилитация групповая 3 человека (взрослая). 1 занятие услуга",
    "category": "Прочие услуги",
    "resident": 25500.0,
    "nonResident": 25500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Легочная реабилитация групповая 3 человека (взрослая). 5 занятий услуга",
    "category": "Прочие услуги",
    "resident": 126900.0,
    "nonResident": 126900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Респираторный мониторинг услуга",
    "category": "Прочие услуги",
    "resident": 41700.0,
    "nonResident": 41700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Компьютерная сомнография услуга",
    "category": "Прочие услуги",
    "resident": 126900.0,
    "nonResident": 126900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Физиопроцедуры для детей 0-14 лет услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Ультрафонофорез (1 поле) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Ультрафонофорез (2 поля) услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Лазеротерапия (взрослая, детская) услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "'Электрофорез лекарственными средствами услуга",
    "category": "Физиотерапия",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Гальванизация услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УФО тубус (1 зона) услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "УВЧ терапия услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Диатермия услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Амплипульс (СМТ) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Электростимуляция лекарственными средствами услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Карбокситерапия услуга",
    "category": "Прочие услуги",
    "resident": 27300.0,
    "nonResident": 27300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Интравагинальная электротерапия услуга",
    "category": "Прочие услуги",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Магниготерапия (1 поле) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Магнитотерапия (2 поля) услуга",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Диадинамотерапия услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Биоптрон терапия услуга",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "И нтерференцтерапия услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Виброакустическая терапия массаж VibroLung взрослым услуга",
    "category": "Лабораторная диагностика",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Виброакустическая терапия массаж VibroLung детям услуга",
    "category": "Лабораторная диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Массаж шейно-воротниковой области услуга",
    "category": "Физиотерапия",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Массаж шей но-грудного отдела позвоночника услуга",
    "category": "Физиотерапия",
    "resident": 2800.0,
    "nonResident": 2800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Массаж области грудной клетки i передней и задней > услуга",
    "category": "Физиотерапия",
    "resident": 2200.0,
    "nonResident": 2200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Массаж пояснично-крестцовой области услуга",
    "category": "Физиотерапия",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Массаж головы услуга",
    "category": "Физиотерапия",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Массаж спины (шейно-воротниковый • грудной * поясн • крест) услуга II",
    "category": "Физиотерапия",
    "resident": 1210018.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Массаж передней брюшной стенки живота услуга",
    "category": "Физиотерапия",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Общий массаж услуга",
    "category": "Физиотерапия",
    "resident": 36300.0,
    "nonResident": 36300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Тазобедренный сустав и бедро (1 конечность) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Коленный сустав < 1 конечность) услуга",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "service": "Голень и голеностопный сустав (1 конечность) услуга",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "кровь с ЭДТА",
    "category": "Лабораторная диагностика",
    "resident": 8801410.0,
    "nonResident": 8801410.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Определение группы крови по системе АВ(0) и 11955. кровь с ЭДТА",
    "category": "Лабораторная диагностика",
    "resident": 2320.0,
    "nonResident": 2320.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Определение антиэритроцитарных антител в В06.670.012 кровь с ЭДТА",
    "category": "Лабораторная диагностика",
    "resident": 6780.0,
    "nonResident": 6780.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Исследование перианального соскоба ручным соскоб с",
    "category": "Прочие услуги",
    "resident": 1000750.0,
    "nonResident": 1000750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Аспартатаминотрансфераза (ACT) ВОЗ.293.002 I",
    "category": "Прочие услуги",
    "resident": 7801335.0,
    "nonResident": 7801335.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "ВОЗ.366",
    "category": "Прочие услуги",
    "resident": 22840.0,
    "nonResident": 22840.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "ВОЗ.370",
    "category": "Прочие услуги",
    "resident": 22960.0,
    "nonResident": 22960.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "ВОЗ.397",
    "category": "Прочие услуги",
    "resident": 2780.0,
    "nonResident": 2780.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Триглицериды ВОЗ.486.002 сад. | 1 “",
    "category": "Прочие услуги",
    "resident": 801335.0,
    "nonResident": 801335.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Холестерин общий ВОЗ .401.002 С43. 1 \"",
    "category": "Прочие услуги",
    "resident": 801335.0,
    "nonResident": 801335.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Холестерин-ЛПВП ВОЗ.371.002 а » 1 \"SO",
    "category": "Прочие услуги",
    "resident": 1335.0,
    "nonResident": 1335.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Холестерин-Л ПНП ВОЗ.372.002 cum [ 1 ~SO",
    "category": "Прочие услуги",
    "resident": 1335.0,
    "nonResident": 1335.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Холестерин не-ЛПВП 90.99.007 сыв 2V",
    "category": "Прочие услуги",
    "resident": 2205.0,
    "nonResident": 2205.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Аполипопротеин А1 ВОЗ.291.002 сыв. 1 3 5V!",
    "category": "Прочие услуги",
    "resident": 2685.0,
    "nonResident": 2685.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Аполипопротеин В ВОЗ.292.002 сыв",
    "category": "Прочие услуги",
    "resident": 43480.0,
    "nonResident": 43480.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Липопротеин (а) 78.001.001 сыв. 5: •",
    "category": "Прочие услуги",
    "resident": 3900.0,
    "nonResident": 3900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Кальций общий (Са) ВОЗ.353.002 сыв. : -»",
    "category": "Прочие услуги",
    "resident": 1335.0,
    "nonResident": 1335.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Магний (Mg) ВОЗ.375.002 сыв",
    "category": "Прочие услуги",
    "resident": 11335.0,
    "nonResident": 11335.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Г Фосфор неорганический ВОЗ.850.002 сыв. 1 7S",
    "category": "Прочие услуги",
    "resident": 1335.0,
    "nonResident": 1335.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "количественной оценкой М-градиента",
    "category": "Прочие услуги",
    "resident": 21000.0,
    "nonResident": 21000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "анализаторе (качественное определение)",
    "category": "Лабораторная диагностика",
    "resident": 24000.0,
    "nonResident": 24000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Витамин В",
    "category": "Прочие услуги",
    "resident": 124640.0,
    "nonResident": 124640.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "соскоб из",
    "category": "Прочие услуги",
    "resident": 2120.0,
    "nonResident": 2120.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "ВОб.351.006 сыв., смыв с",
    "category": "Прочие услуги",
    "resident": 9400.0,
    "nonResident": 9400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "ФСГ (фоллцкулостимулирующий гормон) В06.512.006 сыв",
    "category": "Лабораторная диагностика",
    "resident": 3780.0,
    "nonResident": 3780.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Антинуклеарные антитела к 23 антигенам, 40",
    "category": "Лабораторная диагностика",
    "resident": 470.0,
    "nonResident": 470.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "(карбамазепин-10,11-эпоксид) (хроматография) СН.001",
    "category": "Прочие услуги",
    "resident": 105.0,
    "nonResident": 105.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Топиромакс, Эпимакс) (хроматография) СН.001",
    "category": "Прочие услуги",
    "resident": 108.0,
    "nonResident": 108.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Определение протромбинового времени (ПВ) с В04.379.002 плазма I",
    "category": "Прочие услуги",
    "resident": 7001275.0,
    "nonResident": 7001275.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "v Квантифероновый тест 71",
    "category": "Лабораторная диагностика",
    "resident": 255.0,
    "nonResident": 255.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Корь IgG",
    "category": "Прочие услуги",
    "resident": 3690.0,
    "nonResident": 3690.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Ораблок, Септанест, Убистезин) IgE, с",
    "category": "Прочие услуги",
    "resident": 68.0,
    "nonResident": 68.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Перкаин, Скандинибса, Скандонест)^Е, с",
    "category": "Прочие услуги",
    "resident": 88.0,
    "nonResident": 88.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "цефалоспоринового ряда) IgE, с",
    "category": "Прочие услуги",
    "resident": 55.0,
    "nonResident": 55.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "курицы, перья утки, перья индейки. ех",
    "category": "Прочие услуги",
    "resident": 71.0,
    "nonResident": 71.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "вьюрка. ех",
    "category": "Прочие услуги",
    "resident": 72.0,
    "nonResident": 72.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "попугая. ех",
    "category": "Прочие услуги",
    "resident": 73.0,
    "nonResident": 73.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "курятина. fx",
    "category": "Прочие услуги",
    "resident": 73.0,
    "nonResident": 73.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "камбала. 1x",
    "category": "Прочие услуги",
    "resident": 74.0,
    "nonResident": 74.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Тимофеевка луговая rPhl р 7, rPhl р 12 IgE, g",
    "category": "Прочие услуги",
    "resident": 214.0,
    "nonResident": 214.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Тимофеевка луговая rPhl р 12 профилин, g",
    "category": "Прочие услуги",
    "resident": 212.0,
    "nonResident": 212.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Тимофеевка луговая rPhl р 4 IgE, g",
    "category": "Прочие услуги",
    "resident": 208.0,
    "nonResident": 208.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Солянка (курай) nSal k 1 IgE, w",
    "category": "Прочие услуги",
    "resident": 232.0,
    "nonResident": 232.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Берёза rBet v 4, t",
    "category": "Прочие услуги",
    "resident": 220.0,
    "nonResident": 220.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "lAlternaria alternata r Alt al, m",
    "category": "Прочие услуги",
    "resident": 229.0,
    "nonResident": 229.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Кошка (альбумин сыворотки) rFel d 2 IgE, e",
    "category": "Прочие услуги",
    "resident": 220.0,
    "nonResident": 220.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Собака (альбумин сыворотки) rCan f 3 IgE, e",
    "category": "Прочие услуги",
    "resident": 221.0,
    "nonResident": 221.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Собака rCan f5 IgE, e",
    "category": "Прочие услуги",
    "resident": 226.0,
    "nonResident": 226.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Клещ домашней пыли rDer р 23 IgE, d",
    "category": "Прочие услуги",
    "resident": 209.0,
    "nonResident": 209.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Яд осы обыкновенной rVes v5 IgE, i",
    "category": "Прочие услуги",
    "resident": 209.0,
    "nonResident": 209.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Латекс rHev b 6.01 IgE, k",
    "category": "Прочие услуги",
    "resident": 219.0,
    "nonResident": 219.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "service": "Глиадин пшеницы rTri a 19 Омега-5 IgE, f",
    "category": "Прочие услуги",
    "resident": 416.0,
    "nonResident": 416.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "первичная посещение",
    "category": "Прочие услуги",
    "resident": 24900.0,
    "nonResident": 24900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "повторная посещение",
    "category": "Прочие услуги",
    "resident": 12500.0,
    "nonResident": 12500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "первичная посещение",
    "category": "Прочие услуги",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "повторная посещение",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "первичная посещение",
    "category": "Прочие услуги",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "повторная посещение",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "первичная видеозвонок",
    "category": "Прочие услуги",
    "resident": 24900.0,
    "nonResident": 24900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "видеозвонок",
    "category": "Прочие услуги",
    "resident": 12500.0,
    "nonResident": 12500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Выездная консультация врача до 15 пациентов в день пакет",
    "category": "Консультации",
    "resident": 186400.0,
    "nonResident": 186400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Выездная консультация врача час",
    "category": "Консультации",
    "resident": 23600.0,
    "nonResident": 23600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Снятие металлоконструкций операция",
    "category": "Хирургия",
    "resident": 96700.0,
    "nonResident": 96700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Доброкачественные образования кожи и подкожной клетчатки операция",
    "category": "Хирургия",
    "resident": 55300.0,
    "nonResident": 55300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Лечебная блокада суставов и конечностей манипуляция",
    "category": "Прочие услуги",
    "resident": 14600.0,
    "nonResident": 14600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Лечебная блокада в область позвоночника манипуляция",
    "category": "Прочие услуги",
    "resident": 18100.0,
    "nonResident": 18100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Краевая резекция ногтевой пластинки при вросшем ногте манипуляция",
    "category": "Хирургия",
    "resident": 18100.0,
    "nonResident": 18100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 22200.0,
    "nonResident": 22200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 41500.0,
    "nonResident": 41500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Удаление инородного тела операция",
    "category": "Хирургия",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Первичная хирургическая обработка раны операция",
    "category": "Хирургия",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Пункция суставов (1 сустав) манипуляция",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 23600.0,
    "nonResident": 23600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "манипуляция",
    "category": "Прочие услуги",
    "resident": 11900.0,
    "nonResident": 11900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "манипуляция",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "манипуляция",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "манипуляция",
    "category": "Прочие услуги",
    "resident": 24900.0,
    "nonResident": 24900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "манипуляция",
    "category": "Прочие услуги",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура",
    "category": "Прочие услуги",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура",
    "category": "Прочие услуги",
    "resident": 12100.0,
    "nonResident": 12100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура",
    "category": "Прочие услуги",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура",
    "category": "Прочие услуги",
    "resident": 13600.0,
    "nonResident": 13600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "манипуляция",
    "category": "Прочие услуги",
    "resident": 12500.0,
    "nonResident": 12500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура И",
    "category": "Прочие услуги",
    "resident": 1240013.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура 13",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Check-up «Предоперпационная экспресс подготовка» пакет",
    "category": "Прочие услуги",
    "resident": 71400.0,
    "nonResident": 71400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Check-up «Здоровые суставы» пакет",
    "category": "Прочие услуги",
    "resident": 46400.0,
    "nonResident": 46400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Check-up «Здоровый позвоночник» пакет",
    "category": "Прочие услуги",
    "resident": 124900.0,
    "nonResident": 124900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "консультация",
    "category": "Консультации",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "повторная консультация",
    "category": "Консультации",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "консультация",
    "category": "Консультации",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "повторная консультация",
    "category": "Консультации",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Подводный душ массаж верхних конечностей посещение",
    "category": "Физиотерапия",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "К инезиотера пия групповая посещение",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Кинезиотерапия индивидуальная реабилитолог посещение",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Кинезиотейпирование процедура",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Внутрисуставное введение лекарственных средств без учета медик^вд}* процедура",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Тренажерный зал посещение",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Массаж воротниковой зоны процедура",
    "category": "Физиотерапия",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Массаж верхней конечности процедура",
    "category": "Физиотерапия",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Массаж грудной клетки процедура",
    "category": "Физиотерапия",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Массаж спины и позвоночника процедура",
    "category": "Физиотерапия",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Массаж пояснично-крестцового отдела процедура",
    "category": "Физиотерапия",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Массаж нижней конечности процедура",
    "category": "Физиотерапия",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Массаж тазобедренного сустава процедура",
    "category": "Физиотерапия",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Массаж голени и стопы процедура",
    "category": "Физиотерапия",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Светолечение (КУФО) процедура",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Светолечение (УФО) процедура",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Электрофорез аспирин ДМСО процедура",
    "category": "Физиотерапия",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ультра фонофорез процедура",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Гальванизация процедура",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ультразвуковая терапия процедура",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Парафинолечение процедура",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ингаляционная терапия процедура",
    "category": "Физиотерапия",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Электроанальгезия процедура",
    "category": "Прочие услуги",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Электростимуляция процедура",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Микроволновая терапия (СВМ) процедура",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Магнитотерапия от аппарата БТЛ процедура",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Магнитотерапия (Алмаг) процедура",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Низкоинтексивная лазеротерапия (НИЛ) от аппарата (УЗОР - 2К) процедура",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Криотерапия процедура",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тестирование процедура",
    "category": "Прочие услуги",
    "resident": 14600.0,
    "nonResident": 14600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "процедура",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "плечевого сустава процедура",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ударно-волновая терапия процедура",
    "category": "Прочие услуги",
    "resident": 13300.0,
    "nonResident": 13300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Стационар круглосуточного пребывания по ШРМ 3,4 койко-день",
    "category": "Функциональная диагностика",
    "resident": 29100.0,
    "nonResident": 29100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Стационар круглосуточного пребывания по ШРМ 2 койко-день",
    "category": "Функциональная диагностика",
    "resident": 24900.0,
    "nonResident": 24900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Пребывание лиц, находящихся совместно с пациентом по уход},' с питанием койко-день",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Прессотерапия процедура",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "ЭКГ в 12-ти отведениях ■ исследование",
    "category": "Функциональная диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "ЭКГ по Нэбу исследование",
    "category": "Функциональная диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Диагностическая эзофагогастродуоденоскопия исследование",
    "category": "Прочие услуги",
    "resident": 16600.0,
    "nonResident": 16600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Диагностическая колоноскопия исследование",
    "category": "Прочие услуги",
    "resident": 23600.0,
    "nonResident": 23600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Диагностическая ректороманоскопия исследование И",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Диагностическая фибробронхос копия исследование",
    "category": "Прочие услуги",
    "resident": 25600.0,
    "nonResident": 25600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Исследование фрагментов слизистой на гистоанализ исследование",
    "category": "Лабораторная диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Исследование мокроты на общий анализ и бакпосев исследование",
    "category": "Лабораторная диагностика",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Эндоскопическая щипковая биопсия исследование",
    "category": "Хирургия",
    "resident": 1100.0,
    "nonResident": 1100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "I ЭНМГ (электронейромиография) верхних конечностей исследование",
    "category": "Прочие услуги",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "ЭНМГ (электронейромиография) нижних конечностей исследование",
    "category": "Прочие услуги",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "ЭМГ (эле ктром иогра фия) игольчатая исследование",
    "category": "Прочие услуги",
    "resident": 31900.0,
    "nonResident": 31900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "ЭЭГ (электроэнцефалография) исследование",
    "category": "Функциональная диагностика",
    "resident": 13600.0,
    "nonResident": 13600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Компьютерная томография с ЗД реконструкцией исследование",
    "category": "Лучевая диагностика",
    "resident": 17300.0,
    "nonResident": 17300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 49300.0,
    "nonResident": 49300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Т елерентгенограмма исследование",
    "category": "Лучевая диагностика",
    "resident": 19400.0,
    "nonResident": 19400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 31200.0,
    "nonResident": 31200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 52700.0,
    "nonResident": 52700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование исследование",
    "category": "Прочие услуги",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография органов грудной клетки 1 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография органов грудной клетки 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенадрафия органов грудной клетки в боковой проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография кости и сустава 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография кости и сустава 1 проекция с нагрузкой исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография кости и сустава 2 проекции с нагрузкой исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография костей таза с тазоберенными суставами исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография позвоночника 2 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография позвоночника 2 проекции с нагрузкой исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография ребер 1 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография ребер 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография пазух носа 1 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография пазух носа 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография костей носа 1 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография костей носа 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография черепа в 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография турецкого седла исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография панорамная исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография пищевода исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 12900.0,
    "nonResident": 12900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография брюшной полости исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография желудка исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 13300.0,
    "nonResident": 13300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография тонкого кишечника исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 13300.0,
    "nonResident": 13300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ирригоскопия исследование исследование",
    "category": "Прочие услуги",
    "resident": 18000.0,
    "nonResident": 18000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Урография внутривенная исследование исследование",
    "category": "Прочие услуги",
    "resident": 31900.0,
    "nonResident": 31900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Миелография исследование исследование",
    "category": "Прочие услуги",
    "resident": 30600.0,
    "nonResident": 30600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Веноспондилография с миелографией исследование исследование",
    "category": "Прочие услуги",
    "resident": 41600.0,
    "nonResident": 41600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Зонография почек исследование исследование",
    "category": "Прочие услуги",
    "resident": 12400.0,
    "nonResident": 12400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Цистография исследование исследование",
    "category": "Прочие услуги",
    "resident": 11700.0,
    "nonResident": 11700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Фистулография исследование исследование",
    "category": "Прочие услуги",
    "resident": 11400.0,
    "nonResident": 11400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Томография легких исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование исследование",
    "category": "Прочие услуги",
    "resident": 11400.0,
    "nonResident": 11400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография органов грудной клетки 1 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография органов грудной клетки 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 11900.0,
    "nonResident": 11900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография органов грудной клетки в боковой проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография кости и сустава 1 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография кости и сустава 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография кости и сустава 1 проекция с нагрузкой исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография кости и сустава 2 проекции с нагрузкой исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография костей таза с тазоберенными суставами исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография позвоночника 1 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография позвоночника 2 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография позвоночника 2 проекции с нагрузкой исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография ребер 1 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография ребер 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография пазух носа 1 проекция исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография пазух носа 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография костей носа 1 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография костей носа 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография черепа в 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография нижней челюсти 2 проекции исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография турецкого седла исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография пищевода исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 15600.0,
    "nonResident": 15600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография брюшной полости исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография желудка исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 16100.0,
    "nonResident": 16100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгенография тонкого кишечника исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 16100.0,
    "nonResident": 16100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ирригоскопия исследование исследование",
    "category": "Прочие услуги",
    "resident": 20700.0,
    "nonResident": 20700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Урография внутривенная исследование исследование",
    "category": "Прочие услуги",
    "resident": 34800.0,
    "nonResident": 34800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Миелография исследование исследование",
    "category": "Прочие услуги",
    "resident": 33300.0,
    "nonResident": 33300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Веноспондилография с миелографиеЙ исследование исследование",
    "category": "Прочие услуги",
    "resident": 44400.0,
    "nonResident": 44400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Зонография почек исследование исследование",
    "category": "Прочие услуги",
    "resident": 14300.0,
    "nonResident": 14300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Цистография исследование исследование",
    "category": "Прочие услуги",
    "resident": 14400.0,
    "nonResident": 14400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Фистулография исследование исследование",
    "category": "Прочие услуги",
    "resident": 14200.0,
    "nonResident": 14200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Томография легких исследование исследование",
    "category": "Лучевая диагностика",
    "resident": 12300.0,
    "nonResident": 12300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгеновская денеитомегрия поясничного отдела позвоночника исследование",
    "category": "Лучевая диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Рентгеновская денситометрия одного тазобедренного сустава исследование",
    "category": "Лучевая диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ женское здоровье исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 37900.0,
    "nonResident": 37900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ мужское здоровье исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 34000.0,
    "nonResident": 34000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ почек исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ надпочечников исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ молочной железы исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ щитовидной железы исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ предстательной железы (трансабдоминально) исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "ТРУЗИ предстательной железы (трансректально) исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ мочевого пузыря исследование",
    "category": "Лабораторная диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 17000.0,
    "nonResident": 17000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ при беременности исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Трансвагиналыюе исследование матки исследование",
    "category": "Прочие услуги",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ мягких тканей исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ нервов исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 16700.0,
    "nonResident": 16700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ сустава исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 15200.0,
    "nonResident": 15200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Допплерография сосудов нижних конечностей исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 12100.0,
    "nonResident": 12100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Исследование пяточной кости обеих ног исследование",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ органов мошонки исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ лимфотических узлов (по отдельным группам) исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Допплерография сосудов верхних конечностей артерий исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Допплерография сосудов верхних конечностей вены исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Эхокардиография сердца исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 12300.0,
    "nonResident": 12300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование 8 30С 9 30С",
    "category": "Прочие услуги",
    "resident": 10500.0,
    "nonResident": 10500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ ахиллового сухожилия исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "УЗИ лобкового симфиза исследование",
    "category": "Ультразвуковая диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ультразвуковая доплерография сосудов головы исследование",
    "category": "Прочие услуги",
    "resident": 12000.0,
    "nonResident": 12000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 12000.0,
    "nonResident": 12000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ультразвуковая доплерография сосудов почек исследование",
    "category": "Прочие услуги",
    "resident": 12000.0,
    "nonResident": 12000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ультразвуковая доплерография сосудов брюшной аорты исследование",
    "category": "Прочие услуги",
    "resident": 12000.0,
    "nonResident": 12000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Запись исследования на диск услуга",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Исследование крови на малярийные плазмодии исследование",
    "category": "Прочие услуги",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Обнаружение LE -клеток исследование",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определите времени свертывания, кровотечения 2 показателя исследование",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Реакция микропреципитации исследование",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Тромбоэластограмма исследование",
    "category": "Прочие услуги",
    "resident": 17300.0,
    "nonResident": 17300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение в крови ревмофактора качественный исследование",
    "category": "Прочие услуги",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение сахара крови экспресс-метод исследование",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Исследование кала на яйца гельминтов 2 показателя исследование",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Исследование при эндоскопическом обслуживании Helicobacter pylori исследование",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Общий анализ мочи 6 показателей исследование",
    "category": "Лабораторная диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Подсчет количества форменных элементов по Нечипоренко исследование",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Исследование спино-мозговой жидкости 6 показателей исследование",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Исследование эксудатов, трансудатов 4 показателя исследование",
    "category": "Прочие услуги",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "10 показателей исследование",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение в моче белка Бене-Джонса исследование",
    "category": "Лабораторная диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение кардиомаркеров исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение газов крови (Р02, ПС02,рН) исследование",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение ревмафактора количественный исследование",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение антистрептолизина О исследование",
    "category": "Лабораторная диагностика",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение альбумина в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "? 23 Определение активности щелочной фостатазы в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение активности амилазы в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение С - реактивного белка исследование",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение общего кальция в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение активности креатинфосфокиназы в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение хлора в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение креатинина в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение холестерина в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение глюкозы в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение железа в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение калий в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение натрий в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение общего билирубина в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение общего белка в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение мочевой кислоты в сыворотке крови исследование",
    "category": "Лабораторная диагностика",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение мочевины в сыворотке крови исследование",
    "category": "Лабораторная диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Общий анализ крови исследование",
    "category": "Лабораторная диагностика",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Общий анализ крови исследование",
    "category": "Лабораторная диагностика",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Исследование крови на электролиты (Na/K/Ca/Cl) исследование",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение тромбинового времени исследование",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение фибриногена исследование",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение ферритина в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение трансферрина в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение прямого билирубина в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение фосфора в сыворотке крови исследование",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "| исследование",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Г епатит В исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Гепатит С исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование кала на патогенную флору исследование",
    "category": "Прочие услуги",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Определение чувствительности микроорганизмов к антибиотикам исследование",
    "category": "Лабораторная диагностика",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование мочи, мокроты исследование",
    "category": "Лабораторная диагностика",
    "resident": 400.0,
    "nonResident": 400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 13900.0,
    "nonResident": 13900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование крови на стерильность исследование",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование крови на гемокультуру исследование",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование грудного молока исследование",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование отделяемого носа исследование",
    "category": "Прочие услуги",
    "resident": 200.0,
    "nonResident": 200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование мазка отделяемого ран исследование",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование аутопсийного материала исследование",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "(сальмонеллы, шигеллы, энтеропатогенные эшерихии), условно- исследование",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "10 анализов исследование",
    "category": "Лабораторная диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "(дезинфектантов) методом их чувствительности к музейным исследование",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ликвор на минингококк без отбора исследование",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование крови на менингококк исследование",
    "category": "Прочие услуги",
    "resident": 17700.0,
    "nonResident": 17700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "исследование",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Бактериологическое исследование биоматериала на анаэробы исследование",
    "category": "Прочие услуги",
    "resident": 500.0,
    "nonResident": 500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "с тестовыми индикаторами бикс",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "без тестовых индикаторов бикс",
    "category": "Прочие услуги",
    "resident": 600.0,
    "nonResident": 600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "без тестовых индикаторов бикс",
    "category": "Прочие услуги",
    "resident": 800.0,
    "nonResident": 800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Внутривенный наркоз при манипуляциях манипуляция",
    "category": "Прочие услуги",
    "resident": 34500.0,
    "nonResident": 34500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Внутривенный наркоз при операциях манипуляция",
    "category": "Хирургия",
    "resident": 37300.0,
    "nonResident": 37300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Интубационный наркоз манипуляция",
    "category": "Прочие услуги",
    "resident": 53100.0,
    "nonResident": 53100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Проводниковая анестезия манипуляция",
    "category": "Прочие услуги",
    "resident": 56000.0,
    "nonResident": 56000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Катетеризация центральной вены манипуляция",
    "category": "Прочие услуги",
    "resident": 41500.0,
    "nonResident": 41500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ингаляционный наркоз манипуляция",
    "category": "Физиотерапия",
    "resident": 53900.0,
    "nonResident": 53900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Эпидуральная анестезия манипуляция",
    "category": "Прочие услуги",
    "resident": 35000.0,
    "nonResident": 35000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Спинальная анестезия манипуляция",
    "category": "Прочие услуги",
    "resident": 28000.0,
    "nonResident": 28000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Лечение алкогольного абстинентного синдрома манипуляция",
    "category": "Прочие услуги",
    "resident": 87100.0,
    "nonResident": 87100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "средней степени тяжести койко-денъ",
    "category": "Прочие услуги",
    "resident": 128400.0,
    "nonResident": 128400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тяжелой степени тяжести койко-день",
    "category": "Прочие услуги",
    "resident": 149100.0,
    "nonResident": 149100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Продленная вено-венозная гемодиафильтрация процедура",
    "category": "Прочие услуги",
    "resident": 448500.0,
    "nonResident": 448500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Переливание эритроцитсодержащих сред манипуляция",
    "category": "Прочие услуги",
    "resident": 16400.0,
    "nonResident": 16400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Переливание СЗП манипуляция",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Скрининг антиэритроцигарных антител манипуляция",
    "category": "Лабораторная диагностика",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "манипуляция",
    "category": "Прочие услуги",
    "resident": 700.0,
    "nonResident": 700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Проведение реинфузии на аппарате «C.A.T.S Plus» манипуляция",
    "category": "Ультразвуковая диагностика",
    "resident": 395100.0,
    "nonResident": 395100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Трансфузия Альбумина манипуляция",
    "category": "Ультразвуковая диагностика",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Переливание донорских тромбоцитов манипуляция",
    "category": "Прочие услуги",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "день",
    "category": "Прочие услуги",
    "resident": 100.0,
    "nonResident": 100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "день",
    "category": "Прочие услуги",
    "resident": 11900.0,
    "nonResident": 11900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "день",
    "category": "Прочие услуги",
    "resident": 15300.0,
    "nonResident": 15300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "день",
    "category": "Прочие услуги",
    "resident": 12300.0,
    "nonResident": 12300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Стационар круглосуточного пребывания койко-день",
    "category": "Функциональная диагностика",
    "resident": 29100.0,
    "nonResident": 29100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 552000.0,
    "nonResident": 552000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 552000.0,
    "nonResident": 552000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Эндопротезирование плечевого сустава операция",
    "category": "Хирургия",
    "resident": 552000.0,
    "nonResident": 552000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 759000.0,
    "nonResident": 759000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 759000.0,
    "nonResident": 759000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Робот-ассистированное эндопротезирование коленного сустава входит аренда робот- операция 1 100 ООО",
    "category": "Хирургия",
    "resident": 79900.0,
    "nonResident": 79900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "входит аренда робот- операция",
    "category": "Хирургия",
    "resident": 900.0,
    "nonResident": 900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Церебральный паралич и другие паралитические синдромы операция",
    "category": "Хирургия",
    "resident": 152600.0,
    "nonResident": 152600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 872200.0,
    "nonResident": 872200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 300.0,
    "nonResident": 300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 207000.0,
    "nonResident": 207000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "ЧМТ (последствия ЧМТ) последствия травм позвоночника и операция",
    "category": "Хирургия",
    "resident": 455400.0,
    "nonResident": 455400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Периферических нервов, повреждения плечевого сплетения операция",
    "category": "Хирургия",
    "resident": 233200.0,
    "nonResident": 233200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 95600.0,
    "nonResident": 95600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 286700.0,
    "nonResident": 286700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Повреждение мениска операция",
    "category": "Хирургия",
    "resident": 390600.0,
    "nonResident": 390600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Повреждение связок, операция Банкарта, хондропластика операция",
    "category": "Хирургия",
    "resident": 423700.0,
    "nonResident": 423700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Лечение стволовыми клетками без ИМИ операция",
    "category": "Хирургия",
    "resident": 49800.0,
    "nonResident": 49800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Лечение стволовыми клетками с ИМИ операция",
    "category": "Хирургия",
    "resident": 298200.0,
    "nonResident": 298200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Коррекция О и Х-образные деформации нижних конечностей 1 нога операция",
    "category": "Хирургия",
    "resident": 429000.0,
    "nonResident": 429000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Врожденная деформация трудной клетки операция",
    "category": "Хирургия",
    "resident": 495200.0,
    "nonResident": 495200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 329700.0,
    "nonResident": 329700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 412400.0,
    "nonResident": 412400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 430600.0,
    "nonResident": 430600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 325700.0,
    "nonResident": 325700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Травмы запястья, кисти и их последствия операция",
    "category": "Хирургия",
    "resident": 455400.0,
    "nonResident": 455400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 174000.0,
    "nonResident": 174000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Травматическая ампутация запястья и кисти операция",
    "category": "Хирургия",
    "resident": 347800.0,
    "nonResident": 347800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 422300.0,
    "nonResident": 422300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 695600.0,
    "nonResident": 695600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тазобедренного сустава, бедра, голени,кисти , предплечья, операция",
    "category": "Хирургия",
    "resident": 960400.0,
    "nonResident": 960400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 414000.0,
    "nonResident": 414000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 165700.0,
    "nonResident": 165700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 215300.0,
    "nonResident": 215300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 327100.0,
    "nonResident": 327100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Пиогенные артриты операция",
    "category": "Хирургия",
    "resident": 26800.0,
    "nonResident": 26800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 279000.0,
    "nonResident": 279000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "10-20% поверхности тела операция",
    "category": "Хирургия",
    "resident": 49800.0,
    "nonResident": 49800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Термический ожог 1-2-ЗАБ степени 20-30% поверхности тела операция",
    "category": "Хирургия",
    "resident": 73300.0,
    "nonResident": 73300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 110000.0,
    "nonResident": 110000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 144000.0,
    "nonResident": 144000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 182300.0,
    "nonResident": 182300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Остеосинтез пястных костей, плюстных костей операция",
    "category": "Хирургия",
    "resident": 134000.0,
    "nonResident": 134000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Остеосинтез костей бедра операция",
    "category": "Хирургия",
    "resident": 248500.0,
    "nonResident": 248500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Остеосинтез костей таза операция",
    "category": "Хирургия",
    "resident": 460900.0,
    "nonResident": 460900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "оперативного лечения при повреждениях селезенки, печени, операция",
    "category": "Хирургия",
    "resident": 296700.0,
    "nonResident": 296700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "операция",
    "category": "Хирургия",
    "resident": 285800.0,
    "nonResident": 285800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "нуждающаяся в динамическом наблюдении или в экстренном операция",
    "category": "Хирургия",
    "resident": 414000.0,
    "nonResident": 414000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Диагностические лапароскопии и торокоскопии операция",
    "category": "Хирургия",
    "resident": 116000.0,
    "nonResident": 116000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Неосложненные паховые и пупочные грыжи операция",
    "category": "Хирургия",
    "resident": 82900.0,
    "nonResident": 82900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Лапароскопическая холецистэктомия операция",
    "category": "Хирургия",
    "resident": 165700.0,
    "nonResident": 165700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "^ 11 Острый аппендицит неосложненный операция",
    "category": "Хирургия",
    "resident": 116000.0,
    "nonResident": 116000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Хронический калькулезный холецистит операция",
    "category": "Хирургия",
    "resident": 140800.0,
    "nonResident": 140800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Грыжа вентральная операция",
    "category": "Хирургия",
    "resident": 127800.0,
    "nonResident": 127800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Обычная язва операция",
    "category": "Хирургия",
    "resident": 238200.0,
    "nonResident": 238200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 248500.0,
    "nonResident": 248500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 331200.0,
    "nonResident": 331200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Ложный сустав или несрастание перелома (псевдоартроз). средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 248500.0,
    "nonResident": 248500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 198800.0,
    "nonResident": 198800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 248500.0,
    "nonResident": 248500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Доброкачественное новообразование костей и суставов. средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 248500.0,
    "nonResident": 248500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "экзостозы, хондрома, остеома, остеобластокластома тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 331200.0,
    "nonResident": 331200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "суставов, конечностей, позвоночника, грудной клетки и таза тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 331200.0,
    "nonResident": 331200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "состояния после травм , закрытых манипуляций и хирургических тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 331200.0,
    "nonResident": 331200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 182300.0,
    "nonResident": 182300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Кальцификация и оссификация мышцы. Другие поражения средней степени тяжести операция",
    "category": "Хирургия",
    "resident": 182300.0,
    "nonResident": 182300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "Фибропластические поражения тяжелой степени тяжести операция",
    "category": "Хирургия",
    "resident": 248500.0,
    "nonResident": 248500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "service": "санитарном автофургоне час",
    "category": "Прочие услуги",
    "resident": 20100.0,
    "nonResident": 20100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Ведение больного в стационаре 1 койко-день",
    "category": "Стационар",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пребывание лиц, находящихся совместно с пациентом по уходу 1 койко-день (без питания)",
    "category": "Прочие услуги",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пребывание лиц, находящихся совместно с пациентом-инвалидом по уходу 1 койко-день (без питания)",
    "category": "Прочие услуги",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пребывание лиц, находящихся совместно с пациентом в возрасте до 7 лет по уходу 1 койко-день (без питания)",
    "category": "Прочие услуги",
    "resident": 1000.01,
    "nonResident": 1000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Детская палата постнаркозного пробуждения 1 койко-день",
    "category": "Стационар",
    "resident": 1000.0,
    "nonResident": 1000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Взрослая палата постнаркозного пробуждения 1 койко-день",
    "category": "Стационар",
    "resident": 1000004.1,
    "nonResident": 1000004.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пребывание пациента в палате пробуждения за 1 час",
    "category": "Стационар",
    "resident": 1000004.2,
    "nonResident": 1000004.2,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов в возрасте с 1 до 3 лет",
    "category": "Прочие услуги",
    "resident": 1000.01,
    "nonResident": 1000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов в возрасте с 3-7 лет",
    "category": "Прочие услуги",
    "resident": 1000.01,
    "nonResident": 1000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов в возрасте с 7-18 лет",
    "category": "Прочие услуги",
    "resident": 1000.02,
    "nonResident": 1000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов (взрослые, ухаживающие лица)",
    "category": "Прочие услуги",
    "resident": 1000.02,
    "nonResident": 1000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов для взрослых (завтрак)",
    "category": "Прочие услуги",
    "resident": 1000.01,
    "nonResident": 1000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов для взрослых (второй завтрак)",
    "category": "Прочие услуги",
    "resident": 1000.01,
    "nonResident": 1000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов для взрослых (обед)",
    "category": "Прочие услуги",
    "resident": 1000.03,
    "nonResident": 1000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов для взрослых (полдник)",
    "category": "Прочие услуги",
    "resident": 1000.03,
    "nonResident": 1000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов для взрослых (ужин)",
    "category": "Прочие услуги",
    "resident": 1000.03,
    "nonResident": 1000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Организация питания пациентов для взрослых (усиленнное питание)",
    "category": "Прочие услуги",
    "resident": 1000.03,
    "nonResident": 1000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Питание для новорожденного (смесь)",
    "category": "Прочие услуги",
    "resident": 1000.02,
    "nonResident": 1000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление пессария",
    "category": "Хирургия",
    "resident": 7000.01,
    "nonResident": 7000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лечение пациентов с эпилепсией и другими заболеваниями кетогенной диетой с возрастом до 7-ми лет",
    "category": "Прочие услуги",
    "resident": 4000.02,
    "nonResident": 4000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лечение пациентов с эпилепсией и другими заболеваниями кетогенной диетой с возрастом старше 7-ми лет",
    "category": "Прочие услуги",
    "resident": 4000.03,
    "nonResident": 4000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Сестринский уход (за пациентом в стационаре (8 часов))",
    "category": "Стационар",
    "resident": 1000.02,
    "nonResident": 1000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Сестринский уход (реанимационный пост (8 часов))",
    "category": "Прочие услуги",
    "resident": 1000.02,
    "nonResident": 1000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пребывание лиц, находящихся совместно с пациентом в возрасте до 18 лет по уходу 1 койко-день (без питания и без предоставления места)",
    "category": "Прочие услуги",
    "resident": 1000.03,
    "nonResident": 1000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Расфасовка 1 ед. порошка",
    "category": "Прочие услуги",
    "resident": 1000.03,
    "nonResident": 1000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Антирефлюксные операции",
    "category": "Лабораторная диагностика",
    "resident": 2000.0,
    "nonResident": 2000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Антромастоидэктомия",
    "category": "Прочие услуги",
    "resident": 2000.0,
    "nonResident": 2000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Антротомия",
    "category": "Прочие услуги",
    "resident": 2000.0,
    "nonResident": 2000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Бужирование крайней плоти, санация препуциальной полости",
    "category": "Прочие услуги",
    "resident": 2000.0,
    "nonResident": 2000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Бужирование пищевода по проводнику под эндоскопическим контролем",
    "category": "Прочие услуги",
    "resident": 1032002.2,
    "nonResident": 1032002.2,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Грыжи различной этиологии",
    "category": "Прочие услуги",
    "resident": 2000.01,
    "nonResident": 2000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление доброкачественных новообразований (киста)",
    "category": "Хирургия",
    "resident": 2000.01,
    "nonResident": 2000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Доброкачественные опухоли челюстно-лицевой области (ЧЛО) и полости рта",
    "category": "Прочие услуги",
    "resident": 2000.01,
    "nonResident": 2000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Другие манипуляции на глотке",
    "category": "Прочие услуги",
    "resident": 2000.01,
    "nonResident": 2000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Другие манипуляции на гортани и трахее",
    "category": "Прочие услуги",
    "resident": 2000.01,
    "nonResident": 2000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Другие манипуляции на среднем и внутреннем ухе",
    "category": "Прочие услуги",
    "resident": 2000.01,
    "nonResident": 2000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация аппарата костной проводимости",
    "category": "Стоматология",
    "resident": 2000.01,
    "nonResident": 2000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация или замена протеза улитки, не уточненная иначе",
    "category": "Стоматология",
    "resident": 2000.01,
    "nonResident": 2000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Инстилляция мочевого пузыря. Электрорезекция образований мочевого пузыря с биопсией",
    "category": "Лабораторная диагностика",
    "resident": 2000.01,
    "nonResident": 2000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Иссечение эпителиального копчикового хода",
    "category": "Прочие услуги",
    "resident": 86210.43,
    "nonResident": 86210.43,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Конхотомия",
    "category": "Прочие услуги",
    "resident": 99750.0,
    "nonResident": 99750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лазерная коагуляция патологии и/или новообразований кожи/подкожной ткани",
    "category": "Лабораторная диагностика",
    "resident": 15466.0,
    "nonResident": 15466.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая герниорафия односторонней паховой грыжи у детей",
    "category": "Прочие услуги",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая герниорафия двухсторонней паховой грыжи у детей",
    "category": "Прочие услуги",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая коррекция варикоцеле",
    "category": "Прочие услуги",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая фундопликация",
    "category": "Прочие услуги",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая холецистэктомия",
    "category": "Прочие услуги",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая эхинококкэктомия",
    "category": "Прочие услуги",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое низведение яичка",
    "category": "Прочие услуги",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Иссечение срединной кисты шеи",
    "category": "Прочие услуги",
    "resident": 2001.02,
    "nonResident": 2001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Мирингопластика",
    "category": "Прочие услуги",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Нефропексия почки при нефроптозе",
    "category": "Прочие услуги",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции при экстрофии мочевого пузыря",
    "category": "Лабораторная диагностика",
    "resident": 2000.02,
    "nonResident": 2000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при неполном свище пупка",
    "category": "Хирургия",
    "resident": 2000.03,
    "nonResident": 2000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Орхидопексия яичка при крипторхизме",
    "category": "Прочие услуги",
    "resident": 2000.03,
    "nonResident": 2000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика лоханочно-мочеточникового сегмента (ЛМС) при гидронефрозе",
    "category": "Лабораторная диагностика",
    "resident": 2000.03,
    "nonResident": 2000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластические операции на половом члене",
    "category": "Хирургия",
    "resident": 2000.03,
    "nonResident": 2000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Подрезание уздечки",
    "category": "Прочие услуги",
    "resident": 2000.03,
    "nonResident": 2000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Постановка периферического катетера и уход за ним",
    "category": "Прочие услуги",
    "resident": 2000.03,
    "nonResident": 2000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Прочие манипуляции на наружном ухе",
    "category": "Прочие услуги",
    "resident": 2000.03,
    "nonResident": 2000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Репозиция костей носа",
    "category": "Прочие услуги",
    "resident": 2000.04,
    "nonResident": 2000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Ретроградная уретропиелоскопия, -графия. Масочный наркоз",
    "category": "Прочие услуги",
    "resident": 30029.5,
    "nonResident": 30029.5,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Тимпаностомия",
    "category": "Прочие услуги",
    "resident": 2000.04,
    "nonResident": 2000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Тонзиллэктомия",
    "category": "Прочие услуги",
    "resident": 2000.04,
    "nonResident": 2000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транспупилярная коагуляция (лазерная) сетчатки обоих глаз",
    "category": "Лабораторная диагностика",
    "resident": 2000.04,
    "nonResident": 2000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Трахеостомия",
    "category": "Прочие услуги",
    "resident": 2000.04,
    "nonResident": 2000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление камня мочевого пузыря",
    "category": "Лабораторная диагностика",
    "resident": 2000.04,
    "nonResident": 2000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление камня мочеточника и почек",
    "category": "Лабораторная диагностика",
    "resident": 2000.04,
    "nonResident": 2000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Уретроскопия детская диагностическая",
    "category": "Прочие услуги",
    "resident": 2000.04,
    "nonResident": 2000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Устранение варикоцеле",
    "category": "Прочие услуги",
    "resident": 2000.05,
    "nonResident": 2000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Устранение водянки оболочек яичка",
    "category": "Прочие услуги",
    "resident": 2000.05,
    "nonResident": 2000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Устранение фимоза",
    "category": "Прочие услуги",
    "resident": 2000.05,
    "nonResident": 2000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Циркумцизия новорожденных",
    "category": "Прочие услуги",
    "resident": 2000.05,
    "nonResident": 2000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Цистоскопия детская + ТУР (стрикт, стеноз, клапан). Масочный наркоз",
    "category": "Прочие услуги",
    "resident": 54169.0,
    "nonResident": 54169.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Цистоскопия детская диагностическая. Масочный наркоз",
    "category": "Прочие услуги",
    "resident": 18059.5,
    "nonResident": 18059.5,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Цистоскопия лечебно-диагностическая",
    "category": "Прочие услуги",
    "resident": 2000.05,
    "nonResident": 2000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Цистоскопия с катетеризацией мочеточника стационар",
    "category": "Лабораторная диагностика",
    "resident": 2000.05,
    "nonResident": 2000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоскопическое устранение пузырно-мочеточникового рефлюкса (ПМР)",
    "category": "Лабораторная диагностика",
    "resident": 1000000.1,
    "nonResident": 1000000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Аутолимфодренирование",
    "category": "Прочие услуги",
    "resident": 2000.06,
    "nonResident": 2000.06,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Аутодермопластика при ограниченных ожогах и ранах",
    "category": "Прочие услуги",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Вскрытие абсцесса ЛОР органов",
    "category": "Прочие услуги",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Тимпанопластика I типа",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Тимпанопластика  II-V типов",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое устранение паховой грыжи (без сетки)",
    "category": "Прочие услуги",
    "resident": 2000.18,
    "nonResident": 2000.18,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое устранение вентральной грыжи (без сетки)",
    "category": "Прочие услуги",
    "resident": 2000.18,
    "nonResident": 2000.18,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопический адгезиолизис",
    "category": "Прочие услуги",
    "resident": 2000.18,
    "nonResident": 2000.18,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Реконструктивно-восстановительные операции на желудочно-кишечном тракте",
    "category": "Хирургия",
    "resident": 2000.19,
    "nonResident": 2000.19,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Герниопластика при паховой грыже (без сетки)",
    "category": "Прочие услуги",
    "resident": 2000.19,
    "nonResident": 2000.19,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Герниопластика при пупочной грыже (без сетки)",
    "category": "Прочие услуги",
    "resident": 2000.2,
    "nonResident": 2000.2,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Иссечение кист шеи и других локализации",
    "category": "Прочие услуги",
    "resident": 2000.2,
    "nonResident": 2000.2,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Вскрытие фурункула",
    "category": "Прочие услуги",
    "resident": 2000.21,
    "nonResident": 2000.21,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Вскрытие карбункула",
    "category": "Прочие услуги",
    "resident": 2000.21,
    "nonResident": 2000.21,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Вскрытие абсцесса до 5 см",
    "category": "Прочие услуги",
    "resident": 2000.21,
    "nonResident": 2000.21,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Медицинский аборт",
    "category": "Прочие услуги",
    "resident": 2000.21,
    "nonResident": 2000.21,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гистерорезектоскопия при полипах эндометрия",
    "category": "Прочие услуги",
    "resident": 2000.21,
    "nonResident": 2000.21,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопические  операции на придатках",
    "category": "Хирургия",
    "resident": 2000.21,
    "nonResident": 2000.21,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая миомэктомия",
    "category": "Прочие услуги",
    "resident": 2000.22,
    "nonResident": 2000.22,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая  гистерэктомия",
    "category": "Прочие услуги",
    "resident": 2000.22,
    "nonResident": 2000.22,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Диагностическая лапаротомия",
    "category": "Прочие услуги",
    "resident": 2000.22,
    "nonResident": 2000.22,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапаротомия- операции на придатках",
    "category": "Хирургия",
    "resident": 2000.22,
    "nonResident": 2000.22,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Консервативная миомэктомия",
    "category": "Прочие услуги",
    "resident": 2000.22,
    "nonResident": 2000.22,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Трансвагинальная экстирпация матки",
    "category": "Прочие услуги",
    "resident": 2000.22,
    "nonResident": 2000.22,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Трансвагинальная экстирпация матки с пластикой влагалища",
    "category": "Прочие услуги",
    "resident": 2000.22,
    "nonResident": 2000.22,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Установка сетчатого протеза ТVТ-О с целью устранения недержания мочи (без стоимости сетчатого протеза ТVТ-О)",
    "category": "Лабораторная диагностика",
    "resident": 2000.22,
    "nonResident": 2000.22,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Вскрытие абсцесса бартолиниевой железы",
    "category": "Прочие услуги",
    "resident": 2000.22,
    "nonResident": 2000.22,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "исключение услуги",
    "category": "Прочие услуги",
    "resident": 2000.23,
    "nonResident": 2000.23,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Деструкция шейки матки",
    "category": "Прочие услуги",
    "resident": 2000.23,
    "nonResident": 2000.23,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление кондилом (1 кондилома)",
    "category": "Хирургия",
    "resident": 2000.23,
    "nonResident": 2000.23,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Радикальная резекция молочной железы",
    "category": "Хирургия",
    "resident": 2000.23,
    "nonResident": 2000.23,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Простая мастэктомия",
    "category": "Прочие услуги",
    "resident": 2000.23,
    "nonResident": 2000.23,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика уздечки",
    "category": "Прочие услуги",
    "resident": 2000.23,
    "nonResident": 2000.23,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Круговое иссечение крайней плоти – обрезание детское",
    "category": "Прочие услуги",
    "resident": 2000.24,
    "nonResident": 2000.24,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Круговое иссечение крайней плоти гольмиевым лазером детское",
    "category": "Прочие услуги",
    "resident": 2000.24,
    "nonResident": 2000.24,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая перевязка внутренней семенной вены",
    "category": "Прочие услуги",
    "resident": 2000.26,
    "nonResident": 2000.26,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая нефрэктомия",
    "category": "Прочие услуги",
    "resident": 2000.26,
    "nonResident": 2000.26,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Диагностическая лапароскопия",
    "category": "Прочие услуги",
    "resident": 2000.28,
    "nonResident": 2000.28,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при короткой уздечки языка и верхней губы - подрезание",
    "category": "Хирургия",
    "resident": 2000.28,
    "nonResident": 2000.28,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Хейлопластика",
    "category": "Прочие услуги",
    "resident": 2000.28,
    "nonResident": 2000.28,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика расщелины альвеолярного отростка",
    "category": "Прочие услуги",
    "resident": 2000.28,
    "nonResident": 2000.28,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Верхняя блефаропластика (2 глаза)",
    "category": "Прочие услуги",
    "resident": 2000.31,
    "nonResident": 2000.31,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Нижняя блефаропластика (2 глаза)",
    "category": "Прочие услуги",
    "resident": 2000.31,
    "nonResident": 2000.31,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Круговая блефаропластика (2 глаза)",
    "category": "Прочие услуги",
    "resident": 2000.31,
    "nonResident": 2000.31,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Трансконъюнктивальная блефаропластика",
    "category": "Прочие услуги",
    "resident": 2000.31,
    "nonResident": 2000.31,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемиколэктомия лапароскопическая",
    "category": "Прочие услуги",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемиколэктомия открытая",
    "category": "Прочие услуги",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Закрытие энтеростомы",
    "category": "Прочие услуги",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция Гартмана",
    "category": "Хирургия",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лазерная вапоризация геморроидальных узлов 1 категория",
    "category": "Прочие услуги",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лазерная вапоризация геморроидальных узлов 2 категория",
    "category": "Прочие услуги",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лазерная вапоризация геморроидальных узлов 3 категория",
    "category": "Прочие услуги",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Свищ прямой кишки, лазерная вапоризация 1 категория",
    "category": "Прочие услуги",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Свищ прямой кишки, лазерная вапоризация 2 категория",
    "category": "Прочие услуги",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Свищ прямой кишки, лазерная вапоризация 3 категория",
    "category": "Прочие услуги",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эпителиально-копчиковый ход, лазерная вапоризация 1 категория",
    "category": "Прочие услуги",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эпителиально-копчиковый ход, лазерная вапоризация 2 категория",
    "category": "Прочие услуги",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эпителиально-копчиковый ход, лазерная вапоризация 3 категория",
    "category": "Прочие услуги",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Анальная трещина, лазерная вапоризация",
    "category": "Прочие услуги",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Грыжесечение: послеоперационные вентральные грыжи (малые) (открытые)",
    "category": "Хирургия",
    "resident": 2000.11,
    "nonResident": 2000.11,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Грыжесечение: послеоперационные вентральные грыжи (большие) (открытые)",
    "category": "Хирургия",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая аппендэктомия",
    "category": "Прочие услуги",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая холецистэктомия без дренирования желчных путей",
    "category": "Прочие услуги",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая холецистэктомия с дренированием желчных путей",
    "category": "Прочие услуги",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая герниопластика паховой грыжи больших размеров",
    "category": "Прочие услуги",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая герниопластика паховой грыжи обычных размеров",
    "category": "Прочие услуги",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая фундопликация по Ниссен при ГЭРБ",
    "category": "Прочие услуги",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая фундопликация по Ниссен при ГПОД",
    "category": "Прочие услуги",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая фундопликация по Ниссен при больших размерах грыжи пищеводного отверстия диафрагмы с тересогастропексией",
    "category": "Прочие услуги",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая кардиомиотомия по Геллеру при ахалазии",
    "category": "Прочие услуги",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое мини-гастрошунтирование при ожирение с ИМТ до 45 кг/м2 без стоимости сшивающих кассет и аппарата",
    "category": "Прочие услуги",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое мини-гастрошунтирование при ожирение с ИМТ от  45 кг/м2 до 55 кг/м2 без стоимости сшивающих кассет и аппарата",
    "category": "Прочие услуги",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое мини-гастрошунтирование при ожирении крайней степени с альвеолярной гиповентиляцией",
    "category": "Прочие услуги",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое мини-гастрошунтирование при ожирение с ИМТ более 55 кг/м2 без стоимости сшивающих кассет и аппарата",
    "category": "Прочие услуги",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое гастрошунтирование по Ру при ожирение с ИМТ до 45 кг/м2 без стоимости сшивающих кассет и аппарата",
    "category": "Прочие услуги",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое гастрошунтирование по Ру при ожирение с ИМТ от 45 кг/м2 до 55 кг/м2 без стоимости сшивающих кассет и аппарата",
    "category": "Прочие услуги",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое гастрошунтирование по Ру при ожирение с ИМТ более 55 кг/м2 без стоимости сшивающих кассет и аппарата",
    "category": "Прочие услуги",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая продольная (слив) резекция желудка без стоимости сшивающих кассет и аппарата",
    "category": "Хирургия",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое шунтирование SADI",
    "category": "Прочие услуги",
    "resident": 2000.13,
    "nonResident": 2000.13,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическое удаление желудочного бандажа и подкожного порта",
    "category": "Хирургия",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопический перевод мини-гастрошунтирования в гастрошунтирование по Ру без стоимости сшивающих кассет",
    "category": "Прочие услуги",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопический перевод продольной (слив) резекции в мини-гастрошунтирование без стоимости сшивающих кассет",
    "category": "Хирургия",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая «дистализация» (укорочение общей петли) после гастрошунтирования по Ру",
    "category": "Прочие услуги",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Торакоскопическая односторонняя симпатэктомия при феномене Рейно или гипергидрозе",
    "category": "Прочие услуги",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Торакоскопическая двухсторонняя симпатэктомия при феномене Рейно или гипергидрозе",
    "category": "Прочие услуги",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Экстирпация пищевода с пластикой цельным желудком по Черноусову",
    "category": "Прочие услуги",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Экстирпация пищевода с пластикой желудочной трубкой по Черноусову",
    "category": "Прочие услуги",
    "resident": 2000.14,
    "nonResident": 2000.14,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Холедохоеюностомия по Ру при стриктурах холедоха",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гепатиоеюностомия по Ру при высоких стриктурах холедоха",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Панкреатоцистоеюностомия по Ру при кистах и свищах поджелудочной железы",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Продольная панкреатоцистоеюностомия по Ру при вирсунголитиазе",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Открытая эхинококкэктомия (до 10см3)",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Открытая эхинококкэктомия (свыше 10см3)",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Закрытая (идеальная) эхинококкэктомия",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Дивертикулэктомия пищевода (ценкера)",
    "category": "Прочие услуги",
    "resident": 2000.15,
    "nonResident": 2000.15,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая дивертикулэктомия пищевода",
    "category": "Прочие услуги",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление половины щитовидной железы открытым способом. (гемитиреоидэктомия)",
    "category": "Хирургия",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Полное удаление открытым способом. (тиреоидэктомия)",
    "category": "Хирургия",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление одной паращитовидной железы открытым способом. (паратиреоидэктомия)",
    "category": "Хирургия",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Паратиреоидэктомия (1 доля)",
    "category": "Прочие услуги",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Торакоскопическая тимомэктомия",
    "category": "Прочие услуги",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоскопическая тиреоидэктомия при диффузно-узловом зобе 1,2 категории сложности",
    "category": "Прочие услуги",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоскопическая гемитиреоидэктомия при узловом зобе при 1,2 категории сложности",
    "category": "Прочие услуги",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Тиреоидэктомия 3 категории сложности",
    "category": "Прочие услуги",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемитиреоидэктомия 3 категории сложности",
    "category": "Прочие услуги",
    "resident": 2000.16,
    "nonResident": 2000.16,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Аутогенная трансплантация гемопоэтических стволовых клеток",
    "category": "Прочие услуги",
    "resident": 2000.17,
    "nonResident": 2000.17,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Лапароскопическая холецистолитотомия",
    "category": "Прочие услуги",
    "resident": 2000.17,
    "nonResident": 2000.17,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Забор гемопоэтических стволовых клеток",
    "category": "Прочие услуги",
    "resident": 2000.17,
    "nonResident": 2000.17,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Чрескожная прямая пункционная гастростомия под эндоскопическим контролем",
    "category": "Прочие услуги",
    "resident": 2000.17,
    "nonResident": 2000.17,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Рандеву-холецистэктомия",
    "category": "Прочие услуги",
    "resident": 2000.17,
    "nonResident": 2000.17,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "АКШ  на работающем сердце (без коронарографии)",
    "category": "Прочие услуги",
    "resident": 1001.0,
    "nonResident": 1001.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "АКШ с искусственным кровообращением (без коронарографии)",
    "category": "Прочие услуги",
    "resident": 1001.0,
    "nonResident": 1001.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "АКШ (без коронарографии)+аневризма левого желудочка",
    "category": "Прочие услуги",
    "resident": 1001.0,
    "nonResident": 1001.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Бентала-Де Боно (протезирование восходящего отдела аорты)",
    "category": "Прочие услуги",
    "resident": 1001.0,
    "nonResident": 1001.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Бентала-Де Боно+АКШ",
    "category": "Прочие услуги",
    "resident": 1001.0,
    "nonResident": 1001.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция Дэвида",
    "category": "Хирургия",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Констриктивный перикардит",
    "category": "Прочие услуги",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "ДМПП у взрослых",
    "category": "Прочие услуги",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Дренирование перикарда",
    "category": "Прочие услуги",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Открытый артериальный проток у взрослых",
    "category": "Прочие услуги",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика трикуспидального клапана",
    "category": "Прочие услуги",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика митрального клапана",
    "category": "Прочие услуги",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование аортального клапана",
    "category": "Прочие услуги",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование аортального клапана+АКШ",
    "category": "Прочие услуги",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование трехстворчатого клапана",
    "category": "Прочие услуги",
    "resident": 1001.01,
    "nonResident": 1001.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование аортального, митрального, трикуспидального клапанов",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование митрального, аортального клапанов",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование митрального клапана",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование митрального, аортального клапанов +АКШ",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование митрального клапана+АКШ",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пункция перикарда",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Остеосинтез грудины",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Опухоль сердца (миксома)",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Внутриаортальная баллонная контрпульсация",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Длительная механическая поддержка кровообращения (с учетом стоимости устройства вспомогательного кровообращения)",
    "category": "Прочие услуги",
    "resident": 1001.02,
    "nonResident": 1001.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Экстракорпоральная мембранная оксигенация (ЭКМО)",
    "category": "Прочие услуги",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Установка ЭКМО с устройством Levitronix (выездная)",
    "category": "Прочие услуги",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Перфузиологические услуги в условиях искусственного кровообращения при проведении операции на открытом сердце (выездная)",
    "category": "Ультразвуковая диагностика",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Уход за пациентом установленной экстракорпоральной мембранной оксигенацией",
    "category": "Прочие услуги",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Установление гастростомы (выездная)",
    "category": "Прочие услуги",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Аннулопластика Митрального клапана опорным кольцом в условиях искусственного кровообращения через миниторакотомический доступ с применением видео",
    "category": "Прочие услуги",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование Митрального/Аортального клапана в условиях искуственного кровообращения через миниторакотомический доступ с применениям видеоторак",
    "category": "Прочие услуги",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Радикальная коррекция тетрады Фалло с большими аорто-легочными колатералями у взрослых",
    "category": "Прочие услуги",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Протезирование митрального клапана+РЧА",
    "category": "Прочие услуги",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "АКШ с искусственным кровообращением  (без коронарографии) + РЧА",
    "category": "Прочие услуги",
    "resident": 1001.03,
    "nonResident": 1001.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Установка ЭКМО с устройством Levitronix",
    "category": "Прочие услуги",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Экстракорпоральная мембранная оксигенация (ЭКМО) (выездная)",
    "category": "Прочие услуги",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Торакотомия (выездная бригада)",
    "category": "Прочие услуги",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Дренирование плевральной полости (выездная бригада)",
    "category": "Прочие услуги",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гипертермическая перфузия в лечении опухолей (выездная бригада)",
    "category": "Ультразвуковая диагностика",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гипертермическая перфузия органов (выездная бригада)",
    "category": "Ультразвуковая диагностика",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гипертермическая перфузия в лечении опухолей торакальных органов (выездная бригада)",
    "category": "Ультразвуковая диагностика",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гипертермическая перфузия в лечении опухолей брюшной полости (выездная бригада)",
    "category": "Ультразвуковая диагностика",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гипертермическая перфузия в лечении опухолей без учета расходных материалов (выездная бригада)",
    "category": "Ультразвуковая диагностика",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Уход за пациентом установленной экстракорпоральная мембранная оксигенация",
    "category": "Прочие услуги",
    "resident": 1001.04,
    "nonResident": 1001.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "1.1.2. Блок детской кардиохирургии",
    "category": "Хирургия",
    "resident": 112.0,
    "nonResident": 112.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика дефекта межпредсердной перегородки у детей",
    "category": "Прочие услуги",
    "resident": 1002.0,
    "nonResident": 1002.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика дефекта межжелудочковой перегородки у детей",
    "category": "Прочие услуги",
    "resident": 1002.0,
    "nonResident": 1002.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика дефекта межжелудочковой перегородки у детей с высокой легочной гипертензией",
    "category": "Прочие услуги",
    "resident": 1002.0,
    "nonResident": 1002.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Радикальная коррекция тетрады Фалло у детей",
    "category": "Прочие услуги",
    "resident": 1002.0,
    "nonResident": 1002.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Коррекция частичного аномального дренажа легочных вен у детей",
    "category": "Прочие услуги",
    "resident": 1002.0,
    "nonResident": 1002.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Коррекция тотального аномального дренажа у детей",
    "category": "Прочие услуги",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Формирование системно-легочного анастомоза у детей",
    "category": "Прочие услуги",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Формирование системно-легочного анастомоза в условиях искусственного кровообращения у детей",
    "category": "Прочие услуги",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция артериального переключения при транспозиции магистральных сосудов у детей",
    "category": "Хирургия",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Резекция коарктации аорты у детей",
    "category": "Хирургия",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция Мюллера (бэндинг легочной артерии)",
    "category": "Хирургия",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика трехстворчатого клапана при аномалии Эбштейна у детей",
    "category": "Прочие услуги",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Формирование двунаправленного кавапульмонального анастомоза (операция Гленна) у детей",
    "category": "Хирургия",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Резекция рабдомиомы сердца у детей",
    "category": "Хирургия",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Коррекция атриовентрикулярного септального дефекта, неполной формы у детей",
    "category": "Прочие услуги",
    "resident": 1002.01,
    "nonResident": 1002.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Коррекция атриовентрикулярного септального дефекта,полной формы у детей",
    "category": "Прочие услуги",
    "resident": 1002.02,
    "nonResident": 1002.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация электрокардиостимулятора у новорожденных (стоимость с кардиостимулятором)",
    "category": "Стоматология",
    "resident": 1002.02,
    "nonResident": 1002.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация электрокардиостимулятора у детей(стоимость с кардиостимулятором)",
    "category": "Стоматология",
    "resident": 1002.02,
    "nonResident": 1002.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Коррекция перерыва дуги аорты у детей",
    "category": "Прочие услуги",
    "resident": 1002.02,
    "nonResident": 1002.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика резидуального дефекта межжелудочковой перегородки у детей",
    "category": "Прочие услуги",
    "resident": 1002.02,
    "nonResident": 1002.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Двойное лигирование ОАП у детей",
    "category": "Прочие услуги",
    "resident": 1002.02,
    "nonResident": 1002.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Коррекция стеноза легочной артерии у детей",
    "category": "Прочие услуги",
    "resident": 1002.02,
    "nonResident": 1002.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Резекция коартации аорты у детей с исскуственым кровообращением",
    "category": "Хирургия",
    "resident": 1002.02,
    "nonResident": 1002.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация электрокардиостимулятора у детей (стоимость с двухкамерным кардиостимулятором)",
    "category": "Стоматология",
    "resident": 1002.02,
    "nonResident": 1002.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "1.1.3. Блок интервенционной кардиологии и лаборатории катетеризации",
    "category": "Прочие услуги",
    "resident": 113.0,
    "nonResident": 113.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Зондирование (катетеризация) полостей сердца",
    "category": "Прочие услуги",
    "resident": 1003.0,
    "nonResident": 1003.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Коронарография",
    "category": "Прочие услуги",
    "resident": 1003.0,
    "nonResident": 1003.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Стентирование коронарных артерий (без стоимости стента)",
    "category": "Прочие услуги",
    "resident": 1003.0,
    "nonResident": 1003.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транскатетерная баллонная вальвулопластика клапанного стеноза легочной артерии (без стоимости баллона)",
    "category": "Прочие услуги",
    "resident": 1003.0,
    "nonResident": 1003.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Трансвенозная радиочастотная абляция при АВ узловой риентритахикардии (РЧА АВУРТ)",
    "category": "Прочие услуги",
    "resident": 1003.0,
    "nonResident": 1003.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Трансвенозная радиочастотная абляция при тахикардии (РЧА) с использованием системы CARTO 3",
    "category": "Прочие услуги",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Электрофизиологоическое исследование сердца",
    "category": "Прочие услуги",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Манипуляции на других структурах, прилегающих к сердечной мышце (без стоимости устройства)",
    "category": "Прочие услуги",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транскатетерная баллонная вальвулопластика стеноза аортального клапана (без стоимости устройства)",
    "category": "Прочие услуги",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация или замена автоматических кардиовертер дефибриллятор, всей системы полностью (без стоимости устройства)",
    "category": "Стоматология",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Введение постоянного электрокардиостимулятора, первичное или его замена (без стоимости устройства)",
    "category": "Прочие услуги",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транскатетерное закрытие ДМПП и ОАП окклюдером (без стоимости устройства)",
    "category": "Прочие услуги",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Коронарография с шунтографией (коронароангиография)",
    "category": "Прочие услуги",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транскатетерная балонная вальвулопластика стеноза митрального клапана (без устройства)",
    "category": "Прочие услуги",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Денервация почечных артерий (без стоимости Symplicity)",
    "category": "Прочие услуги",
    "resident": 1003.01,
    "nonResident": 1003.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Криоаблация",
    "category": "Прочие услуги",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транскатетерная имплантация аортального клапана TAVI (без стоимости устройства)",
    "category": "Стоматология",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация стент графта (без стоимости устройства)",
    "category": "Стоматология",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Стентирование коарктации аорты (без стоимости устройства)",
    "category": "Прочие услуги",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Процедура Рашкинда (выездная)",
    "category": "Прочие услуги",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Экстракция электродов и всей системы (без стоимости устройства)",
    "category": "Прочие услуги",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация или замена кардиоресинхронизирующего дефибриллятора. Всей системы полностью CRT - D (без стоимости устройства)",
    "category": "Стоматология",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Рентгеноскопия в лаборатории катетеризации",
    "category": "Лучевая диагностика",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транскатетерное сшивание открытого овального окна сердца с использованием устройства NobleStitch",
    "category": "Прочие услуги",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндомиокардиальная биопсия",
    "category": "Хирургия",
    "resident": 1003.02,
    "nonResident": 1003.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Коронарная ангиопластика (без стоимости баллона)",
    "category": "Прочие услуги",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация подкожного монитора",
    "category": "Стоматология",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Радиочастотная аблация с использованием навигационной системы St.Jude Medical Ensite Velocity (без стоимости катетера)",
    "category": "Прочие услуги",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Контрольная проверка параметров ЭКС и ИКД в динамике",
    "category": "Прочие услуги",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Контрольная проверка параметров ЭКС и ИКД, ресинхронизирующего устройства в динамике",
    "category": "Прочие услуги",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Чреспищеводная электростимуляция",
    "category": "Прочие услуги",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Контрольная проверка параметров ЭКС и ИКД с консультацией специалиста",
    "category": "Консультации",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Клипирование митрального клапана с использованием 1 клипа",
    "category": "Прочие услуги",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Клипирование митрального клапана с использованием 2 клипов",
    "category": "Прочие услуги",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при гипербилирубинемии на выезде (1 сутки)",
    "category": "Стационар",
    "resident": 1003.03,
    "nonResident": 1003.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при аутоимммунных заболеваниях на выезде (1 сутки)",
    "category": "Стационар",
    "resident": 1003.04,
    "nonResident": 1003.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при печеночной энцефалопатии на выезде (1 сутки)",
    "category": "Стационар",
    "resident": 1003.04,
    "nonResident": 1003.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при сепсисе на выезде (1 сутки)",
    "category": "Стационар",
    "resident": 1003.04,
    "nonResident": 1003.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при повышении уровня желчных кислот в крови на выезде (1 сутки)",
    "category": "Стационар",
    "resident": 1003.04,
    "nonResident": 1003.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при гипербилирубинемии (1 сутки)",
    "category": "Стационар",
    "resident": 1003.04,
    "nonResident": 1003.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при аутоимммунных заболеваниях (1 сутки)",
    "category": "Стационар",
    "resident": 1003.04,
    "nonResident": 1003.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при печеночной энцефалопатии (1 сутки)",
    "category": "Стационар",
    "resident": 1003.04,
    "nonResident": 1003.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при сепсисе (1 сутки)",
    "category": "Стационар",
    "resident": 1003.04,
    "nonResident": 1003.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Гемосорбция/плазмасорбция при повышении уровня желчных кислот в крови (1 сутки)",
    "category": "Стационар",
    "resident": 1003.04,
    "nonResident": 1003.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "1.1.4. Блок интервенционной радиологии",
    "category": "Прочие услуги",
    "resident": 114.0,
    "nonResident": 114.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоваскулярная эмболизация сосудов головы и шеи",
    "category": "Прочие услуги",
    "resident": 2000.08,
    "nonResident": 2000.08,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоваскулярная эмболизация сосудов спиралями",
    "category": "Прочие услуги",
    "resident": 2000.08,
    "nonResident": 2000.08,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоваскулярная эмболизация сосудов микросферами",
    "category": "Прочие услуги",
    "resident": 2000.08,
    "nonResident": 2000.08,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация подкожного порта",
    "category": "Стоматология",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоваскулярная химиоэмболизация опухолей",
    "category": "Прочие услуги",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эмболизация маточных артерий без использования ИМН",
    "category": "Прочие услуги",
    "resident": 2000.12,
    "nonResident": 2000.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Аортография, ангиопульмонография",
    "category": "Прочие услуги",
    "resident": 2000.08,
    "nonResident": 2000.08,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Чрескожная чреспеченочная холангиография",
    "category": "Прочие услуги",
    "resident": 2000.08,
    "nonResident": 2000.08,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Фистулохолангиография, фистулография",
    "category": "Прочие услуги",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоваскулярная баллонная ангиопластика периферических сосудов",
    "category": "Прочие услуги",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоваскулярное стентирование периферических сосудов",
    "category": "Прочие услуги",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндоваскулярное стентирование сосудов головы и шеи",
    "category": "Прочие услуги",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация периферического катетера для длительного венозного доступа, гемодиализа",
    "category": "Стоматология",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Чреспеченочная холецистохолангиостомия",
    "category": "Прочие услуги",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Замена чреспеченочного дренажа желчных протоков",
    "category": "Прочие услуги",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Селективная внутриартериальная химиоинфузия (без стоимости препарата)",
    "category": "Ультразвуковая диагностика",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пункционная радиочастотная аблация опухолей",
    "category": "Прочие услуги",
    "resident": 2000.09,
    "nonResident": 2000.09,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация кавафильтра, удаление кавафильтра",
    "category": "Стоматология",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Чреспеченочная эмболизация варикозных вен пищевода и желудка",
    "category": "Прочие услуги",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация стент-графта в брюшную аорту с учетом стоимости стент-графта",
    "category": "Стоматология",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Имплантация стент-графта в грудную аорту с учетом стоимости стент-графта",
    "category": "Стоматология",
    "resident": 2000.1,
    "nonResident": 2000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Хирургическая реконструкция артерий брахицефальной зоны",
    "category": "Хирургия",
    "resident": 2000.17,
    "nonResident": 2000.17,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Эндовенозная лазерная абляция варикозно расширенных вен нижних конечностей",
    "category": "Прочие услуги",
    "resident": 400.24,
    "nonResident": 400.24,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Склеротерапия варикозно - расширенных вен нижних конечностей",
    "category": "Прочие услуги",
    "resident": 2000000.1,
    "nonResident": 2000000.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Флебография",
    "category": "Прочие услуги",
    "resident": 60448.5,
    "nonResident": 60448.5,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Рентгеноэндоваскулярная склеротерапия",
    "category": "Лучевая диагностика",
    "resident": 112071.5,
    "nonResident": 112071.5,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Рентгеноэндоваскулярная эмболизация при варикоцеле",
    "category": "Лучевая диагностика",
    "resident": 3000005.12,
    "nonResident": 3000005.12,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при внутрисуставных поражениях колена",
    "category": "Хирургия",
    "resident": 3000.0,
    "nonResident": 3000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при врожденных заболеваниях и костно-мышечных деформациях грудной клетки, кисти, колена, бедра, голени, стопы",
    "category": "Хирургия",
    "resident": 3000.0,
    "nonResident": 3000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при деформирующих артрозах крупных суставов (локтевых, плечевых, лучезапястных и др.)",
    "category": "Хирургия",
    "resident": 3000.0,
    "nonResident": 3000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при доброкачественных новообразованиях костей и суставов, остеохондродисплазии, костных кистах, костнохрящевых образованиях",
    "category": "Хирургия",
    "resident": 3000.0,
    "nonResident": 3000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при других поражениях суставов",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при других приобретенных деформациях конечностей, деформациях пальцев рук и ног",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при застарелых осложненных повреждениях сухожилий на уровне предплечья и кисти",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при коксартрозах",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при остеопатии и хондропатии",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция при плохом срастании, несрастании, замедлении срастания перелома (псевдоартроз), стресс-х и уст-х, патол-х переломах, остеон-з костей ОДА",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции при поражениях надколенника",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции для устранения последствии термических и химических ожогов и отморожений. Келоидный рубец",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции по устранению последствий травм, переломов, вывихов, врожд-х заб-х и приоб-х деформациях, пограничных сост-х, дегенер-х заб-ях мягких тканей и сус-в",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции по устранению посттравматических деформаций (ригидность, контрактура, анкилоз) опорно-двигательного аппарата, последствиях травм суставов, конечностей, позвоночника)",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции при сколиозах, кифосколиозах, спондилолистезах, остеохондрозе позвоночника",
    "category": "Хирургия",
    "resident": 3000.01,
    "nonResident": 3000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции при сросшихся и срастающихся переломах, посттравмат, послеоперац контрактурах суставов, ложных суставах, сколиозах, последствиях оперативных вмешательств",
    "category": "Хирургия",
    "resident": 3000.02,
    "nonResident": 3000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции при церебральном параличе",
    "category": "Хирургия",
    "resident": 3000.02,
    "nonResident": 3000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции при юношеском остеохондрозе бедра и таза, остеохондропатии",
    "category": "Хирургия",
    "resident": 3000.02,
    "nonResident": 3000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Артроскопическая менискэктомия",
    "category": "Прочие услуги",
    "resident": 3000.02,
    "nonResident": 3000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Остеосинтез  ложных суставов и/или коррегирующие остеотомии длинных трубчатых костей",
    "category": "Прочие услуги",
    "resident": 3000.02,
    "nonResident": 3000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление металлоконструкции при сросшихся переломах",
    "category": "Хирургия",
    "resident": 3000.02,
    "nonResident": 3000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика несвежих и застарелых повреждений сухожилий стопы и кисти",
    "category": "Прочие услуги",
    "resident": 3000.02,
    "nonResident": 3000.02,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пластика несвежего и застарелого разрыва вращательной манжеты",
    "category": "Прочие услуги",
    "resident": 3000.03,
    "nonResident": 3000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Открытая репозиция несвежих и застарелых вывихов",
    "category": "Прочие услуги",
    "resident": 3000.03,
    "nonResident": 3000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Реконструктивно-восстановительные операции при застарелых не осложненных переломах тел позвонков",
    "category": "Хирургия",
    "resident": 3000.03,
    "nonResident": 3000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Реконструктивно-восстановительные операции при несвежих и застарелых переломах костей таза",
    "category": "Хирургия",
    "resident": 3000.03,
    "nonResident": 3000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Артродезирование и/или реконструктивно-восстановительные операции при несвежих и застарелых внутрисуставных переломах",
    "category": "Хирургия",
    "resident": 3000.03,
    "nonResident": 3000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Артроскопическая диагностика несвежих и застарелых внутрисуставных повреждениях связочного аппарата",
    "category": "Прочие услуги",
    "resident": 3000.03,
    "nonResident": 3000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Реконструктивно-восстановительные операции при дефектах мягких тканей",
    "category": "Хирургия",
    "resident": 3000.03,
    "nonResident": 3000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление вросшего ногтя",
    "category": "Хирургия",
    "resident": 3000.03,
    "nonResident": 3000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Наложение 8-образной гипсовой повязки",
    "category": "Прочие услуги",
    "resident": 3000.03,
    "nonResident": 3000.03,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Наложение повязки Дезо",
    "category": "Прочие услуги",
    "resident": 3000.04,
    "nonResident": 3000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Репозиция перелома",
    "category": "Прочие услуги",
    "resident": 3000.04,
    "nonResident": 3000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Резекция ногтевой пластинки с пластикой",
    "category": "Хирургия",
    "resident": 3000.04,
    "nonResident": 3000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Остеосинтез спицами, проволокой и/или  винтами свежих переломов  лодыжек, мыщелков  плеча, отростков костей  предплечья, вывиха головки лучевой кости, переломов и/или вывихи костей запястья, пястных и",
    "category": "Прочие услуги",
    "resident": 3000.04,
    "nonResident": 3000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Закрытый блокирующий интрамедуллярный остеосинтез при свежих переломах длинных трубчатых костей (без стоимости имплантата),  а именно плечевой, предплечья, бедренной и костей голени.",
    "category": "Стоматология",
    "resident": 3000.04,
    "nonResident": 3000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Закрытый блокирующий экстрамедуллярный остеосинтез при свежих переломах длинных трубчатых костей (без стоимости имплантат),  а именно плечевой, предплечья, бедренной и костей голени.",
    "category": "Стоматология",
    "resident": 3000.04,
    "nonResident": 3000.04,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Закрытый блокирующий интра- и/или экстрамедуллярный остеосинтез при свежих около-внутрисуставных переломах длинных трубчатых костей (без стоимости имплантата),  а именно плечевой, предплечья, бедренно",
    "category": "Стоматология",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Закрытый блокирующий интра- и/или экстрамедуллярный остеосинтез при свежих диафизарных  переломах коротких  трубчатых костей (без стоимости имплантата),  а именно кисти, стопы, лодыжек, ключицы, локте",
    "category": "Стоматология",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Закрытый блокирующий интра- и/или экстрамедуллярный остеосинтез при свежих около-внутрисуставных переломах коротких  трубчатых костей (без стоимости имплантата),  а именно кисти, стопы, лодыжек, ключи",
    "category": "Стоматология",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операции при множественных переломах + повреждения внутренних органов или переломах костей  таза + переломы конечностей, ложные суставы",
    "category": "Хирургия",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Чрескостный (окончательный) остеосинтез переломов длинных трубчатых костей, а именно плечевой, бедренной, костей предплечья и голени аппаратом внешней фиксации Г.А. Илизарова (без стоимости конструкци",
    "category": "Прочие услуги",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Чрескостный (окончательный) остеосинтез переломов костей таза аппаратом внешней фиксации Г.А.Илизарова (без стоимости конструкции)",
    "category": "Прочие услуги",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Комбинированный  (чрескостный +погружной) остеосинтез переломов костей таза аппаратами  внешней фиксации (без стоимости конструкции).",
    "category": "Прочие услуги",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Открытая и/или закрытая репозиция с остеосинтезом переломов костей таза, сочленений  реконструктивными пластинами и винтами (без стоимости конструкции).",
    "category": "Прочие услуги",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Шинирующий остеосинтез переломов таза, длинных и/или коротких трубчатых костей стержневыми и/или спице-стержневыми аппаратами внешней фиксации (без стоимости конструкции)",
    "category": "Прочие услуги",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Чрескостный остеосинтез грудины, восстановление грудного каркаса (без стоимости конструкции)",
    "category": "Прочие услуги",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транспедикулярный остеосинтез переломов и/или вывихов тел позвонков без переднего корпродеза (без стоимости конструкции)",
    "category": "Прочие услуги",
    "resident": 3000.05,
    "nonResident": 3000.05,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транспедикулярный остеосинтез переломов и/или вывихов тел позвонков с передним корпродезом (без стоимости конструкции)",
    "category": "Прочие услуги",
    "resident": 3000.06,
    "nonResident": 3000.06,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Экстрамедуллярный остеосинтез переломов и/или вывихов лопатки, плечевой, локтевой, лучевой, бедренной, большеберцовой, малоберцовой кости (без стоимости конструкции).",
    "category": "Прочие услуги",
    "resident": 3000.06,
    "nonResident": 3000.06,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Реконструктивно-восстановительные операции при свежих разрывах сухожилий, связок, мышечной ткани",
    "category": "Хирургия",
    "resident": 3000.06,
    "nonResident": 3000.06,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Удаление металлофиксаторов из оперированных костей",
    "category": "Хирургия",
    "resident": 3000.06,
    "nonResident": 3000.06,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция по удалению металлоконструкции",
    "category": "Хирургия",
    "resident": 3000.06,
    "nonResident": 3000.06,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Операция - передний спондилодез",
    "category": "Хирургия",
    "resident": 3000.06,
    "nonResident": 3000.06,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Транспедикулярная фиксация  позвоночника",
    "category": "Прочие услуги",
    "resident": 3000.07,
    "nonResident": 3000.07,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Непрерывное мониторирование глюкозы на аппарате Ipro2 (1 сутки)",
    "category": "Стационар",
    "resident": 3336003.1,
    "nonResident": 3336003.1,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Непрерывное мониторирование глюкозы на аппарате Ipro2 (2 суток)",
    "category": "Прочие услуги",
    "resident": 3336003.2,
    "nonResident": 3336003.2,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Непрерывное мониторирование глюкозы на аппарате Ipro2 (3 суткок)",
    "category": "Стационар",
    "resident": 3336003.3,
    "nonResident": 3336003.3,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Проба с инсулином на СТГ",
    "category": "Прочие услуги",
    "resident": 4000.0,
    "nonResident": 4000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Установка инсулиновой помпы, замена расходников для инсулиновой помпы",
    "category": "Прочие услуги",
    "resident": 4000.0,
    "nonResident": 4000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Пневмония, вызванная другими стрептококками",
    "category": "Прочие услуги",
    "resident": 4000.0,
    "nonResident": 4000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Острый бронхит, вызванный другими уточненными агентами",
    "category": "Прочие услуги",
    "resident": 4000.0,
    "nonResident": 4000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Смешанная астма",
    "category": "Прочие услуги",
    "resident": 4000.01,
    "nonResident": 4000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Другие острые гастриты",
    "category": "Прочие услуги",
    "resident": 4000.01,
    "nonResident": 4000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Другие гастриты",
    "category": "Прочие услуги",
    "resident": 4000.01,
    "nonResident": 4000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Другие нарушения всасывания в кишечнике",
    "category": "Прочие услуги",
    "resident": 4000.01,
    "nonResident": 4000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Другие атопические дерматиты",
    "category": "Прочие услуги",
    "resident": 4000.01,
    "nonResident": 4000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "service": "Аллергическая крапивница",
    "category": "Прочие услуги",
    "resident": 4000.01,
    "nonResident": 4000.01,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием врача",
    "category": "Консультации",
    "resident": 12600.0,
    "nonResident": 12600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием врача высшей категории",
    "category": "Консультации",
    "resident": 14700.0,
    "nonResident": 14700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием руководителя, заведующего отделения",
    "category": "Консультации",
    "resident": 15750.0,
    "nonResident": 15750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием врача к.м.н.",
    "category": "Консультации",
    "resident": 18900.0,
    "nonResident": 18900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием врача д.м.н.",
    "category": "Консультации",
    "resident": 24150.0,
    "nonResident": 24150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием главного специалиста",
    "category": "Консультации",
    "resident": 50000.0,
    "nonResident": 50000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием врача",
    "category": "Консультации",
    "resident": 10500.0,
    "nonResident": 10500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием врача высшей категории",
    "category": "Консультации",
    "resident": 12600.0,
    "nonResident": 12600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием руководителя, заведующего отделения",
    "category": "Консультации",
    "resident": 13650.0,
    "nonResident": 13650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием врача к.м.н.",
    "category": "Консультации",
    "resident": 16800.0,
    "nonResident": 16800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием врача д.м.н.",
    "category": "Консультации",
    "resident": 22050.0,
    "nonResident": 22050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием главного специалиста",
    "category": "Консультации",
    "resident": 47000.0,
    "nonResident": 47000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Заключение врача по чекап-программе",
    "category": "Прочие услуги",
    "resident": 7350.0,
    "nonResident": 7350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Заключение врача профпатолога",
    "category": "Прочие услуги",
    "resident": 7350.0,
    "nonResident": 7350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Консультация врача-эндоскописта",
    "category": "Консультации",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием диетолога",
    "category": "Консультации",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием диетолога",
    "category": "Консультации",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Консультация профессора ДМН из дальнего и ближнего зарубежья",
    "category": "Консультации",
    "resident": 52500.0,
    "nonResident": 52500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Консультация профессора КМН из дальнего и ближнего зарубежья (первичный)",
    "category": "Консультации",
    "resident": 43050.0,
    "nonResident": 43050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Консультация специалиста без осмотра (интерпретация анализов, данных обследований и прочие)",
    "category": "Лабораторная диагностика",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Организация второго мнения (зарубежного специалиста)",
    "category": "Прочие услуги",
    "resident": 12600.0,
    "nonResident": 12600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Прием врача на профилактический осмотр",
    "category": "Консультации",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный психотерапевта",
    "category": "Консультации",
    "resident": 10500.0,
    "nonResident": 10500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный психотерапевта",
    "category": "Консультации",
    "resident": 8400.0,
    "nonResident": 8400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Прием врача-менеджера (координация, сопровождение иностранных представителей)",
    "category": "Консультации",
    "resident": 4750.0,
    "nonResident": 4750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Сеанс психотерапии",
    "category": "Прочие услуги",
    "resident": 15750.0,
    "nonResident": 15750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием врача стационара, выполняющий высокотехнологичные медицинские услуги",
    "category": "Консультации",
    "resident": 24150.0,
    "nonResident": 24150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием врача стационара, выполняющий высокотехнологичные медицинские услуги",
    "category": "Консультации",
    "resident": 12600.0,
    "nonResident": 12600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием врача (онлайн)",
    "category": "Консультации",
    "resident": 10500.0,
    "nonResident": 10500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием врача с высшей категорией (онлайн)",
    "category": "Консультации",
    "resident": 12600.0,
    "nonResident": 12600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием врача к.м.н. (онлайн)",
    "category": "Консультации",
    "resident": 16800.0,
    "nonResident": 16800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием врача д.м.н.  (онлайн)",
    "category": "Консультации",
    "resident": 22050.0,
    "nonResident": 22050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Первичный консультативный прием главного специалиста (онлайн)",
    "category": "Консультации",
    "resident": 22050.0,
    "nonResident": 22050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием врача  (онлайн)",
    "category": "Консультации",
    "resident": 8400.0,
    "nonResident": 8400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием врача с высшей категорией (онлайн)",
    "category": "Консультации",
    "resident": 10500.0,
    "nonResident": 10500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием врача к.м.н. (онлайн)",
    "category": "Консультации",
    "resident": 14700.0,
    "nonResident": 14700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием врача д.м.н. (онлайн)",
    "category": "Консультации",
    "resident": 19950.0,
    "nonResident": 19950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Повторный консультативный прием главного специалиста (онлайн)",
    "category": "Консультации",
    "resident": 19950.0,
    "nonResident": 19950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Телемедицина (консультация 2 специалистов)",
    "category": "Консультации",
    "resident": 13650.0,
    "nonResident": 13650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Телемедицина (консультация 3 специалистов)",
    "category": "Консультации",
    "resident": 18900.0,
    "nonResident": 18900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Телемедицина (консультация 4 специалистов)",
    "category": "Консультации",
    "resident": 24150.0,
    "nonResident": 24150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Телемедицина (консультация 5 специалистов)",
    "category": "Консультации",
    "resident": 29400.0,
    "nonResident": 29400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр водителей с выдачей справки о медицинском заключении (форма №073Ф) ЖЕН",
    "category": "Консультации",
    "resident": 20800.0,
    "nonResident": 20800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр водителей с выдачей справки о медицинском заключении (форма №073Ф) МУЖ",
    "category": "Консультации",
    "resident": 14400.0,
    "nonResident": 14400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр для санитарной книжки (без бактериологического исследования) ЖЕН",
    "category": "Консультации",
    "resident": 15850.0,
    "nonResident": 15850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр для санитарной книжки (без бактериологического исследования) МУЖ",
    "category": "Консультации",
    "resident": 9400.0,
    "nonResident": 9400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр для санитарной книжки (без бактериологического исследования) ЖЕН для Медицинских работников",
    "category": "Консультации",
    "resident": 23850.0,
    "nonResident": 23850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр для санитарной книжки (без бактериологического исследования) МУЖ для Медицинских работников",
    "category": "Консультации",
    "resident": 23850.0,
    "nonResident": 23850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр для санитарной книжки (без бактериологического исследования) ЖЕН для работников пищевого блока",
    "category": "Консультации",
    "resident": 19100.0,
    "nonResident": 19100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр для санитарной книжки (без бактериологического исследования) МУЖ для работников пищевого блока",
    "category": "Консультации",
    "resident": 12700.0,
    "nonResident": 12700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр на посещение бассейна с выдачей справки (дерматолог, терапевт, кровь на микрореакцию, кал на я/г)",
    "category": "Лабораторная диагностика",
    "resident": 7200.0,
    "nonResident": 7200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр при поступлении в учебные заведения с выдачей мед. справки (форма № 075У) ЖЕН",
    "category": "Консультации",
    "resident": 22150.0,
    "nonResident": 22150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинский осмотр при поступлении в учебные заведения с выдачей мед. справки (форма № 075У) МУЖ",
    "category": "Консультации",
    "resident": 15750.0,
    "nonResident": 15750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинское освидетельствование лиц выезжающих за рубеж (командировки, учеба, тур поездки  (форма №082У) ЖЕН",
    "category": "Прочие услуги",
    "resident": 30950.0,
    "nonResident": 30950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинское освидетельствование лиц выезжающих за рубеж (командировки, учеба, тур поездки  (форма №082У) МУЖ",
    "category": "Прочие услуги",
    "resident": 24550.0,
    "nonResident": 24550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медицинское освидетельствование (для работников ИХЧ и водителей)",
    "category": "Прочие услуги",
    "resident": 1200.0,
    "nonResident": 1200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Аутогемотерапия",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "В/венная инъекция без лекарственных средств",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "В/венное вливание капельное (без лек. средств и системы)",
    "category": "Прочие услуги",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Вакцинация против гриппа",
    "category": "Прочие услуги",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Забор крови на анализ с холдером",
    "category": "Лабораторная диагностика",
    "resident": 1050.0,
    "nonResident": 1050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Подкожная и внутримышечная инъекция без лекарственных средств",
    "category": "Прочие услуги",
    "resident": 1200.0,
    "nonResident": 1200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Пункт забора крови",
    "category": "Лучевая диагностика",
    "resident": 1800.0,
    "nonResident": 1800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Вакцинация \"ПРЕВЕНАР 13\"",
    "category": "Прочие услуги",
    "resident": 25200.0,
    "nonResident": 25200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Разовое посещение дневного стационара (без оформления истории болезни, без питания и без медикаментов)",
    "category": "Стационар",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Стационар дневного пребывания (без питания и без медикаментов)",
    "category": "Стационар",
    "resident": 6000.0,
    "nonResident": 6000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Стационар дневного пребывания (без питания с медикаментом)",
    "category": "Стационар",
    "resident": 7900.0,
    "nonResident": 7900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Стационар дневного пребывания (с питанием и с медикаментами)",
    "category": "Стационар",
    "resident": 9450.0,
    "nonResident": 9450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Стационар дневного пребывания без медикаментов (с питанием)",
    "category": "Стационар",
    "resident": 7600.0,
    "nonResident": 7600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Стационар на дому без медикаментов",
    "category": "Стационар",
    "resident": 7350.0,
    "nonResident": 7350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены бытовые/молекулярные (А)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены грибковые (D)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены деревьев (T)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены домашней пыли (H)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены животных (Е)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены ингаляционные (IР)",
    "category": "Физиотерапия",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены лекарственные ©",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены насекомых (I)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены паразитов (P)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены пищевые (F)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены плесневые (M)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены профессиональные (K)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены прочие (О)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены сорных трав (W)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "КДЛ - Аллергены трав и злаков (G)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Альбумин",
    "category": "Прочие услуги",
    "resident": 1500.0,
    "nonResident": 1500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Белок Бенс-Джонса в моче",
    "category": "Лабораторная диагностика",
    "resident": 35950.0,
    "nonResident": 35950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Иммунотипирование белков (М-градиент)",
    "category": "Прочие услуги",
    "resident": 31500.0,
    "nonResident": 31500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Креатинин",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Мочевая кислота",
    "category": "Лабораторная диагностика",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Мочевина",
    "category": "Лабораторная диагностика",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Общий белок",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Электрофорез белков крови (Белковые фракции)",
    "category": "Физиотерапия",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Трансферрин",
    "category": "Прочие услуги",
    "resident": 2750.0,
    "nonResident": 2750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Ферритин (Ferritin)",
    "category": "Прочие услуги",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Общая железосвязывающая способность сыворотки крови (ОЖСС)",
    "category": "Прочие услуги",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Аполипопротеин А (Аро-А)",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Аполипопротеин В (Аро-В)",
    "category": "Прочие услуги",
    "resident": 4000.0,
    "nonResident": 4000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Липопротеины высокой плотности (ЛПВП, HDL)",
    "category": "Прочие услуги",
    "resident": 2350.0,
    "nonResident": 2350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Липопротеины низкой плотности (ЛПНП, LDL)",
    "category": "Прочие услуги",
    "resident": 1900.0,
    "nonResident": 1900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Триглицериды (ТГ)",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Холестерин (ХС)",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Билирубин общий",
    "category": "Прочие услуги",
    "resident": 1800.0,
    "nonResident": 1800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Билирубин прямой",
    "category": "Прочие услуги",
    "resident": 1800.0,
    "nonResident": 1800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Гликозилированный гемоглобин (Гемоглобин А1с, HbA1c)",
    "category": "Прочие услуги",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Глюкоза",
    "category": "Прочие услуги",
    "resident": 1700.0,
    "nonResident": 1700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Глюкоза на глюкометре",
    "category": "Прочие услуги",
    "resident": 450.0,
    "nonResident": 450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Аланин-аминотрансфераза (АЛТ)",
    "category": "Прочие услуги",
    "resident": 1900.0,
    "nonResident": 1900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Альфа-амилаза",
    "category": "Прочие услуги",
    "resident": 2000.0,
    "nonResident": 2000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Амилаза панкреатическая",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Аспартат-аминотрансфераза (АСТ)",
    "category": "Прочие услуги",
    "resident": 1900.0,
    "nonResident": 1900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Гамма-глутамилтрансфераза (ГГТП)",
    "category": "Прочие услуги",
    "resident": 2550.0,
    "nonResident": 2550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Креатининкиназа-МВ фракция (КФК-МВ)",
    "category": "Прочие услуги",
    "resident": 2650.0,
    "nonResident": 2650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Креатинфосфокиназа (КФК)",
    "category": "Прочие услуги",
    "resident": 1900.0,
    "nonResident": 1900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Лактатдегидрогеназа (ЛДГ)",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Щелочная фосфатаза (ЩФ)",
    "category": "Прочие услуги",
    "resident": 1800.0,
    "nonResident": 1800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Липаза",
    "category": "Прочие услуги",
    "resident": 2650.0,
    "nonResident": 2650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Глюкоза в разовой порции мочи",
    "category": "Лабораторная диагностика",
    "resident": 1450.0,
    "nonResident": 1450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Глюкоза в суточном количестве мочи",
    "category": "Лабораторная диагностика",
    "resident": 1550.0,
    "nonResident": 1550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Кальций общий в суточной моче",
    "category": "Лабораторная диагностика",
    "resident": 1500.0,
    "nonResident": 1500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Креатинин в моче",
    "category": "Лабораторная диагностика",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Магний в моче",
    "category": "Лабораторная диагностика",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Мочевая кислота в моче",
    "category": "Лабораторная диагностика",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Мочевина в моче",
    "category": "Лабораторная диагностика",
    "resident": 1400.0,
    "nonResident": 1400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Микроальбуминовый комплекс (Соотношение креатинин/альбумин)",
    "category": "Прочие услуги",
    "resident": 8750.0,
    "nonResident": 8750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Относительные индексы метаболических нарушений (соотношение кальций/креатинин, магний/креатинин, неорганический фосфор/креатинин, мочевая кислота/креа",
    "category": "Лабораторная диагностика",
    "resident": 4350.0,
    "nonResident": 4350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Относительный индекс метаболических нарушений (соотношение кальций/креатинин)",
    "category": "Прочие услуги",
    "resident": 3050.0,
    "nonResident": 3050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Относительный индекс метаболических нарушений (соотношение магний/креатинин)",
    "category": "Прочие услуги",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Относительный индекс метаболических нарушений (соотношение неорганический мочевая кислота/креатинин)",
    "category": "Лабораторная диагностика",
    "resident": 2850.0,
    "nonResident": 2850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Относительный индекс метаболических нарушений (соотношение неорганический фосфор/креатинин)",
    "category": "Прочие услуги",
    "resident": 2750.0,
    "nonResident": 2750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Проба Реберга-Тареева",
    "category": "Прочие услуги",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение скорости клубочковой фильтрации",
    "category": "Прочие услуги",
    "resident": 2550.0,
    "nonResident": 2550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Осмолярность мочи",
    "category": "Лабораторная диагностика",
    "resident": 650.0,
    "nonResident": 650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Фосфор в моче",
    "category": "Лабораторная диагностика",
    "resident": 1050.0,
    "nonResident": 1050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Калий в моче",
    "category": "Лабораторная диагностика",
    "resident": 1050.0,
    "nonResident": 1050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Натрий в моче",
    "category": "Лабораторная диагностика",
    "resident": 1050.0,
    "nonResident": 1050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Хлор в моче",
    "category": "Лабораторная диагностика",
    "resident": 1050.0,
    "nonResident": 1050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Осмолярность крови",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Иммуноглобулин A",
    "category": "Прочие услуги",
    "resident": 3600.0,
    "nonResident": 3600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Иммуноглобулин G",
    "category": "Прочие услуги",
    "resident": 3600.0,
    "nonResident": 3600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Иммуноглобулин М",
    "category": "Прочие услуги",
    "resident": 3600.0,
    "nonResident": 3600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Комплемент С3",
    "category": "Прочие услуги",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Комплемент С4",
    "category": "Прочие услуги",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Агрегация тромбоцитов с P2Y (анализатор PFA 200)",
    "category": "Лабораторная диагностика",
    "resident": 24500.0,
    "nonResident": 24500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Агрегация тромбоцитов с АДФ (анализатор PFA 200)",
    "category": "Лабораторная диагностика",
    "resident": 24500.0,
    "nonResident": 24500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Агрегация тромбоцитов с Эпинефрин (анализатор PFA 200)",
    "category": "Лабораторная диагностика",
    "resident": 23100.0,
    "nonResident": 23100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Активированное частичное/порционное тромбопластиновое время (АЧТВ/АПТВ)",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитромбин III (АТ-3)",
    "category": "Лабораторная диагностика",
    "resident": 4450.0,
    "nonResident": 4450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Волчаночный антикоагулянт (Люпус-тест)",
    "category": "Лабораторная диагностика",
    "resident": 6650.0,
    "nonResident": 6650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Время длительности кровотечения по Дьюку",
    "category": "Прочие услуги",
    "resident": 1050.0,
    "nonResident": 1050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Время свертываемости по Сухареву",
    "category": "Прочие услуги",
    "resident": 1050.0,
    "nonResident": 1050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Д-Димер (D-Dimer Exclusion), количественное определение",
    "category": "Прочие услуги",
    "resident": 8650.0,
    "nonResident": 8650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Д-димер (методом турбидиметрического иммуноанализа), количественное определение",
    "category": "Лабораторная диагностика",
    "resident": 10500.0,
    "nonResident": 10500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Коагулограмма - комплекс №1 (АЧТВ, МНО, ПВ, ПТИ, фибриноген, ТВ)",
    "category": "Лабораторная диагностика",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Коагулограмма - комплекс №2 (АЧТВ, МНО, ПВ, ПТИ, фибриноген, ТВ + РФМК)",
    "category": "Лабораторная диагностика",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Международное нормализованное отношение (МНО)",
    "category": "Прочие услуги",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Протеин С",
    "category": "Прочие услуги",
    "resident": 11050.0,
    "nonResident": 11050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Протромбиновое время (ПВ)",
    "category": "Прочие услуги",
    "resident": 1700.0,
    "nonResident": 1700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Протромбиновый индекс (ПТИ)",
    "category": "Прочие услуги",
    "resident": 1700.0,
    "nonResident": 1700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Растворимые фибрин-мономерные комплексы (РФМК)",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "С1-ингибитор",
    "category": "Прочие услуги",
    "resident": 12600.0,
    "nonResident": 12600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Тромбиновое время (ТВ)",
    "category": "Прочие услуги",
    "resident": 1700.0,
    "nonResident": 1700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Тромбоэластограмма с гепариназой",
    "category": "Прочие услуги",
    "resident": 12300.0,
    "nonResident": 12300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Тромбоэластограмма с коалином",
    "category": "Прочие услуги",
    "resident": 16300.0,
    "nonResident": 16300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Фибриноген",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение МНО/ПВ/Значение по Квику в капиллярной крови",
    "category": "Прочие услуги",
    "resident": 8400.0,
    "nonResident": 8400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Альфа - 1 - антитрипсин",
    "category": "Лабораторная диагностика",
    "resident": 5050.0,
    "nonResident": 5050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антистрептолизин О (АСЛ-О), количественное определение",
    "category": "Лабораторная диагностика",
    "resident": 2950.0,
    "nonResident": 2950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Гаптоглобин",
    "category": "Прочие услуги",
    "resident": 1700.0,
    "nonResident": 1700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Миоглобин, количественное определение",
    "category": "Прочие услуги",
    "resident": 2300.0,
    "nonResident": 2300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Ревматоидный фактор (РФ), количественное определение",
    "category": "Прочие услуги",
    "resident": 2450.0,
    "nonResident": 2450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "С-реактивный белок (СРБ), количественное определение",
    "category": "Прочие услуги",
    "resident": 2550.0,
    "nonResident": 2550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Церулоплазмин",
    "category": "Прочие услуги",
    "resident": 4300.0,
    "nonResident": 4300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к рецепторам ТТГ (анти-рТТГ, TSH receptor antibodies, a-rTSH)",
    "category": "Лабораторная диагностика",
    "resident": 9050.0,
    "nonResident": 9050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Кальций ионизированный",
    "category": "Прочие услуги",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Железо сывороточное (Fe)",
    "category": "Прочие услуги",
    "resident": 1900.0,
    "nonResident": 1900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Калий",
    "category": "Прочие услуги",
    "resident": 1050.0,
    "nonResident": 1050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Кальций общий (Ca)",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Кислотно-щелочное состояние (КЩС) крови (Газы крови)",
    "category": "Прочие услуги",
    "resident": 5700.0,
    "nonResident": 5700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Магний (Mg)",
    "category": "Прочие услуги",
    "resident": 1700.0,
    "nonResident": 1700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Медь (Cu)",
    "category": "Прочие услуги",
    "resident": 1350.0,
    "nonResident": 1350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Натрий",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Фосфор органический (P)",
    "category": "Прочие услуги",
    "resident": 1800.0,
    "nonResident": 1800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Хлор",
    "category": "Прочие услуги",
    "resident": 1600.0,
    "nonResident": 1600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Электролиты (Калий, натрий, кальций ионизированный, хлор) в сыворотке крови",
    "category": "Прочие услуги",
    "resident": 4750.0,
    "nonResident": 4750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Кислотно-щелочное состояние крови, на портативном анализаторе газов, электролитов и метаболитов крови",
    "category": "Лабораторная диагностика",
    "resident": 10500.0,
    "nonResident": 10500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Выявление LE – феномена (LE - клетки, волчаночные клетки)",
    "category": "Прочие услуги",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Исследование крови на  малярийный плазмодий методом «тонкого мазка» и «толстой капли»",
    "category": "Прочие услуги",
    "resident": 1350.0,
    "nonResident": 1350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Общий анализ крови (ОАК) развернутый (с лейкоцитарной формулой)",
    "category": "Лабораторная диагностика",
    "resident": 2350.0,
    "nonResident": 2350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Общий анализ крови (ОАК) сокращенный (без лейкоцитарной формулы)",
    "category": "Лабораторная диагностика",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Подсчет ретикулоцитов",
    "category": "Прочие услуги",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Подсчет тромбоцитов по Фонио",
    "category": "Прочие услуги",
    "resident": 1300.0,
    "nonResident": 1300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Показатели клеточного иммунитета (Л/циты; Т-л/циты-CD3+; Т-хелперы-СD3,4+; Т-цитотоксические - CD3,8+; B-л/циты CD3-,19+; Натур.киллеры - CD3-,16,56+)",
    "category": "Прочие услуги",
    "resident": 19950.0,
    "nonResident": 19950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Фагоцитоз (кислородонезависимый)",
    "category": "Прочие услуги",
    "resident": 11050.0,
    "nonResident": 11050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Витамин D общий (Vitamin D total, 25-OH-VitD)",
    "category": "Прочие услуги",
    "resident": 7700.0,
    "nonResident": 7700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Витамин D3 (Vitamin D3, 25-OH-VitD3)",
    "category": "Прочие услуги",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Витамин В12 (Vitamin B12, Cyanocobalamin)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Витамин В12 активный (active Vitamin B12, Holotranscobalamin)",
    "category": "Прочие услуги",
    "resident": 6750.0,
    "nonResident": 6750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Фолиевая кислота (Folate)",
    "category": "Прочие услуги",
    "resident": 3800.0,
    "nonResident": 3800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение иммунологических характеристик слизистой оболочки желудка (Гастропанель: пепсиноген I , пепсиноген II, гастрин-17B, гастрин-17S, Anti-Heli",
    "category": "Прочие услуги",
    "resident": 24150.0,
    "nonResident": 24150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Адренокортикотропный гормон (AKTГ, ACТH)",
    "category": "Лабораторная диагностика",
    "resident": 5050.0,
    "nonResident": 5050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Альдостерон (Aldosterone)",
    "category": "Прочие услуги",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Гормона роста (Соматотропный гормон, СТГ, hGH)",
    "category": "Лабораторная диагностика",
    "resident": 8400.0,
    "nonResident": 8400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Дегидроэпиандростерон сульфат (ДГЭА-с, DHEA-s)",
    "category": "Прочие услуги",
    "resident": 5250.0,
    "nonResident": 5250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Кортизол (Cortisol)",
    "category": "Прочие услуги",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение уровня катехоламинов (адреналин, норадреналин, допамин) в плазме крови методом ИФА",
    "category": "Прочие услуги",
    "resident": 24150.0,
    "nonResident": 24150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Мелатонин в сыворотке крови ИФА-методом, количественное определение",
    "category": "Прочие услуги",
    "resident": 15250.0,
    "nonResident": 15250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Адреналин (эпинефрин) в сыворотке крови ИФА-методом,  количественное определение",
    "category": "Прочие услуги",
    "resident": 15250.0,
    "nonResident": 15250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Допамин в сыворотке крови ИФА-методом,  количественное определение",
    "category": "Прочие услуги",
    "resident": 15250.0,
    "nonResident": 15250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Норадреналин (норэпинефрин) в сыворотке крови ИФА-методом,  количественное определение",
    "category": "Прочие услуги",
    "resident": 15250.0,
    "nonResident": 15250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Ванилилминдальная кислота в суточной моче (VMA, 24h urine)",
    "category": "Лабораторная диагностика",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Гомованилиновая кислота в суточной моче (HVA, 24h urine)",
    "category": "Лабораторная диагностика",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Кортизол в суточной моче (Cortisol, 24h urine)",
    "category": "Лабораторная диагностика",
    "resident": 5150.0,
    "nonResident": 5150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Инсулин (Insulin)",
    "category": "Прочие услуги",
    "resident": 4750.0,
    "nonResident": 4750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Связывающий пептид (C-Peptide)",
    "category": "Прочие услуги",
    "resident": 5050.0,
    "nonResident": 5050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антимюллеров гормон (АМН, АМГ, MIS)",
    "category": "Лабораторная диагностика",
    "resident": 7900.0,
    "nonResident": 7900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Глобулин, связывающий половые гормоны (ГСПГ, SHBG)",
    "category": "Лабораторная диагностика",
    "resident": 5250.0,
    "nonResident": 5250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Лютеинизирующий гормон (ЛГ, LH)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Прогестерон (Progesterone)",
    "category": "Прочие услуги",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Пролактин (Prolactin)",
    "category": "Прочие услуги",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Тестостерон (Testosterone)",
    "category": "Прочие услуги",
    "resident": 4750.0,
    "nonResident": 4750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Фолликулостимулирующий гормон (ФСГ, FSH)",
    "category": "Лабораторная диагностика",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Эстрадиол (Estradiol)",
    "category": "Прочие услуги",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к тиреоглобулину (Anti-Tg)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к тироидной пероксидазе (Anti-TPO)",
    "category": "Лабораторная диагностика",
    "resident": 4100.0,
    "nonResident": 4100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Тиреоглобулин (Tg)",
    "category": "Прочие услуги",
    "resident": 4450.0,
    "nonResident": 4450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Тиреотропного гормона (TSH)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Тироксин общий (total Т4)",
    "category": "Прочие услуги",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Тироксин свободный (FT4)",
    "category": "Прочие услуги",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Трийодтиронин общий (total Т3)",
    "category": "Прочие услуги",
    "resident": 3850.0,
    "nonResident": 3850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Трийодтиронин свободный (FТ3)",
    "category": "Прочие услуги",
    "resident": 3800.0,
    "nonResident": 3800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антимитохондриальные антитела подтипа М2 (АМА-М2)",
    "category": "Лабораторная диагностика",
    "resident": 7700.0,
    "nonResident": 7700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антинейтрофильные цитоплазматические антитела, скрининг (ANCA-screen)",
    "category": "Лабораторная диагностика",
    "resident": 7900.0,
    "nonResident": 7900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антинуклеарные антитела, скрининг (ANA screen)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антинуклеарные антитела, скрининг (ANA-Detect)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к GBM в сыворотке крови ИФА-методом",
    "category": "Лабораторная диагностика",
    "resident": 8750.0,
    "nonResident": 8750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к бета-2-гликопротеину I (Anti-ß-2 Glycoprotein)",
    "category": "Лабораторная диагностика",
    "resident": 7050.0,
    "nonResident": 7050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к двухцепочечной ДНК (a-dsDNA)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к односпиральной ДНК (а-ssDNA)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к париетальным клеткам желудка (a-Parietal cell IgG)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к тканевой трансглутаминазе, скрининг (а-tTG IgA,G)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к эластазе (Anti-Elastase)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса A к Saccharomyces cerevisiae (ASCA IgA)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к Saccharomyces cerevisiae (ASCA IgG)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к гистонам (a-Histone IgG)",
    "category": "Лабораторная диагностика",
    "resident": 7900.0,
    "nonResident": 7900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к кардиолипину (A-Cardiolipin IgG)",
    "category": "Лабораторная диагностика",
    "resident": 7900.0,
    "nonResident": 7900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к модифицированному цитрулинизированному виментину (A-MCV IgG)",
    "category": "Лабораторная диагностика",
    "resident": 8650.0,
    "nonResident": 8650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к фосфолипидам (AFL IgG)",
    "category": "Лабораторная диагностика",
    "resident": 7800.0,
    "nonResident": 7800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса M к кардиолипину (A-Cardiolipin IgM)",
    "category": "Лабораторная диагностика",
    "resident": 7800.0,
    "nonResident": 7800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса M к фосфолипидам (AFL IgM)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антителак протромбину (Anti-Protrombin), скрининг",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение антител к инсулину (A-insulin)",
    "category": "Лабораторная диагностика",
    "resident": 7900.0,
    "nonResident": 7900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Суммарные антитела класса A, M, G к кардиолипину, скрининг (A-Cardiolipin total)",
    "category": "Лабораторная диагностика",
    "resident": 7150.0,
    "nonResident": 7150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Экстрагируемые ядерные антитела, развернутый анализ (ENA combi)",
    "category": "Лабораторная диагностика",
    "resident": 22900.0,
    "nonResident": 22900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антинейтрофильные цитоплазматические антитела, развернутый анализ (ANCA-combi)",
    "category": "Лабораторная диагностика",
    "resident": 35500.0,
    "nonResident": 35500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антинуклеарные антитела, развернутый  анализ (ANA combi)",
    "category": "Лабораторная диагностика",
    "resident": 25750.0,
    "nonResident": 25750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антиспермальные антитела (АSА)",
    "category": "Лабораторная диагностика",
    "resident": 11550.0,
    "nonResident": 11550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса IgG к циклическому цитрулинизированному пептиду (а-ССР, а-ЦЦП)",
    "category": "Лабораторная диагностика",
    "resident": 16000.0,
    "nonResident": 16000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к инсулину в сыворотке крови ИФА-методом,  количественное определение",
    "category": "Лабораторная диагностика",
    "resident": 5250.0,
    "nonResident": 5250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Экстрагируемые ядерные антитела, скрининг (ENA screen)",
    "category": "Лабораторная диагностика",
    "resident": 6850.0,
    "nonResident": 6850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "\"ANA pro\" для полуколичественного определения антител IgG к ядерным и цитоплазматическим антигенам в человеческой сыворотке и плазме",
    "category": "Лабораторная диагностика",
    "resident": 21000.0,
    "nonResident": 21000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "\"ANCA Dot\" для качественного определения антител IgG к миелопераксидазе(МПО), протеиназе 3 (ПР-3) и базальной мембране клубочка (БМК) в человеческой сыворотке и плазме",
    "category": "Лабораторная диагностика",
    "resident": 24150.0,
    "nonResident": 24150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "\"ANA 12 LINE\" для качественного определения антител IgG к ядерным и цитоплазматическим антигенам в человеческой сыворотке и плазме",
    "category": "Лабораторная диагностика",
    "resident": 26250.0,
    "nonResident": 26250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Глиадин - IgG Набор реагентов для иммуноферментного количественного  определения иммуноглобулинов класса G к Глиадину в сыворотке крови",
    "category": "Прочие услуги",
    "resident": 11050.0,
    "nonResident": 11050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Глиадин - IgА Набор реагентов для иммуноферментного определения иммуноглобулинов класса А к Глиадину в сыворотке крови",
    "category": "Прочие услуги",
    "resident": 11050.0,
    "nonResident": 11050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Anti-Asetylcholine Receptor IgG- Иммуноферментный анализ для определения антител к ацетилхолиновому рецептору в сыворотке крови",
    "category": "Лабораторная диагностика",
    "resident": 29000.0,
    "nonResident": 29000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение  антител при аутоиммунном васкулите IMTEC-Vasculitis-LIA (IgG к PR3, MPO и GBM)",
    "category": "Лабораторная диагностика",
    "resident": 27550.0,
    "nonResident": 27550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение  антител при аутоиммунных заболеваниях печени IMTEC- Liver-LIA S (IgG к AMA M2, Sp100, LKM1, gp210, LC1 и SLA)",
    "category": "Лабораторная диагностика",
    "resident": 14200.0,
    "nonResident": 14200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антинуклеарные антитела ANA-LIA (IgG к нуклеосомам, дцДНК, гистонам, SmD1, U1-snRNP, SS-A/Ro60kD, SS- A/Ro52kD, SS-B/La, Scl70, CENP-B, Jo1, P0)",
    "category": "Лабораторная диагностика",
    "resident": 6550.0,
    "nonResident": 6550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антинуклеарные антитела ANA-LIA MAXX: IgG к нуклеосомам,дцДНК,гистонам,SmD1, PCNA,P0,SS-A/Ro60и52kD,SS–B/La,CENP-B,Scl-70,U1-snRNP,AMA M2,Jo-1,PM-Scl,Mi-2 (β),Ku",
    "category": "Лабораторная диагностика",
    "resident": 29000.0,
    "nonResident": 29000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение антител при аутоиммунном миозите IMTEC-Myositis-LIA (IgG к Jo1, Mi2, PM-Scl, U1-snRNP и Ku)",
    "category": "Лабораторная диагностика",
    "resident": 14850.0,
    "nonResident": 14850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение антител при глютеновой болезни IMTEC-Celiac Disease-LIA S (IgA и IgG к глиадину, тканевой трансглютаминазе)",
    "category": "Лабораторная диагностика",
    "resident": 6300.0,
    "nonResident": 6300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение антител при желудочно-кишечных заболеваниях Gastro-LIA (IgA и IgG к глиадину, tTG, маннану, РСА, фактору Касла)",
    "category": "Лабораторная диагностика",
    "resident": 19750.0,
    "nonResident": 19750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "HepAK 7 plus Dot Иммунодотинговый анализ  для качественного определения антител IgG к M2, LKM1,  LC1,  SLA,  F-Aklin,  gp210, sp100 в человеческой сыворотке или плазме",
    "category": "Лабораторная диагностика",
    "resident": 30000.0,
    "nonResident": 30000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Anti-Phospholipid 10 Dot-Иммунодотинговый  анализ для определения IgG или IgM-антител к фосфолипидам и β2-гликопротеинов I в сыворотке крови человека",
    "category": "Лабораторная диагностика",
    "resident": 65000.0,
    "nonResident": 65000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "ANA 18 Line- Иммунодотинговый анализ для качественного определения аутоантител к ядерным и цитоплазматическим антигенам в сыворотке или плазме человека",
    "category": "Лабораторная диагностика",
    "resident": 37000.0,
    "nonResident": 37000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Anti-Gangliosid Dot-Иммунодотинговый анализ для качественного определения антител IgG  или  IgMк ганглиозидам в человеческой сыворотке",
    "category": "Лабораторная диагностика",
    "resident": 65000.0,
    "nonResident": 65000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антикератиновые антитела (AKA) методом непрямой иммунофлюоресценции (нРИФ)",
    "category": "Лабораторная диагностика",
    "resident": 8700.0,
    "nonResident": 8700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антинейтрофильные цитоплазматические антитела (ANCA) методом непрямой иммунофлюоресценции (нРИФ)",
    "category": "Лабораторная диагностика",
    "resident": 6400.0,
    "nonResident": 6400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антинуклеарный фактор на клеточной линии HEp-2 (АНФ) методом непрямой иммунофлюоресценции (нРИФ)",
    "category": "Лабораторная диагностика",
    "resident": 8700.0,
    "nonResident": 8700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела к нативной ДНК (а-nDNA) методом непрямой иммунофлюоресценции (нРИФ)",
    "category": "Лабораторная диагностика",
    "resident": 8700.0,
    "nonResident": 8700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Аутоантитела методом (нРИФ) на тройном субстрате (LKM-1, Антитела к обкладочным клеткам желудка, к гладким мышцам (F-актину), АНФ на клеточной линии HЕp-2, АМА-М1,9)",
    "category": "Лабораторная диагностика",
    "resident": 8700.0,
    "nonResident": 8700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "cANCA -Набор реагентов для определения IgG антител к нейтрофильным цитоплазматическим антигенам ANCA в сыворотке крови методом непрямой иммунофлюоресценции (нРИФ)",
    "category": "Лабораторная диагностика",
    "resident": 20000.0,
    "nonResident": 20000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "pANCA -Набор реагентов для определения IgG антител к нейтрофильным цитоплазматическим антигенам ANCA в сыворотке крови методом непрямой иммунофлюоресценции (нРИФ)",
    "category": "Лабораторная диагностика",
    "resident": 20000.0,
    "nonResident": 20000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Triple -Набор реагентов для определения антител (ANA/AMA/ASMA/PCA) в сыворотке крови методом непрямой иммунофлюоресценции (нРИФ)",
    "category": "Лабораторная диагностика",
    "resident": 22000.0,
    "nonResident": 22000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "nDNA- Набор реагентов для определения антител    IgG к нативным ДНК в сыворотке человека.",
    "category": "Лабораторная диагностика",
    "resident": 18000.0,
    "nonResident": 18000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "CeliAc- Набор реагентов для определения антител  IgA или  IgG к эндомизию, трансглютаминазе 2 и деамидизированному глиадину в сыворотке человека.",
    "category": "Лабораторная диагностика",
    "resident": 33000.0,
    "nonResident": 33000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Anti-Aguaporin-4 -Набор н-РИФ для определения антител к аквапорину-4 в сыворотке крови",
    "category": "Лабораторная диагностика",
    "resident": 40000.0,
    "nonResident": 40000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Anti-MOG - Иммунофлюоресцнетный анализ для определения антител к Myelin-oligodendrocyte glycoprotein (MOG)в сыворотке крови.",
    "category": "Лабораторная диагностика",
    "resident": 30000.0,
    "nonResident": 30000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Альфа-интерферон в крови",
    "category": "Прочие услуги",
    "resident": 8400.0,
    "nonResident": 8400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Гамма-интерферон в крови",
    "category": "Прочие услуги",
    "resident": 8400.0,
    "nonResident": 8400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Иммуноглобулин А секреторный в сыворотке крови (sIgA )",
    "category": "Прочие услуги",
    "resident": 5050.0,
    "nonResident": 5050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Иммуноглобулин Е общий (total IgE)",
    "category": "Прочие услуги",
    "resident": 5600.0,
    "nonResident": 5600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Иммунофенотипирование HLA B27 в крови методом проточной цитофлуориметрии",
    "category": "Прочие услуги",
    "resident": 21000.0,
    "nonResident": 21000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин-10",
    "category": "Прочие услуги",
    "resident": 6850.0,
    "nonResident": 6850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин-2",
    "category": "Прочие услуги",
    "resident": 8400.0,
    "nonResident": 8400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин-6",
    "category": "Прочие услуги",
    "resident": 8400.0,
    "nonResident": 8400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин-8",
    "category": "Прочие услуги",
    "resident": 6850.0,
    "nonResident": 6850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение уровня интерлейкина - 13  (ИЛ-13) в сыворотке и плазме крови",
    "category": "Прочие услуги",
    "resident": 18400.0,
    "nonResident": 18400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение уровня интерлейкина - 3 (ИЛ-3) в сыворотке и плазме крови",
    "category": "Прочие услуги",
    "resident": 32550.0,
    "nonResident": 32550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение уровня интерлейкина - 5  (ИЛ-5) в сыворотке и плазме крови",
    "category": "Прочие услуги",
    "resident": 18400.0,
    "nonResident": 18400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин - 1 бета (ИЛ-1-бета, IL-1-β) в биологических жидкостях человека и культуральных средах ИФА-методом,  количественное определение",
    "category": "Прочие услуги",
    "resident": 9250.0,
    "nonResident": 9250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин - 13 (ИЛ-13, IL-13) в сыворотке крови ИФА-методом,  количественное определение",
    "category": "Прочие услуги",
    "resident": 10000.0,
    "nonResident": 10000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин - 18 (ИЛ-18, IL-18) в сыворотке крови ИФА-методом,  количественное определение",
    "category": "Прочие услуги",
    "resident": 8000.0,
    "nonResident": 8000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин - 3 (ИЛ-3, IL-3) в сыворотке крови ИФА-методом,  количественное определение",
    "category": "Прочие услуги",
    "resident": 10000.0,
    "nonResident": 10000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин - 4 (ИЛ-4, IL-4) в сыворотке крови ИФА-методом,  количественное определение",
    "category": "Прочие услуги",
    "resident": 8200.0,
    "nonResident": 8200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Интерлейкин - 5 (ИЛ-5, IL-5) в сыворотке крови ИФА-методом,  количественное определение",
    "category": "Прочие услуги",
    "resident": 10000.0,
    "nonResident": 10000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Эозинофильный катионный протеин (ECP)",
    "category": "Прочие услуги",
    "resident": 9450.0,
    "nonResident": 9450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Триптаза",
    "category": "Прочие услуги",
    "resident": 8200.0,
    "nonResident": 8200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Серологические маркеры коронавирусной инфекции SARS-CoV-2 (COVID-19, 2019-nCoV)",
    "category": "Лабораторная диагностика",
    "resident": 219.2,
    "nonResident": 219.2,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение антител IgМ к SARS-CoV-2 (качественное)",
    "category": "Лабораторная диагностика",
    "resident": 4550.0,
    "nonResident": 4550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение антител IgG к SARS-CoV-2 (качественное)",
    "category": "Лабораторная диагностика",
    "resident": 4600.0,
    "nonResident": 4600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение антител nCoV - Nab (поствакцинальное, количественное)",
    "category": "Лабораторная диагностика",
    "resident": 5250.0,
    "nonResident": 5250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Количественное определение иммуноглобулина G  к SARS- CoV-2",
    "category": "Прочие услуги",
    "resident": 5250.0,
    "nonResident": 5250.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Количественное определение иммуноглобулина M  к SARS- CoV-2",
    "category": "Прочие услуги",
    "resident": 6300.0,
    "nonResident": 6300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Качественное определение IgG/IgM антител к SARS-CoV-2 (Экспресс-тест)",
    "category": "Лабораторная диагностика",
    "resident": 6850.0,
    "nonResident": 6850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Качественное определение специфического антигена Sars-CoV-2 (экспресс-тест)",
    "category": "Лабораторная диагностика",
    "resident": 5700.0,
    "nonResident": 5700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Такролимус в сыворотке крови методом иммунохемилюминесценции",
    "category": "Прочие услуги",
    "resident": 10100.0,
    "nonResident": 10100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Прокальцитонин, РСТ (количественное определение иммуноферментным методом)",
    "category": "Прочие услуги",
    "resident": 10500.0,
    "nonResident": 10500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Прокальцитонин, РСТ (количественное определение иммунофлюоресцентным методом)",
    "category": "Прочие услуги",
    "resident": 9150.0,
    "nonResident": 9150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Остеокальцин (N-MID Osteocalcin)",
    "category": "Прочие услуги",
    "resident": 6300.0,
    "nonResident": 6300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Паратиреоидный гормон (ПТГ, PTH)",
    "category": "Лабораторная диагностика",
    "resident": 6000.0,
    "nonResident": 6000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Пирилинкс-Д (Pyrilinks-D, DPD)",
    "category": "Прочие услуги",
    "resident": 3800.0,
    "nonResident": 3800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Альфа-1-фетопротеин (AFP)",
    "category": "Прочие услуги",
    "resident": 3800.0,
    "nonResident": 3800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антиген плоскоклеточной карциномы (SCC-Ag)",
    "category": "Лабораторная диагностика",
    "resident": 4100.0,
    "nonResident": 4100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Кальцитонин (Calcitonin)",
    "category": "Прочие услуги",
    "resident": 8950.0,
    "nonResident": 8950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Нейрон - специфическая энолаза (НСЕ, NSE) в сыворотке крови методом иммунохемилюминесценции",
    "category": "Прочие услуги",
    "resident": 6300.0,
    "nonResident": 6300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Прогастрин рилизинг пептид (РroGRP)",
    "category": "Прочие услуги",
    "resident": 5600.0,
    "nonResident": 5600.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Простатспецифический антиген общий (ПСА общий, PSA total )",
    "category": "Лабораторная диагностика",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Простатспецифический антиген свободный (ПСА св., PSA free)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Раковоэмбриональный антиген (РЭА, СЕА)",
    "category": "Лабораторная диагностика",
    "resident": 3900.0,
    "nonResident": 3900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Раковый антиген 72-4 (СА 72-4)",
    "category": "Лабораторная диагностика",
    "resident": 6850.0,
    "nonResident": 6850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Раковый антиген 125 (СА 125)",
    "category": "Лабораторная диагностика",
    "resident": 4450.0,
    "nonResident": 4450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Раковый антиген 15-3 (СА 15-3)",
    "category": "Лабораторная диагностика",
    "resident": 4100.0,
    "nonResident": 4100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Раковый антиген 19-9 (СА 19-9)",
    "category": "Лабораторная диагностика",
    "resident": 4450.0,
    "nonResident": 4450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Раковый антиген 242 (СА 242)",
    "category": "Лабораторная диагностика",
    "resident": 8650.0,
    "nonResident": 8650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Фактор некроза опухолей-альфа (TNF-α, α-ФНО)",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Фрагмент цитокератина 19 (Cyfra21-1)",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Хорионический гонадотропин человека интактный + бета-субъединица (HCG+beta)",
    "category": "Прочие услуги",
    "resident": 5800.0,
    "nonResident": 5800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Хорионический гонадотропин человека общий  в моче (HCG urine)",
    "category": "Лабораторная диагностика",
    "resident": 4750.0,
    "nonResident": 4750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Хорионический гонадотропин человека общий (HCG)",
    "category": "Прочие услуги",
    "resident": 2500.0,
    "nonResident": 2500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Человеческий эпидидимальный белок 4 (НЕ4)",
    "category": "Прочие услуги",
    "resident": 6850.0,
    "nonResident": 6850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Гомоцистеин (Нсу-SН)",
    "category": "Прочие услуги",
    "resident": 6850.0,
    "nonResident": 6850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Эритропоэтин (ЕРО)",
    "category": "Прочие услуги",
    "resident": 4550.0,
    "nonResident": 4550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Определение содержания панкреатической эластазы в кале",
    "category": "Прочие услуги",
    "resident": 15750.0,
    "nonResident": 15750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса A к возбудителю бруцеллeза",
    "category": "Лабораторная диагностика",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к возбудителю бруцеллeза",
    "category": "Лабораторная диагностика",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса М к возбудителю бруцеллeза",
    "category": "Лабораторная диагностика",
    "resident": 4200.0,
    "nonResident": 4200.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Суммарные антитела класса M, G к вирусу гепатита D (а-HDV total)",
    "category": "Лабораторная диагностика",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса M к вирусу гепатита A (а-HAV IgM)",
    "category": "Лабораторная диагностика",
    "resident": 2550.0,
    "nonResident": 2550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антиген \"e\" вируса гепатита B (HBeAg)",
    "category": "Лабораторная диагностика",
    "resident": 2700.0,
    "nonResident": 2700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G  к \"e\"-антигену вируса гепатита B  (а-HBeAg IgG)",
    "category": "Лабораторная диагностика",
    "resident": 2450.0,
    "nonResident": 2450.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G  к ядерному антигену вируса гепатита B (а-HBcAg IgG)",
    "category": "Лабораторная диагностика",
    "resident": 2850.0,
    "nonResident": 2850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса M к ядерному антигену вируса гепатита B (а-HBcAg IgМ)",
    "category": "Лабораторная диагностика",
    "resident": 2750.0,
    "nonResident": 2750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Поверхностный антиген вируса гепатита B (НBsAg, Австралийский антиген)",
    "category": "Лабораторная диагностика",
    "resident": 2550.0,
    "nonResident": 2550.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Суммарные антитела класса M, G к \"e\"-антигену вируса гепатита B (а-HBeAg total)",
    "category": "Лабораторная диагностика",
    "resident": 2750.0,
    "nonResident": 2750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Суммарные антитела класса M, G к поверхностному антигену вируса гепатита B (а-HBsAg total)",
    "category": "Лабораторная диагностика",
    "resident": 3050.0,
    "nonResident": 3050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Суммарные антитела класса M, G к ядерному антигену вируса гепатита B (а-HBcAg total)",
    "category": "Лабораторная диагностика",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "НBsAg, Экспресс-тест (Поверхностный антиген вирусного гепатита В, качественное определение)",
    "category": "Лабораторная диагностика",
    "resident": 1900.0,
    "nonResident": 1900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антиген вируса гепатита С (Ag HCV)",
    "category": "Лабораторная диагностика",
    "resident": 8950.0,
    "nonResident": 8950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса M к вирусу гепатита С (HCV IgM)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Суммарные антитела класса M, G к вирусу гепатита С  (а-HCV total)",
    "category": "Лабораторная диагностика",
    "resident": 3050.0,
    "nonResident": 3050.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "a-HCV, Экспресс-тест (Специфические антитела к вирусу гепатита С, качественное определение)",
    "category": "Лабораторная диагностика",
    "resident": 2000.0,
    "nonResident": 2000.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антиген HIV p24 и антитела к вирусу иммунодефицита человека типов 1, 2 (HIV-1/2, ВИЧ-1/2)",
    "category": "Лабораторная диагностика",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Иммуннохроматический экспресс-тест III-го поколения для определения антител к вирусу иммунодефицита человека первого и второго типов (a-HIV-1/2)",
    "category": "Лабораторная диагностика",
    "resident": 2100.0,
    "nonResident": 2100.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Экспресс тест определения свободного антигена HIV-1 p24 антител и антител к вирусу иммунодефицита человека первого и второго типов (ВИЧ-1 и ВИЧ-2)",
    "category": "Лабораторная диагностика",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "ИФА на наличие антител к вирусу иммунодефицита человека (ВИЧ, СПИД-центр)",
    "category": "Лабораторная диагностика",
    "resident": 2650.0,
    "nonResident": 2650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G  к вирусу простого герпеса 8 типа (HSV-8-IgG)",
    "category": "Лабораторная диагностика",
    "resident": 2850.0,
    "nonResident": 2850.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к вирусу простого герпеса 1 и 2 типа (HSV-1,2-IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к вирусу простого герпеса 1 типа (HSV-1-IgG)",
    "category": "Лабораторная диагностика",
    "resident": 2300.0,
    "nonResident": 2300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к вирусу простого герпеса 2 типа (HSV-2-IgG)",
    "category": "Лабораторная диагностика",
    "resident": 2950.0,
    "nonResident": 2950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к вирусу простого герпеса 6 типа, (HHV-6-IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3150.0,
    "nonResident": 3150.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса M к вирусу простого герпеса 1 и 2 типа (HSV-1,2-IgM)",
    "category": "Лабораторная диагностика",
    "resident": 2950.0,
    "nonResident": 2950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса M к вирусу простого герпеса 2 типа (HSV-2-IgM)",
    "category": "Лабораторная диагностика",
    "resident": 3500.0,
    "nonResident": 3500.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса М к вирусу простого герпеса 1 типа (HSV-1-IgM)",
    "category": "Лабораторная диагностика",
    "resident": 2650.0,
    "nonResident": 2650.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Индекс авидности антител класса G к вирусу простого герпеса 1 и 2 типов (HSV–1,2-IgG–Avidity)",
    "category": "Лабораторная диагностика",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Индекс авидности антител класса G к вирусу простого герпеса 2 типа (HSV–2-IgG–Avidity)",
    "category": "Лабораторная диагностика",
    "resident": 3300.0,
    "nonResident": 3300.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G  к раннему антигену вируса Эпштэйна-Барр (EBV-EA IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G  к ядерному антигену вируса Эпштэйна-Барр (EBV-NA IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к капсидному антигену вируса Эпштэйна-Барр (EBV-VCA IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса М к капсидному антигену вируса Эпштэйна-Барр (EBV-VCA IgM)",
    "category": "Лабораторная диагностика",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Индекс авидности антител класса G к капсидному антигену вируса Эпштайна-Барр (EBV-VCA IgG-Avidity)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к вирусу краснухи (Rubella IgG)",
    "category": "Лабораторная диагностика",
    "resident": 2750.0,
    "nonResident": 2750.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса M к вирусу краснухи (Rubella IgM)",
    "category": "Лабораторная диагностика",
    "resident": 2950.0,
    "nonResident": 2950.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Индекс авидности антител класса G к вирусу краснухи (Rubella IgG-Avidity)",
    "category": "Лабораторная диагностика",
    "resident": 3400.0,
    "nonResident": 3400.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к Listeria monocytogenes",
    "category": "Лабораторная диагностика",
    "resident": 2350.0,
    "nonResident": 2350.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G и М к предраннему белку цитомегаловируса (CMV–IЕА–IgG/М)",
    "category": "Лабораторная диагностика",
    "resident": 3800.0,
    "nonResident": 3800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к цитомегаловирусу  (СMV IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3900.0,
    "nonResident": 3900.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса M к цитомегаловирусу  (СMV IgM)",
    "category": "Лабораторная диагностика",
    "resident": 3800.0,
    "nonResident": 3800.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Индекс авидности антител класса G к цитомегаловирусу (СMV-IgG-Avidity)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к грибам рода Candida albicans (Candida albicans IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса A к трихомонаде (Trichomonas vaginalis IgA)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к антигенам аскарид (Ascaris lumbricoides IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к антигенам аспергил (Aspergillus IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к антигенам описторхиса (a-Opistоrhide IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к антигенам токсокар (a-Toxocara IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к антигенам трихинелл (a-Trichinella IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к антигенам эхинококка однокамерного (а-Echinococcus IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к токсоплазме (Toxoplasma gondii IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  },
  {
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "service": "Антитела класса G к трихомонаде (Trichomonas vaginalis IgG)",
    "category": "Лабораторная диагностика",
    "resident": 3700.0,
    "nonResident": 3700.0,
    "updatedAt": "2026"
  }
];

export const partnerPriceList: Record<string, PriceRow[]> = Object.fromEntries(
  partners.map((p) => [p.id, priceRows.filter((r) => r.partnerId === p.id)])
);

export const partnerHistory: Record<string, HistoryPoint[]> = {
  "clinic-2": [
    {
      "date": "01.2025",
      "resident": 12000,
      "nonResident": 12000
    },
    {
      "date": "01.2026",
      "resident": 16500,
      "nonResident": 16500
    }
  ]
};

export const priceDocuments: PriceDocument[] = [
  {
    "id": "doc-001",
    "filename": "Клиника_1_2026.pdf",
    "partnerId": "clinic-1",
    "uploadedAt": "2026",
    "status": "done",
    "itemsTotal": 1662,
    "itemsMatched": 1529
  },
  {
    "id": "doc-002",
    "filename": "Клиника_1_прайс_2024.docx",
    "partnerId": "clinic-1",
    "uploadedAt": "2024",
    "status": "done",
    "itemsTotal": 1738,
    "itemsMatched": 1598
  },
  {
    "id": "doc-003",
    "filename": "Клиника_2_прайс_2025_год.PDF",
    "partnerId": "clinic-2",
    "uploadedAt": "2025",
    "status": "done",
    "itemsTotal": 637,
    "itemsMatched": 586
  },
  {
    "id": "doc-004",
    "filename": "Клиника_2_прайс_2026.pdf",
    "partnerId": "clinic-2",
    "uploadedAt": "2026",
    "status": "done",
    "itemsTotal": 760,
    "itemsMatched": 699
  },
  {
    "id": "doc-005",
    "filename": "Клиника_3_прайс_2026.PDF",
    "partnerId": "clinic-3",
    "uploadedAt": "2026",
    "status": "done",
    "itemsTotal": 52,
    "itemsMatched": 47
  },
  {
    "id": "doc-006",
    "filename": "Клиника_4_прайс_2026.pdf",
    "partnerId": "clinic-4",
    "uploadedAt": "2026",
    "status": "done",
    "itemsTotal": 363,
    "itemsMatched": 333
  },
  {
    "id": "doc-007",
    "filename": "Клиника_5_прайс_2025.pdf",
    "partnerId": "clinic-5",
    "uploadedAt": "2025",
    "status": "error",
    "itemsTotal": 0,
    "itemsMatched": 0
  },
  {
    "id": "doc-008",
    "filename": "Клиника_6_прайс_2026.xlsx",
    "partnerId": "clinic-6",
    "uploadedAt": "2026",
    "status": "done",
    "itemsTotal": 3749,
    "itemsMatched": 3449
  },
  {
    "id": "doc-009",
    "filename": "Клиника_7_Прайс_2026.xls",
    "partnerId": "clinic-7",
    "uploadedAt": "2026",
    "status": "done",
    "itemsTotal": 2877,
    "itemsMatched": 2646
  },
  {
    "id": "doc-010",
    "filename": "Клиника_8_2026.xlsx",
    "partnerId": "clinic-8",
    "uploadedAt": "2026",
    "status": "done",
    "itemsTotal": 1790,
    "itemsMatched": 1646
  }
];

export const verificationQueue: VerificationItem[] = [
  {
    "id": "v-001",
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "document": "Клиника_1_2026.pdf",
    "rawTitle": "Консультативный прием врача д.м.н",
    "rawPrice": "16600 ₸",
    "candidates": [
      {
        "serviceId": "S-0001-A",
        "title": "Консультативный прием врача д.м.н",
        "code": "SVC-0001",
        "category": "Консультации",
        "score": 0.94
      },
      {
        "serviceId": "S-0001-B",
        "title": "Консультативный прием врача д.м.н (стандарт)",
        "code": "SVC-0001-B",
        "category": "Консультации",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-002",
    "partnerId": "clinic-1",
    "partnerName": "Клиника №1",
    "document": "Клиника_1_2026.pdf",
    "rawTitle": "и 1.2 Консультативный прием врача к.м.н",
    "rawPrice": "16600 ₸",
    "candidates": [
      {
        "serviceId": "S-0002-A",
        "title": "и 1.2 Консультативный прием врача к.м.н",
        "code": "SVC-0002",
        "category": "Консультации",
        "score": 0.94
      },
      {
        "serviceId": "S-0002-B",
        "title": "и 1.2 Консультативный прием (стандарт)",
        "code": "SVC-0002-B",
        "category": "Консультации",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-003",
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "document": "Клиника_2_прайс_2026.pdf",
    "rawTitle": "Прием врача повторный прием 8 800 II",
    "rawPrice": "22000 ₸",
    "candidates": [
      {
        "serviceId": "S-0003-A",
        "title": "Прием врача повторный прием 8 800 II",
        "code": "SVC-0003",
        "category": "Консультации",
        "score": 0.94
      },
      {
        "serviceId": "S-0003-B",
        "title": "Прием врача повторный прием (стандарт)",
        "code": "SVC-0003-B",
        "category": "Консультации",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-004",
    "partnerId": "clinic-2",
    "partnerName": "Клиника №2",
    "document": "Клиника_2_прайс_2026.pdf",
    "rawTitle": "без самостоятельного оказания медицинской услуги",
    "rawPrice": "53000 ₸",
    "candidates": [
      {
        "serviceId": "S-0004-A",
        "title": "без самостоятельного оказания медицинской услуги",
        "code": "SVC-0004",
        "category": "Прочие услуги",
        "score": 0.94
      },
      {
        "serviceId": "S-0004-B",
        "title": "без самостоятельного оказания медицинской (стандарт)",
        "code": "SVC-0004-B",
        "category": "Прочие услуги",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-005",
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "document": "Клиника_3_прайс_2026.PDF",
    "rawTitle": "Определение группы крови по системе АВ(0) и 11955. кровь с ЭДТА",
    "rawPrice": "2320 ₸",
    "candidates": [
      {
        "serviceId": "S-0005-A",
        "title": "Определение группы крови по системе АВ(0) и 11955. кровь с ЭДТА",
        "code": "SVC-0005",
        "category": "Лабораторная диагностика",
        "score": 0.94
      },
      {
        "serviceId": "S-0005-B",
        "title": "Определение группы крови по (стандарт)",
        "code": "SVC-0005-B",
        "category": "Лабораторная диагностика",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-006",
    "partnerId": "clinic-3",
    "partnerName": "Клиника №3",
    "document": "Клиника_3_прайс_2026.PDF",
    "rawTitle": "Определение антиэритроцитарных антител в В06.670.012 кровь с ЭДТА",
    "rawPrice": "6780 ₸",
    "candidates": [
      {
        "serviceId": "S-0006-A",
        "title": "Определение антиэритроцитарных антител в В06.670.012 кровь с ЭДТА",
        "code": "SVC-0006",
        "category": "Лабораторная диагностика",
        "score": 0.94
      },
      {
        "serviceId": "S-0006-B",
        "title": "Определение антиэритроцитарных антител в (стандарт)",
        "code": "SVC-0006-B",
        "category": "Лабораторная диагностика",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-007",
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "document": "Клиника_4_прайс_2026.pdf",
    "rawTitle": "Выездная консультация врача до 15 пациентов в день пакет",
    "rawPrice": "186400 ₸",
    "candidates": [
      {
        "serviceId": "S-0007-A",
        "title": "Выездная консультация врача до 15 пациентов в день пакет",
        "code": "SVC-0007",
        "category": "Консультации",
        "score": 0.94
      },
      {
        "serviceId": "S-0007-B",
        "title": "Выездная консультация врача до (стандарт)",
        "code": "SVC-0007-B",
        "category": "Консультации",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-008",
    "partnerId": "clinic-4",
    "partnerName": "Клиника №4",
    "document": "Клиника_4_прайс_2026.pdf",
    "rawTitle": "Выездная консультация врача час",
    "rawPrice": "23600 ₸",
    "candidates": [
      {
        "serviceId": "S-0008-A",
        "title": "Выездная консультация врача час",
        "code": "SVC-0008",
        "category": "Консультации",
        "score": 0.94
      },
      {
        "serviceId": "S-0008-B",
        "title": "Выездная консультация врача час (стандарт)",
        "code": "SVC-0008-B",
        "category": "Консультации",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-009",
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "document": "Клиника_6_прайс_2026.xlsx",
    "rawTitle": "Ведение больного в стационаре 1 койко-день",
    "rawPrice": "1000 ₸",
    "candidates": [
      {
        "serviceId": "S-0009-A",
        "title": "Ведение больного в стационаре 1 койко-день",
        "code": "SVC-0009",
        "category": "Стационар",
        "score": 0.94
      },
      {
        "serviceId": "S-0009-B",
        "title": "Ведение больного в стационаре (стандарт)",
        "code": "SVC-0009-B",
        "category": "Стационар",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-010",
    "partnerId": "clinic-6",
    "partnerName": "Клиника №6",
    "document": "Клиника_6_прайс_2026.xlsx",
    "rawTitle": "Пребывание лиц, находящихся совместно с пациентом по уходу 1 койко-день (без питания)",
    "rawPrice": "1000 ₸",
    "candidates": [
      {
        "serviceId": "S-0010-A",
        "title": "Пребывание лиц, находящихся совместно с пациентом по уходу 1 койко-день (без пит",
        "code": "SVC-0010",
        "category": "Прочие услуги",
        "score": 0.94
      },
      {
        "serviceId": "S-0010-B",
        "title": "Пребывание лиц, находящихся совместно (стандарт)",
        "code": "SVC-0010-B",
        "category": "Прочие услуги",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-011",
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "document": "Клиника_7_Прайс_2026.xls",
    "rawTitle": "Первичный консультативный прием врача",
    "rawPrice": "12600 ₸",
    "candidates": [
      {
        "serviceId": "S-0011-A",
        "title": "Первичный консультативный прием врача",
        "code": "SVC-0011",
        "category": "Консультации",
        "score": 0.94
      },
      {
        "serviceId": "S-0011-B",
        "title": "Первичный консультативный прием врача (стандарт)",
        "code": "SVC-0011-B",
        "category": "Консультации",
        "score": 0.78
      }
    ]
  },
  {
    "id": "v-012",
    "partnerId": "clinic-7",
    "partnerName": "Клиника №7",
    "document": "Клиника_7_Прайс_2026.xls",
    "rawTitle": "Первичный консультативный прием врача высшей категории",
    "rawPrice": "14700 ₸",
    "candidates": [
      {
        "serviceId": "S-0012-A",
        "title": "Первичный консультативный прием врача высшей категории",
        "code": "SVC-0012",
        "category": "Консультации",
        "score": 0.94
      },
      {
        "serviceId": "S-0012-B",
        "title": "Первичный консультативный прием врача (стандарт)",
        "code": "SVC-0012-B",
        "category": "Консультации",
        "score": 0.78
      }
    ]
  }
];

export const cities = ["Все города", ...Array.from(new Set(partners.map((p) => p.city)))] as const;
export const priceTypes = ["Любая", "Резидент", "Не-резидент"] as const;

export function formatBYN(value: number) {
  return `${Math.round(value).toLocaleString("ru-RU")} ₸`;
}

export function getPartner(id: string) {
  return partners.find((p) => p.id === id);
}
