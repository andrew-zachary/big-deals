<script setup>
import useAppStore from './stores/app';

// layouts
import Nav from './layouts/Nav.vue';

const useApp = useAppStore();
</script>

<template>
  <Nav />
  <router-view></router-view>
  <footer>
    {{ useApp.lang }}
  </footer>
</template>

<style></style>
