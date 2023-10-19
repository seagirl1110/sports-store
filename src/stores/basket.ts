import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { type Product } from '@/types/Product';

export const useBasket = defineStore('basket', () => {
  const basket: Ref<Product[]> = ref([]);

  function addItemToBasket(product: Product) {
    basket.value.push(product);
  }

  function removeItemFromBasket(product: Product) {
    basket.value = basket.value.filter(item => item.productId !== product.productId);
  }
  // const doubleCount = computed(() => count.value * 2)

  return { basket, addItemToBasket, removeItemFromBasket }
})
