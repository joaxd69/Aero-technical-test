import { Iicon } from "../../../Icons";

export default function CharacteristicsResults() {
  return (
    <div className="w-full flex gap-2 bg-white p-6 ">
      <section className="flex w-1/3 grow ">
        <article>
          <h3>Chevrolet Onix o similar</h3>
          <div className="flex">
            <p>
              <span>Aire acondicionado</span>
            </p>
            <p>
              <span>Caja automática</span>
            </p>
          </div>
        </article>
      </section>

      <section className="flex w-1/3 grow ">
        <p>
          <b>Incluye:</b>
          <span>
            Conductor adicional | Cobertura por daño y/o robo | Impuestos |
            Extensión de responsabilidad civil | Kilometraje ilimitado | Tanque
            de combustible
          </span>
        </p>
      </section>
      <section className="flex flex-col w-1/3 grow ">
        <article>
          <span>Precio total</span>
          <Iicon />
        </article>
        <article>
          <h3>USD 524.78</h3>
          <span>(+45.14 imp)</span>
        </article>
        <p>
          Precio por dia :<b>USD 524.78</b>
        </p>
      </section>
    </div>
  );
}
