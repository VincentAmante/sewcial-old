<script setup lang="ts">
    import { ref, watch } from 'vue';

    import SpeechBubble from '@/components/SpeechBubble.vue';
    import DescriptionSlider from '@/components/DescriptionSlider.vue';
    import AppButton from '@/components/AppButton.vue';
    import ContactField from '@/components/FormFields/ContactField.vue';

    // This creates an app-wide event to toggle the description slider 
    function toggleTestSlider(){
        window.dispatchEvent(new Event('toggle-test'))
    }

    const textFieldModel = ref("");

    // This watches the textFieldModel
    watch(textFieldModel, (newText, oldText) => {
        // Try typing while having console pulled up to see how fast
        // it changes
        console.log(newText)
    })
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

                <ContactField name="Text" v-model="textFieldModel" is-required placeholder="placeholder">
                    <template #label>Sample Text</template>
                </ContactField>
                <div>
                    <p>Text Field Content: <span>{{ textFieldModel }}</span></p>
                    <p>IsRequired, so there is a * on the side</p>
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