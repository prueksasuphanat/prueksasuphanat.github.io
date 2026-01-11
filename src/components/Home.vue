<template>
  <div class="home section" id="home">
    <div class="home__container container">
      <div class="home__content grid">
        <div class="home__social">
          <a
            href="http://www.linkedin.com/in/suphanat-panyakom-1483522bb"
            target="_blank"
            class="home__social-icon"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://github.com/prueksasuphanat" target="_blank" class="home__social-icon">
            <i class="uil uil-github-alt"></i>
          </a>
          <a href="https://www.instagram.com/py24.7/" target="_blank" class="home__social-icon">
            <i class="uil uil-instagram"></i>
          </a>
        </div>
        <div class="home__img"></div>
        <div class="home__data">
          <h1 class="home__title">{{ t('text.Hello') }}, {{ t('text.ImPruek') }} 👋</h1>
          <h3 class="home__subtitle">{{ t('text.Suphanat') }} {{ t('text.Panyakom') }}</h3>
          <p class="home__description">
            {{ t('text.ProfileDescription') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
