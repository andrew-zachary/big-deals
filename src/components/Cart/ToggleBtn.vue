<script setup>

    import { ref, watch } from "vue";

    import Badge from '../Badge.vue';

    const props = defineProps(['totalItems']);

    const cartRef = ref(null);

    watch(() => props.totalItems, () => {
        cartRef.value.classList.add('animate__heartBeat');
    });

    const removeTadaClass = () => {
        cartRef.value.classList.remove('animate__heartBeat');
    };

</script>
<template>

    <div id="animation-box" class="inline-block cursor-pointer animate__animated" @animationend="removeTadaClass" ref="cartRef">
        <Badge 
            :value="totalItems" 
            class="toggle-btn
            pi pi-shopping-cart 
            border-2 border-secondary rounded-full
            text-lg text-white
            p-4" 
        />
    </div>
    
</template>
<style lang="scss">

    .toggle-btn {

        .p-badge {
            height: 3rem!important;
            min-width: 3rem!important;
            line-height: 3rem!important;
            padding: 0rem 0.75rem;

            @apply text-sm #{!important};
            @apply border-2 border-secondary;

            @include withRtl(right, 0, 100%);
        }
    }

    .animate__animated {
        animation-duration: 0.8s;
        animation-fill-mode: both;
    }

    .animate__heartBeat {
        animation-name: heartBeat;
        animation-timing-function: ease-in-out;
    }

    @keyframes heartBeat {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        14% {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
        }

        28% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        42% {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
        }

        70% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

</style>