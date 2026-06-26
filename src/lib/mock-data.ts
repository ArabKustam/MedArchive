export type Partner = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  status: "active" | "paused";
  apiVersion: string;
  docsCount: number;
  servicesCount: number;
  lastUpload: string;
};

export type PriceRow = {
  partnerId: string;
  partnerName: string;
  service: string;
  category: string;
  resident: number;
  nonResident: number;
  updatedAt: string;
};

export type HistoryPoint = {
  date: string;
  resident: number;
  nonResident: number;
};

export type PriceDocument = {
  id: string;
  filename: string;
  partnerId: string;
  uploadedAt: string;
  status: "queued" | "processing" | "done" | "error";
  itemsTotal: number;
  itemsMatched: number;
};

export type VerificationCandidate = {
  serviceId: string;
  title: string;
  code: string;
  category: string;
  score: number;
};

export type VerificationItem = {
  id: string;
  partnerId: string;
  partnerName: string;
  document: string;
  rawTitle: string;
  rawPrice: string;
  candidates: VerificationCandidate[];
};

export const partners: Partner[] = [
  {
    id: "lode",
    name: "МЦ «Лодэ»",
    city: "Минск",
    address: "пр. Независимости, 58",
    phone: "+375 17 388-55-55",
    email: "info@lode.by",
    status: "active",
    apiVersion: "v2",
    docsCount: 14,
    servicesCount: 2438,
    lastUpload: "Сегодня, 10:20",
  },
  {
    id: "nordin",
    name: "Нордин",
    city: "Минск",
    address: "ул. Сурганова, 47Б",
    phone: "+375 17 338-88-88",
    email: "office@nordin.by",
    status: "active",
    apiVersion: "v2",
    docsCount: 9,
    servicesCount: 1812,
    lastUpload: "12.05.2024",
  },
  {
    id: "ecomed",
    name: "Экомедсервис",
    city: "Минск",
    address: "ул. Толстого, 4",
    phone: "+375 17 207-74-74",
    email: "info@ecomed.by",
    status: "active",
    apiVersion: "v1",
    docsCount: 6,
    servicesCount: 1104,
    lastUpload: "08.05.2024",
  },
  {
    id: "gemotest",
    name: "Лаборатория Гемотест",
    city: "Гомель",
    address: "ул. Советская, 121",
    phone: "+375 232 50-50-50",
    email: "gomel@gemotest.by",
    status: "paused",
    apiVersion: "v1",
    docsCount: 3,
    servicesCount: 642,
    lastUpload: "21.04.2024",
  },
];

export const priceRows: PriceRow[] = [
  {
    partnerId: "lode",
    partnerName: "МЦ «Лодэ»",
    service: "Общий анализ крови с лейкоцитарной формулой",
    category: "Лабораторная диагностика",
    resident: 18.4,
    nonResident: 42.1,
    updatedAt: "Сегодня, 10:20",
  },
  {
    partnerId: "nordin",
    partnerName: "Нордин",
    service: "Приём врача-терапевта (первичный)",
    category: "Консультации",
    resident: 45.0,
    nonResident: 98.0,
    updatedAt: "12.05.2024",
  },
  {
    partnerId: "lode",
    partnerName: "МЦ «Лодэ»",
    service: "МРТ головного мозга без контраста",
    category: "Лучевая диагностика",
    resident: 168.0,
    nonResident: 342.0,
    updatedAt: "Сегодня, 10:20",
  },
  {
    partnerId: "ecomed",
    partnerName: "Экомедсервис",
    service: "МРТ головного мозга без контраста",
    category: "Лучевая диагностика",
    resident: 152.0,
    nonResident: 318.0,
    updatedAt: "08.05.2024",
  },
  {
    partnerId: "nordin",
    partnerName: "Нордин",
    service: "УЗИ органов брюшной полости",
    category: "Ультразвуковая диагностика",
    resident: 62.0,
    nonResident: 134.0,
    updatedAt: "12.05.2024",
  },
  {
    partnerId: "gemotest",
    partnerName: "Лаборатория Гемотест",
    service: "Анализ крови на ХГЧ (срочный)",
    category: "Лабораторная диагностика",
    resident: 28.5,
    nonResident: 58.0,
    updatedAt: "21.04.2024",
  },
  {
    partnerId: "lode",
    partnerName: "МЦ «Лодэ»",
    service: "Консультация кардиолога высш. категории",
    category: "Консультации",
    resident: 58.0,
    nonResident: 120.0,
    updatedAt: "Сегодня, 10:20",
  },
];

export const partnerPriceList: Record<string, PriceRow[]> = {
  lode: priceRows.filter((r) => r.partnerId === "lode"),
  nordin: priceRows.filter((r) => r.partnerId === "nordin"),
  ecomed: priceRows.filter((r) => r.partnerId === "ecomed"),
  gemotest: priceRows.filter((r) => r.partnerId === "gemotest"),
};

export const partnerHistory: Record<string, HistoryPoint[]> = {
  lode: [
    { date: "12.2023", resident: 162, nonResident: 320 },
    { date: "01.2024", resident: 162, nonResident: 320 },
    { date: "02.2024", resident: 165, nonResident: 328 },
    { date: "03.2024", resident: 165, nonResident: 332 },
    { date: "04.2024", resident: 168, nonResident: 338 },
    { date: "05.2024", resident: 168, nonResident: 342 },
  ],
  nordin: [
    { date: "12.2023", resident: 42, nonResident: 92 },
    { date: "01.2024", resident: 42, nonResident: 92 },
    { date: "02.2024", resident: 43, nonResident: 94 },
    { date: "03.2024", resident: 44, nonResident: 96 },
    { date: "04.2024", resident: 45, nonResident: 96 },
    { date: "05.2024", resident: 45, nonResident: 98 },
  ],
  ecomed: [
    { date: "12.2023", resident: 148, nonResident: 310 },
    { date: "01.2024", resident: 148, nonResident: 310 },
    { date: "02.2024", resident: 150, nonResident: 314 },
    { date: "03.2024", resident: 150, nonResident: 314 },
    { date: "04.2024", resident: 152, nonResident: 318 },
    { date: "05.2024", resident: 152, nonResident: 318 },
  ],
  gemotest: [
    { date: "12.2023", resident: 26, nonResident: 54 },
    { date: "01.2024", resident: 27, nonResident: 56 },
    { date: "02.2024", resident: 27, nonResident: 56 },
    { date: "03.2024", resident: 28, nonResident: 58 },
    { date: "04.2024", resident: 28.5, nonResident: 58 },
    { date: "05.2024", resident: 28.5, nonResident: 58 },
  ],
};

export const priceDocuments: PriceDocument[] = [
  {
    id: "doc-001",
    filename: "lode_main_v2.xlsx",
    partnerId: "lode",
    uploadedAt: "Сегодня, 10:18",
    status: "done",
    itemsTotal: 2438,
    itemsMatched: 2426,
  },
  {
    id: "doc-002",
    filename: "nordin_prices_2024_05.pdf",
    partnerId: "nordin",
    uploadedAt: "12.05.2024 14:02",
    status: "done",
    itemsTotal: 1812,
    itemsMatched: 1798,
  },
  {
    id: "doc-003",
    filename: "ecomed_full.docx",
    partnerId: "ecomed",
    uploadedAt: "08.05.2024 09:31",
    status: "processing",
    itemsTotal: 1104,
    itemsMatched: 920,
  },
  {
    id: "doc-004",
    filename: "gemotest_lab_april.pdf",
    partnerId: "gemotest",
    uploadedAt: "Сегодня, 09:45",
    status: "queued",
    itemsTotal: 0,
    itemsMatched: 0,
  },
  {
    id: "doc-005",
    filename: "alfa-med_archive.zip",
    partnerId: "lode",
    uploadedAt: "Вчера, 18:14",
    status: "error",
    itemsTotal: 0,
    itemsMatched: 0,
  },
];

export const verificationQueue: VerificationItem[] = [
  {
    id: "v-001",
    partnerId: "lode",
    partnerName: "МЦ «Лодэ»",
    document: "lode_main_v2.xlsx",
    rawTitle: "МРТ коленного сустава с контрастированием (высокопольный)",
    rawPrice: "320.00 BYN",
    candidates: [
      {
        serviceId: "MRI-KN-01",
        title: "МРТ коленного сустава с контрастированием",
        code: "MRI-KN-01",
        category: "Лучевая диагностика",
        score: 0.98,
      },
      {
        serviceId: "MRI-JT-00",
        title: "МРТ суставов (одна анатомическая область)",
        code: "MRI-JT-00",
        category: "Лучевая диагностика",
        score: 0.82,
      },
      {
        serviceId: "MRI-KN-00",
        title: "МРТ коленного сустава без контраста",
        code: "MRI-KN-00",
        category: "Лучевая диагностика",
        score: 0.74,
      },
    ],
  },
  {
    id: "v-002",
    partnerId: "nordin",
    partnerName: "Нордин",
    document: "nordin_prices_2024_05.pdf",
    rawTitle: "Консультация врача-кардиолога высш. кат. (повторная)",
    rawPrice: "62.00 BYN",
    candidates: [
      {
        serviceId: "CONS-CARD-02",
        title: "Приём кардиолога высшей категории (повторный)",
        code: "CONS-CARD-02",
        category: "Консультации",
        score: 0.94,
      },
      {
        serviceId: "CONS-CARD-01",
        title: "Приём кардиолога высшей категории (первичный)",
        code: "CONS-CARD-01",
        category: "Консультации",
        score: 0.81,
      },
    ],
  },
  {
    id: "v-003",
    partnerId: "gemotest",
    partnerName: "Лаборатория Гемотест",
    document: "gemotest_lab_april.pdf",
    rawTitle: "Анализ ХГЧ срочн. экспресс-метод",
    rawPrice: "29.50 BYN",
    candidates: [
      {
        serviceId: "LAB-HCG-S",
        title: "Анализ крови на ХГЧ (срочный)",
        code: "LAB-HCG-S",
        category: "Лабораторная диагностика",
        score: 0.97,
      },
      {
        serviceId: "LAB-HCG",
        title: "Анализ крови на ХГЧ",
        code: "LAB-HCG",
        category: "Лабораторная диагностика",
        score: 0.83,
      },
    ],
  },
  {
    id: "v-004",
    partnerId: "ecomed",
    partnerName: "Экомедсервис",
    document: "ecomed_full.docx",
    rawTitle: "ЭКГ с расшифровкой врачом",
    rawPrice: "18.00 BYN",
    candidates: [
      {
        serviceId: "ECG-01",
        title: "ЭКГ с расшифровкой",
        code: "ECG-01",
        category: "Функциональная диагностика",
        score: 0.99,
      },
    ],
  },
];

export const cities = ["Все города", "Минск", "Гомель", "Брест", "Витебск"] as const;
export const priceTypes = ["Любая", "Резидент", "Не-резидент"] as const;

export function formatBYN(value: number) {
  return `${value.toFixed(2)} BYN`;
}

export function getPartner(id: string) {
  return partners.find((p) => p.id === id);
}
