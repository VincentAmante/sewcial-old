<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps({
        isToggledModel: {
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
        <div class="burger" :class="[colour, burgerToggled]" @click="isToggled = !isToggled">
            <div v-for="i in 3" :class="colour"></div>
        </div>
    </label>
</template>

<style scoped lang="scss">
    .burger-label {
        // position: absolute;
        // top: clamp(10px, 7.5vh, 64px);
        // right: clamp($margin-width-mobile, 5vw, 50px);
        input {
            // position: absolute;
            display: none;
        }
    }

    .burger {
        @include flex-col;
        justify-content: space-between;
        height: 20px;
        aspect-ratio: 1;
        cursor: pointer;
        pointer-events: visible;

        div {
            width: 30px;
            height: 16%;
            border-radius: 5px;
            transition: all ease-in .15s;

            @include conditional-bg;
        }
        
        @include media(laptop){
            height: 25px;

            div {
                width: 35px;
            }
        }
        &.toggled {
            div {
                @include conditional-bg-alt;
            }

            div:nth-child(1){
                transform: scaleX(1) translateX(-1px) translateY(5px) rotate(45deg);
                @include media(laptop) {
                    transform: scaleX(1) translateX(-1px) translateY(16px) rotate(45deg);
                }
            }
            div:nth-child(2){
                opacity: 0;
            }
            div:nth-child(3){
                transform: scaleX(1) translateX(0px) translateY(-16px) rotate(-45deg);
                @include media(laptop) {
                    transform: scaleX(1) translateX(0px) translateY(-16px) rotate(-45deg);
                }
            }
        }
    }
</style>