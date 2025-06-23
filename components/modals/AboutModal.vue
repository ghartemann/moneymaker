<template>
    <UModal
        v-model:open="model"
        title="About TrickleDown.js"
        close-icon="i-lucide-x"
        :ui="{content: 'max-w-6xl'}"
    >
        <template #body>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UCard
                    variant="soft"
                    class="md:order-1"
                >
                    <div class="space-y-4">
                        <p class="text-sm">
                            The purpose of this app is to show in a visual and engaging way the stark contrast in
                            purchasing power between the average person and the ultra-rich, such as, say, Elon Musk.
                            By comparing the time it takes for an average wage earner to afford everyday items to the
                            time it takes for a billionaire, the app highlights the vast economic disparities in our
                            society.
                        </p>

                        <p class="text-sm">
                            While the calculations may not always be precise, the demonstrations are designed to raise
                            important questions. Questions like,
                            <i>"How the fuck did these guys end up with so much money?"</i>,
                            <i>"Will I ever be able to buy a house in this market?"</i>
                            or even <i>"Who should I contact to buy a 65 m Yacht right now?"</i>.
                        </p>

                        <p class="text-sm">
                            Let's be clear: the goal is not to achieve perfect accuracy. One might — and undeniably will
                            — argue that comparing Musk's fortune to an average wage is misleading because his wealth is
                            tied to the value of his companies. While mostly true, this argument misses the point; the
                            crucial issue is that
                            <strong>
                                the ultra-wealthy have access to resources and opportunities that are orders of magnitude
                                greater than what the rest of us can ever hope to attain.
                            </strong>
                            This disparity should prompt us to question the fairness and sustainability of our economic
                            systems, if anything.
                        </p>

                        <p class="text-sm">
                            If any adjustments were to be made to the numbers in this app, they would likely reveal even
                            greater disparities, not lesser ones.
                        </p>
                    </div>
                </UCard>

                <UCard
                    variant="soft"
                    class="md:row-span-3 md:order-2"
                >
                    <div class="font-bold mb-2">
                        Roadmap
                    </div>

                    <div class="flex flex-col space-y-2">
                        <UCard
                            v-for="(item, index) in roadmap"
                            :key="index"
                        >
                            <div class="flex items-center gap-4">
                                <UIcon name="i-lucide-bookmark" class="size-6 text-gray-500 shrink-0 grow-0"></UIcon>

                                <USeparator orientation="vertical" class="h-12"/>

                                <div>
                                    <div class="font-bold mb-1">
                                        {{ item.title }}
                                    </div>

                                    <div v-if="item.description" class="text-xs text-gray-500">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </div>
                        </UCard>
                    </div>
                </UCard>

                <UCard
                    variant="soft"
                    class="md:order-4"
                >
                    <div class="space-y-4">
                        <p class="text-sm">
                            This app was made in 🇫🇷 France!
                        </p>

                        <p class="text-sm">
                            All this was created in a few days using <ULink to="https://nuxt.com/" target="_blank">Nuxt 3</ULink>,
                            <ULink to="https://ui.nuxt.com/" target="_blank">Nuxt UI</ULink> and
                            <ULink to="https://tailwindcss.com/" target="_blank">TailwindCSS</ULink>.
                            It is open source and can be found on
                            <ULink to="https://github.com/ghartemann/moneymaker" target="_blank">Github</ULink>.
                        </p>

                        <p class="text-sm">
                            It is not perfect and there are many things to improve. If you have any suggestions or
                            encounter any bugs, please feel free to
                            <ULink to="https://github.com/ghartemann/moneymaker/issues/new" target="_blank">
                                open an issue on the Github repository
                            </ULink>.
                        </p>
                    </div>
                </UCard>
            </div>
        </template>
    </UModal>
</template>

<script setup>
const model = defineModel({
    type: Boolean,
    default: false
});

const roadmap = [
    {
        title: 'Add more wages and things to buy',
        description: 'I\'ll eventually have to order them somehow'
    },
    {
        title: 'Add your own!',
        description: 'Minimalistic interface to create wages or things to buy, saved locally'
    },
    {
        title: 'Localization',
        description: 'At least support French idk???'
    },
    {
        title: 'New currencies',
        description: 'USD and CAD are on the menu'
    },
    {
        title: 'Code optimizations',
        description: 'Don\'t know which ones yet'
    }
];
</script>

<style scoped>

</style>
