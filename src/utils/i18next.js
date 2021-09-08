import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locals/en.json';
import ar from '../locals/ar.json';
i18next
    .use(initReactI18next)
    .init({
        initImmediate: false,
        preload: ["en", "ar"],
        fallbackLng: "en",
        lng: "en",
        resources: {
            en: en,
            ar: ar
        }
});