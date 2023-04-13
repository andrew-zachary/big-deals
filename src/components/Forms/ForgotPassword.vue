<script setup>

import Btn from "../Common/Btn.vue";
import FormInputText from "../Common/FormInputText.vue";

import { useTranslate } from "../../composables/useTranslate";

const { doTranslate } = useTranslate();
const schema = {
    email: 'required|email'
};
const preTranslate = (target) => {
    return `forms.forgot_password.${target}`;
};
const submit = (values) => {
    console.log(values);
};
</script>
<template>
    <vee-form class="max-w-3xl mx-auto p-4" @submit="submit" :validationSchema="schema">
        <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
            <label for="email" class="text-secondary dark:text-primary-dark">
                {{ doTranslate( preTranslate('email') ) }}
            </label>
            <vee-field name="email" v-slot="{ field, errors }" :validateOnInput="true">
                <FormInputText name="email" type="text" v-bind="field" />
                <div v-if="errors.length"
                    class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                    {{ doTranslate( preTranslate(errors[0]) ) }}
                </div>
            </vee-field>
        </div>
        <div id="forgot-password-ctrl" class="w-full mt-8 flex">
            <Btn :label="doTranslate( preTranslate('btn') )" class="sm w-full" type="submit" />
        </div>
    </vee-form>
</template>