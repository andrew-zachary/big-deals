import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import ar from '../locales/ar.json';

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {en, ar}
});

export default i18n;