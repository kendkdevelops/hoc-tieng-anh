/* ==========================================================================
   LingoCraft C1 — 3-Layer Natural Pronunciation & Speech Studio Engine
   Layer 1: Free Dictionary API (Real Human Studio MP3 for words)
   Layer 2: Kokoro-82M Neural AI TTS (100% Free Local Browser AI via kokoro-js)
   Layer 3: Smart Natural Web Speech Voice Ranker (US / UK / AU)
   Plus: Datamuse C1 Synonyms/Collocations, MediaRecorder, Web SpeechRecognition
   ========================================================================== */

(function () {
  const synth = window.speechSynthesis || null;
  const DICT_CACHE_KEY = 'lingocraft_dict_cache_v1';

  let cachedVoices = [];
  let currentAudioEl = null;
  let dictCache = loadDictCache();

  // Kokoro Neural TTS runtime state
  let kokoroModel = null;
  let kokoroLoading = false;
  let kokoroReady = false;
  let kokoroBlobCache = new Map();

  const KOKORO_VOICES = [
    { id: 'af_heart', label: 'Heart (US Nữ — Tự nhiên nhất)', accent: 'en-US' },
    { id: 'af_bella', label: 'Bella (US Nữ — Ấm áp)', accent: 'en-US' },
    { id: 'am_michael', label: 'Michael (US Nam — Học thuật)', accent: 'en-US' },
    { id: 'bf_emma', label: 'Emma (UK Nữ — Chuẩn Anh)', accent: 'en-GB' },
    { id: 'bm_george', label: 'George (UK Nam — Trang trọng)', accent: 'en-GB' }
  ];

  function loadDictCache() {
    try {
      return JSON.parse(localStorage.getItem(DICT_CACHE_KEY) || '{}');
    } catch (_) {
      return {};
    }
  }

  function saveDictCache() {
    try {
      // Keep cache bounded to 150 entries
      const keys = Object.keys(dictCache);
      if (keys.length > 150) {
        keys.slice(0, keys.length - 150).forEach((k) => delete dictCache[k]);
      }
      localStorage.setItem(DICT_CACHE_KEY, JSON.stringify(dictCache));
    } catch (_) {
      // Ignore quota
    }
  }

  function loadVoices() {
    if (!synth) return [];
    cachedVoices = synth.getVoices() || [];
    return cachedVoices;
  }

  if (synth) {
    loadVoices();
    if (typeof synth.onvoiceschanged !== 'undefined') {
      synth.onvoiceschanged = loadVoices;
    }
  }

  function scoreVoiceNaturalness(voice) {
    const name = (voice.name || '').toLowerCase();
    let score = 0;
    if (/natural|neural|online/i.test(name)) score += 100;
    if (/aria|jenny|sonia|ryan|guy|natasha|libby|maisie|andrew|ava|brian|emma/i.test(name)) score += 60;
    if (/google/i.test(name)) score += 50;
    if (/samantha|daniel|karen|serena|moira|tessa|alex|allison/i.test(name)) score += 45;
    if (/enhanced|premium/i.test(name)) score += 40;
    if (/espeak|festival|mbrola|compact/i.test(name)) score -= 40;
    return score;
  }

  function getAvailableEnglishVoices() {
    const voices = cachedVoices.length ? cachedVoices : loadVoices();
    return voices
      .filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'))
      .sort((a, b) => scoreVoiceNaturalness(b) - scoreVoiceNaturalness(a));
  }

  function pickBestBrowserVoice(accent, preferredVoiceURI = '') {
    const enVoices = getAvailableEnglishVoices();
    if (!enVoices.length) return null;

    if (preferredVoiceURI) {
      const exactUser = enVoices.find((v) => v.voiceURI === preferredVoiceURI || v.name === preferredVoiceURI);
      if (exactUser) return exactUser;
    }

    const normAccent = (accent || 'en-US').toLowerCase().replace('_', '-');
    const matching = enVoices.filter(
      (v) => v.lang.toLowerCase().replace('_', '-') === normAccent
    );
    if (matching.length) return matching[0];

    // Fallback to any English voice ranked highest
    return enVoices[0];
  }

  function stop() {
    if (currentAudioEl) {
      try {
        currentAudioEl.pause();
        currentAudioEl.currentTime = 0;
      } catch (_) {}
      currentAudioEl = null;
    }
    if (synth) {
      try {
        synth.cancel();
      } catch (_) {}
    }
  }

  /* ------------------------------------------------------------------------
     Layer 1: Free Dictionary API (Human Studio MP3 + IPA + Definitions)
     & Datamuse API (Synonyms + Collocations)
     ------------------------------------------------------------------------ */
  async function fetchDictionaryEntry(rawWord) {
    const clean = String(rawWord || '').trim().toLowerCase();
    if (!clean || /\s/.test(clean)) return null; // Only single words for dictionaryapi.dev
    if (dictCache[clean]) return dictCache[clean];

    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(clean)}`
      );
      if (!res.ok) return null;
      const data = await res.json();
      if (!Array.isArray(data) || !data.length) return null;

      const entry = data[0];
      const audios = { us: '', uk: '', au: '', any: '' };
      let ipa = entry.phonetic || '';

      (entry.phonetics || []).forEach((p) => {
        if (!ipa && p.text) ipa = p.text;
        let url = p.audio || '';
        if (!url) return;
        if (url.startsWith('//')) url = 'https:' + url;
        if (!audios.any) audios.any = url;
        if (/-us\.mp3|_us_/i.test(url) && !audios.us) audios.us = url;
        else if (/-uk\.mp3|-gb\.mp3|_gb_/i.test(url) && !audios.uk) audios.uk = url;
        else if (/-au\.mp3|_au_/i.test(url) && !audios.au) audios.au = url;
      });

      const meanings = (entry.meanings || []).slice(0, 3).map((m) => ({
        pos: m.partOfSpeech,
        definitions: (m.definitions || []).slice(0, 2).map((d) => ({
          def: d.definition,
          example: d.example || ''
        })),
        synonyms: (m.synonyms || []).slice(0, 6)
      }));

      const parsed = { word: entry.word || clean, ipa, audios, meanings };
      dictCache[clean] = parsed;
      saveDictCache();
      return parsed;
    } catch (_) {
      return null;
    }
  }

  async function lookupWordWithCollocations(rawWord) {
    const clean = String(rawWord || '').trim().toLowerCase();
    if (!clean) return null;

    const [dict, synRes, colRes] = await Promise.all([
      fetchDictionaryEntry(clean),
      fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(clean)}&max=10`)
        .then((r) => (r.ok ? r.json() : []))
        .catch(() => []),
      fetch(`https://api.datamuse.com/words?rel_jjb=${encodeURIComponent(clean)}&max=8`)
        .then((r) => (r.ok ? r.json() : []))
        .catch(() => [])
    ]);

    return {
      word: (dict && dict.word) || clean,
      ipa: (dict && dict.ipa) || '',
      audios: (dict && dict.audios) || {},
      meanings: (dict && dict.meanings) || [],
      synonyms: (synRes || []).map((x) => x.word).slice(0, 10),
      collocations: (colRes || []).map((x) => `${x.word} ${clean}`).slice(0, 8)
    };
  }

  function playUrlAudio(url, rate = 1.0, callbacks = {}) {
    return new Promise((resolve) => {
      stop();
      const audio = new Audio(url);
      audio.playbackRate = Math.max(0.5, Math.min(1.5, rate));
      currentAudioEl = audio;

      audio.onplay = () => callbacks.onStart && callbacks.onStart('human-mp3');
      audio.onended = () => {
        currentAudioEl = null;
        callbacks.onEnd && callbacks.onEnd();
        resolve(true);
      };
      audio.onerror = () => {
        currentAudioEl = null;
        resolve(false);
      };
      audio.play().catch(() => {
        currentAudioEl = null;
        resolve(false);
      });
    });
  }

  /* ------------------------------------------------------------------------
     Layer 2: Kokoro-82M Neural AI TTS (100% Free Local Browser AI)
     ------------------------------------------------------------------------ */
  async function loadKokoro(onProgress) {
    if (kokoroReady && kokoroModel) return { ok: true };
    if (kokoroLoading) return { ok: false, reason: 'Đang tải mô hình AI...' };
    kokoroLoading = true;

    try {
      if (onProgress) onProgress('Đang kết nối thư viện Kokoro-82M (miễn phí)...', 10);
      const mod = await import('https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm');
      const KokoroTTS = mod.KokoroTTS;
      if (!KokoroTTS) throw new Error('Không khởi tạo được KokoroTTS');

      const hasWebGPU = typeof navigator !== 'undefined' && Boolean(navigator.gpu);
      const device = hasWebGPU ? 'webgpu' : 'wasm';
      const dtype = hasWebGPU ? 'fp32' : 'q8';

      if (onProgress) {
        onProgress(
          `Đang tải mô hình giọng AI Kokoro-82M (${device.toUpperCase()}) — lần đầu ~86MB, sau đó lưu cache...`,
          25
        );
      }

      kokoroModel = await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', {
        dtype,
        device,
        progress_callback: (info) => {
          if (onProgress && info && typeof info.progress === 'number') {
            onProgress(`Đang tải giọng AI Kokoro-82M: ${Math.round(info.progress)}%`, Math.round(info.progress));
          }
        }
      });

      kokoroReady = true;
      kokoroLoading = false;
      if (onProgress) onProgress('Giọng AI Neural Kokoro-82M đã sẵn sàng!', 100);
      return { ok: true, device };
    } catch (err) {
      kokoroLoading = false;
      kokoroReady = false;
      return {
        ok: false,
        reason: (err && err.message) || 'Thiết bị không hỗ trợ tải mô hình Kokoro-82M.'
      };
    }
  }

  async function speakWithKokoro(text, options = {}) {
    if (!kokoroReady || !kokoroModel) return false;
    const accent = options.accent || 'en-US';
    const voiceId =
      options.kokoroVoice ||
      (accent === 'en-GB' ? 'bf_emma' : 'af_heart');
    const rate = typeof options.rate === 'number' ? options.rate : 1.0;

    const cacheKey = `${voiceId}::${text}`;
    try {
      let url = kokoroBlobCache.get(cacheKey);
      if (!url) {
        options.onGenerating && options.onGenerating();
        const audioOut = await kokoroModel.generate(text, { voice: voiceId });
        const blob = typeof audioOut.toBlob === 'function' ? audioOut.toBlob() : null;
        if (!blob) return false;
        url = URL.createObjectURL(blob);
        if (kokoroBlobCache.size > 40) {
          const firstKey = kokoroBlobCache.keys().next().value;
          URL.revokeObjectURL(kokoroBlobCache.get(firstKey));
          kokoroBlobCache.delete(firstKey);
        }
        kokoroBlobCache.set(cacheKey, url);
      }

      return await playUrlAudio(url, rate, {
        onStart: () => options.onStart && options.onStart('kokoro-ai'),
        onEnd: options.onEnd
      });
    } catch (_) {
      return false;
    }
  }

  /* ------------------------------------------------------------------------
     Unified Smart Speak Entrypoint
     ------------------------------------------------------------------------ */
  async function speak(text, options = {}) {
    const clean = String(text || '').trim();
    if (!clean) return { engine: 'none' };

    const accent = options.accent || 'en-US';
    const rate = typeof options.rate === 'number' ? options.rate : 1.0;
    const useKokoro = Boolean(options.useKokoro && kokoroReady);

    // Layer 1: Single word -> Try real human studio MP3 from Free Dictionary API first!
    if (!/\s/.test(clean) && options.preferHumanMp3 !== false) {
      const entry = await fetchDictionaryEntry(clean);
      if (entry && entry.audios) {
        const mp3 =
          (accent === 'en-GB' && entry.audios.uk) ||
          (accent === 'en-AU' && (entry.audios.au || entry.audios.uk)) ||
          (accent === 'en-US' && entry.audios.us) ||
          entry.audios.any;
        if (mp3) {
          const played = await playUrlAudio(mp3, rate, {
            onStart: options.onStart,
            onEnd: options.onEnd
          });
          if (played) return { engine: 'human-mp3' };
        }
      }
    }

    // Layer 2: Kokoro-82M Neural AI (if user activated it)
    if (useKokoro) {
      const ok = await speakWithKokoro(clean, options);
      if (ok) return { engine: 'kokoro-ai' };
    }

    // Layer 3: Smart Natural Browser Speech Synthesis
    if (!synth) {
      options.onError && options.onError('Trình duyệt không hỗ trợ Web Speech API');
      return { engine: 'unsupported' };
    }

    stop();
    return new Promise((resolve) => {
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = accent;
      u.rate = rate;
      u.pitch = 1.0;

      const voice = pickBestBrowserVoice(accent, options.browserVoiceURI);
      if (voice) u.voice = voice;

      u.onstart = () => options.onStart && options.onStart('browser-natural', voice ? voice.name : accent);
      u.onend = () => {
        options.onEnd && options.onEnd();
        resolve({ engine: 'browser-natural', voice: voice ? voice.name : accent });
      };
      u.onerror = () => {
        options.onError && options.onError();
        resolve({ engine: 'error' });
      };

      synth.speak(u);
    });
  }

  /* ------------------------------------------------------------------------
     Microphone Voice Recorder (MediaRecorder) for Shadowing Comparison
     ------------------------------------------------------------------------ */
  let mediaRecorder = null;
  let audioChunks = [];
  let activeStream = null;

  async function startRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return { ok: false, error: 'Trình duyệt không hỗ trợ ghi âm micro.' };
    }
    try {
      activeStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunks = [];
      mediaRecorder = new MediaRecorder(activeStream);
      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) audioChunks.push(e.data);
      };
      mediaRecorder.start();
      return { ok: true };
    } catch (_) {
      return { ok: false, error: 'Chưa được cấp quyền sử dụng micro.' };
    }
  }

  function stopRecording() {
    return new Promise((resolve) => {
      if (!mediaRecorder || mediaRecorder.state === 'inactive') {
        resolve(null);
        return;
      }
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
        const url = URL.createObjectURL(blob);
        if (activeStream) {
          activeStream.getTracks().forEach((t) => t.stop());
          activeStream = null;
        }
        resolve(url);
      };
      mediaRecorder.stop();
    });
  }

  /* ------------------------------------------------------------------------
     Live Speech Recognition (Free Browser STT for Pronunciation Scoring)
     ------------------------------------------------------------------------ */
  let activeRecognition = null;

  function isSpeechRecognitionSupported() {
    return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  function startSpeechRecognition(accent, callbacks = {}) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      callbacks.onError && callbacks.onError('Trình duyệt này chưa hỗ trợ nhận diện giọng nói (hãy dùng Chrome hoặc Edge).');
      return false;
    }

    stopSpeechRecognition();
    const rec = new SR();
    rec.lang = accent || 'en-US';
    rec.interimResults = true;
    rec.continuous = Boolean(callbacks.continuous);
    rec.maxAlternatives = 1;

    rec.onstart = () => callbacks.onStart && callbacks.onStart();
    rec.onresult = (event) => {
      let transcript = '';
      let isFinal = false;
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + ' ';
        if (event.results[i].isFinal) isFinal = true;
      }
      callbacks.onResult && callbacks.onResult(transcript.trim(), isFinal);
    };
    rec.onerror = (e) => callbacks.onError && callbacks.onError(e.error || 'Lỗi nhận diện giọng nói');
    rec.onend = () => {
      activeRecognition = null;
      callbacks.onEnd && callbacks.onEnd();
    };

    activeRecognition = rec;
    try {
      rec.start();
      return true;
    } catch (_) {
      return false;
    }
  }

  function stopSpeechRecognition() {
    if (activeRecognition) {
      try {
        activeRecognition.stop();
      } catch (_) {}
      activeRecognition = null;
    }
  }

  window.LingoAudio = {
    isSupported: Boolean(synth),
    KOKORO_VOICES,
    isKokoroReady: () => kokoroReady,
    loadKokoro,
    getAvailableEnglishVoices,
    lookupWordWithCollocations,
    speak,
    stop,
    startRecording,
    stopRecording,
    isSpeechRecognitionSupported,
    startSpeechRecognition,
    stopSpeechRecognition
  };
})();
