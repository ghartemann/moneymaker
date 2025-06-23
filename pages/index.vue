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
                v-model="selectedTimeTab"
                :money-makers="moneyMakers.filter((mm) => mm.displayed)"
                :time-elapsed="timeElapsed"
                :population-tick="populationTick"
                class="max-w-full mx-auto"
            ></MoneyMakersEnabled>

            <UContainer class="mt-4 mb-8">
                <MoneyMakersDisabled
                    v-model="selectedTimeTab"
                    :money-makers="moneyMakers.filter((mm) => !mm.displayed)"
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
import wagesData from "~/constants/wagesData.ts";
import CreatedBy from "~/components/CreatedBy.vue";
import useFormat from "~/composables/format";

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
});

const rate = ref(10);
const timeElapsed = ref(0); // in seconds
const lastUpdateTime = ref(Date.now());
const animationFrameId = ref(null);
const currentPopulation = ref(8228063040); // Base population as of June 2025
const populationTick = ref(0); // Add this to force reactivity

const selectedTimeTab = ref('fulltime');

const thingsWithLivePopulation = computed(() => {
    return thingsData.map(thing => {
        if (thing.slug === 'people') {
            return {
                ...thing,
                price: {
                    value: currentPopulation.value,
                    currency: 'EUR'
                }
            };
        }
        return thing;
    });
});

const moneyMakers = ref([]);

const loading = computed(() => moneyMakers.value.length === 0);
const loadingModel = ref(null);

onMounted(() => {
    initMoneyMakers();
    startAnimation();
});

onUnmounted(() => {
    if (animationFrameId.value) {
        cancelAnimationFrame(animationFrameId.value);
    }
});

function startAnimation() {
    let lastFrameTime = performance.now();

    function animate(currentTime) {
        const deltaTime = currentTime - lastFrameTime;

        // Only update if enough time has passed (based on rate)
        if (deltaTime >= rate.value) {
        update();
            lastFrameTime = currentTime;
        }

        animationFrameId.value = requestAnimationFrame(animate);
    }

    animationFrameId.value = requestAnimationFrame(animate);
}

function initMoneyMakers() {
    loading.value = true;

    const mm = [];

    wagesData.forEach(moneyMaker => {
        mm.push({
            ...moneyMaker,
            money: 0,
            things: thingsData.reduce((acc, thing) => {
                const price = thing.slug === 'people' ? currentPopulation.value : thing.price;
                const baseHours = price / moneyMaker.hourlyWage;

                acc[thing.slug] = {
                    owned: 0,
                    timeItLlTake: baseHours,
                    timeItLlTakePartTime: (() => {
                        // Calculate working days (8 hours per day)
                        const workingDays = Math.floor(baseHours / 8);
                        // Remaining working hours
                        const remainingHours = baseHours % 8;

                        // Convert working days to weeks (5 days per week)
                        const weeks = Math.floor(workingDays / 5);
                        // Remaining working days
                        const remainingDays = workingDays % 5;

                        // Convert back to hours
                        return (weeks * 7 * 24) + (remainingDays * 24) + remainingHours;
                    })()
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
    
    // Update population (2.86 people born per second)
    currentPopulation.value += 2.86 * delta;
    populationTick.value++; // Increment to force reactivity

    moneyMakers.value.forEach(moneyMaker => {
        moneyMaker.money += (moneyMaker.hourlyWage / 3600) * delta;

        thingsData.forEach(thing => {
            const price = thing.slug === 'people' ? currentPopulation.value : thing.price;
            moneyMaker.things[thing.slug].owned = Math.floor(moneyMaker.money / price);
        });
    });
}
</script>

<style scoped>

</style>
