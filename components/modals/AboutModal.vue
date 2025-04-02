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
                            The point of this app is to show in a fun, visual way, how long it would take you to buy things.
                            And to compare that time to, say, <i>how long it would take Elon Musk or whoever rich folk to buy the same thing</i>.
                        </p>

                        <p class="text-sm">
                            While not always accurate, this demonstration usually leads to important questions like <i>"How
                            the fuck can these guys have this much money?"</i>, <i>"Will I ever be able to buy a house?"</i>
                            or even <i>"Who should I contact to buy a 65 m Yacht right now?"</i>.
                        </p>

                        <p class="text-sm">
                            Let me get this straight: the point is definitely not to be perfectly accurate. The arguments
                            saying that Musk's indecent fortune shouldn't be compared to a wage, that only tethered to the
                            value of his companies or whatever, <u>are misleading and empty</u>. What matters is that these people
                            have access to infinitely more than the rest of us, and that we will never, ever catch up.
                        </p>

                        <p class="text-sm">
                            If the numbers in this app were to be balanced, it would be up not down.
                        </p>
                    </div>
                </UCard>

                <UCard
                    variant="soft"
                    class="md:order-3"
                >
                    <div class="space-y-4">
                        <p class="text-sm">
                            This app was made in 🇫🇷 France!
                        </p>

                        <p class="text-sm">
                            Hence the very <i>french</i> context, wage types, currency and so on.
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
                            All this was created in a few days using
                            <ULink to="https://nuxt.com/" target="_blank">Nuxt 3</ULink>,
                            <ULink to="https://ui.nuxt.com/" target="_blank">Nuxt UI</ULink> and
                            <ULink to="https://tailwindcss.com/" target="_blank">TailwindCSS</ULink>.
                            It is open source and can be found on
                            <ULink to="https://github.com/ghartemann/moneymaker" target="_blank">Github</ULink>.
                        </p>

                        <p class="text-sm">
                            It is not perfect and there are many things to improve. If you have any suggestions or encounter any bugs, please
                            feel free to <ULink to="https://github.com/ghartemann/moneymaker/issues/new" target="_blank">open an issue on the Github repository</ULink>.
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
        title: 'Add a toggle [ 24/7 / 8 hours a day ]',
        description: 'Buying an iPhone sure takes 5 days working 24/7, but it takes a month working decent hours'
    },
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
        description: 'This interval thing will probably break at some point — or it already has... ?'
    }
];
</script>

<style scoped>

</style>
