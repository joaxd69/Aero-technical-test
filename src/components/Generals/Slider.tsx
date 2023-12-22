import { useEffect, useState } from "react";
import { SliderComponentProps, BannerStateProps } from "../../interfaces";
import Banner from "../../assets/banner1.png";
import Banner2 from "../../assets/banner3-min.png";
import Banner3 from "../../assets/banner4-min.png";
export default function Slider({
  image1,
  image2,
  image3,
}: SliderComponentProps) {
  const [allowNext, setAllowNext] = useState(true);
  console.log(allowNext, image1, image2, image3, typeof setAllowNext);
  const [banner, setBanners] = useState<BannerStateProps>({
    banner1: true,
    banner2: false,
    banner3: false,
  });
  const changeBanner = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setBanners({
      banner1: false,
      banner2: false,
      banner3: false,
      [e.currentTarget.value]: true,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBanners((prevBanners: any) => {
        const bannerKeys = Object.keys(prevBanners);
        const currentBannerIndex = bannerKeys.findIndex(
          (key) => prevBanners[key]
        );

        const nextBannerIndex = (currentBannerIndex + 1) % bannerKeys.length;

        const nextBanners: any = {};
        bannerKeys.forEach((key, index) => {
          nextBanners[key] = index === nextBannerIndex;
        });

        return nextBanners;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" grow  flex  items-center relative bg-black   ">
      <div className="flex gap-2 absolute top-[20px] right-[18%] z-10">
        <button
          onClick={changeBanner}
          className={`rounded-full h-4 w-4 border border-white cursor-pointer hover:bg-[#255DC4] ${
            banner.banner1 ? "bg-primary" : "bg-transparent"
          }`}
          value={"banner1"}
        />
        <button
          onClick={changeBanner}
          className={`rounded-full h-4 w-4 border border-white cursor-pointer hover:bg-[#255DC4] ${
            banner.banner2 ? "bg-primary" : "bg-transparent"
          }`}
          value={"banner2"}
        />
        <button
          onClick={changeBanner}
          className={`rounded-full h-4 w-4 border border-white cursor-pointer hover:bg-[#255DC4] ${
            banner.banner3 ? "bg-primary" : "bg-transparent"
          }`}
          value={"banner3"}
        />
      </div>
      <div className=" w-full  h-[30rem]">
        {banner.banner1 && (
          <img
            src={Banner}
            className=" max-h-[30rem] w-full  transition-all ease-linear "
          />
        )}
        {banner.banner2 && (
          <img
            src={Banner2}
            className=" max-h-[30rem] w-full  transition-all ease-linear "
          />
        )}
        {banner.banner3 && (
          <img
            src={Banner3}
            className=" max-h-[30rem] w-full  transition-all ease-linear "
          />
        )}
      </div>
    </div>
  );
}
