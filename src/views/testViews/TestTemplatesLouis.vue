<script setup lang="ts">
import TiltedHeading from '@/components/TiltedHeading.vue';
</script>

<template>
    <main>
        <section>
            <img class="img-1" src="@/assets/images/Sticker_1.png" width="190" height="250" alt="">
            <img class="img-2" src="@/assets/images/Sticker_2.png" width="150" height="175" alt="">

            <div class="heading-container">
                <div class="title">
                    <TiltedHeading>COMMUNITY</TiltedHeading>
                    <h2 class="templates-heading">Templates</h2>
                </div>
                <p class="text">Lorem ipsum dolor sit amet consectetur. At purus maecenas nunc egestas sed. Tempor
                    adipiscing
                    venenatis praesent nisi tincidunt. Orci enim tristique aenean eu ac. Vel vestibulum imperdiet
                    scelerisque
                    dignissim in sagittis non dolor senectus. Sapien sodales tortor elementum suspendisse non mauris
                    scelerisque. </p>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
main {
    // margin: 100px 225px 100px 225px;
    // padding-block: $margin-height;
    padding-block: 3em;
    padding-inline: $margin-width;
}

.img-1 {
    display: none;

    @include media(desktop) {
        display: block;
        position: absolute;
        top: 130px;
        left: -60px;
    }
}

.img-2 {
    display: none;

    @include media(desktop) {
        // @extend .img-1;
        // left: 1410px;
        // top: 200px;
    }
}

.heading-container {
    display: flex;
    flex-direction: column;

    align-items: center;
    column-gap: 3em;

    // margin: 0 100px 0 100px;
    @include media(tablet) {
        flex-direction: row;
        justify-content: space-between;
    }
}

.templates-heading {
    text-transform: capitalize;
    color: $clr-secondary;
    position: relative;
    font-size: 30px;
    margin: -20px 0 0 15px;


    @include media(tablet) {
        font-size: 50px;
        margin: -25px 0 0 50px;
    }
}

.title {
    padding-bottom: 2em;
}

// .text {
//     width: 525px;
//     line-height: 1.4em;
// }
</style>