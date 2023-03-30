<script setup lang="ts">
    import { ref, watch, computed } from 'vue';

    import SpeechBubble from '@/components/SpeechBubble.vue';
    import DescriptionSlider from '@/components/DescriptionSlider.vue';
    import AppButton from '@/components/AppButton.vue';
    import ContactField from '@/components/FormFields/ContactField.vue';
    import StartTimePicker from '@/components/FormFields/StartTimePicker.vue';
    import EndTimePicker from '@/components/FormFields/EndTimePicker.vue';
    import BookingPeopleCount from '@/components/FormFields/BookingPeopleCount.vue';
    import { DatePicker } from 'v-calendar';

    // This creates an app-wide event to toggle the description slider 
    function toggleTestSlider(){
        window.dispatchEvent(new Event('toggle-test'))
    }

    const name = ref('')
    const email = ref('')
    const message = ref('')
    const telNumber = ref('')
    
    // Returns an object with the form values
    const object = computed(() => {
        return {
            name: name.value,
            email: email.value,
            telNumber: telNumber.value,
            message: message.value,
        }
    })

    function showContactObject() {
        console.log(object.value)
    }

    const date = ref(new Date())
    const startTime = ref(new Date())
    const endTime = ref(new Date())
    const peopleCount = ref(0)
</script>
<template>
    <main>
        <!-- Just test divs, don't mind -->
        <div class="test">
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
                <form class="contact-field" action="">
                    <ContactField name="name" v-model="name" is-required>
                        <template>Name</template>
                    </ContactField>
                    <ContactField name="email" v-model="email" is-required>
                        <template>Email</template>
                    </ContactField>
                    
                    <ContactField name="telNumber" v-model="telNumber" is-required type="tel">
                        <template>Phone Number</template>
                    </ContactField>
                    
                    <ContactField name="message" v-model="message" is-required>
                        <template>Message</template>
                    </ContactField>

                    <AppButton @click="() => showContactObject()">Send Message</AppButton>
                    <div>
                        <p>
                            Output:
                        </p>
                        <div>
                            {{ object }}
                        </div>
                    </div>
                </form>

                <div class="booking-sample">
                    <DatePicker v-model="date"/>
                    <div class="value-display">
                        <h2>Date Value</h2>
                        <h3>
                            {{ date }}
                        </h3>
                    </div>
                    <div class="booking-input">
                        <StartTimePicker :date="date" v-model="startTime"/>
                        <EndTimePicker :is-disabled="false" :start-time="startTime" v-model="endTime"/>
                        <BookingPeopleCount v-model="peopleCount"/>
                    </div>
                    <div class="value-display">
                        <h2>Start Time</h2>
                        <h3>
                            {{ startTime }}
                        </h3>
                    </div>

                    <div class="value-display">
                        <h2>End Time</h2>
                        <h3>
                            {{ endTime }}
                        </h3>
                    </div>

                    <div class="value-display">
                        <h2>
                            People Count
                        </h2>
                        <h3> 
                            {{ peopleCount }}
                        </h3>
                    </div>
                </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
    main {
        @include flex-col;
        align-items: center;
        justify-content: center;
        gap: 1em;
        padding: 1em;
    }

    .test {
        max-width: 100%;
        @include flex-col;
        @include flex-centered;
    }

    .value-display {
        width: 100%;
        padding-inline: 1em;
        padding-block: .5em;
    }
    // .test {
    //     max-width: 100%;
    //     @include flex-col;
    //     align-items: center;
    //     justify-content: center;
    //     // padding: 5vmin;

    //     .test-wrapper {
    //         @include flex-col;
    //         // min-width: 80%;
    //         align-items: center;
    //         justify-content: center;
    //         // padding-inline: 2em;

    //         .icon{
    //             margin:10px;
    //         }
    //     }
    // }

    .booking-sample {
        @include flex-col;
        align-items: center;
        padding: 3vw;
        border-radius: 10px;
        background-color: $clr-secondary;
        gap: 1em;
        width: 90%;
        
        h2, h3 {
            margin: .1em;
            color: white;
        }

        .booking-input {
            width: 100%;
            justify-content: stretch;
            gap: 1em;
        }
    }

    .contact-field {
        @include flex-col;
        gap: 1.5em;
        border: 6px dashed $clr-secondary;
        border-radius: 45px;
        margin-block: 1em;

        // width: 100%;
        max-width: 700px;
        padding: 5vw;
    }
</style>