import GeneralFilters from "./FilterBoxSection/GeneralFilters";
import PricesFilters from "./FilterBoxSection/PricesFilters";
import RegimenFilter from "./FilterBoxSection/RegimenFilter";
import TransmisionFilters from "./FilterBoxSection/TransmisionFilters";
import TravellersQFilter from "./FilterBoxSection/TravellersQFilter";
import VehicleFilters from "./FilterBoxSection/VehicleFilters";

export default function FilterBoxSection({}) {
  return (
    <aside
      className="bg-white flex flex-col w-2/12 min-w-[20rem] rounded-sm px-6 py-4 gap-6 text-xs"
      style={{ boxShadow: " 0px 0px 8.173px 0px rgba(0, 0, 0, 0.20)" }}>
      <GeneralFilters />
      <RegimenFilter />
      <TravellersQFilter />
      <TransmisionFilters />
      <VehicleFilters />
      <PricesFilters />
    </aside>
  );
}
