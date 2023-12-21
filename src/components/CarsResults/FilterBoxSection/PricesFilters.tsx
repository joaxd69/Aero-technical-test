export default function PricesFilters() {
  return (
    <section className="flex flex-col  gap-2">
      <article>
        <h3 className="font-bold text-lg">Precio total</h3>
      </article>
      <article>
        <span className=" italic ">Rango de precios en USD</span>
      </article>
      <div className="w-full flex justify-between">
        <article className="flex flex-col ">
          <span>Minimo</span>
          <input type="number" className="border p-2 w-7/12" />
        </article>

        <article className="flex  justify-center    ">
          <div className="flex flex-col items-end  w-fit">
            <span className="w-7/12">Maximo</span>
            <input type="number" className="border p-2 w-7/12 " />
          </div>
        </article>
      </div>
      <input type="range" min="0" max="100" />
    </section>
  );
}
