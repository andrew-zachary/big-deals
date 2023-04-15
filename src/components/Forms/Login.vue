<script setup>

    import { ref } from "vue";
    import { RouterLink } from "vue-router";
    import Btn from "../Common/Btn.vue";
    import FormInputText from "../Common/FormInputText.vue";
    import { useTranslate } from "../../composables/useTranslate";
    import useBDaFetch from "../../includes/bdFetch";
    import useUserStore from "../../stores/user";

    const loggingValues = ref({});

    const { doTranslate } = useTranslate();
    const userStore = useUserStore();

    const { execute, isFetching, onFetchResponse } = useBDaFetch('auth/login', {
        immediate: false, 
        onFetchError(ctx) { 
            console.log(JSON.parse(ctx.data)) 
        }
    }).post(loggingValues);

    const schema = {
        email: 'required|email',
        password: 'required'
    };

    const preTranslate = (target) => {
        return `forms.login.${target}`;
    };

    const submit = (values) => {
        // form values pass to loggingValues ref
        loggingValues.value = {username: 'kminchelle',password: '0lelplR'};
        execute();
    };

    onFetchResponse((res) => {
        userStore.loggedIn();
    });

</script>
<template>
    <div class="w-full max-w-bd-xs flex flex-col px-4">
        <vee-form @submit="submit" :validationSchema="schema">
            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                <label for="email" class="text-secondary dark:text-primary-dark">
                    {{ doTranslate( preTranslate('email') ) }}
                </label>
                <vee-field name="email" v-slot="{field, errors}" :validateOnInput="true">
                    <FormInputText name="email" type="text" v-bind="field" />
                    <div v-if="errors.length" class="mt-2 
                    text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                        {{ doTranslate( preTranslate(errors[0]) ) }}
                    </div>
                </vee-field>
            </div>
            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                <label for="password" class="text-secondary dark:text-primary-dark">
                    {{ doTranslate( preTranslate('password') ) }}
                </label>
                <vee-field name="password" v-slot="{field, errors}">
                    <FormInputText name="password" type="password" v-bind="field" />
                    <div v-if="errors.length" class="mt-2 
                    text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                        {{ doTranslate( preTranslate(errors[0]) ) }}
                    </div>
                </vee-field>
            </div>
            <div id="login-ctrl" class="w-full mt-8 flex">
                <Btn :label="doTranslate( preTranslate('btn') )" class="sm w-full" type="submit" />
            </div>
        </vee-form>
        <div id="forgot-password-ctrl" class="font-ssp font-regular
            text-3xl text-secondary dark:text-primary-dark
            flex justify-center mt-12"
        >
            <RouterLink class="border-b border-primary dark:border-primary-dark
                display-block" to="account/forgot-password"
            >
                {{ doTranslate( preTranslate("forgot_password_btn") ) }}
            </RouterLink>
            <span class="mx-8"> - </span>
            <RouterLink class="border-b border-primary dark:border-primary-dark
                display-block" to="account/register"
            >
                {{ doTranslate( preTranslate("sign_up_btn") ) }}
            </RouterLink>
        </div>
    </div>
</template>
<style></style>