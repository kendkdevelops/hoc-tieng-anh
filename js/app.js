/* ==========================================================================
   LingoCraft — Core Interactive Application
   ========================================================================== */

(function () {
  const STORAGE_KEY = 'lingocraft_state_v1';
  const DATA = window.LINGO_DATA;
  const AUDIO = window.LingoAudio;

  const DEFAULT_STATE = {
    theme: 'light',
    accent: 'en-US',
    xp: 0,
    dailyXp: 0,
    dailyGoal: 100,
    streak: 1,
    lastStudyDate: todayStr(),
    wordStatus: {}, // { [wordId]: 'mastered' | 'review' }
    customWords: [],
    completedGrammar: [],
    bestQuizScore: 0
  };

  let state = loadState();

  // Runtime UI state
  let activeTab = 'flashcards';
  let fcTopic = 'all';
  let fcReviewOnly = false;
  let fcDeck = [];
  let fcIndex = 0;
  let fcFlipped = false;

  let wbSearch = '';
  let wbFilter = 'all';

  let listenMode = 'blank'; // 'blank' | 'full'
  let listenIndex = 0;

  let grammarId = DATA.grammarLessons[0].id;
  let grammarAnswers = {}; // { `${lessonId}-${qIdx}`: chosenIdx }

  let dialogueId = DATA.dialogues[0].id;
  let showDialogueVi = true;
  let isPlayingDialogue = false;

  let quizState = {
    mode: 'en-vi',
    questions: [],
    current: 0,
    score: 0,
    combo: 0,
    answered: false,
    mistakes: [],
    finished: false
  };

  /* ------------------------------------------------------------------------
     Helpers & Persistence
     ------------------------------------------------------------------------ */
  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(raw);
      const merged = { ...DEFAULT_STATE, ...parsed };

      // Update daily rollover & streak
      const today = todayStr();
      if (merged.lastStudyDate !== today) {
        const last = new Date(merged.lastStudyDate + 'T00:00:00');
        const now = new Date(today + 'T00:00:00');
        const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
        merged.dailyXp = 0;
        if (diffDays === 1) {
          merged.streak = (merged.streak || 0) + 1;
        } else if (diffDays > 1) {
          merged.streak = 1;
        }
        merged.lastStudyDate = today;
      }
      return merged;
    } catch (_) {
      return { ...DEFAULT_STATE };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {
      // Ignore storage quota errors
    }
  }

  function addXp(amount, message) {
    state.xp += amount;
    state.dailyXp += amount;
    state.lastStudyDate = todayStr();
    saveState();
    renderHeaderStats();
    if (message) showToast(`${message} (+${amount} XP)`);
  }

  function getAllWords() {
    return [...state.customWords, ...DATA.vocabulary];
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  function speakText(text, rate = 1.0, triggerBtn = null) {
    if (!AUDIO.isSupported) {
      showToast('Trình duyệt hiện tại không hỗ trợ đọc giọng nói.');
      return;
    }
    if (triggerBtn) triggerBtn.classList.add('speaking');
    AUDIO.speak(text, {
      accent: state.accent,
      rate,
      onEnd: () => triggerBtn && triggerBtn.classList.remove('speaking'),
      onError: () => triggerBtn && triggerBtn.classList.remove('speaking')
    });
  }

  /* ------------------------------------------------------------------------
     Theme, Accent & Header Stats
     ------------------------------------------------------------------------ */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute(
        'aria-label',
        state.theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'
      );
      btn.innerHTML =
        state.theme === 'dark'
          ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>'
          : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
    }
  }

  function applyAccentButtons() {
    document.querySelectorAll('[data-accent]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.accent === state.accent);
    });
  }

  function renderHeaderStats() {
    const streakEl = document.getElementById('stat-streak');
    const xpEl = document.getElementById('stat-xp');
    const goalTextEl = document.getElementById('daily-goal-text');
    const goalFillEl = document.getElementById('daily-goal-fill');

    if (streakEl) streakEl.textContent = state.streak;
    if (xpEl) xpEl.textContent = state.xp;

    const pct = Math.min(100, Math.round((state.dailyXp / state.dailyGoal) * 100));
    if (goalTextEl) goalTextEl.textContent = `${state.dailyXp} / ${state.dailyGoal} XP`;
    if (goalFillEl) goalFillEl.style.width = `${pct}%`;

    renderDeckSidebarStats();
  }

  /* ------------------------------------------------------------------------
     Tab Switching
     ------------------------------------------------------------------------ */
  function switchTab(tabId) {
    AUDIO.stop();
    isPlayingDialogue = false;
    activeTab = tabId;

    document.querySelectorAll('.nav-tab').forEach((btn) => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `panel-${tabId}`);
    });

    if (tabId === 'wordbook') renderWordbook();
    if (tabId === 'flashcards') renderFlashcard();
    if (tabId === 'listening') renderListening();
    if (tabId === 'grammar') renderGrammar();
    if (tabId === 'dialogues') renderDialogue();
    if (tabId === 'quiz' && !quizState.questions.length) startQuiz(quizState.mode);
  }

  /* ------------------------------------------------------------------------
     1. Flashcards Studio
     ------------------------------------------------------------------------ */
  function rebuildFlashcardDeck(shouldShuffle = false) {
    const all = getAllWords();
    let list = fcTopic === 'all' ? all : all.filter((w) => w.topic === fcTopic);
    if (fcReviewOnly) {
      const needReview = list.filter((w) => state.wordStatus[w.id] !== 'mastered');
      if (needReview.length) list = needReview;
    }
    fcDeck = shouldShuffle ? shuffle(list) : list;
    fcIndex = 0;
    fcFlipped = false;
    renderFlashcard();
  }

  function renderTopicPills() {
    const host = document.getElementById('fc-topic-pills');
    if (!host) return;
    host.innerHTML = DATA.topics
      .map(
        (t) =>
          `<button type="button" class="topic-pill ${fcTopic === t.id ? 'active' : ''}" data-topic="${t.id}">${escapeHtml(t.name)}</button>`
      )
      .join('');

    host.querySelectorAll('[data-topic]').forEach((btn) => {
      btn.addEventListener('click', () => {
        fcTopic = btn.dataset.topic;
        renderTopicPills();
        rebuildFlashcardDeck(false);
      });
    });
  }

  function renderDeckSidebarStats() {
    const all = getAllWords();
    let mastered = 0;
    let review = 0;
    all.forEach((w) => {
      if (state.wordStatus[w.id] === 'mastered') mastered += 1;
      else if (state.wordStatus[w.id] === 'review') review += 1;
    });
    const unseen = Math.max(0, all.length - mastered - review);

    const mEl = document.getElementById('stat-mastered');
    const rEl = document.getElementById('stat-review');
    const uEl = document.getElementById('stat-unseen');
    if (mEl) mEl.textContent = mastered;
    if (rEl) rEl.textContent = review;
    if (uEl) uEl.textContent = unseen;
  }

  function renderFlashcard() {
    const counter = document.getElementById('fc-counter');
    const progressFill = document.getElementById('fc-progress-fill');
    const cardEl = document.getElementById('flashcard-card');
    if (!cardEl) return;

    if (!fcDeck.length) {
      counter.textContent = '0 / 0';
      return;
    }

    const item = fcDeck[fcIndex];
    const status = state.wordStatus[item.id];
    const statusBadge =
      status === 'mastered'
        ? '<span class="badge badge-mastered">Đã thuộc</span>'
        : status === 'review'
        ? '<span class="badge badge-review">Cần ôn lại</span>'
        : '<span class="badge badge-level">Từ mới</span>';

    counter.textContent = `Thẻ ${fcIndex + 1} / ${fcDeck.length}`;
    progressFill.style.width = `${Math.round(((fcIndex + 1) / fcDeck.length) * 100)}%`;
    cardEl.classList.toggle('is-flipped', fcFlipped);

    document.getElementById('fc-front-badges').innerHTML = `
      <span class="badge badge-pos">${escapeHtml(item.pos)}</span>
      <span class="badge badge-level">${escapeHtml(item.level)}</span>
    `;
    document.getElementById('fc-front-status').innerHTML = statusBadge;
    document.getElementById('fc-word').textContent = item.word;
    document.getElementById('fc-ipa').textContent = item.ipa || '';

    document.getElementById('fc-back-word').textContent = item.word;
    document.getElementById('fc-back-status').innerHTML = statusBadge;
    document.getElementById('fc-meaning').textContent = item.meaning;
    document.getElementById('fc-example-en').textContent = item.example;
    document.getElementById('fc-example-vi').textContent = item.exampleVi;
    document.getElementById('fc-tip').innerHTML = item.tip
      ? `<strong>Mẹo dùng:</strong> ${escapeHtml(item.tip)}`
      : '';

    renderDeckSidebarStats();
  }

  function markCurrentWord(level) {
    if (!fcDeck.length) return;
    const item = fcDeck[fcIndex];

    if (level === 'easy') {
      state.wordStatus[item.id] = 'mastered';
      addXp(10, `Đã thuộc "${item.word}"`);
    } else if (level === 'good') {
      state.wordStatus[item.id] = 'review';
      addXp(5, `Đánh dấu ôn lại "${item.word}"`);
    } else {
      state.wordStatus[item.id] = 'review';
      showToast(`Đã lưu "${item.word}" vào danh sách cần ôn kỹ`);
      saveState();
    }

    if (fcIndex < fcDeck.length - 1) {
      fcIndex += 1;
    } else {
      fcIndex = 0;
      showToast('Bạn đã hoàn thành một vòng bộ thẻ!');
    }
    fcFlipped = false;
    renderFlashcard();
  }

  /* ------------------------------------------------------------------------
     2. Wordbook & Custom Vocabulary
     ------------------------------------------------------------------------ */
  function renderWordbook() {
    const grid = document.getElementById('wordbook-grid');
    const countEl = document.getElementById('wb-count');
    if (!grid) return;

    const query = wbSearch.trim().toLowerCase();
    const list = getAllWords().filter((w) => {
      const status = state.wordStatus[w.id] || 'unseen';
      if (wbFilter === 'mastered' && status !== 'mastered') return false;
      if (wbFilter === 'review' && status !== 'review') return false;
      if (wbFilter === 'unseen' && status !== 'unseen') return false;
      if (wbFilter === 'custom' && !w.isCustom) return false;
      if (!query) return true;
      return (
        w.word.toLowerCase().includes(query) ||
        w.meaning.toLowerCase().includes(query) ||
        (w.example && w.example.toLowerCase().includes(query))
      );
    });

    if (countEl) countEl.textContent = `${list.length} từ`;

    if (!list.length) {
      grid.innerHTML = `<div class="side-card" style="grid-column:1/-1;text-align:center;color:var(--text-secondary)">
        Không tìm thấy từ vựng phù hợp. Hãy thử từ khóa khác hoặc bấm <strong>+ Thêm từ của tôi</strong>.
      </div>`;
      return;
    }

    grid.innerHTML = list
      .map((w) => {
        const status = state.wordStatus[w.id];
        const mastered = status === 'mastered';
        return `
          <article class="word-item">
            <div class="word-item-head">
              <div>
                <h3 class="word-item-title">${escapeHtml(w.word)}</h3>
                <div class="word-item-ipa">${escapeHtml(w.ipa || '')} · ${escapeHtml(w.pos)}</div>
              </div>
              <button type="button" class="icon-btn wb-speak-btn" data-speak="${escapeHtml(w.word)}" title="Nghe phát âm">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              </button>
            </div>
            <div class="word-item-meaning">${escapeHtml(w.meaning)}</div>
            <p class="word-item-ex">${escapeHtml(w.example)}</p>
            <div class="word-item-foot">
              <div class="card-badges">
                <span class="badge badge-level">${escapeHtml(w.level || 'B1')}</span>
                ${w.isCustom ? '<span class="badge badge-pos">Tự thêm</span>' : ''}
              </div>
              <div style="display:flex;gap:6px;">
                <button type="button" class="btn btn-sm ${mastered ? 'btn-success-soft' : 'btn-secondary'} wb-toggle-master" data-id="${escapeHtml(w.id)}">
                  ${mastered ? '✓ Đã thuộc' : 'Đánh dấu thuộc'}
                </button>
                ${
                  w.isCustom
                    ? `<button type="button" class="btn btn-sm btn-danger-soft wb-delete-custom" data-id="${escapeHtml(w.id)}" title="Xóa từ này">Xóa</button>`
                    : ''
                }
              </div>
            </div>
          </article>
        `;
      })
      .join('');

    grid.querySelectorAll('.wb-speak-btn').forEach((btn) => {
      btn.addEventListener('click', () => speakText(btn.dataset.speak, 1.0, btn));
    });

    grid.querySelectorAll('.wb-toggle-master').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        if (state.wordStatus[id] === 'mastered') {
          delete state.wordStatus[id];
          saveState();
        } else {
          state.wordStatus[id] = 'mastered';
          addXp(5, 'Cập nhật sổ từ');
        }
        renderWordbook();
        renderDeckSidebarStats();
      });
    });

    grid.querySelectorAll('.wb-delete-custom').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        state.customWords = state.customWords.filter((w) => w.id !== id);
        delete state.wordStatus[id];
        saveState();
        rebuildFlashcardDeck(false);
        renderWordbook();
        showToast('Đã xóa từ vựng tự thêm');
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. Listening & Dictation Studio
     ------------------------------------------------------------------------ */
  function normalizeWord(w) {
    return w.toLowerCase().replace(/[^a-z0-9']/g, '');
  }

  function renderListening() {
    const ex = DATA.listeningExercises[listenIndex];
    if (!ex) return;

    document.getElementById('listen-counter').textContent = `Bài nghe ${listenIndex + 1} / ${DATA.listeningExercises.length}`;
    document.getElementById('listen-level').textContent = ex.level;

    document.querySelectorAll('[data-listen-mode]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.listenMode === listenMode);
    });

    const promptEl = document.getElementById('listen-prompt');
    const inputEl = document.getElementById('listen-input');
    const resultEl = document.getElementById('listen-result');

    if (listenMode === 'blank') {
      const regex = new RegExp(`\\b${ex.blankWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      const masked = escapeHtml(ex.sentence).replace(
        regex,
        `<span class="blank-slot" id="listen-blank-preview">_______</span>`
      );
      promptEl.innerHTML = masked;
      inputEl.placeholder = 'Nhập từ còn thiếu bạn nghe được...';
    } else {
      promptEl.innerHTML = `<span style="color:var(--text-secondary);font-family:var(--font-sans);font-size:0.95rem;">Bấm <strong>Nghe câu</strong> và chép lại trọn vẹn câu tiếng Anh bạn nghe được bên dưới.</span>`;
      inputEl.placeholder = 'Gõ lại toàn bộ câu tiếng Anh...';
    }

    inputEl.value = '';
    resultEl.innerHTML = '';
    resultEl.style.display = 'none';
  }

  function checkListeningAnswer() {
    const ex = DATA.listeningExercises[listenIndex];
    const input = document.getElementById('listen-input').value.trim();
    const resultEl = document.getElementById('listen-result');

    if (!input) {
      showToast('Hãy nhập câu trả lời của bạn trước khi kiểm tra.');
      return;
    }

    resultEl.style.display = 'block';

    if (listenMode === 'blank') {
      const ok = normalizeWord(input) === normalizeWord(ex.blankWord);
      const preview = document.getElementById('listen-blank-preview');
      if (preview) preview.textContent = ex.blankWord;

      if (ok) {
        addXp(15, 'Nghe điền từ chính xác!');
        resultEl.innerHTML = `
          <div style="color:var(--success);font-weight:700;margin-bottom:6px;">✓ Chính xác tuyệt đối!</div>
          <div><strong>Câu đầy đủ:</strong> ${escapeHtml(ex.sentence)}</div>
          <div style="color:var(--text-secondary);margin-top:4px;"><strong>Dịch nghĩa:</strong> ${escapeHtml(ex.vi)}</div>
          <div style="color:var(--accent-text);margin-top:6px;font-size:0.86rem;"><strong>Lưu ý phát âm:</strong> ${escapeHtml(ex.note)}</div>
        `;
      } else {
        resultEl.innerHTML = `
          <div style="color:var(--danger);font-weight:700;margin-bottom:6px;">✕ Chưa chính xác — Từ đúng là "${escapeHtml(ex.blankWord)}"</div>
          <div><strong>Câu đầy đủ:</strong> ${escapeHtml(ex.sentence)}</div>
          <div style="color:var(--text-secondary);margin-top:4px;"><strong>Dịch nghĩa:</strong> ${escapeHtml(ex.vi)}</div>
          <div style="color:var(--accent-text);margin-top:6px;font-size:0.86rem;"><strong>Lưu ý phát âm:</strong> ${escapeHtml(ex.note)}</div>
        `;
      }
      return;
    }

    // Full sentence word-by-word comparison
    const expectedWords = ex.sentence.split(/\s+/);
    const userWords = input.split(/\s+/).map(normalizeWord);
    const userPool = [...userWords];
    let matchedCount = 0;

    const chips = expectedWords.map((word) => {
      const norm = normalizeWord(word);
      const foundIdx = userPool.indexOf(norm);
      if (foundIdx !== -1) {
        userPool.splice(foundIdx, 1);
        matchedCount += 1;
        return `<span class="diff-ok">${escapeHtml(word)}</span>`;
      }
      return `<span class="diff-miss">${escapeHtml(word)}</span>`;
    });

    const accuracy = Math.round((matchedCount / expectedWords.length) * 100);
    if (accuracy >= 85) {
      addXp(20, `Chép chính tả đạt ${accuracy}%!`);
    }

    resultEl.innerHTML = `
      <div style="font-weight:700;margin-bottom:4px;color:${accuracy >= 85 ? 'var(--success)' : 'var(--accent-text)'}">
        Độ chính xác: ${accuracy}% (${matchedCount}/${expectedWords.length} từ)
      </div>
      <div class="diff-words">${chips.join('')}</div>
      <div style="color:var(--text-secondary);font-size:0.9rem;"><strong>Dịch nghĩa:</strong> ${escapeHtml(ex.vi)}</div>
      <div style="color:var(--accent-text);margin-top:6px;font-size:0.86rem;"><strong>Lưu ý phát âm:</strong> ${escapeHtml(ex.note)}</div>
    `;
  }

  /* ------------------------------------------------------------------------
     4. Grammar Guide
     ------------------------------------------------------------------------ */
  function renderGrammar() {
    const sidebar = document.getElementById('grammar-sidebar');
    const article = document.getElementById('grammar-article');
    if (!sidebar || !article) return;

    sidebar.innerHTML = DATA.grammarLessons
      .map((g) => {
        const done = state.completedGrammar.includes(g.id);
        return `
          <button type="button" class="grammar-nav-item ${g.id === grammarId ? 'active' : ''}" data-gid="${g.id}">
            <strong>${done ? '✓ ' : ''}${escapeHtml(g.title)}</strong>
            <span>${escapeHtml(g.level)} · ${escapeHtml(g.subtitle)}</span>
          </button>
        `;
      })
      .join('');

    sidebar.querySelectorAll('[data-gid]').forEach((btn) => {
      btn.addEventListener('click', () => {
        grammarId = btn.dataset.gid;
        renderGrammar();
      });
    });

    const lesson = DATA.grammarLessons.find((g) => g.id === grammarId) || DATA.grammarLessons[0];

    article.innerHTML = `
      <div class="card-badges">
        <span class="badge badge-pos">Ngữ pháp</span>
        <span class="badge badge-level">${escapeHtml(lesson.level)}</span>
      </div>
      <h2>${escapeHtml(lesson.title)}</h2>
      <p style="color:var(--text-secondary);margin-top:0;">${escapeHtml(lesson.summary)}</p>

      <div class="formula-card">
        ${lesson.formulas.map((f) => `<div>${escapeHtml(f)}</div>`).join('')}
      </div>

      <h3 style="font-size:1rem;margin:18px 0 8px;">Khi nào sử dụng?</h3>
      <ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;color:var(--text-secondary);">
        ${lesson.rules.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}
      </ul>

      <h3 style="font-size:1rem;margin:20px 0 8px;">Ví dụ thực tế (bấm loa để nghe)</h3>
      <div class="grammar-examples">
        ${lesson.examples
          .map(
            (ex) => `
            <div class="grammar-example-row">
              <div>
                <div style="font-weight:600;">${escapeHtml(ex.en)}</div>
                <div style="font-size:0.87rem;color:var(--text-secondary);">${escapeHtml(ex.vi)}</div>
              </div>
              <button type="button" class="icon-btn gr-speak-btn" data-speak="${escapeHtml(ex.en)}" title="Nghe ví dụ">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
            </div>
          `
          )
          .join('')}
      </div>

      <div class="pitfall-box">
        <strong>Lỗi người Việt hay gặp:</strong>
        ${escapeHtml(lesson.pitfall)}
      </div>

      <div class="mini-check">
        <h3 style="font-size:1.05rem;margin:0 0 14px;">Bài tập kiểm tra nhanh (${lesson.questions.length} câu)</h3>
        <div style="display:flex;flex-direction:column;gap:18px;">
          ${lesson.questions
            .map((q, qi) => {
              const key = `${lesson.id}-${qi}`;
              const chosen = grammarAnswers[key];
              const isAnswered = typeof chosen === 'number';
              return `
                <div class="gr-q-block">
                  <div style="font-weight:600;margin-bottom:8px;">Câu ${qi + 1}: ${escapeHtml(q.q)}</div>
                  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px;">
                    ${q.options
                      .map((opt, oi) => {
                        let cls = 'quiz-option';
                        if (isAnswered) {
                          if (oi === q.answer) cls += ' correct';
                          else if (oi === chosen) cls += ' wrong';
                        }
                        return `<button type="button" class="${cls}" style="padding:10px 12px;" data-gr-q="${qi}" data-gr-opt="${oi}" ${isAnswered ? 'disabled' : ''}>
                          <span class="opt-key">${String.fromCharCode(65 + oi)}</span>
                          <span>${escapeHtml(opt)}</span>
                        </button>`;
                      })
                      .join('')}
                  </div>
                  ${
                    isAnswered
                      ? `<div class="quiz-feedback ${chosen === q.answer ? 'ok' : 'err'}">
                          <strong>${chosen === q.answer ? '✓ Chính xác!' : '✕ Chưa đúng.'}</strong> ${escapeHtml(q.explain)}
                        </div>`
                      : ''
                  }
                </div>
              `;
            })
            .join('')}
        </div>
      </div>
    `;

    article.querySelectorAll('.gr-speak-btn').forEach((btn) => {
      btn.addEventListener('click', () => speakText(btn.dataset.speak, 0.96, btn));
    });

    article.querySelectorAll('[data-gr-q]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qi = Number(btn.dataset.grQ);
        const oi = Number(btn.dataset.grOpt);
        const key = `${lesson.id}-${qi}`;
        if (typeof grammarAnswers[key] === 'number') return;

        grammarAnswers[key] = oi;
        if (oi === lesson.questions[qi].answer) {
          addXp(10, 'Đúng câu ngữ pháp!');
        }

        // Check if all questions in this lesson are answered
        const allDone = lesson.questions.every((_, idx) => typeof grammarAnswers[`${lesson.id}-${idx}`] === 'number');
        if (allDone && !state.completedGrammar.includes(lesson.id)) {
          state.completedGrammar.push(lesson.id);
          saveState();
        }
        renderGrammar();
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Real-Life Dialogues
     ------------------------------------------------------------------------ */
  function renderDialogue() {
    const sidebar = document.getElementById('dialogue-sidebar');
    const box = document.getElementById('dialogue-box');
    if (!sidebar || !box) return;

    sidebar.innerHTML = DATA.dialogues
      .map(
        (d) => `
        <button type="button" class="grammar-nav-item ${d.id === dialogueId ? 'active' : ''}" data-did="${d.id}">
          <strong>${escapeHtml(d.title)}</strong>
          <span>${escapeHtml(d.level)} · ${d.lines.length} lượt thoại</span>
        </button>
      `
      )
      .join('');

    sidebar.querySelectorAll('[data-did]').forEach((btn) => {
      btn.addEventListener('click', () => {
        AUDIO.stop();
        isPlayingDialogue = false;
        dialogueId = btn.dataset.did;
        renderDialogue();
      });
    });

    const dlg = DATA.dialogues.find((d) => d.id === dialogueId) || DATA.dialogues[0];

    box.innerHTML = `
      <div class="dialogue-head">
        <div>
          <span class="badge badge-level">${escapeHtml(dlg.level)}</span>
          <h2 style="font-family:var(--font-serif);font-size:1.55rem;margin:6px 0 2px;">${escapeHtml(dlg.title)}</h2>
          <p style="margin:0;color:var(--text-secondary);font-size:0.88rem;">${escapeHtml(dlg.setting)}</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" id="btn-play-dialogue" class="btn btn-primary btn-sm">
            ${isPlayingDialogue ? 'Dừng phát' : '▶ Nghe cả đoạn'}
          </button>
          <button type="button" id="btn-toggle-vi" class="btn btn-secondary btn-sm">
            ${showDialogueVi ? 'Ẩn dịch tiếng Việt' : 'Hiện dịch tiếng Việt'}
          </button>
        </div>
      </div>

      <div class="dialogue-lines" id="dialogue-lines">
        ${dlg.lines
          .map(
            (line, idx) => `
          <div class="dialogue-line" data-line-idx="${idx}" title="Bấm để nghe câu này">
            <div class="speaker-avatar ${line.alt ? 'alt' : ''}">${escapeHtml(line.speaker.slice(0, 1))}</div>
            <div class="dialogue-text">
              <div class="dialogue-speaker">${escapeHtml(line.speaker)}</div>
              <p class="dialogue-en">${escapeHtml(line.en)}</p>
              <p class="dialogue-vi ${showDialogueVi ? '' : 'hidden'}">${escapeHtml(line.vi)}</p>
            </div>
          </div>
        `
          )
          .join('')}
      </div>

      <div class="phrases-list">
        <div style="width:100%;font-size:0.82rem;font-weight:700;color:var(--text-secondary);margin-bottom:2px;">Cụm từ đắt giá trong đoạn hội thoại:</div>
        ${dlg.phrases
          .map(
            (p) => `<div class="phrase-chip"><strong>${escapeHtml(p.en)}</strong> — ${escapeHtml(p.vi)}</div>`
          )
          .join('')}
      </div>
    `;

    box.querySelectorAll('[data-line-idx]').forEach((el) => {
      el.addEventListener('click', () => {
        const idx = Number(el.dataset.lineIdx);
        isPlayingDialogue = false;
        box.querySelectorAll('.dialogue-line').forEach((l) => l.classList.remove('is-active-line'));
        el.classList.add('is-active-line');
        speakText(dlg.lines[idx].en, 0.96);
      });
    });

    document.getElementById('btn-toggle-vi').addEventListener('click', () => {
      showDialogueVi = !showDialogueVi;
      renderDialogue();
    });

    document.getElementById('btn-play-dialogue').addEventListener('click', () => {
      if (isPlayingDialogue) {
        AUDIO.stop();
        isPlayingDialogue = false;
        renderDialogue();
        return;
      }
      isPlayingDialogue = true;
      const playBtn = document.getElementById('btn-play-dialogue');
      if (playBtn) playBtn.textContent = '⏹ Dừng phát';

      AUDIO.speakSequence(dlg.lines, {
        accent: state.accent,
        rate: 0.95,
        onLineStart: (idx) => {
          box.querySelectorAll('.dialogue-line').forEach((l, i) => {
            l.classList.toggle('is-active-line', i === idx);
          });
        },
        onComplete: () => {
          isPlayingDialogue = false;
          addXp(15, 'Hoàn thành nghe hội thoại!');
          renderDialogue();
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. Quiz Arena
     ------------------------------------------------------------------------ */
  function buildQuizQuestions(mode) {
    if (mode === 'grammar') {
      const pool = [];
      DATA.grammarLessons.forEach((lesson) => {
        lesson.questions.forEach((q) => {
          pool.push({
            prompt: q.q,
            sub: lesson.title,
            options: q.options,
            answer: q.answer,
            explain: q.explain
          });
        });
      });
      return shuffle(pool).slice(0, 10);
    }

    const words = shuffle(getAllWords());
    const chosen = words.slice(0, 10);

    return chosen.map((target) => {
      const distractors = shuffle(words.filter((w) => w.id !== target.id)).slice(0, 3);
      const rawOptions = shuffle([target, ...distractors]);
      const answerIdx = rawOptions.findIndex((o) => o.id === target.id);

      if (mode === 'vi-en') {
        return {
          prompt: target.meaning,
          sub: `Chọn từ tiếng Anh đúng (${target.pos})`,
          options: rawOptions.map((o) => o.word),
          answer: answerIdx,
          explain: `${target.word} ${target.ipa || ''} = ${target.meaning}. Ví dụ: "${target.example}"`,
          speakAfter: target.word
        };
      }

      if (mode === 'listen') {
        return {
          prompt: 'Bấm loa để nghe phát âm và chọn từ đúng',
          sub: 'Kiểm tra phản xạ nghe từ vựng',
          audioWord: target.word,
          options: rawOptions.map((o) => `${o.word} — ${o.meaning}`),
          answer: answerIdx,
          explain: `Đáp án: ${target.word} ${target.ipa || ''} (${target.meaning}).`
        };
      }

      // Default 'en-vi'
      return {
        prompt: target.word,
        sub: `${target.ipa || ''} · ${target.pos}`,
        audioWord: target.word,
        options: rawOptions.map((o) => o.meaning),
        answer: answerIdx,
        explain: `"${target.word}" nghĩa là "${target.meaning}". Ví dụ: ${target.example}`
      };
    });
  }

  function startQuiz(mode) {
    quizState = {
      mode,
      questions: buildQuizQuestions(mode),
      current: 0,
      score: 0,
      combo: 0,
      answered: false,
      chosenIdx: null,
      mistakes: [],
      finished: false
    };
    renderQuiz();
  }

  function renderQuiz() {
    document.querySelectorAll('[data-quiz-mode]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.quizMode === quizState.mode);
    });

    const host = document.getElementById('quiz-stage');
    if (!host) return;

    if (quizState.finished) {
      const total = quizState.questions.length;
      const pct = Math.round((quizState.score / total) * 100);
      if (pct > state.bestQuizScore) {
        state.bestQuizScore = pct;
        saveState();
      }

      host.innerHTML = `
        <div style="text-align:center;padding:10px 0 18px;">
          <div class="badge badge-pos" style="margin-bottom:10px;">Hoàn thành bài kiểm tra</div>
          <h2 style="font-family:var(--font-serif);font-size:2.2rem;margin:0 0 6px;">${quizState.score} / ${total} câu đúng (${pct}%)</h2>
          <p style="color:var(--text-secondary);margin:0 0 20px;">
            ${pct >= 80 ? 'Rất ấn tượng! Phản xạ tiếng Anh của bạn đang tiến bộ rõ rệt.' : 'Khởi đầu tốt! Xem lại các câu sai bên dưới để nhớ lâu hơn nhé.'}
          </p>
          <button type="button" id="btn-quiz-restart" class="btn btn-primary">Làm bài kiểm tra mới</button>
        </div>
        ${
          quizState.mistakes.length
            ? `<div style="border-top:1px solid var(--border-subtle);padding-top:16px;margin-top:10px;">
                <h3 style="font-size:0.95rem;margin:0 0 12px;">Cần ôn lại (${quizState.mistakes.length} câu):</h3>
                <div style="display:flex;flex-direction:column;gap:10px;">
                  ${quizState.mistakes
                    .map(
                      (m) => `
                    <div style="padding:12px 14px;border-radius:var(--radius-md);background:var(--bg-surface-subtle);font-size:0.9rem;">
                      <div style="font-weight:700;">${escapeHtml(m.prompt)}</div>
                      <div style="color:var(--success);margin-top:3px;">Đáp án đúng: ${escapeHtml(m.correctText)}</div>
                      <div style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${escapeHtml(m.explain)}</div>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>`
            : ''
        }
      `;

      document.getElementById('btn-quiz-restart').addEventListener('click', () => startQuiz(quizState.mode));
      return;
    }

    const q = quizState.questions[quizState.current];
    const pct = Math.round(((quizState.current + 1) / quizState.questions.length) * 100);

    host.innerHTML = `
      <div class="deck-meta" style="margin-bottom:10px;">
        <span>Câu <strong>${quizState.current + 1}</strong> / ${quizState.questions.length}</span>
        <span>Điểm: <strong>${quizState.score}</strong> ${quizState.combo >= 2 ? `· 🔥 Chuỗi ${quizState.combo}` : ''}</span>
      </div>
      <div class="progress-track" style="margin-bottom:22px;">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>

      <div style="margin-bottom:8px;">
        <div style="font-size:0.84rem;color:var(--text-muted);margin-bottom:6px;">${escapeHtml(q.sub || '')}</div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
          <h2 style="font-family:var(--font-serif);font-size:1.75rem;margin:0;line-height:1.3;">${escapeHtml(q.prompt)}</h2>
          ${
            q.audioWord
              ? `<button type="button" id="btn-quiz-speak" class="speak-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  Nghe phát âm
                </button>`
              : ''
          }
        </div>
      </div>

      <div class="quiz-options">
        ${q.options
          .map((opt, idx) => {
            let cls = 'quiz-option';
            if (quizState.answered) {
              if (idx === q.answer) cls += ' correct';
              else if (idx === quizState.chosenIdx) cls += ' wrong';
            }
            return `
              <button type="button" class="${cls}" data-qopt="${idx}" ${quizState.answered ? 'disabled' : ''}>
                <span class="opt-key">${idx + 1}</span>
                <span>${escapeHtml(opt)}</span>
              </button>
            `;
          })
          .join('')}
      </div>

      ${
        quizState.answered
          ? `
        <div class="quiz-feedback ${quizState.chosenIdx === q.answer ? 'ok' : 'err'}">
          <strong>${quizState.chosenIdx === q.answer ? '✓ Chính xác!' : '✕ Chưa đúng.'}</strong> ${escapeHtml(q.explain)}
        </div>
        <div style="display:flex;justify-content:flex-end;margin-top:16px;">
          <button type="button" id="btn-quiz-next" class="btn btn-primary">
            ${quizState.current === quizState.questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo →'}
          </button>
        </div>
      `
          : ''
      }
    `;

    const speakBtn = document.getElementById('btn-quiz-speak');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => speakText(q.audioWord, 0.95, speakBtn));
      if (quizState.mode === 'listen' && !quizState.answered) {
        setTimeout(() => speakText(q.audioWord, 0.92), 180);
      }
    }

    host.querySelectorAll('[data-qopt]').forEach((btn) => {
      btn.addEventListener('click', () => submitQuizOption(Number(btn.dataset.qopt)));
    });

    const nextBtn = document.getElementById('btn-quiz-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', advanceQuiz);
    }
  }

  function submitQuizOption(idx) {
    if (quizState.answered || quizState.finished) return;
    const q = quizState.questions[quizState.current];
    quizState.answered = true;
    quizState.chosenIdx = idx;

    if (idx === q.answer) {
      quizState.score += 1;
      quizState.combo += 1;
      addXp(10);
    } else {
      quizState.combo = 0;
      quizState.mistakes.push({
        prompt: q.audioWord ? `${q.audioWord} (${q.prompt})` : q.prompt,
        correctText: q.options[q.answer],
        explain: q.explain
      });
    }

    if (q.speakAfter) speakText(q.speakAfter, 0.95);
    renderQuiz();
  }

  function advanceQuiz() {
    if (quizState.current < quizState.questions.length - 1) {
      quizState.current += 1;
      quizState.answered = false;
      quizState.chosenIdx = null;
    } else {
      quizState.finished = true;
      addXp(25, 'Hoàn thành bài kiểm tra!');
    }
    renderQuiz();
  }

  /* ------------------------------------------------------------------------
     Backup / Restore Progress (JSON)
     ------------------------------------------------------------------------ */
  function exportProgress() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lingocraft-progress-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Đã tải xuống bản sao lưu tiến độ học!');
  }

  function importProgress(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (typeof parsed !== 'object' || !parsed) throw new Error('Invalid');
        state = { ...DEFAULT_STATE, ...parsed };
        saveState();
        applyTheme();
        applyAccentButtons();
        renderHeaderStats();
        rebuildFlashcardDeck(false);
        renderWordbook();
        showToast('Đã khôi phục tiến độ học thành công!');
      } catch (_) {
        showToast('Tệp sao lưu không hợp lệ.');
      }
    };
    reader.readAsText(file);
  }

  /* ------------------------------------------------------------------------
     Wire Up Global Events & Keyboard Shortcuts
     ------------------------------------------------------------------------ */
  function bindEvents() {
    // Nav tabs
    document.querySelectorAll('.nav-tab').forEach((btn) => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      saveState();
      applyTheme();
    });

    // Accent toggle (US / UK)
    document.querySelectorAll('[data-accent]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.accent = btn.dataset.accent;
        saveState();
        applyAccentButtons();
        showToast(`Đã chuyển giọng đọc sang ${state.accent === 'en-GB' ? 'Anh - Anh (UK)' : 'Anh - Mỹ (US)'}`);
      });
    });

    // Flashcard interactions
    const fcCard = document.getElementById('flashcard-card');
    fcCard.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      fcFlipped = !fcFlipped;
      fcCard.classList.toggle('is-flipped', fcFlipped);
    });

    document.getElementById('fc-speak-normal').addEventListener('click', (e) => {
      e.stopPropagation();
      if (fcDeck[fcIndex]) speakText(fcDeck[fcIndex].word, 1.0, e.currentTarget);
    });

    document.getElementById('fc-speak-slow').addEventListener('click', (e) => {
      e.stopPropagation();
      if (fcDeck[fcIndex]) speakText(fcDeck[fcIndex].word, 0.7, e.currentTarget);
    });

    document.getElementById('fc-speak-example').addEventListener('click', (e) => {
      e.stopPropagation();
      if (fcDeck[fcIndex]) speakText(fcDeck[fcIndex].example, 0.94, e.currentTarget);
    });

    document.getElementById('fc-prev').addEventListener('click', () => {
      if (!fcDeck.length) return;
      fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length;
      fcFlipped = false;
      renderFlashcard();
    });

    document.getElementById('fc-next').addEventListener('click', () => {
      if (!fcDeck.length) return;
      fcIndex = (fcIndex + 1) % fcDeck.length;
      fcFlipped = false;
      renderFlashcard();
    });

    document.getElementById('fc-shuffle').addEventListener('click', () => {
      rebuildFlashcardDeck(true);
      showToast('Đã xáo trộn bộ thẻ!');
    });

    document.getElementById('fc-review-toggle').addEventListener('click', (e) => {
      fcReviewOnly = !fcReviewOnly;
      e.currentTarget.classList.toggle('btn-primary', fcReviewOnly);
      e.currentTarget.classList.toggle('btn-secondary', !fcReviewOnly);
      e.currentTarget.textContent = fcReviewOnly ? 'Đang lọc: Chưa thuộc' : 'Chỉ xem từ chưa thuộc';
      rebuildFlashcardDeck(false);
    });

    document.getElementById('srs-hard').addEventListener('click', () => markCurrentWord('hard'));
    document.getElementById('srs-good').addEventListener('click', () => markCurrentWord('good'));
    document.getElementById('srs-easy').addEventListener('click', () => markCurrentWord('easy'));

    // Wordbook events
    document.getElementById('wb-search').addEventListener('input', (e) => {
      wbSearch = e.target.value;
      renderWordbook();
    });

    document.querySelectorAll('[data-wb-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        wbFilter = btn.dataset.wbFilter;
        document.querySelectorAll('[data-wb-filter]').forEach((b) =>
          b.classList.toggle('active', b.dataset.wbFilter === wbFilter)
        );
        renderWordbook();
      });
    });

    const addPanel = document.getElementById('add-word-panel');
    document.getElementById('btn-toggle-add-word').addEventListener('click', () => {
      addPanel.classList.toggle('hidden');
      if (!addPanel.classList.contains('hidden')) {
        document.getElementById('new-word-en').focus();
      }
    });

    document.getElementById('add-word-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const word = document.getElementById('new-word-en').value.trim();
      const meaning = document.getElementById('new-word-vi').value.trim();
      const ipa = document.getElementById('new-word-ipa').value.trim();
      const pos = document.getElementById('new-word-pos').value;
      const example = document.getElementById('new-word-ex').value.trim();

      if (!word || !meaning) {
        showToast('Vui lòng nhập từ tiếng Anh và nghĩa tiếng Việt.');
        return;
      }

      const newEntry = {
        id: `custom-${Date.now()}`,
        topic: 'daily',
        level: 'Tự thêm',
        pos,
        word,
        ipa,
        meaning,
        example: example || `I learned the word "${word}" today.`,
        exampleVi: 'Ví dụ cá nhân bạn tự thêm.',
        tip: 'Từ vựng cá nhân của bạn.',
        isCustom: true
      };

      state.customWords.unshift(newEntry);
      addXp(10, `Đã thêm từ "${word}"`);
      e.target.reset();
      addPanel.classList.add('hidden');
      rebuildFlashcardDeck(false);
      renderWordbook();
    });

    // Listening Studio events
    document.querySelectorAll('[data-listen-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        listenMode = btn.dataset.listenMode;
        renderListening();
      });
    });

    document.getElementById('listen-play-normal').addEventListener('click', (e) => {
      const ex = DATA.listeningExercises[listenIndex];
      speakText(ex.sentence, 0.96, e.currentTarget);
    });

    document.getElementById('listen-play-slow').addEventListener('click', (e) => {
      const ex = DATA.listeningExercises[listenIndex];
      speakText(ex.sentence, 0.72, e.currentTarget);
    });

    document.getElementById('listen-check-btn').addEventListener('click', checkListeningAnswer);

    document.getElementById('listen-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkListeningAnswer();
      }
    });

    document.getElementById('listen-prev').addEventListener('click', () => {
      listenIndex = (listenIndex - 1 + DATA.listeningExercises.length) % DATA.listeningExercises.length;
      renderListening();
    });

    document.getElementById('listen-next').addEventListener('click', () => {
      listenIndex = (listenIndex + 1) % DATA.listeningExercises.length;
      renderListening();
    });

    // Quiz mode switcher
    document.querySelectorAll('[data-quiz-mode]').forEach((btn) => {
      btn.addEventListener('click', () => startQuiz(btn.dataset.quizMode));
    });

    // Export / Import
    document.getElementById('btn-export-progress').addEventListener('click', exportProgress);
    document.getElementById('input-import-progress').addEventListener('change', (e) => {
      importProgress(e.target.files[0]);
      e.target.value = '';
    });

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (activeTab === 'flashcards') {
        if (e.code === 'Space') {
          e.preventDefault();
          fcFlipped = !fcFlipped;
          document.getElementById('flashcard-card').classList.toggle('is-flipped', fcFlipped);
        } else if (e.key === 'ArrowRight') {
          document.getElementById('fc-next').click();
        } else if (e.key === 'ArrowLeft') {
          document.getElementById('fc-prev').click();
        } else if (e.key.toLowerCase() === 's') {
          if (fcDeck[fcIndex]) speakText(fcDeck[fcIndex].word, 1.0);
        } else if (e.key === '1') {
          markCurrentWord('hard');
        } else if (e.key === '2') {
          markCurrentWord('good');
        } else if (e.key === '3') {
          markCurrentWord('easy');
        }
      } else if (activeTab === 'quiz' && !quizState.finished) {
        if (['1', '2', '3', '4'].includes(e.key) && !quizState.answered) {
          submitQuizOption(Number(e.key) - 1);
        } else if (e.key === 'Enter' && quizState.answered) {
          advanceQuiz();
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     Init
     ------------------------------------------------------------------------ */
  function init() {
    applyTheme();
    applyAccentButtons();
    renderHeaderStats();
    renderTopicPills();
    rebuildFlashcardDeck(false);
    renderListening();
    renderGrammar();
    renderDialogue();
    bindEvents();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
