<template>
    <div class="min-h-screen">
        <UContainer class="text-lg mb-16">
            <TopBar></TopBar>

            <MoneyMakersEnabled :money-makers="moneyMakers.filter((mm) => mm.displayed)"></MoneyMakersEnabled>

            <USeparator class="my-8"></USeparator>

            <MoneyMakersDisabled :money-makers="moneyMakers.filter((mm) => !mm.displayed)"></MoneyMakersDisabled>
        </UContainer>
    </div>
</template>

<script setup>
import things from "~/constants/things.js";
import TopBar from "~/components/TopBar.vue";
import MoneyMakersEnabled from "~/components/MoneyMakersEnabled.vue";
import MoneyMakersDisabled from "~/components/MoneyMakersDisabled.vue";

const rate = ref(20);

const thingsToBuy = ref(things);

const calculateTime = (price, rate) => price / rate;

const moneyMakers = ref([
    {
        name: 'French SMIC',
        money: 0,
        hourlyWage: 9.4,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 9.4) };
            return acc;
        }, {}),
        displayed: true
    },
    {
        name: 'Web developer starting salary',
        money: 0,
        hourlyWage: 32000 / 12 / 4 / 40,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 32000 / 1607) };
            return acc;
        }, {}),
        displayed: false
    },
    {
        name: 'Average French CEO annual salary',
        money: 0,
        hourlyWage: 200000 / 12 / 4 / 40,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 200000 / 1607) };
            return acc;
        }, {}),
        displayed: true
    },
    {
        name: 'Alexandre Bompard (Carrefour CEO)',
        money: 0,
        hourlyWage: 9000000 / 12 / 4 / 40,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 9000000 / 1607) };
            return acc;
        }, {}),
        displayed: false
    },
    {
        name: 'Jeff Bezos',
        money: 0,
        hourlyWage: 7900000 * 0.92,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 7900000 * 0.92) };
            return acc;
        }, {}),
        displayed: false
    },
    {
        name: 'Elon Musk',
        money: 0,
        hourlyWage: 23000000 * 0.92,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 23000000 * 0.92) };
            return acc;
        }, {}),
        displayed: true
    }
]);

onMounted(() => {
    setInterval(() => {
        update();
    }, rate.value);
});

function update() {
    moneyMakers.value.forEach(moneyMaker => {
        moneyMaker.money += (moneyMaker.hourlyWage / 3600) * (rate.value / 1000);

        thingsToBuy.value.forEach(thing => {
            moneyMaker.things[thing.slug].owned = moneyMaker.money / thing.price;
        });
    });
}
</script>

<style scoped>

</style>