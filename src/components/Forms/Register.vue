<script setup>

    import { ref } from "vue";
    import Btn from "../Common/Btn.vue";
    import FormInputText from "../Common/FormInputText.vue";
    import Loading from "../../layouts/Loading.vue";
    import { useTranslate } from "../../composables/useTranslate";
    import { useSimpleBar } from "../../composables/useSimpleScroll";
    import useBDaFetch from "../../includes/bdFetch";
    import useUserStore from "../../stores/user";

    const registerForm = ref(null);

    const userStore = useUserStore();
    const { doTranslate } = useTranslate();

    const schema = {
        first_name: 'required',
        last_name: 'required',
        email: 'required|email',
        password: 'required',
        confirm_password: 'confirmed:@password'
    };

    const registerValues = ref({
        first_name: '',
        last_name: '',
        email: ''
    });
    
    const { execute, isFetching } = useBDaFetch('users/add', {
        immediate: false, 
        onFetchError(ctx) { 
            console.log(JSON.parse(ctx.data)) 
        },
        afterFetch({data}) {
            userStore.userCreated(data);
        }
    }).post(registerValues);

    const preTranslate = (target) => {
        return `forms.register.${target}`;
    };

    const submit = (values) => {
        registerValues.value = {
            'firstName': values.first_name, 
            'lastName': values.last_name, 
            'email': values.email
        };
        execute();
    };

    useSimpleBar({elementRef:registerForm});

</script>
<template>
    <div class="w-full h-full overflow-auto max-w-bd-xs flex flex-col" ref="registerForm">
        <Loading v-if="isFetching"/>
        <vee-form @submit="submit" :validationSchema="schema" class="p-6">
            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                <label for="first_name" class="text-secondary dark:text-primary-dark">
                    {{ doTranslate( preTranslate('first_name') ) }}
                </label>
                <vee-field name="first_name" v-slot="{field, errors}">
                    <FormInputText name="first_name" type="text" v-bind="field" />
                    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                        {{ doTranslate( preTranslate(errors[0]) ) }}
                    </div>
                </vee-field>
            </div>
            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                <label for="last_name" class="text-secondary dark:text-primary-dark">
                    {{ doTranslate( preTranslate('last_name') ) }}
                </label>
                <vee-field name="last_name" v-slot="{field, errors}">
                    <FormInputText name="last_name" type="text" v-bind="field" />
                    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                        {{ doTranslate( preTranslate(errors[0]) ) }}
                    </div>
                </vee-field>
            </div>
            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                <label for="email" class="text-secondary dark:text-primary-dark">
                    {{ doTranslate( preTranslate('email') ) }}
                </label>
                <vee-field name="email" v-slot="{field, errors}" :validateOnInput="true">
                    <FormInputText name="email" type="text" v-bind="field" />
                    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
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
                    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                        {{ doTranslate( preTranslate(errors[0]) ) }}
                    </div>
                </vee-field>
            </div>
            <div class="mt-8 flex flex-col text-3xl capitalize font-mont">
                <label for="confirm_password" class="text-secondary dark:text-primary-dark">
                    {{ doTranslate( preTranslate('confirm_password') ) }}
                </label>
                <vee-field name="confirm_password" v-slot="{field, errors}" :validateOnInput="true">
                    <FormInputText name="confirm_password" type="password" v-bind="field" />
                    <div v-if="errors.length" class="mt-2 text-2xl text-red-600 dark:text-red-400 font-popp font-medium">
                        {{ doTranslate( preTranslate(errors[0]) ) }}
                    </div>
                </vee-field>
            </div>
            <div id="register-ctrl" class="w-full mt-8 flex">
                <Btn :label="doTranslate( preTranslate('btn') )" class="sm w-full" type="submit" />
            </div>
        </vee-form>
    </div>
</template>
<style></style>