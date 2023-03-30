<script setup>
import { useTranslate } from '../composables/useTranslate';

import LangPicker from '../components/LangPicker.vue';

const { doTranslate } = useTranslate();
</script>

<template>

<footer>
    <h1>{{ doTranslate('word') }}</h1>
    <LangPicker />
</footer>

</template>

<style lang="scss"></style>