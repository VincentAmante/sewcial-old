<script setup lang="ts">
    import { computed, watch, ref} from 'vue'

    // imports other vue components 
    import AppButton from '../AppButton.vue';
    import LogoTwitter from '../icons/LogoTwitter.vue'
    import LogoFacebook from '../icons/LogoFacebook.vue'
    import LogoInstagram from '../icons/LogoInstagram.vue'

    // Defines props in TypeScript
    /**
     *  Note that when using in the <script> tag, the components are tagged 'props.propName'
     */
    const props = defineProps({
        isToggled: {
            type: Boolean,
            required: true,
            default: false
        },
        colour: {
            type: String,
            required: true,
            default: 'primary'
        }
    })
    
    // Computed property, should theoretically update if any element inside changes
    const navStyle = computed(() => {
        return (props.isToggled) ? 'toggled': '';
    })

</script>

<template>
    <nav :class="[navStyle, colour]">
        <ul class="routes">
            <li>
                <RouterLink to="/">Map</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">About Us</RouterLink>
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
            <AppButton class="btn">Book</AppButton>
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
        @include conditional-bg;
        @include conditional-text-alt('a');
        @include conditional-text('.btn');
        @include conditional-bg-alt('.btn');

        padding-top: clamp(100px, 10vmax, 200px);
        z-index: 100;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        transition: all ease-out .15s;
        transform: translateX(100%);

        &.toggled {
            transform: translateX(0);
        }
        pointer-events: initial;

        
        @include media("xs"){
            width: clamp(400px, 70vw, 500px);
        }
    }

    .routes {
        @include flex-col;
        list-style: none;
        padding-inline: 50px;
        gap: clamp(5px, 4vh, 44px);
        
        li {
            display: flex;
            position: relative;

            a {
                @extend .text-h2;
                width: 100%;
                text-decoration: none;
            }

            // TODO: change this to something else
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
        gap: clamp(5px, 4vmax, 2.5em);
        padding-block: clamp(5px, 5vmax, 40px);
        .btn {
            width: 100%;
        }

        .social-media-btns {
            @include flex;
            justify-content: space-between;
            width: 100%;
        }
    }
</style>