<template>
  <div class="flex flex-col gap-2">
    <a
      v-for="(link, platform) in SOCIAL_LINKS"
      :key="platform"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="home__social-icon"
      :aria-label="link.label"
    >
      <i :class="link.icon"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import { SOCIAL_LINKS } from '@/constants'
</script>
