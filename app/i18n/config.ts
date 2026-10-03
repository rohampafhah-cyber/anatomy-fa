/**
 * Configuration for supported languages.
 */

export type ScriptGroup =
  | "latin"
  | "cyrillic"
  | "devanagari"
  | "arabic"
  | "sc"
  | "jp"
  | "kr";

export type LocaleConfig = {
  code: string;

  /** Native name of the language. */
  nativeName: string;

  /** English name of the language. */
  englishName: string;

  /** Country associated with the locale. */
  country: string;

  /** Text direction. */
  dir: "ltr" | "rtl";

  /** Writing system used by the language. */
  script: ScriptGroup;

  /** BCP-47 / Intl locale tag. */
  intl: string;
};

export const locales: LocaleConfig[] = [
  {
    code: "en",
    nativeName: "English",
    englishName: "English",
    country: "United States",
    dir: "ltr",
    script: "latin",
    intl: "en-US",
  },

  {
    code: "es",
    nativeName: "Español",
    englishName: "Spanish",
    country: "Spain",
    dir: "ltr",
    script: "latin",
    intl: "es-ES",
  },

  {
    code: "hi",
    nativeName: "हिन्दी",
    englishName: "Hindi",
    country: "India",
    dir: "ltr",
    script: "devanagari",
    intl: "hi-IN",
  },

  {
    code: "zh",
    nativeName: "中文",
    englishName: "Chinese",
    country: "China",
    dir: "ltr",
    script: "sc",
    intl: "zh-CN",
  },

  {
    code: "ar",
    nativeName: "العربية",
    englishName: "Arabic",
    country: "Egypt",
    dir: "rtl",
    script: "arabic",
    intl: "ar-EG",
  },

  // Persian
  {
    code: "fa",
    nativeName: "فارسی",
    englishName: "Persian",
    country: "Iran",
    dir: "rtl",
    script: "arabic",
    intl: "fa-IR",
  },

  {
    code: "pt",
    nativeName: "Português",
    englishName: "Portuguese",
    country: "Brazil",
    dir: "ltr",
    script: "latin",
    intl: "pt-BR",
  },

  {
    code: "fr",
    nativeName: "Français",
    englishName: "French",
    country: "France",
    dir: "ltr",
    script: "latin",
    intl: "fr-FR",
  },

  {
    code: "de",
    nativeName: "Deutsch",
    englishName: "German",
    country: "Germany",
    dir: "ltr",
    script: "latin",
    intl: "de-DE",
  },

  {
    code: "ja",
    nativeName: "日本語",
    englishName: "Japanese",
    country: "Japan",
    dir: "ltr",
    script: "jp",
    intl: "ja-JP",
  },

  {
    code: "ru",
    nativeName: "Русский",
    englishName: "Russian",
    country: "Russia",
    dir: "ltr",
    script: "cyrillic",
    intl: "ru-RU",
  },

  {
    code: "id",
    nativeName: "Indonesia",
    englishName: "Indonesian",
    country: "Indonesia",
    dir: "ltr",
    script: "latin",
    intl: "id-ID",
  },

  {
    code: "ko",
    nativeName: "한국어",
    englishName: "Korean",
    country: "South Korea",
    dir: "ltr",
    script: "kr",
    intl: "ko-KR",
  },
];

/**
 * Default language.
 */
export const defaultLocale = "en";

/**
 * List of available locale codes.
 */
export const localeCodes = locales.map(
  (locale) => locale.code
);

/**
 * Get locale configuration.
 */
export function getLocale(code: string): LocaleConfig {
  return (
    locales.find(
      (locale) => locale.code === code
    ) ?? locales[0]
  );
}

/**
 * Check whether a locale is supported.
 */
export function isLocale(code: string): boolean {
  return localeCodes.includes(code);
}