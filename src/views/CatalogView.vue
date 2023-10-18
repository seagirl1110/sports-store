<script setup lang="ts">
import { data } from './../api/getData';
import ProductItem from '@/components/ProductItem.vue';

</script>

<template>
    <main>
        <div class="center-wrapper">
            <h1>Каталог</h1>
            <div class="catalog">
                <ProductItem v-for="product in data" :key="product.productId" :product="product"></ProductItem>
            </div>
        </div>
    </main>
</template>