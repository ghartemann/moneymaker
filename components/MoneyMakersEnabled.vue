<template>
    <div ref="containerRef" class="overflow-x-auto smooth-scroll">
        <TransitionGroup
            tag="div"
            name="fade-down"
            class="grid pb-4 px-2 snap-x"
            :style="{ gridAutoFlow: 'column', gridAutoColumns: columnWidth }"
        >
            <div v-if="moneyMakers.length === 0">
                <NuxtPlaceholder class="w-96">
                    <div class="text-center text-xs text-gray-500">
                        Add at least one type
                    </div>

                    <div class="text-center text-xs text-gray-300">
                        or whatever
                    </div>
                </NuxtPlaceholder>
            </div>

            <div class="w-full p-2 snap-center"
                 v-for="moneyMaker in moneyMakers"
                 :key="moneyMaker.name"
            >
                <card-money-maker
                    v-model="selectedTimeTab"
                    :money-maker="moneyMaker"
                    :time-elapsed="timeElapsed"
                    :width="columnWidth"
                ></card-money-maker>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardMoneyMaker from "~/components/cards/CardMoneyMaker.vue";
import NuxtPlaceholder from "~/components/NuxtPlaceholder.vue";

const props = defineProps({
    moneyMakers: {
        type: Array,
        required: true
    },
    timeElapsed: {
        type: Number,
        required: true
    }
});

const selectedTimeTab = defineModel();
const containerRef = ref();

const width = ref(window.innerWidth)

const columnWidth = computed(() => {
    const w = width.value
    const count = props.moneyMakers.length || 1 // avoid division by 0

    if (w >= 1536 || w >= 1280) {
        // Default to 4 columns max
        const columns = Math.min(count, 4)
        return `${100 / columns}%`
    }

    if (w >= 1024) {
        const columns = Math.min(count, 3)
        return `${100 / columns}%`
    }

    if (w >= 768) {
        const columns = Math.min(count, 2)
        return `${100 / columns}%`
    }

    // On small screens, always 1 column
    return '100%'
});

onMounted(() => {
    window.addEventListener('resize', () => {
        width.value = window.innerWidth
    });

    setTimeout(() => {
        if (containerRef.value) {
            containerRef.value.scrollLeft = containerRef.value.scrollWidth;
        }
    }, 100);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
});
</script>

<style scoped>
.smooth-scroll {
    scroll-behavior: smooth;
}
</style>