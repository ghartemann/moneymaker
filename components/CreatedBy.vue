<template>
    <div class="w-full text-center text-xs pb-4">
        <div>Version {{ version }}</div>
    <div>
        Created by
        <ULink to="https://ghartemann.fr" target="_blank">ghartemann</ULink>
        © 2025
    </div>
    </div>
</template>

<script setup>
const version = ref('unknown');

onMounted(async () => {
    try {
        const response = await fetch('/version.txt');
        if (response.ok) {
            version.value = await response.text();
        } else {
            console.error('Error fetching version:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching version:', error);
    }
});
</script>

<style scoped>

</style>