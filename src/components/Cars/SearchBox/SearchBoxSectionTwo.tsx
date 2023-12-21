import { UbicationIcon } from "../../../Icons";

export default function SearchBoxSectionTwo({
  FullFilters,
}: {
  FullFilters?: boolean;
}) {
  return (
    <section
      className={`w-6/12 flex   ${FullFilters ? "" : " flex-col "} gap-4`}>
      <article
        className={` gap-1 flex flex-col grow ${
          FullFilters ? "w-6/12" : "w-auto"
        } `}>
        <label htmlFor="PlaceOne">Lo devuelvo en</label>
        <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex relative pr-8 ">
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

      <article
        className={` gap-1 flex flex-col grow ${
          FullFilters ? "w-6/12" : "w-auto"
        } `}>
        <label htmlFor="PlaceOne">Fecha y hora de alquiler</label>
        <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex  gap-1 ">
          <input
            className="  p-1 rounded-lg h-full w-full outline-none"
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
    </section>
  );
}
