<template>
    <div class="w-full text-center text-xs pb-4">
        <div>
            Version {{ version }}
        </div>

        <div>
            {{ t('footer.madeBy') }}
            <ULink to="https://ghartemann.fr" target="_blank">ghartemann</ULink>
            © 2025
        </div>
    </div>
</template>

<script setup>
import v from "~/version.json";

const { t } = useI18n();

const version = ref(v.version);
</script>

<style scoped>

</style>