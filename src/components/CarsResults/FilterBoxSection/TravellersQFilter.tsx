export default function TravellersQFilter() {
  return (
    <section className="flex flex-col border-b border-[#B7B7B7] pb-6 gap-2">
      <h5 className="text-blueAero">Cantidad de Pasajeros</h5>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="AllTravellersCheck"
        />
        <label htmlFor="AllTravellersCheck">Todas las opciones</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="TwoTravellersCheck"
        />
        <label htmlFor="TwoTravellersCheck">2 pasajeros</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="FourTravellersCheck"
        />
        <label htmlFor="FourTravellersCheck">4 pasajeros</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="FiveTravellersCheck"
        />
        <label htmlFor="FiveTravellersCheck">5 pasajeros</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="SevenTravellersCheck"
        />
        <label htmlFor="SevenTravellersCheck">7 pasajeros</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="TwelveTravellersCheck"
        />
        <label htmlFor="TwelveTravellersCheck">12 pasajeros</label>
      </article>
    </section>
  );
}
