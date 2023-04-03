<script setup>

import { ref, onBeforeMount } from "vue";

import { vInfiniteScroll } from "@vueuse/components";
import useBDaFetch from "../includes/bdFetch";
import useProductsStore from "../stores/products";

const productsStore = useProductsStore();
const url = ref(`products?limit=${productsStore.products.limitPerPage}&skip=${productsStore.products.currentPageNum * productsStore.products.limitPerPage}`);

const { isFetching, execute } = useBDaFetch(url, { refetch: true, immediate: false }, {
    afterFetch(ctx) {
        productsStore.productsReceived(ctx.data.products);
    }
});

const onLoadMore = () => {
    if(isFetching.value || !productsStore.products.hasMore) return;

    url.value = `products?limit=${productsStore.products.limitPerPage}&skip=${productsStore.products.currentPageNum * productsStore.products.limitPerPage}`;
    execute();
};

onBeforeMount(() => {
    if(productsStore.products.items.length === 0) execute();
});

</script>

<template>

<ul 
    class="h-full w-full overflow-auto" 
    v-infinite-scroll="onLoadMore"
>
    <li class="text-4xl" v-for="product of productsStore.products.items" :key="product.id">
        {{ product.title }}
    </li>
</ul>

</template>

<style lang="scss"></style>