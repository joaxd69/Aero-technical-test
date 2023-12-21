export default function RegimenFilter() {
  return (
    <section className="flex flex-col border-b border-[#B7B7B7] pb-6 gap-2">
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="AllregimensCheck"
        />
        <label htmlFor="AllregimensCheck ">Todos los regímenes</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="AvisCheck"
        />
        <label htmlFor="AvisCheck">Avis</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="BudgetCheck"
        />
        <label htmlFor="BudgetCheck">Budget</label>
      </article>
      <article className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-2 bg-black accent-primary  cursor-pointer "
          name=""
          id="DollarCheck"
        />
        <label htmlFor="DollarCheck">Dollar</label>
      </article>
    </section>
  );
}
