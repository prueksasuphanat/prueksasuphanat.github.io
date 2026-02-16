<template>
  <div class="home-view">
    <HomeHero />
    <AboutHero />
    <SkillsList />
    <EducationTimeline />
    <PortfolioGrid />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HomeHero from '@/components/features/home/HomeHero.vue'
import AboutHero from '@/components/features/about/AboutHero.vue'
import SkillsList from '@/components/features/about/SkillsList.vue'
import EducationTimeline from '@/components/features/education/EducationTimeline.vue'
import PortfolioGrid from '@/components/features/portfolio/PortfolioGrid.vue'
import ContactSection from '@/components/features/contact/ContactSection.vue'
</script>
