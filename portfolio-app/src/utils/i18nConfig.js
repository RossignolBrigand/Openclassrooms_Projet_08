import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations

// English (Default)
import headerEn from '../locales/en/header.json';
import footerEn from '../locales/en/footer.json';
import heroSectionEn from '../locales/en/heroSection.json';
import skillSectionEn from '../locales/en/skills.json';
import serviceSectionEn from '../locales/en/services.json';
import projectSectionEn from '../locales/en/services.json';
import contactSectionEn from '../locales/en/contact.json';

// French 
import headerFr from '../locales/fr/header.json';
import footerFr from '../locales/fr/footer.json';
import heroSectionFr from '../locales/fr/heroSection.json';
import skillSectionFr from '../locales/fr/skills.json';
import serviceSectionFr from '../locales/fr/services.json';
import projectSectionFr from '../locales/fr/projects.json';
import contactSectionFr from '../locales/fr/contact.json';


// Log all available languages as a const
export const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
];

i18n
    .use(LanguageDetector) // Detects user's language
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en: {
                header: headerEn,
                footer: footerEn,
                heroSection: heroSectionEn,
                skillSection: skillSectionEn,
                serviceSection: serviceSectionEn,
                projectSection: projectSectionEn,
                contactSection: contactSectionEn,
            },
            fr: {
                header: headerFr,
                footer: footerFr,
                heroSection: heroSectionFr,
                skillSection: skillSectionFr,
                serviceSection: serviceSectionFr,
                projectSection: projectSectionFr,
                contactSection: contactSectionFr,
            },
        },
        fallbackLng: 'en', // Default language
        ns: ['header', 'footer', 'heroSection', 'skillSection', 'serviceSection', 'projectSection', 'contactSection'], // Define namespaces
        defaultNS: 'header', // Default namespace
        interpolation: { escapeValue: false }, // React already escapes
    });