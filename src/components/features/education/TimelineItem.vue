<template>
  <div class="timeline__item">
    <div class="timeline__marker">
      <div class="timeline__dot"></div>
      <div v-if="!isLast" class="timeline__line"></div>
    </div>
    
    <div class="timeline__content">
      <div class="timeline__card">
        <div class="timeline__header">
          <h3 class="timeline__title">{{ getTitle() }}</h3>
          <span class="timeline__period">
            <i class="uil uil-calendar-alt"></i>
            {{ item.period.start }} - {{ item.period.end }}
          </span>
        </div>
        
        <p class="timeline__subtitle">{{ getSubtitle() }}</p>
        
        <p v-if="getLocation()" class="timeline__location">
          <i class="uil uil-map-marker"></i>
          {{ getLocation() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { EducationItem, ExperienceItem } from '@/types'

const props = defineProps<{
  item: EducationItem | ExperienceItem
  index: number
  type: 'education' | 'experience'
  isLast: boolean
}>()

const { t } = useI18n()

const getTitle = () => {
  if ('position' in props.item) {
    return props.item.title
  }
  return t(`text.${props.item.title}`)
}

const getSubtitle = () => {
  if ('position' in props.item) {
    return props.item.position
  }
  return t(`text.${props.item.subtitle}`)
}

const getLocation = () => {
  if ('company' in props.item) {
    return props.item.company
  }
  return props.item.location || ''
}
</script>

