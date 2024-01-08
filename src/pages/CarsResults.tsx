import { useEffect } from "react";
import SearchBox from "../components/Cars/SearchBox";
import FilterBoxSection from "../components/CarsResults/FilterBoxSection";
import ResultSection from "../components/CarsResults/ResultSection";
import { useAppDispatch } from "../store/ReduxHooks";
import { clearInputs } from "../store/Search.slice";

export default function CarsResults() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const nothing = () => null;
    nothing();
    return () => {
      dispatch(clearInputs())
    };
  }, []); // Asegúrate de que el arreglo de dependencias esté vacío

  return (
    <div className="flex flex-col w-full  gap-6 text-[#454848]">
      <section className="">
        <SearchBox FullFilters={true} />
      </section>
      <section className="flex gap-4 w-full px-8">
        <FilterBoxSection />
        <ResultSection />
      </section>
    </div>
  );
}
