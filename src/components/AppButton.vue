<template>
    <button>
        <slot>
            Button!
        </slot>
    </button>
</template>

<style lang="scss">
    button {
        background-color: $clr-secondary;
        color: $clr-primary;
        padding: 1em;
        padding-inline: 3em;
        border-radius: 25px;
        border: 0;
        margin: 40px;
        cursor: pointer;
    }
</style>