<script setup lang="ts">
import TiltedHeading from '@/components/TiltedHeading.vue';
</script>

<template>
    <main>
        <img class="img-1" src="@/assets/images/Sticker_1.png" width="190" height="250" alt="">
        <div class="heading-container">
            <div>
                <TiltedHeading>COMMUNITY</TiltedHeading>
                <h1 class="templates-heading">Templates</h1>
            </div>
            <p class="text">Lorem ipsum dolor sit amet consectetur. At purus maecenas nunc egestas sed. Tempor adipiscing venenatis praesent nisi tincidunt. Orci enim tristique aenean eu ac. Vel vestibulum imperdiet scelerisque dignissim in sagittis non dolor senectus. Sapien sodales tortor elementum suspendisse non mauris scelerisque. </p>
        </div>
        <img class="img-2" src="@/assets/images/Sticker_2.png" width="150" height="175" alt="">
    </main>
</template>

<style scoped lang="scss">
main{
    margin: 100px 225px 100px 225px;
}
.img-1{
    position:absolute;
    top: 130px;
    left: -60px;
}
.img-2{
    @extend .img-1;
    left: 1410px;
    top: 200px;
}
.heading-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // align-items: center;
    // margin: 0 100px 0 100px;
}
.templates-heading{
    text-transform: capitalize;
    font-size: 50px;
    color: $clr-secondary;
    margin: -25px 0 0 50px;
    position: relative;
}

.text{
    width: 525px;
    line-height: 1.4em;
}
</style>