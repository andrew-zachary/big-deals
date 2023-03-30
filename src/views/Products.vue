<script setup>
import useProductsStore from "../stores/products";

const productsStore = useProductsStore();

</script>

<template>

<ul>
    <li class="text-4xl" v-for="product of productsStore.listItems" :key="product.id">
        {{ product.name }}
    </li>
</ul>

</template>

<style lang="scss"></style>