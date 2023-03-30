<script setup>
import i18n from '../includes/i18n';

const changeLocales = (lang) => i18n.global.locale.value = lang;
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