<script setup>

// layouts
import Nav from './layouts/Nav.vue';
import Footer from './layouts/Footer.vue';

</script>

<template>
  <div id="app-layout" class="h-full max-w-bd-md mx-auto grid grid-rows-bd-base">
    <Nav />
    <main class="h-full overflow-hidden">
      <div id="main-content-layout" class="h-full flex justify-center items-center">
        <router-view></router-view>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style></style>
