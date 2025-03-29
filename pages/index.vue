<template>
    <div class="text-lg bg-green-400 min-h-screen">
        <h1 class="p-8 pb-2 text-center text-5xl font-bold text-white drop-shadow-lg">Moneymaker</h1>

        <div class="grid grid-cols-3 gap-4 p-8">
            <guy
                v-for="guy in guys"
                :key="guy.name"
                :guy="guy"
                :thingsToBuy="thingsToBuy"
            ></guy>
        </div>
    </div>
</template>

<script setup>
import Guy from "~/components/Guy.vue";
import things from "~/constants/things.js";

const rate = ref(10);

const thingsToBuy = ref(things);

const calculateTime = (price, rate) => price / rate;

const guys = ref([
    {
        name: 'SMIC',
        money: 0,
        moneyAnHour: 9.4,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 9.4) };
            return acc;
        }, {})
    },
    {
        name: 'Web developer starting salary',
        money: 0,
        moneyAnHour: 32000 / 12 / 4 / 40,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 32000 / 1607) };
            return acc;
        }, {})
    },
    {
        name: 'Alexandre Bompard (Carrefour CEO)',
        money: 0,
        moneyAnHour: 9000000 / 12 / 4 / 40,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 9000000 / 1607) };
            return acc;
        }, {})
    },
    {
        name: 'Jeff Bezos',
        money: 0,
        moneyAnHour: 7900000 * 0.92,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 7900000 * 0.92) };
            return acc;
        }, {})
    },
    {
        name: 'Elon Musk',
        money: 0,
        moneyAnHour: 23000000 * 0.92,
        things: thingsToBuy.value.reduce((acc, thing) => {
            acc[thing.slug] = { owned: 0, timeItLlTake: calculateTime(thing.price, 23000000 * 0.92) };
            return acc;
        }, {})
    }
]);

onMounted(() => {
    setInterval(() => {
        updateMoney();
    }, rate.value);
});

function updateMoney() {
    guys.value.forEach(guy => {
        guy.money += (guy.moneyAnHour / 3600) * (rate.value / 1000);
    });
}
</script>

<style scoped>

</style>