<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">{{ t('text.Portfolio') }}</h2>

    <!-- Category Filter -->
    <div class="portfolio__category-filters">
      <button
        v-for="category in categoryOptions"
        :key="category.value"
        :class="[
          'portfolio__filter-btn',
          { 'portfolio__filter-active': selectedCategory === category.value },
        ]"
        @click="selectedCategory = category.value"
        :aria-pressed="selectedCategory === category.value"
        :aria-label="t(category.label)"
      >
        {{ t(category.label) }}
      </button>
    </div>

    <!-- Technology Filter -->
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
      <PortfolioCard v-for="project in filteredProjects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/portfolio'
import PortfolioCard from './PortfolioCard.vue'

const { t } = useI18n()

// Category filter state
type CategoryValue = 'all' | 'practice' | 'production'
const selectedCategory = ref<CategoryValue>('all')

// Category options with i18n keys
const categoryOptions = [
  { value: 'all' as const, label: 'portfolio.filter.all' },
  { value: 'practice' as const, label: 'portfolio.filter.practice' },
  { value: 'production' as const, label: 'portfolio.filter.production' },
]

// Technology filter state
const selectedTag = ref<string>('All')

// Get all unique tags from projects
const allTags = computed(() => {
  const tags = new Set<string>(['All'])
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      // Exclude 'Practice' tag as it's now a category
      if (tech !== 'Practice') {
        tags.add(tech)
      }
    })
  })
  return Array.from(tags)
})

// Combined filter logic: apply category filter first, then technology filter, then sort by year
const filteredProjects = computed(() => {
  let result = projects

  // Apply category filter first
  if (selectedCategory.value !== 'all') {
    result = result.filter(project => project.category === selectedCategory.value)
  }

  // Then apply technology filter
  if (selectedTag.value !== 'All') {
    result = result.filter(project => project.technologies.includes(selectedTag.value))
  }

  // Sort by year (latest first)
  return result.sort((a, b) => {
    const yearA = parseInt(a.year)
    const yearB = parseInt(b.year)
    return yearB - yearA
  })
})
</script>
