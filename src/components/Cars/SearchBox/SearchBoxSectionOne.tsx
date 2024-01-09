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
      className={`w-6/12 flex   ${FullFilters ? " py-4" : " flex-col "} gap-4`}>
      <article
        className={` gap-1 flex flex-col grow  ${
          FullFilters ? "w-6/12" : "w-auto"
        } `}>
        <label htmlFor="pickUpPlace">Lo retiro en</label>
        <div className="border border-[#454848] p-0.5 rounded bg-[#FAFAFA] flex   relative pr-8">
          <input
            className="  p-2.5 rounded h-full w-full outline-none"
            type="text"
            name="pickUpPlace"
            id="pickUpPlace"
            value={pickUpPlace}
            onChange={(e) => updateSearchData(e)}
            placeholder="Miami, Estados Unidos"
          />

          <article className="-500 absolute top-0 right-0 h-full rounded w-2/12 flex items-center justify-center">
            <UbicationIcon height="20" width="20" />
          </article>
        </div>
      </article>

      <article
        className={` gap-1 flex flex-col grow  ${
          FullFilters ? "w-6/12" : "w-auto"
        } `}>
        <label htmlFor="pickUpDate1">Fecha y hora de devolución</label>
        <div className="border border-[#454848] p-0.5 rounded bg-[#FAFAFA] flex items-center  gap-1 relative pr-1 ">
          <input
            className="  p-1 rounded h-full w-7/12 outline-none"
            type="date"
            name="dropOffDate"
            id="dropOffDate"
            value={dropOffDate}
            placeholder="Ingrese una fecha"
            onChange={(e) => updateSearchData(e, "date")}
          />
          <hr className="h-5/6 w-0.5 border-[#454848] border-r-[0.1px] border-l-0 border-t-0 border-b-0" />
          <input
            className="  p-2 rounded grow h-full outline-none "
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
