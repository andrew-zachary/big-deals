<script setup>

import { ref, onBeforeMount } from "vue";

import { vInfiniteScroll } from "@vueuse/components";
import useBDaFetch from "../includes/bdFetch";
import useProductsStore from "../stores/products";
import { useTranslate } from "../composables/useTranslate";
import SearchInput from "../components/SearchInput.vue";

const productsStore = useProductsStore();
const { doTranslate } = useTranslate();
const searchTxt = ref('');
const url = ref(`products/search?q=${searchTxt.value}&limit=${productsStore.products.limitPerPage}&skip=${productsStore.products.currentPageNum * productsStore.products.limitPerPage}`);

const { isFetching, execute } = useBDaFetch(url, { immediate: false }, {
    afterFetch(ctx) {
        productsStore.productsReceived(ctx.data.products);
    }
});

const onLoadMore = () => {
    if(isFetching.value || !productsStore.products.hasMore) return;

    url.value = `products/search?q=${searchTxt.value}&limit=${productsStore.products.limitPerPage}&skip=${productsStore.products.currentPageNum * productsStore.products.limitPerPage}`;
    execute();
};

const searching = (txt) => {
    productsStore.resetProducts();

    searchTxt.value = txt;
    url.value = `products/search?q=${searchTxt.value}&limit=${productsStore.products.limitPerPage}&skip=${productsStore.products.currentPageNum * productsStore.products.limitPerPage}`;
    execute();
};

onBeforeMount(() => {
    if(productsStore.products.items.length === 0) execute();
});

</script>

<template>

<div 
    class="py-2 px-4
    h-full w-full
    grid items-center
    overflow-auto"
    v-infinite-scroll="[onLoadMore, {distance: 150}]"
>
    <SearchInput
        class="w-full 
        p-2 
        border-2 border-primary rounded-xl 
        text-sm text-black placeholder:text-black
        bg-primary-bg
        self-end"
        @searching="searching($event)" />
    <ul 
        class="mt-8 
        h-full w-full 
        flex flex-col justify-start items-center"
    >
        <li class="w-full text-sm" v-for="product of productsStore.products.items" :key="product.id">
            {{ product.title }}
        </li>
        <li v-if="isFetching && productsStore.products.hasMore">
            <div id="spinner-box" class="overflow-hidden">
                <Progressspinner />
            </div>
        </li>
        <li class="text-xs" v-else-if="!isFetching && productsStore.products.items.length === 0">
            {{ doTranslate('searching.no_results') }}
        </li>
    </ul>
</div>

</template>

<style lang="scss"></style>