<script setup>
import { useTranslate } from '../composables/useTranslate';

const { doTranslate } = useTranslate();
</script>

<template>

<footer>
    <h1 class="text-4xl">{{ doTranslate('word') }}</h1>
</footer>

</template>

<style lang="scss"></style>