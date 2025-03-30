<template>
    <div class="min-h-screen">
        <UContainer class="text-lg mb-16">
            <TopBar></TopBar>

            <MoneyMakersEnabled
                :money-makers="moneyMakers.filter((mm) => mm.displayed)"
                v-model="selectedTimeTab"
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

const rate = ref(20);

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
            name: moneyMaker.name,
            money: 0,
            hourlyWage: moneyMaker.hourlyWage,
            things: thingsData.reduce((acc, thing) => {
                acc[thing.slug] = {
                    owned: 0,
                    timeItLlTake: thing.price / moneyMaker.hourlyWage
                };

                return acc;
            }, {}),
            displayed: moneyMaker.displayed
        });
    });

    moneyMakers.value = mm;
}

function update() {
    moneyMakers.value.forEach(moneyMaker => {
        moneyMaker.money += (moneyMaker.hourlyWage / 3600) * (rate.value / 1000);

        thingsData.forEach(thing => {
            moneyMaker.things[thing.slug].owned = moneyMaker.money / thing.price;
        });
    });
}
</script>

<style scoped>

</style>