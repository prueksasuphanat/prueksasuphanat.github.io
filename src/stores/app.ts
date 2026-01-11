import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const locale = ref(localStorage.getItem('lang') || 'en')
  const isMenuOpen = ref(false)

  // Getters
  const currentLocale = computed(() => locale.value)

  // Actions
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
    // State
    locale,
    isMenuOpen,
    // Getters
    currentLocale,
    // Actions
    setLocale,
    toggleMenu,
    closeMenu,
  }
})
