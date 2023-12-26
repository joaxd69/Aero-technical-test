export interface CarVariants {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  price?: string;
  priceTax?: string;
  pricePerDay?: string;
  moreInfo?: {
    detailOne?: string;
    detailTwo?: string;
  };
}
export interface Car {
  id?: number;
  name?: string;
  type?: string;///compact for example
  description?: string;
  image?: string;
  price?: string;
  priceTax?: string;
  pricePerDay?: string;
  moreInfo?: {
    detailOne?: string;
    detailTwo?: string;
  };
  variants?: CarVariants[];
  Operators?:string[]
}
