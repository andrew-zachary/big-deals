<script setup>
import { useTranslate } from '../composables/useTranslate';

const { doTranslate } = useTranslate();
</script>

<template>

<footer>
    <div id="footer-layout" class="p-4">
        <h1 class="text-4xl">{{ doTranslate('word') }}</h1>
    </div>
</footer>

</template>

<style lang="scss"></style>