<template>
    <div class="flex justify-between py-4 ">
        <h1 class="text-center text-2xl font-bold hover:text-primary-500 select-none cursor-pointer transition-colors" @click="goToHome">
            MoneyMakers
        </h1>

        <div>
            <UDropdownMenu
                :items="dropDownItems"
                :content="{align: 'end', side: 'bottom'}"
                :ui="{content: 'w-48'}"
            >
                <UButton
                    icon="i-lucide-menu"
                    color="neutral"
                    variant="outline"
                ></UButton>
            </UDropdownMenu>
        </div>
    </div>
</template>

<script setup>
const router = useRouter();

const dropDownItems = computed(() => {
    return [
        {
            label: 'Theme',
            icon: isDark.value ? 'i-lucide-moon' : 'i-lucide-sun',
            onSelect: toggleColorMode
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
    router.push({name: 'home'});
}
</script>

<style scoped>

</style>
