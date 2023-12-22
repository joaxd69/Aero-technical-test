
export interface Car{
    id?: number
    name?: string
    description?: string
    image?: string
    price?: string
    priceTax?: string
    pricePerDay?: string
    moreInfo?: {
        detailOne?: string,
        detailTwo?: string
    }
}