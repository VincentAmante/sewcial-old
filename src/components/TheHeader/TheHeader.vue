<script setup lang="ts">
    import { ref, computed, watch} from 'vue';
    import BurgerButton from './BurgerButton.vue';
    import Navigation from './Navigation.vue'
    import { useRoute } from 'vue-router';

    const headerToggled = ref(false)
    // Resets header
    const route = useRoute()
    const page = ref(route.path)
    watch(route, async (newPath, oldPath) => {
        headerToggled.value = false
        page.value = newPath.path
    })

    // const setColours = () => {
    //     let colours = {
    //         burger: 'primary',
    //         navigation: 'p'
    //     }
    //     switch(route.path):
    //         case 'home'
    // }
</script>
<template>
    <header>
        <Navigation :is-toggled="headerToggled"/>
        <BurgerButton v-model:is-toggled-model='headerToggled' :page="page"/>
    </header>
</template>     

<style scoped lang="scss">
    header {
        position: absolute;
        top: 0;
        right: 0;
        overflow-x: hidden;
        pointer-events: none;
    }
</style>