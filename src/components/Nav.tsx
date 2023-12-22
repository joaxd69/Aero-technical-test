import {
  AirPlaneIcon2,
  BagIcon,
  BoatIcon,
  BusIcon,
  CarIcon,
  DisneyIcon,
  HotelIcon,
  MedicineKitIcon,
  PointLocationIcon,
  SuitCaseIcon,
} from "../Icons";

export default function Nav() {
  return (
    <nav className=" bg-primary w-full text-white flex   gap-4 h-[3rem] pl-6  ">
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <AirPlaneIcon2 />
        <span>Vuelos</span>
      </button>
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <HotelIcon />
        <span>Hoteles</span>
      </button>
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <SuitCaseIcon />
        <span>Paquetes</span>
      </button>
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <BusIcon />
        <span>Traslados</span>
      </button>
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <MedicineKitIcon />
        <span>Asistencias</span>
      </button>
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <BagIcon />
        <span>Actividades</span>
      </button>
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <PointLocationIcon />
        <span>Circuitos</span>
      </button>
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <CarIcon />
        <span>Autos</span>
      </button>
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <BoatIcon />
        <span>Cruceros</span>
      </button>
      <button className=" flex   items-center px-3 gap-1 hover:bg-[#002F84]">
        <DisneyIcon />
        <span>Disney</span>
      </button>
    </nav>
  );
}
