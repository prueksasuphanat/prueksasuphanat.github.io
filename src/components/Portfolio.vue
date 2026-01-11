<template>
  <div class="portfolio section" id="portfolio">
    <h2 class="section__title">{{ t("text.Portfolio") }}</h2>

    <div
      v-for="project in projects"
      :key="project.id"
      class="portfolio__container container grid"
    >
      <div class="portfolio__img">
        <img :src="project.image" :alt="project.title" />
      </div>
      <div class="portfolio__content">
        <h3 class="portfolio__title">
          {{ project.title }} ({{ t(`text.${project.year}`) }})
        </h3>
        <p class="portfolio__description">
          {{
            project.description === "ContentDemo4"
              ? t("text.ContentDemo4")
              : project.description
          }}
        </p>
        <div class="portfolio__subtitle">
          <p v-for="tech in project.technologies" :key="tech">{{ tech }}</p>
        </div>
        <div class="portfolio__link">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            class="contact__button portfolio__button"
          >
            <i class="bx bxl-github portfolio__icon"></i>Code
            <i class="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            class="contact__button portfolio__button"
          >
            <i class="bx bx-code-alt portfolio__icon"></i>Demo
            <i class="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { projects } from "@/data/portfolio";

const { t } = useI18n();
</script>
