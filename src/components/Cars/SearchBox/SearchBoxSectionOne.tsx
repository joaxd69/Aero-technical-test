import { UbicationIcon } from "../../../Icons";

export default function SearchBoxSectionOne({
  FullFilters,
  updateSearchData,
  pickUpPlace,
  dropOffDate,
  dropOffTime,
}: {
  FullFilters?: boolean;
  updateSearchData: (
    e: React.ChangeEvent<HTMLInputElement>,
    typeOfInput?: string
  ) => void;
  pickUpPlace?: string;
  dropOffDate?: string;
  dropOffTime?: string;
}) {
  return (
    <section
      className={`w-6/12 flex   ${FullFilters ? "" : " flex-col "} gap-4`}>
      <article
        className={` gap-1 flex flex-col grow  ${
          FullFilters ? "w-6/12" : "w-auto"
        } `}>
        <label htmlFor="pickUpPlace">Lo retiro en</label>
        <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex relative pr-8">
          <input
            className="  p-2 rounded-lg h-full w-full outline-none"
            type="text"
            name="pickUpPlace"
            id="pickUpPlace"
            value={pickUpPlace}
            onChange={(e) => updateSearchData(e)}
            placeholder="Miami, Estados Unidos"
          />

          <article className="-500 absolute top-0 right-0 h-full rounded-lg w-2/12 flex items-center justify-center">
            <UbicationIcon height="20" width="20" />
          </article>
        </div>
      </article>

      <article
        className={` gap-1 flex flex-col grow  ${
          FullFilters ? "w-6/12" : "w-auto"
        } `}>
        <label htmlFor="pickUpDate1">Fecha y hora de devolución</label>
        <div className="border border-[#454848] p-0.5 rounded-lg bg-[#FAFAFA] flex items-center  gap-1 relative pr-2 ">
          <input
            className="  p-1 rounded-lg h-full w-6/12 outline-none"
            type="date"
            name="dropOffDate"
            id="dropOffDate"
            value={dropOffDate}
            placeholder="Ingrese una fecha"
            onChange={(e) => updateSearchData(e, "date")}
          />
          <figure className="h-5/6 w-0.5 bg-black" />
          <input
            className="  p-2 rounded-lg grow h-full outline-none "
            type="time"
            name="dropOffDate"
            value={dropOffTime}
            id="dropOffTime"
            placeholder="Hora"
            onChange={(e) => updateSearchData(e, "time")}
          />
        </div>
      </article>
    </section>
  );
}
