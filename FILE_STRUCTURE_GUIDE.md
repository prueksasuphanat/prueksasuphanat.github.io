# File Structure Guide - Portfolio Project

## Current Structure Analysis

### ✅ What's Good

Your current structure follows many Vue 3 best practices:

```
src/
├── assets/          ✅ Static assets
├── components/      ✅ Vue components
├── composables/     ✅ Reusable composition logic
├── data/           ✅ Static data files
├── i18n/           ✅ Internationalization
├── router/         ✅ Routing configuration
├── stores/         ✅ State management
├── types/          ✅ TypeScript definitions
├── utils/          ✅ Utility functions
├── App.vue         ✅ Root component
└── main.ts         ✅ Entry point
```

**Strengths:**
- Clear separation of concerns
- Follows Vue 3 conventions
- TypeScript types are separated
- Composables are properly organized
- i18n is well-structured

---

## 🔴 Issues with Current Structure

### 1. Flat Components Directory

**Current:**
```
src/components/
├── AboutMe.vue
├── Contact.vue
├── Education.vue
├── Footer.vue
├── Home.vue
├── Navbar.vue
└── Portfolio.vue
```

**Problem:**
- All components are at the same level
- No distinction between layout, feature, and shared components
- Hard to scale as project grows
- Difficult to find related components

---

### 2. Missing Directories

**What's Missing:**
- `/views` - Page-level components
- `/layouts` - Layout wrappers
- `/constants` - Application constants
- `/config` - Configuration files
- `/hooks` - Alternative name for composables (optional)

---

### 3. Router Not Utilized

**Current:**
```typescript
// router/index.ts
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/App.vue'), // ❌ Importing App.vue
  },
]
```

**Problem:**
- Router exists but isn't used properly
- All components are in App.vue instead of separate views
- No route-based code splitting

---

## 🎯 Recommended Structure

### Option 1: Small Portfolio (Current Size)

**Best for:** Simple portfolio with 5-10 pages

```
src/
├── assets/
│   ├── fonts/
│   ├── images/
│   └── styles/
│       ├── base.css
│       ├── components.css
│       ├── utilities.css
│       └── main.css
│
├── components/
│   ├── layout/              # Layout components
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   └── AppNavbar.vue
│   │
│   ├── sections/            # Page sections
│   │   ├── HomeHero.vue
│   │   ├── AboutSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── EducationSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── PortfolioSection.vue
│   │   └── ContactSection.vue
│   │
│   ├── ui/                  # Reusable UI components
│   │   ├── BaseButton.vue
│   │   ├── BaseCard.vue
│   │   ├── BaseInput.vue
│   │   ├── LanguageSwitch.vue
│   │   ├── SocialLinks.vue
│   │   └── ScrollToTop.vue
│   │
│   └── portfolio/           # Portfolio-specific components
│       ├── PortfolioCard.vue
│       ├── PortfolioFilter.vue
│       └── PortfolioModal.vue
│
├── composables/
│   ├── useScroll.ts
│   ├── useLanguage.ts
│   ├── useTheme.ts          # If adding dark mode
│   └── usePortfolio.ts      # Portfolio filtering logic
│
├── config/
│   ├── app.config.ts        # App configuration
│   └── seo.config.ts        # SEO meta tags
│
├── constants/
│   ├── navigation.ts        # Navigation menu items
│   ├── social.ts           # Social media links
│   └── app.ts              # App constants
│
├── data/
│   ├── about.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── portfolio.ts
│   └── skills.ts
│
├── i18n/
│   ├── locales/
│   │   ├── en.ts
│   │   └── th.ts
│   └── index.ts
│
├── layouts/
│   ├── DefaultLayout.vue    # Main layout
│   └── MinimalLayout.vue    # For special pages
│
├── router/
│   ├── guards/
│   │   └── scroll.ts        # Scroll behavior guard
│   ├── routes.ts            # Route definitions
│   └── index.ts
│
├── stores/
│   ├── app.ts              # App state
│   ├── portfolio.ts        # Portfolio state (if needed)
│   └── index.ts
│
├── types/
│   ├── components.ts       # Component prop types
│   ├── education.ts
│   ├── portfolio.ts
│   ├── skills.ts
│   └── index.ts
│
├── utils/
│   ├── scroll.ts
│   ├── storage.ts          # localStorage helpers
│   ├── format.ts           # Formatting utilities
│   └── validation.ts       # Form validation
│
├── views/
│   ├── HomeView.vue        # Main single-page view
│   ├── NotFoundView.vue    # 404 page
│   └── (future pages)
│
├── App.vue
├── main.ts
└── vite-env.d.ts
```

---

### Option 2: Scalable Portfolio (Future Growth)

**Best for:** Portfolio that might grow into a blog or multi-page site

```
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── styles/
│       ├── abstracts/       # Variables, mixins
│       ├── base/           # Reset, typography
│       ├── components/     # Component styles
│       ├── layout/         # Layout styles
│       └── main.css
│
├── components/
│   ├── common/             # Shared across features
│   │   ├── BaseButton.vue
│   │   ├── BaseCard.vue
│   │   ├── BaseInput.vue
│   │   └── LoadingSpinner.vue
│   │
│   ├── layout/
│   │   ├── TheHeader.vue
│   │   ├── TheFooter.vue
│   │   ├── TheNavbar.vue
│   │   └── TheSidebar.vue
│   │
│   └── features/           # Feature-specific components
│       ├── about/
│       │   ├── AboutHero.vue
│       │   ├── AboutInfo.vue
│       │   └── SkillsList.vue
│       │
│       ├── education/
│       │   ├── EducationTimeline.vue
│       │   ├── EducationCard.vue
│       │   └── ExperienceCard.vue
│       │
│       ├── portfolio/
│       │   ├── PortfolioGrid.vue
│       │   ├── PortfolioCard.vue
│       │   ├── PortfolioFilter.vue
│       │   └── PortfolioModal.vue
│       │
│       └── contact/
│           ├── ContactForm.vue
│           ├── ContactInfo.vue
│           └── SocialLinks.vue
│
├── composables/
│   ├── core/               # Core composables
│   │   ├── useScroll.ts
│   │   ├── useBreakpoints.ts
│   │   └── useEventListener.ts
│   │
│   └── features/           # Feature composables
│       ├── useLanguage.ts
│       ├── usePortfolio.ts
│       └── useContactForm.ts
│
├── config/
│   ├── app.ts
│   ├── seo.ts
│   └── navigation.ts
│
├── constants/
│   ├── app.ts
│   ├── routes.ts
│   └── social.ts
│
├── data/
│   ├── about.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── portfolio.ts
│   └── skills.ts
│
├── i18n/
│   ├── locales/
│   │   ├── en/
│   │   │   ├── common.ts
│   │   │   ├── about.ts
│   │   │   ├── portfolio.ts
│   │   │   └── index.ts
│   │   │
│   │   └── th/
│   │       ├── common.ts
│   │       ├── about.ts
│   │       ├── portfolio.ts
│   │       └── index.ts
│   │
│   └── index.ts
│
├── layouts/
│   ├── DefaultLayout.vue
│   ├── MinimalLayout.vue
│   └── BlankLayout.vue
│
├── router/
│   ├── guards/
│   │   ├── auth.ts
│   │   └── scroll.ts
│   │
│   ├── routes/
│   │   ├── index.ts
│   │   └── portfolio.ts
│   │
│   └── index.ts
│
├── stores/
│   ├── modules/
│   │   ├── app.ts
│   │   ├── portfolio.ts
│   │   └── ui.ts
│   │
│   └── index.ts
│
├── types/
│   ├── api.ts
│   ├── components.ts
│   ├── education.ts
│   ├── portfolio.ts
│   ├── skills.ts
│   └── index.ts
│
├── utils/
│   ├── helpers/
│   │   ├── format.ts
│   │   ├── validation.ts
│   │   └── date.ts
│   │
│   ├── scroll.ts
│   └── storage.ts
│
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue        # If splitting into pages
│   ├── PortfolioView.vue
│   ├── ContactView.vue
│   └── NotFoundView.vue
│
├── App.vue
├── main.ts
└── vite-env.d.ts
```

---

## 📝 Detailed Recommendations

### 1. Reorganize Components

**Current Problem:**
```
components/
├── Home.vue          # Actually a section, not a page
├── AboutMe.vue       # Section
├── Education.vue     # Section
├── Portfolio.vue     # Section
├── Contact.vue       # Section
├── Navbar.vue        # Layout component
└── Footer.vue        # Layout component
```

**Recommended:**
```
components/
├── layout/
│   ├── AppNavbar.vue      # Renamed from Navbar
│   └── AppFooter.vue      # Renamed from Footer
│
└── sections/
    ├── HomeHero.vue       # Renamed from Home
    ├── AboutSection.vue   # Renamed from AboutMe
    ├── EducationSection.vue
    ├── PortfolioSection.vue
    └── ContactSection.vue
```

**Why:**
- Clear distinction between layout and content
- Easier to find components
- Better for code splitting
- Follows Vue naming conventions

---

### 2. Create Views Directory

**Create:**
```
views/
└── HomeView.vue
```

**HomeView.vue:**
```vue
<template>
  <div class="home-view">
    <HomeHero />
    <AboutSection />
    <EducationSection />
    <PortfolioSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HomeHero from '@/components/sections/HomeHero.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>
```

**Update App.vue:**
```vue
<template>
  <div id="app">
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>
```

---

### 3. Add Constants Directory

**Create:**
```
constants/
├── navigation.ts
├── social.ts
└── app.ts
```

**navigation.ts:**
```typescript
export const NAVIGATION_ITEMS = [
  { id: 'home', labelKey: 'text.Home', href: '#home' },
  { id: 'about', labelKey: 'text.About', href: '#about' },
  { id: 'portfolio', labelKey: 'text.Portfolio', href: '#portfolio' },
  { id: 'contact', labelKey: 'text.Contact', href: '#contact' },
] as const

export type NavigationId = typeof NAVIGATION_ITEMS[number]['id']
```

**social.ts:**
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
} as const

export type SocialPlatform = keyof typeof SOCIAL_LINKS
```

**app.ts:**
```typescript
export const APP_NAME = 'Portfolio - Pruek Suphanat'
export const APP_DESCRIPTION = 'Frontend Developer Portfolio'
export const DEFAULT_LOCALE = 'en'
export const SUPPORTED_LOCALES = ['en', 'th'] as const
export const SCROLL_THRESHOLD = 200
export const ANIMATION_DURATION = 300

export type SupportedLocale = typeof SUPPORTED_LOCALES[number]
```

---

### 4. Add Config Directory

**Create:**
```
config/
├── app.config.ts
└── seo.config.ts
```

**app.config.ts:**
```typescript
export const appConfig = {
  name: 'Portfolio - Pruek Suphanat',
  description: 'Frontend Developer Portfolio',
  author: 'Suphanat Panyakom',
  locale: {
    default: 'en',
    supported: ['en', 'th'],
  },
  contact: {
    email: 'suphanat.pruek@gmail.com',
    phone: '098-669-9033',
  },
  social: {
    linkedin: 'http://www.linkedin.com/in/suphanat-panyakom-1483522bb',
    github: 'https://github.com/prueksasuphanat',
    instagram: 'https://www.instagram.com/py24.7/',
  },
} as const
```

**seo.config.ts:**
```typescript
export const seoConfig = {
  title: 'Suphanat Panyakom - Frontend Developer',
  description: 'Frontend Developer specializing in Vue.js, TypeScript, and modern web technologies',
  keywords: ['Frontend Developer', 'Vue.js', 'TypeScript', 'Web Development', 'Portfolio'],
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@yourhandle',
}
```

---

### 5. Improve Utils Organization

**Current:**
```
utils/
└── scroll.ts
```

**Recommended:**
```
utils/
├── scroll.ts
├── storage.ts
├── format.ts
└── validation.ts
```

**storage.ts:**
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

---

### 6. Split Large Components

**Example: AboutMe.vue is too large**

**Current:**
```vue
<!-- AboutMe.vue - 200+ lines -->
<template>
  <div>
    <!-- About section -->
    <!-- Skills section -->
  </div>
</template>
```

**Recommended:**
```
components/
└── sections/
    ├── AboutSection.vue      # About info only
    └── SkillsSection.vue     # Skills only
```

**AboutSection.vue:**
```vue
<template>
  <section class="about section" id="about">
    <h2 class="section__title">{{ t('text.AboutMe') }}</h2>
    <div class="about__container container grid">
      <img :src="personalInfo.image" alt="Profile" class="about__img" />
      <AboutInfo :info="personalInfo" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AboutInfo from '@/components/about/AboutInfo.vue'
import { personalInfo } from '@/data/about'

const { t } = useI18n()
</script>
```

**SkillsSection.vue:**
```vue
<template>
  <section class="skill section">
    <h2 class="section__title">{{ t('text.Skills') }}</h2>
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
import SkillCategory from '@/components/skills/SkillCategory.vue'
import { skillsData } from '@/data/skills'

const { t } = useI18n()
</script>
```

---

## 🎯 Migration Steps

### Step 1: Create New Directories

```bash
# Create new directories
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/views
mkdir -p src/constants
mkdir -p src/config
mkdir -p src/layouts
```

### Step 2: Move Layout Components

```bash
# Move layout components
mv src/components/Navbar.vue src/components/layout/AppNavbar.vue
mv src/components/Footer.vue src/components/layout/AppFooter.vue
```

### Step 3: Move Section Components

```bash
# Move section components
mv src/components/Home.vue src/components/sections/HomeHero.vue
mv src/components/AboutMe.vue src/components/sections/AboutSection.vue
mv src/components/Education.vue src/components/sections/EducationSection.vue
mv src/components/Portfolio.vue src/components/sections/PortfolioSection.vue
mv src/components/Contact.vue src/components/sections/ContactSection.vue
```

### Step 4: Create Views

Create `src/views/HomeView.vue` with all sections.

### Step 5: Update Imports

Update all import statements in components to reflect new paths.

### Step 6: Create Constants

Extract hard-coded values to constants files.

### Step 7: Test

Test all functionality to ensure nothing broke during migration.

---

## 📊 Comparison Table

| Aspect | Current | Recommended | Benefit |
|--------|---------|-------------|---------|
| Component Organization | Flat | Nested by type | Easier to find |
| Scalability | Limited | High | Supports growth |
| Code Splitting | Manual | Automatic | Better performance |
| Maintainability | Medium | High | Easier updates |
| Reusability | Low | High | Less duplication |
| Type Safety | Good | Excellent | Fewer bugs |

---

## 🚀 Quick Wins (Do These First)

### 1. Move Layout Components (5 minutes)
```bash
mkdir src/components/layout
mv src/components/Navbar.vue src/components/layout/AppNavbar.vue
mv src/components/Footer.vue src/components/layout/AppFooter.vue
```

### 2. Create Constants (15 minutes)
Extract navigation items and social links to constants.

### 3. Add Storage Utility (10 minutes)
Create safe localStorage wrapper.

### 4. Create Views Directory (20 minutes)
Move page logic from App.vue to HomeView.vue.

---

## 💡 Best Practices Summary

### ✅ DO

1. **Group by feature/type** - Not by file type alone
2. **Use clear naming** - `AppNavbar` not `Navbar`
3. **Separate concerns** - Layout, sections, UI components
4. **Extract constants** - Don't hard-code values
5. **Create composables** - For reusable logic
6. **Use views** - For route-level components
7. **Type everything** - Use TypeScript interfaces
8. **Document structure** - Keep this guide updated

### ❌ DON'T

1. **Don't mix concerns** - Keep layout separate from content
2. **Don't create deep nesting** - Max 3 levels
3. **Don't duplicate code** - Extract to composables/utils
4. **Don't hard-code** - Use constants and config
5. **Don't skip types** - Always define interfaces
6. **Don't ignore conventions** - Follow Vue style guide
7. **Don't over-engineer** - Start simple, grow as needed
8. **Don't forget tests** - Structure should support testing

---

## 📚 Additional Resources

- [Vue 3 Style Guide](https://vuejs.org/style-guide/)
- [Vue 3 Project Structure](https://vuejs.org/guide/scaling-up/sfc.html)
- [TypeScript with Vue](https://vuejs.org/guide/typescript/overview.html)
- [Vite Project Structure](https://vitejs.dev/guide/)

---

## 🎯 Recommended Structure for Your Project

Based on your current size and future needs, I recommend **Option 1** with these modifications:

```
src/
├── components/
│   ├── layout/          # AppNavbar, AppFooter
│   ├── sections/        # HomeHero, AboutSection, etc.
│   └── ui/             # Reusable components (future)
├── composables/         # useScroll, useLanguage
├── config/             # app.config.ts, seo.config.ts
├── constants/          # navigation.ts, social.ts, app.ts
├── data/              # Static data files
├── i18n/              # Translations
├── stores/            # Pinia stores
├── types/             # TypeScript types
├── utils/             # Utility functions
├── views/             # HomeView.vue
└── layouts/           # DefaultLayout.vue (future)
```

This structure:
- ✅ Scales well as project grows
- ✅ Clear separation of concerns
- ✅ Easy to navigate
- ✅ Supports code splitting
- ✅ Follows Vue 3 best practices
- ✅ Not over-engineered for current size
