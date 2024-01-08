import { UbicationIcon } from "../../../Icons";

export default function SearchBoxSectionTwo({
  FullFilters,
  updateSearchData,
  dropOffPlace,
  pickUpDate,
  pickUpTime,
}: {
  FullFilters?: boolean;
  updateSearchData: (
    e: React.ChangeEvent<HTMLInputElement>,
    typeOfInput?: string
  ) => void;
  dropOffPlace?: string;
  pickUpDate?: string;
  pickUpTime?: string;
}) {
  return (
    <section
      className={`w-6/12 flex   ${FullFilters ? "" : " flex-col "} gap-4`}>
      <article
        className={` gap-1 flex flex-col grow ${
          FullFilters ? "w-6/12" : "w-auto"
        } `}>
        <label htmlFor="PlaceDropOff">Lo devuelvo en</label>
        <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex relative pr-8 ">
          <input
            className="  p-2 rounded-lg h-full w-full outline-none"
            type="text"
            name="dropOffPlace"
            value={dropOffPlace}
            id="PlaceDropOff"
            placeholder="Miami, Estados Unidos"
            onChange={(e) => updateSearchData(e)}
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
        <label htmlFor="PickUpDate">Fecha y hora de alquiler</label>
        <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex  items-center gap-1 relative  ">
          <input
            className="  p-1 rounded-lg h-full w-6/12 outline-none"
            type="date"
            name="pickUpDate"
            id="PickUpDate"
            value={pickUpDate}
            placeholder="Ingrese una fecha"
            onChange={(e) => updateSearchData(e, "date")}
          />
          <figure className="h-5/6 w-0.5 bg-black" />
          <input
            className="  p-2 rounded-lg h-full w-6/12 outline-none"
            type="time"
            name="pickUpDate"
            id="pickUpDateTime"
            value={pickUpTime}
            placeholder="Hora"
            onChange={(e) => updateSearchData(e, "time")}
          />
        </div>
      </article>
    </section>
  );
}
