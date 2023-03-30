import { useI18n } from 'vue-i18n';

export function useTranslate() {

    const {t, locale} = useI18n();

    const doTranslate = txt => t(txt.toLowerCase());
    const changeLocales = lang => locale.value = lang;

    return { doTranslate, changeLocales };
}