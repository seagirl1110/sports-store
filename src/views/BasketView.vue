<script setup lang="ts">
import BasketProductItem from '@/components/BasketProductItem.vue';
import { useBasket } from '@/stores/basket';

const store = useBasket();

</script>

<template>
  <main>
    <div class="center-wrapper">
      <h1 class="page-title">Корзина</h1>
      <div class="basket">
        <BasketProductItem v-for="item in store.basket" :key="item.product.productId" :item="item"></BasketProductItem>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.basket {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: 20px 0;
}
</style>

