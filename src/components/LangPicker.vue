<script setup>
import { ref, computed } from 'vue';
import { useTranslate } from '../composables/useTranslate';
import useAppStore from '../stores/app';

const { changeLocales } = useTranslate();
const appStore = useAppStore();

const selectedLang = ref( appStore.langs.default() );
const langsCanBeSelected = computed( () => appStore.langs.available().filter( lang => lang.value !== selectedLang.value.value ) );
</script>

<template>

</template>

<style lang="scss">

</style>
