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

// ── Whimsical preparing sequence ────────────────────────────────
const WHIMSY_SEQ = [
  "Preparing",
  "Building layers",
  "Adding fishing line",
  "Saving dolphins",
  "Tuning frequencies",
  "Consulting the whales",
  "Polishing vowels",
  "Waking the neurons",
  "Herding syllables",
  "Aligning the stars",
  "Charging the crystals",
  "Untangling the grammar",
  "Befriending the bytes",
  "Warming up the vibes",
  "Almost there",
];

// ── Kokoro languages ───────────────────────────────────────────
const KOKORO_LANGUAGES = [
  { id: "en-us", flag: "🇺🇸", label: "English (US)" },
  { id: "en-gb", flag: "🇬🇧", label: "English (UK)" },
  { id: "ja",    flag: "🇯🇵", label: "Japanese" },
  { id: "zh",    flag: "🇨🇳", label: "Chinese" },
  { id: "es",    flag: "🇪🇸", label: "Spanish" },
  { id: "fr",    flag: "🇫🇷", label: "French" },
  { id: "hi",    flag: "🇮🇳", label: "Hindi" },
  { id: "it",    flag: "🇮🇹", label: "Italian" },
  { id: "pt",    flag: "🇧🇷", label: "Portuguese" },
];

// ── Kokoro voices ─────────────────────────────────────────────
const KOKORO_VOICES = [
  // 🇺🇸 American English
  { id: "af_heart",      name: "Grace",    gender: "Female", note: "Warm",    lang: "en-us" },
  { id: "af_bella",      name: "Bella",    gender: "Female", note: "Smooth",  lang: "en-us" },
  { id: "af_sarah",      name: "Sarah",    gender: "Female", note: "Clear",   lang: "en-us" },
  { id: "af_nicole",     name: "Nicole",   gender: "Female", note: "Soft",    lang: "en-us" },
  { id: "af_sky",        name: "Sky",      gender: "Female", note: "Bright",  lang: "en-us" },
  { id: "am_adam",       name: "Adam",     gender: "Male",   note: "Calm",    lang: "en-us" },
  { id: "am_michael",    name: "Michael",  gender: "Male",   note: "Deep",    lang: "en-us" },
  // 🇬🇧 British English
  { id: "bf_emma",       name: "Emma",     gender: "Female", note: "Refined", lang: "en-gb" },
  { id: "bf_isabella",   name: "Isabella", gender: "Female", note: "Elegant", lang: "en-gb" },
  { id: "bm_george",     name: "George",   gender: "Male",   note: "Rich",    lang: "en-gb" },
  { id: "bm_lewis",      name: "Lewis",    gender: "Male",   note: "Crisp",   lang: "en-gb" },
  // 🇯🇵 Japanese
  { id: "jf_alpha",      name: "Hana",     gender: "Female", note: "Bright",  lang: "ja" },
  { id: "jf_gongitsune", name: "Kitsune",  gender: "Female", note: "Gentle",  lang: "ja" },
  { id: "jf_nezumi",     name: "Nezumi",   gender: "Female", note: "Soft",    lang: "ja" },
  { id: "jm_kumo",       name: "Kumo",     gender: "Male",   note: "Deep",    lang: "ja" },
  // 🇨🇳 Chinese (Mandarin)
  { id: "zf_xiaobei",    name: "Xiaobei",  gender: "Female", note: "Warm",    lang: "zh" },
  { id: "zf_xiaoni",     name: "Xiaoni",   gender: "Female", note: "Soft",    lang: "zh" },
  { id: "zm_yunxi",      name: "Yunxi",    gender: "Male",   note: "Clear",   lang: "zh" },
  { id: "zm_yunyang",    name: "Yunyang",  gender: "Male",   note: "Steady",  lang: "zh" },
  // 🇪🇸 Spanish
  { id: "ef_dora",       name: "Dora",     gender: "Female", note: "Bright",  lang: "es" },
  { id: "em_alex",       name: "Alex",     gender: "Male",   note: "Warm",    lang: "es" },
  // 🇫🇷 French
  { id: "ff_siwis",      name: "Siwis",    gender: "Female", note: "Elegant", lang: "fr" },
  // 🇮🇳 Hindi
  { id: "hf_alpha",      name: "Priya",    gender: "Female", note: "Warm",    lang: "hi" },
  { id: "hf_beta",       name: "Ananya",   gender: "Female", note: "Soft",    lang: "hi" },
  { id: "hm_omega",      name: "Arjun",    gender: "Male",   note: "Deep",    lang: "hi" },
  // 🇮🇹 Italian
  { id: "if_sara",       name: "Sara",     gender: "Female", note: "Melodic", lang: "it" },
  { id: "im_nicola",     name: "Nicola",   gender: "Male",   note: "Rich",    lang: "it" },
  // 🇧🇷 Portuguese
  { id: "pf_dora",       name: "Dora",     gender: "Female", note: "Warm",    lang: "pt" },
  { id: "pm_alex",       name: "Alex",     gender: "Male",   note: "Calm",    lang: "pt" },
];

// Only English Kokoro voices — non-English voices mispronounce Bible text
function filteredKokoroVoices() {
  return KOKORO_VOICES.filter(v => v.lang === "en-us" || v.lang === "en-gb");
}

// ── Piper voices (open-source Rhasspy Piper, in-browser via WASM) ──
// Each voice is its own model, downloaded once to browser storage (OPFS).
// Generation is much faster than Kokoro — near-instant verse audio.
const PIPER_VOICES = [
  { id: "en_US-hfc_female-medium", name: "Sophia", gender: "Female", note: "Natural",     lang: "en-us", mb: 60 },
  { id: "en_US-hfc_male-medium",   name: "James",  gender: "Male",   note: "Natural",     lang: "en-us", mb: 60 },
  { id: "en_US-amy-medium",        name: "Amy",    gender: "Female", note: "Warm",        lang: "en-us", mb: 60 },
  { id: "en_US-ryan-medium",       name: "Ryan",   gender: "Male",   note: "Clear",       lang: "en-us", mb: 60 },
  { id: "en_GB-alba-medium",       name: "Alba",   gender: "Female", note: "Scottish",    lang: "en-gb", mb: 60 },
  { id: "en_GB-northern_english_male-medium", name: "Arthur", gender: "Male", note: "Northern UK", lang: "en-gb", mb: 60 },
];

// Unified AI voice list shown in the Voice screen (Kokoro first, then Piper)
function aiVoiceList() {
  return [
    ...filteredKokoroVoices().map(v => ({ ...v, engine: "kokoro" })),
    ...PIPER_VOICES.map(v => ({ ...v, engine: "piper" })),
  ];
}
function voiceCount() {
  return getBrowserVoiceList().length + aiVoiceList().length;
}

// ── Display / appearance settings ────────────────────────────
const DISPLAY_SETTINGS = [
  { key: "textSize",   label: "Size",    options: ["xs","sm","md","lg","xl"],      labels: ["XS","Small","Medium","Large","X-Large"] },
  { key: "fontFamily", label: "Font",    options: ["sans","serif","mono"],          labels: ["Sans-serif","Serif","Monospace"] },
  { key: "textWeight", label: "Weight",  options: ["light","normal","bold"],        labels: ["Light","Normal","Bold"] },
  { key: "lineHeight", label: "Spacing", options: ["compact","normal","relaxed"],   labels: ["Compact","Normal","Relaxed"] },
  { key: "voiceSpeed", label: "Speed",   options: ["slow","calm","normal"],          labels: ["Slow","Calm","Normal"] },
];

// Voice reading speed → playback rate (pitch is preserved by the browser)
const VOICE_SPEED_RATES = { slow: 0.75, calm: 0.85, normal: 1.0 };
function voicePlaybackRate() { return VOICE_SPEED_RATES[state.voiceSpeed] ?? 0.85; }

// Apply a display-setting change that affects live playback immediately
function onDisplaySettingChange(key) {
  if (key === "voiceSpeed" && currentAudioEl) {
    currentAudioEl.playbackRate = voicePlaybackRate();
  }
}

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
  translation: "web",   // active translation ID
  translationIdx: 0,    // focused row in translations screen
  voiceMode: "standard",   // "standard" | "ai"
  voiceIdx: 0,             // focused row in voice screen
  voiceLangFocused: false, // true when language picker row is focused
  kokoroLang: "en-us",     // Kokoro language filter
  browserVoices: [],       // populated from speechSynthesis.getVoices()
  browserVoiceURI: null,   // null = auto-pick best; string = specific voice URI
  aiTtsStatus: "idle",     // "idle" | "loading" | "ready" | "error"
  aiTtsProgress: 0,        // 0–100 download progress
  aiVoiceId: "af_heart",   // active AI voice id (Kokoro or Piper)
  aiEngine: "kokoro",      // "kokoro" | "piper" — which engine aiVoiceId belongs to
  piperVoices: {},         // { [voiceId]: { status, progress } } per-voice download state
  aiPreparing: false,      // true while pre-generating the first page batch
  whimsyStep: 0,           // index into WHIMSY_SEQ during preparing phase
  // Display settings
  textSize:   "md",        // "xs" | "sm" | "md" | "lg" | "xl"
  fontFamily: "sans",      // "sans" | "serif" | "mono"
  textWeight: "light",     // "light" | "normal" | "bold"
  lineHeight: "normal",    // "compact" | "normal" | "relaxed"
  voiceSpeed: "calm",      // "slow" | "calm" | "normal" — reading speed
  displayRow: 0,           // focused row in display settings screen
};

// ── TTS ───────────────────────────────────────────────────────
let speechSynth = window.speechSynthesis;
let currentUtterance = null;
let currentAudioEl = null;
let ttsQueue = [];
let ttsActive = false;
let kokoroInstance = null;
let whimsyTimer = null;
let ttsSession = null;           // active AI playback session (snapshot of engine/voice/translation)
let _sessionCounter = 0;
let _genChain = Promise.resolve(); // FIFO queue — one audio generation at a time, in order
let _audioDb = null;
let _kokoroLoadPromise = null;   // singleton guard — prevents concurrent model loads
let nextChapterDataCache = null; // { bookIdx, chapterNum, verses } prefetched ahead

// Load voices list asynchronously (Chrome/Edge need voiceschanged event)
let cachedVoices = [];
function loadVoices() {
  const v = window.speechSynthesis.getVoices();
  if (!v.length) return;
  cachedVoices = v;
  // Populate browser voice list — English voices sorted local-first, then others
  const en = v.filter(sv => sv.lang && sv.lang.toLowerCase().startsWith("en"));
  const list = en.length ? en : v;
  const sorted = [...list].sort((a, b) => (b.localService ? 1 : 0) - (a.localService ? 1 : 0));
  state.browserVoices = sorted.map(sv => ({
    name: formatBrowserVoiceName(sv),
    uri: sv.voiceURI,
    lang: sv.lang,
    local: sv.localService,
  }));
  if (state.screen === "voice") render();
}
loadVoices();
window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

// Shorten long browser voice names (e.g. strip " - English (United States)" suffix)
function formatBrowserVoiceName(sv) {
  let name = sv.name
    .replace(/\s*[-–]\s*[A-Za-z ]+ \([^)]+\)\s*$/, "") // "- English (US)"
    .replace(/\s*\(Natural\)\s*/gi, "")                  // "(Natural)"
    .trim();
  return name || sv.name;
}

// Returns the list shown in the Instant · Browser section:
// Default (auto) + the single best female + single best male the device has
function getBrowserVoiceList() {
  const voices = state.browserVoices;
  // Ranked by quality — first match in each list wins
  const femalePriority = ["Samantha", "Karen", "Moira", "Victoria", "Fiona", "Aria", "Jenny", "Google UK English Female", "Google US English"];
  const malePriority   = ["Alex", "Daniel", "Tom", "Fred", "Guy", "George", "Google UK English Male", "Marcus", "Oliver"];
  const pick = (list) => list.map(n => voices.find(v => v.name.includes(n))).find(Boolean) ?? null;
  const bestFemale = pick(femalePriority);
  const bestMale   = pick(malePriority);
  const curated = [bestFemale, bestMale].filter(Boolean);
  const label = curated.length ? "Default (auto)" : "Default";
  return [{ name: label, uri: null, lang: "" }, ...curated];
}

function getBestSystemVoice() {
  const voices = cachedVoices.length ? cachedVoices : window.speechSynthesis.getVoices();
  // Use explicitly selected browser voice if set
  if (state.browserVoiceURI) {
    const sel = voices.find(v => v.voiceURI === state.browserVoiceURI);
    if (sel) return sel;
  }
  // Auto-pick: prefer high-quality named voices, then any English local voice
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
  // Only ever fall back to an English voice — a non-English utter.voice
  // overrides utter.lang and would read the text with wrong phonetics
  return voices.find(v => v.lang && v.lang.startsWith("en")) || null;
}

function stopTTS() {
  ttsSession = null; // invalidates the generation pump + playback loop
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
  state.whimsyStep = 0;
  state.speakingVerseIdx = -1;
  currentUtterance = null;
  if (whimsyTimer) { clearInterval(whimsyTimer); whimsyTimer = null; }
  render();
}

// ── Continuous playback (browser-voice mode only) ─────────────
// AI-voice mode advances chapters via advanceSessionChapter instead.
async function prefetchNextChapterData() {
  const book = BOOKS[state.bookIdx];
  let nextBookIdx = state.bookIdx;
  let nextChapter = state.chapterIdx + 2; // 1-based
  if (nextChapter > book.chapters) { nextBookIdx++; nextChapter = 1; }
  if (nextBookIdx >= BOOKS.length) return;
  try {
    const verses = await fetchChapter(BOOKS[nextBookIdx].abbr, nextChapter);
    nextChapterDataCache = { bookIdx: nextBookIdx, chapterNum: nextChapter, verses };
  } catch {}
}

async function continueTTS() {
  if (!ttsActive) return;

  const book = BOOKS[state.bookIdx];
  let nextBookIdx = state.bookIdx;
  let nextChapter = state.chapterIdx + 2; // 1-based
  if (nextChapter > book.chapters) { nextBookIdx++; nextChapter = 1; }
  if (nextBookIdx >= BOOKS.length) { stopTTS(); return; }

  // Use prefetched text if available, otherwise fetch now (brief loading flash)
  let verses;
  const hit = nextChapterDataCache;
  if (hit && hit.bookIdx === nextBookIdx && hit.chapterNum === nextChapter) {
    verses = hit.verses;
    nextChapterDataCache = null;
  } else {
    state.loading = true;
    render();
    try { verses = await fetchChapter(BOOKS[nextBookIdx].abbr, nextChapter); }
    catch { stopTTS(); return; }
  }

  if (!ttsActive) return;

  state.bookIdx = nextBookIdx;
  state.chapterIdx = nextChapter - 1;
  state.verses = verses;
  state.totalPages = Math.ceil(verses.length / VERSES_PER_PAGE);
  state.page = 0;
  state.speakingVerseIdx = 0;
  state.loading = false;
  render();

  speakVerse(0);
}

// ── Standard (browser) TTS ────────────────────────────────────
function speakVerse(idx) {
  if (idx >= state.verses.length) { if (ttsActive) continueTTS(); return; }
  if (!ttsActive) return;

  // Keep display page in sync with spoken verse
  const newPage = Math.floor(idx / VERSES_PER_PAGE);
  if (newPage !== state.page) state.page = newPage;

  const verse = state.verses[idx];
  state.speakingVerseIdx = idx;
  state.speaking = true;
  render();

  // Pre-fetch next chapter text when starting the last page
  if (idx === Math.max(0, state.verses.length - VERSES_PER_PAGE)) {
    prefetchNextChapterData();
  }

  const utter = new SpeechSynthesisUtterance(verse.text);
  utter.rate = voicePlaybackRate();
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

// WebGPU can only run Kokoro correctly with fp32 — quantized dtypes (q8/q4/
// fp16) hit broken dequantization kernels in the ONNX WebGPU backend and
// produce garbled noise (hexgrad/kokoro#98). On mobile, WebGPU output is
// corrupted with EVERY dtype, so mobile always uses WASM + q8.
const IS_MOBILE_UA = /Android|iPhone|iPad|Mobi/i.test(navigator.userAgent || "");
const KOKORO_USE_WEBGPU = !IS_MOBILE_UA && !!navigator.gpu;
const KOKORO_SIZE_LABEL = KOKORO_USE_WEBGPU ? "~330 MB" : "~86 MB";

async function loadKokoroModel() {
  if (kokoroInstance) return kokoroInstance;
  // If a load is already in flight, join it instead of starting a second one
  if (_kokoroLoadPromise) return _kokoroLoadPromise;

  state.aiTtsStatus = "loading";
  state.aiTtsProgress = 0;
  render();

  _kokoroLoadPromise = (async () => {
    try {
      const { KokoroTTS } = await import("kokoro-js");

      const progressCb = (info) => {
        if (info.status === "progress" && info.total > 0) {
          state.aiTtsProgress = Math.round((info.loaded / info.total) * 100);
          render();
        }
      };

      // WebGPU dispatches inference to the GPU — main thread stays responsive.
      // CRITICAL: WebGPU requires fp32. q8/q4/fp16 on WebGPU produce garbled
      // noise instead of speech (see comment above loadKokoroModel).
      if (KOKORO_USE_WEBGPU) {
        try {
          kokoroInstance = await KokoroTTS.from_pretrained(
            "onnx-community/Kokoro-82M-v1.0-ONNX",
            { dtype: "fp32", device: "webgpu", progress_callback: progressCb }
          );
        } catch (gpuErr) {
          console.warn("WebGPU init failed, falling back to WASM:", gpuErr);
          kokoroInstance = null;
        }
      }

      // WASM fallback (or primary when no WebGPU)
      if (!kokoroInstance) {
        kokoroInstance = await KokoroTTS.from_pretrained(
          "onnx-community/Kokoro-82M-v1.0-ONNX",
          { dtype: "q8", device: "wasm", progress_callback: progressCb }
        );
      }

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
    } finally {
      _kokoroLoadPromise = null;
    }
  })();

  return _kokoroLoadPromise;
}

// ── Piper (VITS) TTS engine — fast per-voice open-source models ──
let _piperModulePromise = null;
function loadPiperModule() {
  if (!_piperModulePromise) _piperModulePromise = import("@diffusionstudio/vits-web");
  return _piperModulePromise;
}

function piperState(voiceId) {
  return state.piperVoices[voiceId] || { status: "idle", progress: 0 };
}

// Mark already-downloaded Piper models as ready (called once at startup)
async function refreshPiperStored() {
  try {
    const piper = await loadPiperModule();
    const ids = await piper.stored();
    for (const id of ids) state.piperVoices[id] = { status: "ready", progress: 100 };
    if (ids.length && state.screen === "voice") render();
  } catch {}
}

// Download a Piper voice model with progress; resolves true when ready
async function ensurePiperVoice(voiceId) {
  if (piperState(voiceId).status === "ready") return true;
  if (piperState(voiceId).status === "loading") {
    // Another caller is already downloading this voice — wait for it
    while (piperState(voiceId).status === "loading") await new Promise(r => setTimeout(r, 200));
    return piperState(voiceId).status === "ready";
  }
  state.piperVoices[voiceId] = { status: "loading", progress: 0 };
  render();
  try {
    const piper = await loadPiperModule();
    await piper.download(voiceId, (p) => {
      if (p.total > 0) {
        const pct = Math.round((p.loaded / p.total) * 100);
        if (pct !== piperState(voiceId).progress) {
          state.piperVoices[voiceId] = { status: "loading", progress: pct };
          render();
        }
      }
    });
    state.piperVoices[voiceId] = { status: "ready", progress: 100 };
    render();
    return true;
  } catch (err) {
    console.error("Piper download failed:", err);
    state.piperVoices[voiceId] = { status: "error", progress: 0 };
    render();
    return false;
  }
}

// ── IndexedDB audio cache ─────────────────────────────────────

function getAudioDb() {
  if (_audioDb) return _audioDb;
  // Older caches may contain bad audio: v1 had a key/audio race (mismatched
  // voice), v2 stored garbled Kokoro output generated with q8-on-WebGPU.
  // Delete both and start fresh.
  try { indexedDB.deleteDatabase("bible-tts-v1"); } catch {}
  try { indexedDB.deleteDatabase("bible-tts-v2"); } catch {}
  _audioDb = new Promise(resolve => {
    const req = indexedDB.open("bible-tts-v3", 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore("verses");
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = () => { _audioDb = null; resolve(null); };
  });
  return _audioDb;
}

// Coerce any voice id to a valid English Kokoro voice
function englishVoiceId(id) {
  const v = KOKORO_VOICES.find(v => v.id === id);
  return (v && (v.lang === "en-us" || v.lang === "en-gb")) ? id : "af_heart";
}

// The validated AI voice id for the active engine (always English)
function activeAiVoiceId() {
  if (state.aiEngine === "piper") {
    return PIPER_VOICES.some(v => v.id === state.aiVoiceId) ? state.aiVoiceId : PIPER_VOICES[0].id;
  }
  return englishVoiceId(state.aiVoiceId);
}

async function getCachedAudio(key) {
  if (!key) return null;
  try {
    const db = await getAudioDb();
    if (!db) return null;
    return new Promise(resolve => {
      const req = db.transaction("verses").objectStore("verses").get(key);
      req.onsuccess = () => resolve(req.result ?? null);
      req.onerror = () => resolve(null);
    });
  } catch { return null; }
}

// Resolves true once the audio is durably stored, false if storage failed —
// callers use this to decide whether they may drop their in-memory copy.
function setCachedAudio(key, buffer) {
  if (!key || !buffer) return Promise.resolve(false);
  return getAudioDb().then(db => {
    if (!db) return false;
    return new Promise(resolve => {
      try {
        const tx = db.transaction("verses", "readwrite");
        tx.objectStore("verses").put(buffer, key);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
        tx.onabort = () => resolve(false);
      } catch { resolve(false); }
    });
  }).catch(() => false);
}

// ── AI TTS pipeline (session-based, continuous) ──────────────
//
// A "session" is an immutable snapshot of { engine, voice, translation }
// taken the moment the user presses listen. A "chapter ctx" is an immutable
// snapshot of one chapter's verses. All generation reads ONLY these
// snapshots — never live state — so cached audio ALWAYS matches its key,
// and audio for FUTURE chapters can generate while the current one plays.

function isSessionActive(session) {
  return !!session && ttsSession === session;
}

// FIFO generation queue — one WASM/WebGPU generation at a time, in order
function enqueueGen(fn) {
  const run = _genChain.then(fn);
  _genChain = run.then(() => {}, () => {});
  return run;
}

function makeChapterCtx(bookIdx, chapterNum, verses) {
  return { bookIdx, chapterNum, verses, promises: [], nextCtx: null, nextQueued: false };
}

function ctxCacheKey(session, ctx, idx) {
  const v = ctx.verses[idx];
  if (!v) return null;
  const abbr = BOOKS[ctx.bookIdx]?.abbr ?? "?";
  return `${session.translation}|${session.voice}|${abbr}|${ctx.chapterNum}|${v.verse}`;
}

// Generate (or load from cache) audio for one verse of an explicit chapter ctx.
// Resolves to a LIGHTWEIGHT handle { key, bytes? } — bytes are kept in memory
// only if IndexedDB storage failed; otherwise playback re-reads from the cache.
// This keeps queued-ahead chapters (e.g. Psalm 119, 176 verses) from pinning
// tens of MB of WAV data in RAM while the current chapter plays.
async function genVerseAudio(session, ctx, idx) {
  const v = ctx.verses[idx];
  if (!v) return null;
  const text = (v.text || "").trim();
  const key = ctxCacheKey(session, ctx, idx);

  const cached = await getCachedAudio(key);
  if (cached) return { key };

  return enqueueGen(async () => {
    if (!isSessionActive(session)) return null; // user stopped — don't waste compute
    await new Promise(r => setTimeout(r, 15));  // let the UI breathe between generations

    // Re-check cache after queueing (an earlier task may have generated it)
    const cached2 = await getCachedAudio(key);
    if (cached2) return { key };

    try {
      let bytes;
      if (session.engine === "piper") {
        const piper = await loadPiperModule();
        const blob = await piper.predict({ text, voiceId: session.voice });
        bytes = new Uint8Array(await blob.arrayBuffer());
      } else {
        if (!kokoroInstance) return null;
        const audio = await kokoroInstance.generate(text, { voice: session.voice });
        const wav = audio.toWav();
        bytes = wav instanceof Uint8Array ? wav : new Uint8Array(wav);
      }
      const persisted = await setCachedAudio(key, bytes.buffer);
      return persisted ? { key } : { key, bytes };
    } catch (err) { console.error("TTS generation failed:", err); return null; }
  });
}

// Queue generation for every verse of ctx from startIdx onward, in order
function queueChapterGeneration(session, ctx, startIdx = 0) {
  for (let i = startIdx; i < ctx.verses.length; i++) {
    if (!ctx.promises[i]) ctx.promises[i] = genVerseAudio(session, ctx, i);
  }
}

// Fetch with retries — bible-api.com occasionally rate-limits bursts (those
// responses lack CORS headers and surface as fetch failures). A dropped
// lookahead fetch must never be able to end a listening session.
async function fetchChapterRetry(abbr, chapterNum, translation, tries = 3) {
  for (let i = 0; ; i++) {
    try { return await fetchChapter(abbr, chapterNum, translation); }
    catch (e) {
      if (i >= tries - 1) throw e;
      await new Promise(r => setTimeout(r, 1500 * (i + 1)));
    }
  }
}

// Rolling pre-cache: as soon as a chapter starts playing, fetch the NEXT
// chapter's text and queue its audio generation behind the current chapter's.
// Crosses book boundaries; keeps going until the user stops or the Bible ends.
function ensureNextChapterQueued(session, ctx) {
  if (ctx.nextQueued) return;
  ctx.nextQueued = true;
  (async () => {
    let nb = ctx.bookIdx, nc = ctx.chapterNum + 1;
    if (nc > BOOKS[nb].chapters) { nb += 1; nc = 1; }
    if (nb >= BOOKS.length) return; // end of Revelation — nothing after
    try {
      const verses = await fetchChapterRetry(BOOKS[nb].abbr, nc, session.translation);
      if (!isSessionActive(session)) return;
      const next = makeChapterCtx(nb, nc, verses);
      queueChapterGeneration(session, next, 0);
      ctx.nextCtx = next;
    } catch {
      ctx.nextQueued = false; // fetch failed — advance will retry on demand
    }
  })();
}

// ── Whimsy countdown timer ────────────────────────────────────

function startWhimsyTimer() {
  state.whimsyStep = 0;
  if (whimsyTimer) clearInterval(whimsyTimer);
  whimsyTimer = setInterval(() => {
    state.whimsyStep = (state.whimsyStep + 1) % WHIMSY_SEQ.length;
    render();
  }, 500);
}

function stopWhimsyTimer() {
  if (whimsyTimer) { clearInterval(whimsyTimer); whimsyTimer = null; }
  state.whimsyStep = 0;
}

// Play one verse of a chapter ctx, then advance — verse by verse, chapter by
// chapter, book by book — until the user stops or the Bible ends.
async function playCtxVerse(session, ctx, idx) {
  if (!isSessionActive(session)) return;
  if (idx >= ctx.verses.length) { advanceSessionChapter(session, ctx); return; }

  // Keep display page in sync with spoken verse
  const newPage = Math.floor(idx / VERSES_PER_PAGE);
  if (newPage !== state.page) state.page = newPage;

  state.speakingVerseIdx = idx;
  state.speaking = true;
  render();

  // Resolves instantly if pre-generated/cached; waits only if generation is behind
  const handle = await (ctx.promises[idx] || genVerseAudio(session, ctx, idx));

  if (!isSessionActive(session)) return;
  ctx.promises[idx] = null; // release the handle — audio lives in IndexedDB

  // Handle carries bytes only if IndexedDB storage failed; normally re-read here
  let bytes = handle ? handle.bytes : null;
  if (!bytes && handle) {
    const buf = await getCachedAudio(handle.key);
    if (buf) bytes = new Uint8Array(buf);
    if (!isSessionActive(session)) return;
  }

  if (!bytes) {
    // Generation/cache failed for this verse — skip it instead of stalling forever
    playCtxVerse(session, ctx, idx + 1);
    return;
  }

  const blob = new Blob([bytes], { type: "audio/wav" });
  const url = URL.createObjectURL(blob);
  const audioEl = new Audio(url);
  audioEl.playbackRate = voicePlaybackRate();
  try { audioEl.preservesPitch = true; } catch {}
  currentAudioEl = audioEl;

  audioEl.onended = () => {
    URL.revokeObjectURL(url);
    currentAudioEl = null;
    if (isSessionActive(session)) playCtxVerse(session, ctx, idx + 1);
  };
  audioEl.onerror = () => {
    URL.revokeObjectURL(url);
    currentAudioEl = null;
    if (isSessionActive(session)) playCtxVerse(session, ctx, idx + 1);
  };
  audioEl.play().catch(err => {
    URL.revokeObjectURL(url);
    currentAudioEl = null;
    if (err.name === "AbortError") return; // user stopped playback
    console.error("Audio play error:", err);
    // Autoplay/decode failure — advance rather than freeze mid-chapter
    if (isSessionActive(session)) playCtxVerse(session, ctx, idx + 1);
  });
}

// Seamless chapter/book transition: the next ctx's text was fetched and its
// audio queued while the current chapter played, so this is usually instant.
async function advanceSessionChapter(session, ctx) {
  if (!isSessionActive(session)) return;

  let next = ctx.nextCtx;
  if (!next) {
    // Lookahead didn't land (fetch failed or was too slow) — fetch now
    let nb = ctx.bookIdx, nc = ctx.chapterNum + 1;
    if (nc > BOOKS[nb].chapters) { nb += 1; nc = 1; }
    if (nb >= BOOKS.length) { stopTTS(); return; } // finished Revelation
    try {
      const verses = await fetchChapterRetry(BOOKS[nb].abbr, nc, session.translation);
      if (!isSessionActive(session)) return;
      next = makeChapterCtx(nb, nc, verses);
      queueChapterGeneration(session, next, 0);
    } catch { stopTTS(); return; }
  }

  // Swap the reading UI to the new chapter and keep playing without a gap
  state.bookIdx = next.bookIdx;
  state.chapterIdx = next.chapterNum - 1;
  state.verses = next.verses;
  state.totalPages = Math.ceil(next.verses.length / VERSES_PER_PAGE);
  state.page = 0;
  state.speakingVerseIdx = 0;
  state.loading = false;
  render();

  ensureNextChapterQueued(session, next); // keep the rolling lookahead going
  playCtxVerse(session, next, 0);
}

// Entry point: buffer as large an initial block as possible, then start
// playing while the pump keeps generating ahead until the user stops.
async function startAiSession(session, startIdx) {
  // (whimsy + aiPreparing already set synchronously in startTTS before this call)

  // Load whichever engine the session voice belongs to
  const ok = session.engine === "piper"
    ? await ensurePiperVoice(session.voice)
    : !!(await loadKokoroModel());
  if (!ok || !isSessionActive(session)) {
    if (isSessionActive(session)) {
      // Engine failed to load — tear down this session cleanly
      stopWhimsyTimer();
      state.aiPreparing = false;
      state.speaking = false;
      ttsActive = false;
      ttsSession = null;
      render();
    }
    return;
  }

  // Queue the whole current chapter, then immediately start the rolling
  // next-chapter lookahead so generation never idles.
  const ctx = makeChapterCtx(state.bookIdx, state.chapterIdx + 1, state.verses);
  queueChapterGeneration(session, ctx, startIdx);
  ensureNextChapterQueued(session, ctx);

  // Buffer the whole first page (or up to a time cap) before starting, but
  // never start before the first verse itself is ready.
  const blockEnd = Math.min(startIdx + VERSES_PER_PAGE, ctx.verses.length);
  const firstCached = !!(await getCachedAudio(ctxCacheKey(session, ctx, startIdx)));
  const capMs = firstCached ? 500 : 3000;
  await Promise.race([
    Promise.all(ctx.promises.slice(startIdx, blockEnd)),
    new Promise(r => setTimeout(r, capMs)),
  ]);
  await ctx.promises[startIdx];

  if (!isSessionActive(session)) return;
  stopWhimsyTimer();
  state.aiPreparing = false;
  render();

  playCtxVerse(session, ctx, startIdx);
}

function startTTS() {
  if (!state.verses.length) return;
  resetToEnglishVoice(); // never start playback with a non-English voice
  const startIdx = state.page * VERSES_PER_PAGE;
  ttsActive = true;
  state.speaking = true;
  if (state.voiceMode === "ai") {
    // Immutable session snapshot — generation NEVER reads live state
    const session = {
      token: ++_sessionCounter,
      engine: state.aiEngine,
      voice: activeAiVoiceId(),
      translation: state.translation,
    };
    ttsSession = session;
    // Set preparing state SYNCHRONOUSLY here — guaranteed to render before any await
    startWhimsyTimer();
    state.aiPreparing = true;
    render();
    startAiSession(session, startIdx);
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
async function fetchChapter(bookAbbr, chapter, translation) {
  const t = translation || state.translation;
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
      state.listIdx = Math.min(state.listIdx + 1, 4);
      render();
    } else if (key === "ArrowUp") {
      state.listIdx = Math.max(state.listIdx - 1, 0);
      render();
    } else if (key === "Enter" || key === "ArrowRight") {
      if (state.listIdx === 0) { state.listIdx = 0; navigate("books"); }
      else if (state.listIdx === 1) { navigate("search"); }
      else if (state.listIdx === 2) { state.translationIdx = TRANSLATIONS.findIndex(t => t.id === state.translation); navigate("translations"); }
      else if (state.listIdx === 3) { resetToEnglishVoice(); state.voiceIdx = currentVoiceIdx(); navigate("voice"); }
      else { navigate("display"); }
    }
    return;
  }

  if (state.screen === "voice") {
    const maxIdx = voiceCount() - 1;
    if (key === "ArrowDown") {
      state.voiceIdx = Math.min(state.voiceIdx + 1, maxIdx);
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
      applyTranslationChange(TRANSLATIONS[state.translationIdx].id);
    } else if (key === "Escape" || key === "ArrowLeft") {
      navigate("home");
    }
    return;
  }

  if (state.screen === "display") {
    const s = DISPLAY_SETTINGS[state.displayRow];
    if (key === "ArrowDown") {
      state.displayRow = Math.min(state.displayRow + 1, DISPLAY_SETTINGS.length - 1);
      render();
    } else if (key === "ArrowUp") {
      state.displayRow = Math.max(state.displayRow - 1, 0);
      render();
    } else if (key === "ArrowRight") {
      const cur = s.options.indexOf(state[s.key]);
      if (cur < s.options.length - 1) { state[s.key] = s.options[cur + 1]; onDisplaySettingChange(s.key); render(); }
    } else if (key === "ArrowLeft") {
      const cur = s.options.indexOf(state[s.key]);
      if (cur > 0) { state[s.key] = s.options[cur - 1]; onDisplaySettingChange(s.key); render(); }
    } else if (key === "Enter" || key === "Escape") {
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
    if (state.voiceLangFocused) {
      const li = KOKORO_LANGUAGES.findIndex(l => l.id === state.kokoroLang);
      state.kokoroLang = KOKORO_LANGUAGES[(li + dir + KOKORO_LANGUAGES.length) % KOKORO_LANGUAGES.length].id;
      state.voiceIdx = 1;
    } else {
      state.voiceIdx = Math.max(0, Math.min(state.voiceIdx + dir, voiceCount() - 1));
    }
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
  const bvl = getBrowserVoiceList();
  if (idx < bvl.length) {
    state.voiceMode = "standard";
    state.browserVoiceURI = bvl[idx].uri;
  } else {
    const av = aiVoiceList()[idx - bvl.length];
    if (av) {
      state.voiceMode = "ai";
      state.aiEngine = av.engine;
      state.aiVoiceId = av.id;
      if (av.engine === "piper") {
        ensurePiperVoice(av.id); // download the voice model now if needed
      } else if (state.aiTtsStatus === "idle") {
        loadKokoroModel();
      }
    }
  }
  state.voiceLangFocused = false;
  navigate("home");
}

function currentVoiceIdx() {
  const bvl = getBrowserVoiceList();
  if (state.voiceMode === "standard") {
    const bi = bvl.findIndex(v => v.uri === state.browserVoiceURI);
    return bi >= 0 ? bi : 0;
  }
  const avl = aiVoiceList();
  const ki = avl.findIndex(v => v.engine === state.aiEngine && v.id === state.aiVoiceId);
  return ki >= 0 ? bvl.length + ki : bvl.length;
}

// If current AI voice is invalid/non-English for its engine, silently reset
function resetToEnglishVoice() {
  if (state.voiceMode !== "ai") return;
  if (state.aiEngine === "piper") {
    if (!PIPER_VOICES.some(v => v.id === state.aiVoiceId)) state.aiVoiceId = PIPER_VOICES[0].id;
  } else {
    const v = KOKORO_VOICES.find(v => v.id === state.aiVoiceId);
    if (v && v.lang !== "en-us" && v.lang !== "en-gb") {
      state.aiVoiceId = "af_heart";
    }
  }
}

// Stop TTS, switch translation, re-fetch current chapter if one is loaded
function applyTranslationChange(newId) {
  if (state.translation === newId) { navigate("home"); return; }
  stopTTS();
  state.translation = newId;
  navigate("home");
  if (state.verses.length > 0) {
    const book = BOOKS[state.bookIdx];
    const chapterNum = state.chapterIdx + 1;
    fetchChapter(book.abbr, chapterNum).then(verses => {
      state.verses = verses;
      state.totalPages = Math.ceil(verses.length / VERSES_PER_PAGE);
      if (state.screen === "reading") render();
    }).catch(() => {});
  }
}

// ── Screens ────────────────────────────────────────────────────

function renderHome() {
  const activeTrans = TRANSLATIONS.find(t => t.id === state.translation) || TRANSLATIONS[0];
  const activeAV = aiVoiceList().find(v => v.engine === state.aiEngine && v.id === state.aiVoiceId);
  const activeBV = state.browserVoices.find(v => v.uri === state.browserVoiceURI);
  const aiDownloading = state.aiEngine === "piper"
    ? piperState(activeAiVoiceId()).status === "loading" ? piperState(activeAiVoiceId()).progress : null
    : state.aiTtsStatus === "loading" ? state.aiTtsProgress : null;
  const voiceHint = state.voiceMode === "ai"
    ? (aiDownloading !== null ? `${aiDownloading}%` : (activeAV ? activeAV.name : "AI ✦"))
    : (activeBV ? activeBV.name : "Standard");
  const sizeLabel = { xs: "XS", sm: "Small", md: "Medium", lg: "Large", xl: "X-Large" }[state.textSize] || "Medium";
  const fontLabel = { sans: "Sans", serif: "Serif", mono: "Mono" }[state.fontFamily] || "Sans";
  const items = [
    { icon: "✦",  label: "Read",        hint: "Browse Books" },
    { icon: "⌕",  label: "Search",      hint: "Find a verse" },
    { icon: "⇄",  label: "Translation", hint: activeTrans.id.toUpperCase() },
    { icon: "♪",  label: "Voice",       hint: voiceHint },
    { icon: "Aa", label: "Display",     hint: `${sizeLabel} · ${fontLabel}` },
  ];

  return el("div", { class: "screen active" },
    el("div", { class: "home-brand" },
      el("div", { class: "home-cross" }, "✝"),
      el("div", { class: "home-title" }, "Display BIBLE"),
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
              else if (i === 3) { resetToEnglishVoice(); state.voiceIdx = currentVoiceIdx(); navigate("voice"); }
              else { navigate("display"); }
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
      onclick: () => { state.translationIdx = i; applyTranslationChange(t.id); }
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
  const VOICE_ITEM_H = 66; // px per row (min-height 62 + 4 gap)
  const VISIBLE_BROWSER = 3;
  const VISIBLE_KOKORO  = 4;
  const bvl = getBrowserVoiceList();
  const avl = aiVoiceList();
  const activeIdx = currentVoiceIdx();
  const firstKokoroIdx = bvl.length;
  const aiStatus = state.aiTtsStatus;
  const aiSub = {
    idle:    `${KOKORO_SIZE_LABEL} · one-time download`,
    loading: `Downloading… ${state.aiTtsProgress}%`,
    ready:   "Downloaded · on-device",
    error:   "Failed · tap to retry",
  }[aiStatus];

  // ── Browser voices ─────────────────────────────────────────
  const bFocused = state.voiceIdx;
  const bOffset = Math.max(0, Math.min(bFocused - 1, bvl.length - VISIBLE_BROWSER));
  const browserRows = bvl.map((bv, i) => {
    const isActive = i === activeIdx && state.voiceMode === "standard";
    const isFocused = i === state.voiceIdx;
    const subText = i === 0
      ? (bvl.length > 1 ? "Auto-selects best available voice" : "Device built-in · instant")
      : `${bv.lang} · instant`;
    return el("div", {
      class: `voice-option${isFocused ? " focused" : ""}${isActive ? " active-voice" : ""}`,
      onclick: () => { state.voiceIdx = i; selectVoiceIdx(i); },
    },
      el("div", { class: "voice-check" }, isActive ? "✓" : ""),
      el("div", { class: "voice-info" },
        el("div", { class: "voice-name" }, bv.name),
        el("div", { class: "voice-sub" }, subText),
      ),
    );
  });
  const browserContainerH = Math.min(bvl.length, VISIBLE_BROWSER) * VOICE_ITEM_H;
  const browserScroll = el("div", { class: "list-scroll" }, ...browserRows);
  browserScroll.style.transform = `translateY(-${bOffset * VOICE_ITEM_H}px)`;

  // ── AI voices (Kokoro + Piper, one scrolling list) ─────────
  const kFocused = state.voiceIdx - firstKokoroIdx;
  const kOffset = state.voiceIdx >= firstKokoroIdx
    ? Math.max(0, Math.min(kFocused - 1, avl.length - VISIBLE_KOKORO))
    : 0;
  const aiRows = avl.map((v, i) => {
    const itemIdx = firstKokoroIdx + i;
    const isActive = itemIdx === activeIdx && state.voiceMode === "ai";
    const isFocused = itemIdx === state.voiceIdx;

    // Badge + progress: Kokoro shares one model (badge on first Kokoro row);
    // each Piper voice is its own model (badge on every Piper row)
    let badge = null, progressPct = null;
    if (v.engine === "kokoro" && i === 0) {
      badge = aiSub;
      if (aiStatus === "loading") progressPct = state.aiTtsProgress;
    } else if (v.engine === "piper") {
      const ps = piperState(v.id);
      badge = {
        idle:    `~${v.mb} MB · one-time download`,
        loading: `Downloading… ${ps.progress}%`,
        ready:   "Downloaded · on-device",
        error:   "Failed · tap to retry",
      }[ps.status];
      if (ps.status === "loading") progressPct = ps.progress;
    }

    return el("div", {
      class: `voice-option${isFocused ? " focused" : ""}${isActive ? " active-voice" : ""}`,
      onclick: () => { state.voiceIdx = itemIdx; selectVoiceIdx(itemIdx); },
    },
      el("div", { class: "voice-check" }, isActive ? "✓" : ""),
      el("div", { class: "voice-info" },
        el("div", { class: "voice-name" }, v.name),
        el("div", { class: "voice-sub" }, `${v.gender} · ${v.note} · ${v.engine === "piper" ? "Piper" : "Kokoro"}`),
        badge ? el("div", { class: "voice-badge" }, badge) : null,
        progressPct !== null
          ? el("div", { class: "voice-progress-bar" },
              el("div", { class: "voice-progress-fill", style: `width:${progressPct}%` })
            )
          : null,
      ),
    );
  });
  const kokoroScroll = el("div", { class: "list-scroll" }, ...aiRows);
  kokoroScroll.style.transform = `translateY(-${kOffset * VOICE_ITEM_H}px)`;

  return el("div", { class: "screen active" },
    el("div", { class: "screen-header" },
      el("div", { class: "back-btn", onclick: () => navigate("home") }, "‹"),
      el("div", { class: "screen-title" }, "Voice"),
      el("div", { class: "screen-subtitle" }, "Free · On-device"),
    ),
    el("div", { class: "voice-fixed" },
      el("div", { class: "voice-divider" }, "Instant · Browser"),
    ),
    el("div", { class: "list-container", style: `height:${browserContainerH}px; flex:none;` }, browserScroll),
    el("div", { class: "voice-fixed" },
      el("div", { class: "voice-divider" }, "AI Voices · English"),
    ),
    el("div", { class: "list-container" }, kokoroScroll),
    keysHint([
      { keys: ["↑↓"], label: "scroll" },
      { keys: ["←"], label: "back" },
      { keys: ["↵"], label: "select" },
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

  const verseStyle = buildVerseStyle();
  const verseEls = pageVerses.map((v, i) => {
    const absIdx = state.page * VERSES_PER_PAGE + i;
    const isSpeaking = state.speakingVerseIdx === absIdx;
    return el("div", { class: `verse-row${isSpeaking ? " speaking" : ""}` },
      el("span", { class: "verse-num" }, String(v.verse)),
      el("span", { class: "verse-text", style: verseStyle }, v.text.trim()),
    );
  });

  // TTS button icon/label
  const aiLoading = state.voiceMode === "ai" && state.aiTtsStatus === "loading";
  const whimsyPhrase = WHIMSY_SEQ[state.whimsyStep % WHIMSY_SEQ.length];
  const ttsIcon = state.aiPreparing
    ? "·"
    : (state.speaking ? "◼" : (aiLoading ? "⏳" : "♪"));
  const ttsLabel = state.aiPreparing
    ? whimsyPhrase
    : (state.speaking ? "Stop" : (aiLoading ? `${state.aiTtsProgress}%` : "Listen"));

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

// ── Display settings helpers ──────────────────────────────────

function buildVerseStyle() {
  const sizes   = { xs:"11px", sm:"13px", md:"15px", lg:"18px", xl:"22px" };
  const fonts   = { sans:"system-ui,-apple-system,sans-serif", serif:"Georgia,'Times New Roman',serif", mono:"'Courier New',Courier,monospace" };
  const weights = { light:"300", normal:"400", bold:"700" };
  const lhs     = { compact:"1.35", normal:"1.65", relaxed:"2.1" };
  return `font-size:${sizes[state.textSize]||"15px"};font-family:${fonts[state.fontFamily]||"inherit"};font-weight:${weights[state.textWeight]||"300"};line-height:${lhs[state.lineHeight]||"1.65"}`;
}

function renderDisplay() {
  const previewStyle = buildVerseStyle();
  const sampleText = "In the beginning God created the heaven and the earth.";

  return el("div", { class: "screen active" },
    el("div", { class: "screen-header" },
      el("div", { class: "back-btn", onclick: () => navigate("home") }, "‹"),
      el("div", { class: "screen-title" }, "Display"),
      el("div", { class: "screen-subtitle" }, "Text appearance"),
    ),

    el("div", { class: "display-preview" },
      el("div", { class: "verse-row" },
        el("span", { class: "verse-num" }, "1"),
        el("span", { class: "verse-text", style: previewStyle }, sampleText),
      ),
    ),

    el("div", { class: "display-settings" },
      ...DISPLAY_SETTINGS.map((setting, rowIdx) => {
        const cur = setting.options.indexOf(state[setting.key]);
        const focused = state.displayRow === rowIdx;
        return el("div", {
          class: `display-row${focused ? " focused" : ""}`,
          onclick: () => { state.displayRow = rowIdx; render(); },
        },
          el("span", { class: "display-row-label" }, setting.label),
          el("div", { class: "display-row-value" },
            el("span", {
              class: `display-arrow${cur > 0 ? "" : " dim"}`,
              onclick: (e) => { e.stopPropagation(); if (cur > 0) { state[setting.key] = setting.options[cur - 1]; onDisplaySettingChange(setting.key); render(); } },
            }, "‹"),
            el("span", { class: "display-row-current" }, setting.labels[cur]),
            el("span", {
              class: `display-arrow${cur < setting.options.length - 1 ? "" : " dim"}`,
              onclick: (e) => { e.stopPropagation(); if (cur < setting.options.length - 1) { state[setting.key] = setting.options[cur + 1]; onDisplaySettingChange(setting.key); render(); } },
            }, "›"),
          ),
        );
      })
    ),

    keysHint([
      { keys: ["↑↓"], label: "setting" },
      { keys: ["←→"], label: "change" },
      { keys: ["↵"], label: "done" },
    ]),
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
    case "display":      screenEl = renderDisplay(); break;
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
refreshPiperStored(); // mark any previously downloaded Piper voices as ready
