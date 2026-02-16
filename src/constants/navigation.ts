export const NAVIGATION_ITEMS = [
  { id: 'home', labelKey: 'text.home', href: '#home', icon: 'uil-estate' },
  { id: 'about', labelKey: 'text.about', href: '#about', icon: 'uil-user' },
  { id: 'portfolio', labelKey: 'text.portfolio', href: '#portfolio', icon: 'uil-scenery' },
  { id: 'contact', labelKey: 'text.contact', href: '#contact', icon: 'uil-message' },
] as const

export type NavigationId = typeof NAVIGATION_ITEMS[number]['id']
