import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore('products', () => {

    const products = ref({
        items: [],
        currentPageNum: 1
    });

    return {
        products
    }
});