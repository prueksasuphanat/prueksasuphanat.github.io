<template>
  <section class="home section" id="home">
    <div class="home__container container">
      <div class="home__content grid">
        <div class="home__social">
          <SocialLinks />
        </div>

        <div class="home__img"></div>

        <div class="home__data">
          <h1 class="home__title">
            {{ t('text.Hello') }}, {{ t('text.ImPruek') }} 👋
          </h1>
          <h3 class="home__subtitle">
            {{ personalInfo.name.first }} {{ personalInfo.name.last }}
          </h3>
          <p class="home__description">
            {{ t('text.ProfileDescription') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/about'
import SocialLinks from '@/components/common/SocialLinks.vue'

const { t } = useI18n()
</script>
