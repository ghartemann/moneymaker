<template>
    <div class="w-full min-h-screen flex flex-col overflow-hidden relative pb-16">
        <TopBar
            v-model="selectedTimeTab"
            :money-makers="moneyMakers.filter((mm) => !mm.displayed)"
        ></TopBar>

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
            <WageTypesEnabled
                v-model="selectedTimeTab"
                :money-makers="moneyMakers.filter((mm) => mm.displayed)"
                :time-elapsed="timeElapsed"
                class="max-w-full mx-auto"
            ></WageTypesEnabled>
        </template>

        <CreatedBy class="absolute bottom-0"></CreatedBy>
    </div>
</template>

<script setup>
import TopBar from "~/components/TopBar.vue";
import WageTypesEnabled from "~/components/WageTypesEnabled.vue";
import CreatedBy from "~/components/CreatedBy.vue";
import useThings from "~/composables/useThings.js";
import useWages from "~/composables/useWages.js";

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

const selectedTimeTab = ref('fulltime');

const things = ref(useThings().getThings());
const wages = ref(useWages().getWages());
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

    wages.value.forEach(moneyMaker => {
        mm.push({
            ...moneyMaker,
            money: 0,
            things: things.value.reduce((acc, thing) => {
                const baseHours = thing.price / moneyMaker.hourlyWage;

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

    moneyMakers.value.forEach(moneyMaker => {
        moneyMaker.money += (moneyMaker.hourlyWage / 3600) * delta;

        things.value.forEach(thing => {
            moneyMaker.things[thing.slug].owned = Math.floor(moneyMaker.money / thing.price);
        });
    });
}
</script>

<style scoped>

</style>
