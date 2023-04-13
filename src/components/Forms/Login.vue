<script setup>
import { RouterLink } from "vue-router";

import Btn from "../Common/Btn.vue";
import FormInputText from "../Common/FormInputText.vue";

import { useTranslate } from "../../composables/useTranslate";

const { doTranslate } = useTranslate();
const schema = {
    email: 'required|email',
    password: 'required'
};
const preTranslate = (target) => {
    return `forms.login.${target}`;
}
const submit = (values) => {
    console.log(values);
};
</script>
<template>
    <div class="flex flex-col">
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
            <div id="login-ctrl" class="w-full mt-8 flex justify-end">
                <Btn :label="doTranslate( preTranslate('btn') )" class="sm" type="submit" />
            </div>
        </vee-form>
        <div id="forgot-password-ctrl" class="text-3xl flex justify-center mt-12">
            <RouterLink class="font-ssp font-regular text-secondary dark:text-primary-dark 
            border-b border-primary dark:border-primary-dark
            display-block" to="/forgot-password">
                {{ doTranslate( preTranslate("forgot_password_btn") ) }}
            </RouterLink>
        </div>
    </div>
</template>
<style></style>