/**
 * Quran API client — fetches verse data from fawazahmed0/quran-api via jsDelivr CDN.
 * Stub in Phase 1. Fleshed out in Phase 2.
 */

const BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1';

export const EDITIONS = {
  arabic: 'ara-quranuthmanihaf',
  translations: {
    'eng-sahihinter': 'Sahih International',
    'eng-clearquran': 'The Clear Quran (Dr. Khattab)',
  },
} as const;

export type TranslationEdition = keyof typeof EDITIONS.translations;

// Suppress unused variable warning for stub — BASE_URL will be used in Phase 2
export { BASE_URL };
