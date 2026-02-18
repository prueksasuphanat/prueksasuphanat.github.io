<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/about'
import { usePersonalInfo, getGithubUserData } from '@/composables'

interface ReposItem {
  public_repos: number
}

const repoData = ref<ReposItem>({ public_repos: 0 })

const { currentAge, currentExperience } = usePersonalInfo()
const { t } = useI18n()

onMounted(async () => {
  const data = await getGithubUserData()
  if (data) {
    repoData.value = data
  }
})
</script>

<template>
  <div class="about__data">
    <div class="about__info grid">
      <div class="about__box">
        <i class="material-symbols-outlined about__icon">editor_choice</i>
        <h3 class="about__title">{{ t('text.Experience') }}</h3>
        <span class="about__subtitle">
          {{ currentExperience.year }} {{ t('text.Year') }} {{ currentExperience.month }}
          {{ t('text.Month') }}
        </span>
      </div>

      <div class="about__box">
        <i class="material-symbols-outlined about__icon">business_center</i>
        <h3 class="about__title">Public Repos</h3>
        <span class="about__subtitle">
          {{ repoData.public_repos }}
        </span>
      </div>

      <div class="about__box">
        <i class="material-symbols-outlined about__icon">school</i>
        <h3 class="about__title">{{ t('text.Education') }}</h3>
        <span class="about__subtitle"> {{ t('text.BEng') }}, {{ t('text.MEngIE') }} </span>
      </div>
    </div>

    <div class="about__description">
      <p>{{ personalInfo.name.first }} {{ personalInfo.name.last }}</p>
      <p>
        {{ t('text.Age') }}: {{ currentAge.year }} {{ t('text.Year') }} {{ currentAge.month }}
        {{ t('text.Month') }}
      </p>
      <p>{{ t('text.DateOfBirth') }}: {{ currentAge.dateOfBirth }}</p>
    </div>

    <a download="" href="" class="button button--flex about__btn">
      {{ t('text.DownloadCV') }}
      <span class="material-symbols-outlined">description</span>
    </a>
  </div>
</template>
