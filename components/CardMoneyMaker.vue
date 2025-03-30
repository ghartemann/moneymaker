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

        <div class="text-xs text-gray-500">
            {{ useFormat().formatNumber(moneyMaker.hourlyWage) }} per hour
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
            </div>

            <div class="space-y-2">
                <h2 class="text-center text-sm">
                    Time it'll take to buy one of these (and <span class="underline font-semibold">nothing</span> else)
                </h2>

                <div class="flex flex-col gap-2">
                    <card-thing
                        v-for="thing in thingsToBuy"
                        :key="thing.name"
                        :moneyMaker="moneyMaker"
                        :thing="thing"
                    ></card-thing>
                </div>
            </div>
        </template>
    </UCard>
</template>

<script setup>
import useFormat from "~/composables/format";
import CardThing from "~/components/CardThing.vue";
import things from "~/constants/things.js";

const thingsToBuy = ref(things);

defineProps({
    moneyMaker: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>

</style>