# Contact Component Reorganization - Design Document

## Overview

This design reorganizes the Contact section components to improve user experience and code maintainability. The primary changes include:

1. **Layout Restructuring**: ContactForm moves to the left (priority), ContactInfo to the right
2. **Component Extraction**: Create reusable ContactCard component
3. **Form Logic Separation**: Extract form handling into `useContactForm` composable
4. **Type Safety**: Add comprehensive TypeScript interfaces
5. **Internationalization**: Full i18n support for Thai and English
6. **Validation**: Client-side form validation with user-friendly error messages

The design follows Vue 3 Composition API best practices with `<script setup>` syntax, proper TypeScript typing, and clear separation of concerns.

## Architecture

### Component Hierarchy

```
ContactSection (Container)
├── ContactForm (Left - Priority)
│   └── uses useContactForm composable
└── ContactInfo (Right - Alternative channels)
    └── ContactCard × 3 (Email, Phone, Discord)
```

### Data Flow

```
User Input → ContactForm → useContactForm composable → Validation → Submit Handler
                                                      ↓
                                                  Form State
                                                  Error State
                                                  Submit State
```

### Responsive Behavior

- **Desktop (≥768px)**: Two-column grid (ContactForm left, ContactInfo right)
- **Mobile (<768px)**: Single column stack (ContactForm first, ContactInfo second)

## Components and Interfaces

### 1. ContactSection.vue

**Purpose**: Main container component that orchestrates the layout

**Structure**:
```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContactForm from './ContactForm.vue'
import ContactInfo from './ContactInfo.vue'

const { t } = useI18n()
</script>

<template>
  <section class="Contact section" id="contact">
    <h2 class="section__title">{{ t('contact.title') }}</h2>
    <div class="contact__container container grid">
      <ContactForm />
      <ContactInfo />
    </div>
  </section>
</template>
```

**CSS Changes**:
- Modify `.contact__container` grid to place ContactForm first in source order
- Use CSS Grid with `grid-template-columns` for desktop layout
- Mobile-first approach: stack by default, grid on larger screens

### 2. ContactForm.vue

**Purpose**: Form for users to send messages

**Props**: None

**Emits**: None (handles submission internally)

**State Management**: Uses `useContactForm` composable

**Structure**:
```vue
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
  resetForm
} = useContactForm()
</script>

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
```

**Accessibility Features**:
- Proper label associations with `for` and `id`
- `aria-invalid` on invalid fields
- `aria-describedby` linking errors to inputs
- `aria-live="polite"` for error announcements
- `aria-busy` on submit button during submission

### 3. ContactInfo.vue

**Purpose**: Display alternative contact channels

**Props**: None

**Structure**:
```vue
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
        :aria-label="card.ariaLabel"
        :external="card.external"
      />
    </div>
  </div>
</template>
```

### 4. ContactCard.vue (New Component)

**Purpose**: Reusable card component for displaying contact information

**Props**:
```typescript
interface Props {
  icon: string          // Boxicons class name
  title: string         // Card title (e.g., "Email")
  data: string          // Contact data to display
  link: string          // Action link (mailto:, tel:, https:)
  linkText: string      // Link button text
  ariaLabel: string     // Accessibility label for link
  external?: boolean    // Whether link opens in new tab
}
```

**Structure**:
```vue
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
```

## Data Models

### Type Definitions (src/types/contact.ts)

```typescript
/**
 * Contact form data structure
 */
export interface ContactFormData {
  name: string
  email: string
  message: string
}

/**
 * Form validation errors
 */
export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

/**
 * Contact card data for ContactInfo component
 */
export interface ContactCardData {
  icon: string
  title: string
  data: string
  link: string
  linkText: string
  ariaLabel: string
  external?: boolean
}

/**
 * Form submission result
 */
export interface ContactFormSubmitResult {
  success: boolean
  message: string
  error?: Error
}
```

### Composable: useContactForm

**File**: `src/composables/features/useContactForm.ts`

**Purpose**: Encapsulate form state management, validation, and submission logic

**Interface**:
```typescript
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
```

**Implementation**:
```typescript
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type {
  ContactFormData,
  ContactFormErrors,
  ContactFormSubmitResult
} from '@/types/contact'

export function useContactForm() {
  const { t } = useI18n()
  
  // State
  const formData = ref<ContactFormData>({
    name: '',
    email: '',
    message: ''
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
      message: ''
    }
    errors.value = {}
  }
  
  // Mock API call (to be replaced with real implementation)
  const mockSubmitForm = (data: ContactFormData): Promise<ContactFormSubmitResult> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Message sent successfully'
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
    resetForm
  }
}
```

## Internationalization

### i18n Keys Structure

Add to `src/i18n/locales/en.ts`:
```typescript
contact: {
  title: 'Contact Me',
  talkToMe: 'Talk to me',
  writeToMe: 'Write something to me',
  form: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Insert your name',
    emailPlaceholder: 'Insert your email',
    messagePlaceholder: 'Write something',
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Failed to send message. Please try again.'
  },
  validation: {
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address'
  },
  cards: {
    writeMe: 'Write me',
    callMe: 'Call me',
    sendEmail: 'Send email',
    callPhone: 'Call phone',
    messageDiscord: 'Message on Discord'
  }
}
```

Add to `src/i18n/locales/th.ts`:
```typescript
contact: {
  title: 'ติดต่อฉัน',
  talkToMe: 'ติดต่อฉัน',
  writeToMe: 'เขียนข้อความถึงฉัน',
  form: {
    name: 'ชื่อ',
    email: 'อีเมล',
    message: 'ข้อความ',
    namePlaceholder: 'กรอกชื่อของคุณ',
    emailPlaceholder: 'กรอกอีเมลของคุณ',
    messagePlaceholder: 'เขียนข้อความ',
    submit: 'ส่งข้อความ',
    sending: 'กำลังส่ง...',
    success: 'ส่งข้อความสำเร็จ!',
    error: 'ส่งข้อความไม่สำเร็จ กรุณาลองใหม่อีกครั้ง'
  },
  validation: {
    required: 'กรุณากรอกข้อมูลในช่องนี้',
    invalidEmail: 'กรุณากรอกอีเมลที่ถูกต้อง'
  },
  cards: {
    writeMe: 'เขียนถึงฉัน',
    callMe: 'โทรหาฉัน',
    sendEmail: 'ส่งอีเมล',
    callPhone: 'โทรศัพท์',
    messageDiscord: 'ส่งข้อความทาง Discord'
  }
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Required Field Validation

*For any* form field marked as required (name, email, message), when the field value is empty or contains only whitespace, validation should fail and display the appropriate error message.

**Validates: Requirements 4.1**

### Property 2: Email Format Validation

*For any* email input, validation should pass if and only if the email matches the standard email format pattern (contains @ symbol, has characters before and after @, has domain with dot).

**Validates: Requirements 4.2**

### Property 3: Submit Button State

*For any* form state, the submit button should be disabled if and only if at least one of the following conditions is true: (1) any required field is empty, (2) the email format is invalid, or (3) the form is currently submitting.

**Validates: Requirements 4.4**

### Property 4: Keyboard Navigation

*For any* user interaction using only keyboard input, the user should be able to navigate through all form fields using Tab key, fill in all fields, and submit the form using Enter key, without requiring mouse interaction.

**Validates: Requirements 6.4**

## Error Handling

### Validation Errors

**Client-Side Validation**:
- Validate on field blur (when user leaves the field)
- Validate all fields on form submission attempt
- Display errors inline below each field
- Clear errors when user starts correcting the field

**Error Display**:
```typescript
// Error state structure
interface ContactFormErrors {
  name?: string      // "This field is required"
  email?: string     // "Please enter a valid email address"
  message?: string   // "This field is required"
}
```

**Error Messages**:
- Use i18n keys for all error messages
- Display errors with `role="alert"` and `aria-live="polite"`
- Style errors with distinct color (typically red) and icon

### Submission Errors

**Network/API Errors**:
- Catch all errors in try-catch block
- Display user-friendly error message via alert (temporary solution)
- Log detailed error to console for debugging
- Keep form data intact so user doesn't lose their input
- Re-enable submit button after error

**Error Recovery**:
```typescript
try {
  await submitForm(formData.value)
  // Success handling
} catch (error) {
  console.error('Submission error:', error)
  alert(t('contact.form.error'))
  // Form remains filled, user can retry
} finally {
  isSubmitting.value = false
}
```

### Edge Cases

**Empty Whitespace**:
- Trim all field values before validation
- Treat whitespace-only input as empty

**Special Characters in Email**:
- Use standard email regex that handles common valid formats
- Accept international characters in email local part

**Long Messages**:
- No character limit on message field (textarea)
- Backend should handle length limits if needed

**Rapid Submissions**:
- Disable submit button during submission
- Prevent double-submission via `isSubmitting` flag

## Testing Strategy

### Unit Tests

Unit tests focus on specific examples, edge cases, and component integration:

**ContactCard Component**:
- Renders with all required props
- Displays icon, title, and data correctly
- Renders external links with target="_blank" and rel="noopener noreferrer"
- Renders internal links without target attribute

**ContactInfo Component**:
- Renders three ContactCard components
- Passes correct props to each card
- Uses i18n for all text content

**ContactForm Component**:
- Renders all form fields with correct labels
- Displays error messages when validation fails
- Clears form after successful submission
- Disables submit button during submission

**ContactSection Component**:
- Renders ContactForm and ContactInfo in correct order
- Uses i18n for section title

**useContactForm Composable**:
- Initializes with empty form data
- Returns all required properties and methods
- resetForm() clears all fields and errors
- Specific email validation examples:
  - "test@example.com" → valid
  - "invalid.email" → invalid
  - "test@" → invalid
  - "@example.com" → invalid

### Property-Based Tests

Property tests verify universal correctness properties across many generated inputs. Each test should run minimum 100 iterations.

**Property Test 1: Required Field Validation**
- Generate random form states with various combinations of empty/filled fields
- For each required field (name, email, message), verify that empty or whitespace-only values trigger validation errors
- Tag: **Feature: contact-component-reorganization, Property 1: Required Field Validation**

**Property Test 2: Email Format Validation**
- Generate random email strings (both valid and invalid formats)
- Verify that validation passes for valid emails and fails for invalid emails
- Valid patterns: has @ symbol, has local part, has domain with TLD
- Invalid patterns: missing @, missing local part, missing domain, multiple @
- Tag: **Feature: contact-component-reorganization, Property 2: Email Format Validation**

**Property Test 3: Submit Button State**
- Generate random form states with various combinations of valid/invalid data
- Verify that submit button is disabled when form is invalid or submitting
- Verify that submit button is enabled only when all validations pass and not submitting
- Tag: **Feature: contact-component-reorganization, Property 3: Submit Button State**

**Property Test 4: Keyboard Navigation**
- Simulate keyboard-only interaction with the form
- Verify that Tab key moves focus through all form fields in correct order
- Verify that Enter key in any field triggers form submission
- Verify that form can be completed and submitted without mouse
- Tag: **Feature: contact-component-reorganization, Property 4: Keyboard Navigation**

### Integration Tests

**End-to-End Form Flow**:
- User fills out form with valid data
- User submits form
- Form shows loading state
- Form shows success message
- Form resets to empty state

**Validation Flow**:
- User enters invalid email
- User tabs to next field
- Error message appears
- User corrects email
- Error message disappears

**Responsive Layout**:
- Desktop: ContactForm on left, ContactInfo on right
- Mobile: ContactForm stacked above ContactInfo
- Both layouts maintain functionality

### Testing Tools

**Recommended Libraries**:
- **Vitest**: Test runner (already configured in Vue 3 projects)
- **@vue/test-utils**: Vue component testing utilities
- **@testing-library/vue**: User-centric testing utilities
- **fast-check**: Property-based testing library for TypeScript/JavaScript

**Property Test Configuration**:
```typescript
import { test } from 'vitest'
import fc from 'fast-check'

test('Property 1: Required Field Validation', () => {
  fc.assert(
    fc.property(
      fc.record({
        name: fc.string(),
        email: fc.string(),
        message: fc.string()
      }),
      (formData) => {
        // Test property
      }
    ),
    { numRuns: 100 } // Minimum 100 iterations
  )
})
```

### Accessibility Testing

**Manual Testing Checklist**:
- [ ] Test with screen reader (NVDA/JAWS on Windows, VoiceOver on Mac)
- [ ] Test keyboard-only navigation
- [ ] Verify focus indicators are visible
- [ ] Verify error announcements are read by screen reader
- [ ] Test with browser zoom at 200%

**Automated Accessibility**:
- Use axe-core or similar tool to check for WCAG violations
- Verify all form inputs have associated labels
- Verify color contrast meets WCAG AA standards

## Implementation Notes

### CSS Modifications

**Grid Layout for ContactSection**:
```css
.contact__container {
  display: grid;
  gap: 2rem;
  
  /* Mobile-first: single column */
  grid-template-columns: 1fr;
}

@media screen and (min-width: 768px) {
  .contact__container {
    /* Desktop: two columns, form on left */
    grid-template-columns: 1fr 1fr;
  }
}
```

**Error Styling**:
```css
.contact__form-input--error {
  border-color: var(--error-color, #dc3545);
}

.contact__form-error {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--error-color, #dc3545);
}
```

### Migration Path

1. Create new types file (`src/types/contact.ts`)
2. Create ContactCard component
3. Create useContactForm composable
4. Update i18n locale files with new keys
5. Update ContactInfo to use ContactCard
6. Update ContactForm to use composable and validation
7. Update ContactSection grid order (CSS)
8. Test all functionality
9. Remove old unused code

### Future Enhancements (Out of Scope)

- Backend API integration for actual form submission
- Email service integration (SendGrid, AWS SES, etc.)
- Form submission history/tracking
- CAPTCHA or spam protection
- File attachment support
- Rich text editor for message field
- Auto-save draft functionality
- Success notification toast instead of alert
