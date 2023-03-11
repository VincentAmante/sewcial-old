<script setup lang="ts">
    import { computed } from 'vue';
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
        width: 500px;
        transition: all ease-out .15s;

        transform: translateX(100%);

        &.toggled {
            transform: translateX(0);
        }
    }
    .routes {
        @include flex-col;
        list-style: none;
        padding-inline: 50px;
        gap: 3vmax;

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
        padding-inline: 5em;
        padding-bottom: 3em;
        gap: 5em;
        margin-top: 10vh;
        
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