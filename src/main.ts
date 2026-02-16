import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

// Import Tailwind CSS
import "./assets/styles/tailwind.css";
// Import global styles
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

// Set global error handler
app.config.errorHandler = errorHandler;

// Mount application
app.mount("#app");
