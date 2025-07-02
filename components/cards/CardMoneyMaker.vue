<template>
    <UCard :ui="{body: '!w-96'}">
        <div class="relative">
            <!-- the name of the money maker, used to detect if scrolled -->
            <div ref="nameRef" class="h-0"></div>

            <!-- the first one that disappears when scrolled-->
            <wage-infos
                v-model="selectedTimeTab"
                :money-maker="moneyMaker"
                :time-elapsed="timeElapsed"
                :class="[{'opacity-0': isScrolled}]"
            ></wage-infos>

            <!-- the second one that appears when scrolled-->
            <wage-infos
                v-model="selectedTimeTab"
                :money-maker="moneyMaker"
                :time-elapsed="timeElapsed"
                :class="[{'fixed top-0 w-96 -mx-6 shadow-lg backdrop-blur-lg px-6 py-4 rounded-t-lg z-50': isScrolled, 'hidden': !isScrolled}]"
            ></wage-infos>
        </div>

        <div v-if="moneyMaker.displayed"
             class="flex flex-col gap-2 mt-4"
        >
            <card-thing
                v-for="thing in things"
                :key="thing.name"
                :money-maker="moneyMaker"
                :selected-time-tab="selectedTimeTab"
                :thing="thing"
            ></card-thing>
        </div>
    </UCard>
</template>

<script setup>
import CardThing from "~/components/cards/CardThing.vue";
import useThings from "~/composables/useThings.js";
import WageInfos from "~/components/WageInfos.vue";

const props = defineProps({
    moneyMaker: {
        type: Object,
        required: true
    },
    timeElapsed: {
        type: Number
    }
});

const selectedTimeTab = defineModel({
    type: String,
    default: 'fulltime'
});

const things = useThings().getThings();

const nameRef = ref(null);
const isScrolled = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            if (!props.moneyMaker.displayed) {
                return;
            }

            isScrolled.value = !entries[0].isIntersecting;
        },
        { threshold: 0 }
    );

    if (nameRef.value) {
        observer.observe(nameRef.value);
    }
});
</script>

<style scoped>

</style>
