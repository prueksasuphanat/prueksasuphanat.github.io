<template>
  <div class="about__data">
    <div class="about__info grid">
      <div class="about__box">
        <i class="material-symbols-outlined about__icon">editor_choice</i>
        <h3 class="about__title">{{ t('text.Experience') }}</h3>
        <span class="about__subtitle">
          {{ personalInfo.experience.months }} {{ t('text.Month') }}
          {{ personalInfo.experience.years }} {{ t('text.Year') }}
        </span>
      </div>

      <div class="about__box">
        <i class="material-symbols-outlined about__icon">business_center</i>
        <h3 class="about__title">{{ t('text.ProjectComplete') }}</h3>
        <span class="about__subtitle">
          {{ personalInfo.projectsCompleted }} {{ t('text.Projects') }}
        </span>
      </div>

      <div class="about__box">
        <i class="material-symbols-outlined about__icon">school</i>
        <h3 class="about__title">{{ t('text.Education') }}</h3>
        <span class="about__subtitle">
          {{ t('text.BEng') }}, {{ t('text.MEngIE') }}
        </span>
      </div>
    </div>

    <div class="about__description">
      <p>{{ personalInfo.name.first }} {{ personalInfo.name.last }}</p>
      <p>{{ t('text.Age') }}: {{ personalInfo.age }}</p>
      <p>{{ t('text.DateOfBirth') }}: {{ personalInfo.dateOfBirth }}</p>
    </div>

    <a download="" href="" class="button button--flex about__btn">
      {{ t('text.DownloadCV') }}
      <span class="material-symbols-outlined">description</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/about'

const { t } = useI18n()
</script>
