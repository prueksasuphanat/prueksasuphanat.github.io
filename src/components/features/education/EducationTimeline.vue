<template>
  <section class="education section">
    <h2 class="section__title">
      {{ t('text.Education') }} & {{ t('text.Experience') }}
    </h2>

    <div class="education__container container">
      <div class="education__tabs">
        <button
          class="education__button button--flex"
          :class="{ education__active: activeTab === 'education' }"
          @click="activeTab = 'education'"
          role="tab"
          :aria-selected="activeTab === 'education'"
        >
          <i class="uil uil-graduation-cap education__icon"></i>
          {{ t('text.Education') }}
        </button>

        <button
          class="education__button button--flex"
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
          class="education__content"
          :class="{ 'education__content-active': activeTab === 'experience' }"
          role="tabpanel"
        >
          <Timeline :value="experienceData" align="alternate" class="customized-timeline">
            <template #content="slotProps">
              <div class="timeline__card">
                <h3 class="timeline__title">{{ slotProps.item.title }}</h3>
                <p class="timeline__subtitle">{{ slotProps.item.position }}</p>
                <p class="timeline__location">
                  <i class="uil uil-map-marker"></i>
                  {{ slotProps.item.company }}
                </p>
                <p class="timeline__period">
                  <i class="uil uil-calendar-alt"></i>
                  {{ slotProps.item.period.start }} - {{ slotProps.item.period.end }}
                </p>
              </div>
            </template>
          </Timeline>
        </div>

        <div
          class="education__content"
          :class="{ 'education__content-active': activeTab === 'education' }"
          role="tabpanel"
        >
          <Timeline :value="educationData" align="alternate" class="customized-timeline">
            <template #content="slotProps">
              <div class="timeline__card">
                <h3 class="timeline__title">{{ t(`text.${slotProps.item.title}`) }}</h3>
                <p class="timeline__subtitle">{{ t(`text.${slotProps.item.subtitle}`) }}</p>
                <p v-if="slotProps.item.location" class="timeline__location">
                  <i class="uil uil-map-marker"></i>
                  {{ slotProps.item.location }}
                </p>
                <p class="timeline__period">
                  <i class="uil uil-calendar-alt"></i>
                  {{ slotProps.item.period.start }} - {{ slotProps.item.period.end }}
                </p>
              </div>
            </template>
          </Timeline>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Timeline from 'primevue/timeline'
import { educationData, experienceData } from '@/data/education'

const { t } = useI18n()
const activeTab = ref<'education' | 'experience'>('experience')
</script>

<style scoped>
.customized-timeline :deep(.p-timeline-event-marker) {
  width: 1rem !important;
  height: 1rem !important;
  background-color: var(--text-color) !important;
  border: 3px solid var(--body-color) !important;
  border-radius: 50% !important;
}

.customized-timeline :deep(.p-timeline-event-marker::before) {
  display: none !important;
}

.customized-timeline :deep(.p-timeline-event-connector) {
  background-color: var(--text-color) !important;
  width: 2px !important;
}

@media screen and (max-width: 767px) {
  .customized-timeline :deep(.p-timeline-event:nth-child(even)) {
    flex-direction: row;
  }
  
  .customized-timeline :deep(.p-timeline-event:nth-child(even) .p-timeline-event-content) {
    text-align: left;
  }
  
  .customized-timeline :deep(.p-timeline-event-opposite) {
    flex: 0;
  }
}
</style>
