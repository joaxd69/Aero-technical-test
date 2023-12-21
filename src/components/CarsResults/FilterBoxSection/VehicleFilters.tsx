export default function VehicleFilters() {
  return (
    <section className="flex flex-col border-b border-[#B7B7B7] pb-6 gap-2">
      <h5 className="">Tipo de vehiculos</h5>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="AllVehiclesCheck"
        />
        <label htmlFor="AllVehiclesCheck">Todas las opciones</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="CompactsCheck"
        />
        <label htmlFor="CompactsCheck">Compactos</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="EconomicsCheck"
        />
        <label htmlFor="EconomicsCheck">Economicos</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="BigVehiclesCheck"
        />
        <label htmlFor="BigVehiclesCheck">Grandes</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="IntermedyCheck"
        />
        <label htmlFor="IntermedyCheck">Intermedios</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="LuxuryCheck"
        />
        <label htmlFor="LuxuryCheck">Lujosos</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="MiniVansCheck"
        />
        <label htmlFor="MiniVansCheck">Mini vans</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="PickUpCheck"
        />
        <label htmlFor="PickUpCheck">Pickups</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="DeportiveConvertibleCheck"
        />
        <label htmlFor="DeportiveConvertibleCheck">
          Deportivos y convertibles
        </label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="StandardCheck"
        />
        <label htmlFor="StandardCheck">Standard</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="TruckCheck"
        />
        <label htmlFor="TruckCheck">Camionetas</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="BigTruckCheck"
        />
        <label htmlFor="BigTruckCheck">Camionetas grandes</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="VansCheck"
        />
        <label htmlFor="VansCheck">Vans</label>
      </article>
    </section>
  );
}
