import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translations from './translations';
import 'moment/locale/nb';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    // When using duck-pattern with translations we suggest only one namespace.
    'nb-NO': {
      translations: translations['nb-NO'],
    },
  },
  fallbackLng: 'nb-NO',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
