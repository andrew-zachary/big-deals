<script setup>

    defineProps(['value']);

</script>

<template>

    <i v-badge="value" 
        class="p-overlay-badge
        bg-primary dark:bg-primary-dark
        hover:bg-primary-dim dark:hover:bg-primary-dim-dark
        shadow-base dark:shadow-base-dark"
    />

</template>

<style lang="scss">

    .p-badge {
        @apply bg-primary dark:bg-primary-dark #{!important};
    }

</style>
