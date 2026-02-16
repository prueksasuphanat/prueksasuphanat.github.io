# Portfolio - Pruek Suphanat

A modern, scalable portfolio website built with Vue 3, TypeScript, and Vite. Features bilingual support (English/Thai), responsive design, and follows Vue 3 best practices.

## 🚀 Features

- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety and better developer experience
- **Vite** for fast development and optimized builds
- **Pinia** for state management
- **Vue Router** for navigation with lazy loading
- **Internationalization** (vue-i18n) - English and Thai
- **Responsive Design** - Works on all devices
- **Smooth Scrolling** navigation
- **Modern Architecture** - Scalable component structure
- **Best Practices** - Following Vue 3 and TypeScript conventions

## 📋 Sections

- **Home** - Introduction with animated profile and social links
- **About Me** - Personal information, experience, and skills showcase
- **Education & Experience** - Interactive timeline with tab navigation
- **Portfolio** - Project showcase with live demos and GitHub links
- **Contact** - Contact information and functional form
- **Footer** - Quick navigation and social media links

## 🛠️ Tech Stack

### Core
- Vue 3.4.21 - Progressive JavaScript framework
- TypeScript 5.3.3 - Type-safe JavaScript
- Vite 5.1.4 - Next generation frontend tooling
- Pinia 2.1.7 - State management
- Vue Router 4.2.5 - Official router

### UI & Styling
- CSS3 with custom properties
- Tailwind CSS 3.4.19 (configured)
- Responsive design with mobile-first approach

### Internationalization
- vue-i18n 9.9.1 - i18n plugin for Vue

### Icons
- Unicons - Line icons
- Boxicons - Web icons
- Material Symbols - Google icons

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Server will start at http://localhost:3000
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check
```

## 📁 Project Structure (Refactored)

```
portfolio/
├── src/
│   ├── components/
│   │   ├── common/              # Reusable components
│   │   │   ├── LanguageSwitch.vue
│   │   │   └── SocialLinks.vue
│   │   ├── layout/              # Layout components
│   │   │   ├── TheHeader.vue
│   │   │   └── TheFooter.vue
│   │   └── features/            # Feature-specific components
│   │       ├── about/
│   │       ├── contact/
│   │       ├── education/
│   │       ├── home/
│   │       └── portfolio/
│   ├── views/                   # Page-level components
│   │   ├── HomeView.vue
│   │   └── NotFoundView.vue
│   ├── layouts/                 # Layout wrappers
│   │   └── DefaultLayout.vue
│   ├── composables/             # Reusable composition functions
│   │   ├── core/
│   │   │   └── useScroll.ts
│   │   └── features/
│   │       └── useLanguage.ts
│   ├── stores/                  # Pinia stores
│   │   └── modules/
│   │       └── app.ts
│   ├── router/                  # Vue Router configuration
│   │   └── index.ts
│   ├── i18n/                    # Internationalization
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── en.ts
│   │       └── th.ts
│   ├── data/                    # Static data
│   │   ├── about.ts
│   │   ├── education.ts
│   │   ├── portfolio.ts
│   │   └── skills.ts
│   ├── types/                   # TypeScript type definitions
│   │   ├── about.ts
│   │   ├── components.ts
│   │   ├── education.ts
│   │   ├── portfolio.ts
│   │   └── skills.ts
│   ├── constants/               # Application constants
│   │   ├── app.ts
│   │   ├── navigation.ts
│   │   └── social.ts
│   ├── config/                  # Configuration files
│   │   ├── app.ts
│   │   └── seo.ts
│   ├── utils/                   # Utility functions
│   │   ├── storage.ts
│   │   ├── scroll.ts
│   │   └── helpers/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css
│   ├── App.vue                  # Root component
│   ├── main.ts                  # Application entry
│   └── vite-env.d.ts
├── public/
│   └── images/                  # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## 🌐 Language Support

The application supports two languages:

- **English (EN)** - Default
- **Thai (TH)**

Toggle between languages using the switch in the navigation bar. Language preference is saved in localStorage.

## 📱 Responsive Design

The portfolio is fully responsive and works on:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎨 Customization

### Update Personal Information

Edit the translation files in `src/i18n/locales/`:

- `en.ts` - English translations
- `th.ts` - Thai translations

### Update Projects

Modify the Portfolio component at `src/components/Portfolio.vue`

### Update Styles

Edit the main CSS file at `src/assets/styles/main.css`

### Update Images

Place images in the `public/images/` directory and reference them as `/images/filename.jpg`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Suphanat Panyakom (Pruek)**

- LinkedIn: [suphanat-panyakom](http://www.linkedin.com/in/suphanat-panyakom-1483522bb)
- GitHub: [@prueksasuphanat](https://github.com/prueksasuphanat)
- Instagram: [@py24.7](https://www.instagram.com/py24.7/)

## 🙏 Acknowledgments

- Icons from [Unicons](https://iconscout.com/unicons), [Boxicons](https://boxicons.com/), and [Material Symbols](https://fonts.google.com/icons)
- Built with [Vue.js](https://vuejs.org/)
- Powered by [Vite](https://vitejs.dev/)


## 🏗️ Architecture

### Component Organization

Components are organized by type and feature:

- **Layout Components** (`layout/`) - Header, Footer, and other layout elements
- **Common Components** (`common/`) - Reusable UI components
- **Feature Components** (`features/`) - Domain-specific components organized by feature

### State Management

Using Pinia with composition API:
- Modular store structure in `stores/modules/`
- Type-safe with TypeScript
- Reactive state with `storeToRefs`

### Composables

Reusable composition functions:
- **Core** - Framework-level composables (scroll, etc.)
- **Features** - Feature-specific composables (language, etc.)

### Type Safety

Full TypeScript support:
- Type definitions in `types/`
- Strongly typed components with `defineProps<T>()`
- Type-safe stores and composables

## 🎨 Customization

### Update Personal Information

1. **Data Files** - Edit files in `src/data/`:
   - `about.ts` - Personal info, experience, projects
   - `education.ts` - Education and work history
   - `portfolio.ts` - Project showcase
   - `skills.ts` - Skills and expertise

2. **Constants** - Edit `src/constants/`:
   - `social.ts` - Social media links
   - `navigation.ts` - Navigation items

3. **Config** - Edit `src/config/`:
   - `app.ts` - App configuration and contact info
   - `seo.ts` - SEO metadata

### Update Translations

Edit translation files in `src/i18n/locales/`:
- `en.ts` - English translations
- `th.ts` - Thai translations

### Update Styles

- Global styles: `src/assets/styles/main.css`
- Component styles: Scoped styles in `.vue` files
- Tailwind utilities: Available for rapid styling

### Add New Features

1. Create feature components in `src/components/features/[feature-name]/`
2. Add data in `src/data/[feature-name].ts`
3. Add types in `src/types/[feature-name].ts`
4. Import in `src/views/HomeView.vue`

## 🔧 Development Guidelines

### Code Style

- Use `<script setup>` syntax
- Composition API preferred
- TypeScript for all new code
- Props and emits with TypeScript
- Composables for reusable logic

### Naming Conventions

- **Components**: PascalCase (e.g., `TheHeader.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useScroll.ts`)
- **Stores**: camelCase with `Store` suffix (e.g., `appStore.ts`)
- **Utils**: camelCase (e.g., `storage.ts`)
- **Types**: PascalCase for interfaces

### Best Practices

- Keep components small and focused
- Extract reusable logic to composables
- Use constants for configuration
- Type everything with TypeScript
- Add accessibility attributes
- Lazy load images with `loading="lazy"`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🌐 Language Support

The application supports two languages with persistent preference:

- **English (EN)** - Default language
- **Thai (TH)** - Full Thai translation

Language preference is saved in localStorage and synced with Pinia store.

## ⚡ Performance

- **Lazy Loading** - Routes and images
- **Code Splitting** - Automatic chunk splitting
- **Optimized Build** - Vite production optimizations
- **Type Checking** - Compile-time error detection

