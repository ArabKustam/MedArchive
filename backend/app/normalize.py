"""Service-name normalization against the catalog using RapidFuzz and optional Sentence-Transformers."""
from __future__ import annotations

import os
import re
import logging
from dataclasses import dataclass
from typing import Iterable, List, Optional

from rapidfuzz import fuzz, process
from sqlalchemy.orm import Session

from .models import Service

logger = logging.getLogger(__name__)

# Load thresholds from environment variables
AUTO_THRESHOLD = float(os.environ.get("AUTO_MATCH_THRESHOLD", "0.85"))
REVIEW_THRESHOLD = float(os.environ.get("REVIEW_MATCH_THRESHOLD", "0.60"))

def _clean_raw_name(raw: str) -> str:
    if not raw:
        return ""
    s = raw.strip()
    s = re.sub(r"^(?:[A-ZА-Я]{1,4}[\d.\-]{1,15}\d|\d{2,4}\.\d{1,4}(?:\.\d+)*|\d+[\d.\-]*)\s+", "", s, flags=re.I)
    s = s.strip(" .-—:;\t|")
    return s

# Global lazy-loaded SentenceTransformer model
_semantic_model = None
_model_loaded = False

def _get_semantic_model():
    global _semantic_model, _model_loaded
    if _model_loaded:
        return _semantic_model
    try:
        from sentence_transformers import SentenceTransformer
        model_name = os.environ.get("EMBEDDING_MODEL_NAME", "paraphrase-multilingual-MiniLM-L12-v2")
        logger.info(f"Loading sentence-transformers model: {model_name}...")
        _semantic_model = SentenceTransformer(model_name)
        logger.info("SentenceTransformer loaded successfully.")
    except Exception as e:
        logger.warning(f"Could not load sentence-transformers: {e}. Semantic matching will be skipped.")
        _semantic_model = None
    _model_loaded = True
    return _semantic_model


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

        # Precompute embeddings if model is available
        self._embeddings = None
        model = _get_semantic_model()
        if model and self._choices:
            try:
                import torch
                self._embeddings = model.encode(self._choices, convert_to_tensor=True)
                logger.info(f"Pre-computed embeddings for {len(self._choices)} catalog choices.")
            except Exception as e:
                logger.warning(f"Failed to pre-compute embeddings: {e}")

    def _add(self, text: str, sid: str) -> None:
        key = text.lower().strip()
        if not key or key in self._by_key:
            return
        self._by_key[key] = sid
        self._choices.append(key)

    def match(self, raw: str, top_k: int = 5) -> Match:
        if not raw or not self._choices:
            return Match(None, 0.0, "unmatched", [])
        cleaned = _clean_raw_name(raw)
        q = cleaned.lower().strip() or raw.lower().strip()

        # Step 1: Exact match
        if q in self._by_key:
            sid = self._by_key[q]
            return Match(sid, 1.0, "auto", [(sid, 1.0)])

        # Step 2: Fuzzy matching via RapidFuzz
        results = process.extract(
            q, self._choices, scorer=fuzz.token_set_ratio, limit=top_k
        )
        if results:
            best_text, best_score, _ = results[0]
            fuzzy_score = best_score / 100.0
            if fuzzy_score >= AUTO_THRESHOLD:
                sid = self._by_key.get(best_text)
                candidates = [(self._by_key[t], s / 100.0) for t, s, _ in results if t in self._by_key]
                return Match(sid, fuzzy_score, "auto", candidates)

        # Step 3: Semantic matching fallback via sentence-transformers
        model = _get_semantic_model()
        if model and self._embeddings is not None:
            try:
                import torch
                from sentence_transformers import util
                
                q_emb = model.encode(q, convert_to_tensor=True)
                cos_scores = util.cos_sim(q_emb, self._embeddings)[0]
                
                # Retrieve top K
                k = min(top_k, len(self._choices))
                top_results = torch.topk(cos_scores, k=k)
                
                semantic_candidates = []
                for score_val, idx_val in zip(top_results.values, top_results.indices):
                    idx = int(idx_val)
                    score = float(score_val)
                    text_choice = self._choices[idx]
                    sid = self._by_key.get(text_choice)
                    if sid:
                        semantic_candidates.append((sid, score))
                
                if semantic_candidates:
                    best_sid, best_score = semantic_candidates[0]
                    if best_score >= AUTO_THRESHOLD:
                        status = "auto"
                    elif best_score >= REVIEW_THRESHOLD:
                        status = "review"
                    else:
                        status = "unmatched"
                        best_sid = None
                    return Match(best_sid, best_score, status, semantic_candidates)
            except Exception as e:
                logger.warning(f"Semantic matching failed in-flight: {e}")

        # Step 4: Fallback to RapidFuzz review/unmatched score
        if not results:
            return Match(None, 0.0, "unmatched", [])
            
        best_text, best_score, _ = results[0]
        score = best_score / 100.0
        sid = self._by_key.get(best_text)
        if score >= REVIEW_THRESHOLD:
            status = "review"
        else:
            status = "unmatched"
            sid = None
        candidates = [(self._by_key[t], s / 100.0) for t, s, _ in results if t in self._by_key]
        return Match(sid, score, status, candidates)

    def match_batch(self, raw_list: list[str], top_k: int = 5) -> list[Match]:
        """High-performance batch matcher using tensor matrix operations."""
        if not raw_list:
            return []

        results: list[Match | None] = [None] * len(raw_list)
        unmatched_indices: list[int] = []
        unmatched_texts: list[str] = []

        # Step 1: Instant Exact Match & Fast Lookup
        for idx, raw in enumerate(raw_list):
            if not raw or not self._choices:
                results[idx] = Match(None, 0.0, "unmatched", [])
                continue
            cleaned = _clean_raw_name(raw)
            q = cleaned.lower().strip() or raw.lower().strip()
            if q in self._by_key:
                sid = self._by_key[q]
                results[idx] = Match(sid, 1.0, "auto", [(sid, 1.0)])
            else:
                unmatched_indices.append(idx)
                unmatched_texts.append(q)

        if not unmatched_indices:
            return [r for r in results if r is not None]

        # Step 2: Batch Semantic Matching if model available
        model = _get_semantic_model()
        if model and self._embeddings is not None and unmatched_texts:
            try:
                import torch
                from sentence_transformers import util

                # Batch encode all query strings at once
                q_embs = model.encode(unmatched_texts, convert_to_tensor=True, batch_size=256)
                cos_sim_matrix = util.cos_sim(q_embs, self._embeddings)

                k = min(top_k, len(self._choices))
                top_results = torch.topk(cos_sim_matrix, k=k, dim=1)

                for i, orig_idx in enumerate(unmatched_indices):
                    scores = top_results.values[i]
                    indices = top_results.indices[i]

                    semantic_candidates = []
                    for s_val, idx_val in zip(scores, indices):
                        score = float(s_val)
                        choice_text = self._choices[int(idx_val)]
                        sid = self._by_key.get(choice_text)
                        if sid:
                            semantic_candidates.append((sid, score))

                    if semantic_candidates:
                        best_sid, best_score = semantic_candidates[0]
                        if best_score >= AUTO_THRESHOLD:
                            status = "auto"
                        elif best_score >= REVIEW_THRESHOLD:
                            status = "review"
                        else:
                            status = "unmatched"
                            best_sid = None
                        results[orig_idx] = Match(best_sid, best_score, status, semantic_candidates)
            except Exception as e:
                logger.warning(f"Batch semantic matching fallback error: {e}")

        # Step 3: Fallback for any remaining unhandled items
        for orig_idx in unmatched_indices:
            if results[orig_idx] is None:
                results[orig_idx] = self.match(raw_list[orig_idx], top_k=top_k)

        return [r for r in results if r is not None]


_NORMALIZER_CACHE: Optional[Normalizer] = None


def load_normalizer(db: Session, force_reload: bool = False) -> Normalizer:
    global _NORMALIZER_CACHE
    if _NORMALIZER_CACHE is None or force_reload:
        services = db.query(Service).filter(Service.is_active.is_(True)).all()
        _NORMALIZER_CACHE = Normalizer(services)
    return _NORMALIZER_CACHE
