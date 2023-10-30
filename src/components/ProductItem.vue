<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import AppButton from './AppButton.vue';
import AppCount from './AppCount.vue';
import { type Product } from '@/types/Product';
import { type BasketItem } from '@/types/Basket';
import { useBasket } from '@/stores/basket';

const { addItemToBasket, incProductCount, decProductCount, findProductInBasket } = useBasket();

interface Props {
    product: Product,
}

const props = defineProps<Props>();
const basketItem: ComputedRef<BasketItem | undefined> = computed(() => findProductInBasket(props.product));
</script>

<template>
    <div class="product">
        <img :src="product.media.photoImages[0].mobile" :alt="product.name" class="product__image">
        <div v-if="product.price.discountRate > 0" class="product__discount">-{{ product.price.discountRate }}%</div>
        <div class="product__content">
            <div class="product__name">{{ product.name }}</div>
            <div class="product__price-wrapper">
                <div class="product__price product__price--new">{{ product.price.retail }} ₽</div>
                <div v-if="product.price.discountRate > 0" class="product__price product__price--old">{{
                    product.price.catalog }} ₽</div>
            </div>
            <div v-if="basketItem" class="product__status-wrapper">
                <AppCount :count="basketItem.count" @dec-count="decProductCount(product)"
                    @inc-count="incProductCount(product)" />
                <div class="product__status">Товар добавлен в корзину</div>
            </div>
            <AppButton v-else @click="addItemToBasket(product)" class="product__btn-basket">В корзину</AppButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product {
    width: 300px;
    box-shadow: 0 0 10px #80a8e2;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;

    &:hover {
        box-shadow: 0 0 15px #587bac;
    }

    // .product__image

    &__image {
        width: 100%;
        border-radius: 10px 10px 0 0;
        border-bottom: 1px solid #80a8e2;
    }

    // .product__discount

    &__discount {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        color: #ffffff;
        background-color: #f44336;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // .product__content

    &__content {
        padding: 15px 10px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        flex-grow: 1;
    }

    // .product__name

    &__name {
        font-size: 18px;
    }

    // .product__price-wrapper

    &__price-wrapper {
        display: flex;
        column-gap: 20px;
    }

    // .product__price

    &__price {
        font-size: 18px;

        // .product__price--new

        &--new {
            color: #0667f3;
            font-weight: 700;
        }

        // .product__price--old

        &--old {
            color: #797979;
            text-decoration: line-through;
            text-decoration-color: #f44336;
            text-decoration-thickness: 2px;
        }
    }

    // .product__btn-basket

    &__btn-basket {
        width: 100%;
        height: 40px;
        background-color: #80a8e2;
        color: #ffffff;
        margin-top: auto;
    }

    // .product__status-wrapper

    &__status-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        align-items: center;
    }

    // .product__status

    &__status {
        width: 100%;
        height: 40px;
        background-color: #80a8e2;
        color: #ffffff;
        margin-top: auto;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>