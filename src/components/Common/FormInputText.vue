<script setup></script>
<template>

    <InputText class="w-full p-4 
    text-sm text-secondary dark:text-white font-ssp 
    border-2 border-primary dark:border-primary-dark
    bg-primary-bg dark:bg-primary-bg-dark" />

</template>
<style lang="scss">

    .p-inputtext {
        border-top: none !important;
        border-right: none !important;
        border-left: none !important;
        border-radius: 0 !important;

        &:focus, &:hover {
            box-shadow: none !important;
            @apply border-primary dark:border-primary-dark #{!important};
        }
    }

</style>