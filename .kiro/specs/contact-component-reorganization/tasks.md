# Implementation Plan: Contact Component Reorganization

## Overview

This implementation plan reorganizes the Contact section components with improved layout, type safety, validation, and i18n support. The approach follows Vue 3 best practices with TypeScript, creating reusable components and extracting business logic into composables.

## Tasks

- [x] 1. Create type definitions and interfaces
  - Create `src/types/contact.ts` with ContactFormData, ContactFormErrors, ContactCardData, and ContactFormSubmitResult interfaces
  - Export all types from `src/types/index.ts`
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 2. Add i18n translations
  - Add contact translations to `src/i18n/locales/en.ts` (title, form fields, validation messages, card labels)
  - Add contact translations to `src/i18n/locales/th.ts` (Thai translations for all keys)
  - _Requirements: 5.1, 5.2, 5.3_

- [ ] 3. Create useContactForm composable
  - [x] 3.1 Implement useContactForm composable in `src/composables/features/useContactForm.ts`
    - Create form state (formData, errors, isSubmitting refs)
    - Implement isValid computed property
    - Implement email validation helper
    - Implement validateField method
    - Implement validateForm method
    - Implement handleSubmit method with mock API call
    - Implement resetForm method
    - Return all reactive values and methods
    - _Requirements: 7.1, 7.2, 4.1, 4.2_
  
  - [x] 3.2 Write property test for required field validation
    - **Property 1: Required Field Validation**
    - **Validates: Requirements 4.1**
  
  - [x] 3.3 Write property test for email format validation
    - **Property 2: Email Format Validation**
    - **Validates: Requirements 4.2**
  
  - [x] 3.4 Write unit tests for useContactForm composable
    - Test initialization with empty form data
    - Test specific email validation examples (valid and invalid)
    - Test resetForm clears all fields and errors
    - _Requirements: 4.1, 4.2_

- [ ] 4. Create ContactCard component
  - [x] 4.1 Create `src/components/features/contact/ContactCard.vue`
    - Use `<script setup>` with TypeScript
    - Define Props interface with icon, title, data, link, linkText, ariaLabel, external
    - Render card with icon, title, data, and action link
    - Handle external links with target="_blank" and rel="noopener noreferrer"
    - Add proper aria-label for accessibility
    - _Requirements: 2.1, 2.4, 3.2, 6.3_
  
  - [x] 4.2 Write unit tests for ContactCard component
    - Test renders with all required props
    - Test external links have correct attributes
    - Test internal links don't have target attribute
    - _Requirements: 2.4_

- [ ] 5. Update ContactInfo component
  - [x] 5.1 Refactor ContactInfo to use ContactCard component
    - Import ContactCard and ContactCardData type
    - Create contactCards array with data for Email, Phone, Discord
    - Use v-for to render ContactCard components
    - Use i18n for all text (title, link text, aria labels)
    - Remove duplicate card markup
    - _Requirements: 2.4, 5.1, 6.3_
  
  - [x] 5.2 Write unit tests for ContactInfo component
    - Test renders three ContactCard components
    - Test passes correct props to each card
    - Test uses i18n for text content
    - _Requirements: 2.4, 5.1_

- [ ] 6. Update ContactForm component
  - [x] 6.1 Refactor ContactForm to use useContactForm composable
    - Import and use useContactForm composable
    - Destructure formData, errors, isSubmitting, isValid, validateField, handleSubmit
    - Update template to use i18n for all labels and placeholders
    - Add error display below each field with v-if
    - Add error styling class binding
    - Add @blur event to trigger validateField
    - Add aria-invalid, aria-describedby attributes
    - Add aria-live="polite" to error messages
    - Disable submit button when !isValid or isSubmitting
    - Add aria-busy to submit button
    - _Requirements: 2.1, 4.1, 4.2, 4.3, 4.4, 5.1, 6.1, 6.2, 7.1_
  
  - [x] 6.2 Write property test for submit button state
    - **Property 3: Submit Button State**
    - **Validates: Requirements 4.4**
  
  - [x] 6.3 Write unit tests for ContactForm component
    - Test renders all form fields with correct labels
    - Test displays error messages when validation fails
    - Test clears form after successful submission
    - Test disables submit button during submission
    - _Requirements: 4.1, 4.2, 4.4, 5.1, 6.1_

- [ ] 7. Update ContactSection component and CSS
  - [x] 7.1 Update ContactSection component
    - Ensure ContactForm is rendered before ContactInfo in template
    - Update i18n key from 'text.ContactMe' to 'contact.title'
    - Verify `<script setup>` syntax is used
    - _Requirements: 1.1, 1.3, 2.1, 5.1_
  
  - [x] 7.2 Update CSS for responsive grid layout
    - Modify `.contact__container` to use CSS Grid
    - Mobile-first: single column (grid-template-columns: 1fr)
    - Desktop (≥768px): two columns (grid-template-columns: 1fr 1fr)
    - Add error styling (.contact__form-input--error, .contact__form-error)
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  
  - [x] 7.3 Write integration tests for ContactSection
    - Test ContactForm appears before ContactInfo in DOM
    - Test responsive layout (desktop two-column, mobile stacked)
    - _Requirements: 1.1, 1.2, 1.3_

- [x] 8. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Accessibility testing
  - [x] 9.1 Write property test for keyboard navigation
    - **Property 4: Keyboard Navigation**
    - **Validates: Requirements 6.4**
  
  - [x] 9.2 Manual accessibility verification
    - Test keyboard-only navigation (Tab through fields, Enter to submit)
    - Verify focus indicators are visible
    - Test with screen reader (verify labels and error announcements)
    - Verify all buttons have aria-label
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 10. Final integration and cleanup
  - [x] 10.1 Verify all components use TypeScript types correctly
    - Run TypeScript type checking
    - Fix any type errors
    - _Requirements: 3.1, 3.2, 3.3_
  
  - [x] 10.2 Verify all text uses i18n
    - Check no hardcoded strings remain in templates
    - Test language switching between English and Thai
    - _Requirements: 5.1, 5.2, 5.3_
  
  - [x] 10.3 Test complete form submission flow
    - Fill form with valid data and submit
    - Verify loading state appears
    - Verify success message shows
    - Verify form resets after submission
    - _Requirements: 4.1, 4.2, 4.4_

- [x] 11. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties (minimum 100 iterations each)
- Unit tests validate specific examples and edge cases
- All components follow Vue 3 best practices with `<script setup>` and TypeScript
- Form validation happens on blur and on submit attempt
- Mock API call is used for form submission (to be replaced with real API later)
