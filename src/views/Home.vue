<script setup>

import Logo from "../assets/logo.vue";
import BtnIconRounded from "../components/BtnIconRounded.vue";

</script>

<template>

<div class="w-full h-full flex flex-col">
    <div class="grow">
        <div class="h-full flex flex-col justify-center">
            <div class="w-full">
                <Logo />
            </div>
            <p class="mt-4 
                text-md text-center text-white 
                font-bold capitalize 
                bg-primary
                border-2 border-black">best offers for everyone</p>
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
    #social-links {
        max-width: 15rem;
    }
</style>