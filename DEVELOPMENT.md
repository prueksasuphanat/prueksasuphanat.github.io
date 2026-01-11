# Development Tools Setup Guide

## Overview

This document describes all the development tools that have been added to the portfolio project to improve code quality, testing, and maintainability.

---

## 🛠️ Tools Added

### 1. ESLint - Code Linting

**Purpose**: Identifies and fixes code quality issues and enforces coding standards.

**Configuration**: `.eslintrc.cjs`

**Features**:
- TypeScript support
- Vue 3 specific rules
- Integration with Prettier
- Auto-fix on save

**Usage**:
```bash
# Lint and fix all files
npm run lint
```

**Rules**:
- Multi-word component names disabled (for single-word components like `Home`, `Footer`)
- TypeScript `any` type warnings
- Unused variables warnings (except those prefixed with `_`)

---

### 2. Prettier - Code Formatting

**Purpose**: Automatic code formatting for consistent style.

**Configuration**: `.prettierrc.json`

**Settings**:
- No semicolons
- Single quotes
- 2 space indentation
- 100 character line width
- ES5 trailing commas
- Arrow function parentheses avoided when possible

**Usage**:
```bash
# Format all files in src/
npm run format
```

---

### 3. Vitest - Unit Testing

**Purpose**: Fast unit testing framework for Vue 3 components.

**Configuration**: `vitest.config.ts`

**Features**:
- Happy DOM environment for browser APIs
- Coverage reporting
- TypeScript support
- Fast watch mode

**Usage**:
```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

**Example Test**: `src/components/__tests__/Home.spec.ts`

---

### 4. Vue Router - Routing

**Purpose**: Official routing library for Vue.js applications.

**Configuration**: `src/router/index.ts`

**Features**:
- HTML5 history mode
- Lazy loading routes
- Scroll behavior handling
- Hash navigation support

**Usage**:
```typescript
import router from '@/router'

// Navigate programmatically
router.push('/about')

// In template
<router-link to="/about">About</router-link>
<router-view />
```

**Adding Routes**:
```typescript
// src/router/index.ts
{
  path: '/about',
  name: 'about',
  component: () => import('@/views/About.vue'),
}
```

---

### 5. Pinia - State Management

**Purpose**: Official state management library for Vue 3.

**Configuration**: `src/stores/`

**Features**:
- TypeScript support
- Composition API style
- Devtools integration
- Simple and intuitive API

**Usage**:
```typescript
import { useAppStore } from '@/stores'

const store = useAppStore()

// Access state
console.log(store.locale)

// Call actions
store.setLocale('th')
```

**Creating Stores**:
```typescript
// src/stores/myStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyStore = defineStore('my-store', () => {
  const count = ref(0)
  
  const increment = () => {
    count.value++
  }
  
  return { count, increment }
})
```

---

## 📁 New Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── __tests__/        # Component tests
│   │   │   └── Home.spec.ts
│   │   └── ...
│   ├── composables/           # Reusable composition functions
│   │   └── useScroll.ts
│   ├── data/                  # Mock data and constants
│   │   ├── portfolio.ts
│   │   ├── education.ts
│   │   └── skills.ts
│   ├── i18n/                  # Internationalization
│   ├── router/                # Vue Router configuration
│   │   └── index.ts
│   ├── stores/                # Pinia stores
│   │   ├── app.ts
│   │   └── index.ts
│   ├── types/                 # TypeScript types
│   │   ├── portfolio.ts
│   │   ├── education.ts
│   │   ├── skills.ts
│   │   └── index.ts
│   ├── utils/                 # Utility functions
│   │   └── scroll.ts
│   └── ...
├── .eslintrc.cjs              # ESLint configuration
├── .eslintignore              # ESLint ignore patterns
├── .prettierrc.json           # Prettier configuration
├── .prettierignore            # Prettier ignore patterns
└── vitest.config.ts           # Vitest configuration
```

---

## 🚀 Available Scripts

```json
{
  "dev": "vite",                              // Start dev server
  "build": "vue-tsc && vite build",           // Build for production
  "preview": "vite preview",                  // Preview production build
  "test": "vitest",                           // Run tests
  "test:ui": "vitest --ui",                   // Run tests with UI
  "test:coverage": "vitest --coverage",       // Run tests with coverage
  "lint": "eslint . --fix",                   // Lint and fix code
  "format": "prettier --write src/"           // Format code
}
```

---

## 🔧 IDE Setup

### VS Code

**Recommended Extensions**:
- ESLint
- Prettier - Code formatter
- Vue - Official
- TypeScript Vue Plugin (Volar)

**Settings** (`.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ]
}
```

---

## 📝 Best Practices

### Testing
- Write tests for all new components
- Aim for >80% code coverage
- Test user interactions, not implementation details
- Use data-testid for selecting elements

### Code Quality
- Run `npm run lint` before committing
- Run `npm run format` to ensure consistent formatting
- Fix all ESLint errors before pushing
- Keep functions small and focused

### State Management
- Use Pinia for global state
- Use composables for reusable logic
- Keep component state local when possible
- Don't overuse global state

### Routing
- Use lazy loading for routes
- Implement proper navigation guards if needed
- Handle 404 pages
- Use named routes for better maintainability

---

## 🐛 Troubleshooting

### ESLint Errors

**Issue**: ESLint shows errors in IDE
**Solution**: Restart VS Code or run `npm run lint` to see actual errors

### Test Failures

**Issue**: Tests fail after changes
**Solution**: Update tests to match new component behavior or fix the code

### Type Errors

**Issue**: TypeScript shows type errors
**Solution**: Check `tsconfig.json` and ensure all types are properly defined

---

## 📚 Additional Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [Vitest Documentation](https://vitest.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue 3 Documentation](https://vuejs.org/)

---

## 🎯 Next Steps

1. Write more unit tests for components
2. Add E2E tests with Playwright or Cypress
3. Set up CI/CD pipeline
4. Add pre-commit hooks with Husky
5. Implement code coverage thresholds
6. Add component documentation with Storybook
