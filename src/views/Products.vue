<script setup>

import { ref, onBeforeMount } from "vue";

import { vInfiniteScroll } from "@vueuse/components";
import useBDaFetch from "../includes/bdFetch";
import useProductsStore from "../stores/products";
import { useTranslate } from "../composables/useTranslate";
import SearchInput from "../components/SearchInput.vue";
import { useSimpleBar } from "../composables/useSimpleScroll";
import ProductListItem from "../components/ProductListItem.vue";
import Cart from "../components/Cart.vue";

const productsStore = useProductsStore();
const { doTranslate } = useTranslate();
const productsList = ref();
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

useSimpleBar({elementRef: productsList});

</script>

<template>

<div 
    class="max-w-bd-md mx-auto
    relative
    py-2 px-6
    h-full w-full
    grid items-center
    overflow-auto"
    ref="productsList"
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
        class="h-full w-full 
        flex flex-col justify-start items-center"
    >
        <ProductListItem v-for="product of productsStore.products.items" :key="product.id" :product="product" />
        <li v-if="isFetching && productsStore.products.hasMore">
            <div id="spinner-box" class="overflow-hidden mt-4">
                <Progressspinner />
            </div>
        </li>
        <li class="text-xs text-secondary mt-4" v-else-if="!isFetching && productsStore.products.items.length === 0">
            {{ doTranslate('searching.no_results') }}
        </li>
    </ul>
    <Cart />
</div>

</template>

<style lang="scss"></style>