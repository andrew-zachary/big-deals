<script setup>

defineProps(['icon', 'fontSize']);

</script>

<template>
    <Button :class="fontSize" rounded :icon="icon" />
</template>

<style lang="scss">

.p-button-icon-only {
    @apply bg-primary hover:bg-primary-dim #{!important};
    @apply shadow-secondary #{!important};
    @apply border-0 #{!important};

    &.sm {
        @apply p-8 #{!important};

        .p-button-icon::before {
            @apply text-sm text-white #{!important};
        }
    }

    &.md {
        @apply p-10 #{!important};

        .p-button-icon::before {
            @apply text-md text-white #{!important};
        }
    }

    &.lg {
        @apply p-10 #{!important};

        .p-button-icon::before {
            @apply text-lg text-white #{!important};
        }
    }

    &.xl {
        @apply p-10 #{!important};

        .p-button-icon::before  {
            @apply text-xl text-white #{!important};
        }
    }

    &.xxl {
        width: 9rem!important;
        height: 9rem!important;
        @apply p-10 #{!important};

        .p-button-icon::before {
            @apply text-xl text-white #{!important};
        }
    }
}

</style>