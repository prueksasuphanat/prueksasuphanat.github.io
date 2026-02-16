<template>
  <section class="Contact section" id="contact">
    <h2 class="section__title">{{ t('text.ContactMe') }}</h2>
    <div class="contact__container container grid">
      <ContactInfo />
      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContactInfo from './ContactInfo.vue'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
</script>
