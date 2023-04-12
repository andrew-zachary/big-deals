<script setup>

import { ref } from "vue";

import useAppStore from "../../stores/app";

import darkMode from "../../assets/dark-mode.vue";

const appStore = useAppStore();
const darkModeOn = ref(appStore.darkMode);

</script>
<template>
    <div 
        id="darkmode-toggler" 
        class="px-4 mx-4 h-full 
        border border-secondary dark:border-primary-dark 
        flex justify-start items-center
        shadow-base dark:shadow-base-dark
        rounded-xl"
    >
        <div class="px-2 flex items-center">
            <InputSwitch v-model="darkModeOn" @change="appStore.toggleDarkMode" />
        </div>
        <darkMode />
    </div>
</template>
<style lang="scss">
    #darkmode-toggler {

        svg {
            max-width: 2.5rem;
        }

        .p-inputswitch.p-focus {

            .p-inputswitch-slider {
                box-shadow: none !important;
            }
        }

        .p-inputswitch-checked {

            .p-inputswitch-slider {
                @apply bg-primary dark:bg-primary-dark #{!important};
            }   
        }
    }
</style>