<template>
    <div class="min-h-screen">
        <UContainer class="text-lg mb-16">
            <TopBar></TopBar>

            <MoneyMakersEnabled
                :money-makers="moneyMakers.filter((mm) => mm.displayed)"
                :time-elapsed="timeElapsed"
                v-model="selectedTimeTab"
                :loading="loading"
            ></MoneyMakersEnabled>

            <USeparator class="my-8"></USeparator>

            <MoneyMakersDisabled
                :money-makers="moneyMakers.filter((mm) => !mm.displayed)"
                v-model="selectedTimeTab"
            ></MoneyMakersDisabled>
        </UContainer>
    </div>
</template>

<script setup>
import thingsData from "~/constants/thingsData.js";
import TopBar from "~/components/TopBar.vue";
import MoneyMakersEnabled from "~/components/MoneyMakersEnabled.vue";
import MoneyMakersDisabled from "~/components/MoneyMakersDisabled.vue";
import moneyMakersData from "~/constants/moneyMakersData.js";

const loading = ref(false);

const rate = ref(20);
const timeElapsed = ref(0);

const selectedTimeTab = ref('fulltime');

const moneyMakers = ref([]);

onMounted(() => {
    loading.value = true;

    initMoneyMakers();

    setInterval(() => {
        update();
    }, rate.value);

    loading.value = false;
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
    timeElapsed.value += rate.value;

    moneyMakers.value.forEach(moneyMaker => {
        moneyMaker.money += (moneyMaker.hourlyWage / 3600) * (rate.value / 1000);

        thingsData.forEach(thing => {
            moneyMaker.things[thing.slug].owned = Math.floor(moneyMaker.money / thing.price);
        });
    });
}
</script>

<style scoped>

</style>
