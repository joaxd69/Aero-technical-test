import CharacteristicsResults from "./CharacteristicsResults";
import HeaderCarResult from "./HeaderCarResult";

export default function CarResult() {
  return (
    <>
      <div className="w-full bg-white shadow-containerShadow flex-col flex">
        <HeaderCarResult />
      </div>
      <section className="flex gap-1 bg-white py-3 border-b border-primary">
        <button>HERTZ</button>
        <button>DOLLAR DIAMOND</button>
        <button>AVIS</button>
        <button>BUDGET</button>
        <button>NATIONAL</button>
      </section>
      <CharacteristicsResults />
    </>
  );
}
