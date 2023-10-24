import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { type Product } from '@/types/Product';
import { type BasketItem } from '@/types/Basket';

export const useBasket = defineStore('basket', () => {
  const basket: Ref<BasketItem[]> = ref([]);

  function addItemToBasket(product: Product) {
    if (isHasProductInBasket(product)) {
      const currentProduct: BasketItem | undefined = basket.value.find(item => item.id === product.productId);
      if (!currentProduct) {
        return
      };
      currentProduct.count += 1;
    }
    else {
      const item = {
        product,
        id: product.productId,
        count: 1,
      }
      basket.value.push(item);
    }
  }

  function removeItemFromBasket(product: Product) {
    basket.value = basket.value.filter(item => item.product.productId !== product.productId);
  }

  function isHasProductInBasket(product: Product) {
    for (const item of basket.value) {
      if (item.id === product.productId) {
        return true;
      }
    }
    return false;
  }

  // const doubleCount = computed(() => count.value * 2)

  return { basket, addItemToBasket, removeItemFromBasket }
})
