<script setup lang="ts">
import TiltedHeading from '@/components/TiltedHeading.vue';
import TemplateCard from '@/components/TemplateCard.vue';
</script>

<template>
    <main>
        <!-- Left sticker -->
        <img class="img-1" src="@/assets/images/Sticker_1.png" width="190" height="250" alt="">

        <!-- Page Heading -->
        <div class="heading-container">
            <div class="title">
                <TiltedHeading>COMMUNITY</TiltedHeading>
                <h1 class="templates-heading">Templates</h1>
            </div>
            <p class="text">Lorem ipsum dolor sit amet consectetur. At purus maecenas nunc egestas sed. Tempor adipiscing venenatis praesent nisi tincidunt. Orci enim tristique aenean eu ac. Vel vestibulum imperdiet scelerisque dignissim in sagittis non dolor senectus. Sapien sodales tortor elementum suspendisse non mauris scelerisque. </p>
        </div>

        <!-- Right sticker -->
        <img class="img-2" src="@/assets/images/Sticker_2.png" width="150" height="175" alt="">

        <!-- Featured section -->
        <section class="featured">
            <h2>Featured</h2>
            <div class="featured-cards">
                <TemplateCard :image="'https://i.pinimg.com/564x/c7/b1/a9/c7b1a9ac00520fa67049d6be289d3d7a.jpg'">
                    <template #item-name>ITEM NAME</template>
                    <template #owner>OWNER</template>
                </TemplateCard>
                <TemplateCard :image="'https://i.pinimg.com/564x/c7/b1/a9/c7b1a9ac00520fa67049d6be289d3d7a.jpg'">
                    <template #item-name>ITEM NAME</template>
                    <template #owner>OWNER</template>
                </TemplateCard>
                <TemplateCard :image="'https://i.pinimg.com/564x/c7/b1/a9/c7b1a9ac00520fa67049d6be289d3d7a.jpg'">
                    <template #item-name>ITEM NAME</template>
                    <template #owner>OWNER</template>
                </TemplateCard>
                <TemplateCard :image="'https://i.pinimg.com/564x/c7/b1/a9/c7b1a9ac00520fa67049d6be289d3d7a.jpg'">
                    <template #item-name>ITEM NAME</template>
                    <template #owner>OWNER</template>
                </TemplateCard>
                <TemplateCard :image="'https://i.pinimg.com/564x/c7/b1/a9/c7b1a9ac00520fa67049d6be289d3d7a.jpg'">
                    <template #item-name>ITEM NAME</template>
                    <template #owner>OWNER</template>
                </TemplateCard>
                <TemplateCard :image="'https://i.pinimg.com/564x/c7/b1/a9/c7b1a9ac00520fa67049d6be289d3d7a.jpg'">
                    <template #item-name>ITEM NAME</template>
                    <template #owner>OWNER</template>
                </TemplateCard>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
.featured{
    background-color: $clr-accent-1;
    padding: 3em;

    h2{
        color: $clr-primary;
    }
}
.featured-cards{
    display: flex;
    overflow-x: scroll;
}
.featured-cards::-webkit-scrollbar {
  display: none;
}

main{
    // margin: 100px 225px 100px 225px;
}
.img-1{
    display: none;

    @include media(desktop) {
        display: block;
        position: absolute;
        top: 130px;
        left: -60px;
    }
}
.img-2{
    display: none;

    @include media(desktop) {
        // @extend .img-1;
        // left: 1410px;
        // top: 200px;
    }
}
.heading-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    // column-gap: 3em;
    padding-block: 3em;
    padding-inline: $margin-width;

    // @include media(desktop) {
    //     flex-direction: row;
    //     justify-content: space-between;
    //     padding-block: 10em;
    //     column-gap: 10em;
    // }

    @include media(tablet) {
        flex-direction: row;
        justify-content: space-between;
        padding-block: 5em;
        column-gap: 5em;
    }
}
.templates-heading{
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
    padding-bottom: 1.5em;
}
.text{
    // width: 525px;
    line-height: 1.4em;
    color: $clr-text;
}

</style>