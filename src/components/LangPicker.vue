<script setup>
import { ref, computed } from 'vue';
import { useTranslate } from '../composables/useTranslate';
import useAppStore from '../stores/app';

const { changeLocales } = useTranslate();
const appStore = useAppStore();

const selectedLang = ref(appStore.langs.default());
const langsCanBeSelected = computed( () =>  appStore.langs.available().filter( lang => lang.value !== selectedLang.value.value ) );
</script>

<template>
    <Dropdown 
        v-model="selectedLang" 
        :options="langsCanBeSelected" 
        @update:modelValue="changeLocales"
        optionLabel="label" 
        :placeholder="selectedLang.label" />
</template>

<style lang="scss">

.p-dropdown, .p-dropdown-items, .p-dropdown-items-wrapper, .p-dropdown-item, .p-dropdown-label, .p-dropdown-trigger {
    @apply bg-primary dark:bg-primary-dark #{!important};
    @apply shadow-none #{!important};
    @apply border-0 #{!important};
    @apply text-sm text-white #{!important};
    @apply capitalize;
}

.p-dropdown {
    @apply shadow-secondary #{!important};
}

.p-dropdown-trigger {
    @include withRtl(border-radius, 0 6px 6px 0, 6px 0 0 6px);
}

</style>
