<!-- GSD:project-start source:PROJECT.md -->
## Project

**QuranCaptions**

A web tool that lets Muslim content creators enter a surah and ayah number (or range) and instantly download beautiful, transparent-background PNGs of Arabic Quran text and English translation — ready to overlay on videos as captions. Users configure fonts, font size, and text color, see a live preview, and export one PNG per ayah as a zip file.

**Core Value:** A Muslim content creator can go from "I want Ayah X" to a polished, video-ready PNG in under 60 seconds — no design software needed.

### Constraints

- **API**: Must use a reliable public Quran API — no scraping, no manual data files
- **Arabic rendering**: Must support Uthmanic Hafs script; right-to-left layout required
- **Output quality**: PNGs must be crisp at video resolutions (at least 1920×1080 equivalent)
- **Transparency**: All output must support true alpha transparency (not white background)
- **Extensibility**: Code architecture must allow adding new fonts, languages, effects, canvas sizes in v2 without major refactoring
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## 1. Quran API
### Primary Recommendation: fawazahmed0/quran-api via jsDelivr CDN
| Edition Identifier | Content |
|---|---|
| `ara-quranuthmanihaf` | Arabic, Uthmani Hafs script |
| `eng-sahihinter` | Sahih International English |
| `eng-clearquran` | The Clear Quran (Khattab) |
| `eng-yusufali` | Yusuf Ali |
| `eng-pickthall` | Marmaduke Pickthall |
| `eng-hilalikhann` | Hilali-Khan |
### Secondary Option: AlQuran.cloud REST API (api.alquran.cloud/v1)
### Do NOT Use: Quran Foundation API (api.quran.com/api/v4)
## 2. Arabic Quran Fonts
### Primary Recommendation: Amiri Quran (Google Fonts)
| Property | Value |
|---|---|
| License | SIL OFL 1.1 (open, free, commercial use allowed) |
| CDN | Google Fonts — `https://fonts.google.com/specimen/Amiri+Quran` |
| Format | Variable-weight, web-optimized woff2 |
| Ligature support | Full Quranic ligatures, harakat (diacritics) |
| Canvas-safe | Yes, when loaded via FontFace API and base64-embedded |
### Secondary Option: Noto Naskh Arabic (Google Fonts)
| Property | Value |
|---|---|
| License | SIL OFL 1.1 |
| CDN | Google Fonts — `https://fonts.google.com/noto/specimen/Noto+Naskh+Arabic` |
| Weights | Regular, Medium, SemiBold, Bold (variable font) |
| Ligature support | Good general Arabic support; less specialized for Quranic diacritics |
### Tertiary Option: KFGQPC HAFS Uthmanic Script
| Property | Value |
|---|---|
| License | Proprietary — free to use/copy/distribute but NOT modify/sell/reverse-engineer. Copyright: King Fahd Glorious Quran Printing Complex |
| CDN | NOT on Google Fonts. Available via CDNFonts, CufonFonts, or self-hosted |
| Authenticity | Highest — this is the official Mushaf font |
## 3. In-Browser Transparent PNG Generation
### Recommendation: `html-to-image` with base64-embedded fonts
- Actively maintained fork of dom-to-image with improved CSS support (flexbox, grid)
- Better web font handling than html2canvas — explicitly designed to embed fonts as base64 data URIs during serialization
- Supports `toPng()` with transparent background natively (set background to `transparent` in CSS)
- Simpler API than html2canvas for this use case
| Library | Status | Arabic Rendering | Verdict |
|---|---|---|---|
| `html2canvas` v1.4.1 | Active, 2.6M weekly downloads | Known RTL/ligature bugs (GitHub issues #686, #948, #2432) | Do NOT use for Arabic |
| `dom-to-image-more` v3.x | Maintained fork of dom-to-image | Similar foreignObject approach but less font-handling refinement | Fallback only |
| Canvas 2D API directly | No package needed | Requires manual text layout; `ctx.direction = 'rtl'` exists but ligature support is browser-inconsistent | Viable for v2 with opentype.js |
| Puppeteer (backend) | Requires Node.js server | Perfect rendering — actual Chrome engine | Use only if backend is added in v2 |
## 4. Frontend Framework
### Recommendation: React 19 + Vite + TypeScript + Tailwind CSS v4 + Zustand
- Large ecosystem, best TypeScript support, widest hiring pool
- New `use()` hook simplifies async data fetching
- React Compiler reduces need for manual `useMemo`/`useCallback`
- `npm create vite@latest my-app -- --template react-ts`
- `npm install zustand`
- Vue 3: Excellent, but smaller ecosystem for canvas+image tooling libs
- Svelte 5: Smaller bundle but niche ecosystem; fewer Arabic-rendering community examples exist; React has more relevant prior art for canvas image generators
- Vanilla JS: Viable but makes state management for live preview painful without a framework
## 5. Zip Download
### Recommendation: JSZip v3.10.1 + file-saver v2.x
- Version: 3.10.1 (last published ~2022, but stable and widely used — 6,400+ dependents) [VERIFIED: npmjs.com/package/jszip]
- No active development concerns for this stable feature set
- `npm install jszip`
- Handles the browser's `saveAs()` cross-browser, especially for Safari
- `npm install file-saver`
- `npm install --save-dev @types/file-saver`
## 6. What NOT to Use and Why
| Library/Approach | Reason to Avoid |
|---|---|
| `html2canvas` | Documented Arabic RTL/ligature rendering bugs (GitHub issues #686, #948, #2432); not fixed in v1.4.1 |
| Quran Foundation API v4 | Requires OAuth2 auth — cannot safely use from a pure frontend app |
| KFGQPC font from Google Fonts | Not available on Google Fonts; requires self-hosting with CORS setup |
| `document.fonts.ready` alone before canvas capture | Not sufficient — fonts must be explicitly awaited via `FontFace.load()` |
| `canvas.toDataURL()` with cross-origin fonts (not embedded) | Canvas becomes tainted; `toDataURL()` throws SecurityError |
| Puppeteer in v1 | Requires a backend server; out of scope for frontend-first v1 |
| Create React App | Deprecated; Vite is the standard in 2025 |
| `StreamSaver.js` for zip | Overkill; JSZip handles the file sizes expected (even 100 PNGs) |
## Installation Summary
# Scaffold
# Styling
# Image export
# Zip download
# State management
# No Quran API package needed — fetch directly from jsDelivr CDN
## Sources
- [fawazahmed0/quran-api GitHub](https://github.com/fawazahmed0/quran-api) — API structure, edition list [VERIFIED]
- [AlQuran.cloud API docs](https://alquran.cloud/api) — REST endpoint structure [VERIFIED]
- [Quran Foundation API docs](https://api-docs.quran.foundation/docs/quickstart/) — OAuth2 requirement confirmed [VERIFIED]
- [Amiri Quran on Google Fonts](https://fonts.google.com/specimen/Amiri+Quran) — License SIL OFL 1.1 [VERIFIED]
- [Noto Naskh Arabic on Google Fonts](https://fonts.google.com/noto/specimen/Noto+Naskh+Arabic) — License SIL OFL 1.1 [VERIFIED]
- [KFGQPC font on CDNFonts](https://www.cdnfonts.com/kfgqpc-hafs-uthmanic-script.font) — License terms [VERIFIED]
- [html-to-image on npm](https://www.npmjs.com/package/html-to-image) — Version 1.11.13 [VERIFIED]
- [JSZip on npm](https://www.npmjs.com/package/jszip) — Version 3.10.1 [VERIFIED]
- [portalzine.de comparison 2025](https://portalzine.de/best-html-to-canvas-solutions-in-2025/) — html-to-image vs html2canvas vs Puppeteer [VERIFIED via fetch]
- [React 19 release](https://react.dev/blog/2024/12/05/react-19) — Stable December 2024 [VERIFIED]
- [Tailwind CSS v4.0 release](https://tailwindcss.com/blog/tailwindcss-v4) — January 22, 2025 [VERIFIED]
- [canvas-hidipi web.dev](https://web.dev/articles/canvas-hidipi) — devicePixelRatio scaling [VERIFIED]
- [Quran Foundation font rendering docs](https://api-docs.quran.foundation/docs/tutorials/fonts/font-rendering/) — Font loading strategy [VERIFIED via fetch]
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
