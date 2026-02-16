export const NAVIGATION_ITEMS = [
  { id: 'home', labelKey: `text.Home`, href: '#home', icon: 'uil-estate' },
  { id: 'about', labelKey: 'text.About', href: '#about', icon: 'uil-user' },
  { id: 'portfolio', labelKey: 'text.Portfolio', href: '#portfolio', icon: 'uil-scenery' },
  { id: 'contact', labelKey: 'text.Contact', href: '#contact', icon: 'uil-message' },
] as const

export type NavigationId = typeof NAVIGATION_ITEMS[number]['id']
