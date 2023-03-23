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
                return ''
            case 'about':
                return 'shop'
        }
    })
</script>
<template>
    <header :class="formatStyle">
        <HeaderLogo class="logo-white" :class="formatStyle" :colour="navColour"></HeaderLogo>
        <div class="btn-container">
            <ButtonLikedPage class="btn-liked-page"></ButtonLikedPage>
            <BurgerButton class="burger-btn" v-model:is-toggled-model='headerToggled' :colour="navColour"/>
        </div>
        <aside>
            <Navigation :is-toggled="headerToggled" :colour="navColour"/>
        </aside>
    </header>
</template>     

<style scoped lang="scss">
// TODO: Fix mobile responsiveness
// TODO: Make this into a singular fixed container, instead of what it is now

    header {
        display: fixed;
        justify-content: center;
        position: relative;
        z-index: 100;

        .burger-btn {
            z-index: 125;
        }

        &.shop {
            // padding-bottom: 2vh;
            border-bottom: 5px dashed $clr-secondary;

            
            height: clamp(50px, 20vh, 180px);
        }

        .btn-container {
            @include flex;
            // justify-content: center;
            align-items: center;
            gap: 1em;
            position: absolute;
            top: clamp(33px, 5.5vw, 65px);
            right: clamp($margin-width-mobile, 5vw, 50px);
        }

        aside {
            position: fixed;
            top: 0;
            right: 0;
            overflow-x: hidden;
            pointer-events: none;
        }

        .btn-liked-page {
            // position: absolute;
            // top: 0;
            // left: 0;
            color: $clr-secondary;

            height: 30px;
            @include media(md){
                height: 50px;

                div {
                    width: 50px;
                }
            }
        }

        .logo-white {
            position: absolute;
            display: flex;
            transition: all ease-in-out .15s;
            left: 0;
            padding: clamp(25px, 5.5vh, 50px);
            align-self: flex-start;

            &.shop {
                @include media(md){
                    left: 45vw;
                }
            }
        }

        &:not(.shop){
            .btn-liked-page {
                visibility: hidden;
            }
        }
    }    
</style>