<template>
    <div>
        <div class="mb-8">
            <h2 class="text-center text-2xl font-bold mt-8">
                Available wage types
            </h2>

            <div class="text-center text-xs text-gray-500">
                Click on the switch to display/hide a wage type
            </div>
        </div>

        <div v-if="moneyMakers.length === 0" class="text-center text-xs text-gray-500 mt-4">
            No available wage type
        </div>

        <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
            <card-wage
                v-for="moneyMaker in moneyMakers"
                :key="moneyMaker.name"
                v-model="selectedTimeTab"
                :money-maker="moneyMaker"
            ></card-wage>
        </div>
    </div>
</template>

<script setup>
import CardWage from "~/components/cards/CardWage.vue";

defineProps({
    moneyMakers: {
        type: Array,
        required: true
    }
});

const selectedTimeTab = defineModel();
</script>

<style scoped>

</style>