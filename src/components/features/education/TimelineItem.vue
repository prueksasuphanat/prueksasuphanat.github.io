<template>
  <div class="education__data">
    <div v-if="shouldShowLeft">
      <h3 class="education__title">{{ getTitle() }}</h3>
      <span class="education__subtitle">{{ getSubtitle() }}</span>
      <div class="education__calender">
        <i class="uil uil-calendar-alt"></i>
        {{ item.period.start }} - {{ item.period.end }}
      </div>
    </div>

    <div>
      <span class="education__rounder"></span>
      <span class="education__line"></span>
    </div>

    <div v-if="!shouldShowLeft">
      <h3 class="education__title">{{ getTitle() }}</h3>
      <span class="education__subtitle">{{ getSubtitle() }}</span>
      <div class="education__calender">
        <i class="uil uil-calendar-alt"></i>
        {{ item.period.start }} - {{ item.period.end }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { EducationItem, ExperienceItem } from '@/types'

const props = defineProps<{
  item: EducationItem | ExperienceItem
  index: number
  type: 'education' | 'experience'
}>()

const { t } = useI18n()

const shouldShowLeft = computed(() => {
  return props.index % 2 === 0
})

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
</script>
