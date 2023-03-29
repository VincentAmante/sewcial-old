<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import PageCounter from '@/components/PageCounter.vue';
import Incrementor from '@/components/Incrementor.vue';
import ContactField from '@/components/FormFields/ContactField.vue'
import BookingSummary from '@/components/BookingSummary.vue';
import { computed, ref } from 'vue';


const maxPages = 5;
const page = ref(1);
const incrementPage = () => {
    if (page.value < maxPages) page.value++;
}
const decrementPage = () => {
    if (page.value > 1) page.value--;
}

const sampleWorkshops = ref([
    {
        activity: 'Kids & Teens Sewing Club',
        price: 45,
        slots: 0,
    },
    {
        activity: 'Lorem Ipsew',
        price: 15,
        slots: 0,
    },
    {
        activity: 'Needlework Socialist Society',
        price: 20,
        slots: 0,
    }
])

const totalSlots = computed(() => {
    let total = 0;
    sampleWorkshops.value.forEach(workshop => {
        total += workshop.slots;
    });

    return total;
})

const totalCost = computed(() => {
    let total = 0;
    sampleWorkshops.value.forEach(workshop => {
        total += workshop.price * workshop.slots;
    });

    return total;
})

const extraInfo = ref('');

const personalDetails = ref({
    firstName: {
        value: '',
        error: false,
        errorMessage: ''
    },
    lastName: {
        value: '',
        error: false,
        errorMessage: ''
    },
    email: {
        value: '',
        error: false,
        errorMessage: ''
    },
    mobileNumber: {
        value: '',
        error: false,
        errorMessage: '',
    }
})

const cardDetails = ref({
    cardNumber: {
        value: '',
        error: false,
        errorMessage: ''
    },
    expiryDate: {
        value: '',
        error: false,
        errorMessage: ''
    },
    cvv: {
        value: '',
        error: false,
        errorMessage: ''
    },
    zipCode: {
        value: '',
        error: false,
        errorMessage: ''
    }
})
</script>

<template>
    <main>
        <section>
            <div class="booking-header">
                <div @click="decrementPage()">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" class="chevron-left"/>
                </div>
                <div>
                    <PageCounter :page-count="page" :total-pages="maxPages"></PageCounter>
                </div>
            </div>
            <div class="content-container">
                <div class="content">
                    <!-- TODO: Refactor how pages are decided so transition is smoother -->
                    <section id="workshops" v-if="page === 1">
                        <ul>
                            <li v-for="workshop in sampleWorkshops">
                                <div>
                                    <h3>{{ workshop.activity }}</h3>
                                    <p>AED {{ workshop.price }}</p>
                                </div>
                                <Incrementor v-model="workshop.slots" :text="workshop.activity"></Incrementor>
                            </li>
                        </ul>
                        <div class="totals">
                            <div class="text-h3">SLOTS: {{ totalSlots }}</div>
                            <div class="text-h3">TOTAL: {{ totalCost }}</div>
                        </div>
                    </section>

                    <section id="extra-info" v-if="page === 2">
                        <h3>If there is any extra information, please note it here</h3>
                        <p>Eg: Accessibility (we have a rooftop that hosts the events)</p>
                        <textarea name="extra-info" id="" cols="30" rows="10" v-model="extraInfo"></textarea>
                    </section>

                    <section id="personal-details" v-if="page === 3">
                        <h3>Add personal details</h3>
                        <div class="personal-details-form">
                            <ContactField class="event-field" name="firstName" v-model="personalDetails.firstName.value">
                                First Name
                            </ContactField>
                            <ContactField class="event-field" name="lastName" v-model="personalDetails.lastName.value">
                                Last Name
                            </ContactField>
                            <ContactField class="event-field" name="email" v-model="personalDetails.email.value" type="email">
                                Email Address
                            </ContactField>
                            <ContactField class="event-field" name="number" v-model="personalDetails.firstName.value" type="tel">
                                Mobile Number 
                            </ContactField>
                        </div>
                        <div class="booking-summary-container">
                            <div>
                                <h3>Booking Summary</h3>
                            </div>
                            <BookingSummary>
                                <template #date>Saturday, 18 March 2023</template>
                                <template #name>Kids & Teens Sewing Club</template>
                                <template #time>10:00am - 11:00am</template>
                                <template #code>SW898LVMB4</template>
                                <template #price>70 AED</template>
                                <template #count>2</template>
                            </BookingSummary>
                        </div>
                    </section>
                </div>
                <div class="page-btn-container">
                    <div>
                        <AppButton v-if="page > 1" @click="decrementPage()" class="btn prev-btn">Prev</AppButton>
                    </div>
                    <div>
                        <AppButton v-if="page < 5" @click="incrementPage()" class="btn next-btn">Next</AppButton>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    main {
        // padding-block: $margin-height;
        padding-block: 1.5em;
        padding-inline: $margin-width;
    }

    .booking-header {
        @include flex;
        position: relative;
        justify-content: center;

        padding-inline: .75em;
        padding-block: 1em;
        background-color: $clr-secondary;
        border-radius: 20px 20px 0px 0px;
        color: $clr-primary;

        .chevron-left {
            position: absolute;
            left: 1em;
        }
    }

    .content-container {
        padding: 1.25em;
        padding-block: 1em;
        padding-bottom: .2em;
        border: 3px dashed $clr-secondary;
        border-top: 0;
        border-radius: 0px 0px 20px 20px;
        min-height: 65vh;
    }

    .btn {
        border-radius: 10px;

        &.prev-btn {
            background-color: $clr-accent-1;
        }
    }

    .page-btn-container {
        // @include flex;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        // justify-content: space-between;
        
        div {
            @include flex-centered;
        }

        @include media(md){
            @include flex;
            flex-direction: row;
            justify-content: flex-end;
            gap: 1em;
        }
    }

    #workshops {

        border: 2px solid $clr-secondary;
        border-radius: 20px;

        .totals {
            @include flex;
            justify-content: space-between;
            padding-block: .25em;
            padding-inline: 1em;
            border-top: 2px dashed $clr-secondary;
            color: $clr-secondary;
        }

        ul {
            list-style: none;
            overflow: scroll;
            overflow-x: hidden;
            height: 50vh;

            li {
                @include flex-col;
                align-items: center;
                text-align: center;
                padding-block: 1em;
                padding-inline: 1em;

                div {
                    h3, p {
                        margin: .25em;
                    }
                }
            }

            @include media(md){
                li {
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    text-align: left;
                    border-bottom: 2px dashed $clr-secondary;

                    &:last-of-type {
                        border-bottom: 0;
                    }
                }
            }
        }
    }

    #extra-info {
        textarea {
            width: 100%;
            border-radius: 20px;
            border: 2px solid $clr-secondary;
            resize: none;
            padding: 1em;
        }
    }

    #personal-details {
        @include flex-col;
        .personal-details-form {
            // display grid with 2 columns per row unless it's too big
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-flow: row;
            gap: 1em;
            padding-block: 1em;
            border-bottom: 1px solid $clr-secondary;

            @include media(md){
                grid-template-columns: 1fr 1fr;
            }
        }

        .booking-summary-container {
            @include flex;
            padding-block: 1em;
            justify-content: space-between;
            border-bottom: 1px solid $clr-secondary;
        }
    }
</style>