<script setup lang="ts">
    // Variables passed to this component are props
    const props = defineProps({
        alignment: {
            type: String,
            default: 'left'
        }
    })
</script>

<!-- Template with defined slots -->
<!-- Currently, content by default goes to the one without a name -->
<template lang="">
    <h2 class="bold-heading" :class="alignment">
        <slot></slot>
    </h2>
</template>

<!-- Scoped Styling -->
<style scoped lang="scss">
    .bold-heading {
        // background-color: $clr-accent-1;
        // color: $clr-primary;
        // padding: 5px 10px 5px 10px;
        // border-radius: 5px;
        border-radius: 5px;
        padding: 5px 10px 5px 10px;
        color: $clr-primary;
        width: fit-content;
        position: relative;
        max-width: 50ch;
        word-wrap: break-word;
        &.left {
            align-self: flex-start;
            background-color: $clr-accent-1;
        }
    }
</style>