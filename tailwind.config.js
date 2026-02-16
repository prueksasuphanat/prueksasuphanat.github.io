/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title-color': 'hsl(var(--hue), var(--sat), 25%)',
        'title-color-dark': 'hsl(var(--hue), var(--sat), 20%)',
        'text-color': 'hsl(var(--hue), var(--sat), 46%)',
        'body-color': 'hsl(var(--hue), var(--sat), 98%)',
        'container-color': '#fff',
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
