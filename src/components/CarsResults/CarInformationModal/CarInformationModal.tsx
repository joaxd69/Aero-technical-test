import { Car } from "../../../interfaces";
import LayoutModal from "../../Generals/LayoutModal";
import carImage from "../../../assets/auto1.png";
import { Section1, Section2 } from "./CarInfoModalSections";
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
  console.log({
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
  });
  return (
    <LayoutModal>
      <div className=" w-11/12 bg-white px-5 flex flex-col text-xs  gap-2 relative py-6">
        <button
          className="text-lg font-bold absolute top-0 right-[20px]"
          onClick={onClick}>
          X
        </button>

        <section>
          <h1 className=" text-base font-bold">Informacion de tu auto</h1>
        </section>
        <hr className="w-full bg-blueAero h-1" />
        <div className="flex justify-between">
          <Section1 carImage={carImage} />
          <Section2 />
        </div>
      </div>
    </LayoutModal>
  );
}
