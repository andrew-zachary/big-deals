<script setup>

import { ref, onBeforeMount } from "vue";

import { vInfiniteScroll } from "@vueuse/components";
import useBDaFetch from "../includes/bdFetch";
import useProductsStore from "../stores/products";

const productsStore = useProductsStore();
const url = ref(`products?limit=${productsStore.products.limitPerPage}&skip=${productsStore.products.currentPageNum * productsStore.products.limitPerPage}`);

const { isFetching, execute } = useBDaFetch(url, { immediate: false }, {
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

<div 
    class="p-2
    h-full w-full
    grid items-center
    overflow-auto"
    v-infinite-scroll="[onLoadMore, {distance: 150}]"
>
    <ul 
        class="h-full w-full 
        flex flex-col justify-center items-center"
    >
        <li class="w-full text-sm" v-for="product of productsStore.products.items" :key="product.id">
            {{ product.title }}
        </li>
        <li v-if="productsStore.products.hasMore">
            <div id="spinner-box" class="overflow-hidden">
                <Progressspinner />
            </div>
        </li>
    </ul>
</div>

</template>

<style lang="scss"></style>