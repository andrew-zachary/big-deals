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
        border-2 border-primary rounded-lg
        shadow-secondary"
    >
        <h1 class="text-sm font-bold">{{ product.title }}</h1>
        <h2 class="text-xs">{{ product.description }}</h2>
        <div class="text-sm font-bold">
            <div class="mt-4">
                <span>$</span> <span>{{ product.price }}</span> 
            </div>
            <div class="flex justify-end">
                <BtnIconRounded icon="pi pi-cart-plus" @click="cartStore.addItem(product)" />
            </div>
        </div>
    </li>
</template>

<style lang="scss"></style>