<template>
    <TransitionGroup tag="div" name="fade" class="flex gap-4 overflow-x-auto p-[1px] pb-4 relative">
        <card-money-maker
            v-for="moneyMaker in moneyMakers"
            :key="moneyMaker.name"
            v-model="selectedTimeTab"
            :money-maker="moneyMaker"
            class="shrink-0"
            style="width: calc(33.3333% - calc(var(--spacing) * 4px) - (calc(2px / 3)))"
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