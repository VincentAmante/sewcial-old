<script setup lang="ts">
    import { computed, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const props = defineProps({
        isToggledModel: {
            type: Boolean,
            required: true,
            default: false
        },
        page: {
            type: String,
            required: true,
            default: '/'
        }, 
        colour: {
            type: String,
            required: true,
            default: 'primary'
        }
    })

    // Defines what colour to use based on page
    // TODO: Improve efficiency
    const setBurgerColour = (page: String) => {
        switch(page){
            case '/home':
            case '/':
                return 'primary'
            case '/test':
                return 'secondary'
            default:
                return 'primary'
        }
    }
    const burgerColour = ref(setBurgerColour(props.page))
    watch(props, (newPage, oldPage) => {
        burgerColour.value = setBurgerColour(newPage.page)
    })

    // Allows a child component to send an update to the parent via emits aka events
    const emit = defineEmits(['update:isToggledModel'])
    const isToggled = computed({
        get(){
            return props.isToggledModel
        },
        set(value){
            emit('update:isToggledModel', value)
        }
    })

    // watches for changes in {isToggled}'s value, makes changes accordingly
    const burgerToggled = computed(() => {
        return (isToggled.value) ? 'toggled': 'not-toggled';
    })
</script>

<template>
    <label for="burgerToggle" class="burger-label">
        <input type="checkbox" name="burgerToggle" id="" v-model="isToggled">
        <div class="burger" :class="[burgerColour, burgerToggled]" @click="isToggled = !isToggled">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </label>
</template>

<style lang="scss">
    .burger-label {
        position: absolute;
        top: 64px;
        right: 65px;
        input {
            position: absolute;
            display: none;
        }
    }
    .burger {

        @include flex-col;
        justify-content: space-between;
        height: 45px;
        cursor: pointer;
        pointer-events: visible;

        div {
            width: 52px;
            height: 7.26px;
            border-radius: 5px;
            transition: all ease-out .15s;
        }

        &.primary > div { background-color: $clr-primary;}
        &.secondary > div { background-color: $clr-secondary; }
        &.accent-1 > div { background-color: $clr-accent-1; }
        &.accent-2 > div { background-color: $clr-accent-2; }

    
        &.toggled {
            div:nth-child(1){
                // position: absolute;
                transform: scaleX(1) translateX(-1px) translateY(19px) rotate(45deg) ;
                // top: 50%;
            }
            div:nth-child(2){
                opacity: 0;
            }
            div:nth-child(3){
                // position: absolute;
                transform: scaleX(1) translateX(0px) translateY(-19px) rotate(-45deg) ;
            }

            &.primary > div { background-color: $clr-secondary; }
            &.secondary > div{ background-color: $clr-primary;}
        }
    }
</style>