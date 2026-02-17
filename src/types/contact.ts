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
