import i18n from "i18next";
import Backend from "i18next-http-backend";

i18n.use(Backend).init({
  fallbackLng: "ru",
  debug: __IS_DEV__ ? true : false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
