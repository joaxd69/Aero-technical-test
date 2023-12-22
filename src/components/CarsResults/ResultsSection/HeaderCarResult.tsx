import { Iicon, LuggageIcon, QuestionIcon, SuitCaseIcon2, TwoPersonIcon } from "../../../Icons";
import auto1 from "../../../assets/auto1.png";
export default function HeaderCarResult() {
  return (
    <div className="flex  w-full justify-between   gap-4">
      <section className=" py-4   w-3/12 ">
        <img src={auto1} alt="" className="" />
      </section>
      <section className=" py-4   w-5/12 flex flex-col gap-2 ">
        <article className="flex flex-col gap-1">
          <h1 className="font-bold text-lg">Compacto</h1>
          <span className=" text-greenconfirm">Confirmacion inmediata</span>
        </article>
        <article className="flex gap-6 text-sm ">
          <div className="flex place-items-center gap-2">
            <TwoPersonIcon /> 5 pasajeros
            <span></span>
          </div>
          <div className="flex place-items-center gap-2">
            <LuggageIcon />2 valijas grandes
            <span></span>
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
      <section className=" py-4   grow flex flex-col justify-between text-center bg-[#F9F9FF] ">
        <article className="font-bold text-sm">
          <h6>Precio total</h6>
          <span className=" text-blueAeroFont">Comenzando desde</span>
        </article>

        <article className="flex flex-col">
          <div className="flex items-center justify-center gap-2">
            <b className="text-3xl">USD 524.78</b>
            <Iicon height="15" width="15"/>
          </div>
          <span>(+45.14 impuestos)</span>
        </article>

        <article>
          <p className="text-xl">
            Precio por dia: <b>USD 104.95</b>
          </p>
          <div className="flex justify-center gap-2 items-center">
          <QuestionIcon height="18" width="18"/>
          <button>Consultar cancelacion</button>
          </div>
        </article>
      </section>
    </div>
  );
}
