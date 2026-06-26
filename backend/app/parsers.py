"""Document parsers: PDF (text + OCR fallback), DOCX, XLSX/XLS."""
from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List, Optional

PRICE_RE = re.compile(r"(\d[\d\s\u00a0]{0,12}(?:[.,]\d{1,2})?)\s*(тг|тенге|kzt|₸)?", re.IGNORECASE)


@dataclass
class ExtractedRow:
    service_name_raw: str
    price_resident_kzt: Optional[float] = None
    price_nonresident_kzt: Optional[float] = None
    service_code_source: Optional[str] = None
    currency_original: str = "KZT"


def _to_number(s: str) -> Optional[float]:
    s = s.strip().replace("\u00a0", "").replace(" ", "")
    if not s:
        return None
    s = s.replace(",", ".")
    try:
        return float(s)
    except ValueError:
        return None


def _split_price_columns(cells: List[str]) -> tuple[Optional[float], Optional[float]]:
    """Heuristic: from a row of cells, pick last 1–2 numeric cells as prices."""
    nums: List[float] = []
    for c in cells:
        n = _to_number(c)
        if n is not None and n > 0:
            nums.append(n)
    if not nums:
        return None, None
    if len(nums) == 1:
        return nums[0], None
    # last two cells, smaller = resident, larger = non-resident
    a, b = nums[-2], nums[-1]
    return (min(a, b), max(a, b))


# ---------- PDF (text + tables) ----------

def parse_pdf(path: Path) -> List[ExtractedRow]:
    rows: List[ExtractedRow] = []
    try:
        import pdfplumber
    except ImportError:
        return rows

    try:
        with pdfplumber.open(str(path)) as pdf:
            for page in pdf.pages:
                tables = page.extract_tables() or []
                for table in tables:
                    for r in table:
                        if not r:
                            continue
                        cells = [(c or "").strip() for c in r]
                        # name = first non-numeric, longish cell
                        name = next(
                            (c for c in cells if c and _to_number(c) is None and len(c) > 4),
                            None,
                        )
                        if not name:
                            continue
                        res, non = _split_price_columns(cells)
                        if res or non:
                            rows.append(
                                ExtractedRow(
                                    service_name_raw=name, price_resident_kzt=res,
                                    price_nonresident_kzt=non,
                                )
                            )

                if not tables:
                    # Text fallback: "Название ... 1 234,00"
                    text = page.extract_text() or ""
                    for line in text.splitlines():
                        line = line.strip()
                        m = PRICE_RE.search(line)
                        if not m:
                            continue
                        price = _to_number(m.group(1))
                        if not price or price < 10:
                            continue
                        name = line[: m.start()].strip(" .-—:")
                        if len(name) < 5:
                            continue
                        rows.append(
                            ExtractedRow(service_name_raw=name, price_resident_kzt=price)
                        )
    except Exception:
        return rows
    return rows


def parse_pdf_ocr(path: Path) -> List[ExtractedRow]:
    """OCR fallback for scanned PDFs (requires tesseract + pdf2image/poppler)."""
    rows: List[ExtractedRow] = []
    try:
        from pdf2image import convert_from_path
        import pytesseract
    except ImportError:
        return rows
    try:
        images = convert_from_path(str(path), dpi=200)
    except Exception:
        return rows
    for img in images:
        text = pytesseract.image_to_string(img, lang="rus+eng")
        for line in text.splitlines():
            line = line.strip()
            m = PRICE_RE.search(line)
            if not m:
                continue
            price = _to_number(m.group(1))
            if not price or price < 10:
                continue
            name = line[: m.start()].strip(" .-—:")
            if len(name) < 5:
                continue
            rows.append(ExtractedRow(service_name_raw=name, price_resident_kzt=price))
    return rows


# ---------- DOCX ----------

def parse_docx(path: Path) -> List[ExtractedRow]:
    rows: List[ExtractedRow] = []
    try:
        from docx import Document
    except ImportError:
        return rows
    try:
        doc = Document(str(path))
    except Exception:
        return rows
    for table in doc.tables:
        for row in table.rows:
            cells = [c.text.strip() for c in row.cells]
            name = next(
                (c for c in cells if c and _to_number(c) is None and len(c) > 4),
                None,
            )
            if not name:
                continue
            res, non = _split_price_columns(cells)
            if res or non:
                rows.append(
                    ExtractedRow(
                        service_name_raw=name, price_resident_kzt=res,
                        price_nonresident_kzt=non,
                    )
                )
    return rows


# ---------- XLSX / XLS ----------

def parse_xlsx(path: Path) -> List[ExtractedRow]:
    rows: List[ExtractedRow] = []
    try:
        from python_calamine import CalamineWorkbook
    except ImportError:
        return rows
    try:
        wb = CalamineWorkbook.from_path(str(path))
    except Exception:
        return rows
    for sheet_name in wb.sheet_names:
        try:
            data = wb.get_sheet_by_name(sheet_name).to_python()
        except Exception:
            continue
        for r in data:
            if not r:
                continue
            cells = [str(c).strip() if c is not None else "" for c in r]
            name = next(
                (c for c in cells if c and _to_number(c) is None and len(c) > 4),
                None,
            )
            if not name:
                continue
            res, non = _split_price_columns(cells)
            if res or non:
                rows.append(
                    ExtractedRow(
                        service_name_raw=name, price_resident_kzt=res,
                        price_nonresident_kzt=non,
                    )
                )
    return rows


# ---------- Dispatcher ----------

def parse_file(path: Path) -> tuple[str, List[ExtractedRow]]:
    """Return (file_type, rows)."""
    ext = path.suffix.lower().lstrip(".")
    if ext == "pdf":
        rows = parse_pdf(path)
        if not rows:
            rows = parse_pdf_ocr(path)
            return "scan", rows
        return "pdf", rows
    if ext == "docx":
        return "docx", parse_docx(path)
    if ext in ("xlsx", "xls"):
        return ext, parse_xlsx(path)
    return ext or "unknown", []


def iter_archive(zip_path: Path, extract_to: Path) -> Iterable[Path]:
    import zipfile

    extract_to.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(zip_path) as zf:
        zf.extractall(extract_to)
    for p in extract_to.rglob("*"):
        if p.is_file() and p.suffix.lower().lstrip(".") in {"pdf", "docx", "xlsx", "xls"}:
            yield p
