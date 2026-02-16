<template>
  <section class="skill section">
    <h2 class="section__title">{{ t('text.Skills') }}</h2>
    <div class="skills__container container grid">
      <SkillCategory
        v-for="category in skillsData"
        :key="category.title"
        :category="category"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { skillsData } from '@/data/skills'
import SkillCategory from './SkillCategory.vue'

const { t } = useI18n()
</script>
