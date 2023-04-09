<script setup>

defineProps(['label', 'icon', 'size']);

</script>

<template>
    <Button :label="label" :icon="icon" class="flat font-ssp" :class="[size]" />
</template>

<style lang="scss">
    .flat.p-button {
        @apply hover:bg-primary-dim #{!important};
        @apply border-0 #{!important};
        @apply shadow-base dark:shadow-base-dark #{!important};
        @apply bg-primary dark:bg-primary-dark #{!important};

        &.sm span {
            @apply text-sm capitalize #{!important};
        }

        &.md span {
            @apply text-md capitalize #{!important};
        }

        &.lg span {
            @apply text-lg capitalize #{!important};
        }
    }
</style>