<script setup>
import { useTranslate } from '../composables/useTranslate';

const { changeLocales } = useTranslate();
</script>

<template>
    <ul>
        <li class="text-4xl" @click="changeLocales('en')">
            en
        </li>
        <li class="text-4xl" @click="changeLocales('ar')">
            ar
        </li>
    </ul>
</template>

<style></style>