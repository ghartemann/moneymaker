<template>
    <UModal
        v-model:open="model"
        title="About TrickleDown.js"
        close-icon="i-lucide-x"
    >
        <template #body>
            <div>
                <p>
                    The point of this app is to
                </p>
            </div>

            <div>
                <p>
                    This app was created in a few days using
                    <ULink to="https://nuxt.com/" target="_blank">Nuxt 3</ULink>
                    and
                    <ULink to="https://ui.nuxt.com/" target="_blank">Nuxt UI</ULink>.
                </p>

                <p>
                    It is open source and can be found on
                    <ULink to="https://github.com/ghartemann/moneymaker" target="_blank">Github</ULink>.
                    The app is not perfect and there are many things to improve. If you have any suggestions, feel
                    free to open an issue on Github.
                </p>
            </div>

            <div>
                <div class="font-bold text-lg mt-4 mb-2">Roadmap</div>

                <div class="flex flex-col space-y-2">
                    <div
                        v-for="(item, index) in roadmap"
                        :key="index"
                        class="flex items-center space-x-2"
                    >
                        <UIcon name="i-lucide-bookmark" class="text-gray-500 shrink-0 grow-0"></UIcon>
                        <div>
                            <div class="font-bold">{{ item.title }}</div>
                            <div v-if="item.description" class="text-xs text-gray-500">{{ item.description }}</div>
                        </div>
                    </div>
                </div>
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
        description: 'To make it easier to understand that buying an iPhone takes 5 days working 24/7 but a month working decent hours'
    },
    {
        title: 'Add more types',
        description: 'Representing more people and their jobs'
    },
    {
        title: 'Add more things to buy',
        description: 'But I\'ll eventually have to order them somehow'
    },
    {
        title: 'Code optimizations',
        description: 'This interval thing will probably break at some point — or it already has'
    },
];
</script>

<style scoped>

</style>