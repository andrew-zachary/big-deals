<script setup>
import { ref, computed } from 'vue';
import { useTranslate } from '../composables/useTranslate';
import useAppStore from '../stores/app';

const { changeLocales } = useTranslate();
const appStore = useAppStore();

const selectedLang = ref(appStore.langs.default());
const langsCanBeSelected = computed( () =>  appStore.langs.available().filter( lang => lang.value !== selectedLang.value.value ) );
</script>

<template>
    <Dropdown 
        v-model="selectedLang" 
        :options="langsCanBeSelected" 
        @update:modelValue="changeLocales"
        optionLabel="label" 
        :placeholder="selectedLang.label"
        class="w-full max-w-xs" />
</template>

<style lang="scss">
.p-dropdown-items, .p-dropdown-label, .p-dropdown-trigger {
    font-size: 2.2rem;
    padding: 0.5rem;
}
</style>
