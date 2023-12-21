import SearchBox from "../components/Cars/SearchBox";
import FilterBoxSection from "../components/CarsResults/FilterBoxSection";

export default function CarsResults() {
  return (
    <div className="flex flex-col w-full  gap-6 text-[#454848]">
      <section className="">
        <SearchBox FullFilters={true} />
      </section>
      <section className="flex gap-4 w-full px-8">
        <FilterBoxSection />
      </section>
    </div>
  );
}
