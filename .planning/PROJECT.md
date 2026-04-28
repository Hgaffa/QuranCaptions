# QuranCaptions

## What This Is

A web tool that lets Muslim content creators enter a surah and ayah number (or range) and instantly download beautiful, transparent-background PNGs of Arabic Quran text and English translation — ready to overlay on videos as captions. Users configure fonts, font size, and text color, see a live preview, and export one PNG per ayah as a zip file.

## Core Value

A Muslim content creator can go from "I want Ayah X" to a polished, video-ready PNG in under 60 seconds — no design software needed.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] User can select a surah and ayah number or ayah range
- [ ] User can choose from a list of 3–5 common English translations
- [ ] User can configure Arabic font, font size, and text color
- [ ] User can configure translation font, font size, and text color
- [ ] Live preview updates in real time as settings change (shows first selected ayah)
- [ ] User can choose download format: Arabic only, translation only, or combined
- [ ] Downloading a range produces a zip file with one PNG per ayah
- [ ] PNGs have transparent backgrounds
- [ ] Canvas size uses presets: 16:9, 1:1, 9:16 (Stories)
- [ ] UI is smooth, beautiful, and intuitive

### Out of Scope

- Text shadow / glow effects — deferred to v2 (keep v1 focused on clean text)
- Background color behind text — deferred to v2 (v1 is transparent-only)
- Non-English translations — deferred to v2 (English only at launch)
- Custom canvas dimensions — deferred to v2 (presets only in v1)
- User accounts / saved preferences — not needed for v1
- Mobile-optimized layout — v1 targets desktop creators

## Context

- No comparable tool currently exists for Muslim content creators wanting plug-and-play transparent Quran caption images
- Target users: YouTubers, TikTok/Instagram creators, podcast editors who overlay Quran recitations
- Arabic text must be right-to-left and rendered correctly (Uthmanic script preferred)
- Quran data will be sourced from a public API (e.g. Quran.com / AlQuran.cloud)
- PNG generation: frontend-first with html2canvas/canvas API; backend only if quality requires it
- Architecture must be clean and extensible — v2 features (shadows, more languages, custom sizes) should slot in without rewrites

## Constraints

- **API**: Must use a reliable public Quran API — no scraping, no manual data files
- **Arabic rendering**: Must support Uthmanic Hafs script; right-to-left layout required
- **Output quality**: PNGs must be crisp at video resolutions (at least 1920×1080 equivalent)
- **Transparency**: All output must support true alpha transparency (not white background)
- **Extensibility**: Code architecture must allow adding new fonts, languages, effects, canvas sizes in v2 without major refactoring

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| English only for v1 | Scope control — the Arabic+English pair covers the majority of the target audience | — Pending |
| Presets over custom canvas sizes | Simpler UX; content creators know 16:9/1:1/9:16 | — Pending |
| Both separate and combined PNG options | Editors have different workflows; flexibility here costs little | — Pending |
| Frontend-first, backend if needed for PNG quality | Static site is simpler to deploy; escalate only if canvas quality is insufficient | — Pending |
| Per-ayah zip download for ranges | Editors need individual files to sequence in their timeline | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-28 after initialization*
