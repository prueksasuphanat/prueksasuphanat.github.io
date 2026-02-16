<template>
  <div class="contact__content">
    <h3 class="contact__title">Write something to me</h3>
    <form @submit.prevent="handleSubmit" class="contact__form">
      <div class="contact__form-div">
        <label class="contact__form-tag" for="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          v-model="formData.name"
          type="text"
          name="name"
          class="contact__form-input"
          placeholder="Insert your name"
          required
        />
      </div>

      <div class="contact__form-div">
        <label class="contact__form-tag" for="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          v-model="formData.email"
          type="email"
          name="email"
          class="contact__form-input"
          placeholder="Insert your email"
          required
        />
      </div>

      <div class="contact__form-div contact__form-area">
        <label class="contact__form-tag" for="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          v-model="formData.message"
          name="message"
          cols="30"
          rows="10"
          class="contact__form-input"
          placeholder="Write something"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="button button--flex about__btn"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        <span class="material-symbols-outlined">send</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData.value)
    alert('Message sent successfully!')
    // Reset form
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
