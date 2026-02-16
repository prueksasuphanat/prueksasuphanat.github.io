<template>
  <div class="portfolio__container container grid">
    <div class="portfolio__img">
      <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        width="600"
        height="400"
      />
    </div>

    <div class="portfolio__content">
      <h3 class="portfolio__title">
        {{ project.title }} ({{ t(`text.${project.year}`) }})
      </h3>

      <p class="portfolio__description">
        {{
          project.description === 'ContentDemo4'
            ? t('text.ContentDemo4')
            : project.description
        }}
      </p>

      <div class="portfolio__subtitle">
        <p v-for="tech in project.technologies" :key="tech">{{ tech }}</p>
      </div>

      <div class="portfolio__link">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__button portfolio__button"
          aria-label="View code on GitHub"
        >
          <i class="bx bxl-github portfolio__icon"></i>
          Code
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>

        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__button portfolio__button"
          aria-label="View live demo"
        >
          <i class="bx bx-code-alt portfolio__icon"></i>
          Demo
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Project } from '@/types'

defineProps<{
  project: Project
}>()

const { t } = useI18n()
</script>
