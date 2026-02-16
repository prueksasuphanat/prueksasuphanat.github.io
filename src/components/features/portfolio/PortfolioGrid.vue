<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">{{ t('text.Portfolio') }}</h2>
    
    <div class="portfolio__container container grid">
      <PortfolioCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/portfolio'
import PortfolioCard from './PortfolioCard.vue'

const { t } = useI18n()
</script>
