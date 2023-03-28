<script setup lang="ts">
    import HeaderLogo from '@/components/TheHeader/HeaderLogo.vue'
    import ButtonLikedPage from '../icons/ButtonLikedPage.vue';

    import { ref, watch, computed } from 'vue';
    import BurgerButton from './BurgerButton.vue';
    import Navigation from './Navigation.vue'
    import { useRoute } from 'vue-router';

    const props = defineProps({
        format: {
            type: String,
            default: 'base'
        }
    })

    const headerToggled = ref(false)
    // Resets headerI
    const route = useRoute()
    const page = ref(route.path)

    // Defines what colour to use based on page
    // TODO: Improve efficiency
    const setColour = (page: String) => {
        page = page.substring(1)

        // Decides colours for the header
        switch(page){
            case 'home':
            case '':
                return 'primary'
            case 'test':
            case 'about':
            case 'test-icen':
            case 'test-kie':
            case 'test-nehan':
                return 'secondary'
        }
    }
    const navColour = ref(setColour(page.value))
    watch(route, async (newPath, oldPath) => {
        headerToggled.value = false
        page.value = newPath.path
        navColour.value = setColour(page.value)
    })


    const formatStyle = computed(() => {
        let pageName = page.value.substring(1)
        switch (pageName){
            case 'home':
            case '':
                return 'home'
            case 'about':
                return 'shop'
        }
    })
</script>
<template>
    <header :class="formatStyle">
        <HeaderLogo class="logo" :class="formatStyle" :colour="navColour"></HeaderLogo>
        <div class="btn-container">
            <ButtonLikedPage class="btn-liked-page"></ButtonLikedPage>
            <BurgerButton class="burger-btn" v-model:is-toggled-model='headerToggled' :colour="navColour"/>
        </div>
    </header>
    
    <Navigation :is-toggled="headerToggled" :colour="navColour" :page="page"/>
</template>      

<style scoped lang="scss">
// TODO: Fix mobile responsiveness
// TODO: Make this into a singular fixed container, instead of what it is now

header {
    @include flex;
    width: 100%;

    position: static;

    top: 0;
    z-index: 105;
    align-items: center;
    justify-content: flex-end;
    padding-inline: clamp($margin-width-mobile, 5vw, 50px);
    height: clamp(50px, 20vh, 180px);
    border-bottom: 6px dashed $clr-secondary;
    &.home {
        border: none
    }

    .btn-container {
        @include flex;
        align-items: center;
        gap: 1vw;
        z-index: 105;
        position: fixed;
    }
    .btn-liked-page {
        height: 30px;
        @include media(md){
            height: 40px;
        }
    }

    &.home { position: fixed; }

    
    &:not(.shop){
        .btn-liked-page {
            display: none;
        }
    }
}

aside {
    position: fixed;
    top: 0;
    right: 0;
    overflow-x: hidden;
    height: 100%;
    z-index: 95;
}

.logo {
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-start;
    margin-inline: clamp($margin-width-mobile, 5vw, 50px);
    position: absolute;

    @include media(md) {
        justify-content: center;
    }
}
</style>