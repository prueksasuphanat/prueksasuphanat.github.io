<template>
  <section class="about section" id="about">
    <h2 class="section__title">{{ t('text.AboutMe') }}</h2>
    <div class="about__container container grid">
      <img
        :src="personalInfo.image"
        :alt="`${personalInfo.name.first} ${personalInfo.name.last}`"
        class="about__img"
        loading="lazy"
      />
      <AboutInfo />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/about'
import AboutInfo from './AboutInfo.vue'

const { t } = useI18n()
</script>
