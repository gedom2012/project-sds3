import { Seller } from "./seller"

export type Sale = {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller: Seller
}

export type SalePage = {
    content?: Sale[],
    totalPages: number,
    totalElements: number,
    last: boolean,
    number: number,
    size?: number,
    first: boolean,
    numberOfElements?: number,
    empty?: false
}

export type SaleSum = {
    sellerName: string,
    sum: number
}

export type SaleSuccess = {
    sellerName: string,
    visited: number,
    deals: number
}