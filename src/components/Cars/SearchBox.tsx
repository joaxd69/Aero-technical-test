import { Link } from "react-router-dom";
import SearchBoxSectionOne from "./SearchBox/SearchBoxSectionOne";
import SearchBoxSectionTwo from "./SearchBox/SearchBoxSectionTwo";
import { SearchIcon, TrashIcon } from "../../Icons";

export default function SearchBox({ FullFilters }: { FullFilters?: boolean }) {
  return (
    <section
      className={`flex  gap-10  px-6  bg-white text-sm ${
        FullFilters
          ? "w-full  h-[5.5rem]   lg:pr-[10%]  py-4 pb-6 "
          : "w-6/12 flex-col py-6"
      }  h-fit `}
      style={{ boxShadow: " 0px 0px 8.173px 0px rgba(0, 0, 0, 0.20)" }}>
      {!FullFilters && (
        <article className="flex">
          <h1 className="font-bold text-xl">
            Encontrá los mejores Autos de Aero en nuestro buscador
          </h1>
        </article>
      )}

      <div className="flex  gap-4 justify-between items-center ">
        <SearchBoxSectionOne FullFilters={FullFilters ?? false} />
        <hr className="w-0.5 bg-[#D0D0D0] h-full" />
        <SearchBoxSectionTwo FullFilters={FullFilters ?? false} />
        <hr className="w-0.5 bg-[#D0D0D0] h-full" />
      </div>

      <article
        className={` ${
          FullFilters ? "flex items-end   w-[12rem]  " : " w-full"
        }  `}>
        <div className="w-full flex items-center gap-4">
          <Link to={`/results`} className="w-full">
            <button className="bg-primary text-white w-full  rounded-sm h-10 hover:bg-[#255DC4] flex justify-center items-center gap-2">
              <SearchIcon height="14" width="14" />
              Buscar
            </button>
          </Link>
          {FullFilters && (
              <TrashIcon  height="17" width="17" />
          )}
        </div>
      </article>
    </section>
  );
}
