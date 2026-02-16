import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { storage } from '@/utils/storage'
import { DEFAULT_LOCALE, type SupportedLocale } from '@/constants'

export const useAppStore = defineStore('app', () => {
  // State
  const locale = ref<SupportedLocale>(
    storage.get('lang', DEFAULT_LOCALE) as SupportedLocale
  )
  const isMenuOpen = ref(false)

  // Getters
  const currentLocale = computed(() => locale.value)

  // Actions
  const setLocale = (newLocale: SupportedLocale) => {
    locale.value = newLocale
    storage.set('lang', newLocale)
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const openMenu = () => {
    isMenuOpen.value = true
  }

  return {
    // State
    locale,
    isMenuOpen,
    // Getters
    currentLocale,
    // Actions
    setLocale,
    toggleMenu,
    closeMenu,
    openMenu,
  }
})
