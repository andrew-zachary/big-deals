<script setup></script>
<template>
    <Teleport to="body">
        <div class="h-full w-full 
            absolute top-0 left-0 inset-full z-50
            bg-primary dark:bg-primary-dark
            font-ssp font-bold
            text-secondary dark:text-white text-lg uppercase
            flex flex-col justify-center items-center"
        >
            <span>please wait</span>
            <Progressspinner />
        </div>
    </Teleport>
</template>
<style lang="scss">
    svg {
        .p-progress-spinner-circle {
            @apply stroke-secondary dark:stroke-white #{!important};
        }
    }
</style>