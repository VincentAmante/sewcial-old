<script setup lang="ts">
    // Import of a speechbubble
    import SpeechBubble from '@/components/SpeechBubble.vue';
    import ButtonDownload from '@/components/icons/ButtonDownload.vue';
    import ButtonFullscreen from '@/components/icons/ButtonFullscreen.vue';
    import ButtonLikedPage from '@/components/icons/ButtonLikedPage.vue';
    import LikeMeButton from '@/components/LikeMeButton.vue';
    import LikedButton from '@/components/LikedButton.vue';
    import TemplateCard from '@/components/TemplateCard.vue';
    import DownloadButton from '@/components/DownloadButton.vue';
    import DropDownTab from '@/components/DropDownTab.vue';
</script>
<template>
    <main>
        <!-- Just test divs, don't mind -->
        <div class="test">
            <div class="test-wrapper">
                <!-- A component with slots in action -->
                <SpeechBubble>
                    <h2>Hey!</h2>
                    <p>This speech bubble adapts to anything</p>
                    <p>Still needs some more tweaks though to adapt to all possible options 
                        (placing of this marker on the left for example)</p>
                </SpeechBubble>

                <!-- Component with a prop, the one above uses a default -->
                <SpeechBubble alignment="right">
                    <h2>Also</h2>
                    <p>Since it uses vue slots, it's fully capable of inserting any HTML content inside</p>
                    <div>
                        <img src="/images/logo-white.svg" alt="">
                        <div class="caption">Look at that!</div>
                    </div>
                    <p>Though it seems I need to configure the spacing for text elements</p>
                </SpeechBubble>
                <p>-------------------------------------------------</p>
                <SpeechBubble>
                <h2>FRANKIE</h2>
                <p>This bubble contains all the icons created during my session!</p>
                <div>
                    <ButtonDownload class="icon"></ButtonDownload>
                    <ButtonFullscreen class="icon"></ButtonFullscreen>
                    <ButtonLikedPage class="icon"></ButtonLikedPage>
                </div>
                </SpeechBubble>

                <SpeechBubble alignment="right">
                <h2>FRANKIE</h2>
                <p>Below, there are some big boy assets, like cards and buttons:)</p>
                <div>
                    
                </div>
                </SpeechBubble>
                <p>-------------------------------------------------</p>
                <LikeMeButton></LikeMeButton>
                <LikedButton></LikedButton>
                <DownloadButton></DownloadButton>
                <TemplateCard :image="'https://i.pinimg.com/564x/e1/cf/a1/e1cfa1a284fb717a0ef3023d7ee3e924.jpg'">
                    <template #item-name>ITEM NAME</template>
                    <template #owner>OWNER'S NAME</template>
                    <template #description>Short description</template>
                </TemplateCard>
                <DropDownTab>
                    <h1>SHOP BY</h1>
                </DropDownTab>
                <DropDownTab>
                    <h1>STYLE</h1>
                </DropDownTab>
                <DropDownTab>
                    <h1>PRICE</h1>
                </DropDownTab>
            </div>

        </div>
    </main>
</template>
<style scoped lang="scss">
    .test {
        max-width: 100%;
        @include flex-col;
        align-items: center;
        justify-content: center;
        padding-block: 10vmin;

        .test-wrapper {
            max-width: 600px;
            width: 50%;
            @include flex-col;
            align-items: center;
            justify-content: center;

            .icon{
                margin:10px;
            }
        }
    }

</style>