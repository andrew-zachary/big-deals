import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore('products', () => {

    const listItems = ref([
        {id: '1', name: 'name 1'},
        {id: '2', name: 'name 2'},
        {id: '3', name: 'name 3'},
        {id: '4', name: 'name 4'},
        {id: '5', name: 'name 5'}
    ]);

    return {
        listItems
    }
});