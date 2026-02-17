<template>
  <div class="contact__content">
    <h3 class="contact__title">{{ t('contact.writeToMe') }}</h3>
    <form @submit.prevent="handleSubmit" class="contact__form">
      <!-- Name field -->
      <div class="contact__form-div">
        <label class="contact__form-tag" for="contact-name">
          {{ t('contact.form.name') }}
        </label>
        <input
          id="contact-name"
          v-model="formData.name"
          type="text"
          name="name"
          class="contact__form-input"
          :class="{ 'contact__form-input--error': errors.name }"
          :placeholder="t('contact.form.namePlaceholder')"
          :aria-invalid="!!errors.name"
          :aria-describedby="errors.name ? 'name-error' : undefined"
          @blur="validateField('name')"
        />
        <span
          v-if="errors.name"
          id="name-error"
          class="contact__form-error"
          role="alert"
          aria-live="polite"
        >
          {{ errors.name }}
        </span>
      </div>

      <!-- Email field -->
      <div class="contact__form-div">
        <label class="contact__form-tag" for="contact-email">
          {{ t('contact.form.email') }}
        </label>
        <input
          id="contact-email"
          v-model="formData.email"
          type="email"
          name="email"
          class="contact__form-input"
          :class="{ 'contact__form-input--error': errors.email }"
          :placeholder="t('contact.form.emailPlaceholder')"
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? 'email-error' : undefined"
          @blur="validateField('email')"
        />
        <span
          v-if="errors.email"
          id="email-error"
          class="contact__form-error"
          role="alert"
          aria-live="polite"
        >
          {{ errors.email }}
        </span>
      </div>

      <!-- Message field -->
      <div class="contact__form-div contact__form-area">
        <label class="contact__form-tag" for="contact-message">
          {{ t('contact.form.message') }}
        </label>
        <textarea
          id="contact-message"
          v-model="formData.message"
          name="message"
          cols="30"
          rows="10"
          class="contact__form-input"
          :class="{ 'contact__form-input--error': errors.message }"
          :placeholder="t('contact.form.messagePlaceholder')"
          :aria-invalid="!!errors.message"
          :aria-describedby="errors.message ? 'message-error' : undefined"
          @blur="validateField('message')"
        ></textarea>
        <span
          v-if="errors.message"
          id="message-error"
          class="contact__form-error"
          role="alert"
          aria-live="polite"
        >
          {{ errors.message }}
        </span>
      </div>

      <!-- Submit button -->
      <button
        type="submit"
        :disabled="!isValid || isSubmitting"
        class="button button--flex about__btn"
        :aria-busy="isSubmitting"
      >
        {{ isSubmitting ? t('contact.form.sending') : t('contact.form.submit') }}
        <span class="material-symbols-outlined">send</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useContactForm } from '@/composables/features/useContactForm'

const { t } = useI18n()
const {
  formData,
  errors,
  isSubmitting,
  isValid,
  validateField,
  handleSubmit,
} = useContactForm()
</script>
