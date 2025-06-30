<template>
    <div>
        <div class="flex justify-between items-center">
            <div>
                {{ moneyMaker.name }}
                <span v-if="moneyMaker.subName" class="text-xs text-gray-500"> {{ moneyMaker.subName }}</span>
            </div>

            <USwitch v-model="moneyMaker.displayed"></USwitch>
        </div>

        <div class="flex gap-1">
            <div class="text-xs text-gray-500">
                {{ useFormat().formatPrice(moneyMaker.hourlyWage) }} per hour
            </div>

            <TooltipSources
                v-if="moneyMaker.sources.length > 0"
                :sources="moneyMaker.sources"
            ></TooltipSources>
        </div>

        <div v-if="moneyMaker.displayed" class="text-center my-6">
            <div class="text-xs">
                Made
            </div>

            <div class="text-3xl font-bold">
                {{ useFormat().formatPrice(moneyMaker.money) }}
            </div>

            <div class="text-xs">
                since this page was loaded
            </div>

            <div class="text-xs text-gray-500">
                about {{ useFormat().formatHours(timeElapsed / 60 / 60, true).join(' ') }} ago
            </div>
        </div>

        <div v-if="moneyMaker.displayed" class="space-y-2">
            <h2 class="text-center text-xs text-balance">
                Time it'll take to buy one of these (and <span class="underline font-semibold">nothing</span> else),
                working:
            </h2>

            <div class="flex gap-2 items-center">
                <UTabs
                    v-model="selectedTimeTab"
                    :items="tabs"
                    class="grow mb-0 pb-0"
                    size="xs"
                ></UTabs>

                <div class="flex flex-col gap-2">
                    <TooltipSources
                        :sources="explanation"
                        icon="lucide-circle-help"
                    ></TooltipSources>

                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useFormat from "~/composables/useFormat";
import TooltipSources from "~/components/TooltipSources.vue";

defineProps({
    moneyMaker: {
        type: Object,
        required: true
    },
    timeElapsed: {
        type: Number,
        default: 0
    }
});

const selectedTimeTab = defineModel();

const tabs = [
    {
        label: '24/7 (all the time)',
        value: 'fulltime'
    },
    {
        label: '9-5, Monday-Friday',
        value: 'parttime'
    }
];

const explanation = [
    {
        title: '24/7 (all the time)',
        text: 'Assuming you work 24/7, all year round, without any breaks or holidays, at a specific hourly wage.'
    },
    {
        title: '9-5, Monday-Friday',
        text: 'Assuming you work 9-5, Monday to Friday, with weekends off. Days are 8 hours long, weeks are 5 days ' +
            'long. This is a more realistic scenario.'
    },
    {
        text: 'In both cases, it does not take into account any taxes or other deductions that may apply to your ' +
            'income, or any other expenses you may have.'
    }
];
</script>

<style scoped>

</style>