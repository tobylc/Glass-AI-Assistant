# Bible · Herald Display

A Bible reading app for the Meta Ray-Ban Display glasses, built on the Herald platform. Displays KJV passages on the transparent HUD lens with text-to-speech audio and D-pad navigation.

## Run & Operate

- `pnpm --filter @workspace/bible-glass run dev` — run the Bible Glass app (Vite dev server)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: Vanilla JS + CSS (no build step required — Herald compatible)
- API: Express 5
- Bible data: [bible-api.com](https://bible-api.com) — free, no auth, KJV
- TTS: Web Speech API (built-in browser)
- Build/preview: Vite

## Where things live

- `artifacts/bible-glass/src/glass-app.js` — main app logic (vanilla JS, Herald-compatible)
- `artifacts/bible-glass/src/glass-styles.css` — Herald Display styles (600×600, dark theme)
- `artifacts/bible-glass/index.html` — entry point

## Architecture decisions

- **Vanilla JS, no framework** — Herald requires plain HTML/CSS/JS static files with no build step. The Vite scaffold is only used for local dev preview; the same files can be uploaded directly to Herald Studio.
- **Dark background** — Meta Ray-Ban Display is additive: dark pixels are transparent. Black background = text floats on the real world.
- **600×600 fixed viewport** — matches the Display resolution exactly.
- **D-pad = arrow keys** — the glasses D-pad maps to keyboard arrow keys + Enter/Escape.
- **bible-api.com for Bible text** — free, public domain KJV, no API key needed.

## Product

- Browse all 66 Bible books → chapters → read passage on the glasses display
- Listen to any passage with text-to-speech (Space bar or ♪ button)
- Search by verse reference (e.g. "John 3:16")
- Navigate with D-pad: ↑↓ scroll, → select, ← back, Space = TTS toggle
- Paginated reading (4 verses per "page") fits the 600×600 HUD lens

## Deploying to Herald

1. Build the app: `pnpm --filter @workspace/bible-glass run build`
2. The output is in `artifacts/bible-glass/dist/public/`
3. Zip the contents and upload to [herald.ascents.gg/studio](https://herald.ascents.gg/studio)
4. Pair your glasses once in the Herald companion app and the app is live on the Display

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `bible-api.com` has CORS enabled for browser requests — no proxy needed.
- The Vite config requires `PORT` and `BASE_PATH` env vars (set automatically by the workflow).
- The old `src/main.tsx` / `src/App.tsx` React files are unused scaffolding — they don't affect the running app but can be deleted.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Herald developer docs: [herald.ascents.gg/developers](https://herald.ascents.gg/developers)
