<template>
    <UModal
        v-model:open="model"
        :title="t('about.title')"
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
                        <p v-for="(paragraph, index) in tm('about.content.description')"
                           :key="index"
                           v-html="rt(paragraph)"
                           class="text-sm"
                        ></p>
                    </div>
                </UCard>

                <UCard
                    variant="soft"
                    class="md:order-3"
                >
                    <div class="space-y-4">
                        <p v-for="(paragraph, index) in tm('about.content.madeInFrance')"
                           :key="index"
                           v-html="rt(paragraph)"
                           class="text-sm"
                        ></p>
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
                            v-for="(item, index) in tm('about.content.roadmap')"
                            :key="index"
                        >
                            <div class="flex items-center gap-4">
                                <UIcon name="i-lucide-bookmark" class="size-6 text-gray-500 shrink-0 grow-0"></UIcon>

                                <USeparator orientation="vertical" class="h-12"/>

                                <div>
                                    <div class="font-bold mb-1">
                                        {{ rt(item.title) }}
                                    </div>

                                    <div v-if="item.description" class="text-xs text-gray-500">
                                        {{ rt(item.description) }}
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
const { t, rt, tm } = useI18n();

const model = defineModel({
    type: Boolean,
    default: false
});
</script>

<style scoped>

</style>
