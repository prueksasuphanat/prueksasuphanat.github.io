<template>
  <section class="education section">
    <h2 class="section__title">
      {{ t('text.Education') }} & {{ t('text.Experience') }}
    </h2>

    <div class="education__container container">
      <div class="education__tabs">
        <button
          class="education__button button--flex education__btn--education"
          :class="{ education__active: activeTab === 'education' }"
          @click="activeTab = 'education'"
          role="tab"
          :aria-selected="activeTab === 'education'"
        >
          <i class="uil uil-graduation-cap education__icon"></i>
          {{ t('text.Education') }}
        </button>

        <button
          class="education__button button--flex education__btn--experience"
          :class="{ education__active: activeTab === 'experience' }"
          @click="activeTab = 'experience'"
          role="tab"
          :aria-selected="activeTab === 'experience'"
        >
          <i class="uil uil-briefcase-alt education__icon"></i>
          {{ t('text.Experience') }}
        </button>
      </div>

      <div class="education__sections">
        <div
          class="education__content education__content--experience"
          :class="{ 'education__content-active': activeTab === 'experience' }"
          role="tabpanel"
        >
          <TimelineItem
            v-for="(item, index) in experienceData"
            :key="item.id"
            :item="item"
            :index="index"
            type="experience"
          />
        </div>

        <div
          class="education__content education__content--education"
          :class="{ 'education__content-active': activeTab === 'education' }"
          role="tabpanel"
        >
          <TimelineItem
            v-for="(item, index) in educationData"
            :key="item.id"
            :item="item"
            :index="index"
            type="education"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { educationData, experienceData } from '@/data/education'
import TimelineItem from './TimelineItem.vue'

const { t } = useI18n()
const activeTab = ref<'education' | 'experience'>('education')
</script>
