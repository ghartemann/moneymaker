<template>
    <UCard>
        <div class="flex justify-between items-center">
            <div>
                {{ moneyMaker.name }}
            </div>

            <USwitch
                v-model="moneyMaker.displayed"
            ></USwitch>
        </div>

        <div class="flex gap-1">
            <div class="text-xs text-gray-500">
                {{ useFormat().formatNumber(moneyMaker.hourlyWage) }} per hour
            </div>

            <UTooltip
                v-if="moneyMaker.sources.length > 0"
                :delay-duration="0"
                :ui="{content: 'h-full min-w-fit max-w-96'}"
            >
                <UIcon class="size-4" name="i-lucide-info"/>

                <template #content>
                    <div>
                        <div v-for="(source, index) in moneyMaker.sources"
                             :key="index"
                             class="space-y-2"
                        >
                            <div v-if="source.text"
                                 v-html="source.text"
                            ></div>

                            <div class="text-gray-500">
                                Source<span v-if="source.date"> ({{ source.date }})</span>:
                                <a :href="source.link" class="underline" target="_blank">
                                    {{ source.name }}
                                </a>
                            </div>

                            <USeparator v-if="index < moneyMaker.sources.length - 1" class="mt-4 mb-3"></USeparator>
                        </div>
                    </div>
                </template>
            </UTooltip>
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
                <h2 class="text-center text-xs">
                    Time it'll take to buy one of these (and <span class="underline font-semibold">nothing</span> else)
                </h2>

                <!--                <UTabs-->
                <!--                    v-model="selectedTimeTab"-->
                <!--                    :items="tabs"-->
                <!--                    class="w-full"-->
                <!--                    size="xs"-->
                <!--                    disabled-->
                <!--                ></UTabs>-->

                <div class="flex flex-col gap-2">
                    <card-thing
                        v-for="thing in thingsData"
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
import thingsData from "~/constants/thingsData.js";

defineProps({
    moneyMaker: {
        type: Object,
        required: true
    },
    timeElapsed: {
        type: Number
    }
});

const selectedTimeTab = defineModel();

const tabs = [
    {
        label: 'working 24/7',
        value: 'fulltime'
    },
    {
        label: 'working decent hours',
        value: 'parttime'
    }
];

watch(() => selectedTimeTab.value, () => {
    selectedTimeTab.value = 'fulltime';
});
</script>

<style scoped>

</style>
