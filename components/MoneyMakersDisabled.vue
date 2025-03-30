<template>
    <div>
        <div class="mb-8">
            <h2 class="text-center text-2xl font-bold mt-8">
                Available money makers
            </h2>

            <div class="text-center text-xs text-gray-500">
                Click on the switch to display/hide a money maker
            </div>
        </div>

        <div v-if="moneyMakers.length === 0" class="text-center text-xs text-gray-500 mt-4">
            No available money maker
        </div>

        <div v-else class="grid grid-cols-3 gap-4">
            <card-money-maker
                v-for="moneyMaker in moneyMakers"
                :key="moneyMaker.name"
                v-model="moneyMaker.displayed"
                :money-maker="moneyMaker"
            ></card-money-maker>
        </div>
    </div>
</template>

<script setup>
import CardMoneyMaker from "~/components/CardMoneyMaker.vue";

defineProps({
    moneyMakers: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>

</style>