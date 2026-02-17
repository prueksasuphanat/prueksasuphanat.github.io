

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContactInfo from './ContactInfo.vue'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
</script>

<template>
  <section class="Contact section" id="contact">
    <h2 class="section__title">{{ t('contact.title') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 ">
      <span class="flex justify-center md:justify-end">
        <ContactInfo />
      </span>
      <div class="flex justify-center md:justify-start">
        <ContactForm />
      </div>
    </div>
  </section>
</template>
