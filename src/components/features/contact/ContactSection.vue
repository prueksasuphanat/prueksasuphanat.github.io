<template>
  <section class="Contact section" id="contact">
    <h2 class="section__title">{{ t('contact.title') }}</h2>
    <div class="flex justify-center gap-[100px] sm:flex-col sm:justify-center! sm:items-center">
     
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
