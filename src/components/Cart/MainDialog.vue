<script setup>

    import BtnIconRounded from "../Common/BtnIconRounded.vue";

    import Tabs from "./Tabs.vue";

    defineProps(['toggleCart', 'totalCost']);

    const emits = defineEmits(['closeCart']);

</script>
<template>

    <Dialog :visible="toggleCart" header="Header" :closable="false">
        <template #header>
            <div class="w-full flex flex-col">
                <div class="w-full max-w-bd-sm mx-auto p-4 flex items-center justify-between">
                    <div class="text-md text-primary dark:text-primary-dark font-ssp font-bold">$ {{ totalCost }}</div>
                    <BtnIconRounded icon="pi pi-times" @click="emits('closeCart')" />
                </div>
            </div>
        </template>
        <Tabs />
    </Dialog>

</template>
<style lang="scss">

    .p-dialog {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100% !important;

        .p-dialog-header {
            @apply bg-primary-bg dark:bg-primary-bg-dark #{!important};
        }

        .p-dialog-content {
            flex-grow: 1;
        }

        .p-dialog-content, .p-dialog-header {
            padding: 0!important;
            border-radius: 0!important;
            @apply bg-primary-bg dark:bg-primary-bg-dark #{!important};
        }
    }

</style>