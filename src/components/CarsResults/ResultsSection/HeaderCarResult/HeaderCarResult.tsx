import { Car } from "../../../../interfaces";
import { Section1, Section2, Section3 } from "./HeaderSections";

export default function HeaderCarResult({Car:Car}:{Car:Car}) {
  return (
    <div className="flex  w-full justify-between   gap-4">
      <Section1 image={Car?.image!} />
      <Section2 />
      <Section3 price={Car?.price  } pricePerDay={Car?.pricePerDay} priceTax={Car?.priceTax} />
    </div>
  );
}
