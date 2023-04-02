import { useI18n } from 'vue-i18n';
import useAppStore from '../stores/app';

export function useTranslate() {

    const { t, locale } = useI18n();
    const { setCurrentLang } = useAppStore();

    const doTranslate = txt => t(txt.toLowerCase());
    const changeLocales = lang => {
        locale.value = lang.value;
        document.documentElement.dir = lang.dir;
        setCurrentLang(lang);
    };

    return { doTranslate, changeLocales };
}