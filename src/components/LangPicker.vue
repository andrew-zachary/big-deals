<script setup>
import { useTranslate } from '../composables/useTranslate';

const { changeLocales } = useTranslate();
</script>

<template>
    <ul>
        <li @click="changeLocales('en')">
            en
        </li>
        <li @click="changeLocales('ar')">
            ar
        </li>
    </ul>
</template>

<style></style>