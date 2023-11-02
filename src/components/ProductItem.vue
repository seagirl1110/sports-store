<script setup lang="ts">
import { ref, type Ref, computed, type ComputedRef } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import AppButton from './AppButton.vue';
import AppCount from './AppCount.vue';
import { type Product, type Size } from '@/types/Product';
import { type BasketItem } from '@/types/Basket';
import { useBasket } from '@/stores/basket';

const { addItemToBasket, incProductCount, decProductCount, findProductInBasket } = useBasket();

interface Props {
    product: Product,
}

const props = defineProps<Props>();

const sizeSelect: Ref<Size | null> = ref(null);
const setSize = (size: Size): void => {
    sizeSelect.value = size;
}

const basketItem: ComputedRef<BasketItem | undefined> = computed(() => {
    if (!sizeSelect.value) {
        return undefined;
    }
    return findProductInBasket(props.product, sizeSelect.value)
});
</script>

<template>
    <div class="product">
        <carousel :items-to-show="1">
            <slide v-for="image in product.media.photoImages" :key="image.mobile">
                <img :src="image.mobile" :alt="product.name" class="product__image">
            </slide>
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
        <div v-if="product.price.discountRate > 0" class="product__discount">-{{ product.price.discountRate }}%</div>
        <div class="product__content">
            <div class="product__name">{{ product.name }}</div>
            <div class="product__price-wrapper">
                <div class="product__price product__price--new">{{ product.price.retail }} ₽</div>
                <div v-if="product.price.discountRate > 0" class="product__price product__price--old">{{
                    product.price.catalog }} ₽</div>
            </div>
            <div class="product__size-wrapper">
                <div>Выберите размер:</div>
                <div class="product__sizes">
                    <AppButton v-for="size in product.sizes" :key="size.id" @click="setSize(size)" class="product__size"
                        :class="{ 'product__size--active': size.id === sizeSelect?.id }">
                        {{ size.sizeEur }}
                    </AppButton>
                </div>
                <!-- <div class="product__size-table">
                    <AppButton @click="showSizeTable">Таблица размеров</AppButton>
                    <div v-for="size in product.sizes" :key="size.id" class="product__size-info">
                        <span>{{ size.sizeEur }}</span>
                        <span>{{ size.lengthSm }} см</span>
                    </div>
                </div> -->
            </div>
            <div v-if="basketItem && sizeSelect" class="product__status-wrapper">
                <AppCount :count="basketItem.count" @dec-count="decProductCount(product, sizeSelect)"
                    @inc-count="incProductCount(product, sizeSelect)" />
                <div class="product__status">Товар добавлен в корзину</div>
            </div>
            <AppButton v-if="!basketItem && sizeSelect" @click="addItemToBasket(product, sizeSelect)"
                class="product__btn-basket">В корзину</AppButton>
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

    // .product:hover

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

    // .product__size-wrapper

    &__size-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        margin-top: auto;
    }

    // .product__sizes

    &__sizes {
        display: flex;
        flex-wrap: wrap;
        gap: 5px 10px;
    }

    // .product__size

    &__size {
        width: 45px;
        height: 30px;
        border: 1px solid #80a8e2;

        // .product__size--active

        &--active {
            color: #ffffff;
            background-color: #80a8e2;
        }
    }

    // .product__btn-basket

    &__btn-basket {
        width: 100%;
        height: 40px;
        background-color: #80a8e2;
        color: #ffffff;
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

.product:deep(.carousel__viewport) {
    border-radius: 10px 10px 0 0;
}
</style>