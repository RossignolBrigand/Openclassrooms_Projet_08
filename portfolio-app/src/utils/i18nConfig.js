import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import en from '../locales/en/translation.json';
import fr from '../locales/fr/translation.json';

i18n
    .use(LanguageDetector) // Detects user's language
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
        },
        fallbackLng: 'en', // Default language
        interpolation: { escapeValue: false }, // React already escapes
    });