<template>
    <TransitionGroup tag="div" name="fade" class="grid grid-cols-3 gap-4">
        <card-money-maker
            v-for="moneyMaker in moneyMakers"
            :key="moneyMaker.name"
            v-model="selectedTimeTab"
            :money-maker="moneyMaker"
        ></card-money-maker>
    </TransitionGroup>
</template>

<script setup>
import CardMoneyMaker from "~/components/CardMoneyMaker.vue";

defineProps({
    moneyMakers: {
        type: Array,
        required: true
    }
});

const selectedTimeTab = defineModel();
</script>

<style scoped lang="scss">

</style>