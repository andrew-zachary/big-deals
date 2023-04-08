<script setup>
import useCartStore from "../stores/cart";
import BtnIconRounded from "./BtnIconRounded.vue";

defineProps(['product']);

const cartStore = useCartStore();

</script>

<template>
    <li class="mt-8 p-8 
        w-full 
        text-sm 
        border-b border-primary
        text-secondary"
    >
        <h1 class="text-sm capitalize font-bold">{{ product.title }}</h1>
        <h2 class="text-xs mt-2">{{ product.description }}</h2>
        <div class="text-lg font-bold">
            <div class="mt-4">
                <span>$</span> <span>{{ product.price }}</span> 
            </div>
            <div class="flex justify-end">
                <BtnIconRounded class="sm relative z-20" icon="pi pi-cart-plus" @click="cartStore.addItem(product)" />
            </div>
        </div>
    </li>
</template>

<style lang="scss"></style>