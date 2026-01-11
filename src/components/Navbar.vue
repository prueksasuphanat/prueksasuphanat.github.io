<template>
  <header class="header" id="header">
    <nav class="nav container">
      <div class="logo__container">
        <a href="#" class="nav__logo">Pruek</a>
        <div class="checkbox_item">
          <span class="th">TH</span>
          <label class="checkbox_wrap">
            <input
              class="toggle"
              type="checkbox"
              :checked="selectedLanguage === 'en'"
              @change="changeLanguage"
            />
            <span class="checkbox_mark"></span>
          </label>
          <span class="en">EN</span>
        </div>
      </div>

      <div class="nav__menu" :class="{ 'show-menu': isMenuOpen }">
        <ul class="nav__list grid">
          <li class="nav__item">
            <a href="#home" class="nav__link" @click="closeMenu">
              <i class="uil uil-estate nav__icon"></i>{{ t('text.Home') }}
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link" @click="closeMenu">
              <i class="uil uil-user nav__icon"></i>{{ t('text.About') }}
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link" @click="closeMenu">
              <i class="uil uil-scenery nav__icon"></i>{{ t('text.Portfolio') }}
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link" @click="closeMenu">
              <i class="uil uil-message nav__icon"></i>{{ t('text.Contact') }}
            </a>
          </li>
        </ul>
        <i class="uil uil-times nav__close" @click="closeMenu"></i>
      </div>
      <div class="nav__toggle" @click="toggleMenu">
        <i class="uil uil-apps"></i>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const selectedLanguage = ref(localStorage.getItem('lang') || 'en')
const isMenuOpen = ref(false)

const changeLanguage = () => {
  selectedLanguage.value = selectedLanguage.value === 'en' ? 'th' : 'en'
  localStorage.setItem('lang', selectedLanguage.value)
  locale.value = selectedLanguage.value
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
