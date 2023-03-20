<script setup lang="ts">
    // Import heart
    import IconPlus from '@/components/icons/IconPlus.vue';

    // Variables passed to this component are props
    const props = defineProps({
        alignment: {
            type: String,
            required: true,
            default: 'left'
        }
    })
</script>

<!-- Template with default text and icon -->
<template lang="">
    <div class="speech-bubble" :class="alignment">
        <slot class="text"></slot>
        <IconPlus class="icon"></IconPlus>
    </div>
</template>

<!-- Scoped Styling -->
<style scoped lang="scss">
    .speech-bubble {
        color: $clr-secondary;
        margin: 5px;
        padding: .75em;
        padding-inline: 1.75em;
        width: 100%; //adjusts according to the size of container
        position: relative;

        display: flex;
        flex-direction: row;

        align-self: flex-start;
        
        max-width: 40ch; //remove if not wide enough, was added for tests
        justify-content: space-between;

        .icon {
            align-self: center;
            margin-inline: 1vw;
        }

    }
</style>