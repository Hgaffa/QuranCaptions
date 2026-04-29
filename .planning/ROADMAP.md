# Roadmap: QuranCaptions

**Milestone:** v1.0 — Launch
**Total phases:** 4
**Requirements coverage:** 31/31 v1 requirements ✓

---

## Phases

- [ ] **Phase 1: Foundation** — Project scaffold, component library, font loading pipeline, Surah 9 Bismillah logic, and Zustand store structure
- [ ] **Phase 2: Working Preview** — Full WYSIWYG preview: verse selection, Arabic text rendering, translation display, and live update loop
- [ ] **Phase 3: Configuration** — All visual controls: fonts, sizes, colors, canvas aspect ratio, and translation toggle
- [ ] **Phase 4: Export** — Transparent PNG export (single + zip), filename conventions, DPI scaling, and batch progress

---

## Phase Summary

| # | Phase | Goal | Requirements | Plans |
|---|-------|------|--------------|-------|
| 1 | Foundation | Infrastructure that every subsequent phase builds on is in place and verified | UI-01, ARAB-04 | 2 plans |
| 2 | Working Preview | A user can select any surah/ayah range and see a correct, live WYSIWYG preview of Arabic text and translation | VERS-01–05, ARAB-01–03, TRAN-01–02, PREV-01–03 | TBD |
| 3 | Configuration | A user can fully configure the visual appearance of the caption and the preview reflects every change in real time | CONF-01–07, UI-02, TRAN-03 | TBD |
| 4 | Export | A user can download any selection as a transparent PNG or zip of PNGs, correctly named, at video-ready resolution | EXPO-01–07 | TBD |

---

## Phase Details

### Phase 1: Foundation
**Goal:** The project scaffolding, component library, Arabic font loading pipeline, and Bismillah edge-case logic are in place — every subsequent phase builds on a verified base with no unresolved infrastructure risks.
**Depends on:** Nothing
**Requirements:** UI-01, ARAB-04
**Success Criteria:**
1. The app renders in the browser with no build errors after running `npm run dev`
2. shadcn/ui components (button, dropdown, slider, color picker) can be rendered and styled correctly
3. The Amiri Quran `.woff2` font is loaded from `/public/fonts/`, base64-embedded at startup, and a `fontsReady` flag becomes `true` after `document.fonts.load()` resolves — the export button is disabled until this flag is true
4. A utility function correctly returns `true` (show Bismillah) for Surah 1 and all surahs except 9, and `false` for Surah 9 (At-Tawbah) — verified by a manual smoke test
5. The Zustand store skeleton is wired up and all anticipated state slices (verse selection, font config, color config, canvas config, export state) are defined with their TypeScript types
**Plans:** 2 plans
Plans:
- [x] 01-01-PLAN.md — Project scaffold, shadcn/ui, Zustand store, TypeScript types, Bismillah utility
- [ ] 01-02-PLAN.md — Font loading pipeline, app shell layout, smoke test verification
**UI hint:** yes

### Phase 2: Working Preview
**Goal:** A user can select any surah and ayah range, see the correct Arabic text (with harakat) and an English translation, and watch the preview update live with every change — the core creator workflow is functional end-to-end.
**Depends on:** Phase 1
**Requirements:** VERS-01, VERS-02, VERS-03, VERS-04, VERS-05, ARAB-01, ARAB-02, ARAB-03, TRAN-01, TRAN-02, PREV-01, PREV-02, PREV-03
**Success Criteria:**
1. User can select any of the 114 surahs from a dropdown showing surah name and number, then select a start and end ayah from dropdowns that only offer valid ayah numbers for that surah — and a count of selected ayahs is displayed
2. Arabic text appears in the preview in Uthmani Hafs script with full harakat (diacritical marks), rendered right-to-left with correct ligature shaping, and each ayah ends with its Arabic ayah number marker
3. The Bismillah header appears automatically above the first ayah for all surahs except Surah 9, and is absent for Surah 9
4. The English translation (Sahih International by default, or The Clear Quran via dropdown) appears below the Arabic text in the preview
5. The preview updates immediately — with no perceptible lag — when the user changes surah, ayah range, or translation selection, and the preview faithfully matches what will be exported
**Plans:** TBD
**UI hint:** yes

### Phase 3: Configuration
**Goal:** A user can fully customize the visual appearance of the caption — Arabic font, translation font, sizes, colors, canvas aspect ratio, and translation visibility — and every change is reflected in the preview instantly.
**Depends on:** Phase 2
**Requirements:** CONF-01, CONF-02, CONF-03, CONF-04, CONF-05, CONF-06, CONF-07, UI-02, TRAN-03
**Success Criteria:**
1. User can select an Arabic font from 2–3 Quran-appropriate options (including Amiri Quran) and a translation font from 2–3 clean Latin options, and the preview re-renders in the chosen font immediately
2. User can adjust Arabic font size and translation font size independently via sliders or preset buttons, and the preview reflects the new sizes without a page reload
3. User can set separate text colors for Arabic and translation text via color pickers, and the preview updates in real time
4. User can select a canvas aspect ratio preset (16:9, 1:1, 9:16) and the preview container reshapes to match, with text reflow handled correctly
5. User can toggle translation visibility on or off, and the preview and export both honor this setting — hiding the translation text and adjusting the layout accordingly
**Plans:** TBD
**UI hint:** yes

### Phase 4: Export
**Goal:** A user can download the configured caption as a transparent PNG (Arabic only, translation only, or combined) for a single ayah or a zip of PNGs for a range, at video-ready resolution, with correctly named files.
**Depends on:** Phase 3
**Requirements:** EXPO-01, EXPO-02, EXPO-03, EXPO-04, EXPO-05, EXPO-06, EXPO-07
**Success Criteria:**
1. User can click an "Export Arabic only" button and receive a PNG of only the Arabic text on a transparent background, named `surah-{num}-ayah-{num}.png`
2. User can click "Export Translation only" and receive a PNG of only the English translation on a transparent background, with the same naming convention
3. User can click "Export Combined" and receive a PNG with both Arabic and translation on a transparent background that exactly matches what is shown in the preview
4. When more than one ayah is selected, export produces a `.zip` file containing one correctly named PNG per ayah, and the UI shows a progress indicator during generation
5. All exported PNGs render at a minimum 2× pixel ratio (preferably 3×), producing crisp, artifact-free text when used as video overlays at 1080p or 4K — verified by importing a test export into a video editor and inspecting at full resolution
**Plans:** TBD

---

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 1/2 | In progress | - |
| 2. Working Preview | 0/? | Not started | - |
| 3. Configuration | 0/? | Not started | - |
| 4. Export | 0/? | Not started | - |

---

*Roadmap created: 2026-04-28*
*Granularity: coarse*
