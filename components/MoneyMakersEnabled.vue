<template>
    <TransitionGroup
        tag="div"
        name="fade-down"
        class="flex overflow-x-auto pb-4 px-2 snap-x"
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
             :key="moneyMaker.slug"
        >
            <card-wage
                v-model="selectedTimeTab"
                :money-maker="moneyMaker"
                :time-elapsed="timeElapsed"
                class="!w-full grow-0 shrink-0"
            ></card-wage>
        </div>
    </TransitionGroup>
</template>

<script setup>
import CardWage from "~/components/cards/CardWage.vue";
import NuxtPlaceholder from "~/components/NuxtPlaceholder.vue";

defineProps({
    moneyMakers: {
        type: Array,
        required: true
    },
    timeElapsed: {
        type: Number,
        required: true
    }
});

const selectedTimeTab = defineModel();
</script>

<style scoped lang="scss">

</style>
