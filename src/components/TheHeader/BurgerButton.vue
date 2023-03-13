<script setup lang="ts">
    import { computed, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

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

<style lang="scss">
    .burger-label {
        position: absolute;
        top: clamp(10px, 10vmin, 64px);
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

            @include conditional-bg;
        }
        
    
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

            div {
                @include conditional-bg-alt;
            }
        }
    }
</style>