export default function GeneralFilters() {
  return (
    <section className="flex flex-col gap-4">
      <h5>General</h5>
      <label htmlFor="" className=" text-blueAeroFont">
        Edad del conductor
      </label>
      <select
        name="age-driver"
        id=""
        className="border border-[#B7B7B7] p-2 cursor-pointer ">
        <option value="">Todos</option>
        <option value="">Entre 21 y 24</option>
        <option value="">Entre 25 y 29</option>
        <option value="">Entre 30 y 39</option>
      </select>
      <label htmlFor="OperateName" className=" text-blueAeroFont">
        Operadores
      </label>
      <div>
        <input
          type="text"
          placeholder="Buscar operadores por nombre"
          className=" border border-[#B7B7B7] p-2 w-full" 
        />
      </div>
    </section>
  );
}
