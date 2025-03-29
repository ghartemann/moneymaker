<template>
    <div class="p-4 flex gap-4 items-center rounded-xl border border-gray-200">
        <div class="w-8">
            <font-awesome :icon="thing.icon" class="text-gray-400" size="lg"/>
        </div>

        <div class="w-full">
            <div class="flex justify-between items-center">
                <div>
                    <div class="text-sm font-semibold">
                        {{ thing.name }}
                    </div>

                    <div class="text-sm">
                        {{ useFormat().formatNumber(thing.price) }}
                    </div>
                </div>

                <!--                <div class="text-xs text-gray-500">-->
                <!--                    {{ guy.things[thing.slug].owned }} owned-->
                <!--                </div>-->
            </div>

            <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-2"
                 role="progressbar"
                 :aria-valuenow="guy.money % thing.price"
                 aria-valuemin="0"
                 :aria-valuemax="thing.price"
            >
                <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                     :style="'width:' + (guy.money % thing.price / thing.price * 100) + '%'"
                ></div>
            </div>

            <div class="text-xs text-center italic">
                {{ useFormat().formatHours(guy.things[thing.slug].timeItLlTake) }}
            </div>
        </div>
    </div>
</template>

<script setup>

import useFormat from "../composables/format.js";

defineProps({
    thing: {
        type: Object,
        required: true
    },
    guy: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>

</style>