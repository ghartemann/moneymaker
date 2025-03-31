<template>
    <div class="w-full min-h-screen flex flex-col overflow-hidden">
        <TopBar></TopBar>

        <MoneyMakersEnabled
            :money-makers="moneyMakers.filter((mm) => mm.displayed)"
            :time-elapsed="timeElapsed"
            v-model="selectedTimeTab"
            class="max-w-full mx-auto"
        ></MoneyMakersEnabled>

        <UContainer class="mt-4">
            <MoneyMakersDisabled
                :money-makers="moneyMakers.filter((mm) => !mm.displayed)"
                v-model="selectedTimeTab"
            ></MoneyMakersDisabled>
        </UContainer>

        <div class="mt-16 mb-8 text-center text-xs">
            Created with 💔 by <ULink to="https://ghartemann.fr" target="_blank">ghartemann</ULink>
        </div>
    </div>
</template>

<script setup>
import thingsData from "~/constants/thingsData.js";
import TopBar from "~/components/TopBar.vue";
import MoneyMakersEnabled from "~/components/MoneyMakersEnabled.vue";
import MoneyMakersDisabled from "~/components/MoneyMakersDisabled.vue";
import moneyMakersData from "~/constants/moneyMakersData.js";

const rate = ref(20);
const timeElapsed = ref(0); // in seconds
const lastUpdateTime = ref(Date.now());

const selectedTimeTab = ref('fulltime');

const moneyMakers = ref([]);

onMounted(() => {
    initMoneyMakers();

    setInterval(() => {
        update();
    }, rate.value);
});

function initMoneyMakers() {
    const mm = [];

    moneyMakersData.forEach(moneyMaker => {
        mm.push({
            ...moneyMaker,
            money: 0,
            things: thingsData.reduce((acc, thing) => {
                acc[thing.slug] = {
                    owned: 0,
                    timeItLlTake: thing.price / moneyMaker.hourlyWage
                };

                return acc;
            }, {})
        });
    });

    moneyMakers.value = mm;
}

function update() {
    const now = Date.now();
    const delta = (now - lastUpdateTime.value) / 1000; // delta en secondes
    lastUpdateTime.value = now;

    timeElapsed.value += delta;

    moneyMakers.value.forEach(moneyMaker => {
        moneyMaker.money += (moneyMaker.hourlyWage / 3600) * delta;

        thingsData.forEach(thing => {
            moneyMaker.things[thing.slug].owned = Math.floor(moneyMaker.money / thing.price);
        });
    });
}
</script>

<style scoped>

</style>
