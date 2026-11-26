/* ==========================================================================
   LingoCraft C1 Studio — Personalized 6-Month C1 Coaching Application
   ========================================================================== */

(function () {
  const STORAGE_KEY = 'lingocraft_c1_state_v2';
  const DATA = window.C1_DATA;
  const AUDIO = window.LingoAudio;
  const SM2 = window.LingoSM2;

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  const DEFAULT_STATE = {
    theme: 'light',
    accent: 'en-US', // en-US | en-GB | en-AU
    speechRate: 0.96,
    preferHumanMp3: true,
    useKokoro: false,
    kokoroVoice: 'af_heart',
    browserVoiceURI: '',
    geminiApiKey: '',
    xp: 0,
    dailyXp: 0,
    dailyGoal: 120,
    streak: 1,
    lastStudyDate: todayStr(),
    completedUnits: [], // e.g. ['w1-2']
    dailyTasksDone: {}, // { '2026-11-25': ['m1', 'e1'] }
    sm2Records: {}, // { [cardId]: { reps, interval, ease, dueAt, lapses, lastReviewed } }
    customCollocations: [],
    completedGrammar: [],
    writingJournal: [], // { id, date, promptTitle, text, words }
    errorLog: [
      {
        id: 'err-seed-1',
        category: 'Collocation',
        wrong: 'make a reputation / make research',
        correct: 'establish a reputation / conduct research',
        note: 'Điểm nghẽn #1 từ bài chẩn đoán: tránh dịch từng từ tiếng Việt sang động từ "make/keep".',
        date: todayStr(),
        resolved: false
      },
      {
        id: 'err-seed-2',
        category: 'Grammar C1',
        wrong: 'It is imperative that he attends / If I studied earlier, I would have been fluent now',
        correct: 'It is imperative that he attend / Had I studied earlier, I would be fluent now',
        note: 'Điểm nghẽn #2: Thức giả định luôn dùng V nguyên mẫu; Mixed Conditional kết quả hiện tại dùng would + V.',
        date: todayStr(),
        resolved: false
      }
    ]
  };

  let state = loadState();

  // Ephemeral UI state
  let activeTab = 'roadmap';
  let selectedDayOfWeek = new Date().getDay();
  let colCategory = 'all';
  let colDueOnly = false;
  let colDeck = [];
  let colIndex = 0;
  let colFlipped = false;

  let grammarId = DATA.grammarModules[0].id;
  let grammarAnswers = {};

  let writingPromptId = DATA.writingPrompts[0].id;

  let listenIdx = 0;
  let listenMode = 'blank'; // 'blank' | 'full'
  let speakingTopicIdx = 0;
  let speak321Round = 3; // 3 -> 2 -> 1 min
  let speak321Remaining = 180;
  let speak321Interval = null;
  let isRecordingVoice = false;
  let recordedAudioUrl = null;
  let isRecognizing = false;

  let sessionTimerSec = 15 * 60;
  let sessionTimerRunning = false;
  let sessionTimerHandle = null;

  let quizState = {
    mode: 'collocation',
    questions: [],
    current: 0,
    score: 0,
    answered: false,
    chosenIdx: null,
    finished: false
  };

  /* ------------------------------------------------------------------------
     Persistence & Helpers
     ------------------------------------------------------------------------ */
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(DEFAULT_STATE);
      const parsed = JSON.parse(raw);
      const merged = { ...structuredClone(DEFAULT_STATE), ...parsed };

      const today = todayStr();
      if (merged.lastStudyDate !== today) {
        const last = new Date(merged.lastStudyDate + 'T00:00:00');
        const now = new Date(today + 'T00:00:00');
        const diff = Math.round((now - last) / 86400000);
        merged.dailyXp = 0;
        merged.streak = diff === 1 ? (merged.streak || 0) + 1 : 1;
        merged.lastStudyDate = today;
      }
      return merged;
    } catch (_) {
      return structuredClone(DEFAULT_STATE);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function esc(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function normalizeWord(w) {
    return String(w || '').toLowerCase().replace(/[^a-z0-9']/g, '');
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function addXp(amount, label) {
    state.xp += amount;
    state.dailyXp += amount;
    state.lastStudyDate = todayStr();
    saveState();
    renderHeader();
    if (label) showToast(`${label} (+${amount} XP)`);
  }

  function getAllCollocations() {
    return [...state.customCollocations, ...DATA.collocations];
  }

  function getDueCollocationsCount() {
    return getAllCollocations().filter((c) => SM2.isDue(state.sm2Records[c.id])).length;
  }

  function addErrorLogItem({ category, wrong, correct, note }) {
    const exists = state.errorLog.some(
      (e) => !e.resolved && e.correct === correct && e.wrong === wrong
    );
    if (exists) return;
    state.errorLog.unshift({
      id: `err-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      category: category || 'Grammar C1',
      wrong,
      correct,
      note: note || '',
      date: todayStr(),
      resolved: false
    });
    saveState();
    renderNavBadges();
  }

  /* ------------------------------------------------------------------------
     Unified Smart Pronunciation Helper
     ------------------------------------------------------------------------ */
  async function playSpeech(text, overrides = {}) {
    const btn = overrides.btn || null;
    const statusEl = overrides.statusEl || null;
    if (btn) btn.classList.add('speaking');

    const res = await AUDIO.speak(text, {
      accent: overrides.accent || state.accent,
      rate: typeof overrides.rate === 'number' ? overrides.rate : state.speechRate,
      preferHumanMp3: state.preferHumanMp3,
      useKokoro: state.useKokoro && AUDIO.isKokoroReady(),
      kokoroVoice: state.kokoroVoice,
      browserVoiceURI: state.browserVoiceURI,
      onGenerating: () => {
        if (statusEl) statusEl.textContent = '🧠 Đang tổng hợp giọng AI Kokoro-82M...';
      },
      onStart: (engine, voiceName) => {
        if (!statusEl) return;
        if (engine === 'human-mp3') statusEl.textContent = '🎙 Đang phát: Giọng người bản xứ thu âm thật (Free Dictionary)';
        else if (engine === 'kokoro-ai') statusEl.textContent = `🧠 Đang phát: Giọng AI Neural Kokoro-82M (${state.kokoroVoice})`;
        else statusEl.textContent = `🔊 Đang phát: ${voiceName || state.accent}`;
      },
      onEnd: () => {
        if (btn) btn.classList.remove('speaking');
      },
      onError: () => {
        if (btn) btn.classList.remove('speaking');
      }
    });

    if (btn) btn.classList.remove('speaking');
    return res;
  }

  /* ------------------------------------------------------------------------
     Header, Theme, Accent & Navigation
     ------------------------------------------------------------------------ */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.innerHTML =
        state.theme === 'dark'
          ? '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>'
          : '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
    }
  }

  function renderHeader() {
    document.getElementById('stat-streak').textContent = state.streak;
    document.getElementById('stat-xp').textContent = state.xp;
    document.querySelectorAll('[data-accent]').forEach((b) => {
      b.classList.toggle('active', b.dataset.accent === state.accent);
    });

    const engineBtn = document.getElementById('btn-audio-settings');
    if (engineBtn) {
      const neural = state.useKokoro && AUDIO.isKokoroReady();
      engineBtn.classList.toggle('neural-on', neural);
      engineBtn.innerHTML = neural
        ? '🧠 AI Kokoro Bật'
        : '🎙 Cấu hình Giọng';
    }
    renderNavBadges();
  }

  function renderNavBadges() {
    const dueEl = document.getElementById('nav-due-count');
    if (dueEl) dueEl.textContent = getDueCollocationsCount();
    const errEl = document.getElementById('nav-err-count');
    const unresolved = state.errorLog.filter((e) => !e.resolved).length;
    if (errEl) {
      errEl.textContent = unresolved;
      errEl.classList.toggle('hidden', unresolved === 0);
    }
  }

  function switchTab(tabId) {
    AUDIO.stop();
    AUDIO.stopSpeechRecognition();
    activeTab = tabId;

    document.querySelectorAll('.nav-tab').forEach((btn) => {
      const active = btn.dataset.tab === tabId;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.tab-panel').forEach((p) => {
      p.classList.toggle('active', p.id === `panel-${tabId}`);
    });

    if (tabId === 'roadmap') renderRoadmap();
    if (tabId === 'collocations') renderCollocationCard();
    if (tabId === 'grammar') renderGrammar();
    if (tabId === 'writing') renderWriting();
    if (tabId === 'speaking') renderSpeakingStudio();
    if (tabId === 'review') renderReviewTab();
  }

  /* ------------------------------------------------------------------------
     TAB 1: PERSONAL C1 ROADMAP & DAILY PLANNER
     ------------------------------------------------------------------------ */
  function renderRoadmap() {
    // 1. Bottlenecks
    const bnHost = document.getElementById('bottleneck-grid');
    bnHost.innerHTML = DATA.profile.bottlenecks
      .map(
        (b) => `
      <article class="bottleneck-card">
        <div class="bottleneck-head">
          <h3>${esc(b.title)}</h3>
          <span class="badge badge-accent">${esc(b.score)}</span>
        </div>
        <p>${esc(b.desc)}</p>
        <div style="margin-top:auto;padding-top:6px;">
          <button type="button" class="btn btn-soft btn-sm" data-jump-tab="${b.actionTab}">
            ${esc(b.actionLabel)} →
          </button>
        </div>
      </article>
    `
      )
      .join('');

    bnHost.querySelectorAll('[data-jump-tab]').forEach((btn) => {
      btn.addEventListener('click', () => switchTab(btn.dataset.jumpTab));
    });

    // 2. Weekday selector + Today's Sessions
    const dayOrder = [1, 2, 3, 4, 5, 6, 0];
    const dayBar = document.getElementById('weekday-pills');
    dayBar.innerHTML = dayOrder
      .map(
        (d) =>
          `<button type="button" class="pill ${selectedDayOfWeek === d ? 'active' : ''}" data-dow="${d}">${DATA.weeklySchedule[d].dayName}</button>`
      )
      .join('');
    dayBar.querySelectorAll('[data-dow]').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedDayOfWeek = Number(btn.dataset.dow);
        renderRoadmap();
      });
    });

    const sched = DATA.weeklySchedule[selectedDayOfWeek];
    const todayKey = `${todayStr()}-d${selectedDayOfWeek}`;
    const doneList = state.dailyTasksDone[todayKey] || [];

    const renderTasks = (tasks) =>
      tasks
        .map((t) => {
          const isDone = doneList.includes(t.id);
          return `
          <li class="task-item ${isDone ? 'done' : ''}">
            <input type="checkbox" data-task-id="${t.id}" ${isDone ? 'checked' : ''} />
            <div class="task-text">
              <strong>${esc(t.title)}</strong>
              <span>${esc(t.desc)}</span>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" data-go-tab="${t.tab}">Mở</button>
          </li>
        `;
        })
        .join('');

    document.getElementById('morning-session-list').innerHTML = renderTasks(sched.morning);
    document.getElementById('evening-session-list').innerHTML = renderTasks(sched.evening);

    document.querySelectorAll('[data-task-id]').forEach((cb) => {
      cb.addEventListener('change', () => {
        const id = cb.dataset.taskId;
        const arr = state.dailyTasksDone[todayKey] || [];
        if (cb.checked && !arr.includes(id)) {
          arr.push(id);
          state.dailyTasksDone[todayKey] = arr;
          addXp(15, 'Hoàn thành phiên học hôm nay!');
        } else if (!cb.checked) {
          state.dailyTasksDone[todayKey] = arr.filter((x) => x !== id);
          saveState();
        }
        renderRoadmap();
      });
    });

    document.querySelectorAll('[data-go-tab]').forEach((btn) => {
      btn.addEventListener('click', () => switchTab(btn.dataset.goTab));
    });

    // 3. 24-Week / 3-Phase Roadmap Tracker
    const totalUnits = DATA.phases.reduce((acc, p) => acc + p.units.length, 0);
    const doneUnits = state.completedUnits.length;
    const pct = Math.round((doneUnits / totalUnits) * 100);
    document.getElementById('roadmap-progress-label').textContent = `${doneUnits}/${totalUnits} chặng tuần (${pct}%)`;
    document.getElementById('roadmap-progress-fill').style.width = `${pct}%`;

    const phaseGrid = document.getElementById('phase-grid');
    phaseGrid.innerHTML = DATA.phases
      .map(
        (p) => `
      <div class="phase-col">
        <div>
          <span class="badge badge-brand">${esc(p.badge)}</span>
          <h3>${esc(p.title)}</h3>
          <div style="font-size:0.8rem;color:var(--text-secondary);">${esc(p.kpi)}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${p.units
            .map((u) => {
              const checked = state.completedUnits.includes(u.id);
              return `
              <label class="week-item ${checked ? 'completed' : ''}" style="cursor:pointer;">
                <input type="checkbox" data-unit-id="${u.id}" ${checked ? 'checked' : ''} />
                <div>
                  <strong>${esc(u.label)}</strong>
                  <p>${esc(u.detail)}</p>
                </div>
              </label>
            `;
            })
            .join('')}
        </div>
        <div style="margin-top:auto;padding-top:8px;border-top:1px solid var(--border-subtle);font-size:0.76rem;color:var(--text-muted);">
          <strong>Tài liệu chuẩn:</strong> ${esc(p.resources)}
        </div>
      </div>
    `
      )
      .join('');

    phaseGrid.querySelectorAll('[data-unit-id]').forEach((cb) => {
      cb.addEventListener('change', () => {
        const id = cb.dataset.unitId;
        if (cb.checked && !state.completedUnits.includes(id)) {
          state.completedUnits.push(id);
          addXp(30, 'Hoàn thành mốc lộ trình C1!');
        } else if (!cb.checked) {
          state.completedUnits = state.completedUnits.filter((x) => x !== id);
          saveState();
        }
        renderRoadmap();
      });
    });
  }

  function updateSessionClockUI() {
    const mins = String(Math.floor(sessionTimerSec / 60)).padStart(2, '0');
    const secs = String(sessionTimerSec % 60).padStart(2, '0');
    const el = document.getElementById('session-timer-clock');
    if (el) el.textContent = `${mins}:${secs}`;
  }

  function exportCalendarICS() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const stamp = `${y}${m}${d}T010000Z`;

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//LingoCraft C1 Studio//VN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `UID:lingocraft-morning-${y}${m}${d}@local`,
      `DTSTAMP:${stamp}`,
      `DTSTART;TZID=Asia/Ho_Chi_Minh:${y}${m}${d}T080000`,
      `DTEND;TZID=Asia/Ho_Chi_Minh:${y}${m}${d}T084500`,
      'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR',
      'SUMMARY:LingoCraft C1 — Phiên Sáng (45p Input: SM-2 Collocations + Deep Listening)',
      'DESCRIPTION:15p Ôn Collocations SM-2 + 30p Nghe sâu/Chép chính tả hoặc Đọc phân tích.',
      'END:VEVENT',
      'BEGIN:VEVENT',
      `UID:lingocraft-evening-${y}${m}${d}@local`,
      `DTSTAMP:${stamp}`,
      `DTSTART;TZID=Asia/Ho_Chi_Minh:${y}${m}${d}T200000`,
      `DTEND;TZID=Asia/Ho_Chi_Minh:${y}${m}${d}T210000`,
      'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR',
      'SUMMARY:LingoCraft C1 — Phiên Tối (60p Output: Ngữ pháp C1 + Shadowing + Micro-Writing)',
      'DESCRIPTION:20p Ngữ pháp C1 + 20p Shadowing/3-2-1 Speaking + 20p Micro-Writing 2 câu hoặc Paraphrasing.',
      'END:VEVENT',
      'BEGIN:VEVENT',
      `UID:lingocraft-sat-${y}${m}${d}@local`,
      `DTSTAMP:${stamp}`,
      `DTSTART;TZID=Asia/Ho_Chi_Minh:${y}${m}${d}T090000`,
      `DTEND;TZID=Asia/Ho_Chi_Minh:${y}${m}${d}T104500`,
      'RRULE:FREQ=WEEKLY;BYDAY=SA',
      'SUMMARY:LingoCraft C1 — Kiểm tra Mini Use of English & Review Error Log',
      'DESCRIPTION:60p Use of English + 45p Mô phỏng Speaking & rà soát Error Log.',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lich-hoc-tieng-anh-c1-6-thang.ics';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Đã tải tệp lịch .ics — nhập vào Google Calendar để tự động nhắc giờ!');
  }

  /* ------------------------------------------------------------------------
     TAB 2: COLLOCATIONS & SM-2 ANKI + LIVE FREE DICTIONARY EXPLORER
     ------------------------------------------------------------------------ */
  function rebuildCollocationDeck(shouldShuffle = false) {
    let list = getAllCollocations();
    if (colCategory !== 'all') list = list.filter((c) => c.category === colCategory);
    if (colDueOnly) {
      const due = list.filter((c) => SM2.isDue(state.sm2Records[c.id]));
      if (due.length) list = due;
    }
    colDeck = shouldShuffle ? shuffle(list) : list;
    colIndex = 0;
    colFlipped = false;
    renderCollocationCard();
  }

  function renderCollocationCategories() {
    const host = document.getElementById('col-cat-pills');
    host.innerHTML = DATA.collocationCategories
      .map(
        (c) =>
          `<button type="button" class="pill ${colCategory === c.id ? 'active' : ''}" data-ccat="${c.id}">${esc(c.name)}</button>`
      )
      .join('');
    host.querySelectorAll('[data-ccat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        colCategory = btn.dataset.ccat;
        renderCollocationCategories();
        rebuildCollocationDeck(false);
      });
    });
  }

  function renderCollocationCard() {
    const all = getAllCollocations();
    let dueCount = 0;
    let masteredCount = 0;
    let learningCount = 0;
    all.forEach((c) => {
      const st = SM2.statusOf(state.sm2Records[c.id]);
      if (st === 'mastered') masteredCount += 1;
      else if (st === 'learning') learningCount += 1;
      else dueCount += 1;
    });
    document.getElementById('sm2-due-stat').textContent = dueCount;
    document.getElementById('sm2-learning-stat').textContent = learningCount;
    document.getElementById('sm2-mastered-stat').textContent = masteredCount;

    if (!colDeck.length) return;
    const item = colDeck[colIndex];
    const rec = state.sm2Records[item.id];
    const st = SM2.statusOf(rec);
    const stBadge =
      st === 'mastered'
        ? '<span class="badge badge-success">Vững (≥14 ngày)</span>'
        : st === 'learning'
        ? `<span class="badge badge-info">Ôn sau ${rec.interval} ngày</span>`
        : '<span class="badge badge-warning">Cần ôn hôm nay</span>';

    document.getElementById('col-counter').textContent = `Cụm ${colIndex + 1} / ${colDeck.length}`;
    document.getElementById('col-progress-fill').style.width = `${Math.round(((colIndex + 1) / colDeck.length) * 100)}%`;
    document.getElementById('col-card').classList.toggle('is-flipped', colFlipped);

    document.getElementById('col-front-badges').innerHTML = `
      <span class="badge badge-brand">${esc(item.level)}</span>
      <span class="badge badge-neutral">${esc(item.category)}</span>
    `;
    document.getElementById('col-front-status').innerHTML = stBadge;
    document.getElementById('col-chunk').textContent = item.chunk;
    document.getElementById('col-ipa').textContent = item.ipa || '';
    document.getElementById('col-audio-status').textContent = 'Bấm nghe cụm hoặc nghe từ khóa (giọng người thật MP3)';

    document.getElementById('col-back-chunk').textContent = item.chunk;
    document.getElementById('col-back-status').innerHTML = stBadge;
    document.getElementById('col-meaning').textContent = item.meaning;
    document.getElementById('col-example-en').textContent = item.example;
    document.getElementById('col-example-vi').textContent = item.exampleVi;
    document.getElementById('col-trap').innerHTML = item.trap ? `<strong>Bẫy dịch Việt–Anh:</strong> ${esc(item.trap)}` : '';

    // Dynamic SM-2 interval previews
    document.getElementById('sm2-lbl-again').textContent = SM2.previewLabel(rec, 'again');
    document.getElementById('sm2-lbl-hard').textContent = SM2.previewLabel(rec, 'hard');
    document.getElementById('sm2-lbl-good').textContent = SM2.previewLabel(rec, 'good');
    document.getElementById('sm2-lbl-easy').textContent = SM2.previewLabel(rec, 'easy');
  }

  function rateCollocationSM2(rating) {
    if (!colDeck.length) return;
    const item = colDeck[colIndex];
    const next = SM2.schedule(state.sm2Records[item.id], rating);
    state.sm2Records[item.id] = next;

    if (rating === 'again') {
      addErrorLogItem({
        category: 'Collocation',
        wrong: `Quên cụm: ${item.chunk}`,
        correct: `${item.chunk} = ${item.meaning}`,
        note: item.trap || item.example
      });
      showToast(`Đã hẹn ôn lại "${item.chunk}" sau 10 phút & ghi Error Log`);
      saveState();
    } else {
      const xpGain = rating === 'easy' ? 12 : rating === 'good' ? 8 : 5;
      addXp(xpGain, `SM-2: Ôn lại "${item.chunk}" sau ${next.interval} ngày`);
    }

    colIndex = (colIndex + 1) % colDeck.length;
    colFlipped = false;
    renderCollocationCard();
    renderNavBadges();
  }

  async function runLiveWordLookup() {
    const input = document.getElementById('lookup-input');
    const out = document.getElementById('lookup-result');
    const word = input.value.trim();
    if (!word) return;

    out.classList.remove('hidden');
    out.innerHTML = `<span style="color:var(--text-muted);">Đang tra Free Dictionary API & Datamuse cho "${esc(word)}"...</span>`;

    const res = await AUDIO.lookupWordWithCollocations(word);
    if (!res || (!res.meanings.length && !res.synonyms.length)) {
      out.innerHTML = `<span style="color:var(--danger);">Không tìm thấy dữ liệu từ điển cho "${esc(word)}". Thử một từ đơn tiếng Anh chuẩn nhé.</span>`;
      return;
    }

    const firstDef = res.meanings[0] && res.meanings[0].definitions[0];
    const hasHumanMp3 = Boolean(res.audios && (res.audios.us || res.audios.uk || res.audios.any));

    out.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
        <div>
          <strong style="font-family:var(--font-serif);font-size:1.25rem;">${esc(res.word)}</strong>
          <span style="font-family:var(--font-mono);font-size:0.82rem;color:var(--text-muted);margin-left:6px;">${esc(res.ipa)}</span>
          ${hasHumanMp3 ? '<span class="badge badge-success" style="margin-left:6px;">🎙 MP3 Người thật</span>' : ''}
        </div>
        <div style="display:flex;gap:6px;">
          <button type="button" id="btn-lookup-speak" class="btn btn-secondary btn-sm">🔊 Nghe</button>
          <button type="button" id="btn-lookup-save" class="btn btn-primary btn-sm">+ Lưu vào SM-2</button>
        </div>
      </div>
      ${
        firstDef
          ? `<div style="margin-top:8px;"><strong>Định nghĩa (${esc(res.meanings[0].pos)}):</strong> ${esc(firstDef.def)}</div>
             ${firstDef.example ? `<div style="font-size:0.82rem;color:var(--text-secondary);margin-top:3px;"><em>"${esc(firstDef.example)}"</em></div>` : ''}`
          : ''
      }
      ${
        res.collocations.length
          ? `<div style="margin-top:10px;">
               <div style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">Collocations thường đi kèm (Datamuse):</div>
               <div class="syn-chips">${res.collocations.map((c) => `<span class="syn-chip" data-speak-chip="${esc(c)}">${esc(c)}</span>`).join('')}</div>
             </div>`
          : ''
      }
      ${
        res.synonyms.length
          ? `<div style="margin-top:10px;">
               <div style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">Từ đồng nghĩa / nâng cấp C1:</div>
               <div class="syn-chips">${res.synonyms.map((s) => `<span class="syn-chip" data-lookup-chip="${esc(s)}">${esc(s)}</span>`).join('')}</div>
             </div>`
          : ''
      }
    `;

    document.getElementById('btn-lookup-speak').addEventListener('click', (e) => {
      playSpeech(res.word, { btn: e.currentTarget });
    });

    document.getElementById('btn-lookup-save').addEventListener('click', () => {
      const meaning = firstDef ? firstDef.def : 'Từ tự tra từ điển';
      const newCard = {
        id: `custom-${Date.now()}`,
        category: 'academic',
        level: 'Tự tra',
        headword: res.word,
        chunk: res.collocations[0] || res.word,
        ipa: res.ipa,
        meaning,
        trap: res.synonyms.length ? `Đồng nghĩa C1: ${res.synonyms.slice(0, 5).join(', ')}` : '',
        example: (firstDef && firstDef.example) || `Make sure to use "${res.word}" naturally in context.`,
        exampleVi: 'Thẻ tự lưu từ bộ tra từ điển C1.'
      };
      state.customCollocations.unshift(newCard);
      addXp(10, `Đã lưu "${newCard.chunk}" vào bộ SM-2!`);
      rebuildCollocationDeck(false);
    });

    out.querySelectorAll('[data-speak-chip]').forEach((chip) => {
      chip.addEventListener('click', () => playSpeech(chip.dataset.speakChip));
    });

    out.querySelectorAll('[data-lookup-chip]').forEach((chip) => {
      chip.addEventListener('click', () => {
        input.value = chip.dataset.lookupChip;
        runLiveWordLookup();
      });
    });
  }

  /* ------------------------------------------------------------------------
     TAB 3: C1 GRAMMAR STUDIO (BOTTLENECK #2)
     ------------------------------------------------------------------------ */
  function renderGrammar() {
    const sidebar = document.getElementById('grammar-sidebar');
    const article = document.getElementById('grammar-article');

    sidebar.innerHTML = DATA.grammarModules
      .map((m) => {
        const done = state.completedGrammar.includes(m.id);
        return `
        <button type="button" class="side-nav-item ${m.id === grammarId ? 'active' : ''}" data-gid="${m.id}">
          <strong>${done ? '✓ ' : ''}${esc(m.title)}</strong>
          <span>${esc(m.priority)}</span>
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

    const mod = DATA.grammarModules.find((m) => m.id === grammarId) || DATA.grammarModules[0];

    article.innerHTML = `
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
        <span class="badge badge-accent">${esc(mod.priority)}</span>
        <span class="badge badge-brand">${esc(mod.level)}</span>
      </div>
      <h2 style="font-family:var(--font-serif);font-size:1.65rem;margin:0 0 6px;">${esc(mod.title)}</h2>
      <p style="margin:0;color:var(--text-secondary);font-size:0.92rem;">${esc(mod.summary)}</p>

      <div class="formula-box">
        ${mod.formulas.map((f) => `<div>${esc(f)}</div>`).join('')}
      </div>

      <h3 style="font-size:0.95rem;margin:16px 0 8px;">So sánh nâng cấp B1 → C1 (Bấm nghe ngữ điệu)</h3>
      <div class="upgrade-pair">
        <div class="upgrade-box b1">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span class="badge badge-neutral">Mức B1 thông thường</span>
            <button type="button" class="btn btn-secondary btn-sm gr-speak" data-text="${esc(mod.b1Sentence)}">🔊 Nghe</button>
          </div>
          <div>${esc(mod.b1Sentence)}</div>
        </div>
        <div class="upgrade-box c1">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span class="badge badge-brand">Nâng cấp chuẩn C1</span>
            <button type="button" class="btn btn-primary btn-sm gr-speak" data-text="${esc(mod.c1Sentence)}">🔊 Nghe C1</button>
          </div>
          <div style="font-weight:600;">${esc(mod.c1Sentence)}</div>
        </div>
      </div>

      <div class="trap-banner" style="margin:14px 0 20px;">
        <strong>Lỗi điểm nghẽn hay gặp:</strong> ${esc(mod.pitfall)}
      </div>

      <h3 style="font-size:1rem;margin:18px 0 12px;padding-top:16px;border-top:1px solid var(--border-subtle);">
        Bài tập chẩn đoán (${mod.drills.length} câu — làm sai sẽ tự động ghi vào Error Log)
      </h3>
      <div style="display:flex;flex-direction:column;gap:16px;">
        ${mod.drills
          .map((d, qi) => {
            const key = `${mod.id}-${qi}`;
            const chosen = grammarAnswers[key];
            const answered = typeof chosen === 'number';
            return `
            <div>
              <div style="font-weight:600;margin-bottom:8px;">Câu ${qi + 1}: ${esc(d.q)}</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:8px;">
                ${d.options
                  .map((opt, oi) => {
                    let cls = 'quiz-option';
                    if (answered) {
                      if (oi === d.answer) cls += ' correct';
                      else if (oi === chosen) cls += ' wrong';
                    }
                    return `<button type="button" class="${cls}" style="padding:10px 12px;" data-gd="${qi}" data-go="${oi}" ${answered ? 'disabled' : ''}>
                      <span class="opt-key">${String.fromCharCode(65 + oi)}</span>
                      <span>${esc(opt)}</span>
                    </button>`;
                  })
                  .join('')}
              </div>
              ${
                answered
                  ? `<div class="quiz-feedback ${chosen === d.answer ? 'ok' : 'err'}">
                      <strong>${chosen === d.answer ? '✓ Chính xác!' : '✕ Chưa đúng (đã lưu vào Error Log).'}</strong> ${esc(d.explain)}
                    </div>`
                  : ''
              }
            </div>
          `;
          })
          .join('')}
      </div>
    `;

    article.querySelectorAll('.gr-speak').forEach((btn) => {
      btn.addEventListener('click', () => playSpeech(btn.dataset.text, { btn }));
    });

    article.querySelectorAll('[data-gd]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qi = Number(btn.dataset.gd);
        const oi = Number(btn.dataset.go);
        const key = `${mod.id}-${qi}`;
        if (typeof grammarAnswers[key] === 'number') return;

        grammarAnswers[key] = oi;
        const drill = mod.drills[qi];
        if (oi === drill.answer) {
          addXp(12, 'Đúng câu ngữ pháp C1!');
        } else {
          addErrorLogItem({
            category: 'Grammar C1',
            wrong: `${drill.q} → Chọn sai: "${drill.options[oi]}"`,
            correct: `Đáp án đúng: "${drill.options[drill.answer]}"`,
            note: drill.explain
          });
        }

        const allDone = mod.drills.every((_, i) => typeof grammarAnswers[`${mod.id}-${i}`] === 'number');
        if (allDone && !state.completedGrammar.includes(mod.id)) {
          state.completedGrammar.push(mod.id);
          saveState();
        }
        renderGrammar();
      });
    });
  }

  /* ------------------------------------------------------------------------
     TAB 4: MICRO-WRITING (20:00) & PARAPHRASING C1 (BOTTLENECK #3)
     ------------------------------------------------------------------------ */
  function renderWriting() {
    const promptList = document.getElementById('writing-prompt-pills');
    promptList.innerHTML = DATA.writingPrompts
      .map(
        (p) =>
          `<button type="button" class="pill ${p.id === writingPromptId ? 'active' : ''}" data-wp="${p.id}">
            ${p.mode === 'micro' ? '✍️ Micro 2 câu' : p.mode === 'paraphrase' ? '🔁 Paraphrase' : '📄 Essay C1'}: ${esc(p.title)}
          </button>`
      )
      .join('');

    promptList.querySelectorAll('[data-wp]').forEach((btn) => {
      btn.addEventListener('click', () => {
        writingPromptId = btn.dataset.wp;
        document.getElementById('writing-model-box').classList.add('hidden');
        document.getElementById('ai-writing-feedback').classList.add('hidden');
        renderWriting();
      });
    });

    const p = DATA.writingPrompts.find((x) => x.id === writingPromptId) || DATA.writingPrompts[0];
    document.getElementById('wp-stage-badge').textContent = p.stage;
    document.getElementById('wp-title').textContent = p.title;
    document.getElementById('wp-instruction').textContent = p.instruction;
    document.getElementById('wp-hint').textContent = p.viHint;
    document.getElementById('wp-model-text').textContent = p.model;

    analyzeWritingDraft();
    renderWritingJournal();
  }

  function analyzeWritingDraft() {
    const text = (document.getElementById('writing-textarea').value || '').trim();
    const p = DATA.writingPrompts.find((x) => x.id === writingPromptId) || DATA.writingPrompts[0];

    const words = text ? text.split(/\s+/).filter(Boolean) : [];
    const sentences = text ? text.split(/[.!?]+/).map((s) => s.trim()).filter(Boolean) : [];
    const lower = text.toLowerCase();

    const matchedTargets = p.targetWords.filter((w) => lower.includes(w.toLowerCase()));
    const hasC1Syntax =
      /\b(not only|seldom|hardly|no sooner|had i|had we|had the|imperative that|essential that|what .+ is|it is .+ that|despite|whereas|consequently|nevertheless|that being said)\b/i.test(
        text
      );

    document.getElementById('wp-word-count').textContent = `${words.length} từ · ${sentences.length} câu`;

    const minWords = p.mode === 'essay' ? 140 : p.mode === 'paraphrase' ? 12 : 22;
    const criteria = [
      {
        met: words.length >= minWords,
        label:
          p.mode === 'micro'
            ? `Độ dài đủ sâu (≥ ${minWords} từ cho 2 câu chất lượng)`
            : p.mode === 'essay'
            ? `Đạt độ dài đoạn văn/luận (≥ ${minWords} từ)`
            : `Hoàn chỉnh câu viết lại (≥ ${minWords} từ)`
      },
      {
        met: p.mode !== 'micro' ? sentences.length >= 1 : sentences.length >= 2,
        label: p.mode === 'micro' ? 'Đủ ít nhất 2 câu hoàn chỉnh (Micro-Writing)' : 'Cấu trúc câu hoàn chỉnh có dấu kết câu'
      },
      {
        met: matchedTargets.length >= 2,
        label: `Sử dụng từ vựng/collocation mục tiêu (${matchedTargets.length}/2+): ${p.targetWords.slice(0, 5).join(', ')}`
      },
      {
        met: hasC1Syntax,
        label: 'Có cấu trúc C1 (Đảo ngữ / Mixed Conditional / Subjunctive / Cleft / Academic Connector)'
      }
    ];

    document.getElementById('wp-criteria-list').innerHTML = criteria
      .map(
        (c) =>
          `<li class="criteria-item ${c.met ? 'met' : ''}"><span>${c.met ? '✓' : '○'}</span><span>${esc(c.label)}</span></li>`
      )
      .join('');
  }

  function renderWritingJournal() {
    const host = document.getElementById('writing-journal-list');
    if (!state.writingJournal.length) {
      host.innerHTML = `<div style="font-size:0.83rem;color:var(--text-muted);">Chưa có bài viết nào được lưu. Hoàn thành 2 câu Micro-Writing tối nay và bấm <strong>Lưu vào Nhật ký Viết</strong>!</div>`;
      return;
    }

    host.innerHTML = state.writingJournal
      .slice(0, 8)
      .map(
        (j) => `
      <div class="journal-entry">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px;">
          <strong>${esc(j.promptTitle)}</strong>
          <span style="font-size:0.74rem;color:var(--text-muted);">${esc(j.date)} · ${j.words} từ</span>
        </div>
        <div style="color:var(--text-secondary);white-space:pre-wrap;">${esc(j.text)}</div>
      </div>
    `
      )
      .join('');
  }

  async function evaluateWritingWithGemini() {
    const text = (document.getElementById('writing-textarea').value || '').trim();
    if (!text) {
      showToast('Hãy viết bài trước khi chấm bằng AI.');
      return;
    }
    if (!state.geminiApiKey) {
      showToast('Chưa có Gemini API Key — mở Cấu hình Giọng & AI ở góc trên phải để thêm khóa miễn phí.');
      openSettingsModal();
      return;
    }

    const p = DATA.writingPrompts.find((x) => x.id === writingPromptId) || DATA.writingPrompts[0];
    const box = document.getElementById('ai-writing-feedback');
    box.classList.remove('hidden');
    box.innerHTML = '🤖 Đang gửi bài cho Giám khảo AI Gemini (CEFR C1)...';

    const prompt = `Bạn là giám khảo chấm thi Cambridge C1 Advanced / IELTS Writing.
Đề bài: ${p.instruction}
Bài viết của học viên người Việt (mục tiêu nâng từ B1 lên C1, hay bị lỗi Verb+Noun collocations và ngữ pháp Mixed Conditionals/Subjunctive/Inversion):
"""
${text}
"""
Hãy nhận xét ngắn gọn bằng tiếng Việt theo 4 mục rõ ràng:
1. Ước lượng trình độ CEFR hiện tại của bài viết (B1/B1+/B2/C1).
2. Sửa lỗi Ngữ pháp & Collocations (chỉ rõ câu sai → câu đúng).
3. Gợi ý 2–3 cụm từ/cấu trúc nâng cấp lên C1.
4. Viết lại phiên bản chuẩn C1 tự nhiên (2–4 câu).`;

    try {
      const resp = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(
          state.geminiApiKey
        )}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );
      const data = await resp.json();
      if (!resp.ok) throw new Error((data.error && data.error.message) || 'Lỗi API Gemini');
      const reply =
        data.candidates &&
        data.candidates[0] &&
        data.candidates[0].content &&
        data.candidates[0].content.parts
          ? data.candidates[0].content.parts.map((x) => x.text).join('\n')
          : 'Không nhận được phản hồi.';
      box.innerHTML = `<div style="white-space:pre-wrap;line-height:1.6;">${esc(reply)}</div>`;
      addXp(20, 'Đã nhận phản hồi chấm bài C1 từ AI!');
    } catch (err) {
      box.innerHTML = `<span style="color:var(--danger);">Không gọi được Gemini API: ${esc(err.message)}</span>`;
    }
  }

  /* ------------------------------------------------------------------------
     TAB 5: DEEP LISTENING (US/UK/AU) & 3-2-1 SPEAKING / SHADOWING
     ------------------------------------------------------------------------ */
  function renderSpeakingStudio() {
    const ex = DATA.listeningPassages[listenIdx];
    document.getElementById('listen-meta').textContent = `Bài ${listenIdx + 1}/${DATA.listeningPassages.length} · ${ex.source}`;
    document.getElementById('listen-level-badge').textContent = ex.level;

    document.querySelectorAll('[data-lmode]').forEach((b) =>
      b.classList.toggle('active', b.dataset.lmode === listenMode)
    );

    const promptEl = document.getElementById('listen-prompt-box');
    const inputEl = document.getElementById('listen-answer-input');
    if (listenMode === 'blank') {
      const re = new RegExp(`\\b${ex.blankWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      promptEl.innerHTML = esc(ex.sentence).replace(
        re,
        '<span style="border-bottom:2px dashed var(--brand);padding:0 10px;color:var(--brand-text);font-weight:700;">________</span>'
      );
      inputEl.placeholder = 'Nhập từ còn thiếu bạn nghe được...';
    } else {
      promptEl.innerHTML =
        '<span style="color:var(--text-secondary);font-size:0.9rem;">Bấm <strong>Nghe câu mẫu</strong> (thử đổi giọng US / UK / AU ở thanh trên) và chép lại trọn vẹn câu tiếng Anh.</span>';
      inputEl.placeholder = 'Gõ lại cả câu tiếng Anh bạn nghe được...';
    }
    inputEl.value = '';
    document.getElementById('listen-diff-box').classList.add('hidden');
    document.getElementById('shadow-score-box').classList.add('hidden');

    // 3-2-1 Speaking Topic
    const sp = DATA.speakingTopics321[speakingTopicIdx];
    document.getElementById('sp-topic-badge').textContent = sp.topic;
    document.getElementById('sp-topic-prompt').textContent = sp.prompt;
    document.getElementById('sp-markers-box').innerHTML = sp.markers
      .map((m) => `<span class="syn-chip" data-sp-chip="${esc(m)}">🔊 ${esc(m)}</span>`)
      .join('');
    document.querySelectorAll('[data-sp-chip]').forEach((chip) => {
      chip.addEventListener('click', () => playSpeech(chip.dataset.spChip));
    });

    update321UI();
  }

  function gradeDictation() {
    const ex = DATA.listeningPassages[listenIdx];
    const userText = document.getElementById('listen-answer-input').value.trim();
    if (!userText) {
      showToast('Hãy nhập nội dung bạn nghe được trước.');
      return;
    }

    const box = document.getElementById('listen-diff-box');
    box.classList.remove('hidden');

    if (listenMode === 'blank') {
      const ok = normalizeWord(userText) === normalizeWord(ex.blankWord);
      if (ok) addXp(15, 'Nghe điền từ chính xác!');
      else {
        addErrorLogItem({
          category: 'Pronunciation',
          wrong: `Nghe nhầm từ: "${userText}"`,
          correct: `Từ đúng: "${ex.blankWord}"`,
          note: `${ex.sentence} — ${ex.note}`
        });
      }
      box.innerHTML = `
        <div style="font-weight:700;color:${ok ? 'var(--success)' : 'var(--danger)'};margin-bottom:5px;">
          ${ok ? '✓ Chính xác tuyệt đối!' : `✕ Chưa đúng — Từ đúng là "${esc(ex.blankWord)}"`}
        </div>
        <div><strong>Câu đầy đủ:</strong> ${esc(ex.sentence)}</div>
        <div style="font-size:0.86rem;color:var(--text-secondary);margin-top:4px;">${esc(ex.vi)}</div>
        <div style="font-size:0.83rem;color:var(--accent-text);margin-top:5px;"><strong>Ghi chú phát âm:</strong> ${esc(ex.note)}</div>
      `;
      return;
    }

    const expected = ex.sentence.split(/\s+/);
    const pool = userText.split(/\s+/).map(normalizeWord);
    let hits = 0;
    const chips = expected.map((w) => {
      const idx = pool.indexOf(normalizeWord(w));
      if (idx !== -1) {
        pool.splice(idx, 1);
        hits += 1;
        return `<span class="diff-ok">${esc(w)}</span>`;
      }
      return `<span class="diff-miss">${esc(w)}</span>`;
    });
    const pct = Math.round((hits / expected.length) * 100);
    if (pct >= 85) addXp(20, `Chép chính tả đạt ${pct}%!`);

    box.innerHTML = `
      <div style="font-weight:700;color:${pct >= 85 ? 'var(--success)' : 'var(--accent-text)'}">
        Độ chính xác: ${pct}% (${hits}/${expected.length} từ)
      </div>
      <div class="diff-words">${chips.join('')}</div>
      <div style="font-size:0.86rem;color:var(--text-secondary);">${esc(ex.vi)}</div>
      <div style="font-size:0.83rem;color:var(--accent-text);margin-top:5px;"><strong>Ghi chú phát âm:</strong> ${esc(ex.note)}</div>
    `;
  }

  function runShadowingSpeechCheck() {
    const btn = document.getElementById('btn-shadow-check');
    const out = document.getElementById('shadow-score-box');
    const ex = DATA.listeningPassages[listenIdx];

    if (isRecognizing) {
      AUDIO.stopSpeechRecognition();
      isRecognizing = false;
      btn.textContent = '🎤 Chấm phát âm Shadowing';
      return;
    }

    if (!AUDIO.isSpeechRecognitionSupported()) {
      showToast('Nhận diện giọng nói miễn phí hoạt động tốt nhất trên Google Chrome hoặc Microsoft Edge.');
      return;
    }

    isRecognizing = true;
    btn.textContent = '⏹ Đang nghe bạn đọc... (Bấm dừng)';
    out.classList.remove('hidden');
    out.innerHTML = '<span style="color:var(--text-secondary);">Hãy đọc to rõ câu tiếng Anh phía trên vào micro...</span>';

    AUDIO.startSpeechRecognition(state.accent, {
      continuous: false,
      onResult: (transcript, isFinal) => {
        const expected = ex.sentence.split(/\s+/);
        const spokenPool = transcript.split(/\s+/).map(normalizeWord);
        let hits = 0;
        const chips = expected.map((w) => {
          const i = spokenPool.indexOf(normalizeWord(w));
          if (i !== -1) {
            spokenPool.splice(i, 1);
            hits += 1;
            return `<span class="diff-ok">${esc(w)}</span>`;
          }
          return `<span class="diff-miss">${esc(w)}</span>`;
        });
        const pct = Math.round((hits / expected.length) * 100);
        out.innerHTML = `
          <div style="font-weight:700;color:${pct >= 80 ? 'var(--success)' : 'var(--warning)'}">
            Độ khớp phát âm: ${pct}% (${hits}/${expected.length} từ)
          </div>
          <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:3px;">Micro nghe được: <em>"${esc(transcript)}"</em></div>
          <div class="diff-words">${chips.join('')}</div>
        `;
        if (isFinal && pct >= 80) addXp(15, `Shadowing đạt ${pct}%!`);
      },
      onError: (err) => {
        out.innerHTML = `<span style="color:var(--danger);">Lỗi micro / nhận diện: ${esc(err)}</span>`;
      },
      onEnd: () => {
        isRecognizing = false;
        btn.textContent = '🎤 Chấm phát âm Shadowing';
      }
    });
  }

  function update321UI() {
    document.querySelectorAll('[data-round321]').forEach((el) => {
      el.classList.toggle('active', Number(el.dataset.round321) === speak321Round);
    });
    const m = String(Math.floor(speak321Remaining / 60)).padStart(2, '0');
    const s = String(speak321Remaining % 60).padStart(2, '0');
    document.getElementById('sp-321-clock').textContent = `${m}:${s}`;
  }

  /* ------------------------------------------------------------------------
     TAB 6: ERROR LOG & MILESTONE DIAGNOSTIC QUIZ
     ------------------------------------------------------------------------ */
  function renderReviewTab() {
    renderErrorLog();
    if (!quizState.questions.length) startQuiz(quizState.mode);
  }

  function renderErrorLog() {
    const host = document.getElementById('error-log-list');
    if (!state.errorLog.length) {
      host.innerHTML = `<div style="font-size:0.88rem;color:var(--text-muted);">Sổ lỗi trống sạch! Bạn đang kiểm soát độ chính xác rất tốt.</div>`;
      return;
    }

    host.innerHTML = state.errorLog
      .map(
        (e) => `
      <div class="error-log-item ${e.resolved ? 'resolved' : ''}">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">
          <div style="display:flex;gap:6px;align-items:center;">
            <span class="badge ${e.resolved ? 'badge-success' : 'badge-danger'}">${esc(e.category)}</span>
            <span style="font-size:0.76rem;color:var(--text-muted);">${esc(e.date)}</span>
          </div>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btn btn-secondary btn-sm err-toggle" data-eid="${esc(e.id)}">
              ${e.resolved ? 'Mở lại' : '✓ Đã khắc phục'}
            </button>
            <button type="button" class="btn btn-danger-soft btn-sm err-del" data-eid="${esc(e.id)}">Xóa</button>
          </div>
        </div>
        <div style="font-size:0.88rem;color:var(--danger);"><strong>✕ Sai:</strong> ${esc(e.wrong)}</div>
        <div style="font-size:0.88rem;color:var(--success);"><strong>✓ Chuẩn C1:</strong> ${esc(e.correct)}</div>
        ${e.note ? `<div style="font-size:0.81rem;color:var(--text-secondary);">${esc(e.note)}</div>` : ''}
      </div>
    `
      )
      .join('');

    host.querySelectorAll('.err-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = state.errorLog.find((x) => x.id === btn.dataset.eid);
        if (!item) return;
        item.resolved = !item.resolved;
        if (item.resolved) addXp(10, 'Đã xử lý xong 1 lỗi trong Error Log!');
        else saveState();
        renderErrorLog();
        renderNavBadges();
      });
    });

    host.querySelectorAll('.err-del').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.errorLog = state.errorLog.filter((x) => x.id !== btn.dataset.eid);
        saveState();
        renderErrorLog();
        renderNavBadges();
      });
    });
  }

  function buildQuiz(mode) {
    if (mode === 'grammar') {
      const pool = [];
      DATA.grammarModules.forEach((m) => {
        m.drills.forEach((d) => {
          pool.push({
            category: 'Grammar C1',
            prompt: d.q,
            sub: `${m.title} (${m.level})`,
            options: d.options,
            answer: d.answer,
            explain: d.explain
          });
        });
      });
      return shuffle(pool).slice(0, 8);
    }

    const cols = shuffle(getAllCollocations());
    const chosen = cols.slice(0, 8);
    return chosen.map((target) => {
      const wrongs = shuffle(cols.filter((c) => c.id !== target.id)).slice(0, 3);
      const opts = shuffle([target, ...wrongs]);
      const ansIdx = opts.findIndex((o) => o.id === target.id);

      if (mode === 'listen') {
        return {
          category: 'Pronunciation',
          prompt: 'Nghe phát âm và chọn cụm từ C1 chính xác',
          sub: `Đang nghe giọng ${state.accent}`,
          audioText: target.chunk,
          options: opts.map((o) => `${o.chunk} — ${o.meaning}`),
          answer: ansIdx,
          explain: `${target.chunk} (${target.ipa || ''}): ${target.meaning}. ${target.trap || ''}`
        };
      }

      return {
        category: 'Collocation',
        prompt: target.meaning,
        sub: `Chọn cụm từ chuẩn bản xứ (${target.level})`,
        audioAfter: target.chunk,
        options: opts.map((o) => o.chunk),
        answer: ansIdx,
        explain: `${target.chunk} — ${target.trap || target.example}`
      };
    });
  }

  function startQuiz(mode) {
    quizState = {
      mode,
      questions: buildQuiz(mode),
      current: 0,
      score: 0,
      answered: false,
      chosenIdx: null,
      finished: false
    };
    renderQuiz();
  }

  function renderQuiz() {
    document.querySelectorAll('[data-qmode]').forEach((b) =>
      b.classList.toggle('active', b.dataset.qmode === quizState.mode)
    );
    const host = document.getElementById('quiz-stage');

    if (quizState.finished) {
      const total = quizState.questions.length;
      const pct = Math.round((quizState.score / total) * 100);
      host.innerHTML = `
        <div style="text-align:center;padding:12px 0;">
          <span class="badge badge-brand">Hoàn thành chẩn đoán</span>
          <h3 style="font-family:var(--font-serif);font-size:2rem;margin:8px 0 6px;">${quizState.score}/${total} (${pct}%)</h3>
          <p style="color:var(--text-secondary);font-size:0.9rem;margin:0 0 16px;">
            ${pct >= 80 ? 'Tuyệt vời! Bạn đang tiệm cận chuẩn độ chính xác B2+/C1.' : 'Các câu sai đã được tự động thêm vào Sổ Lỗi (Error Log) ngay bên cạnh để bạn xử lý dứt điểm.'}
          </p>
          <button type="button" id="btn-q-restart" class="btn btn-primary">Làm lượt kiểm tra mới</button>
        </div>
      `;
      document.getElementById('btn-q-restart').addEventListener('click', () => startQuiz(quizState.mode));
      return;
    }

    const q = quizState.questions[quizState.current];
    host.innerHTML = `
      <div style="display:flex;justify-content:space-between;font-size:0.84rem;color:var(--text-secondary);margin-bottom:8px;">
        <span>Câu <strong>${quizState.current + 1}</strong>/${quizState.questions.length}</span>
        <span>Điểm: <strong>${quizState.score}</strong></span>
      </div>
      <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px;">${esc(q.sub)}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
        <h3 style="font-family:var(--font-serif);font-size:1.45rem;margin:0;">${esc(q.prompt)}</h3>
        ${q.audioText ? `<button type="button" id="btn-q-audio" class="speak-btn">🔊 Nghe</button>` : ''}
      </div>
      <div class="quiz-options">
        ${q.options
          .map((opt, idx) => {
            let cls = 'quiz-option';
            if (quizState.answered) {
              if (idx === q.answer) cls += ' correct';
              else if (idx === quizState.chosenIdx) cls += ' wrong';
            }
            return `<button type="button" class="${cls}" data-qopt="${idx}" ${quizState.answered ? 'disabled' : ''}>
              <span class="opt-key">${idx + 1}</span>
              <span>${esc(opt)}</span>
            </button>`;
          })
          .join('')}
      </div>
      ${
        quizState.answered
          ? `<div class="quiz-feedback ${quizState.chosenIdx === q.answer ? 'ok' : 'err'}">
               <strong>${quizState.chosenIdx === q.answer ? '✓ Chính xác!' : '✕ Chưa đúng (đã lưu Error Log).'}</strong> ${esc(q.explain)}
             </div>
             <div style="display:flex;justify-content:flex-end;margin-top:12px;">
               <button type="button" id="btn-q-next" class="btn btn-primary btn-sm">
                 ${quizState.current === quizState.questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo →'}
               </button>
             </div>`
          : ''
      }
    `;

    const audioBtn = document.getElementById('btn-q-audio');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => playSpeech(q.audioText, { btn: audioBtn }));
      if (!quizState.answered) setTimeout(() => playSpeech(q.audioText), 180);
    }

    host.querySelectorAll('[data-qopt]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (quizState.answered) return;
        const idx = Number(btn.dataset.qopt);
        quizState.answered = true;
        quizState.chosenIdx = idx;
        if (idx === q.answer) {
          quizState.score += 1;
          addXp(10);
        } else {
          addErrorLogItem({
            category: q.category,
            wrong: `${q.prompt} → Chọn nhầm: ${q.options[idx]}`,
            correct: `Đáp án chuẩn: ${q.options[q.answer]}`,
            note: q.explain
          });
          renderErrorLog();
        }
        if (q.audioAfter) playSpeech(q.audioAfter);
        renderQuiz();
      });
    });

    const nextBtn = document.getElementById('btn-q-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (quizState.current < quizState.questions.length - 1) {
          quizState.current += 1;
          quizState.answered = false;
          quizState.chosenIdx = null;
        } else {
          quizState.finished = true;
          addXp(25, 'Hoàn thành bài kiểm tra!');
        }
        renderQuiz();
      });
    }
  }

  /* ------------------------------------------------------------------------
     SETTINGS MODAL (Kokoro-82M Neural AI, Voices, Speed, Gemini BYOK)
     ------------------------------------------------------------------------ */
  function openSettingsModal() {
    document.getElementById('settings-modal').classList.remove('hidden');
    document.getElementById('setting-rate').value = state.speechRate;
    document.getElementById('setting-rate-val').textContent = `${state.speechRate}x`;
    document.getElementById('setting-human-mp3').checked = state.preferHumanMp3;
    document.getElementById('setting-gemini-key').value = state.geminiApiKey || '';

    // Populate Kokoro voices
    const kSel = document.getElementById('setting-kokoro-voice');
    kSel.innerHTML = AUDIO.KOKORO_VOICES.map(
      (v) => `<option value="${v.id}" ${state.kokoroVoice === v.id ? 'selected' : ''}>${esc(v.label)}</option>`
    ).join('');

    // Populate Browser natural voices
    const bSel = document.getElementById('setting-browser-voice');
    const voices = AUDIO.getAvailableEnglishVoices();
    bSel.innerHTML =
      `<option value="">Tự động chọn giọng tự nhiên nhất theo Accent (${state.accent})</option>` +
      voices
        .map(
          (v) =>
            `<option value="${esc(v.voiceURI)}" ${state.browserVoiceURI === v.voiceURI ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`
        )
        .join('');

    const kStatus = document.getElementById('kokoro-status-text');
    kStatus.textContent = AUDIO.isKokoroReady()
      ? '✅ Giọng AI Neural Kokoro-82M đã sẵn sàng và đang hoạt động!'
      : 'Chưa tải mô hình AI. Bấm nút bên dưới để kích hoạt giọng đọc AI tự nhiên 100% miễn phí chạy ngay trên trình duyệt.';
  }

  function closeSettingsModal() {
    document.getElementById('settings-modal').classList.add('hidden');
  }

  /* ------------------------------------------------------------------------
     Backup / Restore
     ------------------------------------------------------------------------ */
  function exportBackup() {
    const safeCopy = { ...state, geminiApiKey: '' }; // Never leak API key in exported backup
    const blob = new Blob([JSON.stringify(safeCopy, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lingocraft-c1-backup-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Đã sao lưu toàn bộ tiến độ C1, SM-2 & Error Log!');
  }

  function importBackup(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        state = { ...structuredClone(DEFAULT_STATE), ...parsed };
        saveState();
        applyTheme();
        renderHeader();
        renderRoadmap();
        rebuildCollocationDeck(false);
        showToast('Đã khôi phục dữ liệu học tập C1 thành công!');
      } catch (_) {
        showToast('Tệp sao lưu không hợp lệ.');
      }
    };
    reader.readAsText(file);
  }

  /* ------------------------------------------------------------------------
     Bind All Events
     ------------------------------------------------------------------------ */
  function bindEvents() {
    // Tabs
    document.querySelectorAll('.nav-tab').forEach((btn) => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Theme & Accent
    document.getElementById('theme-toggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      saveState();
      applyTheme();
    });

    document.querySelectorAll('[data-accent]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.accent = btn.dataset.accent;
        saveState();
        renderHeader();
        const label = state.accent === 'en-GB' ? 'Anh–Anh (UK)' : state.accent === 'en-AU' ? 'Anh–Úc (AU)' : 'Anh–Mỹ (US)';
        showToast(`Đã chuyển giọng sang ${label}`);
      });
    });

    // Session Timer (Tab 1)
    document.querySelectorAll('[data-timer-min]').forEach((btn) => {
      btn.addEventListener('click', () => {
        clearInterval(sessionTimerHandle);
        sessionTimerRunning = false;
        sessionTimerSec = Number(btn.dataset.timerMin) * 60;
        document.getElementById('btn-timer-toggle').textContent = '▶ Bắt đầu phiên';
        updateSessionClockUI();
      });
    });

    document.getElementById('btn-timer-toggle').addEventListener('click', (e) => {
      if (sessionTimerRunning) {
        clearInterval(sessionTimerHandle);
        sessionTimerRunning = false;
        e.currentTarget.textContent = '▶ Tiếp tục';
      } else {
        sessionTimerRunning = true;
        e.currentTarget.textContent = '⏸ Tạm dừng';
        sessionTimerHandle = setInterval(() => {
          if (sessionTimerSec > 0) {
            sessionTimerSec -= 1;
            updateSessionClockUI();
          } else {
            clearInterval(sessionTimerHandle);
            sessionTimerRunning = false;
            e.currentTarget.textContent = '▶ Bắt đầu phiên';
            addXp(25, 'Hoàn thành trọn vẹn phiên học!');
          }
        }, 1000);
      }
    });

    document.getElementById('btn-export-ics').addEventListener('click', exportCalendarICS);

    // Collocations SM-2 (Tab 2)
    const cardEl = document.getElementById('col-card');
    cardEl.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      colFlipped = !colFlipped;
      cardEl.classList.toggle('is-flipped', colFlipped);
    });

    const audioStatusEl = document.getElementById('col-audio-status');
    document.getElementById('col-speak-chunk').addEventListener('click', (e) => {
      e.stopPropagation();
      if (colDeck[colIndex]) playSpeech(colDeck[colIndex].chunk, { btn: e.currentTarget, statusEl: audioStatusEl });
    });

    document.getElementById('col-speak-headword').addEventListener('click', (e) => {
      e.stopPropagation();
      const item = colDeck[colIndex];
      if (item) {
        const word = item.headword || item.chunk.split(/\s+/)[0];
        playSpeech(word, { btn: e.currentTarget, statusEl: audioStatusEl });
      }
    });

    document.getElementById('col-speak-slow').addEventListener('click', (e) => {
      e.stopPropagation();
      if (colDeck[colIndex]) playSpeech(colDeck[colIndex].chunk, { rate: 0.72, btn: e.currentTarget, statusEl: audioStatusEl });
    });

    document.getElementById('col-speak-example').addEventListener('click', (e) => {
      e.stopPropagation();
      if (colDeck[colIndex]) playSpeech(colDeck[colIndex].example, { btn: e.currentTarget, statusEl: audioStatusEl });
    });

    document.getElementById('sm2-again').addEventListener('click', () => rateCollocationSM2('again'));
    document.getElementById('sm2-hard').addEventListener('click', () => rateCollocationSM2('hard'));
    document.getElementById('sm2-good').addEventListener('click', () => rateCollocationSM2('good'));
    document.getElementById('sm2-easy').addEventListener('click', () => rateCollocationSM2('easy'));

    document.getElementById('col-prev').addEventListener('click', () => {
      colIndex = (colIndex - 1 + colDeck.length) % colDeck.length;
      colFlipped = false;
      renderCollocationCard();
    });
    document.getElementById('col-next').addEventListener('click', () => {
      colIndex = (colIndex + 1) % colDeck.length;
      colFlipped = false;
      renderCollocationCard();
    });
    document.getElementById('col-shuffle').addEventListener('click', () => {
      rebuildCollocationDeck(true);
      showToast('Đã xáo trộn bộ thẻ SM-2!');
    });
    document.getElementById('col-due-toggle').addEventListener('click', (e) => {
      colDueOnly = !colDueOnly;
      e.currentTarget.classList.toggle('btn-primary', colDueOnly);
      e.currentTarget.classList.toggle('btn-secondary', !colDueOnly);
      e.currentTarget.textContent = colDueOnly ? 'Đang lọc: Cần ôn hôm nay' : 'Chỉ xem thẻ đến hạn ôn';
      rebuildCollocationDeck(false);
    });

    document.getElementById('btn-lookup-go').addEventListener('click', runLiveWordLookup);
    document.getElementById('lookup-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        runLiveWordLookup();
      }
    });

    // Writing (Tab 4)
    document.getElementById('writing-textarea').addEventListener('input', analyzeWritingDraft);
    document.getElementById('btn-toggle-model').addEventListener('click', () => {
      document.getElementById('writing-model-box').classList.toggle('hidden');
    });
    document.getElementById('btn-speak-model').addEventListener('click', (e) => {
      const p = DATA.writingPrompts.find((x) => x.id === writingPromptId);
      if (p) playSpeech(p.model, { btn: e.currentTarget });
    });
    document.getElementById('btn-save-journal').addEventListener('click', () => {
      const text = document.getElementById('writing-textarea').value.trim();
      if (!text) {
        showToast('Hãy viết nội dung trước khi lưu vào Nhật ký.');
        return;
      }
      const p = DATA.writingPrompts.find((x) => x.id === writingPromptId);
      const words = text.split(/\s+/).filter(Boolean).length;
      state.writingJournal.unshift({
        id: `wj-${Date.now()}`,
        date: todayStr(),
        promptTitle: p.title,
        text,
        words
      });
      addXp(20, 'Đã lưu bài Micro-Writing vào Nhật ký!');
      document.getElementById('writing-textarea').value = '';
      analyzeWritingDraft();
      renderWritingJournal();
    });
    document.getElementById('btn-ai-grade').addEventListener('click', evaluateWritingWithGemini);

    // Speaking & Listening (Tab 5)
    document.querySelectorAll('[data-lmode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        listenMode = btn.dataset.lmode;
        renderSpeakingStudio();
      });
    });

    const listenStatus = document.getElementById('listen-audio-status');
    document.getElementById('btn-listen-normal').addEventListener('click', (e) => {
      playSpeech(DATA.listeningPassages[listenIdx].sentence, { btn: e.currentTarget, statusEl: listenStatus });
    });
    document.getElementById('btn-listen-slow').addEventListener('click', (e) => {
      playSpeech(DATA.listeningPassages[listenIdx].sentence, { rate: 0.72, btn: e.currentTarget, statusEl: listenStatus });
    });
    document.getElementById('btn-listen-check').addEventListener('click', gradeDictation);
    document.getElementById('listen-answer-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        gradeDictation();
      }
    });
    document.getElementById('btn-listen-prev').addEventListener('click', () => {
      listenIdx = (listenIdx - 1 + DATA.listeningPassages.length) % DATA.listeningPassages.length;
      renderSpeakingStudio();
    });
    document.getElementById('btn-listen-next').addEventListener('click', () => {
      listenIdx = (listenIdx + 1) % DATA.listeningPassages.length;
      renderSpeakingStudio();
    });
    document.getElementById('btn-shadow-check').addEventListener('click', runShadowingSpeechCheck);

    // Voice Recorder (MediaRecorder)
    document.getElementById('btn-record-voice').addEventListener('click', async (e) => {
      const btn = e.currentTarget;
      const playbackWrap = document.getElementById('recorded-audio-wrap');
      if (!isRecordingVoice) {
        const res = await AUDIO.startRecording();
        if (!res.ok) {
          showToast(res.error);
          return;
        }
        isRecordingVoice = true;
        btn.innerHTML = '<span class="rec-dot"></span> Đang ghi âm... (Bấm dừng)';
        btn.classList.add('btn-danger-soft');
      } else {
        const url = await AUDIO.stopRecording();
        isRecordingVoice = false;
        btn.innerHTML = '⏺ Ghi âm giọng bạn để so sánh';
        btn.classList.remove('btn-danger-soft');
        if (url) {
          if (recordedAudioUrl) URL.revokeObjectURL(recordedAudioUrl);
          recordedAudioUrl = url;
          playbackWrap.classList.remove('hidden');
          document.getElementById('recorded-audio-player').src = url;
          addXp(10, 'Đã lưu bản ghi âm luyện nói!');
        }
      }
    });

    // 3-2-1 Speaking Controls
    document.querySelectorAll('[data-round321]').forEach((btn) => {
      btn.addEventListener('click', () => {
        clearInterval(speak321Interval);
        speak321Interval = null;
        speak321Round = Number(btn.dataset.round321);
        speak321Remaining = speak321Round * 60;
        document.getElementById('btn-321-toggle').textContent = '▶ Bắt đầu nói';
        update321UI();
      });
    });

    document.getElementById('btn-321-toggle').addEventListener('click', (e) => {
      if (speak321Interval) {
        clearInterval(speak321Interval);
        speak321Interval = null;
        e.currentTarget.textContent = '▶ Tiếp tục';
      } else {
        e.currentTarget.textContent = '⏸ Tạm dừng';
        speak321Interval = setInterval(() => {
          if (speak321Remaining > 0) {
            speak321Remaining -= 1;
            update321UI();
          } else {
            clearInterval(speak321Interval);
            speak321Interval = null;
            e.currentTarget.textContent = '▶ Bắt đầu lại';
            addXp(20, `Hoàn thành vòng nói ${speak321Round} phút!`);
          }
        }, 1000);
      }
    });

    document.getElementById('btn-sp-next-topic').addEventListener('click', () => {
      speakingTopicIdx = (speakingTopicIdx + 1) % DATA.speakingTopics321.length;
      renderSpeakingStudio();
    });

    // Review & Error Log (Tab 6)
    document.querySelectorAll('[data-qmode]').forEach((btn) => {
      btn.addEventListener('click', () => startQuiz(btn.dataset.qmode));
    });

    document.getElementById('manual-error-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const category = document.getElementById('err-cat').value;
      const wrong = document.getElementById('err-wrong').value.trim();
      const correct = document.getElementById('err-correct').value.trim();
      const note = document.getElementById('err-note').value.trim();
      if (!wrong || !correct) return;
      addErrorLogItem({ category, wrong, correct, note });
      e.target.reset();
      renderErrorLog();
      showToast('Đã ghi nhận vào Sổ Lỗi cá nhân!');
    });

    // Settings Modal
    document.getElementById('btn-audio-settings').addEventListener('click', openSettingsModal);
    document.getElementById('btn-close-settings').addEventListener('click', closeSettingsModal);
    document.getElementById('settings-modal').addEventListener('click', (e) => {
      if (e.target.id === 'settings-modal') closeSettingsModal();
    });

    document.getElementById('setting-rate').addEventListener('input', (e) => {
      state.speechRate = Number(e.target.value);
      document.getElementById('setting-rate-val').textContent = `${state.speechRate}x`;
      saveState();
    });

    document.getElementById('setting-human-mp3').addEventListener('change', (e) => {
      state.preferHumanMp3 = e.target.checked;
      saveState();
    });

    document.getElementById('setting-kokoro-voice').addEventListener('change', (e) => {
      state.kokoroVoice = e.target.value;
      saveState();
    });

    document.getElementById('setting-browser-voice').addEventListener('change', (e) => {
      state.browserVoiceURI = e.target.value;
      saveState();
    });

    document.getElementById('setting-gemini-key').addEventListener('change', (e) => {
      state.geminiApiKey = e.target.value.trim();
      saveState();
      showToast(state.geminiApiKey ? 'Đã lưu Gemini API Key cục bộ trên trình duyệt!' : 'Đã xóa Gemini API Key.');
    });

    document.getElementById('btn-load-kokoro').addEventListener('click', async (e) => {
      const btn = e.currentTarget;
      const statusEl = document.getElementById('kokoro-status-text');
      const bar = document.getElementById('kokoro-progress-fill');
      btn.disabled = true;
      btn.textContent = 'Đang tải mô hình AI...';

      const res = await AUDIO.loadKokoro((msg, pct) => {
        statusEl.textContent = msg;
        if (bar && typeof pct === 'number') bar.style.width = `${pct}%`;
      });

      if (res.ok) {
        state.useKokoro = true;
        saveState();
        renderHeader();
        btn.textContent = '✓ Giọng AI Kokoro-82M Đang Bật';
        showToast('Đã kích hoạt giọng AI Neural Kokoro-82M thành công!');
      } else {
        btn.disabled = false;
        btn.textContent = 'Thử tải lại Kokoro-82M';
        statusEl.textContent = `Không tải được Kokoro-82M (${res.reason}). Website vẫn tiếp tục dùng Giọng người thật MP3 + Giọng tự nhiên trình duyệt.`;
      }
    });

    document.getElementById('btn-test-voice').addEventListener('click', (e) => {
      playSpeech(
        'Not only does consistent practice bridge the gap to C1, but it also makes natural English second nature.',
        { btn: e.currentTarget, statusEl: document.getElementById('kokoro-status-text') }
      );
    });

    // Footer Backup
    document.getElementById('btn-export-backup').addEventListener('click', exportBackup);
    document.getElementById('input-import-backup').addEventListener('change', (e) => {
      importBackup(e.target.files[0]);
      e.target.value = '';
    });

    // Keyboard shortcuts for fast SM-2 review
    document.addEventListener('keydown', (e) => {
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (activeTab === 'collocations') {
        if (e.code === 'Space') {
          e.preventDefault();
          colFlipped = !colFlipped;
          cardEl.classList.toggle('is-flipped', colFlipped);
        } else if (e.key.toLowerCase() === 's') {
          if (colDeck[colIndex]) playSpeech(colDeck[colIndex].chunk, { statusEl: audioStatusEl });
        } else if (e.key === '1') rateCollocationSM2('again');
        else if (e.key === '2') rateCollocationSM2('hard');
        else if (e.key === '3') rateCollocationSM2('good');
        else if (e.key === '4') rateCollocationSM2('easy');
      }
    });
  }

  function init() {
    applyTheme();
    renderHeader();
    updateSessionClockUI();
    renderRoadmap();
    renderCollocationCategories();
    rebuildCollocationDeck(false);
    renderGrammar();
    renderWriting();
    renderSpeakingStudio();
    bindEvents();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
