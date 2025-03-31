<template>
    <TransitionGroup tag="div" name="fade" class="flex gap-4 p-[1px] overflow-x-auto px-8 pb-4">
        <div v-if="moneyMakers.length === 0">
            <NuxtPlaceholder class="w-96">
                <div class="text-center text-xs text-gray-500">
                    Add at least one money maker
                </div>

                <div class="text-center text-xs text-gray-300">
                    or whatever
                </div>
            </NuxtPlaceholder>
        </div>

        <card-money-maker
            v-for="moneyMaker in moneyMakers"
            :key="moneyMaker.name"
            v-model="selectedTimeTab"
            :money-maker="moneyMaker"
            :time-elapsed="timeElapsed"
            class="shrink-0"
            style="width: calc(33.3333% - calc(var(--spacing) * 4px) - (calc(2px / 3)))"
        ></card-money-maker>
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
