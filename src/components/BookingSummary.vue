<script setup lang = "ts">
    import IconCreditCard from './icons/IconCreditCard.vue';
    import IconUser from './icons/IconUser.vue';
</script>

<template lang = "">
    <div class = "booking-summary">
        <div class = "solid"></div>
        <div class = "summary">
            <div class = "description">
                <div class = "booking info">
                    <p class = "date"><slot name = "date"></slot></p>
                    <p class = "name caption"><slot name = "name"></slot></p>
                </div>
                <div class = "booking details">
                    <p class = "time"><slot name = "time"></slot></p>
                    <p class = "code"><slot name = "code"></slot></p>
                </div>
            </div>
            <div class = icons>
                <div class = price>
                    <IconCreditCard class = "icon"></IconCreditCard>
                    <p class = "price caption"><slot name = "price"></slot></p>
                </div>
                <div class = count>
                    <IconUser class = "icon"></IconUser>
                    <p class = "count caption"><slot name = "count"></slot></p>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Scoped Styling -->
<style scoped lang = "scss">


    .booking-summary {
        border: solid 1px $clr-secondary;
        border-radius: 10px;
        display: flex;
        overflow: hidden;
        margin: 5px;

        p {
            margin: 0px;
        }

        .solid {
            background-color: $clr-secondary;
            width: 0.5em;
            height: auto;
        }

        .summary {
            display: flex;
            flex-direction: column;

            .description {
                display: flex;
                gap: 2em;

                .booking {
                    gap: 0px;
                    padding: 0.75em;
                }

                .details {
                    align-items: right;
                    
                }
            }
        }

        .icons {
            display: flex;
            justify-content: space-between;

            .price {
                display: flex;
                background-color: $clr-secondary;
                color: $clr-primary;
                border-radius: 10px;
                align-items: center;
                margin: 0.75em;

                .caption {
                    margin-block: 0.25em;
                    margin-inline: 1em;
                }

                .icon {
                    margin-left: 1em;
                }
            }

            .count {
                display: flex;
                color: $clr-accent-1;
                align-items: center;
                margin-inline: 0.75em;

                .caption {
                    margin-left: 1em;
                }
            }
        }
    }
</style>

