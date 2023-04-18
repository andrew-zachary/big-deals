<script setup>

    const emits = defineEmits(['changeTab']);

</script>
<template>
    <h1 @click="emits('changeTab', 'list')">order</h1>
</template>
<style></style>