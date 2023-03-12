<script setup lang="ts">
    import { computed, watch } from 'vue';
    import AppButton from '../AppButton.vue';
    import LogoTwitter from '../icons/LogoTwitter.vue'
    import LogoFacebook from '../icons/LogoFacebook.vue'
    import LogoInstagram from '../icons/LogoInstagram.vue'

    const props = defineProps({
        isToggled: {
            type: Boolean,
            required: true,
            default: false
        }
    })
    
    const navStyle = computed(() => {
        console.log(props.isToggled)
        return (props.isToggled) ? 'toggled': '';
    })
</script>

<template>
    <nav :class="navStyle">
        <ul class="routes">
            <li>
                <RouterLink to="/">Map</RouterLink>
            </li>
            <li>
                <RouterLink to="/">About Us</RouterLink>
            </li>
            <li>
                <RouterLink to="/">Discover</RouterLink>
            </li>
            <li>
                <RouterLink to="/">Contact Us</RouterLink>
            </li>
            <li>
                <RouterLink to="/">Donate</RouterLink>
            </li>
            <li>
                <RouterLink to="/test">Test</RouterLink>
            </li>
        </ul>

        <div class="other">
            <AppButton>Book</AppButton>
            <div class="social-media-btns">
                <LogoTwitter></LogoTwitter>
                <LogoFacebook></LogoFacebook>
                <LogoInstagram></LogoInstagram>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    nav {
        @include flex-col;
        justify-content: end;
        z-index: 100;

        top: 0;
        right: 0;
        background-color: $clr-primary;
        height: 100vh;
        width: clamp(300px, 70vw, 500px);
        transition: all ease-out .15s;
        transform: translateX(100%);

        &.toggled {
            transform: translateX(0);
        }
        pointer-events: initial;
    }

    .routes {
        @include flex-col;
        list-style: none;
        padding-inline: 50px;
        gap: clamp(5px, 4vh, 44px);
        margin-top: 200px;

        li {
            display: flex;
            position: relative;
            a {
                @extend .text-h2;
                width: 100%;
                color: $clr-secondary;
                text-decoration: none;
            }
            a:after {
                position: absolute;
                content: '>';
                right: 0;
            }
        }
    }

    .other {
        @include flex-col;
        align-items: center;
        justify-content: center;
        padding-inline: clamp(5px, 7.5vmax, 95px);
        padding-bottom: 3em;
        gap: clamp(5px, 4vmax, 2.5em);
        margin-top: clamp(10px, 5vmax, 120px);
        
        button {
            width: 100%;
        }

        .social-media-btns {
            @include flex;
            justify-content: space-between;
            width: 100%;
        }
    }
</style>