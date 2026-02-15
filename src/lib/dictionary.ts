import 'server-only';
import { type Locale } from '@/app/i18n';

const dictionaries = {
    en: () => import('@/content/locales/en.json').then((module) => module.default),
    vi: () => import('@/content/locales/vi.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
