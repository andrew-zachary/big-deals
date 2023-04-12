<script setup>

import { useTranslate } from "../composables/useTranslate";
import { useRouter } from "vue-router";

import Logo from "../assets/logo.vue";
import BtnIconRounded from "../components/Common/BtnIconRounded.vue";
import Btn from "../components/Common/Btn.vue";

const { doTranslate } = useTranslate();
const router = useRouter();

</script>

<template>

<div class="w-full h-full flex flex-col">
    <div class="grow">
        <div class="p-4 h-full flex flex-col justify-center">
            <div class="w-full">
                <Logo />
            </div>
            <div id="start-browsing" class="w-full flex justify-center">
                <Btn :label="doTranslate('home.start_browsing')" class="mt-8" @click="router.push('/products')" />
            </div>
        </div>
    </div>
    <div id="home-footer" class="p-8 flex justify-end">
        <ul id="social-links" class="w-full flex justify-between">
            <li>
                <BtnIconRounded class="sm" icon="pi pi-facebook" />
            </li>
            <li>
                <BtnIconRounded class="sm" icon="pi pi-twitter" />
            </li>
            <li>
                <BtnIconRounded class="sm" icon="pi pi-youtube" />
            </li>
        </ul>
    </div>
</div>

</template>

<style lang="scss">

    #start-browsing {
        
        button {
            @apply text-xs #{!important};
            text-transform: uppercase;
        }

        @media screen and (min-width: 512px) {
            
            button {
                @apply text-md #{!important};
                width: 100%;
            }
        }
    }

    #social-links {
        max-width: 15rem;
    }
</style>