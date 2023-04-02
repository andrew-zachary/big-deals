import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore('app', () => {

    const langs = ref({
        default() {
            return this.available().filter( lang => lang.default )[0];
        },
        available() {
            return [
                {id: 1, label: 'en', value: 'en', dir: 'ltr', default: true},
                {id: 2, label: 'العربية', value: 'ar', dir: 'rtl'}
            ]
        }
    });

    const currentLang = ref(langs.value.default());

    const setCurrentLang = (cl) => currentLang.value = cl;

    return {
        langs,
        currentLang,
        setCurrentLang
    }

});