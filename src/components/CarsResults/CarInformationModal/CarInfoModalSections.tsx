import {
  Iicon,
  ClockIcon,
  QuestionIcon,
  UbicationIcon,
  CalendarIcon,
} from "../../../Icons";
import FullRoundedButton from "../../Generals/FullRoundedButton";
import DescriptionBox from "../DescriptionBox";

function CarInfoSection1({
  carImage,
  changeStep,
}: {
  carImage: string;
  changeStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <section className="w-6/12 gap-4 flex flex-col  ">
      <div className="flex flex-col  shadow-containerShadow rounded-lg">
        <div className="w-full flex  justify-between gap-2 py-2">
          <section className=" w-5/12 flex  items-center">
            <img src={carImage} alt="" className="w-[20rem]" />
          </section>

          <section className="flex flex-col gap-3 w-7/12">
            <article className="flex flex-col ">
              <p>Compacto</p>
              <h2 className="font-bold text-base">Volkswagen Up o similar</h2>
              <p>Modelo sujeto a disponibilidad</p>
            </article>
            <DescriptionBox />
            <article className="flex flex-wrap gap-x-1 items-center">
              <h5 className=" w-full text-primary">Incluye:</h5>
              <span>Conductor adicional</span>
              <div className=" w-[0.5px] h-[10px] bg-[#454848] " />
              <span>Impuestos</span>
              <div className=" w-[0.5px] h-[10px] bg-[#454848] " />
              <span>Cargos adicionales</span>
              <div className=" w-[0.5px] h-[10px] bg-[#454848] " />
              <span>Extensión de responsabilidad civil</span>
              <div className=" w-[0.5px] h-[10px] bg-[#454848] " />
              <span>Kilometraje ilimitado</span>
            </article>
          </section>
        </div>
        <article className="w-full flex justify-center bg-[#F9F9FF] gap-4 text-center py-2">
          <section className="flex flex-col">
            <article className="flex gap-2 items-center">
              <h1 className="text-lg font-bold">USD 524.78</h1>
              <Iicon />
            </article>
            <p>(+45.14 impuestos)</p>
          </section>

          <section>
            <article className="text-base">
              <p>Precio por día:</p>
              <span className="font-bold">USD 104.78</span>
            </article>
            <article className="flex items-center">
              <QuestionIcon />
              <p>Consultar cancelacion</p>
            </article>
          </section>
        </article>
      </div>

      <div className="w-full shadow-containerShadow flex flex-col gap-3 py-4">
        <h1 className="text-base font-bold">Lugar de retiro y devolucion</h1>

        <div className="flex gap-10 ">
          <section className="flex flex-col gap-4 ">
            <h4 className=" text-primary text-sm">Retiro</h4>
            <article>
              <div className="flex items-center gap-2">
                <UbicationIcon />
                <h6 className=" text-sm font-semibold">En el aeropuerto:</h6>
              </div>
              <p>
                Aeropuerto Internacional Miami - 3900 Northwest 25th Street
                Snglterm
              </p>
            </article>
            <article className="flex gap-4">
              <div className="flex gap-1 items-center">
                <CalendarIcon />
                <span> 21/05/2014</span>
              </div>
              <div className="flex gap-1 items-center">
                <ClockIcon />
                <span> 10:00</span>
              </div>
            </article>
          </section>

          <hr className="w-[1px] border-[#A8A8A8] border-r  h-full" />

          <section className="flex flex-col gap-4 ">
            <h4 className=" text-primary text-sm">Devolucion</h4>
            <article>
              <div className="flex items-center gap-2">
                <UbicationIcon />
                <h6 className=" text-sm font-semibold">En el aeropuerto:</h6>
              </div>
              <p>
                Aeropuerto Internacional Miami - 3900 Northwest 25th Street
                Snglterm
              </p>
            </article>
            <article className="flex gap-4">
              <div className="flex gap-1 items-center">
                <CalendarIcon />
                <span> 21/05/2014</span>
              </div>
              <div className="flex gap-1 items-center">
                <ClockIcon />
                <span> 10:00</span>
              </div>
            </article>
          </section>
        </div>
        <FullRoundedButton
          onClick={changeStep}
          text="Cambiar oficina"
          type="two"
          className="w-fit m-auto"
          ButtonValue="ChangePlace"
        />
      </div>
    </section>
  );
}

function CarInfoSection2() {
  return (
    <section className="  grow w-6/12 px-5  flex flex-col gap-3 ">
      <article>
        <div className="  text-blueAero p-2 bg-[#F6F7FB] font-bold text-base">
          <h1>Politicas de cancelación</h1>
        </div>
        <div className="p-2">
          <p>
            Este alquiler de auto permite devoluciones sin gastos hasta 48
            hora(s) antes de la fecha del retiro. Las cancelaciones solicitadas
            dentro de las 24 hora(s) tienen una penalidad del 100%.
          </p>
        </div>
      </article>

      <article>
        <div className="  text-blueAero p-2 bg-[#F6F7FB] font-bold text-base">
          <h1>Seguro obligatorio</h1>
        </div>
        <div className="p-2">
          <p>
            Todos nuestros autos incluyen el seguro de Responsabilidad civil
            básica, el cual es obligatorio para circular.Este seguro protege al
            conductor titular y a todos los conductores autorizados contra los
            daños a terceros por un monto mínimo.Este monto puede variar de
            estado a estado. Podrá pedir el detalle al retirar el auto.
          </p>
        </div>
      </article>

      <article>
        <div className="  text-blueAero p-2 bg-[#F6F7FB] font-bold text-base">
          <h1>Informacion importante</h1>
        </div>
        <div className="p-2">
          <p>
            Para poder retirar el auto en destino,el conductor principal deberá
            ser el titular de la reserva. Además deberá contar con una licencia
            de conducir válida y una tarjeta de crédito a su nombre. La tarjeta
            de crédito funciona como garantía y se bloqueará un monto
            específico, según la rentadora y tipo de auto, que será liberado al
            devolver el vehículo.Para alquileres dentro de Argentina, el monto a
            bloquear será a partir de ARS 300.000.- Para alquileres dentro de
            Brasil, solo se puede retirar el vehículo con PASAPORTE. No se
            entregan mas los autos solo DNI.
          </p>
        </div>
      </article>
      <div className="flex flex-col bg-[#F7F7F7] p-3 gap-2">
        <article className=" text-sm font-semibold w-full bg-primary text-white p-2 flex justify-between">
          <p className=" ">Precio total*</p>
          <p>USD 524.78</p>
        </article>
        <p>*Impuestos incluidos</p>
      </div>
      <div className="flex justify-end gap-2">
        <FullRoundedButton type="two" text="Guardar presupuesto" />
        <FullRoundedButton type="one" text="Reservar" />
      </div>
    </section>
  );
}
export { CarInfoSection1, CarInfoSection2 };
