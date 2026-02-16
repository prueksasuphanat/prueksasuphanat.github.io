export const SOCIAL_LINKS = {
  linkedin: {
    url: 'http://www.linkedin.com/in/suphanat-panyakom-1483522bb',
    icon: 'uil uil-linkedin-alt',
    label: 'LinkedIn Profile',
  },
  github: {
    url: 'https://github.com/prueksasuphanat',
    icon: 'uil uil-github-alt',
    label: 'GitHub Profile',
  },
  instagram: {
    url: 'https://www.instagram.com/py24.7/',
    icon: 'uil uil-instagram',
    label: 'Instagram Profile',
  },
  facebook: {
    url: 'https://www.facebook.com/suphanat.panyakom/',
    icon: 'bx bxl-facebook',
    label: 'Facebook Profile',
  },
} as const

export type SocialPlatform = keyof typeof SOCIAL_LINKS
