"""Service-name normalization against the catalog using RapidFuzz."""
from __future__ import annotations

from dataclasses import dataclass
from typing import Iterable, List, Optional

from rapidfuzz import fuzz, process
from sqlalchemy.orm import Session

from .models import Service

AUTO_THRESHOLD = 0.85
REVIEW_THRESHOLD = 0.60


@dataclass
class Match:
    service_id: Optional[str]
    score: float
    status: str  # auto|review|unmatched
    candidates: List[tuple[str, float]]


class Normalizer:
    """In-memory index over Service.name + synonyms for fast matching."""

    def __init__(self, services: Iterable[Service]):
        self._by_key: dict[str, str] = {}  # text -> service_id
        self._choices: list[str] = []
        for s in services:
            self._add(s.service_name, s.service_id)
            for syn in s.synonyms or []:
                if isinstance(syn, str) and syn.strip():
                    self._add(syn, s.service_id)

    def _add(self, text: str, sid: str) -> None:
        key = text.lower().strip()
        if not key or key in self._by_key:
            return
        self._by_key[key] = sid
        self._choices.append(key)

    def match(self, raw: str, top_k: int = 5) -> Match:
        if not raw or not self._choices:
            return Match(None, 0.0, "unmatched", [])
        q = raw.lower().strip()
        results = process.extract(
            q, self._choices, scorer=fuzz.token_set_ratio, limit=top_k
        )
        if not results:
            return Match(None, 0.0, "unmatched", [])
        best_text, best_score, _ = results[0]
        score = best_score / 100.0
        sid = self._by_key.get(best_text)
        if score >= AUTO_THRESHOLD:
            status = "auto"
        elif score >= REVIEW_THRESHOLD:
            status = "review"
        else:
            status = "unmatched"
            sid = None
        candidates = [(self._by_key[t], s / 100.0) for t, s, _ in results if t in self._by_key]
        return Match(sid, score, status, candidates)


def load_normalizer(db: Session) -> Normalizer:
    services = db.query(Service).filter(Service.is_active.is_(True)).all()
    return Normalizer(services)
