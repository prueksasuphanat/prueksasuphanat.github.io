<template>
  <section class="about section" id="about">
    <h2 class="section__title">{{ t('text.AboutMe') }}</h2>
    <div class="about__container container grid">
      <img src="/images/IMG_7121.jpg" alt="About" class="about__img" />
      <AboutInfo />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AboutInfo from './AboutInfo.vue'

const { t } = useI18n()
</script>
