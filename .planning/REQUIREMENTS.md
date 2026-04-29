# Requirements: QuranCaptions

**Defined:** 2026-04-28
**Core Value:** A Muslim content creator can go from "I want Ayah X" to a polished, video-ready PNG in under 60 seconds — no design software needed.

## v1 Requirements

### Verse Selection

- [ ] **VERS-01**: User can select a surah from a dropdown showing all 114 surahs by name and number
- [ ] **VERS-02**: User can select a start ayah from a dropdown populated with valid ayahs for the selected surah
- [ ] **VERS-03**: User can select an end ayah from a dropdown (≥ start ayah) to define a range
- [ ] **VERS-04**: User can see how many ayahs are selected in the current range
- [ ] **VERS-05**: Verse data (Arabic + translation) is fetched from the Quran API on surah/ayah selection

### Arabic Text Rendering

- [ ] **ARAB-01**: Arabic text is displayed in Uthmani Hafs script with full harakat (diacritical marks)
- [ ] **ARAB-02**: Arabic text is rendered right-to-left with correct ligature shaping
- [ ] **ARAB-03**: Each ayah ends with its ayah number marker (e.g. ﴿٢٥٥﴾ style)
- [x] **ARAB-04**: Surah Bismillah is auto-shown above the first ayah (skipped for Surah 9, At-Tawbah)

### Translation

- [ ] **TRAN-01**: User can select an English translation from a dropdown: Sahih International (default) or The Clear Quran (Dr. Khattab)
- [ ] **TRAN-02**: Translation text is displayed below the Arabic for each ayah
- [ ] **TRAN-03**: User can toggle translation visibility (show/hide in preview and export)

### Visual Configuration

- [ ] **CONF-01**: User can select an Arabic font from a curated list of 2–3 Quran-appropriate Arabic fonts
- [ ] **CONF-02**: User can select a translation font from a curated list of 2–3 clean Latin fonts
- [ ] **CONF-03**: User can adjust Arabic font size (slider or preset sizes)
- [ ] **CONF-04**: User can adjust translation font size (slider or preset sizes)
- [ ] **CONF-05**: User can set Arabic text color via a color picker
- [ ] **CONF-06**: User can set translation text color via a color picker
- [ ] **CONF-07**: User can select canvas aspect ratio preset: 16:9, 1:1, or 9:16

### UI Component Library

- [x] **UI-01**: All interactive controls (dropdowns, sliders, color pickers, toggles) are built with a high-quality open-source component library (e.g. shadcn/ui, Radix UI)
- [ ] **UI-02**: The interface is clean, modern, and intuitive — no configuration hurdles for new users

### Live Preview

- [ ] **PREV-01**: A real-time preview canvas updates immediately as any setting or verse selection changes
- [ ] **PREV-02**: The preview shows the first selected ayah (Arabic + translation) at the configured settings
- [ ] **PREV-03**: The preview accurately reflects what will be exported (WYSIWYG)

### Export

- [ ] **EXPO-01**: User can download the current ayah as an Arabic-only transparent PNG
- [ ] **EXPO-02**: User can download the current ayah as a translation-only transparent PNG
- [ ] **EXPO-03**: User can download the current ayah as a combined (Arabic + translation) transparent PNG
- [ ] **EXPO-04**: When a range of >1 ayah is selected, export produces a zip file with one PNG per ayah
- [ ] **EXPO-05**: Exported PNGs have true alpha transparency (no white/colored background unless configured)
- [ ] **EXPO-06**: Exported PNG filenames follow the format `surah-{num}-ayah-{num}.png`
- [ ] **EXPO-07**: Export resolution is high-quality (at minimum 2× pixel ratio for crisp video use)

## v2 Requirements

### Typography Enhancements

- **TYPV2-01**: Text shadow / glow effect for readability on dark video backgrounds
- **TYPV2-02**: Optional solid or semi-transparent background color behind text
- **TYPV2-03**: Decorative Bismillah header image option
- **TYPV2-04**: Ornamental verse separator dividers

### Translation Expansion

- **TRANV2-01**: Yusuf Ali translation
- **TRANV2-02**: Pickthall translation
- **TRANV2-03**: Urdu translation support
- **TRANV2-04**: French and Turkish translations

### Layout Options

- **LAYV2-01**: Arabic-only export mode (no translation text)
- **LAYV2-02**: Word-by-word translation mode

### Export Quality

- **EXPV2-01**: User-selectable export DPI/scale (Draft 1×, Standard 2×, High 3×)
- **EXPV2-02**: WebP export option
- **EXPV2-03**: Custom canvas dimensions (width × height)

### Creator Workflow

- **WRKV2-01**: Save configuration presets to localStorage
- **WRKV2-02**: URL-shareable state (config encoded in query params)
- **WRKV2-03**: Recent surah/ayah history (last 5 used)

## Out of Scope

| Feature | Reason |
|---------|--------|
| User accounts / authentication | No server-side persistence needed for v1 |
| Mobile-optimized layout | Desktop-first for content creators; mobile v2+ |
| Backend server rendering | Frontend-first; add only if html-to-image quality is insufficient |
| Video export (MP4) | Out of scope — this tool produces stills, not video |
| Audio recitation playback | Scope creep; separate concern |
| Word-by-word translation | High complexity; deferred to v2 |
| Custom canvas dimensions | Presets cover the main use cases in v1 |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| UI-01 | Phase 1 | Complete (01-01) |
| ARAB-04 | Phase 1 | Complete (01-01) |
| VERS-01 | Phase 2 | Pending |
| VERS-02 | Phase 2 | Pending |
| VERS-03 | Phase 2 | Pending |
| VERS-04 | Phase 2 | Pending |
| VERS-05 | Phase 2 | Pending |
| ARAB-01 | Phase 2 | Pending |
| ARAB-02 | Phase 2 | Pending |
| ARAB-03 | Phase 2 | Pending |
| TRAN-01 | Phase 2 | Pending |
| TRAN-02 | Phase 2 | Pending |
| PREV-01 | Phase 2 | Pending |
| PREV-02 | Phase 2 | Pending |
| PREV-03 | Phase 2 | Pending |
| CONF-01 | Phase 3 | Pending |
| CONF-02 | Phase 3 | Pending |
| CONF-03 | Phase 3 | Pending |
| CONF-04 | Phase 3 | Pending |
| CONF-05 | Phase 3 | Pending |
| CONF-06 | Phase 3 | Pending |
| CONF-07 | Phase 3 | Pending |
| UI-02 | Phase 3 | Pending |
| TRAN-03 | Phase 3 | Pending |
| EXPO-01 | Phase 4 | Pending |
| EXPO-02 | Phase 4 | Pending |
| EXPO-03 | Phase 4 | Pending |
| EXPO-04 | Phase 4 | Pending |
| EXPO-05 | Phase 4 | Pending |
| EXPO-06 | Phase 4 | Pending |
| EXPO-07 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 31 total
- Mapped to phases: 31 ✓
- Unmapped: 0 ✓

---

*Requirements defined: 2026-04-28*
*Last updated: 2026-04-28 after roadmap creation — traceability populated*
