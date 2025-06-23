<template>
    <div ref="containerRef" class="overflow-x-auto smooth-scroll">
        <TransitionGroup
            tag="div"
            name="fade-down"
            class="flex pb-4 px-2 snap-x"
        >
            <div v-if="moneyMakers.length === 0">
                <NuxtPlaceholder class="w-96">
                    <div class="text-center text-xs text-gray-500">
                        Add at least one type
                    </div>

                    <div class="text-center text-xs text-gray-300">
                        or whatever
                    </div>
                </NuxtPlaceholder>
            </div>

            <div class="p-2 snap-center shrink-0 grow-0"
                 v-for="moneyMaker in moneyMakers"
                 :key="moneyMaker.name"
            >
                <card-money-maker
                    v-model="selectedTimeTab"
                    :money-maker="moneyMaker"
                    :time-elapsed="timeElapsed"
                    :population-tick="populationTick"
                    class="!w-full grow-0 shrink-0"
                ></card-money-maker>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardMoneyMaker from "~/components/cards/CardMoneyMaker.vue";
import NuxtPlaceholder from "~/components/NuxtPlaceholder.vue";

defineProps({
    moneyMakers: {
        type: Array,
        required: true
    },
    timeElapsed: {
        type: Number,
        required: true
    },
    populationTick: {
        type: Number,
        required: true
    }
});

const selectedTimeTab = defineModel();
const containerRef = ref(null);

onMounted(() => {
    setTimeout(() => {
        if (containerRef.value) {
            containerRef.value.scrollLeft = containerRef.value.scrollWidth;
        }
    }, 100);
});
</script>

<style scoped>
.smooth-scroll {
    scroll-behavior: smooth;
}
</style>