<script setup lang="ts">
    import { ref, computed, watch} from 'vue';
    import BurgerButton from './BurgerButton.vue';
    import Navigation from './Navigation.vue'

    const burgerToggled = ref(false)
</script>

<template>
    <header>
        <Navigation :is-toggled="burgerToggled"/>
        <BurgerButton v-model:is-toggled-model='burgerToggled'/>
    </header>
</template>

<style scoped lang="scss">
    header {
        position: absolute;
        top: 0;
        right: 0;
        overflow-x: hidden;
    }
</style>