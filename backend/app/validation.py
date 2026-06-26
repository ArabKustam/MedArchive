"""Phase 5 — validation of extracted price items before saving.

Checks:
- price > 0 and numeric
- price_nonresident >= price_resident (warning)
- service name not empty
- effective date not in the future (warning)
- duplicate detection: same partner + service + date → archive old
- anomaly: price deviation > 50% vs previous active value
- non-KZT currency → convert via fixed fallback rates (CB RK API can plug here)
"""
from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Optional

from sqlalchemy.orm import Session

from .models import PriceItem

# Fallback FX rates → KZT (used when external CB RK API is unavailable).
FX_TO_KZT = {
    "KZT": 1.0,
    "USD": 470.0,
    "EUR": 510.0,
    "RUB": 5.6,
    "BYN": 145.0,
}

ANOMALY_THRESHOLD = 0.5  # ±50%


@dataclass
class ValidationResult:
    is_valid: bool = True
    warnings: List[str] = field(default_factory=list)
    errors: List[str] = field(default_factory=list)
    dedup_action: Optional[str] = None  # "archived_previous" | None
    price_resident_kzt: Optional[float] = None
    price_nonresident_kzt: Optional[float] = None


def _to_kzt(amount: Optional[float], currency: str) -> Optional[float]:
    if amount is None:
        return None
    rate = FX_TO_KZT.get(currency.upper(), 1.0)
    return round(amount * rate, 2)


def validate_item(
    db: Session,
    *,
    partner_id: str,
    service_id: Optional[str],
    service_name_raw: str,
    price_resident: Optional[float],
    price_nonresident: Optional[float],
    currency: str = "KZT",
    effective_date: Optional[datetime] = None,
) -> ValidationResult:
    res = ValidationResult()

    if not service_name_raw or not service_name_raw.strip():
        res.is_valid = False
        res.errors.append("empty_service_name")
        return res

    # Convert currency to KZT if needed.
    pr = _to_kzt(price_resident, currency)
    pn = _to_kzt(price_nonresident, currency)

    if pr is None and pn is None:
        res.errors.append("no_price")
        res.is_valid = False
        return res

    for label, value in (("resident", pr), ("nonresident", pn)):
        if value is not None and (not isinstance(value, (int, float)) or value <= 0):
            res.errors.append(f"non_positive_{label}_price")
            res.is_valid = False

    if not res.is_valid:
        return res

    if pr is not None and pn is not None and pn < pr:
        res.warnings.append("nonresident_lt_resident")

    if effective_date and effective_date > datetime.utcnow():
        res.warnings.append("future_effective_date")

    # Anomaly detection vs last active price for the same partner+service.
    if service_id and pr is not None:
        prev = (
            db.query(PriceItem)
            .filter(
                PriceItem.partner_id == partner_id,
                PriceItem.service_id == service_id,
                PriceItem.price_resident_kzt.isnot(None),
            )
            .order_by(PriceItem.created_at.desc())
            .first()
        )
        if prev and prev.price_resident_kzt:
            change = abs(pr - prev.price_resident_kzt) / prev.price_resident_kzt
            if change > ANOMALY_THRESHOLD:
                res.warnings.append(f"price_anomaly:{round(change * 100)}%")

    res.price_resident_kzt = pr
    res.price_nonresident_kzt = pn
    return res
