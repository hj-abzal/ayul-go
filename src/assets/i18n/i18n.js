import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationENG from './eng.json'
import translationKZ from './kz.json'
import translationRU from './ru.json'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
    kz: {
        translation: translationKZ
    },
    ru: {
        translation: translationRU
    },
    eng: {
        translation: translationENG
    }
};
const lang = localStorage.getItem('lang-key')
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: lang ? lang : 'kz',
        resources,
        detection: {
            order: ['htmlTag', 'localStorage', 'cookie', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        react: {useSuspense: false},
        interpolation: {
            escapeValue: false
        },

    });

export default i18n;