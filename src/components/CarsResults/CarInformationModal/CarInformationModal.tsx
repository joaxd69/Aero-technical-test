import { Car } from "../../../interfaces";
import carImage from "../../../assets/auto1.png";
import { CarInfoSection1, CarInfoSection2 } from "./CarInfoModalSections";
import LayoutCarInformationModal from "./LayoutCarInformationModal";
import { useState } from "react";
import {
  ChangePlaceSection1,
  ChangePlaceSection2,
} from "./ChangePlaceSections";
interface CarInfoProps extends Car {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function CarInformationModal({
  name,
  description,
  price,
  pricePerDay,
  priceTax,
  image,
  moreInfo,
  id,
  type,
  onClick,
}: CarInfoProps) {
  const [step, setStep] = useState<"prevDetails" | "ChangePlace" | "seePlace">(
    "prevDetails"
  );
  console.log(
    id,
    type,
    name,
    price,
    pricePerDay,
    priceTax,
    image,
    moreInfo,
    description
  );
  const changeStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setStep(value as "prevDetails" | "ChangePlace" | "seePlace");
  };
  const title =
    step === "prevDetails"
      ? "Información de tu auto"
      : step === "ChangePlace" || step === "seePlace"
      ? "Lugar de retiro y devolución"
      : "";

  return (
    <LayoutCarInformationModal onClick={onClick!} title={title}>
      <div className="flex justify-between h-full">
        {step === "prevDetails" && (
          <>
            <CarInfoSection1 carImage={carImage} changeStep={changeStep} />
            <CarInfoSection2 />
          </>
        )}
        {step === "ChangePlace" && (
          <>
            <ChangePlaceSection1 />
            <ChangePlaceSection2 changeStep={changeStep} />
          </>
        )}
      </div>
    </LayoutCarInformationModal>
  );
}
