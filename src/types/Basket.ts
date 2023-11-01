import { type Product, type Size } from "./Product"

export interface BasketItem {
    product: Product,
    size: Size,
    id: string,
    sizeId: string,
    count: number,
}