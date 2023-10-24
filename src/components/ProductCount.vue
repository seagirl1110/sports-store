<script setup lang="ts">
import AppButton from './AppButton.vue';
import { type BasketItem } from '@/types/Basket';
import { useBasket } from '@/stores/basket';

const { incProductCount, decProductCount } = useBasket();

interface Props {
    item: BasketItem,
}

defineProps<Props>();
</script>

<template>
    <div class="count-wrapper">
        <AppButton @click="decProductCount(item.product)" class="btn-count">-</AppButton>
        <div class="count">{{ item.count }}</div>
        <AppButton @click="incProductCount(item.product)" class="btn-count">+</AppButton>
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