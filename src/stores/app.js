import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore('app', () => {

    const lang = ref('en');

    return {
        lang
    }
});