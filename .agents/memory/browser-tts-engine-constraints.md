---
name: Browser TTS engine constraints
description: Which open-source TTS engines can run in this app and why server-based ones are ruled out
---

**Rule:** This app must remain plain static files (Herald Studio upload — no server at runtime). Any TTS engine must run fully in-browser: ElevenLabs-grade OSS models that need a GPU server (XTTS, F5-TTS, Chatterbox, Orpheus, Fish/OpenAudio) are ruled out.

**Why:** Herald Display apps are deployed as a zipped static bundle; there is no backend to proxy inference, and the app must work from the glasses' companion webview.

**How to apply:**
- Viable engines: Kokoro-82M (`kokoro-js`, best quality, one shared model) and Piper (`@diffusionstudio/vits-web`, VITS/ONNX WASM, ~60 MB **per voice**, models stored in OPFS, generation much faster than Kokoro — near-realtime on CPU).
- **Kokoro dtype/device matrix (critical):** `q8` + `device: "webgpu"` produces garbled noise that sounds like a foreign language (upstream hexgrad/kokoro#98) — WebGPU requires `fp32` (~330 MB download). Android WebGPU is broken with ALL dtypes. Safe combos: desktop WebGPU → fp32; everything else → WASM + q8 (~86 MB). Detect mobile via UA and never hand it WebGPU.
- Garbled generated audio gets persisted into the IndexedDB verse cache and survives engine fixes — any engine-config fix MUST ship with a cache DB name bump (see tts-audio-cache-poisoning.md).
- Both engines share the same playback pipeline and IndexedDB audio cache; voice ids are disjoint across engines so one cache key namespace works (`translation|voice|book|chapter|verse`).
- `vits-web` API: `predict({text, voiceId})` → wav Blob; `download(voiceId, cb)` to pre-download with progress; `stored()` to list downloaded models. Vite bundles its worker + ort wasm automatically — production build verified.
- If asked again for "better/more voices": next options are more Piper voices (each adds a per-voice download) or Kokoro WebGPU acceleration — not server models.
