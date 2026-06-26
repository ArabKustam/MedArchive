"""Shared FastAPI dependencies."""
from __future__ import annotations

from dataclasses import dataclass
from math import ceil
from typing import Sequence, TypeVar

from fastapi import Query
from sqlalchemy import Select, func, select
from sqlalchemy.orm import Session

from .schemas import Page

T = TypeVar("T")


@dataclass
class Pagination:
    page: int
    page_size: int

    @property
    def offset(self) -> int:
        return (self.page - 1) * self.page_size

    @property
    def limit(self) -> int:
        return self.page_size


def pagination_params(
    page: int = Query(1, ge=1, description="Номер страницы (с 1)"),
    page_size: int = Query(25, ge=1, le=200, description="Размер страницы (1–200)"),
) -> Pagination:
    return Pagination(page=page, page_size=page_size)


def paginate(
    db: Session,
    stmt: Select,
    pagination: Pagination,
    schema: type[T],
) -> Page[T]:
    total = db.scalar(select(func.count()).select_from(stmt.subquery())) or 0
    rows: Sequence = db.execute(
        stmt.offset(pagination.offset).limit(pagination.limit)
    ).scalars().all()
    items = [schema.model_validate(r) for r in rows]
    return Page[T](
        items=items,
        page=pagination.page,
        page_size=pagination.page_size,
        total=total,
        pages=max(1, ceil(total / pagination.page_size)) if total else 0,
    )
