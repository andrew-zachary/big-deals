<script setup>
    import { useDebounceFn } from '@vueuse/core';
    import { useTranslate } from "../composables/useTranslate";

    const emit = defineEmits(['searching']);

    const { doTranslate } = useTranslate();
    const debouncedSearch = useDebounceFn((value) => {
        emit('searching', value);
    }, 1000);
</script>

<template>
    <input class="p-8 text-secondary
    placeholder:text-secondary placeholder:dark:text-white"
    :placeholder="doTranslate('searching.placeholder')"
    @input="debouncedSearch($event.target.value)" />
</template>

<style lang="scss">
    input:focus {
        outline: none!important;
    }
</style>