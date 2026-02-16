import { createI18n } from 'vue-i18n'
import en from './locales/en'
import th from './locales/th'
import { storage } from '@/utils/storage'
import { DEFAULT_LOCALE, type SupportedLocale } from '@/constants'

const savedLocale = storage.get<SupportedLocale>('lang', DEFAULT_LOCALE)

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    en,
    th,
  },
})

export default i18n
