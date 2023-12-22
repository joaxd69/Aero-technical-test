import CarResult from "./ResultsSection/CarResult";

export default function ResultSection() {
  return (
    <div className="flex flex-col w-full   gap-4 text-xs">
      <section
        className="bg-white flex  w-full justify-between p-2 items-center text-blueAero"
        style={{ boxShadow: " 0px 0px 8.173px 0px rgba(0, 0, 0, 0.20)" }}>
        <h5 className=" text-sm">Resultados de tu búsqueda</h5>
        <select name="prices" id="" className="border border-primary p-2">
          <option value="">Cualquier precio</option>
          <option value="">Menor precio</option>
          <option value="">Mayor precio</option>
        </select>
      </section>
      <div className="flex flex-col gap-6">
        <CarResult />
      </div>
    </div>
  );
}
