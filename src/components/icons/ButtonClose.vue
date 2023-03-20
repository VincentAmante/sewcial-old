<!-- TODO: Apply advanced behaviour -->
<script setup lang="ts">

</script>

<template>
    <font-awesome-icon 
        @click = "$emit('close')"
        class="close-button"
        :icon="['fas', 'xmark']"/>
</template>

<style lang="scss">
    .close-button {
        transition: all ease-out .15s;
        color: $clr-secondary;
        font-size: 45px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
</style>