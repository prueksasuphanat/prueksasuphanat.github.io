<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { appConfig } from '@/config'
import ContactCard from './ContactCard.vue'
import type { ContactCardData } from '@/types/contact'

const { t } = useI18n()

const contactCards: ContactCardData[] = [
  {
    icon: 'bx bx-mail-send',
    title: 'Email',
    data: appConfig.contact.email,
    link: `mailto:${appConfig.contact.email}`,
    linkText: t('contact.cards.writeMe'),
    ariaLabel: t('contact.cards.sendEmail')
  },
  {
    icon: 'bx bx-phone-call',
    title: 'Phone',
    data: appConfig.contact.phone,
    link: `tel:${appConfig.contact.phone}`,
    linkText: t('contact.cards.callMe'),
    ariaLabel: t('contact.cards.callPhone')
  },
  {
    icon: 'bx bxl-discord-alt bx-tada',
    title: 'Discord',
    data: appConfig.contact.discord,
    link: 'https://www.discordapp.com/users/389665555906297856',
    linkText: t('contact.cards.writeMe'),
    ariaLabel: t('contact.cards.messageDiscord'),
    external: true
  }
]
</script>

<template>
  <div class="contact__content">
    <h3 class="contact__title">{{ t('contact.talkToMe') }}</h3>
    <div class="contact__info">
      <ContactCard
        v-for="(card, index) in contactCards"
        :key="index"
        :icon="card.icon"
        :title="card.title"
        :data="card.data"
        :link="card.link"
        :link-text="card.linkText"
        :ariaLabel="card.ariaLabel"
        :external="card.external"
      />
    </div>
  </div>
</template>
