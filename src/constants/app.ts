export const APP_NAME = 'Portfolio - Pruek Suphanat'
export const APP_DESCRIPTION = 'Frontend Developer Portfolio'
export const DEFAULT_LOCALE = 'en'
export const SUPPORTED_LOCALES = ['en', 'th'] as const
export const SCROLL_THRESHOLD = 200
export const ANIMATION_DURATION = 300

export type SupportedLocale = typeof SUPPORTED_LOCALES[number]
