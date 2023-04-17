import { ref } from "vue";
import { defineStore } from "pinia";

import { useRouter } from "vue-router";
import { useJwt } from "@vueuse/integrations/useJwt";

import { fakeJwtToken } from "../includes/fake-jwt-token";

export default defineStore('user', () => {

    const router = useRouter();

    const user = ref({
        profile: {},
        authed: false
    });

    const isUserAuthed = () => {
        const userProfile = localStorage.getItem('user-profile');

        if(!userProfile) return user.value.authed = false;
        
        const userProfileData = JSON.parse( userProfile );
        const { payload } = useJwt( userProfileData.token );
        
        if( ( payload.value.exp - (Date.now() / 1000) ) < 0) user.value.authed = false;
        else user.value.authed = true;
    };

    const userCreated = (data) => {

        // fake token
        const token = fakeJwtToken();
        localStorage.setItem('user-profile', JSON.stringify( {...data, token} ));
        
        user.value.profile = data;
        user.value.authed = true;
        router.push({name: 'dashboard'});
    };

    const loggedIn = (data) => {
        localStorage.setItem('user-profile', JSON.stringify( data ));
        user.value.authed = true;
        router.push({name: 'dashboard'});
    };

    const loggingOut = () => {
        localStorage.removeItem('user-profile');
        user.value.authed = false;
        router.push({name: 'home'});
    };

    return {
        user,
        loggingOut,
        loggedIn,
        userCreated,
        isUserAuthed
    };

});