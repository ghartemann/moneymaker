<template>
    <UCard variant="soft" :ui="{body: '!p-4'}">
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
                            {{ useFormat().formatNumberNice(moneyMaker.things[thing.slug].owned) }}
                        </div>
                    </div>

                    <div class="flex justify-between items-baseline">
                        <div class="flex gap-1">
                            <div class="text-xs select-none">
                                {{ useFormat().formatPrice(thing.price) }}
                            </div>

                            <TooltipSources
                                v-if="thing.sources.length > 0"
                                :sources="thing.sources"
                            ></TooltipSources>
                        </div>

                        <UTooltip
                            v-model:open="tooltipTime"
                            :disabled="timeTruncated"
                            :delay-duration="100"
                            :text="useFormat().formatHours(timeItllTake).join(' ')"
                        >
                            <!-- cet homme emmerde ses collègues avec ça toute la sainte journée et pourtant quand il est seul...-->
                            <div @click="() => {if (!timeTruncated) tooltipTime = false}"
                                 class="text-xs text-gray-500 select-none"
                            >
                                {{ useFormat().formatHours(timeItllTake, true, true).join(' ') }}
                            </div>
                        </UTooltip>
                    </div>
                </div>

                <UProgress
                    v-model="progressValue"
                    :max="100"
                    class="mt-2"
                ></UProgress>

                <div class="text-xxs text-center italic text-gray-500">
                    {{ timeLeft }} remaining
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup>
import useFormat from "../../composables/useFormat.js";
import TooltipSources from "~/components/TooltipSources.vue";

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

const tooltipTime = ref(false);

const timeLeft = computed(() => {
    const moneyNeeded = props.thing.price - (props.moneyMaker.money % props.thing.price);
    let hoursLeft = moneyNeeded / props.moneyMaker.hourlyWage;
    
    if (props.selectedTimeTab === 'parttime') {
        // Calculate working days (8 hours per day)
        const workingDays = Math.floor(hoursLeft / 8);
        // Remaining working hours
        const remainingHours = hoursLeft % 8;
        
        // Convert working days to weeks (5 days per week)
        const weeks = Math.floor(workingDays / 5);
        // Remaining working days
        const remainingDays = workingDays % 5;
        
        // Convert to display hours
        hoursLeft = (weeks * 7 * 24) + (remainingDays * 24) + remainingHours;
    }

    return useFormat().formatHours(hoursLeft, true, true, true).join(' ');
});

const progressValue = computed(() => {
    const effectiveMoney = props.moneyMaker.money % props.thing.price;
    return (effectiveMoney / props.thing.price) * 100;
});

const timeItllTake = computed(() => {
    return props.selectedTimeTab === 'parttime' 
        ? props.moneyMaker.things[props.thing.slug].timeItLlTakePartTime
        : props.moneyMaker.things[props.thing.slug].timeItLlTake;
});

const timeTruncated = computed(() => {
    return useFormat().formatHours(timeItllTake.value, true, true)[0] !== '~';
});
</script>

<style scoped>
</style>
