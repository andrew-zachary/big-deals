<script setup>

defineProps(['value']);

</script>

<template>
    <i v-badge="value" class="cart-toggle-btn pi pi-shopping-cart p-overlay-badge" />
</template>

<style lang="scss">
.cart-toggle-btn {
    @apply text-lg text-white #{!important};
    @apply bg-primary dark:bg-primary-dark #{!important};
    @apply hover:bg-primary-dim dark:hover:bg-primary-dim-dark #{!important};
    @apply border-2 border-secondary;
    @apply p-4 #{!important};
    @apply rounded-full #{!important};
    @apply shadow-base dark:shadow-base-dark #{!important};
    
    .p-badge {
        height: 3rem!important;
        min-width: 3rem!important;
        line-height: 3rem!important;
        padding: 0rem 0.75rem;
        
        @apply text-sm #{!important};
        @apply bg-primary dark:bg-primary-dark #{!important};
        @apply border-2 border-secondary;

        @include withRtl(right, 0, 100%);
    }
}
</style>
