import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores'
import { storeToRefs } from 'pinia'
import type { SupportedLocale } from '@/constants'

export const useLanguage = () => {
  const { locale: i18nLocale } = useI18n()
  const appStore = useAppStore()
  const { locale, currentLocale } = storeToRefs(appStore)

  const changeLanguage = (newLocale: SupportedLocale) => {
    appStore.setLocale(newLocale)
    i18nLocale.value = newLocale
  }

  const toggleLanguage = () => {
    const newLocale = locale.value === 'en' ? 'th' : 'en'
    changeLanguage(newLocale)
  }

  return {
    locale: computed(() => locale.value),
    currentLocale,
    changeLanguage,
    toggleLanguage,
  }
}
