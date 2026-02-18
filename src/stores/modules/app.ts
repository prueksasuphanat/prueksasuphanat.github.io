import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { storage } from '@/utils/storage'
import { DEFAULT_LOCALE, type SupportedLocale } from '@/constants'
import { getRepoData } from '@/composables'
import dayjs from 'dayjs'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import 'dayjs/locale/th'

dayjs.extend(buddhistEra)

export const useAppStore = defineStore('app', () => {
  // State
  const locale = ref<SupportedLocale>(storage.get('lang', DEFAULT_LOCALE) as SupportedLocale)
  const isMenuOpen = ref(false)
  const repoUpdatedAt = ref<string>('')

  // Getters
  const currentLocale = computed(() => locale.value)

  const updatedAt = computed(() => {
    if (!repoUpdatedAt.value) return '-'

    const isThaiLocale = locale.value === 'th'
    const date = dayjs(repoUpdatedAt.value)

    return isThaiLocale
      ? date.locale('th').format('DD-MM-BBBB HH:mm')
      : date.format('DD-MM-YYYY HH:mm')
  })

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

  const fetchRepoData = async () => {
    const data = await getRepoData()
    if (data?.updated_at) {
      repoUpdatedAt.value = data.updated_at
    }
  }

  return {
    // State
    locale,
    isMenuOpen,
    // Getters
    currentLocale,
    updatedAt,
    // Actions
    setLocale,
    toggleMenu,
    closeMenu,
    openMenu,
    fetchRepoData,
  }
})
