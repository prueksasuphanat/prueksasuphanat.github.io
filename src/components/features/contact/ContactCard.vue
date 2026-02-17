<script setup lang="ts">
interface Props {
  icon: string
  title: string
  data: string
  link: string
  linkText: string
  ariaLabel: string
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  external: false
})
</script>

<template>
  <div class="contact__card">
    <i :class="['contact__card-icon', icon]"></i>
    <h3 class="contact__card-title">{{ title }}</h3>
    <span class="contact__card-data">{{ data }}</span>
    <a
      :href="link"
      class="contact__button"
      :aria-label="ariaLabel"
      :target="external ? '_blank' : undefined"
      :rel="external ? 'noopener noreferrer' : undefined"
    >
      {{ linkText }}
      <i class="bx bx-right-arrow-alt contact__button-icon"></i>
    </a>
  </div>
</template>
