import SearchBoxSectionOne from "./SearchBox/SearchBoxSectionOne";
import SearchBoxSectionTwo from "./SearchBox/SearchBoxSectionTwo";
import { SearchIcon, TrashIcon } from "../../Icons";
import { useSearchBox } from "../../hooks/useSearchBox";

export default function SearchBox({ FullFilters }: { FullFilters?: boolean }) {
  const { updateSearchData, searchData, clearSearchData, handleSubmit } =
    useSearchBox();
  return (
    <section
      className={`flex  gap-10  px-6  bg-white text-sm shadow-containerShadow ${
        FullFilters
          ? "w-full  h-[5.5rem]   lg:pr-[10%]    "
          : "w-6/12 flex-col py-6"
      }  h-fit `}>
      {!FullFilters && (
        <article className="flex">
          <h1 className="font-bold text-xl">
            Encontrá los mejores Autos de Aero en nuestro buscador
          </h1>
        </article>
      )}

      <div
        className={`flex   ${
          FullFilters ? "gap-4" : "gap-2"
        } justify-between items-center  grow  `}>
        <SearchBoxSectionOne
          FullFilters={FullFilters ?? false}
          updateSearchData={updateSearchData}
          pickUpPlace={searchData.pickUpPlace}
          dropOffDate={searchData.dropOffDate.date}
          dropOffTime={searchData.dropOffDate.time}
        />
        <hr className="w-0.5 bg-[#D0D0D0] h-full" />
        <SearchBoxSectionTwo
          pickUpDate={searchData.pickUpDate.date}
          pickUpTime={searchData.pickUpDate.time}
          FullFilters={FullFilters ?? false}
          updateSearchData={updateSearchData}
          dropOffPlace={searchData.dropOffPlace}
        />
        <hr className="w-0.5 bg-[#D0D0D0] h-full" />
      </div>

      <article
        className={` ${
          FullFilters ? "flex items-center   pt-5 w-[12rem]  " : " w-full"
        }  `}>
        <div className="w-full flex items-center gap-4">
          <button
            onClick={handleSubmit}
            className="bg-blueAero text-white w-full  rounded-sm h-10 hover:bg-primary flex justify-center items-center gap-2">
            <SearchIcon height="14" width="14" />
            Buscar
          </button>

          {FullFilters && (
            <TrashIcon height="17" width="17" onClick={clearSearchData} />
          )}
        </div>
      </article>
    </section>
  );
}
