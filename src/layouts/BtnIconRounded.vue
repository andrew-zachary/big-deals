<script setup>

defineProps(['icon']);

</script>

<template>
    <Button rounded :icon="icon" />
</template>

<style lang="scss">

.p-button-icon-only {
    @apply bg-primary hover:bg-primary-dim #{!important};
    @apply shadow-secondary #{!important};
    @apply border-0 #{!important};
    @apply p-8 #{!important};

    span {

        &:before {
            @apply text-sm text-white #{!important};
        }
    }
}

</style>