<template>
    <UCard :ui="{body: '!w-96'}">
        <div class="flex justify-between items-center">
            <div>
                {{ moneyMaker.name }}
                <span v-if="moneyMaker.subName" class="text-xs text-gray-500"> {{ moneyMaker.subName }}</span>
            </div>

            <USwitch v-model="moneyMaker.displayed"></USwitch>
        </div>

        <div class="flex gap-1">
            <div class="text-xs text-gray-500">
                {{ useFormat().formatNumber(moneyMaker.hourlyWage) }} per hour
            </div>

            <TooltipSources
                v-if="moneyMaker.sources.length > 0"
                :sources="moneyMaker.sources"
            ></TooltipSources>
        </div>

        <template v-if="moneyMaker.displayed">
            <div class="text-center my-6">
                <div class="text-xs">
                    Made
                </div>

                <div class="text-3xl font-bold">
                    {{ useFormat().formatNumber(moneyMaker.money) }}
                </div>

                <div class="text-xs">
                    since this page was loaded
                </div>

                <div class="text-xs text-gray-500">
                    about {{ useFormat().formatHours(timeElapsed / 60 / 60, true).join(' ') }} ago
                </div>
            </div>

            <div class="space-y-2">
                <h2 class="text-center text-xs text-balance">
                    Time it'll take to buy one of these (and <span class="underline font-semibold">nothing</span> else), working:
                </h2>

                <UTabs
                    v-model="selectedTimeTab"
                    :items="tabs"
                    class="w-full"
                    size="xs"
                ></UTabs>

                <div class="flex flex-col gap-2">
                    <card-thing
                        v-for="thing in thingsData.sort((a, b) => a.price - b.price)"
                        :key="thing.name"
                        :money-maker="moneyMaker"
                        :selected-time-tab="selectedTimeTab"
                        :thing="thing"
                    ></card-thing>
                </div>
            </div>
        </template>
    </UCard>
</template>

<script setup>
import useFormat from "~/composables/format.js";
import CardThing from "~/components/cards/CardThing.vue";
import thingsData from "~/constants/thingsData.ts";
import TooltipSources from "~/components/TooltipSources.vue";

defineProps({
    moneyMaker: {
        type: Object,
        required: true
    },
    timeElapsed: {
        type: Number
    }
});

const tooltipDisabled = ref(false);

const selectedTimeTab = defineModel();

const tabs = [
    {
        label: '24/7, all the time',
        value: 'fulltime'
    },
    {
        label: 'Monday-Friday, 9-17',
        value: 'parttime'
    }
];
</script>

<style scoped>

</style>
