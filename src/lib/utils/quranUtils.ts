/**
 * Islamic requirement: Surah 9 (At-Tawbah) has NO Bismillah.
 * This is the only surah without one.
 * ALL other surahs (including Surah 1, Al-Fatiha) display Bismillah.
 */
const SURAH_WITHOUT_BISMILLAH = 9;

export function shouldShowBismillah(surahNumber: number): boolean {
  return surahNumber !== SURAH_WITHOUT_BISMILLAH;
}
