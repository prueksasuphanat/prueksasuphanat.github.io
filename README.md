# Portfolio - Pruek Suphanat

A modern portfolio website built with Vue 3, TypeScript, and Vite. Features bilingual support (English/Thai) and responsive design.

## 🚀 Features

- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Vite** for fast development and optimized builds
- **Internationalization** (i18n) - English and Thai
- **Responsive Design** - Works on all devices
- **Smooth Scrolling** navigation
- **Modern UI** with clean design

## 📋 Sections

- **Home** - Introduction and social links
- **About Me** - Personal information and skills
- **Education & Experience** - Timeline of education and work history
- **Portfolio** - Showcase of projects
- **Contact** - Contact information and form
- **Footer** - Quick links and social media

## 🛠️ Tech Stack

- Vue 3.4.21
- TypeScript 5.3.3
- Vite 5.1.4
- vue-i18n 9.9.1
- CSS3

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
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Vue components
│   │   ├── Navbar.vue
│   │   ├── Home.vue
│   │   ├── AboutMe.vue
│   │   ├── Education.vue
│   │   ├── Portfolio.vue
│   │   ├── Contact.vue
│   │   └── Footer.vue
│   ├── i18n/               # Internationalization
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── en.ts
│   │       └── th.ts
│   ├── assets/
│   │   └── styles/
│   │       └── main.css
│   ├── App.vue             # Root component
│   ├── main.ts             # Application entry
│   └── vite-env.d.ts       # TypeScript declarations
├── public/
│   └── images/             # Static assets
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
