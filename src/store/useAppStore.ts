import { create, StateCreator } from 'zustand';
import type { AyahData } from '@/types/quran';

// ---- Slice types ----

export interface VerseSelectionSlice {
  surahNumber: number;
  startAyah: number;
  endAyah: number;
  ayahs: AyahData[];
  setSurah: (n: number) => void;
  setStartAyah: (n: number) => void;
  setEndAyah: (n: number) => void;
  setAyahs: (ayahs: AyahData[]) => void;
}

export interface FontConfigSlice {
  arabicFontFamily: string;
  arabicFontSize: number;
  translationFontFamily: string;
  translationFontSize: number;
  setArabicFontFamily: (f: string) => void;
  setArabicFontSize: (s: number) => void;
  setTranslationFontFamily: (f: string) => void;
  setTranslationFontSize: (s: number) => void;
}

export interface ColorConfigSlice {
  arabicTextColor: string;
  translationTextColor: string;
  setArabicTextColor: (c: string) => void;
  setTranslationTextColor: (c: string) => void;
}

export interface CanvasConfigSlice {
  aspectRatio: '16:9' | '1:1' | '9:16';
  showTranslation: boolean;
  selectedTranslation: string;
  setAspectRatio: (r: '16:9' | '1:1' | '9:16') => void;
  setShowTranslation: (v: boolean) => void;
  setSelectedTranslation: (t: string) => void;
}

export interface ExportStateSlice {
  fontsReady: boolean;
  isExporting: boolean;
  exportProgress: number;
  setFontsReady: (v: boolean) => void;
  setIsExporting: (v: boolean) => void;
  setExportProgress: (n: number) => void;
}

// ---- Combined store type ----
type AppStore = VerseSelectionSlice
  & FontConfigSlice
  & ColorConfigSlice
  & CanvasConfigSlice
  & ExportStateSlice;

// ---- Slice creators ----

const createVerseSelectionSlice: StateCreator<AppStore, [], [], VerseSelectionSlice> = (set) => ({
  surahNumber: 1,
  startAyah: 1,
  endAyah: 1,
  ayahs: [],
  setSurah: (n) => set({ surahNumber: n, startAyah: 1, endAyah: 1, ayahs: [] }),
  setStartAyah: (n) => set({ startAyah: n }),
  setEndAyah: (n) => set({ endAyah: n }),
  setAyahs: (ayahs) => set({ ayahs }),
});

const createFontConfigSlice: StateCreator<AppStore, [], [], FontConfigSlice> = (set) => ({
  arabicFontFamily: 'Amiri Quran',
  arabicFontSize: 36,
  translationFontFamily: 'Inter',
  translationFontSize: 18,
  setArabicFontFamily: (f) => set({ arabicFontFamily: f }),
  setArabicFontSize: (s) => set({ arabicFontSize: s }),
  setTranslationFontFamily: (f) => set({ translationFontFamily: f }),
  setTranslationFontSize: (s) => set({ translationFontSize: s }),
});

const createColorConfigSlice: StateCreator<AppStore, [], [], ColorConfigSlice> = (set) => ({
  arabicTextColor: '#FFFFFF',
  translationTextColor: '#FFFFFF',
  setArabicTextColor: (c) => set({ arabicTextColor: c }),
  setTranslationTextColor: (c) => set({ translationTextColor: c }),
});

const createCanvasConfigSlice: StateCreator<AppStore, [], [], CanvasConfigSlice> = (set) => ({
  aspectRatio: '16:9',
  showTranslation: true,
  selectedTranslation: 'eng-sahihinter',
  setAspectRatio: (r) => set({ aspectRatio: r }),
  setShowTranslation: (v) => set({ showTranslation: v }),
  setSelectedTranslation: (t) => set({ selectedTranslation: t }),
});

const createExportStateSlice: StateCreator<AppStore, [], [], ExportStateSlice> = (set) => ({
  fontsReady: false,
  isExporting: false,
  exportProgress: 0,
  setFontsReady: (v) => set({ fontsReady: v }),
  setIsExporting: (v) => set({ isExporting: v }),
  setExportProgress: (n) => set({ exportProgress: n }),
});

// ---- Store ----
export const useAppStore = create<AppStore>()((...a) => ({
  ...createVerseSelectionSlice(...a),
  ...createFontConfigSlice(...a),
  ...createColorConfigSlice(...a),
  ...createCanvasConfigSlice(...a),
  ...createExportStateSlice(...a),
}));
