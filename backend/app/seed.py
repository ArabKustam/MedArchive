"""Seed the services catalog from XLSX or JSON (supporting official Справочник услуг.xlsx)."""
from __future__ import annotations

import argparse
import json
from pathlib import Path

from .db import init_db, session_scope
from .models import Service, PriceItem, PriceHistory, PriceDocument


def seed_from_official_catalog(path: Path) -> int:
    from python_calamine import CalamineWorkbook

    wb = CalamineWorkbook.from_path(str(path))
    sheet = wb.get_sheet_by_name(wb.sheet_names[0]).to_python()
    if not sheet:
        return 0

    header = [str(c).strip().lower() for c in sheet[0]]
    
    # Try finding columns for official catalog
    name_i = -1
    cat_i = -1
    code_i = -1

    for i, col in enumerate(header):
        if col in ("name_ru", "service_name", "наименование", "услуга"):
            name_i = i
        elif col in ("специальность", "category", "категория"):
            cat_i = i
        elif col in ("tarificatrcode", "code", "код"):
            code_i = i

    if name_i == -1:
        name_i = 3 if len(header) > 3 else 0

    n = 0
    with session_scope() as db:
        # Clear existing default seed services if any
        db.query(Service).delete()
        
        added_names = set()
        for row in sheet[1:]:
            if not row or name_i >= len(row) or row[name_i] is None:
                continue
            name = str(row[name_i]).strip()
            if not name or name in added_names:
                continue
            added_names.add(name)

            category = str(row[cat_i]).strip() if cat_i >= 0 and cat_i < len(row) and row[cat_i] is not None else ""
            code = str(row[code_i]).strip() if code_i >= 0 and code_i < len(row) and row[code_i] is not None else ""

            syns = []
            if code and code != "None":
                syns.append(code)

            db.add(
                Service(
                    service_name=name,
                    category=category,
                    synonyms=syns,
                    is_active=True,
                )
            )
            n += 1
    return n


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--catalog", default="../Справочник услуг.xlsx", help="Path to .xlsx or .json catalog")
    args = ap.parse_args()
    init_db()
    p = Path(args.catalog)
    if not p.exists():
        p = Path(__file__).resolve().parents[2] / "Справочник услуг.xlsx"
    n = seed_from_official_catalog(p)
    print(f"Loaded {n} services from {p}")


if __name__ == "__main__":
    main()
