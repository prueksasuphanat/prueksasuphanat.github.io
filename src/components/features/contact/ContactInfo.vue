<template>
  <div class="contact__content">
    <h3 class="contact__title">Talk to me</h3>
    <div class="contact__info">
      <div class="contact__card">
        <i class="bx bx-mail-send contact__card-icon"></i>
        <h3 class="contact__card-title">Email</h3>
        <span class="contact__card-data">{{ appConfig.contact.email }}</span>
        <a
          :href="`mailto:${appConfig.contact.email}`"
          class="contact__button"
          aria-label="Send email"
        >
          Write me
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>

      <div class="contact__card">
        <i class="bx bx-phone-call contact__card-icon"></i>
        <h3 class="contact__card-title">Phone</h3>
        <span class="contact__card-data">{{ appConfig.contact.phone }}</span>
        <a
          :href="`tel:${appConfig.contact.phone}`"
          class="contact__button"
          aria-label="Call phone"
        >
          Call me
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>

      <div class="contact__card">
        <i class="bx bxl-discord-alt bx-tada contact__card-icon"></i>
        <h3 class="contact__card-title">Discord</h3>
        <span class="contact__card-data">{{ appConfig.contact.discord }}</span>
        <a
          href="https://www.discordapp.com/users/389665555906297856"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__button"
          aria-label="Message on Discord"
        >
          Write me
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { appConfig } from '@/config'
</script>
