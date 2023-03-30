<script setup lang="ts">
    import { computed, watch, ref} from 'vue'

    // imports other vue components 
    import AppButton from '../AppButton.vue';
    import ButtonTwitter from '../icons/ButtonTwitter.vue'
    import ButtonFacebook from '../icons/ButtonFacebook.vue'
    import ButtonInstagram from '../icons/ButtonInstagram.vue'

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
        },
        page: {
            type: String,
            required: true
        }
    })
    
    // Computed property, should theoretically react if any element inside changes
    const navStyle = computed(() => {
        return (props.isToggled) ? 'toggled': '';
    })
    // computed(() => {
    //     let pageQuery = 'nav-' + props.page.substring(1)
    //     let elem = document.getElementById(pageQuery)
    //     elem?.classList.add('activePage')
    // })

</script>

<template>
    <nav :class="[navStyle, colour]">
        <ul class="routes">
            <li id="nav-home">
                <RouterLink to="/">Map</RouterLink>
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="right"/>
            </li>
            <li id="nav-about">
                <RouterLink to="/about">About Us</RouterLink>
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="right"/>
            </li>
            <li id="nav-discover">
                <RouterLink to="/test-icen">Discover (Test-Icen)</RouterLink>
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="right"/>
            </li>
            <li id="nav-contact-us">
                <RouterLink to="/test-kie">Contact Us (Test-Kie)</RouterLink>
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="right"/>
            </li>
            <li id="nav-donate">
                <RouterLink to="/donate">Donate</RouterLink>
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="right"/>
            </li>
            <!-- <li>
                <RouterLink to="/test">Test</RouterLink>
            </li> -->
        </ul>

        <div class="other">
            <AppButton class="btn">Book</AppButton>
            <div class="social-media-btns">
                <ButtonTwitter></ButtonTwitter>
                <ButtonFacebook></ButtonFacebook>
                <ButtonInstagram></ButtonInstagram>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    nav {
        @include flex-col;
        @include conditional-bg;
        @include conditional-text-alt('a');
        @include conditional-text-alt('.right');
        @include conditional-text('.btn');
        @include conditional-bg-alt('.btn');

        position: fixed;
        padding-top: clamp(50px, 6vh, 200px);
        gap: 5px;
        z-index: 100;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100%;
        transition: all ease-out .25s;
        transform: translateX(100%);

        justify-content: center;

        &.toggled {
            transform: translateX(0);
        }
        pointer-events: initial;
        
        @include media(sm){
            width: clamp(400px, 70vw, 500px);
        }
    }

    .routes {
        @include flex-col;
        list-style: none;
        padding-inline: 50px;
        // gap: clamp(5px, 5.5vh, 44px);
        
        li {
            display: flex;
            // justify-content: center;
            align-items: center;
            justify-content: center;
            position: relative;
            opacity: .5;
            transition: all ease-out .15s;

            &:hover {
                opacity: .9;
            }

            .right {
                display: none;
                visibility: hidden;
                height: 1.25em;
            }
            a {
                @extend .text-h2;
                text-decoration: none;
                text-align: center;
            }


            @include media(xs) {
                justify-content: space-between;
                .right {
                    display: initial;
                    visibility: visible
                }

                a {
                    text-align: left;
                }
            }
        }
    }

    .other {
        @include flex-col;
        align-items: center;
        justify-content: center;
        padding-inline: clamp(5px, 7.5vmax, 95px);
        gap: clamp(5px, 6vh, 2.5em);
        // padding-block: clamp(5px, 5vh, 40px);
        .btn {
            width: 100%;
        }

        .social-media-btns {
            @include flex;
            justify-content: space-between;
            width: 100%;


            & > * {
                color: $clr-accent-1;
            }
        }
    }

    li:has(.router-link-active) {
        opacity: 1;
    }
</style>