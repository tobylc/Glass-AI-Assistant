---
name: TTS audio cache poisoning
description: Why cached TTS audio can play in the wrong voice/language even after voice selection is fixed
---

**Rule:** When caching generated audio keyed by voice/text/translation, snapshot ALL key inputs and generation inputs together, synchronously, before any `await`. Never compute the cache key at one time and read live state (e.g. `state.aiVoiceId`) at generation time.

**Why:** In the Bible glasses app, verse-audio promises were created upfront (`verses.map(...)`) with keys computed immediately, but generation was serialized behind a semaphore and read the live voice id when its turn came. A mid-chapter voice switch stored Japanese audio under English-voice cache keys in IndexedDB — the wrong-language audio then replayed "forever" from cache, surviving every subsequent voice-selection fix.

**How to apply:**
- In any generate-and-cache function: capture `voice`, `text`, `translation` into locals first; build the key from those locals; generate from those locals.
- If a poisoned cache may exist in users' browsers, bump the IndexedDB database name (e.g. `-v1` → `-v2`) and `deleteDatabase` the old one — fixing the code alone does not fix clients.
- Include every content-determining dimension in the key (translation was missing too — switching translations replayed wrong-text audio).
- Also guard browser `speechSynthesis`: an assigned `utter.voice` overrides `utter.lang`, so never fall back to `voices[0]` — filter fallbacks to `lang.startsWith("en")`.
