<script setup lang="ts">
    import { computed } from 'vue';
    const props = defineProps({
        modelValue: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
        isRequired: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['update:modelValue'])
    const textInput = computed({
        get(){
            return props.modelValue
        },
        set(value){
            emit('update:modelValue', value)
        }
    })
</script>

<template>
    <label :for="name" class="error">
        <p><slot name="label">Label</slot></p>
        <input type="text" :name="name" id="" :placeholder="placeholder" v-model="textInput">
    </label>
</template>

<style scoped lang="scss">
    label {
        @include flex-col;
        gap: 0;

        p {
            margin: 0;

            span {
                padding-left: .1em;
            }
        }

        input {
            border-radius: 5px;
            border: 1px solid $clr-secondary;
            background: none;
            padding-block: .5em;
            padding-inline: .25em;
        }
    }
</style>