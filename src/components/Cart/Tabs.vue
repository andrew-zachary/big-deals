<script setup>
    import { ref } from "vue";

    import List from "./List.vue";
    import Order from "./Order.vue";

    const tabName = ref('list');
    const tabs = {
        'list': List,
        'order': Order
    };

    const changeTab = (name) => {
        tabName.value = name;
    };
</script>
<template>
    <component :is="tabs[tabName]" @changeTab="changeTab" />
</template>
<style></style>