<script setup>
    import { ref } from "vue";

    import useCartStore from "../stores/cart";
    import Badge from "../components/Badge.vue";
    import BtnIconRounded from "./BtnIconRounded.vue";
    import Btn from "./Btn.vue";

    const cartStore = useCartStore();
    const openCart = ref(false);
</script>

<template>
    <div class="w-full max-w-bd-md
        fixed left-100 bottom-0
        z-10
        p-4"
        @click="openCart = true"
    >
        <Badge :value="cartStore.totalItems"/>
    </div>
    <Dialog v-model:visible="openCart" modal header="Header" :closable="false">
        <template #header>
            <div class="w-full flex flex-col">
                <div class="w-full max-w-bd-sm mx-auto flex items-center justify-between">
                    <div class="text-md text-primary font-bold">$ {{ cartStore.totalCost }}</div>
                    <BtnIconRounded icon="pi pi-times" @click="openCart = false" />
                </div>
                <div class="w-full max-w-bd-sm mx-auto">
                    <Btn label="submit" icon="pi pi-shopping-cart" />
                </div>
            </div>
        </template>
        <ul class="max-w-bd-sm mx-auto">
            <li v-for="item of cartStore.items" :key="item.id" class="mt-8 text-white">
                <div class="text-sm font-bold">{{ item.title }}</div>
                <div class="text-xs">{{ item.count }} for <span class="font-bold">$ {{ item.price * item.count }}</span></div>
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

  .p-dialog-content {
    flex-grow: 1;

    @apply bg-primary-bg #{!important};
  }

  .p-dialog-content, .p-dialog-header {
    border-radius: 0!important;
  }
}
    
</style>