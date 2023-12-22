import { useState } from "react";
import BrandsCarsButtons from "./BrandsCarsButtons";
import CharacteristicsResults from "./CharacteristicsResults/CharacteristicsResults";
import HeaderCarResult from "./HeaderCarResult/HeaderCarResult";
import { Cars } from "../../../FakeData/Cars";

export default function CarResult() {
  const [actualSection, setActualSection] = useState("");
  const selectSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActualSection(e.currentTarget.name);
  };
  return (
    <>
      {Cars.map((car) => (
        <>
          <div className="w-full bg-white shadow-containerShadow flex-col flex">
            <HeaderCarResult Car={car} />
          </div>
          <BrandsCarsButtons
            selectSection={selectSection}
            actualSection={actualSection}
          />
          <div>
          <CharacteristicsResults
            price={car.price}
            priceTax={car.priceTax}
            pricePerDay={car.pricePerDay}
            name={car.name}
            description={car.description}
            image={car.image}
            moreInfo={car.moreInfo}
            id={car.id}
          />
          <CharacteristicsResults
            price={car.price}
            priceTax={car.priceTax}
            pricePerDay={car.pricePerDay}
            name={car.name}
            description={car.description}
            image={car.image}
            moreInfo={car.moreInfo}
            id={car.id}
          />
          <CharacteristicsResults
            price={car.price}
            priceTax={car.priceTax}
            pricePerDay={car.pricePerDay}
            name={car.name}
            description={car.description}
            image={car.image}
            moreInfo={car.moreInfo}
            id={car.id}
          />
          </div>
        </>
      ))}
    </>
  );
}
