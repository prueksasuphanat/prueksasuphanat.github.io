# Portfolio Refactoring Tasks

## Overview

This document outlines a comprehensive refactoring plan combining:
- File structure reorganization (Scalable Portfolio - Option 2)
- Code review fixes (from CODE_REVIEW.md)
- Best practices implementation

**Strategy:** Refactor structure FIRST, then fix code issues within the new structure.

**Total Estimated Time:** 20-25 hours
**Recommended Timeline:** 2-3 weeks (part-time) or 1 week (full-time)

---

## Phase 1: Foundation & Setup (2-3 hours) ✅

### Goal
Prepare the project for refactoring without breaking existing functionality.


### Task 1.1: Create New Directory Structure ✅
**Priority:** Critical
**Time:** 30 minutes
**Dependencies:** None

**Actions:**
```bash
# Create all new directories
mkdir -p src/components/common
mkdir -p src/components/layout
mkdir -p src/components/features/about
mkdir -p src/components/features/education
mkdir -p src/components/features/portfolio
mkdir -p src/components/features/contact
mkdir -p src/composables/core
mkdir -p src/composables/features
mkdir -p src/config
mkdir -p src/constants
mkdir -p src/layouts
mkdir -p src/views
mkdir -p src/utils/helpers
mkdir -p src/i18n/locales/en
mkdir -p src/i18n/locales/th
mkdir -p src/stores/modules
mkdir -p src/router/guards
mkdir -p src/router/routes
```

**Verification:**
- [x] All directories created
- [x] No errors in terminal
- [x] Project still runs with `npm run dev`


---

### Task 1.2: Create Constants Files ✅
**Priority:** Critical
**Time:** 45 minutes
**Dependencies:** Task 1.1

**Actions:**

1. Create `src/constants/app.ts`:
```typescript
export const APP_NAME = 'Portfolio - Pruek Suphanat'
export const APP_DESCRIPTION = 'Frontend Developer Portfolio'
export const DEFAULT_LOCALE = 'en'
export const SUPPORTED_LOCALES = ['en', 'th'] as const
export const SCROLL_THRESHOLD = 200
export const ANIMATION_DURATION = 300

export type SupportedLocale = typeof SUPPORTED_LOCALES[number]
```

2. Create `src/constants/navigation.ts`:
```typescript
export const NAVIGATION_ITEMS = [
  { id: 'home', labelKey: 'text.home', href: '#home', icon: 'uil-estate' },
  { id: 'about', labelKey: 'text.about', href: '#about', icon: 'uil-user' },
  { id: 'portfolio', labelKey: 'text.portfolio', href: '#portfolio', icon: 'uil-scenery' },
  { id: 'contact', labelKey: 'text.contact', href: '#contact', icon: 'uil-message' },
] as const

export type NavigationId = typeof NAVIGATION_ITEMS[number]['id']
```

3. Create `src/constants/social.ts`:
```typescript
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
```

4. Create `src/constants/index.ts`:
```typescript
export * from './app'
export * from './navigation'
export * from './social'
```

**Verification:**
- [x] All constants files created
- [x] No TypeScript errors
- [x] Can import from `@/constants`


---

### Task 1.3: Create Config Files ✅
**Priority:** High
**Time:** 30 minutes
**Dependencies:** Task 1.2

**Actions:**

1. Create `src/config/app.ts`:
```typescript
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
```

2. Create `src/config/seo.ts`:
```typescript
export const seoConfig = {
  title: 'Suphanat Panyakom - Frontend Developer',
  description: 'Frontend Developer specializing in Vue.js, TypeScript, and modern web technologies',
  keywords: ['Frontend Developer', 'Vue.js', 'TypeScript', 'Web Development', 'Portfolio'],
  author: 'Suphanat Panyakom',
  ogImage: '/images/og-image.jpg',
  ogType: 'website',
}
```

3. Create `src/config/index.ts`:
```typescript
export * from './app'
export * from './seo'
```

**Verification:**
- [x] Config files created
- [x] No TypeScript errors
- [x] Can import from `@/config`


---

### Task 1.4: Create Utility Files ✅
**Priority:** High
**Time:** 45 minutes
**Dependencies:** Task 1.1

**Actions:**

1. Create `src/utils/storage.ts`:
```typescript
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.warn(`Failed to read from localStorage: ${key}`, error)
      return defaultValue
    }
  },

  set: <T>(key: string, value: T): boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.warn(`Failed to write to localStorage: ${key}`, error)
      return false
    }
  },

  remove: (key: string): boolean => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.warn(`Failed to remove from localStorage: ${key}`, error)
      return false
    }
  },

  clear: (): boolean => {
    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.warn('Failed to clear localStorage', error)
      return false
    }
  },
}
```

2. Update `src/utils/scroll.ts` (keep only unique functions):
```typescript
export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId)
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    })
  }
}

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
```

3. Create `src/utils/helpers/format.ts`:
```typescript
export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString()
}

export const formatYear = (year: number, locale: string): string => {
  if (locale === 'th') {
    return (year + 543).toString()
  }
  return year.toString()
}
```

4. Create `src/utils/index.ts`:
```typescript
export * from './storage'
export * from './scroll'
```

**Verification:**
- [x] All utility files created
- [x] No duplicate code
- [x] No TypeScript errors


---

## Phase 2: Data Layer Refactoring (2-3 hours) ✅

### Goal
Organize and complete all data files before moving components.

### Task 2.1: Create About Data File ✅
**Priority:** Critical
**Time:** 30 minutes
**Dependencies:** Phase 1

**Actions:**

Create `src/data/about.ts`:
```typescript
export const personalInfo = {
  name: {
    first: 'Suphanat',
    last: 'Panyakom',
    nickname: 'Pruek',
  },
  age: 27,
  dateOfBirth: '09.05.1997',
  location: 'Chiang Mai, Thailand',
  image: '/images/IMG_7121.jpg',
  experience: {
    months: 9,
    years: 0,
  },
  projectsCompleted: 4,
  education: {
    level: 'Master',
    degree: 'M.Eng.IE',
  },
} as const
```

**Verification:**
- [x] File created
- [x] Data is complete
- [x] TypeScript types are correct


---

### Task 2.2: Update Existing Data Files ✅
**Priority:** High
**Time:** 30 minutes
**Dependencies:** Task 2.1

**Actions:**

1. Update `src/data/education.ts` - ensure it matches types
2. Update `src/data/portfolio.ts` - ensure it matches types
3. Update `src/data/skills.ts` - ensure it matches types

**Verification:**
- [x] All data files updated
- [x] No TypeScript errors
- [x] Data structure is consistent

---

### Task 2.3: Update Type Definitions ✅
**Priority:** High
**Time:** 45 minutes
**Dependencies:** Task 2.2

**Actions:**

1. Create `src/types/about.ts`:
```typescript
export interface PersonalInfo {
  name: {
    first: string
    last: string
    nickname: string
  }
  age: number
  dateOfBirth: string
  location: string
  image: string
  experience: {
    months: number
    years: number
  }
  projectsCompleted: number
  education: {
    level: string
    degree: string
  }
}
```

2. Create `src/types/components.ts`:
```typescript
import type { Project } from './portfolio'
import type { SkillCategory } from './skills'
import type { EducationItem, ExperienceItem } from './education'

export interface NavbarProps {
  fixed?: boolean
  transparent?: boolean
}

export interface PortfolioCardProps {
  project: Project
  showDetails?: boolean
}

export interface SkillCategoryProps {
  category: SkillCategory
}

export interface TimelineItemProps {
  item: EducationItem | ExperienceItem
  index: number
}
```

3. Update `src/types/index.ts`:
```typescript
export * from './about'
export * from './components'
export * from './education'
export * from './portfolio'
export * from './skills'
```

**Verification:**
- [x] All type files updated
- [x] No TypeScript errors
- [x] Types are exported correctly

---

## Phase 3: Store Refactoring (1-2 hours) ✅

### Goal
Refactor Pinia stores to follow best practices and new structure.

### Task 3.1: Refactor App Store ✅
**Priority:** Critical
**Time:** 45 minutes
**Dependencies:** Phase 2

**Actions:**

1. Move `src/stores/app.ts` to `src/stores/modules/app.ts`

2. Update `src/stores/modules/app.ts`:
```typescript
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { storage } from '@/utils/storage'
import { DEFAULT_LOCALE, type SupportedLocale } from '@/constants'

export const useAppStore = defineStore('app', () => {
  // State
  const locale = ref<SupportedLocale>(
    storage.get('lang', DEFAULT_LOCALE) as SupportedLocale
  )
  const isMenuOpen = ref(false)

  // Getters
  const currentLocale = computed(() => locale.value)

  // Actions
  const setLocale = (newLocale: SupportedLocale) => {
    locale.value = newLocale
    storage.set('lang', newLocale)
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const openMenu = () => {
    isMenuOpen.value = true
  }

  return {
    // State
    locale,
    isMenuOpen,
    // Getters
    currentLocale,
    // Actions
    setLocale,
    toggleMenu,
    closeMenu,
    openMenu,
  }
})
```

3. Update `src/stores/index.ts`:
```typescript
export * from './modules/app'
```

**Verification:**
- [x] Store moved to modules directory
- [x] Uses storage utility
- [x] Uses constants
- [x] No TypeScript errors
- [x] App still works


---

### Task 3.2: Create UI Store (Optional)
**Priority:** Low
**Time:** 30 minutes
**Dependencies:** Task 3.1

**Actions:**

Create `src/stores/modules/ui.ts`:
```typescript
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // State
  const showScrollTop = ref(false)
  const isLoading = ref(false)

  // Actions
  const setScrollTop = (value: boolean) => {
    showScrollTop.value = value
  }

  const setLoading = (value: boolean) => {
    isLoading.value = value
  }

  return {
    showScrollTop,
    isLoading,
    setScrollTop,
    setLoading,
  }
})
```

Update `src/stores/index.ts`:
```typescript
export * from './modules/app'
export * from './modules/ui'
```

**Verification:**
- [ ] UI store created
- [ ] Exported correctly
- [ ] No TypeScript errors

---

## Phase 4: Composables Refactoring (1-2 hours) ✅

### Goal
Organize composables and remove code duplication.

### Task 4.1: Refactor useScroll Composable ✅
**Priority:** High
**Time:** 30 minutes
**Dependencies:** Phase 3

**Actions:**

1. Move `src/composables/useScroll.ts` to `src/composables/core/useScroll.ts`

2. Update `src/composables/core/useScroll.ts`:
```typescript
import { ref, onMounted, onUnmounted } from 'vue'
import { scrollToTop as scrollToTopUtil } from '@/utils/scroll'
import { SCROLL_THRESHOLD } from '@/constants'

export const useScroll = (threshold: number = SCROLL_THRESHOLD) => {
  const showScroll = ref(false)

  const handleScroll = () => {
    showScroll.value = window.scrollY >= threshold
  }

  const scrollToTop = () => {
    scrollToTopUtil()
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    showScroll,
    scrollToTop,
  }
}
```

**Verification:**
- [x] Composable moved
- [x] Uses constants
- [x] Uses utils
- [x] No code duplication
- [x] No TypeScript errors


---

### Task 4.2: Create useLanguage Composable ✅
**Priority:** High
**Time:** 30 minutes
**Dependencies:** Task 4.1

**Actions:**

Create `src/composables/features/useLanguage.ts`:
```typescript
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores'
import { storeToRefs } from 'pinia'
import type { SupportedLocale } from '@/constants'

export const useLanguage = () => {
  const { locale: i18nLocale } = useI18n()
  const appStore = useAppStore()
  const { locale, currentLocale } = storeToRefs(appStore)

  const changeLanguage = (newLocale: SupportedLocale) => {
    appStore.setLocale(newLocale)
    i18nLocale.value = newLocale
  }

  const toggleLanguage = () => {
    const newLocale = locale.value === 'en' ? 'th' : 'en'
    changeLanguage(newLocale)
  }

  return {
    locale: computed(() => locale.value),
    currentLocale,
    changeLanguage,
    toggleLanguage,
  }
}
```

**Verification:**
- [x] Composable created
- [x] Uses store correctly
- [x] No TypeScript errors

---

### Task 4.3: Create Composables Index ✅
**Priority:** Medium
**Time:** 15 minutes
**Dependencies:** Task 4.2

**Actions:**

1. Create `src/composables/core/index.ts`:
```typescript
export * from './useScroll'
```

2. Create `src/composables/features/index.ts`:
```typescript
export * from './useLanguage'
```

3. Create `src/composables/index.ts`:
```typescript
export * from './core'
export * from './features'
```

**Verification:**
- [x] Index files created
- [x] Can import from `@/composables`
- [x] No TypeScript errors

---

## Phase 5: Component Migration (4-6 hours) ✅

### Goal
Move and refactor components into new structure.

### Task 5.1: Create Layout Components ✅
**Priority:** Critical
**Time:** 1 hour
**Dependencies:** Phase 4

**Actions:**

1. Move `src/components/Navbar.vue` to `src/components/layout/TheHeader.vue`

2. Refactor `src/components/layout/TheHeader.vue`:
```vue
<template>
  <header class="header" id="header">
    <nav class="nav container">
      <div class="logo__container">
        <a href="#" class="nav__logo">{{ appConfig.author.split(' ')[0] }}</a>
        <LanguageSwitch />
      </div>

      <div class="nav__menu" :class="{ 'show-menu': isMenuOpen }">
        <ul class="nav__list grid">
          <li v-for="item in NAVIGATION_ITEMS" :key="item.id" class="nav__item">
            <a :href="item.href" class="nav__link" @click="closeMenu">
              <i :class="`uil ${item.icon} nav__icon`"></i>
              {{ t(item.labelKey) }}
            </a>
          </li>
        </ul>
        <button
          class="nav__close"
          @click="closeMenu"
          aria-label="Close navigation menu"
        >
          <i class="uil uil-times"></i>
        </button>
      </div>

      <button
        class="nav__toggle"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <i class="uil uil-apps"></i>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'
import { NAVIGATION_ITEMS } from '@/constants'
import { appConfig } from '@/config'
import LanguageSwitch from '@/components/common/LanguageSwitch.vue'

const { t } = useI18n()
const appStore = useAppStore()
const { isMenuOpen } = storeToRefs(appStore)
const { toggleMenu, closeMenu } = appStore
</script>
```

3. Move `src/components/Footer.vue` to `src/components/layout/TheFooter.vue`

4. Refactor `src/components/layout/TheFooter.vue`:
```vue
<template>
  <footer class="footer">
    <div class="footer__container container">
      <h1 class="footer__title">{{ appConfig.author.split(' ')[0] }}</h1>
      
      <ul class="footer__list">
        <li v-for="item in NAVIGATION_ITEMS" :key="item.id">
          <a
            :href="item.href"
            class="footer__link"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ t(item.labelKey) }}
          </a>
        </li>
      </ul>

      <div class="footer__social">
        <a
          v-for="(link, platform) in SOCIAL_LINKS"
          :key="platform"
          class="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
          :href="link.url"
          :aria-label="link.label"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
    </div>

    <button
      class="scrollup"
      :class="{ 'show-scroll': showScroll }"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <i class="uil uil-arrow-up scrollup__icon"></i>
    </button>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScroll } from '@/composables'
import { scrollToSection } from '@/utils/scroll'
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/constants'
import { appConfig } from '@/config'

const { t } = useI18n()
const { showScroll, scrollToTop } = useScroll()
</script>
```

**Verification:**
- [x] Layout components moved and renamed
- [x] Uses constants and config
- [x] Uses store correctly
- [x] Accessibility attributes added
- [x] No TypeScript errors
- [x] App still works


---

### Task 5.2: Create Common Components ✅
**Priority:** High
**Time:** 45 minutes
**Dependencies:** Task 5.1

**Actions:**

1. Create `src/components/common/LanguageSwitch.vue`:
```vue
<template>
  <div class="checkbox_item">
    <span class="th">TH</span>
    <label class="checkbox_wrap">
      <input
        class="toggle"
        type="checkbox"
        :checked="locale === 'en'"
        @change="toggleLanguage"
        aria-label="Toggle language"
      />
      <span class="checkbox_mark"></span>
    </label>
    <span class="en">EN</span>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables'

const { locale, toggleLanguage } = useLanguage()
</script>
```

2. Create `src/components/common/SocialLinks.vue`:
```vue
<template>
  <div class="social-links">
    <a
      v-for="(link, platform) in SOCIAL_LINKS"
      :key="platform"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
      :aria-label="link.label"
    >
      <i :class="link.icon"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import { SOCIAL_LINKS } from '@/constants'
</script>
```

3. Create `src/components/common/LoadingSpinner.vue`:
```vue
<template>
  <div class="loading-spinner" role="status" aria-live="polite">
    <div class="spinner"></div>
    <span class="sr-only">{{ t('text.loading') }}</span>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--primary-color, #000);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
```

**Verification:**
- [x] Common components created
- [x] Uses composables
- [x] Accessibility compliant
- [x] No TypeScript errors


---

### Task 5.3: Create Feature Components - About ✅
**Priority:** High
**Time:** 1 hour
**Dependencies:** Task 5.2

**Actions:**

1. Create `src/components/features/about/AboutHero.vue`:
```vue
<template>
  <section class="about section" id="about">
    <h2 class="section__title">{{ t('text.aboutMe') }}</h2>
    <div class="about__container container grid">
      <img
        :src="personalInfo.image"
        :alt="`${personalInfo.name.first} ${personalInfo.name.last}`"
        class="about__img"
        loading="lazy"
      />
      <AboutInfo />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/about'
import AboutInfo from './AboutInfo.vue'

const { t } = useI18n()
</script>
```

2. Create `src/components/features/about/AboutInfo.vue`:
```vue
<template>
  <div class="about__data">
    <div class="about__info grid">
      <div class="about__box">
        <i class="material-symbols-outlined about__icon">editor_choice</i>
        <h3 class="about__title">{{ t('text.experience') }}</h3>
        <span class="about__subtitle">
          {{ personalInfo.experience.months }} {{ t('text.month') }}
          {{ personalInfo.experience.years }} {{ t('text.year') }}
        </span>
      </div>

      <div class="about__box">
        <i class="material-symbols-outlined about__icon">business_center</i>
        <h3 class="about__title">{{ t('text.projectComplete') }}</h3>
        <span class="about__subtitle">
          {{ personalInfo.projectsCompleted }} {{ t('text.projects') }}
        </span>
      </div>

      <div class="about__box">
        <i class="material-symbols-outlined about__icon">school</i>
        <h3 class="about__title">{{ t('text.education') }}</h3>
        <span class="about__subtitle">
          {{ t('text.bEng') }}, {{ t('text.mEngIE') }}
        </span>
      </div>
    </div>

    <div class="about__description">
      <p>{{ personalInfo.name.first }} {{ personalInfo.name.last }}</p>
      <p>{{ t('text.age') }}: {{ personalInfo.age }}</p>
      <p>{{ t('text.dateOfBirth') }}: {{ personalInfo.dateOfBirth }}</p>
    </div>

    <a download="" href="" class="button button--flex about__btn">
      {{ t('text.downloadCV') }}
      <span class="material-symbols-outlined">description</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/about'

const { t } = useI18n()
</script>
```

3. Create `src/components/features/about/SkillsList.vue`:
```vue
<template>
  <section class="skill section">
    <h2 class="section__title">{{ t('text.skills') }}</h2>
    <div class="skills__container container grid">
      <SkillCategory
        v-for="category in skillsData"
        :key="category.title"
        :category="category"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { skillsData } from '@/data/skills'
import SkillCategory from './SkillCategory.vue'

const { t } = useI18n()
</script>
```

4. Create `src/components/features/about/SkillCategory.vue`:
```vue
<template>
  <div class="skills__content">
    <h3 class="skills__title">{{ category.title }}</h3>
    <div class="skills__box">
      <div class="skills__group">
        <div
          v-for="skill in category.skills"
          :key="skill.name"
          class="skills__data"
        >
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 class="skills__name">{{ skill.name }}</h3>
            <span v-if="skill.level" class="skills__level">
              {{ t(`text.${skill.level}`) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { SkillCategory } from '@/types'

defineProps<{
  category: SkillCategory
}>()

const { t } = useI18n()
</script>
```

**Verification:**
- [x] About feature components created
- [x] Uses data files
- [x] Props properly typed
- [x] No hard-coded data
- [x] No TypeScript errors


---

### Task 5.4: Create Feature Components - Portfolio ✅
**Priority:** High
**Time:** 45 minutes
**Dependencies:** Task 5.3

**Actions:**

1. Create `src/components/features/portfolio/PortfolioGrid.vue`:
```vue
<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">{{ t('text.portfolio') }}</h2>
    
    <div class="portfolio__container container">
      <PortfolioCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/portfolio'
import PortfolioCard from './PortfolioCard.vue'

const { t } = useI18n()
</script>
```

2. Create `src/components/features/portfolio/PortfolioCard.vue`:
```vue
<template>
  <div class="portfolio__item grid">
    <div class="portfolio__img">
      <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        width="600"
        height="400"
      />
    </div>

    <div class="portfolio__content">
      <h3 class="portfolio__title">
        {{ project.title }} ({{ t(`text.${project.year}`) }})
      </h3>

      <p class="portfolio__description">
        {{
          project.description === 'ContentDemo4'
            ? t('text.contentDemo4')
            : project.description
        }}
      </p>

      <div class="portfolio__subtitle">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="portfolio__tech"
        >
          {{ tech }}
        </span>
      </div>

      <div class="portfolio__link">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__button portfolio__button"
          aria-label="View code on GitHub"
        >
          <i class="bx bxl-github portfolio__icon"></i>
          Code
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>

        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__button portfolio__button"
          aria-label="View live demo"
        >
          <i class="bx bx-code-alt portfolio__icon"></i>
          Demo
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Project } from '@/types'

defineProps<{
  project: Project
}>()

const { t } = useI18n()
</script>
```

**Verification:**
- [x] Portfolio components created
- [x] Uses data files
- [x] Props properly typed
- [x] Accessibility attributes added
- [x] Images have lazy loading
- [x] No TypeScript errors


---

### Task 5.5: Create Feature Components - Education ✅
**Priority:** High
**Time:** 1 hour
**Dependencies:** Task 5.4

**Actions:**

1. Create `src/components/features/education/EducationTimeline.vue`:
```vue
<template>
  <section class="education section">
    <h2 class="section__title">
      {{ t('text.education') }} & {{ t('text.experience') }}
    </h2>

    <div class="education__container container">
      <div class="education__tabs">
        <button
          class="education__button button--flex"
          :class="{ education__active: activeTab === 'education' }"
          @click="activeTab = 'education'"
          role="tab"
          :aria-selected="activeTab === 'education'"
        >
          <i class="uil uil-graduation-cap education__icon"></i>
          {{ t('text.education') }}
        </button>

        <button
          class="education__button button--flex"
          :class="{ education__active: activeTab === 'experience' }"
          @click="activeTab = 'experience'"
          role="tab"
          :aria-selected="activeTab === 'experience'"
        >
          <i class="uil uil-briefcase-alt education__icon"></i>
          {{ t('text.experience') }}
        </button>
      </div>

      <div class="education__sections">
        <div
          class="education__content"
          :class="{ 'education__content-active': activeTab === 'experience' }"
          role="tabpanel"
        >
          <TimelineItem
            v-for="(item, index) in experienceData"
            :key="item.id"
            :item="item"
            :index="index"
            type="experience"
          />
        </div>

        <div
          class="education__content"
          :class="{ 'education__content-active': activeTab === 'education' }"
          role="tabpanel"
        >
          <TimelineItem
            v-for="(item, index) in educationData"
            :key="item.id"
            :item="item"
            :index="index"
            type="education"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { educationData, experienceData } from '@/data/education'
import TimelineItem from './TimelineItem.vue'

const { t } = useI18n()
const activeTab = ref<'education' | 'experience'>('education')
</script>
```

2. Create `src/components/features/education/TimelineItem.vue`:
```vue
<template>
  <div class="education__data">
    <div v-if="shouldShowLeft">
      <h3 class="education__title">{{ getTitle() }}</h3>
      <span class="education__subtitle">{{ getSubtitle() }}</span>
      <div class="education__calender">
        <i class="uil uil-calendar-alt"></i>
        {{ t(`text.${item.period.start}`) }} - {{ t(`text.${item.period.end}`) }}
      </div>
    </div>

    <div>
      <span class="education__rounder"></span>
      <span class="education__line"></span>
    </div>

    <div v-if="!shouldShowLeft">
      <h3 class="education__title">{{ getTitle() }}</h3>
      <span class="education__subtitle">{{ getSubtitle() }}</span>
      <div class="education__calender">
        <i class="uil uil-calendar-alt"></i>
        {{ t(`text.${item.period.start}`) }} - {{ t(`text.${item.period.end}`) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { EducationItem, ExperienceItem } from '@/types'

const props = defineProps<{
  item: EducationItem | ExperienceItem
  index: number
  type: 'education' | 'experience'
}>()

const { t } = useI18n()

const shouldShowLeft = computed(() => {
  return props.index % 2 === 0
})

const getTitle = () => {
  if ('position' in props.item) {
    return props.item.title
  }
  return t(`text.${props.item.title}`)
}

const getSubtitle = () => {
  if ('position' in props.item) {
    return props.item.position
  }
  return t(`text.${props.item.subtitle}`)
}
</script>
```

**Verification:**
- [ ] Education components created
- [ ] Uses data files
- [ ] Props properly typed
- [ ] Accessibility attributes added
- [ ] No TypeScript errors


---

### Task 5.6: Create Feature Components - Contact ✅
**Priority:** Medium
**Time:** 45 minutes
**Dependencies:** Task 5.5

**Actions:**

1. Create `src/components/features/contact/ContactSection.vue`:
```vue
<template>
  <section class="Contact section" id="contact">
    <h2 class="section__title">{{ t('text.contactMe') }}</h2>
    <div class="contact__container container grid">
      <ContactInfo />
      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContactInfo from './ContactInfo.vue'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
</script>
```

2. Create `src/components/features/contact/ContactInfo.vue`:
```vue
<template>
  <div class="contact__content">
    <h3 class="contact__title">{{ t('text.talkToMe') }}</h3>
    <div class="contact__info">
      <div class="contact__card">
        <i class="bx bx-mail-send contact__card-icon"></i>
        <h3 class="contact__card-title">Email</h3>
        <span class="contact__card-data">{{ appConfig.contact.email }}</span>
        <a
          :href="`mailto:${appConfig.contact.email}`"
          class="contact__button"
          aria-label="Send email"
        >
          {{ t('text.writeMe') }}
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>

      <div class="contact__card">
        <i class="bx bx-phone-call contact__card-icon"></i>
        <h3 class="contact__card-title">Phone</h3>
        <span class="contact__card-data">{{ appConfig.contact.phone }}</span>
        <a
          :href="`tel:${appConfig.contact.phone}`"
          class="contact__button"
          aria-label="Call phone"
        >
          {{ t('text.callMe') }}
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>

      <div class="contact__card">
        <i class="bx bxl-discord-alt bx-tada contact__card-icon"></i>
        <h3 class="contact__card-title">Discord</h3>
        <span class="contact__card-data">{{ appConfig.contact.discord }}</span>
        <a
          href="https://www.discordapp.com/users/389665555906297856"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__button"
          aria-label="Message on Discord"
        >
          {{ t('text.writeMe') }}
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { appConfig } from '@/config'

const { t } = useI18n()
</script>
```

3. Create `src/components/features/contact/ContactForm.vue`:
```vue
<template>
  <div class="contact__content">
    <h3 class="contact__title">{{ t('text.writeSomething') }}</h3>
    <form @submit.prevent="handleSubmit" class="contact__form">
      <div class="contact__form-div">
        <label class="contact__form-tag" for="contact-name">
          {{ t('text.name') }}
        </label>
        <input
          id="contact-name"
          v-model="formData.name"
          type="text"
          name="name"
          class="contact__form-input"
          :placeholder="t('text.insertYourName')"
          required
        />
      </div>

      <div class="contact__form-div">
        <label class="contact__form-tag" for="contact-email">
          {{ t('text.email') }}
        </label>
        <input
          id="contact-email"
          v-model="formData.email"
          type="email"
          name="email"
          class="contact__form-input"
          :placeholder="t('text.insertYourEmail')"
          required
        />
      </div>

      <div class="contact__form-div contact__form-area">
        <label class="contact__form-tag" for="contact-message">
          {{ t('text.message') }}
        </label>
        <textarea
          id="contact-message"
          v-model="formData.message"
          name="message"
          cols="30"
          rows="10"
          class="contact__form-input"
          :placeholder="t('text.writeSomething')"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="button button--flex about__btn"
      >
        {{ isSubmitting ? t('text.sending') : t('text.sendMessage') }}
        <span class="material-symbols-outlined">send</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
    alert(t('text.messageSent'))
    // Reset form
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Form submission error:', error)
    alert(t('text.messageError'))
  } finally {
    isSubmitting.value = false
  }
}
</script>
```

**Verification:**
- [x] Contact components created
- [x] Form is functional
- [x] Uses config for contact info
- [x] Accessibility attributes added
- [x] No TypeScript errors


---

### Task 5.7: Create Home Hero Component ✅
**Priority:** High
**Time:** 30 minutes
**Dependencies:** Task 5.6

**Actions:**

Create `src/components/features/home/HomeHero.vue`:
```vue
<template>
  <section class="home section" id="home">
    <div class="home__container container">
      <div class="home__content grid">
        <SocialLinks class="home__social" />

        <div class="home__img"></div>

        <div class="home__data">
          <h1 class="home__title">
            {{ t('text.hello') }}, {{ t('text.imPruek') }} 👋
          </h1>
          <h3 class="home__subtitle">
            {{ personalInfo.name.first }} {{ personalInfo.name.last }}
          </h3>
          <p class="home__description">
            {{ t('text.profileDescription') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/about'
import SocialLinks from '@/components/common/SocialLinks.vue'

const { t } = useI18n()
</script>
```

**Verification:**
- [x] Home hero component created
- [x] Uses data files
- [x] Uses common components
- [x] No TypeScript errors

---

## Phase 6: Views & Layouts (1-2 hours) ✅

### Goal
Create views and layouts to properly structure the application.

### Task 6.1: Create Default Layout ✅
**Priority:** High
**Time:** 30 minutes
**Dependencies:** Phase 5

**Actions:**

Create `src/layouts/DefaultLayout.vue`:
```vue
<template>
  <div class="default-layout">
    <TheHeader />
    <main class="main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>
```

**Verification:**
- [x] Layout created
- [x] Uses layout components
- [x] No TypeScript errors


---

### Task 6.2: Create Home View ✅
**Priority:** Critical
**Time:** 45 minutes
**Dependencies:** Task 6.1

**Actions:**

Create `src/views/HomeView.vue`:
```vue
<template>
  <div class="home-view">
    <HomeHero />
    <AboutHero />
    <SkillsList />
    <EducationTimeline />
    <PortfolioGrid />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HomeHero from '@/components/features/home/HomeHero.vue'
import AboutHero from '@/components/features/about/AboutHero.vue'
import SkillsList from '@/components/features/about/SkillsList.vue'
import EducationTimeline from '@/components/features/education/EducationTimeline.vue'
import PortfolioGrid from '@/components/features/portfolio/PortfolioGrid.vue'
import ContactSection from '@/components/features/contact/ContactSection.vue'
</script>
```

**Verification:**
- [x] Home view created
- [x] All sections imported
- [x] No TypeScript errors

---

### Task 6.3: Create 404 View ✅
**Priority:** Low
**Time:** 15 minutes
**Dependencies:** Task 6.2

**Actions:**

Create `src/views/NotFoundView.vue`:
```vue
<template>
  <div class="not-found">
    <div class="not-found__container container">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__description">{{ t('text.pageNotFound') }}</p>
      <router-link to="/" class="button button--flex">
        {{ t('text.goHome') }}
        <i class="uil uil-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.not-found__title {
  font-size: 6rem;
  margin-bottom: 1rem;
}

.not-found__description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
</style>
```

**Verification:**
- [x] 404 view created
- [x] Styled appropriately
- [x] No TypeScript errors

---

## Phase 7: Router Configuration (1 hour) ✅

### Goal
Configure Vue Router properly with guards and routes.

### Task 7.1: Create Router Guards ✅
**Priority:** Medium
**Time:** 30 minutes
**Dependencies:** Phase 6

**Actions:**

Create `src/router/guards/scroll.ts`:
```typescript
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const scrollBehaviorGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  savedPosition: any
) => {
  if (savedPosition) {
    return savedPosition
  } else if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
    }
  } else {
    return { top: 0 }
  }
}
```

**Verification:**
- [x] Guard created
- [x] Properly typed
- [x] No TypeScript errors


---

### Task 7.2: Update Router Configuration ✅
**Priority:** Critical
**Time:** 30 minutes
**Dependencies:** Task 7.1

**Actions:**

Update `src/router/index.ts`:
```typescript
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { scrollBehaviorGuard } from './guards/scroll'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: '404 - Page Not Found',
    },
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior: scrollBehaviorGuard,
})

// Navigation guard for page titles
router.beforeEach((to, from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = `${title} - Portfolio Pruek`
  }
  next()
})

export default router
```

**Verification:**
- [x] Router updated
- [x] Uses guards
- [x] Lazy loading enabled
- [x] Meta tags configured
- [x] No TypeScript errors
- [x] App still works

---

## Phase 8: i18n Refactoring (1-2 hours) ✅

### Goal
Reorganize i18n files and add missing translations.

### Task 8.1: Reorganize i18n Structure ✅
**Priority:** High
**Time:** 1 hour
**Dependencies:** Phase 7

**Actions:**

1. Create `src/i18n/locales/en/common.ts`:
```typescript
export default {
  home: 'Home',
  about: 'About',
  aboutMe: 'About Me',
  portfolio: 'Portfolio',
  contact: 'Contact',
  education: 'Education',
  experience: 'Experience',
  skills: 'Skills',
  loading: 'Loading...',
  error: 'Error',
  success: 'Success',
}
```

2. Create `src/i18n/locales/en/about.ts`:
```typescript
export default {
  hello: 'Hello',
  imPruek: "I'm Pruek",
  profileDescription: 'Frontend Developer passionate about creating beautiful and functional web applications',
  age: 'Age',
  dateOfBirth: 'Date of Birth',
  downloadCV: 'Download CV',
  month: 'Month',
  year: 'Year',
  projectComplete: 'Complete',
  projects: 'Projects',
  bEng: 'B.Eng.IE',
  mEngIE: 'M.Eng.IE',
  littlebit: 'Little bit',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}
```

3. Create `src/i18n/locales/en/portfolio.ts`:
```typescript
export default {
  contentDemo4: 'This website is created for practicing Vue with TypeScript on the frontend, while the backend API is developed using PHP with database management. The website consists of two sections: Admin and User. The Admin can log in with the username: admin and password: 123456, while the User can log in with the username: user and password: 123456.',
  y2023: '2023',
  y2024: '2024',
  y2025: '2025',
}
```

4. Create `src/i18n/locales/en/contact.ts`:
```typescript
export default {
  contactMe: 'Contact Me',
  talkToMe: 'Talk to me',
  writeMe: 'Write me',
  callMe: 'Call me',
  writeSomething: 'Write something to me',
  name: 'Name',
  email: 'Email',
  message: 'Message',
  sendMessage: 'Send Message',
  sending: 'Sending...',
  messageSent: 'Message sent successfully!',
  messageError: 'Failed to send message. Please try again.',
  insertYourName: 'Insert your name',
  insertYourEmail: 'Insert your email',
}
```

5. Create `src/i18n/locales/en/education.ts`:
```typescript
export default {
  highSchool: 'High School',
  phadungPanya: 'Phadung Panya School',
  tak: 'Tak',
  thailand: 'Thailand',
  university: 'University',
  chiangMai: 'Chiang Mai',
  bEngFull: 'B.Eng.',
  mEngIEFull: 'M.Eng.IE',
  industrialEng: 'Industrial Engineering',
  jan: 'Jan',
  feb: 'Feb',
  mar: 'Mar',
  apr: 'Apr',
  may: 'May',
  jun: 'Jun',
  jul: 'Jul',
  aug: 'Aug',
  sep: 'Sep',
  oct: 'Oct',
  nov: 'Nov',
  dec: 'Dec',
}
```

6. Create `src/i18n/locales/en/index.ts`:
```typescript
import common from './common'
import about from './about'
import portfolio from './portfolio'
import contact from './contact'
import education from './education'

export default {
  text: {
    ...common,
    ...about,
    ...portfolio,
    ...contact,
    ...education,
    pageNotFound: 'Page not found',
    goHome: 'Go Home',
  },
}
```

7. Repeat for Thai translations in `src/i18n/locales/th/`

**Verification:**
- [x] i18n files reorganized
- [x] All translations added
- [x] No missing keys
- [x] No TypeScript errors
- [x] App still works


---

### Task 8.2: Update i18n Index ✅
**Priority:** High
**Time:** 15 minutes
**Dependencies:** Task 8.1

**Actions:**

Update `src/i18n/index.ts`:
```typescript
import { createI18n } from 'vue-i18n'
import en from './locales/en'
import th from './locales/th'
import { storage } from '@/utils/storage'
import { DEFAULT_LOCALE, type SupportedLocale } from '@/constants'

const savedLocale = storage.get<SupportedLocale>('lang', DEFAULT_LOCALE)

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    en,
    th,
  },
})

export default i18n
```

**Verification:**
- [x] i18n index updated
- [x] Uses storage utility
- [x] Uses constants
- [x] No TypeScript errors

---

## Phase 9: App.vue Refactoring (30 minutes) ✅

### Goal
Update App.vue to use new structure.

### Task 9.1: Refactor App.vue ✅
**Priority:** Critical
**Time:** 30 minutes
**Dependencies:** Phase 8

**Actions:**

Update `src/App.vue`:
```vue
<template>
  <div id="app">
    <DefaultLayout>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

**Verification:**
- [x] App.vue updated
- [x] Uses layout
- [x] Uses router-view
- [x] Transition added
- [x] No TypeScript errors
- [x] App works correctly

---

## Phase 10: Cleanup & Testing (2-3 hours) ✅

### Goal
Remove old files and test all functionality.

### Task 10.1: Remove Old Component Files ✅
**Priority:** Critical
**Time:** 30 minutes
**Dependencies:** Phase 9

**Actions:**

```bash
# Remove old component files (after verifying new ones work)
rm src/components/Home.vue
rm src/components/AboutMe.vue
rm src/components/Education.vue
rm src/components/Portfolio.vue
rm src/components/Contact.vue
rm src/components/Navbar.vue
rm src/components/Footer.vue

# Remove old i18n files
rm src/i18n/locales/en.ts
rm src/i18n/locales/th.ts
```

**Verification:**
- [x] Old files removed
- [x] App still works
- [x] No broken imports
- [x] No console errors

---

### Task 10.2: Update Import Paths ✅
**Priority:** Critical
**Time:** 1 hour
**Dependencies:** Task 10.1

**Actions:**

1. Search and replace all old import paths
2. Update any remaining references to old structure
3. Fix any broken imports

**Verification:**
- [x] All imports updated
- [x] No TypeScript errors
- [x] No console errors
- [x] App works correctly

---

### Task 10.3: Test All Features ✅
**Priority:** Critical
**Time:** 1 hour
**Dependencies:** Task 10.2

**Test Checklist:**
- [x] Navigation works (all links)
- [x] Language switch works
- [x] Scroll to top works
- [x] Mobile menu works
- [x] All sections display correctly
- [x] Portfolio cards display
- [x] Education timeline works
- [x] Contact form works (if implemented)
- [x] Social links work
- [x] Footer links work
- [x] 404 page works
- [x] Page transitions work
- [x] No console errors
- [x] No TypeScript errors
- [x] Responsive design works

---

### Task 10.4: Run Linting & Formatting ✅
**Priority:** High
**Time:** 15 minutes
**Dependencies:** Task 10.3

**Actions:**

```bash
# Format code
npm run format

# Lint and fix
npm run lint

# Type check
npm run build
```

**Verification:**
- [x] No linting errors
- [x] Code formatted
- [x] Build succeeds
- [x] No TypeScript errors

---

## Phase 11: Performance Optimization (1-2 hours) ✅

### Goal
Optimize application performance.

### Task 11.1: Add Image Optimization ✅
**Priority:** Medium
**Time:** 30 minutes
**Dependencies:** Phase 10

**Actions:**

1. Add lazy loading to all images (already done in components)
2. Add width/height attributes to images
3. Consider using WebP format for images

**Verification:**
- [x] All images have lazy loading
- [x] Images have dimensions
- [x] Page load improved

---

### Task 11.2: Add Code Splitting ✅
**Priority:** Medium
**Time:** 30 minutes
**Dependencies:** Task 11.1

**Actions:**

Update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia', 'vue-i18n'],
          'components': [
            './src/components/layout/TheHeader.vue',
            './src/components/layout/TheFooter.vue',
          ],
        },
      },
    },
  },
})
```

**Verification:**
- [x] Build creates separate chunks
- [x] Bundle size reduced
- [x] App still works

---

### Task 11.3: Add Loading States ✅
**Priority:** Low
**Time:** 30 minutes
**Dependencies:** Task 11.2

**Actions:**

1. Add loading spinner to async components
2. Add loading state to contact form
3. Add skeleton loaders (optional)

**Verification:**
- [x] Loading states work
- [x] User experience improved
- [x] No errors

---

## Phase 12: Documentation & Final Touches (1-2 hours) ✅

### Goal
Document the new structure and add final improvements.

### Task 12.1: Update README ✅
**Priority:** High
**Time:** 30 minutes
**Dependencies:** Phase 11

**Actions:**

Update `README.md` with:
- New project structure
- Updated setup instructions
- New features
- Architecture decisions

**Verification:**
- [x] README updated
- [x] Instructions accurate
- [x] Examples work

---

### Task 12.2: Add Environment Variables ✅
**Priority:** Medium
**Time:** 30 minutes
**Dependencies:** Task 12.1

**Actions:**

1. Create `.env.example`:
```env
VITE_APP_TITLE=Portfolio - Pruek Suphanat
VITE_APP_DESCRIPTION=Frontend Developer Portfolio
VITE_CONTACT_EMAIL=suphanat.pruek@gmail.com
VITE_CONTACT_PHONE=098-669-9033
```

2. Create `.env.development` and `.env.production`

3. Update config files to use env variables

**Verification:**
- [x] Env files created
- [x] Config uses env variables
- [x] App works in both modes

---

### Task 12.3: Add SEO Meta Tags ✅
**Priority:** Medium
**Time:** 30 minutes
**Dependencies:** Task 12.2

**Actions:**

Update `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Frontend Developer specializing in Vue.js, TypeScript, and modern web technologies" />
    <meta name="keywords" content="Frontend Developer, Vue.js, TypeScript, Web Development, Portfolio" />
    <meta name="author" content="Suphanat Panyakom" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="Suphanat Panyakom - Frontend Developer" />
    <meta property="og:description" content="Frontend Developer Portfolio" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/og-image.jpg" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Suphanat Panyakom - Frontend Developer" />
    <meta name="twitter:description" content="Frontend Developer Portfolio" />
    
    <title>Portfolio - Pruek Suphanat</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

**Verification:**
- [x] Meta tags added
- [x] SEO improved
- [x] Social sharing works

---

## Summary & Checklist

### Total Time Estimate: 20-25 hours

### Phase Breakdown:
- Phase 1: Foundation & Setup (2-3 hours)
- Phase 2: Data Layer Refactoring (2-3 hours)
- Phase 3: Store Refactoring (1-2 hours)
- Phase 4: Composables Refactoring (1-2 hours)
- Phase 5: Component Migration (4-6 hours)
- Phase 6: Views & Layouts (1-2 hours)
- Phase 7: Router Configuration (1 hour)
- Phase 8: i18n Refactoring (1-2 hours)
- Phase 9: App.vue Refactoring (30 minutes)
- Phase 10: Cleanup & Testing (2-3 hours)
- Phase 11: Performance Optimization (1-2 hours)
- Phase 12: Documentation & Final Touches (1-2 hours)

### Critical Path:
1. Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7 → Phase 8 → Phase 9 → Phase 10

### Can Work in Parallel:
- Phase 11 (after Phase 10)
- Phase 12 (after Phase 10)

### Final Verification Checklist:

#### Functionality
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Language switching works
- [ ] Forms work (if implemented)
- [ ] All links work
- [ ] Mobile responsive
- [ ] No console errors

#### Code Quality
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Code formatted
- [ ] No duplicate code
- [ ] Proper error handling

#### Performance
- [ ] Fast initial load
- [ ] Images lazy loaded
- [ ] Code split properly
- [ ] Bundle size optimized

#### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Screen reader friendly

#### SEO
- [ ] Meta tags present
- [ ] Proper page titles
- [ ] Sitemap (optional)
- [ ] robots.txt (optional)

#### Documentation
- [ ] README updated
- [ ] Code commented
- [ ] Architecture documented
- [ ] Setup instructions clear

---

## Tips for Success

### 1. Work Phase by Phase
Don't skip ahead. Complete each phase fully before moving to the next.

### 2. Test Frequently
After each task, verify the app still works. Don't wait until the end.

### 3. Commit Often
Commit after each completed task. Use descriptive commit messages.

### 4. Keep Notes
Document any issues or decisions you make during refactoring.

### 5. Take Breaks
This is a lot of work. Take breaks to stay focused and avoid mistakes.

### 6. Ask for Help
If stuck, refer back to CODE_REVIEW.md and FILE_STRUCTURE_GUIDE.md.

### 7. Don't Rush
Quality over speed. It's better to do it right than to do it fast.

---

## Recommended Commit Messages

```bash
# Phase 1
git commit -m "feat: create new directory structure"
git commit -m "feat: add constants files"
git commit -m "feat: add config files"
git commit -m "feat: add utility files"

# Phase 2
git commit -m "feat: create about data file"
git commit -m "refactor: update existing data files"
git commit -m "feat: add new type definitions"

# Phase 3
git commit -m "refactor: move app store to modules"
git commit -m "feat: create UI store"

# Phase 4
git commit -m "refactor: reorganize composables"
git commit -m "feat: create useLanguage composable"

# Phase 5
git commit -m "refactor: create layout components"
git commit -m "feat: create common components"
git commit -m "feat: create about feature components"
git commit -m "feat: create portfolio feature components"
git commit -m "feat: create education feature components"
git commit -m "feat: create contact feature components"
git commit -m "feat: create home hero component"

# Phase 6
git commit -m "feat: create default layout"
git commit -m "feat: create home view"
git commit -m "feat: create 404 view"

# Phase 7
git commit -m "feat: add router guards"
git commit -m "refactor: update router configuration"

# Phase 8
git commit -m "refactor: reorganize i18n structure"
git commit -m "refactor: update i18n index"

# Phase 9
git commit -m "refactor: update App.vue"

# Phase 10
git commit -m "chore: remove old component files"
git commit -m "refactor: update import paths"
git commit -m "test: verify all features"
git commit -m "style: run linting and formatting"

# Phase 11
git commit -m "perf: add image optimization"
git commit -m "perf: add code splitting"
git commit -m "feat: add loading states"

# Phase 12
git commit -m "docs: update README"
git commit -m "feat: add environment variables"
git commit -m "feat: add SEO meta tags"
```

---

## Troubleshooting

### Issue: Import errors after moving files
**Solution:** Use find and replace to update all import paths. Check `@/` alias is configured correctly.

### Issue: TypeScript errors
**Solution:** Ensure all types are exported correctly. Check `src/types/index.ts` exports all types.

### Issue: Store not working
**Solution:** Verify `storeToRefs` is used for reactive properties. Check store is imported from `@/stores`.

### Issue: i18n keys not found
**Solution:** Check translation keys match exactly. Verify all keys are exported in index files.

### Issue: Router not working
**Solution:** Verify router is imported in `main.ts`. Check routes are defined correctly.

### Issue: Components not displaying
**Solution:** Check component imports. Verify components are in correct directories.

---

## Next Steps After Completion

1. **Add Tests** - Consider adding unit tests back
2. **Add E2E Tests** - Use Playwright or Cypress
3. **Add CI/CD** - Set up GitHub Actions
4. **Add Analytics** - Google Analytics or similar
5. **Add Blog** - Expand to include blog posts
6. **Add Projects Detail Pages** - Individual project pages
7. **Add Dark Mode** - Theme switching
8. **Add Animations** - Enhance user experience
9. **Add PWA** - Make it installable
10. **Deploy** - Deploy to production

---

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue i18n Documentation](https://vue-i18n.intlify.dev/)

---

**Good luck with your refactoring! 🚀**


---

## Phase 13: Styling Strategy & Migration (3-4 hours)

### Goal
Establish a hybrid styling approach: Tailwind for utilities and layout, CSS modules for complex component-specific styles.

### Styling Philosophy

**Use Tailwind for:**
- Layout (flex, grid, spacing, sizing)
- Typography (font sizes, weights, colors)
- Colors and backgrounds
- Borders and shadows
- Responsive utilities
- Simple component styling

**Keep CSS for:**
- Complex animations
- Component-specific styles with many properties
- Custom designs that would be verbose in Tailwind
- Theme variables (CSS custom properties)
- Global styles and resets

---

### Task 13.1: Setup Tailwind Configuration
**Priority:** Critical
**Time:** 30 minutes
**Dependencies:** Phase 1

**Actions:**

1. Check if Tailwind is installed:
```bash
npm list tailwindcss
```

2. If not installed:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--hue), var(--sat), 25%)',
          dark: 'hsl(var(--hue), var(--sat), 20%)',
        },
        text: {
          DEFAULT: 'hsl(var(--hue), var(--sat), 46%)',
        },
        body: 'hsl(var(--hue), var(--sat), 98%)',
        container: '#fff',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'big': '3.5rem',
        'h1': '2.25rem',
        'h2': '1.5rem',
        'h3': '1.25rem',
        'normal': '1rem',
        'small': '0.875rem',
        'smaller': '0.813rem',
        'tiny': '0.625rem',
      },
      spacing: {
        'header': '3rem',
      },
      zIndex: {
        'tooltip': '10',
        'fixed': '100',
        'modal': '1000',
      },
    },
  },
  plugins: [],
}
```

4. Create `src/assets/styles/tailwind.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Variables for theme */
@layer base {
  :root {
    --hue: 0;
    --sat: 0%;
  }
}
```

5. Update `src/main.ts`:
```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// Import Tailwind
import './assets/styles/tailwind.css'
// Import custom styles
import './assets/styles/main.css'

// ... rest of the code
```

**Verification:**
- [ ] Tailwind installed
- [ ] Config updated
- [ ] Tailwind CSS imported
- [ ] Theme colors work
- [ ] No build errors

---

### Task 13.2: Refactor Global Styles
**Priority:** High
**Time:** 45 minutes
**Dependencies:** Task 13.1

**Actions:**

1. Create `src/assets/styles/base.css`:
```css
/* Keep only essential global styles */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;1,100&display=swap');

:root {
  --hue: 0;
  --sat: 0%;
  --header-height: 3rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: hsl(var(--hue), var(--sat), 98%);
  color: hsl(var(--hue), var(--sat), 46%);
}

img {
  max-width: 100%;
  height: auto;
}
```

2. Create `src/assets/styles/components.css`:
```css
/* Complex component styles that are verbose in Tailwind */

/* Language Toggle */
.toggle {
  position: relative;
  width: 50px;
}

.toggle::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 25px;
  background-color: hsl(var(--hue), var(--sat), 46%);
  border-radius: 25px;
}

.toggle::after {
  content: '';
  position: absolute;
  left: 0px;
  width: 25px;
  height: 25px;
  background-color: #eee;
  border-radius: 25px;
  transition: 0.25s;
  border: 2px solid #eee;
  box-sizing: border-box;
}

.toggle:checked::after {
  left: 25px;
}

/* Home Image Animation */
@keyframes profile__animate {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}

.home__img {
  animation: profile__animate 8s ease-in-out infinite 1s;
}

/* Scroll Up Button */
.scrollup {
  position: fixed;
  right: 2.5rem;
  bottom: -20%;
  opacity: 0.8;
  z-index: 10;
  transition: 0.4s;
}

.show-scroll {
  bottom: 3rem;
}
```

3. Update `src/assets/styles/main.css`:
```css
@import './base.css';
@import './components.css';

/* Keep only complex styles here */
/* Most layout and utility styles will use Tailwind */
```

**Verification:**
- [ ] Styles organized
- [ ] CSS variables preserved
- [ ] Animations work
- [ ] App looks the same

---

### Task 13.3: Migrate Layout Components to Tailwind
**Priority:** High
**Time:** 1 hour
**Dependencies:** Task 13.2

**Actions:**

Update `src/components/layout/TheHeader.vue`:
```vue
<template>
  <header class="fixed top-0 left-0 w-full z-fixed bg-body">
    <nav class="container mx-auto h-20 flex justify-between items-center gap-4 px-6">
      <div class="flex gap-4 items-start">
        <a href="#" class="text-primary font-medium text-lg">
          {{ appConfig.author.split(' ')[0] }}
        </a>
        <LanguageSwitch />
      </div>

      <!-- Desktop Menu -->
      <div 
        class="nav__menu"
        :class="{ 'show-menu': isMenuOpen }"
      >
        <ul class="flex flex-col md:flex-row gap-8 md:gap-8">
          <li v-for="item in NAVIGATION_ITEMS" :key="item.id">
            <a 
              :href="item.href" 
              class="flex flex-col md:flex-row items-center gap-1 text-sm text-primary font-medium hover:text-primary-dark transition-colors"
              @click="closeMenu"
            >
              <i :class="`uil ${item.icon} text-xl md:hidden`"></i>
              {{ t(item.labelKey) }}
            </a>
          </li>
        </ul>
        
        <button
          class="nav__close absolute right-5 bottom-2 text-2xl cursor-pointer text-primary hover:text-primary-dark md:hidden"
          @click="closeMenu"
          aria-label="Close navigation menu"
        >
          <i class="uil uil-times"></i>
        </button>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden text-lg cursor-pointer text-primary"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <i class="uil uil-apps"></i>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'
import { NAVIGATION_ITEMS } from '@/constants'
import { appConfig } from '@/config'
import LanguageSwitch from '@/components/common/LanguageSwitch.vue'

const { t } = useI18n()
const appStore = useAppStore()
const { isMenuOpen } = storeToRefs(appStore)
const { toggleMenu, closeMenu } = appStore
</script>

<style scoped>
/* Keep mobile menu animation in CSS */
@media screen and (max-width: 768px) {
  .nav__menu {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: hsl(var(--hue), var(--sat), 98%);
    padding: 2rem 1.5rem 4rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
                rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    border-radius: 20px 20px 0 0;
    transition: 0.3s;
  }

  .show-menu {
    bottom: 0;
  }
}
</style>
```

Update `src/components/layout/TheFooter.vue`:
```vue
<template>
  <footer class="bg-container border-t border-gray-200">
    <div class="container mx-auto py-8 px-6">
      <h1 class="text-2xl font-semibold text-primary text-center mb-8">
        {{ appConfig.author.split(' ')[0] }}
      </h1>
      
      <ul class="flex justify-center gap-6 mb-8 flex-wrap">
        <li v-for="item in NAVIGATION_ITEMS" :key="item.id">
          <a
            :href="item.href"
            class="text-primary hover:text-primary-dark transition-colors"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ t(item.labelKey) }}
          </a>
        </li>
      </ul>

      <div class="flex justify-center gap-5">
        <a
          v-for="(link, platform) in SOCIAL_LINKS"
          :key="platform"
          class="bg-primary text-container text-2xl w-8 h-8 rounded-lg inline-flex items-center justify-center hover:bg-primary-dark transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          :href="link.url"
          :aria-label="link.label"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
    </div>

    <button
      class="scrollup fixed right-10 bg-primary text-container p-2 rounded-lg hover:bg-primary-dark transition-all"
      :class="{ 'show-scroll': showScroll }"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <i class="uil uil-arrow-up text-2xl"></i>
    </button>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScroll } from '@/composables'
import { scrollToSection } from '@/utils/scroll'
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/constants'
import { appConfig } from '@/config'

const { t } = useI18n()
const { showScroll, scrollToTop } = useScroll()
</script>
```

**Verification:**
- [ ] Header uses Tailwind
- [ ] Footer uses Tailwind
- [ ] Mobile menu still works
- [ ] Responsive design works
- [ ] Animations preserved

---

### Task 13.4: Create Styling Guidelines Document
**Priority:** Medium
**Time:** 30 minutes
**Dependencies:** Task 13.3

**Actions:**

Create `STYLING_GUIDE.md`:
```markdown
# Styling Guidelines

## Philosophy

We use a hybrid approach:
- **Tailwind CSS** for utilities and common patterns
- **CSS/SCSS** for complex component-specific styles

## When to Use Tailwind

✅ **DO use Tailwind for:**
- Layout (flex, grid, spacing)
- Typography (text sizes, weights, colors)
- Colors and backgrounds
- Borders, shadows, and rounded corners
- Responsive utilities
- Simple hover/focus states
- Padding and margins

**Example:**
```vue
<div class="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <h2 class="text-2xl font-semibold text-primary">Title</h2>
</div>
```

## When to Use CSS

✅ **DO use CSS for:**
- Complex animations
- Component-specific styles with 5+ properties
- Custom designs that would be verbose in Tailwind
- Pseudo-elements (::before, ::after)
- Complex selectors
- Theme variables

**Example:**
```vue
<template>
  <div class="animated-card">
    <div class="card-content">...</div>
  </div>
</template>

<style scoped>
.animated-card {
  @apply relative overflow-hidden; /* Can mix Tailwind */
  
  animation: slideIn 0.3s ease-out;
}

.animated-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.animated-card:hover::before {
  left: 100%;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
```

## Tailwind Configuration

Our custom theme extends Tailwind with project-specific values:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: 'hsl(var(--hue), var(--sat), 25%)',
      'primary-dark': 'hsl(var(--hue), var(--sat), 20%)',
      text: 'hsl(var(--hue), var(--sat), 46%)',
      body: 'hsl(var(--hue), var(--sat), 98%)',
      container: '#fff',
    },
    // ... more config
  }
}
```

## Component Styling Patterns

### Pattern 1: Utility-First (Simple Components)

```vue
<template>
  <button class="px-8 py-4 bg-primary text-white rounded-2xl font-medium hover:bg-primary-dark transition-colors">
    {{ label }}
  </button>
</template>
```

### Pattern 2: Hybrid (Medium Complexity)

```vue
<template>
  <div class="card">
    <div class="flex items-center gap-4 p-6">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply bg-white rounded-xl border border-gray-100;
  
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
</style>
```

### Pattern 3: CSS-First (Complex Components)

```vue
<template>
  <div class="timeline-item">
    <div class="timeline-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: hsl(var(--hue), var(--sat), 46%);
  left: 50%;
  transform: translateX(-50%);
}

/* Complex positioning and animations */
</style>
```

## Responsive Design

Use Tailwind's responsive prefixes:

```vue
<div class="
  flex flex-col gap-4
  md:flex-row md:gap-8
  lg:gap-12
">
  <!-- Mobile: column, Desktop: row -->
</div>
```

## Dark Mode (Future)

Prepare for dark mode with Tailwind:

```vue
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <!-- Automatically switches based on system preference -->
</div>
```

## Best Practices

1. **Keep it Simple** - Use Tailwind for simple styling
2. **Extract Components** - If repeating classes, create a component
3. **Use @apply Sparingly** - Only for repeated patterns
4. **Scoped Styles** - Always use `<style scoped>` for component CSS
5. **CSS Variables** - Use for theme values that change
6. **Performance** - Tailwind purges unused CSS automatically

## Migration Checklist

When migrating a component:

- [ ] Replace simple utility classes with Tailwind
- [ ] Keep complex animations in CSS
- [ ] Use Tailwind responsive utilities
- [ ] Test on mobile and desktop
- [ ] Verify no visual regressions
- [ ] Remove unused CSS

## Examples

See these components for reference:
- `TheHeader.vue` - Hybrid approach
- `TheFooter.vue` - Mostly Tailwind
- `PortfolioCard.vue` - Balanced mix
- `EducationTimeline.vue` - More CSS for complexity
```

**Verification:**
- [ ] Guidelines document created
- [ ] Examples are clear
- [ ] Team understands approach

---

### Task 13.5: Migrate Remaining Components (Optional)
**Priority:** Low
**Time:** 1-2 hours
**Dependencies:** Task 13.4

**Actions:**

Gradually migrate other components following the guidelines:

1. Start with simple components (buttons, cards)
2. Move to medium complexity (forms, lists)
3. Keep complex components with CSS (animations, timelines)

**Priority Order:**
1. Common components (high reuse)
2. Feature components (moderate complexity)
3. Complex animations (keep CSS)

**Verification:**
- [ ] Components migrated
- [ ] No visual regressions
- [ ] Code is cleaner
- [ ] Bundle size acceptable

---

## Updated Phase Summary

### Total Time with Styling: 23-29 hours

- Phase 1-12: 20-25 hours (as before)
- Phase 13: 3-4 hours (styling)

### Styling Strategy Benefits

✅ **Pros:**
- Faster development with Tailwind utilities
- Consistent spacing and colors
- Smaller CSS bundle (Tailwind purges unused)
- Easy responsive design
- Maintainable complex styles in CSS

✅ **Best of Both Worlds:**
- Tailwind for common patterns
- CSS for unique designs
- No fighting the framework
- Clean, readable code

---

## Final Checklist (Updated)

### Styling
- [ ] Tailwind configured
- [ ] Theme colors match design
- [ ] Responsive utilities work
- [ ] Complex animations preserved
- [ ] Bundle size optimized
- [ ] No visual regressions
- [ ] Guidelines documented

### All Previous Phases
- [ ] (All previous checklist items)

---

## Recommended Approach

**Option 1: Gradual Migration (Recommended)**
1. Complete Phases 1-12 first
2. Then do Phase 13 (styling)
3. Migrate components one by one
4. Test thoroughly after each migration

**Option 2: Parallel Migration**
1. Do Phase 13.1-13.2 early (setup)
2. Apply Tailwind as you create new components in Phase 5
3. Keep existing CSS for old components
4. Migrate gradually over time

**Option 3: Keep Current CSS**
1. Skip Phase 13 entirely
2. Keep all existing CSS
3. Add Tailwind only for new features
4. Migrate later if needed

Choose based on:
- Timeline constraints
- Team familiarity with Tailwind
- Importance of consistency
- Bundle size concerns
