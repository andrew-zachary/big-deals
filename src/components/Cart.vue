<script setup>
    import { ref } from "vue";

    import useCartStore from "../stores/cart";
    import { useTranslate } from "../composables/useTranslate";
    import Badge from "../components/Badge.vue";
    import BtnIconRounded from "./BtnIconRounded.vue";
    import Btn from "./Btn.vue";

    const cartStore = useCartStore();
    const { doTranslate } = useTranslate();
    const openCart = ref(false);
</script>

<template>
    <div class="sticky left-100 bottom-0
        z-10
        p-4 pb-20
        cursor-pointer"
        @click="openCart = true"
    >
        <Badge :value="cartStore.totalItems"/>
    </div>
    <Dialog v-model:visible="openCart" modal header="Header" :closable="false">
        <template #header>
            <div class="w-full flex flex-col">
                <div class="w-full max-w-bd-sm mx-auto flex items-center justify-between">
                    <div class="text-md text-primary dark:text-primary-dark font-ssp font-bold">$ {{ cartStore.totalCost }}</div>
                    <BtnIconRounded icon="pi pi-times" @click="openCart = false" />
                </div>
                <div class="w-full max-w-bd-sm mx-auto">
                    <Btn :label="doTranslate('cart.submit')" icon="pi pi-shopping-cart" size="sm" />
                </div>
            </div>
        </template>
        <ul class="max-w-bd-sm mx-auto">
            <li v-for="item of cartStore.items" :key="item.id" class="mt-8 text-secondary">
                <div class="text-sm text-secondary dark:text-white font-mont font-bold">{{ item.title }}</div>
                <div class="text-xs text-secondary dark:text-white font-ssp flex">
                    <span>{{ item.count }}</span>
                    <span class="px-2">{{ doTranslate('cart.for') }}</span>
                    <span class="px-2">$</span>
                    <span class="font-bold">{{ item.price * item.count }}</span>
                </div>
                <div class="flex">
                    <div class="p-4"><BtnIconRounded icon="pi pi-plus" @click="cartStore.addItem(item)" /></div>
                    <div class="p-4"><BtnIconRounded icon="pi pi-minus" @click="cartStore.removeItem(item)"/></div>
                </div>
            </li>
        </ul>
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
    border-radius: 0!important;
    @apply bg-primary-bg dark:bg-primary-bg-dark #{!important};
  }
}
    
</style>