<template>
    <UForm :validate="validate" :state="state">
        <UFormField>
            <UInput
                v-model="model"
                placeholder="Your wage"
                type="number"
                size="xs"
                variant="soft"
                icon="i-lucide-pen"
            ></UInput>
        </UFormField>
    </UForm>
</template>

<script setup>
import wagesData from "~/constants/wagesData";

const model = defineModel();

const state = reactive({
    model: undefined
});

const muskWage = computed(() => {
    return wagesData.find((w) => w.slug === 'nazi');
});

const validate = (state) => {
    const errors = [];

    if (state.email > muskWage.value) {
        errors.push({ name: 'email', message: 'Required' });
    }

    return errors;
}
</script>

<style scoped>

</style>