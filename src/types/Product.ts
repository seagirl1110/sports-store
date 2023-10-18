export interface Product {
    productId: string,
    name: string,
    reviews: number,
    rating: number,
    sizes: Size[],
    media: { photoImages: PhotoImage[] },
    color: string,
    price: Price,
}

interface Size {
    id: string,
    code: string,
    isAvailableOnline: boolean,
    isAvailableOffline: boolean,
    isInWishList: boolean,
    size: string,
    sizeRus: string,
    sizeEur: string,
    sizeUk: string,
    sizeUs: string,
    lengthSm: number,
    footLength: string,
}

interface PhotoImage {
    mobile: string,
    tablet: string,
    desktop: string,
}

interface Price {
    catalog: number,
    retail: number,
    discountAmount: number,
    discountRate: number,
}