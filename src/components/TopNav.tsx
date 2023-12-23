import {
  AeroLogo,
  AirPlaneIcon,
  CartIcon,
  MenuIcon,
  PersonFaceIcon,
} from "../Icons";
import bcertificate from "../assets/B-certificate.png";
export default function TopNav() {
  return (
    <div className="flex w-full gap-4 justify-between  items-center bg-white h-[4rem] text-sm ">
      <section className="flex items-center gap-6 pl-5">
        <article>
          <MenuIcon />
        </article>
        <article>
          <AeroLogo />
        </article>
        <figure className="h-[3rem] w-0.5 rounded-full bg-primary" />
        <article>
          <img src={bcertificate} className=" h-[3rem]" alt="" />
        </article>
      </section>
      <section className="flex gap-4   ">
        <div className="flex text-sm flex-col border-r-[0.2rem]  border-[#C3C4C4] px-2 ">
          <p>Cotización del dia:</p>
          <span className="font-bold">$ 56 Dólar BSP</span>
        </div>
        <div className="flex items-center gap-2 border-r-[0.2rem]    border-[#C3C4C4] px-2 ">
          <AirPlaneIcon />
          <span className="font-bold">Aéreos</span>
        </div>
        <div className="flex items-center gap-2 border-r-[0.2rem]    border-[#C3C4C4] px-2 ">
          <PersonFaceIcon />
          <span className="font-bold text-[#FC5945]">Guardias</span>
        </div>
        <div className="flex items-center gap-2 text-[#A8A8A8] border-r-[0.2rem]    border-[#C3C4C4] px-2 ">
          <CartIcon />
          <span className="font-bold">Carrito : USD 0.00</span>
        </div>
      </section>
    </div>
  );
}
