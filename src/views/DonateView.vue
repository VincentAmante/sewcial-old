<script setup lang="ts">
// Import of a speechbubble
import SpeechBubble from "@/components/SpeechBubble.vue";
import LogoWhite from "@/components/TheHeader/HeaderLogo.vue";
</script>
<template>
    <main>
        <!-- Just test divs, don't mind -->
        <section>
            <div class="test">
                <div class="test-wrapper">
                    <div class="splash-headings">
                        <span>Support</span>
                        <span id="the">THE</span>
                        <span>Community</span>
                    </div>
                </div>
            </div>
            <div class="card-section">
                <div class="info-card">
                    <img src="@/assets/icons/sharelove.png" alt="" />
                    <h3>Share Love</h3>
                    <div>Drop off your pre-loved clothes at one of our stores</div>
                </div>
                <div class="info-card">
                    <img src="@/assets/icons/getrewards.png" alt="" />
                    <h3>Get Rewards</h3>
                    <div>Drop off your pre-loved clothes at one of our stores</div>
                </div>
                <div class="info-card">
                    <img src="@/assets/icons/star.png" alt="" />
                    <h3>Lorem Ipsum</h3>
                    <div>Drop off your pre-loved clothes at one of our stores</div>
                </div>
            </div>
        </section>

        <section class="donate">
            <div class="donate-info">
                <div>
                    <h2>WHAT WE ACCEPT</h2>
                    <p>
                        We take in any pre-loved clothing for men, women and children, along
                        with textiles.
                    </p>
                </div>
                <div>
                    <h2>HOW DO I PREPARE MY CONTRIBUTIONS?</h2>
                    <ul>
                        <li>Wash and fold your items.</li>
                        <li>
                            If you have end of life textiles that need recycling, it helps our
                            sorting volunteers if you put these in a separate labeled bag.
                        </li>
                        <li>
                            Include a note with any high value items or if contributing a luxury
                            item (whether it is authentic or inauthentic).
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>WHAT HAPPENS TO YOUR ITEM?</h2>
                    <p>
                        First, we sort your items into:
                    </p>
                    <ol>
                        <li>
                            Perfect quality - We bring them to the
                            workshop to be up-cycled.
                        </li>
                        <li>
                            Needs washing/stain treating/minor repairs -
                            If the item is not perfect, but can be made to be perfect, we do our
                            best. Volunteers take home stained items and individually treat these.
                        </li>
                        <li>
                            Condition is unusable - Our partner, Kiswa, kindly buy these from us
                            at AED2/kg and recycles them into furniture in Turkey. Luxury -
                            regardless of the condition, we do our best to authenticate internally
                            and repair.
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped lang="scss">
.splash-headings {
    font-size: 90px;
    display: flex;
    color: $clr-secondary;
    font-weight: 700;
    // background-color: aqua;
    justify-content: center;
    // align-content: center;
    padding-top: 100px;
}

.splash-headings #the {
    color: white;
    font-size: 50px;
    background-color: $clr-accent-1;
    height: min-content;
    padding: 5px;
    padding-inline: 20px;
    border-radius: 10px;
    rotate: -10deg;
    margin-inline: 20px;
    transform: translateY(20px);
}

.card-section {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 100px;
}

.info-card {
    // background-color: aqua;
    width: 300px;
    // margin-inline: 40px;
}

.donate {
    background-color: $clr-secondary;
}

.donate-info {
    color: white;
    padding: 100px;
    padding-inline: 250px;
}

.donate-info div{
    padding-bottom: 50px;
}</style>
