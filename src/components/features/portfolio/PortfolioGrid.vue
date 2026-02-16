<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">{{ t('text.Portfolio') }}</h2>
    
    <!-- Filter Buttons -->
    <div class="portfolio__filters">
      <button
        v-for="tag in allTags"
        :key="tag"
        :class="['portfolio__filter-btn', { 'portfolio__filter-active': selectedTag === tag }]"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="portfolio__container container grid">
      <PortfolioCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/portfolio'
import PortfolioCard from './PortfolioCard.vue'

const { t } = useI18n()

const selectedTag = ref<string>('All')

// Get all unique tags from projects
const allTags = computed(() => {
  const tags = new Set<string>(['All'])
  projects.forEach(project => {
    project.technologies.forEach(tech => tags.add(tech))
  })
  return Array.from(tags)
})

// Filter projects based on selected tag
const filteredProjects = computed(() => {
  if (selectedTag.value === 'All') {
    return projects
  }
  return projects.filter(project => 
    project.technologies.includes(selectedTag.value)
  )
})
</script>
