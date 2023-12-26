import { useState } from "react";
import { Car } from "../../../../interfaces";
import CarInformationModal from "../../CarInformationModal/CarInformationModal";
import { Section1, Section2, Section3, Section4 } from "./ChSections";

export default function CharacteristicsResults({
  id,
  name,
  description,
  pricePerDay,
  image,
  moreInfo,
  price,
  priceTax,
}: Car) {
  console.log({
    id,
    name,
    description,
    pricePerDay,
    image,
    moreInfo,
    price,
    priceTax,
  });
  const [seeModal, setSeeModal] = useState(false);
  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSeeModal(!seeModal);
  };
  return (
    <div className="w-full flex gap-2 bg-white p-6  text-sm border border-[#CED0E0]  ">
      {seeModal && <CarInformationModal onClick={openModal} />}
      <Section1
        title={description!}
        details={[moreInfo?.detailOne!, moreInfo?.detailTwo!]}
      />
      <Section2 />
      <Section3
        totalPrice={price!}
        priceTax={priceTax!}
        pricePerDay={pricePerDay!}
      />
      <Section4 openModal={openModal} />
    </div>
  );
}
