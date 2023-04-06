<script setup>

defineProps(['label', 'icon']);

</script>

<template>
    <Button :label="label" :icon="icon" class="flat bg-primary" />
</template>

<style lang="scss">
    .flat.p-button {
        @apply hover:bg-primary-dim #{!important};
        @apply text-sm capitalize #{!important};

        .p-button-icon::before { 
            @apply text-md capitalize #{!important};
        }
    }
</style>