<script setup lang="ts">
import { type Product } from '@/types/Product';

interface Props {
    product: Product,
}

defineProps<Props>();
</script>

<template>
    <div class="product">
        <img :src="product.media.photoImages[0].mobile" :alt="product.name" class="product__image">
        <div v-if="product.price.discountRate > 0" class="product__discount">-{{ product.price.discountRate }}%</div>
        <div class="product__content">
            <div class="product__name">{{ product.name }}</div>
            <div class="product__price-wrapper">
                <div class="product__price product__price--new">{{ product.price.retail }} ₽</div>
                <div v-if="product.price.discountRate > 0" class="product__price product__price--old">{{ product.price.catalog }} ₽</div>
            </div>
            <button class="product__btn-basket">В корзину</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product {
    width: 300px;
    box-shadow: 0 0 10px  #80a8e2;
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
        height: 40px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #80a8e2;
        color: #ffffff;
        font-size: 16px;
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>