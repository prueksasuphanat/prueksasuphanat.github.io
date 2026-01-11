import { createI18n } from "vue-i18n";
import en from "./locales/en";
import th from "./locales/th";

const savedLocale = localStorage.getItem("lang") || "en";

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: "en",
  messages: {
    en,
    th,
  },
});

export default i18n;
