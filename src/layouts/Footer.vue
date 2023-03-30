<script setup>
import {useI18n} from 'vue-i18n';

import LangPicker from '../components/LangPicker.vue';

const {t} = useI18n();
</script>

<template>

<footer>
    <h1>{{ t('word') }}</h1>
    <LangPicker />
</footer>

</template>

<style lang="scss"></style>