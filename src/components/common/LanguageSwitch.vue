<template>
  <div class="flex items-center gap-2">
    <span 
      class="text-sm font-medium transition-colors"
      :class="locale === 'th' ? 'text-title-color' : 'text-text-color'"
    >
      TH
    </span>
    
    <button
      @click="toggleLanguage"
      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-title-color focus:ring-offset-2"
      :class="locale === 'en' ? 'bg-title-color' : 'bg-gray-300'"
      role="switch"
      :aria-checked="locale === 'en'"
      aria-label="Toggle language"
    >
      <span
        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
        :class="locale === 'en' ? 'translate-x-6' : 'translate-x-1'"
      />
    </button>
    
    <span 
      class="text-sm font-medium transition-colors"
      :class="locale === 'en' ? 'text-title-color' : 'text-text-color'"
    >
      EN
    </span>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables'

const { locale, toggleLanguage } = useLanguage()
</script>
