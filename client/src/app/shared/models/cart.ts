import {nanoid} from 'nanoid'

export interface CartType {
    id: string;
    items: CartItem[];
    deliveryMethodId?: number;
    paymentIntentId?: string;
    clientSecret?: string;
}

export interface CartItem {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export interface Coupon {
    name: string;
    couponId: string;
    promotionCode: string;
    amountOff?: number;
    percentOff?: number;
}

export class Cart implements CartType {
    id = nanoid();
    items: CartItem[] = [];
    coupon?: Coupon;
    deliveryMethodId?: number;
    paymentIntentId?: string;
    clientSecret?: string;
}