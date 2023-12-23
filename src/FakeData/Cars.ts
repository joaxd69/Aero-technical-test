import { Car } from "../interfaces";
import auto1 from "../assets/auto1.png";
import auto2 from "../assets/auto2.png";
import auto3 from "../assets/auto3.png";
////first car
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
  variants: [ChevroletOnix2, VolkswagenJetta],
  Operators: ["HERTZ", "DOLLAR DIAMOND", "AVIS", "BUDGET"],
};

////second car
const Volkswagen2: Car = {
  id: 5,
  name: "Volkswagen",
  description: "Volkswagen o similar",
  image: auto1,
  price: "USD 947.01",
  priceTax: "+45.14 imp",
  pricePerDay: "USD 189.02",
  moreInfo: {
    detailOne: "Aire acondicionado",
    detailTwo: "Caja automática",
  },
};

const Vollkswagen: Car = {
  id: 4,
  name: "Volkswagen",
  description: "Volkswagen o similar",
  image: auto2,
  price: "USD 845.14",
  priceTax: "+45.14 imp",
  pricePerDay: "USD 104.95",
  moreInfo: {
    detailOne: "Aire acondicionado",
    detailTwo: "Caja automática",
  },
  variants: [Volkswagen2],
  Operators: ["DOLLAR DIAMOND", "AVIS"],
};

const BudgetCar: Car = {
  id: 6,
  name: "Volkswagen",
  description: "Toyota Etios o similar",
  image: auto3,
  price: "USD 524.78",
  priceTax: "+45.14 imp",
  pricePerDay: "USD 104.95",
  moreInfo: {
    detailOne: "Aire acondicionado",
    detailTwo: "Caja automática",
  },
  Operators: ["BUDGET"],
};
export const Cars: Car[] = [ChevroletOnix, Vollkswagen, BudgetCar];
