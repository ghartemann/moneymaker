<template>
    <UCard>
        <div class="w-full flex gap-4 items-center">
            <UIcon :name="thing.icon" class="size-6"/>

            <USeparator orientation="vertical" class="h-12"/>

            <div class="w-full">
                <div>
                    <div class="flex justify-between items-baseline">
                        <div class="text-sm font-semibold select-none">
                            {{ thing.name }}
                        </div>

                        <div class="text-xs text-gray-500 select-none">
                            {{ useFormat().formatNumberNice(moneyMaker.things[thing.slug].owned) }} owned
                        </div>
                    </div>

                    <div class="flex justify-between items-baseline">
                        <div class="flex gap-1">
                            <div class="text-xs select-none">
                                {{ useFormat().formatNumber(thing.price) }}
                            </div>

                            <UTooltip
                                v-if="thing.source"
                                :delay-duration="0"
                                :ui="{content: 'h-full min-w-fit max-w-96'}"
                            >
                                <UIcon name="i-lucide-info" class="size-4"/>

                                <template #content>
                                    <div class="space-y-4">
                                        <div v-if="thing.source.text"
                                             v-html="thing.source.text"
                                             class="italic"
                                        ></div>

                                        <div class="text-gray-500">
                                            Source <span v-if="thing.source.date">({{ thing.source.date }})</span>:
                                            <a :href="thing.source.link" target="_blank" class="underline">
                                                {{ thing.source.name }}
                                            </a>
                                        </div>
                                    </div>
                                </template>
                            </UTooltip>
                        </div>

                        <UTooltip
                            :disabled="useFormat().formatHours(moneyMaker.things[thing.slug].timeItLlTake, true, true)[0] !== '~'"
                            :delay-duration="100"
                            :text="useFormat().formatHours(moneyMaker.things[thing.slug].timeItLlTake).join(' ')"
                        >
                            <div class="text-xs text-gray-500 select-none">
                                {{ useFormat().formatHours(moneyMaker.things[thing.slug].timeItLlTake, true, true).join(' ') }}
                            </div>
                        </UTooltip>
                    </div>
                </div>

                <UProgress
                    v-model="progressValue"
                    :max="thing.price"
                    class="mt-2"
                ></UProgress>

                <div class="text-xs text-center italic">
                    {{ timeLeft }}
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup>
import useFormat from "../composables/format.js";

const props = defineProps({
    thing: {
        type: Object,
        required: true
    },
    moneyMaker: {
        type: Object,
        required: true
    },
    selectedTimeTab: {
        type: String,
        required: true
    }
});

const progressValue = ref(0);
const timeLeft = ref('');

watch(() => props.moneyMaker.money, () => {
    progressValue.value = props.moneyMaker.money % props.thing.price;
});
</script>

<style scoped>

</style>