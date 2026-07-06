// Bible · Herald Display App
// D-pad: Arrow keys + Enter/Escape | Space = TTS toggle

// ── Bible Books ──────────────────────────────────────────────
const BOOKS = [
  { name: "Genesis",       abbr: "genesis",        chapters: 50, t: "OT" },
  { name: "Exodus",        abbr: "exodus",         chapters: 40, t: "OT" },
  { name: "Leviticus",     abbr: "leviticus",      chapters: 27, t: "OT" },
  { name: "Numbers",       abbr: "numbers",        chapters: 36, t: "OT" },
  { name: "Deuteronomy",   abbr: "deuteronomy",    chapters: 34, t: "OT" },
  { name: "Joshua",        abbr: "joshua",         chapters: 24, t: "OT" },
  { name: "Judges",        abbr: "judges",         chapters: 21, t: "OT" },
  { name: "Ruth",          abbr: "ruth",           chapters: 4,  t: "OT" },
  { name: "1 Samuel",      abbr: "1+samuel",       chapters: 31, t: "OT" },
  { name: "2 Samuel",      abbr: "2+samuel",       chapters: 24, t: "OT" },
  { name: "1 Kings",       abbr: "1+kings",        chapters: 22, t: "OT" },
  { name: "2 Kings",       abbr: "2+kings",        chapters: 25, t: "OT" },
  { name: "1 Chronicles",  abbr: "1+chronicles",   chapters: 29, t: "OT" },
  { name: "2 Chronicles",  abbr: "2+chronicles",   chapters: 36, t: "OT" },
  { name: "Ezra",          abbr: "ezra",           chapters: 10, t: "OT" },
  { name: "Nehemiah",      abbr: "nehemiah",       chapters: 13, t: "OT" },
  { name: "Esther",        abbr: "esther",         chapters: 10, t: "OT" },
  { name: "Job",           abbr: "job",            chapters: 42, t: "OT" },
  { name: "Psalms",        abbr: "psalms",         chapters: 150,t: "OT" },
  { name: "Proverbs",      abbr: "proverbs",       chapters: 31, t: "OT" },
  { name: "Ecclesiastes",  abbr: "ecclesiastes",   chapters: 12, t: "OT" },
  { name: "Song of Songs", abbr: "song+of+solomon",chapters: 8,  t: "OT" },
  { name: "Isaiah",        abbr: "isaiah",         chapters: 66, t: "OT" },
  { name: "Jeremiah",      abbr: "jeremiah",       chapters: 52, t: "OT" },
  { name: "Lamentations",  abbr: "lamentations",   chapters: 5,  t: "OT" },
  { name: "Ezekiel",       abbr: "ezekiel",        chapters: 48, t: "OT" },
  { name: "Daniel",        abbr: "daniel",         chapters: 12, t: "OT" },
  { name: "Hosea",         abbr: "hosea",          chapters: 14, t: "OT" },
  { name: "Joel",          abbr: "joel",           chapters: 3,  t: "OT" },
  { name: "Amos",          abbr: "amos",           chapters: 9,  t: "OT" },
  { name: "Obadiah",       abbr: "obadiah",        chapters: 1,  t: "OT" },
  { name: "Jonah",         abbr: "jonah",          chapters: 4,  t: "OT" },
  { name: "Micah",         abbr: "micah",          chapters: 7,  t: "OT" },
  { name: "Nahum",         abbr: "nahum",          chapters: 3,  t: "OT" },
  { name: "Habakkuk",      abbr: "habakkuk",       chapters: 3,  t: "OT" },
  { name: "Zephaniah",     abbr: "zephaniah",      chapters: 3,  t: "OT" },
  { name: "Haggai",        abbr: "haggai",         chapters: 2,  t: "OT" },
  { name: "Zechariah",     abbr: "zechariah",      chapters: 14, t: "OT" },
  { name: "Malachi",       abbr: "malachi",        chapters: 4,  t: "OT" },
  { name: "Matthew",       abbr: "matthew",        chapters: 28, t: "NT" },
  { name: "Mark",          abbr: "mark",           chapters: 16, t: "NT" },
  { name: "Luke",          abbr: "luke",           chapters: 24, t: "NT" },
  { name: "John",          abbr: "john",           chapters: 21, t: "NT" },
  { name: "Acts",          abbr: "acts",           chapters: 28, t: "NT" },
  { name: "Romans",        abbr: "romans",         chapters: 16, t: "NT" },
  { name: "1 Corinthians", abbr: "1+corinthians",  chapters: 16, t: "NT" },
  { name: "2 Corinthians", abbr: "2+corinthians",  chapters: 13, t: "NT" },
  { name: "Galatians",     abbr: "galatians",      chapters: 6,  t: "NT" },
  { name: "Ephesians",     abbr: "ephesians",      chapters: 6,  t: "NT" },
  { name: "Philippians",   abbr: "philippians",    chapters: 4,  t: "NT" },
  { name: "Colossians",    abbr: "colossians",     chapters: 4,  t: "NT" },
  { name: "1 Thessalonians",abbr:"1+thessalonians",chapters: 5,  t: "NT" },
  { name: "2 Thessalonians",abbr:"2+thessalonians",chapters: 3,  t: "NT" },
  { name: "1 Timothy",     abbr: "1+timothy",      chapters: 6,  t: "NT" },
  { name: "2 Timothy",     abbr: "2+timothy",      chapters: 4,  t: "NT" },
  { name: "Titus",         abbr: "titus",          chapters: 3,  t: "NT" },
  { name: "Philemon",      abbr: "philemon",       chapters: 1,  t: "NT" },
  { name: "Hebrews",       abbr: "hebrews",        chapters: 13, t: "NT" },
  { name: "James",         abbr: "james",          chapters: 5,  t: "NT" },
  { name: "1 Peter",       abbr: "1+peter",        chapters: 5,  t: "NT" },
  { name: "2 Peter",       abbr: "2+peter",        chapters: 3,  t: "NT" },
  { name: "1 John",        abbr: "1+john",         chapters: 5,  t: "NT" },
  { name: "2 John",        abbr: "2+john",         chapters: 1,  t: "NT" },
  { name: "3 John",        abbr: "3+john",         chapters: 1,  t: "NT" },
  { name: "Jude",          abbr: "jude",           chapters: 1,  t: "NT" },
  { name: "Revelation",    abbr: "revelation",     chapters: 22, t: "NT" },
];

// ── Verses per page for 600×600 display ──
const VERSES_PER_PAGE = 4;

// ── Available translations (all free / public domain via bible-api.com) ──
const TRANSLATIONS = [
  { id: "kjv",    name: "King James Version",                  year: "1611", note: "Classic KJV" },
  { id: "web",    name: "World English Bible",                 year: "2000", note: "Modern public domain" },
  { id: "bbe",    name: "Bible in Basic English",              year: "1949", note: "Simple vocabulary" },
  { id: "asv",    name: "American Standard Version",           year: "1901", note: "Scholarly" },
  { id: "darby",  name: "Darby Translation",                   year: "1890", note: "Literal" },
  { id: "dra",    name: "Douay-Rheims",                        year: "1899", note: "Catholic" },
  { id: "ylt",    name: "Young's Literal Translation",         year: "1898", note: "NT only" },
  { id: "oeb-us", name: "Open English Bible (US)",             year: "2010", note: "Gender-inclusive" },
  { id: "webbe",  name: "World English Bible (British)",       year: "2000", note: "UK spelling" },
];

// ── Kokoro voices ─────────────────────────────────────────────
const KOKORO_VOICES = [
  { id: "af_heart",   name: "Heart",    accent: "American", gender: "Female", note: "Warm · default" },
  { id: "af_bella",   name: "Bella",    accent: "American", gender: "Female", note: "Smooth" },
  { id: "af_sarah",   name: "Sarah",    accent: "American", gender: "Female", note: "Clear" },
  { id: "af_nicole",  name: "Nicole",   accent: "American", gender: "Female", note: "Soft" },
  { id: "am_adam",    name: "Adam",     accent: "American", gender: "Male",   note: "Calm" },
  { id: "am_michael", name: "Michael",  accent: "American", gender: "Male",   note: "Deep" },
  { id: "bf_emma",    name: "Emma",     accent: "British",  gender: "Female", note: "Refined" },
  { id: "bf_isabella",name: "Isabella", accent: "British",  gender: "Female", note: "Elegant" },
  { id: "bm_george",  name: "George",   accent: "British",  gender: "Male",   note: "Rich" },
  { id: "bm_lewis",   name: "Lewis",    accent: "British",  gender: "Male",   note: "Crisp" },
];
// Flat index helpers: voice list idx 0 = Standard, idx 1-10 = KOKORO_VOICES[0-9]
const VOICE_COUNT = 1 + KOKORO_VOICES.length; // 11

// ── State ────────────────────────────────────────────────────
const state = {
  screen: "home",       // home | books | chapters | reading | search | translations
  bookIdx: 0,
  chapterIdx: 0,        // 0-based
  verses: [],           // [{verse, text}]
  page: 0,
  totalPages: 0,
  listIdx: 0,           // focused row in books/search/translations
  chapterFocus: 0,      // focused cell in chapter grid
  readingFocus: "prev", // "prev" | "speak" | "next" in reading controls
  speaking: false,
  speakingVerseIdx: -1,
  loading: false,
  error: null,
  searchQuery: "",
  searchResults: [],
  searchIdx: 0,
  searchLoading: false,
  translation: "kjv",   // active translation ID
  translationIdx: 0,    // focused row in translations screen
  voiceMode: "standard",   // "standard" | "ai"
  voiceIdx: 0,             // focused row in voice screen
  aiTtsStatus: "idle",     // "idle" | "loading" | "ready" | "error"
  aiTtsProgress: 0,        // 0–100 download progress
  aiVoiceId: "af_heart",   // Kokoro voice id
  aiPreparing: false,      // true while pre-generating the first page batch
};

// ── TTS ───────────────────────────────────────────────────────
let speechSynth = window.speechSynthesis;
let currentUtterance = null;
let currentAudioEl = null;
let ttsQueue = [];
let ttsActive = false;
let kokoroInstance = null;

// Load voices list asynchronously (Chrome/Edge need voiceschanged event)
let cachedVoices = [];
function loadVoices() {
  const v = window.speechSynthesis.getVoices();
  if (v.length) cachedVoices = v;
}
loadVoices();
window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

function getBestSystemVoice() {
  const voices = cachedVoices.length ? cachedVoices : window.speechSynthesis.getVoices();
  const priority = [
    "Microsoft Aria Online (Natural) - English (United States)",
    "Microsoft Jenny Online (Natural) - English (United States)",
    "Microsoft Guy Online (Natural) - English (United States)",
    "Google US English",
    "Google UK English Female",
    "Samantha",
  ];
  for (const name of priority) {
    const v = voices.find(v => v.name === name);
    if (v) return v;
  }
  return voices.find(v => v.lang && v.lang.startsWith("en")) || voices[0] || null;
}

function stopTTS() {
  speechSynth.cancel();
  if (currentAudioEl) {
    currentAudioEl.pause();
    currentAudioEl.src = "";
    currentAudioEl = null;
  }
  ttsActive = false;
  ttsQueue = [];
  state.speaking = false;
  state.aiPreparing = false;
  state.speakingVerseIdx = -1;
  currentUtterance = null;
  render();
}

// ── Standard (browser) TTS ────────────────────────────────────
function speakVerse(idx) {
  if (idx >= state.verses.length) { stopTTS(); return; }
  const verse = state.verses[idx];
  state.speakingVerseIdx = idx;
  state.speaking = true;
  render();

  const utter = new SpeechSynthesisUtterance(verse.text);
  utter.rate = 0.90;
  utter.pitch = 1.0;
  utter.lang = "en-US";
  const bestVoice = getBestSystemVoice();
  if (bestVoice) utter.voice = bestVoice;
  currentUtterance = utter;

  utter.onend = () => { if (ttsActive) speakVerse(idx + 1); };
  utter.onerror = () => { if (ttsActive) speakVerse(idx + 1); };
  speechSynth.speak(utter);
}

// ── AI (Kokoro) TTS ───────────────────────────────────────────
async function loadKokoroModel() {
  if (kokoroInstance) return kokoroInstance;
  state.aiTtsStatus = "loading";
  state.aiTtsProgress = 0;
  render();
  try {
    const { KokoroTTS } = await import("kokoro-js");
    kokoroInstance = await KokoroTTS.from_pretrained(
      "onnx-community/Kokoro-82M-v1.0-ONNX",
      {
        dtype: "q8",
        device: "wasm",
        progress_callback: (info) => {
          if (info.status === "progress" && info.total > 0) {
            state.aiTtsProgress = Math.round((info.loaded / info.total) * 100);
            render();
          }
        },
      }
    );
    state.aiTtsStatus = "ready";
    state.aiTtsProgress = 100;
    render();
    return kokoroInstance;
  } catch (err) {
    console.error("Kokoro load failed:", err);
    state.aiTtsStatus = "error";
    state.voiceMode = "standard";
    render();
    return null;
  }
}

// ── AI (Kokoro) TTS pipeline ─────────────────────────────────

// Generate one verse audio, resolves to null on failure
async function genAudio(tts, idx) {
  if (idx < 0 || idx >= state.verses.length) return null;
  try {
    return await tts.generate(state.verses[idx].text.trim(), {
      voice: state.aiVoiceId,
      speed: 0.88,
    });
  } catch {
    return null;
  }
}

// Play a verse; audioPromises is the full pre-generated queue for the page batch
async function playKokoroVerse(idx, pageStart, audioPromises) {
  if (idx >= state.verses.length || !ttsActive) { stopTTS(); return; }

  state.speakingVerseIdx = idx;
  state.speaking = true;
  render();

  const qIdx = idx - pageStart;
  // Resolve from queue if available, otherwise generate on-the-fly
  const audio = qIdx >= 0 && qIdx < audioPromises.length
    ? await audioPromises[qIdx]
    : await genAudio(kokoroInstance, idx);

  if (!audio || !ttsActive) return;

  // For verses beyond the pre-generated page, keep a 1-ahead lookahead
  if (qIdx >= audioPromises.length - 1) {
    audioPromises.push(genAudio(kokoroInstance, idx + 1));
  }

  const blob = new Blob([audio.toWav()], { type: "audio/wav" });
  const url = URL.createObjectURL(blob);
  const audioEl = new Audio(url);
  currentAudioEl = audioEl;

  audioEl.onended = () => {
    URL.revokeObjectURL(url);
    currentAudioEl = null;
    if (ttsActive) playKokoroVerse(idx + 1, pageStart, audioPromises);
  };
  audioEl.onerror = () => {
    URL.revokeObjectURL(url);
    currentAudioEl = null;
    if (ttsActive) playKokoroVerse(idx + 1, pageStart, audioPromises);
  };
  audioEl.play().catch(err => {
    if (err.name !== "AbortError") console.error("Audio play error:", err);
    URL.revokeObjectURL(url);
    currentAudioEl = null;
  });
}

// Entry point: pre-generate the whole current page in parallel, then start playing
async function startKokoroTTS(startIdx) {
  const tts = await loadKokoroModel();
  if (!tts || !ttsActive) return;

  // Show "Preparing…" while we pre-generate the full page batch
  state.aiPreparing = true;
  state.speaking = true;
  render();

  // Kick off inference for ALL verses on this page simultaneously
  const pageEnd = Math.min(startIdx + VERSES_PER_PAGE, state.verses.length);
  const audioPromises = Array.from(
    { length: pageEnd - startIdx },
    (_, i) => genAudio(tts, startIdx + i)
  );

  // Wait for the first verse AND a minimum buffer so the rest are well underway
  // The buffer gives verse 2-4 a head start — if they finish during playback,
  // transitions are instant; if not, any remaining wait is tiny.
  await Promise.all([
    audioPromises[0],
    new Promise(r => setTimeout(r, 2500)),
  ]);

  state.aiPreparing = false;
  render();

  if (!ttsActive) return;

  playKokoroVerse(startIdx, startIdx, audioPromises);
}

function startTTS() {
  if (!state.verses.length) return;
  const startIdx = state.page * VERSES_PER_PAGE;
  ttsActive = true;
  state.speaking = true;
  if (state.voiceMode === "ai") {
    startKokoroTTS(startIdx);
  } else {
    speakVerse(startIdx);
  }
}

function toggleTTS() {
  if (state.screen !== "reading") return;
  if (state.speaking) {
    stopTTS();
  } else {
    startTTS();
  }
}

// ── API ───────────────────────────────────────────────────────
async function fetchChapter(bookAbbr, chapter) {
  const t = state.translation;
  const url = `https://bible-api.com/${bookAbbr}+${chapter}?translation=${t}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.verses || [];
}

async function fetchSearchVerses(query) {
  const encoded = encodeURIComponent(query.trim());
  const t = state.translation;
  const url = `https://bible-api.com/${encoded}?translation=${t}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return data.verses || [];
}

// ── Navigation helpers ────────────────────────────────────────
function navigate(screen) {
  stopTTS();
  state.screen = screen;
  state.loading = false;
  state.error = null;
  render();
}

async function openChapter(bookIdx, chapterNum) {
  state.loading = true;
  state.error = null;
  state.bookIdx = bookIdx;
  state.chapterIdx = chapterNum - 1;
  state.verses = [];
  state.page = 0;
  state.readingFocus = "speak";
  navigate("reading");

  try {
    const book = BOOKS[bookIdx];
    const verses = await fetchChapter(book.abbr, chapterNum);
    state.verses = verses;
    state.totalPages = Math.ceil(verses.length / VERSES_PER_PAGE);
    state.loading = false;
    render();
  } catch (e) {
    state.loading = false;
    state.error = "Could not load passage. Check your connection.";
    render();
  }
}

function nextPage() {
  if (state.page < state.totalPages - 1) {
    if (state.speaking) stopTTS();
    state.page++;
    render();
  }
}

function prevPage() {
  if (state.page > 0) {
    if (state.speaking) stopTTS();
    state.page--;
    render();
  }
}

async function prevChapter() {
  const book = BOOKS[state.bookIdx];
  if (state.chapterIdx > 0) {
    await openChapter(state.bookIdx, state.chapterIdx);
  } else if (state.bookIdx > 0) {
    const prev = BOOKS[state.bookIdx - 1];
    await openChapter(state.bookIdx - 1, prev.chapters);
  }
}

async function nextChapter() {
  const book = BOOKS[state.bookIdx];
  if (state.chapterIdx < book.chapters - 1) {
    await openChapter(state.bookIdx, state.chapterIdx + 2);
  } else if (state.bookIdx < BOOKS.length - 1) {
    await openChapter(state.bookIdx + 1, 1);
  }
}

// ── Keyboard handler ─────────────────────────────────────────
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (state.screen === "home") {
    if (key === "ArrowDown") {
      state.listIdx = Math.min(state.listIdx + 1, 3);
      render();
    } else if (key === "ArrowUp") {
      state.listIdx = Math.max(state.listIdx - 1, 0);
      render();
    } else if (key === "Enter" || key === "ArrowRight") {
      if (state.listIdx === 0) { state.listIdx = 0; navigate("books"); }
      else if (state.listIdx === 1) { navigate("search"); }
      else if (state.listIdx === 2) { state.translationIdx = TRANSLATIONS.findIndex(t => t.id === state.translation); navigate("translations"); }
      else { state.voiceIdx = currentVoiceIdx(); navigate("voice"); }
    }
    return;
  }

  if (state.screen === "voice") {
    if (key === "ArrowDown") {
      state.voiceIdx = Math.min(state.voiceIdx + 1, VOICE_COUNT - 1);
      render();
    } else if (key === "ArrowUp") {
      state.voiceIdx = Math.max(state.voiceIdx - 1, 0);
      render();
    } else if (key === "Enter" || key === "ArrowRight") {
      selectVoiceIdx(state.voiceIdx);
    } else if (key === "Escape" || key === "ArrowLeft") {
      navigate("home");
    }
    return;
  }

  if (state.screen === "translations") {
    if (key === "ArrowDown") {
      state.translationIdx = Math.min(state.translationIdx + 1, TRANSLATIONS.length - 1);
      render();
    } else if (key === "ArrowUp") {
      state.translationIdx = Math.max(state.translationIdx - 1, 0);
      render();
    } else if (key === "Enter" || key === "ArrowRight") {
      state.translation = TRANSLATIONS[state.translationIdx].id;
      navigate("home");
    } else if (key === "Escape" || key === "ArrowLeft") {
      navigate("home");
    }
    return;
  }

  if (state.screen === "books") {
    if (key === "ArrowDown") {
      state.listIdx = Math.min(state.listIdx + 1, BOOKS.length - 1);
      render();
    } else if (key === "ArrowUp") {
      state.listIdx = Math.max(state.listIdx - 1, 0);
      render();
    } else if (key === "Enter" || key === "ArrowRight") {
      state.chapterFocus = 0;
      navigate("chapters");
    } else if (key === "Escape" || key === "ArrowLeft") {
      state.listIdx = 0;
      navigate("home");
    }
    return;
  }

  if (state.screen === "chapters") {
    const book = BOOKS[state.listIdx];
    const cols = 8;
    const total = book.chapters;
    if (key === "ArrowRight") {
      state.chapterFocus = Math.min(state.chapterFocus + 1, total - 1);
      render();
    } else if (key === "ArrowLeft") {
      if (state.chapterFocus === 0) { navigate("books"); }
      else { state.chapterFocus--; render(); }
    } else if (key === "ArrowDown") {
      state.chapterFocus = Math.min(state.chapterFocus + cols, total - 1);
      render();
    } else if (key === "ArrowUp") {
      state.chapterFocus = Math.max(state.chapterFocus - cols, 0);
      render();
    } else if (key === "Enter") {
      openChapter(state.listIdx, state.chapterFocus + 1);
    } else if (key === "Escape") {
      navigate("books");
    }
    return;
  }

  if (state.screen === "reading") {
    if (key === " ") { e.preventDefault(); toggleTTS(); return; }
    if (key === "ArrowLeft") {
      if (state.page > 0) prevPage();
      else navigate("chapters");
    } else if (key === "ArrowRight") {
      nextPage();
    } else if (key === "Escape") {
      navigate("chapters");
    } else if (key === "ArrowDown") {
      // cycle focus: speak → next
      const opts = ["prev","speak","next"];
      const idx = opts.indexOf(state.readingFocus);
      state.readingFocus = opts[Math.min(idx + 1, opts.length - 1)];
      render();
    } else if (key === "ArrowUp") {
      const opts = ["prev","speak","next"];
      const idx = opts.indexOf(state.readingFocus);
      state.readingFocus = opts[Math.max(idx - 1, 0)];
      render();
    } else if (key === "Enter") {
      if (state.readingFocus === "speak") toggleTTS();
      else if (state.readingFocus === "prev") {
        if (state.page > 0) prevPage(); else prevChapter();
      } else if (state.readingFocus === "next") {
        if (state.page < state.totalPages - 1) nextPage(); else nextChapter();
      }
    }
    return;
  }

  if (state.screen === "search") {
    if (key === "Escape" || key === "ArrowLeft") {
      navigate("home");
      state.searchQuery = "";
      state.searchResults = [];
    } else if (key === "ArrowDown") {
      state.searchIdx = Math.min(state.searchIdx + 1, state.searchResults.length - 1);
      render();
    } else if (key === "ArrowUp") {
      state.searchIdx = Math.max(state.searchIdx - 1, 0);
      render();
    } else if (key === "Enter") {
      const result = state.searchResults[state.searchIdx];
      if (result) {
        const bookIdx = BOOKS.findIndex(b => b.name === result.book_name || b.abbr.replace(/\+/g," ").toLowerCase() === result.book_name?.toLowerCase());
        if (bookIdx >= 0) openChapter(bookIdx, result.chapter);
      }
    }
    return;
  }
});

// ── Mouse wheel scroll (browser preview) ─────────────────────
let wheelCooldown = false;
document.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (wheelCooldown) return;
  wheelCooldown = true;
  setTimeout(() => { wheelCooldown = false; }, 120);

  const dir = e.deltaY > 0 ? 1 : -1;

  if (state.screen === "home") {
    state.listIdx = Math.max(0, Math.min(state.listIdx + dir, 3));
    render();
  } else if (state.screen === "voice") {
    state.voiceIdx = Math.max(0, Math.min(state.voiceIdx + dir, VOICE_COUNT - 1));
    render();
  } else if (state.screen === "books") {
    state.listIdx = Math.max(0, Math.min(state.listIdx + dir, BOOKS.length - 1));
    render();
  } else if (state.screen === "translations") {
    state.translationIdx = Math.max(0, Math.min(state.translationIdx + dir, TRANSLATIONS.length - 1));
    render();
  } else if (state.screen === "chapters") {
    const book = BOOKS[state.listIdx];
    state.chapterFocus = Math.max(0, Math.min(state.chapterFocus + dir, book.chapters - 1));
    render();
  } else if (state.screen === "search") {
    state.searchIdx = Math.max(0, Math.min(state.searchIdx + dir, state.searchResults.length - 1));
    render();
  } else if (state.screen === "reading") {
    if (dir > 0) nextPage(); else prevPage();
  }
}, { passive: false });

// ── Render helpers ─────────────────────────────────────────────
function el(tag, attrs = {}, ...children) {
  const elem = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") elem.className = v;
    else if (k.startsWith("on")) elem.addEventListener(k.slice(2).toLowerCase(), v);
    else elem.setAttribute(k, v);
  }
  for (const child of children) {
    if (child == null) continue;
    if (typeof child === "string") elem.appendChild(document.createTextNode(child));
    else elem.appendChild(child);
  }
  return elem;
}

// ── Voice selection helper ────────────────────────────────────
function selectVoiceIdx(idx) {
  if (idx === 0) {
    state.voiceMode = "standard";
  } else {
    const kv = KOKORO_VOICES[idx - 1];
    if (kv) {
      state.voiceMode = "ai";
      state.aiVoiceId = kv.id;
      if (state.aiTtsStatus === "idle") loadKokoroModel();
    }
  }
  navigate("home");
}

function currentVoiceIdx() {
  if (state.voiceMode === "standard") return 0;
  const ki = KOKORO_VOICES.findIndex(v => v.id === state.aiVoiceId);
  return ki >= 0 ? ki + 1 : 1;
}

// ── Screens ────────────────────────────────────────────────────

function renderHome() {
  const activeTrans = TRANSLATIONS.find(t => t.id === state.translation) || TRANSLATIONS[0];
  const activeKV = KOKORO_VOICES.find(v => v.id === state.aiVoiceId);
  const voiceHint = state.voiceMode === "ai"
    ? (state.aiTtsStatus === "loading" ? `${state.aiTtsProgress}%` : (activeKV ? activeKV.name : "AI ✦"))
    : "Standard";
  const items = [
    { icon: "✦", label: "Read",        hint: "Browse Books" },
    { icon: "⌕", label: "Search",      hint: "Find a verse" },
    { icon: "⇄", label: "Translation", hint: activeTrans.id.toUpperCase() },
    { icon: "♪", label: "Voice",       hint: voiceHint },
  ];

  return el("div", { class: "screen active" },
    el("div", { class: "home-brand" },
      el("div", { class: "home-cross" }, "✝"),
      el("div", { class: "home-title" }, "Holy Bible"),
      el("div", { class: "home-tagline" }, activeTrans.name),
      el("div", { class: "home-menu" },
        ...items.map((item, i) =>
          el("div", {
            class: `home-item${state.listIdx === i ? " focused" : ""}`,
            onclick: () => {
              state.listIdx = i;
              if (i === 0) navigate("books");
              else if (i === 1) navigate("search");
              else if (i === 2) { state.translationIdx = TRANSLATIONS.findIndex(t => t.id === state.translation); navigate("translations"); }
              else { state.voiceIdx = currentVoiceIdx(); navigate("voice"); }
            }
          },
            el("span", { class: "home-item-icon" }, item.icon),
            el("span", { class: "home-item-label" }, item.label),
            el("span", { class: "home-item-hint" }, item.hint),
          )
        )
      )
    ),
    keysHint([
      { keys: ["↑↓"], label: "navigate" },
      { keys: ["↵"], label: "select" },
    ])
  );
}

function renderTranslations() {
  const ITEM_H = 50;
  const VISIBLE = 7;
  const offset = Math.max(0, Math.min(state.translationIdx - 3, TRANSLATIONS.length - VISIBLE));

  const rows = TRANSLATIONS.map((t, i) =>
    el("div", {
      class: `list-item${state.translationIdx === i ? " focused" : ""}${t.id === state.translation ? " active-translation" : ""}`,
      onclick: () => { state.translationIdx = i; state.translation = t.id; navigate("home"); }
    },
      el("span", { class: "list-item-num" }, t.id === state.translation ? "✓" : ""),
      el("div", { class: "trans-info" },
        el("span", { class: "list-item-name" }, t.name),
        el("span", { class: "trans-meta" }, `${t.year} · ${t.note}`),
      ),
    )
  );

  const scroll = el("div", { class: "list-scroll" }, ...rows);
  scroll.style.transform = `translateY(-${offset * ITEM_H}px)`;

  return el("div", { class: "screen active" },
    el("div", { class: "screen-header" },
      el("div", { class: "back-btn", onclick: () => navigate("home") }, "‹"),
      el("div", { class: "screen-title" }, "Bible Translation"),
      el("div", { class: "screen-subtitle" }, "All free · Public domain"),
    ),
    el("div", { class: "list-container" }, scroll),
    keysHint([
      { keys: ["↑↓"], label: "scroll" },
      { keys: ["↵"], label: "select" },
      { keys: ["←"], label: "back" },
    ])
  );
}

function renderVoice() {
  const VISIBLE = 7;
  const activeIdx = currentVoiceIdx();

  // Build flat list: [Standard, ...KOKORO_VOICES]
  const aiStatus = state.aiTtsStatus;
  const aiSub = {
    idle:    "~86 MB · one-time download",
    loading: `Downloading… ${state.aiTtsProgress}%`,
    ready:   "Downloaded · on-device",
    error:   "Failed · tap to retry",
  }[aiStatus];

  const allItems = [
    { idx: 0,  label: "Standard",  sub: "Browser built-in · instant", badge: null },
    ...KOKORO_VOICES.map((v, i) => ({
      idx: i + 1,
      label: v.name,
      sub: `${v.accent} ${v.gender} · ${v.note}`,
      badge: i === 0 ? aiSub : null,   // only show status on first AI entry
      loading: i === 0 && aiStatus === "loading",
      progress: state.aiTtsProgress,
    })),
  ];

  // Sliding window: keep focused item near center
  const offset = Math.max(0, Math.min(state.voiceIdx - Math.floor(VISIBLE / 2), VOICE_COUNT - VISIBLE));
  const visible = allItems.slice(offset, offset + VISIBLE);

  // Section divider: show "── AI Voices ──" between Standard and first Kokoro entry
  const showDivider = offset === 0; // only when Standard is visible

  return el("div", { class: "screen active" },
    el("div", { class: "screen-header" },
      el("div", { class: "back-btn", onclick: () => navigate("home") }, "‹"),
      el("div", { class: "screen-title" }, "Voice"),
      el("div", { class: "screen-subtitle" }, "Free · On-device"),
    ),
    el("div", { class: "voice-list" },
      ...visible.map((item, visI) => {
        const isActive = item.idx === activeIdx;
        const isFocused = item.idx === state.voiceIdx;
        const isStandard = item.idx === 0;
        const isFirstKokoro = item.idx === 1;
        return el("div", { class: "voice-group" },
          // Divider between Standard and AI voices
          showDivider && isFirstKokoro
            ? el("div", { class: "voice-divider" }, "AI Voices · Kokoro")
            : null,
          el("div", {
            class: `voice-option${isFocused ? " focused" : ""}${isActive ? " active-voice" : ""}`,
            onclick: () => { state.voiceIdx = item.idx; selectVoiceIdx(item.idx); }
          },
            el("div", { class: "voice-check" }, isActive ? "✓" : ""),
            el("div", { class: "voice-info" },
              el("div", { class: "voice-name" }, item.label),
              el("div", { class: "voice-sub" }, item.sub),
              item.badge
                ? el("div", { class: "voice-badge" }, item.badge)
                : null,
              item.loading
                ? el("div", { class: "voice-progress-bar" },
                    el("div", { class: "voice-progress-fill", style: `width:${item.progress}%` })
                  )
                : null,
            ),
          )
        );
      })
    ),
    keysHint([
      { keys: ["↑↓"], label: "scroll" },
      { keys: ["↵"], label: "select" },
      { keys: ["←"], label: "back" },
    ])
  );
}

function renderBooks() {
  const ITEM_H = 44;
  const VISIBLE = 9;
  const offset = Math.max(0, Math.min(state.listIdx - 3, BOOKS.length - VISIBLE));

  const rows = BOOKS.map((book, i) =>
    el("div", {
      class: `list-item${state.listIdx === i ? " focused" : ""}`,
      onclick: () => { state.listIdx = i; state.chapterFocus = 0; navigate("chapters"); }
    },
      el("span", { class: "list-item-num" }, String(i + 1)),
      el("span", { class: "list-item-name" }, book.name),
      el("span", { class: `list-item-testament ${book.t.toLowerCase()}` }, book.t),
      el("span", { class: "list-arrow" }, "›"),
    )
  );

  const scroll = el("div", { class: "list-scroll" }, ...rows);
  scroll.style.transform = `translateY(-${offset * ITEM_H}px)`;

  return el("div", { class: "screen active" },
    el("div", { class: "screen-header" },
      el("div", { class: "back-btn", onclick: () => navigate("home") }, "‹"),
      el("div", { class: "screen-title" }, "Books of the Bible"),
      el("div", { class: "screen-subtitle" }, `${state.listIdx + 1} / 66`),
    ),
    el("div", { class: "list-container" }, scroll),
    keysHint([
      { keys: ["↑↓"], label: "scroll" },
      { keys: ["↵","→"], label: "open" },
      { keys: ["←"], label: "back" },
    ])
  );
}

function renderChapters() {
  const book = BOOKS[state.listIdx];
  const cells = Array.from({ length: book.chapters }, (_, i) =>
    el("div", {
      class: `chapter-cell${state.chapterFocus === i ? " focused" : ""}`,
      onclick: () => { state.chapterFocus = i; openChapter(state.listIdx, i + 1); }
    }, String(i + 1))
  );

  return el("div", { class: "screen active" },
    el("div", { class: "screen-header" },
      el("div", { class: "back-btn", onclick: () => navigate("books") }, "‹"),
      el("div", { class: "screen-title" }, book.name),
      el("div", { class: "screen-subtitle" }, `${book.chapters} chapters · ${book.t}`),
    ),
    el("div", { class: "list-container" },
      el("div", { class: "chapter-grid" }, ...cells)
    ),
    keysHint([
      { keys: ["↑↓←→"], label: "navigate" },
      { keys: ["↵"], label: "open" },
    ])
  );
}

function renderReading() {
  const book = BOOKS[state.bookIdx];
  const chapterNum = state.chapterIdx + 1;
  const ref = `${book.name} ${chapterNum}`;

  const pageVerses = state.verses.slice(
    state.page * VERSES_PER_PAGE,
    (state.page + 1) * VERSES_PER_PAGE
  );

  const verseEls = pageVerses.map((v, i) => {
    const absIdx = state.page * VERSES_PER_PAGE + i;
    const isSpeaking = state.speakingVerseIdx === absIdx;
    return el("div", { class: `verse-row${isSpeaking ? " speaking" : ""}` },
      el("span", { class: "verse-num" }, String(v.verse)),
      el("span", { class: "verse-text" }, v.text.trim()),
    );
  });

  // TTS button icon/label
  const aiLoading = state.voiceMode === "ai" && state.aiTtsStatus === "loading";
  const ttsIcon = state.aiPreparing ? "⏳" : (state.speaking ? "◼" : (aiLoading ? "⏳" : "♪"));
  const ttsLabel = state.aiPreparing ? "Preparing…" : (state.speaking ? "Stop" : (aiLoading ? `${state.aiTtsProgress}%` : "Listen"));

  // Pagination dots
  const dots = state.totalPages > 1
    ? el("div", { class: "page-dots" },
        ...Array.from({ length: Math.min(state.totalPages, 8) }, (_, i) =>
          el("div", { class: `page-dot${state.page === i ? " active" : ""}` })
        )
      )
    : el("div", {});

  const hasPrev = state.page > 0 || state.bookIdx > 0 || state.chapterIdx > 0;
  const hasNext = state.page < state.totalPages - 1 || state.chapterIdx < book.chapters - 1 || state.bookIdx < BOOKS.length - 1;

  const prevLabel = state.page > 0 ? "← Prev" : (state.chapterIdx > 0 ? `‹ Ch ${chapterNum - 1}` : "‹ Prev book");
  const nextLabel = state.page < state.totalPages - 1 ? "Next →" : (state.chapterIdx < book.chapters - 1 ? `Ch ${chapterNum + 1} ›` : "Next book ›");

  const loadingEl = el("div", { class: `status-overlay${state.loading ? "" : " hidden"}` },
    el("div", { class: "spinner" }),
    el("div", { class: "status-text" }, "Loading…"),
  );

  const errorEl = state.error
    ? el("div", { class: "error-box" },
        el("div", { class: "error-icon" }, "⚠"),
        el("div", { class: "error-msg" }, state.error),
        el("div", { class: "error-hint" }, "Press ← to go back"),
      )
    : null;

  return el("div", { class: "screen active" },
    el("div", { class: "reading-meta" },
      el("div", { class: "back-btn", onclick: () => navigate("chapters") }, "‹"),
      el("div", { class: "reading-ref" }, ref),
      el("div", { class: "reading-controls" },
        ...(state.speaking
          ? [el("div", { class: "tts-bar" },
              el("span"), el("span"), el("span"), el("span")
            )]
          : []),
        el("div", {
          class: `ctrl-btn${state.readingFocus === "speak" ? " focused" : ""}${state.speaking ? " active" : ""}`,
          onclick: toggleTTS
        },
          el("span", { class: "ctrl-btn-icon" }, ttsIcon),
          ttsLabel,
        ),
      ),
    ),
    el("div", { class: "reading-content" },
      loadingEl,
      errorEl || el("div", { class: "verse-page" }, ...verseEls),
    ),
    el("div", { class: "chapter-nav" },
      el("button", {
        class: `chap-nav-btn${state.readingFocus === "prev" ? " focused" : ""}`,
        onclick: () => { if (state.page > 0) prevPage(); else prevChapter(); },
        ...(hasPrev ? {} : { disabled: "true" }),
      }, prevLabel),
      el("div", { class: "chap-nav-label" },
        dots,
      ),
      el("button", {
        class: `chap-nav-btn${state.readingFocus === "next" ? " focused" : ""}`,
        onclick: () => { if (state.page < state.totalPages - 1) nextPage(); else nextChapter(); },
        ...(hasNext ? {} : { disabled: "true" }),
      }, nextLabel),
    ),
  );
}

let searchDebounce = null;
function renderSearch() {
  const input = el("input", {
    class: "search-input",
    type: "text",
    placeholder: "e.g. John 3:16",
    value: state.searchQuery,
  });
  input.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    clearTimeout(searchDebounce);
    if (state.searchQuery.trim().length > 3) {
      searchDebounce = setTimeout(async () => {
        state.searchLoading = true;
        render();
        try {
          const results = await fetchSearchVerses(state.searchQuery);
          state.searchResults = results;
          state.searchIdx = 0;
        } catch {
          state.searchResults = [];
        }
        state.searchLoading = false;
        render();
      }, 500);
    } else {
      state.searchResults = [];
    }
    render();
  });
  input.addEventListener("keydown", (e) => e.stopPropagation());

  const resultEls = state.searchResults.map((r, i) =>
    el("div", {
      class: `search-result-item${state.searchIdx === i ? " focused" : ""}`,
      onclick: () => {
        state.searchIdx = i;
        const bookIdx = BOOKS.findIndex(b => b.name === r.book_name);
        if (bookIdx >= 0) openChapter(bookIdx, r.chapter);
      }
    },
      el("div", { class: "search-result-ref" }, `${r.book_name} ${r.chapter}:${r.verse}`),
      el("div", { class: "search-result-text" }, r.text),
    )
  );

  const emptyEl = state.searchResults.length === 0 && !state.searchLoading
    ? el("div", { class: "search-empty" },
        state.searchQuery.length > 3
          ? "No results — try a reference like John 3:16"
          : "Type a verse reference or keyword"
      )
    : null;

  return el("div", { class: "screen active" },
    el("div", { class: "screen-header" },
      el("div", { class: "back-btn", onclick: () => { navigate("home"); state.searchQuery = ""; state.searchResults = []; } }, "‹"),
      el("div", { class: "screen-title" }, "Search"),
    ),
    el("div", { class: "search-box" },
      el("span", { class: "search-icon" }, "⌕"),
      input,
    ),
    el("div", { class: "search-results" },
      state.searchLoading
        ? el("div", { class: "search-empty" }, el("div", { class: "spinner" }))
        : (emptyEl || el("div", {}, ...resultEls))
    ),
    keysHint([
      { keys: ["↑↓"], label: "results" },
      { keys: ["↵"], label: "open" },
      { keys: ["←"], label: "back" },
    ])
  );
}

function keysHint(hints) {
  return el("div", { class: "keys-hint" },
    ...hints.map(h =>
      el("div", { class: "key-badge" },
        ...h.keys.map(k => el("span", { class: "key" }, k)),
        " ", h.label
      )
    )
  );
}

// ── Main render ───────────────────────────────────────────────
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  let screenEl;
  switch (state.screen) {
    case "home":         screenEl = renderHome(); break;
    case "books":        screenEl = renderBooks(); break;
    case "chapters":     screenEl = renderChapters(); break;
    case "reading":      screenEl = renderReading(); break;
    case "search":       screenEl = renderSearch(); break;
    case "translations": screenEl = renderTranslations(); break;
    case "voice":        screenEl = renderVoice(); break;
    default:             screenEl = renderHome();
  }

  app.appendChild(screenEl);

  // Focus search input if on search screen
  if (state.screen === "search") {
    requestAnimationFrame(() => {
      const inp = app.querySelector(".search-input");
      if (inp) inp.focus();
    });
  }
}

// ── Init ──────────────────────────────────────────────────────
render();
