/**
 * Утилиты для экспорта табличных данных в форматы CSV и Excel (XLSX/XLS).
 */

interface ExportItem {
  service_name_raw?: string;
  price_resident_kzt?: number | null;
  match_score?: number;
  partner_name?: string;
  [key: string]: any;
}

/**
 * Скачивание сгенерированного файла в браузере
 */
function downloadFile(content: BlobPart, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Экспорт списка позиций в формат CSV (с поддержкой UTF-8 BOM для корректного открытия в Excel)
 */
export function exportToCSV(items: ExportItem[], filenamePrefix: string = "export") {
  if (!items || items.length === 0) {
    alert("Нет данных для экспорта");
    return;
  }

  const headers = ["Наименование услуги", "Цена (BYN/KZT)", "Партнёр/Клиника", "Точность совпадения"];
  const rows = items.map((item) => {
    const name = `"${(item.service_name_raw || "").replace(/"/g, '""')}"`;
    const price = item.price_resident_kzt != null ? item.price_resident_kzt : "";
    const partner = `"${(item.partner_name || "").replace(/"/g, '""')}"`;
    const score = item.match_score != null ? `${Math.round(item.match_score * 100)}%` : "";
    return [name, price, partner, score].join(";");
  });

  // \uFEFF добавляет UTF-8 BOM для корректного отображения кириллицы в Excel
  const csvContent = "\uFEFF" + [headers.join(";"), ...rows].join("\r\n");
  const dateStr = new Date().toISOString().slice(0, 10);
  downloadFile(csvContent, `${filenamePrefix}_${dateStr}.csv`, "text/csv;charset=utf-8;");
}

/**
 * Экспорт списка позиций в формат Excel (XLSX / XLS)
 */
export function exportToXLSX(items: ExportItem[], filenamePrefix: string = "export") {
  if (!items || items.length === 0) {
    alert("Нет данных для экспорта");
    return;
  }

  const headers = ["Наименование услуги", "Цена", "Партнёр / Клиника", "Точность совпадения"];
  const rowsHtml = items
    .map((item) => {
      const name = item.service_name_raw || "";
      const price = item.price_resident_kzt != null ? item.price_resident_kzt : "—";
      const partner = item.partner_name || "";
      const score = item.match_score != null ? `${Math.round(item.match_score * 100)}%` : "—";
      return `<tr><td>${name}</td><td>${price}</td><td>${partner}</td><td>${score}</td></tr>`;
    })
    .join("");

  const excelTable = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8" />
      <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Прайс-лист</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
      <style>
        th { background-color: #2d6a4f; color: white; font-weight: bold; padding: 8px; border: 1px solid #ccc; }
        td { padding: 6px; border: 1px solid #ccc; }
      </style>
    </head>
    <body>
      <table>
        <thead>
          <tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </body>
    </html>
  `;

  const dateStr = new Date().toISOString().slice(0, 10);
  downloadFile(excelTable, `${filenamePrefix}_${dateStr}.xls`, "application/vnd.ms-excel;charset=utf-8;");
}
