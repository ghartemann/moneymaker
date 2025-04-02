<template>
    <div class="w-full min-h-screen flex flex-col overflow-hidden relative pb-16">
        <TopBar></TopBar>

        <div v-if="loading" class="w-72 md:w-96 m-auto h-96">
            <UProgress v-model="loadingModel"></UProgress>

            <div class="text-center text-xs text-gray-500 mt-2">
                Loading...
            </div>

            <div class="text-center text-xs text-gray-300">
                Please wait
            </div>
        </div>

        <template v-else>
            <MoneyMakersEnabled
                :money-makers="moneyMakers.filter((mm) => mm.displayed)"
                :time-elapsed="timeElapsed"
                v-model="selectedTimeTab"
                class="max-w-full mx-auto"
            ></MoneyMakersEnabled>

            <UContainer class="mt-4 mb-8">
                <MoneyMakersDisabled
                    :money-makers="moneyMakers.filter((mm) => !mm.displayed)"
                    v-model="selectedTimeTab"
                ></MoneyMakersDisabled>
            </UContainer>
        </template>

        <CreatedBy class="absolute bottom-0"></CreatedBy>
    </div>
</template>

<script setup>
import thingsData from "~/constants/thingsData.js";
import TopBar from "~/components/TopBar.vue";
import MoneyMakersEnabled from "~/components/MoneyMakersEnabled.vue";
import MoneyMakersDisabled from "~/components/MoneyMakersDisabled.vue";
import moneyMakersData from "~/constants/wagesData.js";
import CreatedBy from "~/components/CreatedBy.vue";

const route = useRoute();

const meta = {
    title: 'TrickleDown.js',
    description: 'How long would it take you to buy a 65 m Yacht? What about Elon Musk?',
    image: route.fullPath + '3d-money.jpg',
    url: 'https://trickledown.ghartemann.fr'
};

useSeoMeta({
    description: meta.description,
    ogTitle: meta.title,
    ogDescription: meta.description,
    ogImage: meta.image,
    ogUrl: meta.url,
    twitterTitle: meta.title,
    twitterDescription: meta.description,
    twitterImage: meta.image,
    twitterCard: 'summary'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        }
    ]
})

const rate = ref(20);
const timeElapsed = ref(0); // in seconds
const lastUpdateTime = ref(Date.now());

const selectedTimeTab = ref('fulltime');

const moneyMakers = ref([]);

const loading = computed(() => moneyMakers.value.length === 0);
const loadingModel = ref(null);

onMounted(() => {
    initMoneyMakers();

    setInterval(() => {
        update();
    }, rate.value);
});

function initMoneyMakers() {
    loading.value = true;

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
    loading.value = false;
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
