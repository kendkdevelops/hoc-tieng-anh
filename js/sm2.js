/* ==========================================================================
   LingoCraft C1 — Authentic Anki SM-2 Spaced Repetition Engine
   ========================================================================== */

(function () {
  const DAY_MS = 24 * 60 * 60 * 1000;

  function createRecord() {
    return {
      reps: 0,
      interval: 0, // days
      ease: 2.5,
      dueAt: 0, // epoch ms; 0 means new/unseen
      lapses: 0,
      lastReviewed: null
    };
  }

  /**
   * Computes next SM-2 scheduling state.
   * rating: 'again' (1) | 'hard' (2) | 'good' (3) | 'easy' (4)
   */
  function schedule(existing, rating, nowMs = Date.now()) {
    const rec = { ...createRecord(), ...(existing || {}) };
    let { reps, interval, ease, lapses } = rec;

    if (rating === 'again') {
      reps = 0;
      interval = 0; // review again in same session (10 mins)
      ease = Math.max(1.3, ease - 0.2);
      lapses += 1;
      return {
        reps,
        interval,
        ease: Number(ease.toFixed(2)),
        dueAt: nowMs + 10 * 60 * 1000,
        lapses,
        lastReviewed: nowMs
      };
    }

    if (rating === 'hard') {
      if (reps === 0) {
        interval = 1;
        reps = 1;
      } else {
        interval = Math.max(1, Math.round(interval * 1.2));
        reps += 1;
      }
      ease = Math.max(1.3, ease - 0.15);
    } else if (rating === 'good') {
      if (reps === 0) interval = 1;
      else if (reps === 1) interval = 6;
      else interval = Math.round(interval * ease);
      reps += 1;
    } else if (rating === 'easy') {
      if (reps === 0) interval = 4;
      else if (reps === 1) interval = 10;
      else interval = Math.round(interval * ease * 1.3);
      reps += 1;
      ease = Math.min(3.0, ease + 0.15);
    }

    return {
      reps,
      interval,
      ease: Number(ease.toFixed(2)),
      dueAt: nowMs + interval * DAY_MS,
      lapses,
      lastReviewed: nowMs
    };
  }

  function previewLabel(existing, rating) {
    const next = schedule(existing, rating, Date.now());
    if (next.interval === 0) return '10 phút';
    if (next.interval === 1) return '1 ngày';
    if (next.interval < 30) return `${next.interval} ngày`;
    const months = Math.round((next.interval / 30) * 10) / 10;
    return `${months} tháng`;
  }

  function isDue(record, nowMs = Date.now()) {
    if (!record || !record.lastReviewed) return true; // unseen counts as ready
    return record.dueAt <= nowMs;
  }

  function statusOf(record, nowMs = Date.now()) {
    if (!record || !record.lastReviewed) return 'new';
    if (record.interval >= 14) return 'mastered';
    if (record.dueAt <= nowMs) return 'due';
    return 'learning';
  }

  window.LingoSM2 = {
    createRecord,
    schedule,
    previewLabel,
    isDue,
    statusOf
  };
})();
