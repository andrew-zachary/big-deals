<script setup>
import { useTranslate } from '../composables/useTranslate';

import LangPicker from '../components/LangPicker.vue';

const { doTranslate } = useTranslate();
</script>

<template>

<footer>
    <h1 class="text-4xl">{{ doTranslate('word') }}</h1>
    <LangPicker />
</footer>

</template>

<style lang="scss"></style>