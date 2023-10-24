import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { type Product } from '@/types/Product';
import { type BasketItem } from '@/types/Basket';

export const useBasket = defineStore('basket', () => {
  const basket: Ref<BasketItem[]> = ref([]);

  function addItemToBasket(product: Product) {
    if (hasProductInBasket(product)) {
      incProductCount(product);
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

  function incProductCount(product: Product) {
    const item: BasketItem | undefined = findProductInBasket(product);
    if (!item) {
      return
    };
    item.count += 1;
  }

  function decProductCount(product: Product) {
    const item: BasketItem | undefined = findProductInBasket(product);
    if (!item) {
      return
    };
    if (item.count === 1) {
      removeItemFromBasket(product);
    } else {
      item.count -= 1;
    }
  }

  function hasProductInBasket(product: Product) {
    for (const item of basket.value) {
      if (item.id === product.productId) {
        return true;
      }
    }
    return false;
  }

  function findProductInBasket(product: Product) {
    const item: BasketItem | undefined = basket.value.find(item => item.id === product.productId);
    return item;
  }

  // const doubleCount = computed(() => count.value * 2)

  return { basket, addItemToBasket, removeItemFromBasket, incProductCount, decProductCount, hasProductInBasket }
})
