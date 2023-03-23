<script setup lang = "ts">

</script>

<template lang = "">
    <div class = "item-description">
        <p>SHOWCASE > FEATURED</p>

        <h1 class = "item-name">
            <slot name = "item-name"></slot>
        </h1>

        <h3 class = "owner-name">
            <slot name = "owner-name"></slot>
        </h3>

        <p class = "description">
            <slot name = "description"></slot>
        </p>

        <div class = "sizing">
            <h3>SIZING</h3>
            <h3><slot name = "sizing"></slot></h3>
        </div>

        <div class = "table">
            <table>
                <tr>
                    <th><p>Chest</p></th>
                    <th><p><slot name = "chest-size"></slot></p></th>
                    <th><p>Neck</p></th>
                    <th><p><slot name = "neck-size"></slot></p></th>
                </tr>
                <tr>
                    <th><p>Waist</p></th>
                    <th><p><slot name = "waist-size"></slot></p></th>
                    <th><p>Arm Length</p></th>
                    <th><p><slot name = "arm-size"></slot></p></th>
                </tr>
            </table>
        </div>
    </div>
</template>

<!-- Scoped Styling -->
<style scoped lang="scss">
.item-description {
    display: flex;
    flex-direction: column;
    color: $clr-secondary;

    .sizing {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }

    table {
        border: 1px solid;
        border-collapse: collapse;

        th {
            border: 1px solid;
            padding-inline: 1.75em;
            text-align: left;
        }
    }
}

</style>