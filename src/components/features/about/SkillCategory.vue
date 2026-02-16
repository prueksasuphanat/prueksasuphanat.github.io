<template>
  <div class="skills__content">
    <h3 class="skills__title">{{ category.title }}</h3>
    <div class="skills__box">
      <div class="skills__group">
        <div
          v-for="skill in category.skills"
          :key="skill.name"
          class="skills__data"
        >
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 class="skills__name">{{ skill.name }}</h3>
            <h3 v-if="skill.level === 'beginner'" class="skills__name">
              ({{ t('text.Littlebit') }})
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { SkillCategory } from '@/types'

defineProps<{
  category: SkillCategory
}>()

const { t } = useI18n()
</script>
