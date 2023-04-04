import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore('products', () => {

    const products = ref({
        items: [],
        currentPageNum: 0,
        limitPerPage: 30,
        hasMore: true
    });

    const productsReceived = (items) => {

        if(items.length === 0) return products.value.hasMore = false;

        products.value.items = [...products.value.items, ...items];
        products.value.currentPageNum += 1;

    };

    const resetProducts = () => {
        products.value = {
            items: [],
            currentPageNum: 0,
            limitPerPage: 30,
            hasMore: true
        }
    }

    return {
        products,
        productsReceived,
        resetProducts
    }
});