<script setup>

import { ref, computed } from 'vue';
import useAppStore from '../stores/app';

import LangPicker from '../components/LangPicker.vue';
import BtnIconRounded from '../layouts/BtnIconRounded.vue';

const appStore = useAppStore();

const openSidebar = ref(false);
const sideBarPosition = computed( () => appStore.currentLang.dir === 'rtl' ? 'right' : 'left' );

</script>

<template>

<div id="nav-layout" class="flex">
    <BtnIconRounded icon="pi pi-bars" @click="openSidebar = true" />
    <LangPicker />
</div>


<Sidebar v-model:visible="openSidebar" :position="sideBarPosition" :showCloseIcon="false">
    <template #header>
        <div class="position-layout-fix flex justify-end w-full" :style="{direction: appStore.currentLang.dir}">
            <BtnIconRounded icon="pi pi-times" @click="openSidebar = false" />
        </div>
    </template>
    <div class="position-layout-fix" :style="{direction: appStore.currentLang.dir}">
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
    </div>
</Sidebar>

</template>

<style lang="scss">
.p-sidebar-right, .p-sidebar-left {
    direction: ltr;
}
.p-sidebar-header-content {
    width: 100%;
}
</style>