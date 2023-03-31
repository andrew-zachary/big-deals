<script setup>
import { ref } from 'vue';
import { useTranslate } from '../composables/useTranslate';
import useAppStore from '../stores/app';

const { changeLocales } = useTranslate();
const langs = ref([
    {id: 1, name: 'en', target: 'en'},
    {id: 2, name: 'ar', target: 'ar'},
]);
const selectedLang = ref(langs.value[0]);
</script>

<template>
    <Dropdown 
        v-model="selectedLang" 
        :options="langs" 
        @update:modelValue="changeLocales" 
        optionLabel="name" 
        placeholder="lang" 
        class="w-full" />
</template>

<style lang="scss">
.p-dropdown-items, .p-dropdown-label, .p-dropdown-trigger {
    background-color: green;
    font-size: 3rem;
    padding: 2rem;
}
</style>
