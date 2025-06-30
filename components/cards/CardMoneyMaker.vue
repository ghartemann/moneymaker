<template>
    <UCard :ui="{body: '!w-96 relative'}">
        <div ref="nameRef">
            <WageInfos
                v-model="selectedTimeTab"
                :money-maker="moneyMaker"
                :time-elapsed="timeElapsed"
            ></WageInfos>
        </div>

        <Transition
            enter-active-class="transition-all duration-300 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-300 ease-in-out"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
        <WageInfos
            v-show="moneyMaker.displayed && isScrolled"
            class="fixed top-0 -ml-6 !w-96 px-6 py-4 z-50 backdrop-blur-lg"
            v-model="selectedTimeTab"
            :money-maker="moneyMaker"
            :time-elapsed="timeElapsed"
        ></WageInfos>
        </Transition>

        <div v-if="moneyMaker.displayed" class="flex flex-col gap-2">
            <card-thing
                v-for="thing in things"
                :key="thing.name"
                :money-maker="moneyMaker"
                :selected-time-tab="selectedTimeTab"
                :thing="thing"
            ></card-thing>
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
