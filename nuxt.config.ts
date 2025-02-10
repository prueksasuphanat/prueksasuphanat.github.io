import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: false },

  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "@/assets/css/main.css",
  ],

  modules: ["nuxt-primevue", "@pinia/nuxt"],
  primevue: {},

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2025-02-10",
});
