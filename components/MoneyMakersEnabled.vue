<template>
    <TransitionGroup
        tag="div"
        name="fade-down"
        class="flex p-[1px] overflow-x-auto pb-4 px-2 snap-x"
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
             style="width: calc(33.3333% - var(--spacing) * 4px)"
             v-for="moneyMaker in moneyMakers"
             :key="moneyMaker.name"
        >
            <card-money-maker
                v-model="selectedTimeTab"
                :money-maker="moneyMaker"
                :time-elapsed="timeElapsed"
                class="shrink-0 grow-0"
                style="width: calc(33.3333% - var(--spacing) * 4px)"
            ></card-money-maker>
        </div>
    </TransitionGroup>
</template>

<script setup>
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
    }
});

const selectedTimeTab = defineModel();
</script>

<style scoped lang="scss">

</style>
