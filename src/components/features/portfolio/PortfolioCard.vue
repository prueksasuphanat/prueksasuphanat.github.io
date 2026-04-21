<template>
  <div
    class="portfolio__card"
    tabindex="0"
    @click="handleCardClick"
    @keydown.enter="handleCardClick"
    @keydown.space.prevent="handleCardClick"
    @mouseenter="startImageRotation"
    @mouseleave="stopImageRotation"
  >
    <div class="portfolio__img-wrapper">
      <img :src="currentImage" :alt="project.title" loading="lazy" class="portfolio__img" />
      <div v-if="!project.isComplete" class="portfolio__badge">
        {{ t('text.inDevelopment') }}
      </div>
      <div class="portfolio__overlay" :class="{ 'portfolio__overlay--active': isActive }">
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

      <span class="portfolio__year">{{ formatDate(project.year) }}</span>

      <p class="portfolio__description">
        {{ project.description === 'ContentDemo4' ? t('text.ContentDemo4') : project.description }}
      </p>

      <div class="portfolio__tech">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="portfolio__tech-tag cursor-pointer"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Project } from '@/types'
import { formatDate } from '@/utils/helpers/format'

const props = defineProps<{
  project: Project
}>()

const { t } = useI18n()
const isActive = ref(false)
const currentImageIndex = ref(0)
let rotationInterval: number | null = null

// Get current image based on whether it's an array or single string
const currentImage = computed(() => {
  if (Array.isArray(props.project.image)) {
    return props.project.image[currentImageIndex.value]
  }
  return props.project.image
})

// Check if project has multiple images
const hasMultipleImages = computed(() => {
  return Array.isArray(props.project.image) && props.project.image.length > 1
})

const handleCardClick = () => {
  isActive.value = !isActive.value
}

const startImageRotation = () => {
  if (!hasMultipleImages.value) return

  rotationInterval = window.setInterval(() => {
    if (Array.isArray(props.project.image)) {
      currentImageIndex.value = (currentImageIndex.value + 1) % props.project.image.length
      console.log('Image rotated to index:', currentImageIndex.value)
    }
  }, 1000)
}

const stopImageRotation = () => {
  if (rotationInterval) {
    clearInterval(rotationInterval)
    rotationInterval = null
  }
  currentImageIndex.value = 0 // รีเซ็ตกลับไปรูปแรก
}

onUnmounted(() => {
  stopImageRotation()
})
</script>
