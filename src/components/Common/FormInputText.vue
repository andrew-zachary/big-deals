<script setup></script>
<template>

    <InputText class="w-full mt-4 p-4 
    text-sm text-secondary dark:text-white font-ssp 
    border-2 border-primary dark:border-primary-dark
    bg-primary-bg dark:bg-primary-bg-dark" />

</template>
<style lang="scss">

    .p-inputtext {

        &:focus, &:hover {
            box-shadow: none !important;
            @apply border-primary dark:border-primary-dark #{!important};
        }
    }

</style>