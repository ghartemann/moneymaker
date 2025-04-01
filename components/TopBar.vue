<template>
    <UContainer class="flex justify-between py-4 ">
        <h1 class="text-center text-2xl font-bold hover:text-primary-500 select-none cursor-pointer transition-colors"
            @click="goToHome"
        >
            TrickleDown.js
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

        <UModal
            v-model:open="showAboutModal"
            title="About TrickleDown.js"
            close-icon="i-lucide-x"
        >
            <template #body>
                <div>
                    <p>
                        This app was created in a few days using <ULink to="https://ui.nuxt.com/" target="_blank">Nuxt UI</ULink> and <ULink to="https://nuxt.com/" target="_blank">Nuxt 3</ULink>.
                    </p>

                    <p>
                        It is open source and can be found on <ULink to="https://github.com/ghartemann/moneymaker" target="_blank">Github</ULink>.
                    </p>
                </div>
            </template>
        </UModal>
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
        {
            label: 'About',
            icon: 'i-lucide-circle-help',
            onSelect: showAbout
        },
    ]
});

const colorMode = useColorMode();
const showAboutModal = ref(false);

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
