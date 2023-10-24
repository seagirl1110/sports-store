import { type Product } from "./Product"

export interface BasketItem {
    product: Product,
    id: string,
    count: number,
}