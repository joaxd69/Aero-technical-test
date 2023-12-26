import {
  AirAconditioning,
  AutomaticBox,
  Iicon,
  ShareIcon,
} from "../../../../Icons";
import FullRoundedButton from "../../../Generals/FullRoundedButton";
function Section1({ title, details }: { title: string; details: string[] }) {
  return (
    <section className="  flex w-3/12 ">
      <article className="flex flex-col gap-1">
        <h3 className="font-bold  ">{title ?? ""}</h3>
        <div className="flex gap-1 items-center text-xs">
          {details?.map((detail) => (
            <>
              {detail.toLowerCase().includes("aire") ? (
                <AirAconditioning />
              ) : (
                <AutomaticBox />
              )}
              <p>
                <span>{detail ?? ""}</span>
              </p>
            </>
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

function Section3({
  totalPrice,
  priceTax,
  pricePerDay,
}: {
  totalPrice: string;
  priceTax: string;
  pricePerDay: string;
}) {
  return (
    <section className="  flex flex-col w-2/12 text-xs gap-1 ">
      <article className="flex items-center gap-1">
        <span>Precio total</span>
        <div className="mt-0.5">
          <Iicon width="13" height="13" />
        </div>
      </article>
      <article>
        <h3 className="font-bold text-base ">{totalPrice ?? ""}</h3>
        <span>({priceTax ?? ""})</span>
      </article>
      <p className="">
        Precio por dia :<b> {pricePerDay ?? ""}</b>
      </p>
    </section>
  );
}
function Section4({
  openModal,
}: {
  openModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <section className="   gap-12  w-1/12 flex items-center grow">
      <ShareIcon height="24" width="24" />
      <FullRoundedButton
        type="one"
        text="Reservar"
        className="w-full"
        onClick={openModal}
      />
    </section>
  );
}
export { Section1, Section2, Section3, Section4 };
