import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { type Product, type Size } from '@/types/Product';
import { type BasketItem } from '@/types/Basket';

export const useBasket = defineStore('basket', () => {
  const basket: Ref<BasketItem[]> = ref([]);

  function addItemToBasket(product: Product, size: Size): void {
    if (hasProductInBasket(product, size)) {
      incProductCount(product, size);
    } else {
      const item = {
        product,
        size,
        id: product.productId,
        sizeId: size.id,
        count: 1,
      }
      basket.value.push(item);
    }
  }

  function removeItemFromBasket(product: Product, size: Size): void {
    basket.value = basket.value.filter(item => item.id !== product.productId || (item.id === product.productId && item.sizeId !== size.id));
  }

  function incProductCount(product: Product, size: Size): void {
    const item: BasketItem | undefined = findProductInBasket(product, size);
    if (!item) {
      return
    };
    item.count += 1;
  }

  function decProductCount(product: Product, size: Size): void {
    const item: BasketItem | undefined = findProductInBasket(product, size);
    if (!item) {
      return
    };
    if (item.count === 1) {
      removeItemFromBasket(product, size);
    } else {
      item.count -= 1;
    }
  }

  function hasProductInBasket(product: Product, size: Size): boolean {
    for (const item of basket.value) {
      if (item.id === product.productId && item.sizeId === size.id) {
        return true;
      }
    }
    return false;
  }

  function findProductInBasket(product: Product, size: Size): BasketItem | undefined {
    const item: BasketItem | undefined = basket.value.find(item => item.id === product.productId && item.sizeId === size.id);
    return item;
  }

  return { basket, addItemToBasket, removeItemFromBasket, incProductCount, decProductCount, findProductInBasket }
})
