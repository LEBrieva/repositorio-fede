import es from './es.json';
import en from './en.json';

const translations = { es, en } as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale = 'es') {
  return translations[locale];
}

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}
