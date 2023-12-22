import { Car } from "../interfaces";
import auto1 from "../assets/auto1.png";
const ChevroletOnix: Car = {
  id: 1,
  name: "Chevrolet Onix",
  description: "Chevrolet Onix o similar",
  image: auto1,
  price: "USD 524.78",
  priceTax: "+45.14 imp",
  pricePerDay: "USD 145.68",
  moreInfo: {
    detailOne: "Aire acondicionado",
    detailTwo: "Caja automática",
  },
};
const ChevroletOnix2: Car = {
  id: 1,
  name: "Chevrolet Onix",
  description: "Chevrolet Onix o similar",
  image: auto1,
  price: "USD 694.36",
  priceTax: "+45.14 imp",
  pricePerDay: "USD 145.68",
  moreInfo: {
    detailOne: "Aire acondicionado",
    detailTwo: "Caja automática",
  },
};
const VolkswagenJetta: Car = {
  id: 1,
  name: "Volkswagen Jetta",
  description: "Volkswagen Jetta o similar",
  image: auto1,
  price: "USD 789.41",
  priceTax: "+45.14 imp",
  pricePerDay: "USD 155.68",
  moreInfo: {
    detailOne: "Aire acondicionado",
    detailTwo: "Caja automática",
  },
};
export const Cars: Car[] = [ChevroletOnix, ChevroletOnix2, VolkswagenJetta];
