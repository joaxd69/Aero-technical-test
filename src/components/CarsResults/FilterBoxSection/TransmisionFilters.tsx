export default function TransmisionFilters() {
  return (
    <section className="flex flex-col border-b border-[#B7B7B7] pb-6 gap-2">
      <h5 className="text-blueAero">Tipo de transmisión</h5>
      <article className="flex items-center gap-2">
        <input
          type="radio"
          name="TransmitionsGroups"
          className="p-2 bg-black accent-primary  cursor-pointer "
          id="AllTransmitionsCheck"
        />
        <label htmlFor="AllTransmitionsCheck">Todas </label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="radio"
          name="TransmitionsGroups"
          className="p-2 bg-black accent-primary  cursor-pointer "
          id="ManualTransmitionsCheck"
        />
        <label htmlFor="ManualTransmitionsCheck">Manual </label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="radio"
          name="TransmitionsGroups"
          className="p-2 bg-black accent-primary  cursor-pointer "
          id="AutoTransmitionsCheck"
        />
        <label htmlFor="AutoTransmitionsCheck">Auto </label>
      </article>
    </section>
  );
}
