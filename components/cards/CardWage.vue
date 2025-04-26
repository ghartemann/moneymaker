<template>
    <UCard class="!w-96">
        <div class="flex justify-between items-center">
            <div>
                {{ t(`wages.${moneyMaker.slug}.name`) }}
                <span v-if="moneyMaker.subName" class="text-xs text-gray-500"> {{ t(`wages.${moneyMaker.slug}.subName`) }}</span>
            </div>

            <USwitch
                v-model="moneyMaker.displayed"
            ></USwitch>
        </div>

        <div class="flex gap-1">
            <div class="text-xs text-gray-500">
<!--                {{ n(moneyMaker.hourlyWage, 'currency') }}-->
                {{ t('cardWage.perHour') }}
            </div>

            <TooltipSources
                v-if="moneyMaker.sources.length > 0"
                :sources="moneyMaker.sources"
            ></TooltipSources>
        </div>

        <template v-if="moneyMaker.displayed">
            <div class="text-center my-6">
                <div class="text-xs">
                    {{ t('cardWage.made') }}
                </div>

                <div class="text-3xl font-bold">
                    {{ useFormat().formatNumber(moneyMaker.money) }}
                </div>

                <div class="text-xs">
                    {{ t('cardWage.sinceLoaded') }}
                </div>

                <div class="text-xs text-gray-500">
                    {{ t('cardWage.aboutAgo', { time: useFormat().formatHours(timeElapsed / 60 / 60, true).join(' ')}) }}
                </div>
            </div>

            <div class="space-y-2">
                <h2 class="text-center text-xs">
                    Time it'll take to buy one of these (and <span class="underline font-semibold">nothing</span> else)
                </h2>

                <UTooltip
                    v-model:open="tooltipDisabled"
                    :delay-duration="0"
                    :ui="{content: 'h-full min-w-fit max-w-96'}"
                >
                    <UTabs
                        @click="tooltipDisabled = true"
                        v-model="selectedTimeTab"
                        :items="tabs"
                        class="w-full opacity-40"
                        size="xs"
                        disabled
                    ></UTabs>

                    <template #content>
                        Disabled for now, sorry!
                    </template>
                </UTooltip>

                <div class="flex flex-col gap-2">
                    <card-thing
                        v-for="thing in thingsData"
                        :key="thing.slug"
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
import TooltipSources from "~/components/TooltipSources.vue";
import thingsData from "~/constants/thingsData.js";

const { t, n } = useI18n(
    // {numberFormats: {
    //     en: {
    //         currency: {
    //             style: 'currency',
    //             currency: 'USD',
    //             currencyDisplay: 'symbol'
    //         }
    //     },
    //     fr: {
    //         currency: {
    //             style: 'currency',
    //             currency: 'EUR',
    //             currencyDisplay: 'symbol'
    //         }
    //     }
    // }}
);

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
        label: 'working 24/7',
        value: 'fulltime'
    },
    {
        label: 'working decent hours',
        value: 'parttime'
    }
];

// TODO: debug
watch(() => selectedTimeTab.value, () => {
    selectedTimeTab.value = 'fulltime';
});
</script>

<style scoped>

</style>
