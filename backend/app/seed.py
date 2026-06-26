"""Seed the services catalog from XLSX or JSON."""
from __future__ import annotations

import argparse
import json
from pathlib import Path

from .db import init_db, session_scope
from .models import Service


def seed_from_json(path: Path) -> int:
    data = json.loads(path.read_text(encoding="utf-8"))
    n = 0
    with session_scope() as db:
        for row in data:
            db.add(
                Service(
                    service_name=row["service_name"],
                    category=row.get("category", ""),
                    synonyms=row.get("synonyms", []),
                )
            )
            n += 1
    return n


def seed_from_xlsx(path: Path) -> int:
    from python_calamine import CalamineWorkbook

    wb = CalamineWorkbook.from_path(str(path))
    sheet = wb.get_sheet_by_name(wb.sheet_names[0]).to_python()
    if not sheet:
        return 0
    header = [str(c).strip().lower() for c in sheet[0]]
    name_i = header.index("service_name") if "service_name" in header else 0
    cat_i = header.index("category") if "category" in header else None
    syn_i = header.index("synonyms") if "synonyms" in header else None
    n = 0
    with session_scope() as db:
        for row in sheet[1:]:
            if not row or row[name_i] is None:
                continue
            syns = []
            if syn_i is not None and row[syn_i]:
                syns = [s.strip() for s in str(row[syn_i]).split("|") if s.strip()]
            db.add(
                Service(
                    service_name=str(row[name_i]),
                    category=str(row[cat_i]) if cat_i is not None and row[cat_i] else "",
                    synonyms=syns,
                )
            )
            n += 1
    return n


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--catalog", required=True, help="Path to .xlsx or .json catalog")
    args = ap.parse_args()
    init_db()
    p = Path(args.catalog)
    n = seed_from_xlsx(p) if p.suffix.lower() in (".xlsx", ".xls") else seed_from_json(p)
    print(f"Loaded {n} services from {p}")


if __name__ == "__main__":
    main()
