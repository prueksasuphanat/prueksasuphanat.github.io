<template>
  <div class="portfolio__card">
    <div class="portfolio__img-wrapper">
      <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        class="portfolio__img"
      />
      <div class="portfolio__overlay">
        <div class="portfolio__links">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="portfolio__link-btn"
            aria-label="View code on GitHub"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="portfolio__link-btn"
            aria-label="View live demo"
          >
            <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="portfolio__content">
      <h3 class="portfolio__title">
        {{ project.title }}
      </h3>
      
      <span class="portfolio__year">{{ t(`text.${project.year}`) }}</span>

      <p class="portfolio__description">
        {{
          project.description === 'ContentDemo4'
            ? t('text.ContentDemo4')
            : project.description
        }}
      </p>

      <div class="portfolio__tech">
        <span 
          v-for="tech in project.technologies" 
          :key="tech"
          class="portfolio__tech-tag"
        >
          {{ tech }}
        </span>
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
