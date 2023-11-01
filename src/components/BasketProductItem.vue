<script setup lang="ts">
import { type BasketItem } from '@/types/Basket';
import AppButton from './AppButton.vue';
import AppCount from './AppCount.vue';
import { useBasket } from '@/stores/basket';

const { removeItemFromBasket, decProductCount, incProductCount } = useBasket();

interface Props {
    item: BasketItem,
}

defineProps<Props>();
</script>

<template>
    <div class="product">
        <img :src="item.product.media.photoImages[0].mobile" :alt="item.product.name" class="product__image">
        <div v-if="item.product.price.discountRate > 0" class="product__discount">-{{ item.product.price.discountRate }}%
        </div>
        <div class="product__content">
            <div class="product__name">{{ item.product.name }}</div>
            <div class="product__size">Размер: {{ item.size.sizeEur }}</div>
            <div class="product__price-wrapper">
                <div class="product__price product__price--new">{{ item.product.price.retail * item.count }} ₽</div>
                <div v-if="item.product.price.discountRate > 0" class="product__price product__price--old">{{
                    item.product.price.catalog * item.count }} ₽</div>
                <div v-if="item.product.price.discountAmount > 0" class="product__discount-amount">Выгода: {{
                    item.product.price.discountAmount * item.count }} ₽</div>
            </div>
            <div class="product__count-wrapper">
                <AppCount :count="item.count" @dec-count="decProductCount(item.product, item.size)" @inc-count="incProductCount(item.product, item.size)"/>
                <div v-show="item.count > 1" class="product__price--count">{{ item.product.price.retail }} ₽/шт.</div>
            </div>
            <AppButton @click="removeItemFromBasket(item.product, item.size)" class="product__btn-del">
                <svg id="line_icons" viewBox="0 0 74 74" xmlns="http://www.w3.org/2000/svg" data-name="line icons">
                    <path
                        d="m61.909 23.754h-49.818a3.368 3.368 0 0 1 -3.365-3.365v-6.676a3.369 3.369 0 0 1 3.365-3.366h49.818a3.369 3.369 0 0 1 3.365 3.366v6.676a3.368 3.368 0 0 1 -3.365 3.365zm-49.818-11.407a1.367 1.367 0 0 0 -1.365 1.366v6.676a1.366 1.366 0 0 0 1.365 1.365h49.818a1.366 1.366 0 0 0 1.365-1.365v-6.676a1.367 1.367 0 0 0 -1.365-1.366z" />
                    <path
                        d="m53.589 72h-33.178a4.4 4.4 0 0 1 -4.373-4.085l-3-45.094a1 1 0 0 1 1-1.067h45.93a1 1 0 0 1 1 1.067l-3 45.092a4.4 4.4 0 0 1 -4.379 4.087zm-38.489-48.246 2.933 44.026a2.39 2.39 0 0 0 2.378 2.22h33.178a2.39 2.39 0 0 0 2.378-2.221l2.933-44.025z" />
                    <path
                        d="m26.613 65.952a2.629 2.629 0 0 1 -2.613-2.472l-1.677-32.832a2.852 2.852 0 1 1 5.7-.268l1.225 32.837a2.628 2.628 0 0 1 -2.633 2.734zm-1.442-36.32a.855.855 0 0 0 -.852.9l1.672 32.838a.63.63 0 0 0 1.084.387.624.624 0 0 0 .173-.461l-1.226-32.84a.852.852 0 0 0 -.851-.824z" />
                    <path
                        d="m37 65.952a2.642 2.642 0 0 1 -2.633-2.594l-.23-32.843a2.863 2.863 0 1 1 5.726-.007v.007l-.23 32.836a2.643 2.643 0 0 1 -2.633 2.601zm0-36.32a.87.87 0 0 0 -.863.876l.23 32.829a.633.633 0 0 0 1.266-.007l.23-32.825a.87.87 0 0 0 -.863-.873z" />
                    <path
                        d="m47.387 65.952a2.637 2.637 0 0 1 -2.634-2.634c0-.012 0-.088 0-.1l1.225-32.837a2.852 2.852 0 1 1 5.7.272l-1.672 32.818a2.632 2.632 0 0 1 -2.619 2.481zm1.442-36.32a.852.852 0 0 0 -.851.825l-1.225 32.835a.629.629 0 0 0 1.256.068l1.671-32.814v-.009a.855.855 0 0 0 -.852-.9z" />
                    <path
                        d="m47.314 12.347h-20.628a1 1 0 0 1 -1-1v-3.647a4.7 4.7 0 0 1 4.695-4.7h13.238a4.7 4.7 0 0 1 4.7 4.7v3.652a1 1 0 0 1 -1.005.995zm-19.628-2h18.628v-2.647a2.7 2.7 0 0 0 -2.695-2.7h-13.238a2.7 2.7 0 0 0 -2.695 2.7z" />
                </svg>
            </AppButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product {
    width: 300px;
    position: relative;
    display: flex;
    column-gap: 10px;
    border-bottom: 1px solid #80a8e2;
    padding-bottom: 20px;

    // .product__image

    &__image {
        width: 100px;
        height: 100%;
    }

    // .product__discount

    &__discount {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 40px;
        height: 20px;
        color: #ffffff;
        background-color: #f44336;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
    }

    // .product__content

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        row-gap: 10px;
    }

    // .product__name

    &__name {
        text-align: end;
    }

    // .product__size

    &__size {
        color: #036ecb;
    }

    // .product__count-wrapper

    &__count-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        align-items: center;
    }

    // .product__price-wrapper

    &__price-wrapper {
        display: flex;
        flex-wrap: wrap;
        column-gap: 15px;
        justify-content: end;
        row-gap: 5px;
    }

    // .product__price

    &__price {

        // .product__price--new

        &--new {
            color: #0c3d81;
            font-weight: 700;
        }

        // .product__price--old

        &--old {
            color: #797979;
            text-decoration: line-through;
            text-decoration-color: #f44336;
            text-decoration-thickness: 2px;
        }

        // .product__price--count

        &--count {
            font-size: 14px;
        }
    }

    // .product__discount-amount

    &__discount-amount {
        font-size: 14px;
        font-weight: 700;
        color: #258444;
    }

    // .product__btn-del

    &__btn-del {
        padding: 2px;
    }
}
</style>