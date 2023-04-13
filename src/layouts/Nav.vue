<script setup>

import { ref, computed } from 'vue';
import useAppStore from '../stores/app';
import { useRouter } from 'vue-router';
import { useTranslate } from '../composables/useTranslate';

import LangPicker from '../components/Nav/LangPicker.vue';
import BtnIconRounded from '../components/Common/BtnIconRounded.vue';
import BtnLink from '../components/Common/BtnLink.vue';
import DarkmodeToggler from '../components/Nav/DarkmodeToggler.vue';

const appStore = useAppStore();
const router = useRouter();
const { doTranslate } = useTranslate();

const openSidebar = ref(false);
const sideBarPosition = computed( () => appStore.currentLang.dir === 'rtl' ? 'right' : 'left' );

const toggleSidebarAndNav = (destination) => {
    openSidebar.value = !openSidebar.value;
    router.push(destination);
};

</script>

<template>

<div id="top-bar" class="flex items-center justify-between p-4">
    <BtnIconRounded class="sm" icon="pi pi-bars" @click="toggleSidebarAndNav" />
    <div id="nav-right-ctrls" class="w-full h-full flex justify-end items-center">
        <DarkmodeToggler />
        <LangPicker />
    </div>
</div>

<Sidebar v-model:visible="openSidebar" :position="sideBarPosition" :showCloseIcon="false">
    <template #header>
        <div class="position-layout-fix flex justify-end w-full" :style="{direction: appStore.currentLang.dir}">
            <BtnIconRounded class="sm" icon="pi pi-times" @click="toggleSidebarAndNav" />
        </div>
    </template>
    <div class="position-layout-fix" :style="{direction: appStore.currentLang.dir}">
        <nav>
            <ul class="text-4xl text-secondary dark:text-white font-bold capitalize">
                <li class="mt-4">
                    <BtnLink @click="toggleSidebarAndNav('/')">{{ doTranslate('nav.home') }}</BtnLink>
                </li>
                <li class="mt-4">
                    <BtnLink @click="toggleSidebarAndNav('/products')">{{ doTranslate('nav.products') }}</BtnLink>
                </li>
                <li class="mt-4">
                    <BtnLink @click="toggleSidebarAndNav('/about')">{{ doTranslate('nav.about') }}</BtnLink>
                </li>
                <li class="mt-4">
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

    .p-sidebar {
        @apply bg-primary-bg dark:bg-primary-bg-dark #{!important};
    }
}
.p-sidebar-header-content {
    width: 100%;
}
</style>