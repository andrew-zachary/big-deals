<script setup>

import { ref } from "vue";

import useCartStore from "../stores/cart";
import { useTranslate } from "../composables/useTranslate";
import BtnIconRounded from "./BtnIconRounded.vue";
import { useSimpleBar } from "../composables/useSimpleScroll";

const cartStore = useCartStore();
const { doTranslate } = useTranslate();
const cartList = ref(null);

useSimpleBar({elementRef: cartList});

</script>
<template>
    <ul ref="cartList" class="max-w-bd-sm mx-auto px-2 h-full overflow-auto">
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
</template>
<style lang="scss"></style>