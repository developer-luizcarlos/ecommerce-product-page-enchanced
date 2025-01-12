// hooks and utilities importation
import { useState } from "react";
import Image from "next/image";

// images importation
import productPhotos from "@/lib/productPhotos";

// icons importation
import { PiLessThan } from "react-icons/pi";
import { TbMathGreater } from "react-icons/tb";

const MobileSlider = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleIncrementIndex = () => {
    return setImageIndex((previousState) => {
      return previousState < productPhotos.length - 1 ? (previousState += 1) : 0;
    });
  };

  const handleDecrementIndex = () => {
    return setImageIndex((previousState) => {
      return previousState > 0 ? (previousState -= 1) : productPhotos.length - 1;
    });
  };

  return (
    <article className="md:hidden h-[400px] w-full relative">
      <div className="w-full h-full absolute flex items-center justify-between">
        <button
          onClick={handleDecrementIndex}
          className="relative -right-4 bg-LightGrayishBlue flex items-center justify-center w-9 h-9 rounded-full cursor-pointer">
          <PiLessThan />
        </button>
        <button
          onClick={handleIncrementIndex}
          className="relative -left-4 bg-LightGrayishBlue flex items-center justify-center w-9 h-9 rounded-full cursor-pointer">
          <TbMathGreater />
        </button>
      </div>
      <Image src={productPhotos[imageIndex].src} alt={`Product image`} width={500} height={500} className="w-full h-full object-cover" />
    </article>
  );
};

export default MobileSlider;