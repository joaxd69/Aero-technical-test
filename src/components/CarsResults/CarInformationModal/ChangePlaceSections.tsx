import { Iicon } from "../../../Icons";
import FullRoundedButton from "../../Generals/FullRoundedButton";
import Map from "../../GoogleMap";

export function ChangePlaceSection1() {
  return (
    <section className=" w-6/12  border-r border-[#A8A8A8] pr-6 ">
      <Map onMapclick={() => {}} center={{ lat: 25.77427, lng:  -80.19366 }} />
    </section>
  );
}
export function ChangePlaceSection2({
  changeStep,
}: {
  changeStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <section className="flex w-6/12 flex-col pl-6 gap-8 justify-between">
      <div>
        <article className="w-full text-sm bg-[#F6F7FB] p-2 text-blueAero">
          <h1 className="font-semibold">
            Lugar de retiro/devolucion:
            <b className="font-bold"> Aeropuerto Internacional de Miami</b>
          </h1>
        </article>
        <div className="flex flex-col gap-2 w-full items-start px-4  py-4 pb-12">
          <article className="flex gap-2">
            <input
              type="radio"
              name="placeGroup"
              className=" accent-primary"
              id=" option1"
            />
            <label htmlFor="option1">3900 Northwest 25th Street Snglterm</label>
          </article>
          <article className="flex gap-2">
            <input
              type="radio"
              name="placeGroup"
              className=" accent-primary"
              id=" option2"
            />
            <label htmlFor="option2">8888 Sw 136th Street Miami</label>
          </article>
          <article className="flex gap-2">
            <input
              type="radio"
              name="placeGroup"
              className=" accent-primary"
              id=" option3"
            />
            <label htmlFor="option3">Miami Int L Airport Snglterm</label>
          </article>
          <article className="flex gap-2">
            <input
              type="radio"
              name="placeGroup"
              className=" accent-primary"
              id=" option4"
            />
            <label htmlFor="option4">8330 South Dixie Highway Miami</label>
          </article>
        </div>
      </div>
      <article className="w-full flex items-center gap-1 font-semibold bg-[#F6F7FB] p-2 py-4 text-blueAero">
        <Iicon />
        <p>
          El precio puede variar dependiendo del lugar de retiro y devolución
        </p>
      </article>
      <article className="flex  justify-end gap-8 text-sm">
        <FullRoundedButton
          ButtonValue="prevDetails"
          text="Volver"
          onClick={changeStep}
          className="px-8"
        />
        <FullRoundedButton
          ButtonValue="prevDetails"
          text="Cambiar"
          type="one"
          onClick={changeStep}
          className="px-8"
        />
      </article>
    </section>
  );
}
