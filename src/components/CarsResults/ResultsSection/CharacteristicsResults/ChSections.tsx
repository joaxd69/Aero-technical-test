import { Iicon, ShareIcon } from "../../../../Icons";
import FullRoundedButton from "../../../Generals/FullRoundedButton";
function Section1({title,details}:{title:string,details:string[]}) {
  return (
    <section className="  flex w-3/12 ">
      <article>
        <h3 className="font-bold  ">{title??""}</h3>
        <div className="flex gap-4 text-xs">
          {details?.map((detail) => (    
          <p>
            <span>{detail??""}</span>
          </p>
          ))}

        </div>
      </article>
    </section>
  );
}
function Section2() {
  return (
    <section className="  flex w-4/12  ">
      <p>
        <b className="text-primary ">Incluye:</b>
        <span className=" text-xs ">
          Conductor adicional | Cobertura por daño y/o robo | Impuestos |
          Extensión de responsabilidad civil | Kilometraje ilimitado | Tanque de
          combustible
        </span>
      </p>
    </section>
  );
}

function Section3({totalPrice,priceTax,pricePerDay}:{totalPrice:string,priceTax:string,pricePerDay:string}) {
  return (
    <section className="  flex flex-col w-2/12 text-xs gap-1 ">
      <article className="flex items-center gap-1">
        <span>Precio total</span>
        <div className="mt-0.5">
          <Iicon width="13" height="13" />
        </div>
      </article>
      <article>
        <h3 className="font-bold text-base ">{totalPrice??""}</h3>
        <span>({priceTax??""})</span>
      </article>
      <p className="">
        Precio por dia :<b> {pricePerDay??""}</b>
      </p>
    </section>
  );
}
function Section4() {
  return (
    <section className="   gap-12  w-1/12 flex items-center grow">
      <ShareIcon height="24" width="24" />
      <FullRoundedButton text="Reservar" className="w-full" />
    </section>
  );
}
export { Section1, Section2, Section3, Section4 };
