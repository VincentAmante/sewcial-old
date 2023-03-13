<script setup lang="ts">
    import { ref, watch} from 'vue';
    import BurgerButton from './BurgerButton.vue';
    import Navigation from './Navigation.vue'
    import { useRoute } from 'vue-router';

    const headerToggled = ref(false)
    // Resets header
    const route = useRoute()
    const page = ref(route.path)

    // Defines what colour to use based on page
    // TODO: Improve efficiency
    const setColour = (page: String) => {
        console.log('set')
        switch(page){
            case '/home':
            case '/':
                return 'primary'
            case '/test':
                return 'secondary'
            default:
                return 'secondary'
        }
    }
    const navColour = ref(setColour(page.value))

    watch(route, async (newPath, oldPath) => {
        headerToggled.value = false
        page.value = newPath.path
        navColour.value = setColour(page.value)
    })
    
</script>
<template>
    <header>
        <Navigation :is-toggled="headerToggled" :colour="navColour"/>
        <BurgerButton v-model:is-toggled-model='headerToggled' :colour="navColour"/>
    </header>
</template>     

<style scoped lang="scss">
    header {
        position: fixed;
        top: 0;
        right: 0;
        overflow-x: hidden;
        pointer-events: none;
    }
</style>