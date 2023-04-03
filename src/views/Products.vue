<script setup>

import { ref } from "vue";

import { vInfiniteScroll } from "@vueuse/components";
import useBDaFetch from "../includes/bdFetch";

const limit = ref(30);
const skip = ref(0);
const url = ref(`products?limit=${limit.value}&skip=${skip.value}`);

const { isFetching, data } = useBDaFetch(url, { refetch: true });

const onLoadMore = () => {
    skip.value += 30;
    url.value = `products?limit=${limit.value}&skip=${skip.value}`;
}

</script>

<template>

<ul 
    class="h-full overflow-auto" 
    v-if="!isFetching && data"
    v-infinite-scroll="onLoadMore"
>
    <li class="text-4xl" v-for="product of data.products" :key="product.id">
        {{ product.title }}
    </li>
</ul>

</template>

<style lang="scss"></style>