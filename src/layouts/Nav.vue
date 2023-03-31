<script setup>

import LangPicker from '../components/LangPicker.vue';

</script>

<template>

<nav>
    <ul class="text-4xl">
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/products">Products</router-link>
        </li>
        <li>
            <router-link to="/about">About</router-link>
        </li>
        <li>
            <router-link to="/dashboard">Dashboard</router-link>
        </li>
    </ul>
    <LangPicker />
</nav>

</template>

<style lang="scss"></style>