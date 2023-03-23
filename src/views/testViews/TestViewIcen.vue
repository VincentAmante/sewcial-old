<script setup lang="ts">
    import { ref } from 'vue';

    import SpeechBubble from '@/components/SpeechBubble.vue';
    import DescriptionSlider from '@/components/DescriptionSlider.vue';
    import AppButton from '@/components/AppButton.vue';
    import TextField from '@/components/FormFields/TextField.vue';

    // This creates an app-wide event to toggle the description slider 
    function toggleTestSlider(){
        window.dispatchEvent(new Event('toggle-test'))
    }

    const textFieldModel = ref("");
</script>
<template>
    <main>
        <!-- Just test divs, don't mind -->
        <div class="test">
            <div class="test-wrapper">
                <p>-------------------------------------------------</p>
                <SpeechBubble>
                    <h2>ICEN</h2>
                    <p>This page is my testing ground</p>
                </SpeechBubble>
                
                <AppButton @click="() => toggleTestSlider()">Test DescriptionSlider</AppButton>

                <DescriptionSlider name="test" img-src="/images/placeholders/studio.png">
                    <template #title>Test Slider</template>
                    <template #default>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, totam officia. Repellendus consectetur pariatur ex repudiandae dignissimos ducimus, consequuntur laboriosam! Corporis porro sunt ipsa harum nulla quod rerum voluptatum sint.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod et ad illum, vero debitis dignissimos totam minima eligendi eveniet quisquam?</p>
                    </template>
                </DescriptionSlider>

                <TextField name="Text" v-model="textFieldModel" is-required>
                    <template #label>Sample Text</template>
                </TextField>
                <div>
                    <p>Text Field Content:</p>
                    <p>{{ textFieldModel }}</p>
                </div>
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
            @include flex-col;
            min-width: 80%;
            align-items: center;
            justify-content: center;

            .icon{
                margin:10px;
            }
        }
    }
</style>