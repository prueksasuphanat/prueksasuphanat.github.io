import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/constants'

export const appConfig = {
  name: 'Portfolio - Pruek Suphanat',
  description: 'Frontend Developer Portfolio',
  author: 'Suphanat Panyakom',
  locale: {
    default: DEFAULT_LOCALE,
    supported: SUPPORTED_LOCALES,
  },
  contact: {
    email: 'suphanat.pruek@gmail.com',
    phone: '098-669-9033',
    discord: 'suphanat.pruek@gmail.com',
  },
} as const
