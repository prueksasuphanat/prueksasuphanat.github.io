import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const locale = ref(localStorage.getItem('lang') || 'en')
  const isMenuOpen = ref(false)

  const currentLocale = computed(() => locale.value)

  const setLocale = (newLocale: string) => {
    locale.value = newLocale
    localStorage.setItem('lang', newLocale)
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  return {
    locale,
    isMenuOpen,
    currentLocale,
    setLocale,
    toggleMenu,
    closeMenu,
  }
})
