<script setup>

    import { useTranslate } from '../../composables/useTranslate';

    import Btn from '../Common/Btn.vue';

    const { doTranslate } = useTranslate();
    const emits = defineEmits(['changeTab']);

</script>
<template>
    <div class="h-full flex flex-col justify-center items-center">
        <h1 class="text-lg text-secondary dark:text-white font-ssp font-bold capitalize">{{ doTranslate('cart.order_details') }}</h1>
        <div class="mt-8">
            <Btn :label="doTranslate('cart.back_to_cart_list')" size="sm" @click="emits('changeTab', 'list')" />
        </div>
    </div>
</template>
<style></style>