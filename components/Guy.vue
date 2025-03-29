<template>
    <div class="bg-white p-4 rounded-2xl shadow-lg space-y-8">
        <div class="flex justify-between items-center">
            <div>
                {{ guy.name }}
            </div>

            <div class="text-xs text-gray-500">
                 {{ useFormat().formatNumber(guy.moneyAnHour) }} per hour
            </div>
        </div>

        <div class="text-center">
            <div class="text-xs">
                Made
            </div>

            <div class="text-3xl font-bold">
                {{ useFormat().formatNumber(guy.money) }}
            </div>

            <div class="text-xs">
                since this page was loaded
            </div>
        </div>

        <div class="space-y-2">
            <h2 class="text-center text-sm">
                Time it'll take to buy one of these (and <span class="underline font-semibold">nothing</span> else)
            </h2>

            <div class="flex flex-col gap-2">
                <thing
                    v-for="thing in thingsToBuy"
                    :key="thing.name"
                    :guy="guy"
                    :thing="thing"
                ></thing>
            </div>
        </div>
    </div>
</template>

<script setup>
import useFormat from "~/composables/format";
import Thing from "~/components/Thing.vue";

defineProps({
    guy: {
        type: Object,
        required: true
    },
    thingsToBuy: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>

</style>