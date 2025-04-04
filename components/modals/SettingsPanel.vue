<template>
    <USlideover v-model:open="model" title="Settings">
        <template #body>
            <div class="h-full m-4">

            </div>
        </template>
    </USlideover>
</template>

<script setup>
const model = defineModel({
    type: Boolean,
    default: false
});
</script>

<style scoped>

</style>