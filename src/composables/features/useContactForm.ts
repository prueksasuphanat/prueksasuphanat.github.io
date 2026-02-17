import { ref, computed, type Ref, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import type {
  ContactFormData,
  ContactFormErrors,
  ContactFormSubmitResult,
} from '@/types/contact'

export interface UseContactFormReturn {
  // State
  formData: Ref<ContactFormData>
  errors: Ref<ContactFormErrors>
  isSubmitting: Ref<boolean>
  isValid: ComputedRef<boolean>

  // Methods
  validateField: (field: keyof ContactFormData) => boolean
  validateForm: () => boolean
  handleSubmit: () => Promise<void>
  resetForm: () => void
}

export function useContactForm() {
  const { t } = useI18n()

  // State
  const formData = ref<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })

  const errors = ref<ContactFormErrors>({})
  const isSubmitting = ref(false)

  // Computed
  const isValid = computed(() => {
    return (
      formData.value.name.trim() !== '' &&
      formData.value.email.trim() !== '' &&
      formData.value.message.trim() !== '' &&
      isValidEmail(formData.value.email) &&
      Object.keys(errors.value).length === 0
    )
  })

  // Validation helpers
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (field: keyof ContactFormData): boolean => {
    const value = formData.value[field].trim()

    // Clear previous error
    delete errors.value[field]

    // Required validation
    if (value === '') {
      errors.value[field] = t('contact.validation.required')
      return false
    }

    // Email format validation
    if (field === 'email' && !isValidEmail(value)) {
      errors.value[field] = t('contact.validation.invalidEmail')
      return false
    }

    return true
  }

  const validateForm = (): boolean => {
    errors.value = {}

    const nameValid = validateField('name')
    const emailValid = validateField('email')
    const messageValid = validateField('message')

    return nameValid && emailValid && messageValid
  }

  // Form submission
  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) {
      return
    }

    isSubmitting.value = true

    try {
      // TODO: Replace with actual API call
      await mockSubmitForm(formData.value)

      // Success feedback
      console.log('Form submitted successfully:', formData.value)
      alert(t('contact.form.success'))

      // Reset form
      resetForm()
    } catch (error) {
      console.error('Form submission error:', error)
      alert(t('contact.form.error'))
    } finally {
      isSubmitting.value = false
    }
  }

  const resetForm = (): void => {
    formData.value = {
      name: '',
      email: '',
      message: '',
    }
    errors.value = {}
  }

  // Mock API call (to be replaced with real implementation)
  const mockSubmitForm = (
    _data: ContactFormData,
  ): Promise<ContactFormSubmitResult> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Message sent successfully',
        })
      }, 1000)
    })
  }

  return {
    formData,
    errors,
    isSubmitting,
    isValid,
    validateField,
    validateForm,
    handleSubmit,
    resetForm,
  }
}
