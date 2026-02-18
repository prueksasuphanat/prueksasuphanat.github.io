<template>
  <header class="header shadow-sm!" id="header">
    <nav class="nav container">
      <div class="logo__container">
        <a href="#" class="nav__logo">{{ appConfig.author.split(' ')[0] }}</a>
        <LanguageSwitch />
      </div>

      <div class="nav__menu" :class="{ 'show-menu': isMenuOpen }">
        <ul class="nav__list grid">
          <li v-for="item in NAVIGATION_ITEMS" :key="item.id" class="nav__item">
            <a :href="item.href" class="nav__link" @click="closeMenu">
              <i :class="`uil ${item.icon} nav__icon`"></i>
              {{ t(item.labelKey) }}
            </a>
          </li>
        </ul>
        <button class="nav__close" @click="closeMenu" aria-label="Close navigation menu">
          <i class="uil uil-times"></i>
        </button>
      </div>

      <button
        class="nav__toggle"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <i class="uil uil-apps"></i>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'
import { NAVIGATION_ITEMS } from '@/constants'
import { appConfig } from '@/config'
import LanguageSwitch from '@/components/common/LanguageSwitch.vue'

const { t } = useI18n()
const appStore = useAppStore()
const { isMenuOpen } = storeToRefs(appStore)
const { toggleMenu, closeMenu } = appStore
</script>
