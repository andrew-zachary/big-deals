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
    const darkMode = ref(false);

    const setCurrentLang = (cl) => currentLang.value = cl;
    const toggleDarkMode = () => {

        darkMode.value = !darkMode.value;

        if(darkMode.value) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return {
        langs,
        currentLang,
        darkMode,
        setCurrentLang,
        toggleDarkMode
    }

});