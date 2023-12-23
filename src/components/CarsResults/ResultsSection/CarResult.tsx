import BrandsCarsButtons from "./BrandsCarsButtons";
import CharacteristicsResults from "./CharacteristicsResults/CharacteristicsResults";
import HeaderCarResult from "./HeaderCarResult/HeaderCarResult";
import { Cars } from "../../../FakeData/Cars";

export default function CarResult() {
  return (
    <>
      {Cars.map((car, index) => (
        <div className="flex flex-col" key={index}>
          <div className="w-full bg-white flex-col flex  ">
            <HeaderCarResult Car={car} />
          </div>
          <BrandsCarsButtons operators={car.Operators} />
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
          {car?.variants?.map((variant) => {
            return (
              <CharacteristicsResults
                price={variant.price}
                priceTax={variant.priceTax}
                pricePerDay={variant.pricePerDay}
                name={variant.name}
                description={variant.description}
                image={variant.image}
                moreInfo={variant.moreInfo}
                id={variant.id}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}
