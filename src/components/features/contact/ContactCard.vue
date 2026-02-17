<script setup lang="ts">
const props = defineProps({
  icon: String,
  title: String,
  data: String,
  link: String,
  linkText: String,
  ariaLabel: String,
  external: {
    type : Boolean,
    default : false
  },
})
</script>

<template>
  <div class="contact__card">
    <i :class="['contact__card-icon', icon]"></i>
    <h3 class="contact__card-title">{{ props.title }}</h3>
    <span class="contact__card-data">{{ props.data }}</span>
    <a
      :href="link"
      class="contact__button"
      :aria-label="ariaLabel"
      :target="external ? '_blank' : undefined"
      :rel="external ? 'noopener noreferrer' : undefined"
    >
      {{ props.linkText }}
      <i class="bx bx-right-arrow-alt contact__button-icon"></i>
    </a>
  </div>
</template>
