import { CarIcon } from "../../../Icons";

export default function PriceConditionWindow({
  openWindow,
}: {
  openWindow: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className=" font-semibold text-sm absolute min-w-[25rem]  bg-white right-[-310%] top-[150%]  flex flex-col gap-2 shadow-containerShadow rounded">
      <div className=" absolute bottom-[100%]   right-[10%] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[14px] border-b-primary" />

      <section className=" bg-primary rounded-t-sm text-white flex items-center justify-between p-3 font-bold ">
        <h6>Detalle de tarifas y condiciones</h6>
        <button onClick={openWindow ?? (() => {})}>x</button>
      </section>

      <div className="flex flex-col   px-2 pb-4">
        <section className="flex justify-between border-b border-[#C3C4C4]  items-center py-3">
          <article className="  flex    w-fit items-center gap-1 ">
            <CarIcon color="black" />
            <p className="w-fit">Chevrolet Onix o similar</p>
          </article>
          <article className="  flex  grow  justify-end">
            <p>USD 100.75 (+74.75 impuestos)</p>
          </article>
        </section>

        <section className="flex flex-col justify-between border-b border-[#C3C4C4] py-3">
          <article className="w-full  flex justify-between">
            <p>Gastos administrativos</p>
            <span>USD 20</span>
          </article>
          <article className="w-full  flex justify-between">
            <p>Tu comisión</p>
            <span>USD -12</span>
          </article>
          <article className=" text-blueAero flex justify-between">
            <p>Neto agencia</p>
            <span>USD 96.63</span>
          </article>
        </section>

        <section className="flex flex-col justify-between border-b border-[#C3C4C4]  py-3 ">
          <article className="w-full  flex justify-between">
            <p>Imp PAIS</p>
            <span>USD 32</span>
          </article>
          <article className="w-full  flex justify-between">
            <p>Percepsion RG4815</p>
            <span>USD 40 </span>
          </article>
          <article className=" text-blueAero flex justify-between">
            <p>Total recomendado al pasajero</p>
            <span>USD 183.45</span>
          </article>
        </section>
        <section className="text-xs  text-start pt-3 flex flex-col gap-1">
          <p>La tarifa de los servicios terrestres es comisionable</p>
          <p className="text-[#717171]">
            No incluye 5% Resolución Afip 3819 por pago contado efectivo.
          </p>
        </section>
      </div>
    </div>
  );
}
