<script setup lang="ts">
    import LikeMeButton from '@/components/LikeMeButton.vue';
    import ItemDescription from '@/components/ItemDescription.vue';
    import ItemImage from '@/components/ItemImage.vue';
</script>

<template>
    <main>
        <div class = "container">
            

            <div class = "item-container">
                <div class="breadcrumb mobile">
                    <p class = "caption">CATALOGUE > FEATURED</p>
                </div>

                <ItemImage :image="'https://i.pinimg.com/564x/f9/4c/0f/f94c0f404bbcfc879b705a128e9744f2.jpg'" class = "image-container"></ItemImage>
                
                <div class = "item-content">
                    <div class="breadcrumb large">
                        <p class = "caption">CATALOGUE > FEATURED</p>
                    </div>
                    <ItemDescription>
                        <template #item-name>PATCHWORK JACKET</template>
                        <template #owner-name>BY JOHN DOE</template>
                        <template #description>Lorem ipsum dolor sit amet consectetur. At et venenatis ac adipiscing. Cum at pharetra feugiat sagittis egestas bibendum.</template>
                        <template #sizing>XS</template>
                        <template #chest-size>34</template>
                        <template #neck-size>14.5</template>
                        <template #waist-size>27</template>
                        <template #arm-size>30.5</template>
                    </ItemDescription>
                    
                    <LikeMeButton class = "speechbubble"></LikeMeButton>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang = "scss">
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        color: $clr-secondary;
        padding-inline: 1em;
    }

    .item-container {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:1em;

        .breadcrumb {
            margin-right: auto;
        }

        .mobile {
            @include media (tablet) {
                display: none;
            }
        }
        
        .large {
            display: none;

            @include media (tablet) {
                display: flex;
            }
        }

        @include media (tablet) {
            flex-direction: row;
        }

        .image-container {
            width: 100%;
            height: auto;
            
            align-content: center;
            justify-content: center;

            @include media (tablet) {
                width: 40%;
                height: auto;
            }
        }

        .item-content {
            .speechbubble {
                justify-content: center;
                align-items: center;
                margin-inline: auto;
            }
            
            @include media (tablet) {
                width: 50%;
                margin-left: 5em;
                margin-block: 3em;
            }
        }

        @include media (tablet) {
            margin-inline: auto;
        }
    }

    
    

</style>