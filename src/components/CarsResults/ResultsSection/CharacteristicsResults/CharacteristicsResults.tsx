import { Car } from "../../../../interfaces";
import { Section1, Section2, Section3, Section4 } from "./ChSections";

export default function CharacteristicsResults({id, name,description,pricePerDay,image,moreInfo,price,priceTax}:Car) {
  console.log({id, name,description,pricePerDay,image,moreInfo,price,priceTax})
  return (
    <div className="w-full flex gap-2 bg-white p-6  text-sm  ">
      <Section1 title={description!} details={[moreInfo?.detailOne!,moreInfo?.detailTwo!]}/>
      <Section2 />
      <Section3 totalPrice={price!} priceTax={priceTax!} pricePerDay={pricePerDay!} />
      <Section4 />
    </div>
  );
}
