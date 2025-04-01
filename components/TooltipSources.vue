<template>
    <UTooltip
        v-model:open="model"
        :delay-duration="0"
        :ui="{content: 'h-full min-w-fit max-w-96'}"
    >
        <UIcon
            class="size-4"
            name="i-lucide-info"
            @click="model = true"
        ></UIcon>

        <template #content>
            <div>
                <div v-for="(source, index) in sources"
                     :key="index"
                     class="space-y-2"
                >
                    <div v-if="source.text"
                         v-html="source.text"
                    ></div>

                    <div v-if="source.link" class="text-gray-500">
                        Source<span v-if="source.date"> ({{ source.date }})</span>:
                        <ULink :to="source.link" class="underline" target="_blank">
                            {{ source.name }}
                        </ULink>
                    </div>

                    <USeparator v-if="index < sources.length - 1" class="mt-4 mb-3"></USeparator>
                </div>
            </div>
        </template>
    </UTooltip>
</template>

<script setup>
const model = defineModel({
    type: Boolean,
    default: false
});

defineProps({
    sources: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>

</style>