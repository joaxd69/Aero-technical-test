import {
  Iicon,
  LuggageIcon,
  QuestionIcon,
  SuitCaseIcon2,
  TwoPersonIcon,
} from "../../../../Icons";
import { Car } from "../../../../interfaces";

function Section1({ image }: { image: string }) {
  return (
    <section className=" py-4   w-3/12 ">
      <img src={image} alt="" className="" />
    </section>
  );
}

function Section2() {
  return (
    <section className=" py-4   w-5/12 flex flex-col gap-2 ">
      <article className="flex flex-col gap-1">
        <h1 className="font-bold text-base">Compacto</h1>
        <span className=" text-greenconfirm">Confirmacion inmediata</span>
      </article>
      <article className="flex gap-6 text-xs ">
        <div className="flex place-items-center gap-2">
          <TwoPersonIcon />
          <span>5 pasajeros</span>
        </div>
        <div className="flex place-items-center gap-2">
          <LuggageIcon />
          <span>2 valijas grandes</span>
        </div>
        <div className="flex place-items-center gap-2">
          <SuitCaseIcon2 /> 2 equipajes de mano
          <span></span>
        </div>
      </article>
      <article>
        <span>Codigo: 55-55</span>
      </article>
    </section>
  );
}
function Section3({price,pricePerDay,priceTax,}:Car) {
  return (
    <section className=" py-4   grow flex flex-col justify-between text-center bg-[#F9F9FF] gap-2">
      <article className="font-bold text-xs">
        <h6>Precio total</h6>
        <span className=" text-blueAero">Comenzando desde</span>
      </article>

      <article className="flex flex-col">
        <div className="flex items-center justify-center gap-2">
          <b className="text-xl">{price??""}</b>
          <Iicon height="15" width="15" />
        </div>
        <span className="text-sm">({priceTax??""})</span>
      </article>

      <article className="flex flex-col gap-1">
        <p className="text-sm">
          Precio por dia: <b>{pricePerDay??""}</b>
        </p>
        <div className="flex justify-center gap-2 items-center text-xs">
          <QuestionIcon height="15" width="15" />
          <button>Consultar cancelacion</button>
        </div>
      </article>
    </section>
  );
}
export { Section1, Section2, Section3 };
