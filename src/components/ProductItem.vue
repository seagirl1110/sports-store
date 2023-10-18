<script setup lang="ts">
import { type Product } from '@/types/Product';

interface Props {
    product: Product,
}

defineProps<Props>();
</script>

<template>
    <div class="product">
        <div class="product__name">{{ product.name }}</div>
    </div>
</template>