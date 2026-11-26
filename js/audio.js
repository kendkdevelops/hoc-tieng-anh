/* ==========================================================================
   LingoCraft — Web Speech API Pronunciation Engine (US / UK)
   ========================================================================== */

(function () {
  const synth = window.speechSynthesis || null;
  let cachedVoices = [];
  let sequenceToken = 0;

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

  function pickVoice(accent) {
    const voices = cachedVoices.length ? cachedVoices : loadVoices();
    const normalized = accent === 'en-GB' ? 'en-gb' : 'en-us';

    // Prefer high-quality natural/Google/Samantha/Daniel voices matching exact locale
    const exact = voices.filter((v) => v.lang && v.lang.toLowerCase().replace('_', '-') === normalized);
    if (exact.length) {
      const preferred = exact.find((v) =>
        /google|natural|samantha|daniel|aria|jenny|libby|sonia/i.test(v.name)
      );
      return preferred || exact[0];
    }

    // Fallback to any English voice
    const anyEn = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('en'));
    return anyEn || null;
  }

  function stop() {
    sequenceToken += 1;
    if (synth) {
      try {
        synth.cancel();
      } catch (_) {
        // Ignore browser cancellation quirks
      }
    }
  }

  function speak(text, options = {}) {
    if (!synth) {
      if (typeof options.onUnsupported === 'function') options.onUnsupported();
      return false;
    }

    const accent = options.accent || 'en-US';
    const rate = typeof options.rate === 'number' ? options.rate : 1.0;

    stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = accent;
    utterance.rate = rate;
    utterance.pitch = 1.0;

    const voice = pickVoice(accent);
    if (voice) utterance.voice = voice;

    if (typeof options.onStart === 'function') utterance.onstart = options.onStart;
    if (typeof options.onEnd === 'function') utterance.onend = options.onEnd;
    if (typeof options.onError === 'function') utterance.onerror = options.onError;

    synth.speak(utterance);
    return true;
  }

  function speakSequence(lines, options = {}) {
    if (!synth || !Array.isArray(lines) || !lines.length) return false;
    stop();
    const token = sequenceToken;
    const accent = options.accent || 'en-US';
    const rate = typeof options.rate === 'number' ? options.rate : 0.96;

    function playAt(index) {
      if (token !== sequenceToken) return;
      if (index >= lines.length) {
        if (typeof options.onComplete === 'function') options.onComplete();
        return;
      }

      if (typeof options.onLineStart === 'function') options.onLineStart(index);

      const u = new SpeechSynthesisUtterance(lines[index].en);
      u.lang = accent;
      u.rate = rate;
      u.pitch = lines[index].alt ? 1.06 : 0.95;
      const voice = pickVoice(accent);
      if (voice) u.voice = voice;

      u.onend = () => {
        if (token !== sequenceToken) return;
        setTimeout(() => playAt(index + 1), 320);
      };
      u.onerror = () => {
        if (token === sequenceToken && typeof options.onComplete === 'function') {
          options.onComplete();
        }
      };

      synth.speak(u);
    }

    playAt(0);
    return true;
  }

  window.LingoAudio = {
    isSupported: Boolean(synth),
    speak,
    speakSequence,
    stop
  };
})();
