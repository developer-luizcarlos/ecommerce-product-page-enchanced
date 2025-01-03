// hooks and utilities importation
import { MouseEventHandler } from "react";
import Image, { StaticImageData } from "next/image";

// types and interfaces
interface ProductThumbProps {
  src: StaticImageData | string;
  effect: boolean;
  event: MouseEventHandler;
}

const ProductThumbComponent = ({ src, effect, event }: ProductThumbProps) => {
  return (
    <div
      onClick={event}
      className={
        effect
          ? "relative border-2 border-Orange h-24 w-24 overflow-hidden rounded-md cursor-pointer show-on-hover-child"
          : "relative h-24 w-24 overflow-hidden rounded-md cursor-pointer show-on-hover-child"
      }
    >
      <div
        className={
          effect
            ? "absolute top-0 left-0 h-full w-full bg-zinc-100 bg-opacity-55"
            : "absolute top-0 left-0 h-0 duration-150 ease-in-out w-full bg-zinc-100 bg-opacity-55 z-40"
        }
      ></div>
      <Image
        src={src}
        alt="product thumbnail"
        width={96}
        height={96}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProductThumbComponent;
