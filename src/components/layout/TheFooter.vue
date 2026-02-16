<template>
  <footer class="footer">
    <div class="footer__container container">
      <h1 class="footer__title">{{ appConfig.author.split(' ')[0] }}</h1>
      
      <ul class="footer__list">
        <li v-for="item in NAVIGATION_ITEMS" :key="item.id">
          <a
            :href="item.href"
            class="footer__link"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ t(item.labelKey) }}
          </a>
        </li>
      </ul>

      <div class="footer__social">
        <a
          v-for="(link, platform) in SOCIAL_LINKS"
          :key="platform"
          class="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
          :href="link.url"
          :aria-label="link.label"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
    </div>

    <button
      class="scrollup"
      :class="{ 'show-scroll': showScroll }"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <i class="uil uil-arrow-up scrollup__icon"></i>
    </button>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScroll } from '@/composables'
import { scrollToSection } from '@/utils/scroll'
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/constants'
import { appConfig } from '@/config'

const { t } = useI18n()
const { showScroll, scrollToTop } = useScroll()
</script>
