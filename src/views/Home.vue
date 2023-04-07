<script setup>

import Logo from "../assets/logo.vue";
import BtnIconRounded from "../components/BtnIconRounded.vue";

</script>

<template>

<div class="h-full flex flex-col">
    <Logo class="grow" />
    <div id="home-footer" class="p-8 flex justify-end">
        <div id="social-links" class="w-full flex justify-between">
            <BtnIconRounded class="sm" icon="pi pi-facebook" />
            <BtnIconRounded class="sm" icon="pi pi-twitter" />
            <BtnIconRounded class="sm" icon="pi pi-youtube" />
        </div>
    </div>
</div>

</template>

<style lang="scss">
    #social-links {
        max-width: 15rem;
    }
</style>