import { UbicationIcon } from "../../Icons";

export default function SearchBox({ FullFilters }: { FullFilters?: string }) {
  console.log(FullFilters);
  return (
    <section
      className="flex flex-col gap-10  px-6 py-6 bg-white w-6/12  h-fit "
      style={{ boxShadow: " 0px 0px 8.173px 0px rgba(0, 0, 0, 0.20)" }}>
      <article className="flex">
        <h1 className="font-bold text-xl">
          Encontrá los mejores Autos de Aero en nuestro buscador
        </h1>
      </article>

      <div className="flex flex-wrap gap-4 justify-between">
        <article className=" gap-1 flex flex-col grow w-5/12 ">
          <label htmlFor="PlaceOne">Lo retiro en</label>
          <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex relative pr-8">
            <input
              className="  p-2 rounded-lg h-full w-full outline-none"
              type="text"
              name="PlaceOne"
              id="PlaceOne"
              placeholder="Miami, Estados Unidos"
            />
            <article className="-500 absolute top-0 right-0 h-full rounded-lg w-2/12 flex items-center justify-center">
              <UbicationIcon height="20" width="20" />
            </article>
          </div>
        </article>

        <article className=" gap-1 flex flex-col grow w-5/12 ">
          <label htmlFor="PlaceOne">Lo devuelvo en</label>
          <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex relative pr-8">
            <input
              className="  p-2 rounded-lg h-full w-full outline-none"
              type="text"
              name="PlaceOne"
              id="PlaceOne"
              placeholder="Miami, Estados Unidos"
            />
            <article className="-500 absolute top-0 right-0 h-full rounded-lg w-2/12 flex items-center justify-center">
              <UbicationIcon height="20" width="20" />
            </article>
          </div>
        </article>

        <article className=" gap-1 flex flex-col grow w-5/12 ">
          <label htmlFor="PlaceOne">Fecha y hora de alquiler</label>
          <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex items-center  gap-1 ">
            <input
              className="  p-2 rounded-lg h-full w-full outline-none"
              type="date"
              name="PlaceOne"
              id="PlaceOne"
              placeholder="Ingrese una fecha"
            />
            <figure className="h-5/6 w-0.5 bg-black" />
            <input
              className="  p-2 rounded-lg h-full w-full outline-none"
              type="hour"
              name="PlaceOne"
              id="PlaceOne"
              placeholder="Ingrese una hora"
            />
          </div>
        </article>
        <article className=" gap-1 flex flex-col grow w-5/12 ">
          <label htmlFor="PlaceOne">Fecha y hora de devolución</label>
          <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex items-center  gap-1 ">
            <input
              className="  p-2 rounded-lg h-full w-full outline-none"
              type="date"
              name="PlaceOne"
              id="PlaceOne"
              placeholder="Ingrese una fecha"
            />
            <figure className="h-5/6 w-0.5 bg-black" />
            <input
              className="  p-2 rounded-lg h-full w-full outline-none"
              type="hour"
              name="PlaceOne"
              id="PlaceOne"
              placeholder="Ingrese una hora"
            />
          </div>
        </article>
      </div>
      <article className="w-full   text-center">
        <button className="bg-primary text-white w-full  rounded-sm h-10 hover:bg-[#255DC4]">
          Buscar
        </button>
      </article>
    </section>
  );
}
