<template>
    <UCard :ui="{body: '!w-96'}">
        <!-- Section WageInfos dans un conteneur -->
        <div class="relative">
            <div ref="nameRef" class="h-0"></div>
            <WageInfos
                v-model="selectedTimeTab"
                :money-maker="moneyMaker"
                :time-elapsed="timeElapsed"
                :class="[
                    isScrolled ? 'fixed top-0 w-96 -mx-6 shadow-lg backdrop-blur-lg p-4 rounded-lg z-50' : ''
                ]"
            />
        </div>

        <!-- Liste des things -->
        <div v-if="moneyMaker.displayed" class="flex flex-col gap-2 mt-4"                 :class="[
                    isScrolled ? 'mt-72' : ''
                ]">
            <card-thing
                v-for="thing in things"
                :key="thing.name"
                :money-maker="moneyMaker"
                :selected-time-tab="selectedTimeTab"
                :thing="thing"
            />
        </div>
    </UCard>
</template>

<script setup>
import CardThing from "~/components/cards/CardThing.vue";
import useThings from "~/composables/useThings.js";
import WageInfos from "~/components/WageInfos.vue";

const props = defineProps({
    moneyMaker: {
        type: Object,
        required: true
    },
    timeElapsed: {
        type: Number
    }
});

const nameRef = ref(null);
const isScrolled = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            if (!props.moneyMaker.displayed) {
                return;
            }

            isScrolled.value = !entries[0].isIntersecting;
        },
        { threshold: 0 }
    );

    if (nameRef.value) {
        observer.observe(nameRef.value);
    }
});

const things = useThings().getThings();

const selectedTimeTab = defineModel();

watch(() => isScrolled.value, (newValue) => {
    console.log('isScrolled changed:', newValue);
});
</script>

<style scoped>

</style>
