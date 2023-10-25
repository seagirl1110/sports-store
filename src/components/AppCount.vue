<script setup lang="ts">
import AppButton from './AppButton.vue';

interface Props {
    count: number,
}

defineProps<Props>();

const decCount = () => emit('decCount');
const incCount = () => emit('incCount');

const emit = defineEmits<{
    (e: 'decCount'):void,
    (e: 'incCount'):void,
}>()
</script>

<template>
    <div class="count-wrapper">
        <AppButton @click="decCount" class="btn-count">-</AppButton>
        <div class="count">{{ count }}</div>
        <AppButton @click="incCount" class="btn-count">+</AppButton>
    </div>
</template>

<style scoped lang="scss">
.count-wrapper {
    display: flex;
    column-gap: 20px;
    align-items: center;
}

.btn-count {
    font-size: 20px;
    background-color: #e8e8e8;
}
</style>