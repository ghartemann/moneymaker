<template>
    <UContainer class="flex justify-between py-4 ">
        <h1 class="text-center text-2xl font-bold hover:text-primary-500 select-none cursor-pointer transition-colors"
            @click="goToHome"
        >
            TrickleDown.js
        </h1>

        <div class="space-x-2">
            <UDrawer>
                <UButton
                    icon="i-lucide-plus"
                    color="neutral"
                    variant="outline"
                    class="animate-pulse-nuxt"
                ></UButton>

                <template #body>
                    <UContainer class="mt-4 mb-8">
                        <WageTypesDisabled
                            v-model="selectedTimeTab"
                            :money-makers="moneyMakers.filter((mm) => !mm.displayed)"
                        ></WageTypesDisabled>
                    </UContainer>
                </template>
            </UDrawer>

            <UDropdownMenu
                :items="optionsItems"
                :content="{align: 'end', side: 'bottom'}"
                :ui="{content: 'w-48'}"
            >
                <UButton
                    icon="lucide-menu"
                    color="neutral"
                    variant="outline"
                ></UButton>
            </UDropdownMenu>
        </div>

        <AboutModal v-model="showAboutModal"></AboutModal>
    </UContainer>
</template>

<script setup>
import AboutModal from "~/components/modals/AboutModal.vue";
import WageTypesDisabled from "~/components/WageTypesDisabled.vue";

const router = useRouter();

const selectedTimeTab = defineModel();

const props = defineProps({
    moneyMakers: {
        type: Array,
        required: true
    }
});

const showAboutModal = ref(false);

const optionsItems = computed(() => {
    return [
        {
            label: 'Theme',
            icon: isDark.value ? 'lucide-moon' : 'lucide-sun',
            onSelect: toggleColorMode
        },
        {
            label: 'About',
            icon: 'lucide-circle-help',
            onSelect: showAbout
        },
    ]
});
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === 'dark';
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    }
});

function toggleColorMode() {
    isDark.value = !isDark.value;
}

function goToHome() {
    router.push({ name: 'home' });
}

function showAbout() {
    showAboutModal.value = true;
}
</script>

<style scoped>

</style>
