# Code Review - Portfolio Project

## Overview

This document outlines code quality issues and improvement recommendations for the Portfolio project to align with Vue 3 best practices.

---

## 🔴 Critical Issues

### 1. Navbar.vue - Inconsistent State Management

**Problem:**
- State is managed in both component (`ref`) and Pinia store
- `isMenuOpen` and `selectedLanguage` are duplicated
- Store exists but isn't being utilized properly

**Current Code:**
```typescript
// In Navbar.vue
const selectedLanguage = ref(localStorage.getItem('lang') || 'en')
const isMenuOpen = ref(false)

// But store also has these:
// src/stores/app.ts
const locale = ref(localStorage.getItem('lang') || 'en')
const isMenuOpen = ref(false)
```

**Solution:**
Use Pinia store as single source of truth:

```typescript
// Navbar.vue
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { locale, isMenuOpen } = storeToRefs(appStore)
const { setLocale, toggleMenu, closeMenu } = appStore

const changeLanguage = () => {
  const newLocale = locale.value === 'en' ? 'th' : 'en'
  setLocale(newLocale)
}
```

---

### 2. AboutMe.vue - Hard-coded Data

**Problem:**
- Skills and personal information are hard-coded in template
- Difficult to maintain and update
- Not following data separation pattern used elsewhere

**Current Code:**
```vue
<div class="skills__data">
  <h3 class="skills__name">Html</h3>
</div>
<div class="skills__data">
  <h3 class="skills__name">Css</h3>
</div>
```

**Solution:**
Create data file and use v-for:

```typescript
// src/data/about.ts
export const personalInfo = {
  name: 'Suphanat Panyakom',
  age: 27,
  dateOfBirth: '09.05.1997',
  experience: {
    months: 9,
    years: 0
  },
  projectsCompleted: 4
}

// In AboutMe.vue
import { personalInfo } from '@/data/about'
import { skillsData } from '@/data/skills'
```

```vue
<div v-for="category in skillsData" :key="category.title" class="skills__content">
  <h3 class="skills__title">{{ category.title }}</h3>
  <div class="skills__box">
    <div class="skills__group">
      <div v-for="skill in category.skills" :key="skill.name" class="skills__data">
        <i class="bx bx-badge-check"></i>
        <div>
          <h3 class="skills__name">{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 3. Contact.vue - Non-functional Form

**Problem:**
- Form has `disabled` and `pointer-events: none` but still displays to users
- Creates poor user experience (users can fill form but can't submit)
- No form validation or submission logic

**Current Code:**
```vue
<a disabled style="pointer-events: none" class="button button--flex about__btn">
  Send Message<span class="material-symbols-outlined">send</span>
</a>
```

**Solution Option 1 - Remove Form:**
If not implementing backend, remove the form section entirely.

**Solution Option 2 - Implement Form:**
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Implement form submission logic
    console.log('Form submitted:', formData.value)
    // Reset form
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="contact__form">
    <div class="contact__form-div">
      <label class="contact__form-tag">Name</label>
      <input
        v-model="formData.name"
        type="text"
        required
        class="contact__form-input"
        placeholder="Insert your name."
      />
    </div>
    <!-- ... other fields ... -->
    <button 
      type="submit" 
      :disabled="isSubmitting"
      class="button button--flex about__btn"
    >
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      <span class="material-symbols-outlined">send</span>
    </button>
  </form>
</template>
```

---

### 4. Education.vue - Unused Data Files

**Problem:**
- `src/data/education.ts` exists but isn't used
- Data is hard-coded in template instead
- Violates DRY principle

**Current Code:**
```vue
<h3 class="education__title">Road to Frontend Developer Bootcamp #2</h3>
<span class="education__subtitle">Certificate-BorntoDev</span>
```

**Solution:**
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { educationData, experienceData } from '@/data/education'

const { t } = useI18n()
const activeTab = ref<'education' | 'experience'>('education')

const toggleContent = (type: 'education' | 'experience') => {
  activeTab.value = type
}
</script>

<template>
  <div class="education__content education__content--experience">
    <div 
      v-for="item in experienceData" 
      :key="item.id" 
      class="education__data"
    >
      <div>
        <h3 class="education__title">{{ item.title }}</h3>
        <span class="education__subtitle">{{ item.position }}</span>
        <div class="education__calender">
          <i class="uil uil-calendar-alt"></i>
          {{ t(`text.${item.period.start}`) }} - {{ t(`text.${item.period.end}`) }}
        </div>
      </div>
      <div>
        <span class="education__rounder"></span>
        <span class="education__line"></span>
      </div>
    </div>
  </div>
</template>
```

---

## 🟡 Major Issues

### 5. Missing Error Handling

**Problem:**
- No error handling for localStorage operations
- No fallback when i18n fails to load
- App could crash in private browsing mode

**Solution:**
```typescript
// src/utils/storage.ts
export const getStorageItem = (key: string, defaultValue: string): string => {
  try {
    return localStorage.getItem(key) || defaultValue
  } catch (error) {
    console.warn(`Failed to read from localStorage: ${key}`, error)
    return defaultValue
  }
}

export const setStorageItem = (key: string, value: string): boolean => {
  try {
    localStorage.setItem(key, value)
    return true
  } catch (error) {
    console.warn(`Failed to write to localStorage: ${key}`, error)
    return false
  }
}

// Usage in stores/app.ts
import { getStorageItem, setStorageItem } from '@/utils/storage'

const locale = ref(getStorageItem('lang', 'en'))

const setLocale = (newLocale: string) => {
  locale.value = newLocale
  setStorageItem('lang', newLocale)
}
```

---

### 6. Accessibility Issues

**Problem:**
- External links missing `rel="noopener noreferrer"`
- Using `<a>` tags instead of `<button>` for actions
- Missing `aria-label` for icon-only buttons
- Poor keyboard navigation support

**Solutions:**

**External Links:**
```vue
<!-- Before -->
<a href="https://github.com/..." target="_blank">
  <i class="uil uil-github-alt"></i>
</a>

<!-- After -->
<a 
  href="https://github.com/..." 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Visit GitHub profile"
>
  <i class="uil uil-github-alt"></i>
</a>
```

**Button vs Anchor:**
```vue
<!-- Before -->
<a @click="toggleMenu" class="nav__toggle">
  <i class="uil uil-apps"></i>
</a>

<!-- After -->
<button 
  @click="toggleMenu" 
  class="nav__toggle"
  aria-label="Toggle navigation menu"
  :aria-expanded="isMenuOpen"
>
  <i class="uil uil-apps"></i>
</button>
```

**Keyboard Navigation:**
```vue
<div 
  class="education__button"
  role="button"
  tabindex="0"
  @click="toggleContent('education')"
  @keydown.enter="toggleContent('education')"
  @keydown.space.prevent="toggleContent('education')"
>
  <i class="uil uil-graduation-cap education__icon"></i>
  {{ t('text.Education') }}
</div>
```

---

### 7. Performance Issues

**Problem:**
- No lazy loading for images
- No image optimization
- No code splitting for components
- All components loaded at once

**Solutions:**

**Lazy Loading Images:**
```vue
<img 
  :src="project.image" 
  :alt="project.title"
  loading="lazy"
  width="600"
  height="400"
/>
```

**Image Optimization:**
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    vue(),
    imagetools()
  ]
})
```

**Component Lazy Loading:**
```typescript
// App.vue
import { defineAsyncComponent } from 'vue'

const Portfolio = defineAsyncComponent(() => import('./components/Portfolio.vue'))
const Education = defineAsyncComponent(() => import('./components/Education.vue'))
const Contact = defineAsyncComponent(() => import('./components/Contact.vue'))
```

---

### 8. Type Safety Issues

**Problem:**
- Missing translation keys used in components
- No type checking for i18n keys
- Runtime errors possible

**Missing Keys:**
- `ProfileDescription` (used in Home.vue)
- `ImPruek` (used in Home.vue)

**Solution:**

**Add Missing Keys:**
```typescript
// src/i18n/locales/en.ts
export default {
  text: {
    // ... existing keys
    ImPruek: "I'm Pruek",
    ProfileDescription: "Frontend Developer passionate about creating beautiful and functional web applications",
  }
}

// src/i18n/locales/th.ts
export default {
  text: {
    // ... existing keys
    ImPruek: "ผมชื่อพฤกษ์",
    ProfileDescription: "นักพัฒนาเว็บไซต์ที่หลงใหลในการสร้างเว็บแอปพลิเคชันที่สวยงามและใช้งานได้จริง",
  }
}
```

**Type-safe i18n:**
```typescript
// src/types/i18n.ts
export type TranslationKeys = {
  text: {
    Home: string
    About: string
    // ... all keys
  }
}

// src/i18n/index.ts
import type { TranslationKeys } from '@/types/i18n'

const i18n = createI18n<[TranslationKeys], 'en' | 'th'>({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    th,
  },
})
```

---

## 🟢 Minor Issues

### 9. Code Duplication

**Problem:**
- `scrollToTop` function exists in both `useScroll.ts` and `scroll.ts`
- Violates DRY principle

**Solution:**
```typescript
// Remove from src/utils/scroll.ts
// Keep only in src/composables/useScroll.ts

// Or better: Keep in utils and import in composable
// src/utils/scroll.ts
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

// src/composables/useScroll.ts
import { scrollToTop } from '@/utils/scroll'

export const useScroll = (threshold: number = 200) => {
  const showScroll = ref(false)

  const handleScroll = () => {
    showScroll.value = window.scrollY >= threshold
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    showScroll,
    scrollToTop, // Import from utils
  }
}
```

---

### 10. Inconsistent Naming Conventions

**Problem:**
- Translation keys use mixed PascalCase and camelCase
- Inconsistent naming makes code harder to maintain

**Examples:**
```typescript
// Inconsistent
Home: "Home"          // PascalCase
month: "month"        // camelCase
ContentDemo4: "..."   // PascalCase
y2023: "2023"         // lowercase with number
```

**Solution:**
Choose one convention and stick to it:

```typescript
// Option 1: All camelCase (Recommended)
export default {
  text: {
    home: "Home",
    about: "About",
    aboutMe: "About Me",
    portfolio: "Portfolio",
    contact: "Contact",
    profileDescription: "...",
    contentDemo4: "...",
    year2023: "2023",
  }
}

// Option 2: All PascalCase
export default {
  text: {
    Home: "Home",
    About: "About",
    AboutMe: "About Me",
    Portfolio: "Portfolio",
    Contact: "Contact",
    ProfileDescription: "...",
    ContentDemo4: "...",
    Year2023: "2023",
  }
}
```

---

### 11. Missing Props Validation

**Problem:**
- Components don't define or validate props
- No TypeScript interfaces for component props
- Could lead to runtime errors

**Solution:**
```typescript
// src/types/components.ts
export interface NavbarProps {
  fixed?: boolean
  transparent?: boolean
}

export interface PortfolioItemProps {
  project: Project
  showDetails?: boolean
}

// In component
<script setup lang="ts">
import type { NavbarProps } from '@/types/components'

const props = withDefaults(defineProps<NavbarProps>(), {
  fixed: false,
  transparent: false
})
</script>
```

---

### 12. Unused Vue Router

**Problem:**
- Vue Router is installed but not used
- App is single page with hash navigation
- Adds unnecessary bundle size

**Solution Option 1 - Remove Router:**
```bash
npm uninstall vue-router
```

Remove from `main.ts`:
```typescript
// Remove these lines
import router from './router'
app.use(router)
```

**Solution Option 2 - Use Router Properly:**
```typescript
// src/router/index.ts
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/Portfolio.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
  },
]
```

---

## 💡 Implementation Priority

### Priority 1 (Critical - Do First)

1. **Fix Navbar State Management**
   - Estimated time: 30 minutes
   - Impact: High
   - Difficulty: Easy

2. **Separate Hard-coded Data**
   - Estimated time: 1-2 hours
   - Impact: High
   - Difficulty: Medium

3. **Fix Contact Form**
   - Estimated time: 1 hour
   - Impact: Medium
   - Difficulty: Easy

4. **Add Missing Translation Keys**
   - Estimated time: 15 minutes
   - Impact: High
   - Difficulty: Easy

### Priority 2 (Important - Do Next)

5. **Add Error Handling**
   - Estimated time: 1 hour
   - Impact: Medium
   - Difficulty: Medium

6. **Fix Accessibility Issues**
   - Estimated time: 2-3 hours
   - Impact: High
   - Difficulty: Medium

7. **Add Lazy Loading**
   - Estimated time: 1 hour
   - Impact: Medium
   - Difficulty: Easy

8. **Remove Code Duplication**
   - Estimated time: 30 minutes
   - Impact: Low
   - Difficulty: Easy

### Priority 3 (Nice to Have - Do Later)

9. **Standardize Naming Conventions**
   - Estimated time: 1-2 hours
   - Impact: Low
   - Difficulty: Easy

10. **Add Props Validation**
    - Estimated time: 1 hour
    - Impact: Low
    - Difficulty: Easy

11. **Decide on Router Usage**
    - Estimated time: 30 minutes (remove) or 3-4 hours (implement)
    - Impact: Low
    - Difficulty: Easy (remove) or Medium (implement)

---

## 📚 Additional Recommendations

### 1. Add Environment Variables

Create `.env` files for configuration:

```bash
# .env.development
VITE_APP_TITLE=Portfolio - Pruek Suphanat
VITE_APP_DESCRIPTION=Frontend Developer Portfolio
VITE_API_URL=http://localhost:3000

# .env.production
VITE_APP_TITLE=Portfolio - Pruek Suphanat
VITE_APP_DESCRIPTION=Frontend Developer Portfolio
VITE_API_URL=https://api.example.com
```

### 2. Add SEO Meta Tags

```typescript
// src/composables/useSeo.ts
import { useHead } from '@vueuse/head'

export const useSeo = (title: string, description: string) => {
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
  })
}
```

### 3. Add Loading States

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <div v-if="isLoading" class="loading-spinner">
    Loading...
  </div>
  <div v-else>
    <!-- Content -->
  </div>
</template>
```

### 4. Add Error Boundary

```vue
<!-- src/components/ErrorBoundary.vue -->
<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const error = ref<Error | null>(null)

onErrorCaptured((err) => {
  error.value = err
  return false
})
</script>

<template>
  <div v-if="error" class="error-boundary">
    <h2>Something went wrong</h2>
    <p>{{ error.message }}</p>
  </div>
  <slot v-else />
</template>
```

### 5. Improve TypeScript Configuration

```json
// tsconfig.json - Add these options
{
  "compilerOptions": {
    // ... existing options
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

---

## 🎯 Summary

**Total Issues Found:** 12
- Critical: 4
- Major: 4
- Minor: 4

**Estimated Total Time to Fix All Issues:** 12-18 hours

**Recommended Approach:**
1. Start with Priority 1 issues (most impact, easiest to fix)
2. Move to Priority 2 issues (important for production)
3. Address Priority 3 issues as time permits
4. Implement additional recommendations for polish

**Expected Outcome:**
- More maintainable codebase
- Better user experience
- Improved accessibility
- Better performance
- Production-ready code quality

---

## 📖 Resources

- [Vue 3 Best Practices](https://vuejs.org/guide/best-practices/)
- [TypeScript with Vue](https://vuejs.org/guide/typescript/overview.html)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Vue Performance Optimization](https://vuejs.org/guide/best-practices/performance.html)
