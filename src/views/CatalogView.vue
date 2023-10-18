<script setup lang="ts">
import { data } from './../api/getData';
import ProductItem from '@/components/ProductItem.vue';

</script>

<template>
    <main>
        <div class="center-wrapper">
            <h1 class="page-title">Каталог</h1>
            <div class="catalog">
                <ProductItem v-for="product in data" :key="product.productId" :product="product"></ProductItem>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.catalog {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 20px;
    justify-content: center;
    margin: 20px 0;

    @media screen and (min-width: 1024px) {
        gap: 40px 30px;
    }
}
</style>