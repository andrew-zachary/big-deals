<script setup>

    import { ref } from "vue";

    import useCartStore from "../../stores/cart";
    import { useTranslate } from "../../composables/useTranslate";
    import { useSimpleBar } from "../../composables/useSimpleScroll";
    import BtnIconRounded from "../Common/BtnIconRounded.vue";
    import Btn from "../Common/Btn.vue";

    const cartStore = useCartStore();
    const { doTranslate } = useTranslate();
    const cartList = ref(null);
    const emits = defineEmits(['changeTab', 'list']);

    useSimpleBar({elementRef: cartList});

</script>
<template>
    <div id="list-box" ref="cartList" class="h-full max-w-bd-sm mx-auto relative overflow-auto">    
        <div
            v-if="cartStore.items.length > 0" 
            class="w-full max-w-bd-sm mx-auto 
            pb-8 px-4 fixed z-10 
            bg-white dark:bg-primary-bg-dark"
        >
            <Btn :label="doTranslate('cart.submit')" icon="pi pi-shopping-cart" size="sm" @click="emits('changeTab', 'order')" />
        </div>
        <ul class="w-full px-2 pt-20">
            <li v-for="item of cartStore.items" :key="item.id" class="mt-8 text-secondary">
                <div class="text-sm text-secondary dark:text-white font-mont font-bold">{{ item.title }}</div>
                <div class="text-xs text-secondary dark:text-white font-ssp flex">
                    <span>{{ item.count }}</span>
                    <span class="px-2">{{ doTranslate('cart.for') }}</span>
                    <span class="px-2">$</span>
                    <span class="font-bold">{{ item.price * item.count }}</span>
                </div>
                <div class="flex">
                    <div class="p-4"><BtnIconRounded icon="pi pi-plus" @click="cartStore.addItem(item)" /></div>
                    <div class="p-4"><BtnIconRounded icon="pi pi-minus" @click="cartStore.removeItem(item)"/></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss"></style>