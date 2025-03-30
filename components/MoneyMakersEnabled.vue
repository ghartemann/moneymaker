<template>
    <TransitionGroup tag="div" name="fade" class="grid grid-cols-3 gap-4">
<!--        <div class="grid grid-cols-3 gap-4">-->
            <card-money-maker
                v-for="moneyMaker in moneyMakers"
                :key="moneyMaker.name"
                v-model="moneyMaker.displayed"
                :money-maker="moneyMaker"
            ></card-money-maker>
<!--        </div>-->
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
</script>

<style scoped lang="scss">
.fade-move, /* apply transition to moving elements */
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.fade-leave-active {
    position: absolute;
}
</style>