<template>
  <div class="checkbox_item">
    <span class="th">TH</span>
    <label class="checkbox_wrap">
      <input
        class="toggle"
        type="checkbox"
        :checked="locale === 'en'"
        @change="toggleLanguage"
        aria-label="Toggle language"
      />
      <span class="checkbox_mark"></span>
    </label>
    <span class="en">EN</span>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables'

const { locale, toggleLanguage } = useLanguage()
</script>
