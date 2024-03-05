import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import arabic from "./languages/ar.json";
import english from "./languages/en.json";
import french from "./languages/fr.json";
import germany from "./languages/gr.json";

const resources = {
    en: {
        translation: english,
    },
    ar: {
        translation: arabic,
    },
    fr: {
        translation: french,
    },
    gr: {
        translation: germany,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        detection: {
            order: ["localStorage", "htmlTag"], // Specify detection order
            caches: ["localStorage"], // Specify where to cache the language
        },
        fallbackLng: "en", // Specify a fallback language
        interpolation: {
            escapeValue: false, // Not needed for React as it escapes by default
        },
        react: {
            useSuspense: false, // Disable suspense to avoid errors related to async rendering
        },
    });

export default i18n;
