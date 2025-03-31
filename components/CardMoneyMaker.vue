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
                v-if="moneyMaker.source"
                :delay-duration="0"
                :ui="{content: 'h-full min-w-fit max-w-96'}"
            >
                <UIcon name="i-lucide-info" class="size-4"/>

                <template #content>
                    <div class="space-y-4">
                        <div v-if="moneyMaker.source.text"
                             v-html="moneyMaker.source.text"
                        ></div>

                        <div class="text-gray-500">
                            Source <span v-if="moneyMaker.source.date">({{ moneyMaker.source.date }})</span>:
                            <a :href="moneyMaker.source.link" target="_blank" class="underline">
                                {{ moneyMaker.source.name }}
                            </a>
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

<!--                <div class="text-xs text-gray-500">-->
<!--                    about {{ useFormat().formatHours(timeElapsed / 1000000).join(' ') }} ago-->
<!--                </div>-->
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
                        :thing="thing"
                        :selected-time-tab="selectedTimeTab"
                    ></card-thing>
                </div>
            </div>
        </template>
    </UCard>
</template>

<script setup>
import useFormat from "~/composables/format";
import CardThing from "~/components/CardThing.vue";
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
