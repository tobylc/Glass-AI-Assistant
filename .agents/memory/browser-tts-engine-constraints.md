---
name: Browser TTS engine constraints
description: Which open-source TTS engines can run in this app and why server-based ones are ruled out
---

**Rule:** This app must remain plain static files (Herald Studio upload — no server at runtime). Any TTS engine must run fully in-browser: ElevenLabs-grade OSS models that need a GPU server (XTTS, F5-TTS, Chatterbox, Orpheus, Fish/OpenAudio) are ruled out.

**Why:** Herald Display apps are deployed as a zipped static bundle; there is no backend to proxy inference, and the app must work from the glasses' companion webview.

**How to apply:**
- Viable engines: Kokoro-82M (`kokoro-js`, best quality, one shared ~86 MB model) and Piper (`@diffusionstudio/vits-web`, VITS/ONNX WASM, ~60 MB **per voice**, models stored in OPFS, generation much faster than Kokoro — near-realtime on CPU).
- Both engines share the same playback pipeline and IndexedDB audio cache; voice ids are disjoint across engines so one cache key namespace works (`translation|voice|book|chapter|verse`).
- `vits-web` API: `predict({text, voiceId})` → wav Blob; `download(voiceId, cb)` to pre-download with progress; `stored()` to list downloaded models. Vite bundles its worker + ort wasm automatically — production build verified.
- If asked again for "better/more voices": next options are more Piper voices (each adds a per-voice download) or Kokoro WebGPU acceleration — not server models.
