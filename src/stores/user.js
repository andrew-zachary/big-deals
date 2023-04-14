import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore('user', () => {

    const user = ref({
        authed: true
    });

    return {
        user
    };

});