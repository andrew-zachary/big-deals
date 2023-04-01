<script setup>
import { ref } from 'vue';

import LangPicker from '../components/LangPicker.vue';
import BtnIconRounded from '../layouts/BtnIconRounded.vue';

const openSidebar = ref(false);

</script>

<template>

<div id="nav-layout" class="flex">
    <BtnIconRounded icon="pi pi-bars" @click="openSidebar = true" />
    <LangPicker />
</div>


<Sidebar v-model:visible="openSidebar" position="right">
    <nav>
        <ul class="text-4xl">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/products">Products</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
        </ul>
    </nav>
</Sidebar>

</template>

<style lang="scss">
.p-sidebar-right, .p-sidebar-left {
    direction: ltr;
}
</style>