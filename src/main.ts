import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import "./assets/styles/tailwind.css";
import "./assets/styles/main.css";

// Error handler for production
const errorHandler = (err: unknown, _instance: unknown, info: string) => {
  console.error("Global error:", err);
  console.error("Error info:", info);
  // You can send errors to a logging service here
};

// Create Pinia instance
const pinia = createPinia();

// Create and configure Vue application
const app = createApp(App);

// Register plugins
app.use(pinia);
app.use(router);
app.use(i18n);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    }
  }
});


// Set global error handler
app.config.errorHandler = errorHandler;

// Mount application
app.mount("#app");
