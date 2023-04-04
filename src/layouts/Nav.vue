<script setup>

import { ref, computed } from 'vue';
import useAppStore from '../stores/app';
import { useRouter } from 'vue-router';
import { useTranslate } from '../composables/useTranslate';

import LangPicker from '../components/LangPicker.vue';
import BtnIconRounded from '../components/BtnIconRounded.vue';
import BtnLink from '../components/BtnLink.vue';

const appStore = useAppStore();
const router = useRouter();
const { doTranslate } = useTranslate();

const openSidebar = ref(false);
const toggleSidebarAndNav = (destination) => {
    openSidebar.value = !openSidebar.value;
    router.push(destination);
};
const sideBarPosition = computed( () => appStore.currentLang.dir === 'rtl' ? 'right' : 'left' );

</script>

<template>

<div id="top-bar" class="flex items-center justify-between p-4">
    <BtnIconRounded icon="pi pi-bars" @click="toggleSidebarAndNav" />
    <LangPicker />
</div>

<Sidebar v-model:visible="openSidebar" :position="sideBarPosition" :showCloseIcon="false">
    <template #header>
        <div class="position-layout-fix flex justify-end w-full" :style="{direction: appStore.currentLang.dir}">
            <BtnIconRounded icon="pi pi-times" @click="toggleSidebarAndNav" />
        </div>
    </template>
    <div class="position-layout-fix" :style="{direction: appStore.currentLang.dir}">
        <nav>
            <ul class="text-4xl">
                <li>
                    <BtnLink @click="toggleSidebarAndNav('/')">{{ doTranslate('nav.home') }}</BtnLink>
                </li>
                <li>
                    <BtnLink @click="toggleSidebarAndNav('/products')">{{ doTranslate('nav.products') }}</BtnLink>
                </li>
                <li>
                    <BtnLink @click="toggleSidebarAndNav('/about')">{{ doTranslate('nav.about') }}</BtnLink>
                </li>
                <li>
                    <BtnLink @click="toggleSidebarAndNav('/account')">{{ doTranslate('nav.account') }}</BtnLink>
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