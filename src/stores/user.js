import { ref } from "vue";
import { defineStore } from "pinia";

import { useRouter } from "vue-router";

export default defineStore('user', () => {

    const router = useRouter();

    const user = ref({
        profile: {},
        authed: false
    });

    const userCreated = (data) => {
        user.value.profile = data;
        user.value.authed = true;
        router.push({name: 'dashboard'});
    };

    const loggedIn = () => {
        user.value.authed = true;
        router.push({name: 'dashboard'});
    };

    const loggingOut = () => {
        user.value.authed = false;
        router.push({name: 'home'});
    };

    return {
        user,
        loggingOut,
        loggedIn,
        userCreated
    };

});