import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations

// English (Default)
import headerEn from '../locales/en/header.json';
import heroSectionEn from '../locales/en/heroSection.json';

// French 
import headerFr from '../locales/fr/header.json';
import heroSectionFr from '../locales/fr/heroSection.json';

i18n
    .use(LanguageDetector) // Detects user's language
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en: {
                header: headerEn,
                heroSection: heroSectionEn,
            },
            fr: {
                header: headerFr,
                heroSection: heroSectionFr,
            },
        },
        fallbackLng: 'en', // Default language
        ns: ['header', 'translation'], // Define namespaces
        defaultNS: 'header', // Default namespace
        interpolation: { escapeValue: false }, // React already escapes
    });