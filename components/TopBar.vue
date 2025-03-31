<template>
    <UContainer class="flex justify-between py-4 ">
        <h1 class="text-center text-2xl font-bold hover:text-primary-500 select-none cursor-pointer transition-colors"
            @click="goToHome"
        >
            MoneyMakers
        </h1>

        <div class="space-x-2">
<!--            <UModal>-->
<!--                <UButton-->
<!--                    icon="i-lucide-plus"-->
<!--                    color="neutral"-->
<!--                    variant="outline"-->
<!--                ></UButton>-->

<!--                <template #content>-->
<!--                    <div class="p-4 space-y-2">-->
<!--                        <div class="text-center text-lg font-bold">-->
<!--                            Add a money maker-->
<!--                        </div>-->

<!--                        <div class="text-center text-xs text-gray-500">-->
<!--                            Add a money maker to the list-->
<!--                        </div>-->

<!--                        <div>-->
<!--                            <UInput-->
<!--                                placeholder="Name"-->
<!--                            ></UInput>-->

<!--                            <UInput-->
<!--                                placeholder="Hourly wage"-->
<!--                            ></UInput>-->

<!--                            <UButton-->
<!--                                color="primary"-->
<!--                                variant="solid"-->
<!--                            >-->
<!--                                Add-->
<!--                            </UButton>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </template>-->
<!--            </UModal>-->

            <UDropdownMenu
                :items="optionsItems"
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
    </UContainer>
</template>

<script setup>
const router = useRouter();

const optionsItems = computed(() => {
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
    router.push({ name: 'home' });
}
</script>

<style scoped>

</style>
