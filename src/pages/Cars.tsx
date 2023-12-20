import {
  ArrowRight,
  BedIcon,
  Boat2,
  NewsIcon,
  ParkGameIcon,
  TrainIcon,
} from "../Icons";
import Boxtools from "../components/Cars/Boxtools";
import SearchBox from "../components/Cars/SearchBox";
import Slider from "../components/Generals/Slider";

export default function Cars() {
  return (
    <div className="flex flex-col w-full px-8  gap-6">
      <div className="flex w-full  justify-between gap-4   ">
        <SearchBox />
        <Slider />
      </div>

      <div className="flex gap-5 flex-wrap  text-lg">
        <section className=" w-[10rem]  flex flex-col">
          <h3 className="font-bold text-xl">
            ¡Descubrí más herramientas Aero!
          </h3>
          <article className="flex w-8/12 min-w-[5rem] justify-between">
            <ArrowRight opacity="0.5" />
            <ArrowRight opacity="0.5" />
            <ArrowRight opacity="0.5" />
          </article>
        </section>
        <Boxtools title="PRICE SURFER">
          <BedIcon />
        </Boxtools>
        <Boxtools title="PARQUES">
          <ParkGameIcon />
        </Boxtools>
        <Boxtools title="CRUCEROS">
          <Boat2 />
        </Boxtools>
        <Boxtools title="TRENES">
          <TrainIcon />
        </Boxtools>
        <Boxtools title="NEWS">
          <NewsIcon />
        </Boxtools>
      </div>
    </div>
  );
}
