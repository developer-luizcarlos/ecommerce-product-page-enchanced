"use client";

// types and interfaces
import { EventSelector } from "@/components/Selector/Selector";
import { EventModal } from "@/components/ModalSlider/ModalSlider";

// hooks and utilities importation
import { useState, useRef, useContext } from "react";
import Image from "next/image";

// images importation
import productPhotos from "@/lib/productPhotos";
import photoThumbs from "@/lib/productThumbnailPhoto";

// components importation
import ProductThumbComponent from "@/components/ProductThumb/ProductThumbComponent";
import Selector from "@/components/Selector/Selector";
import Button from "@/components/Button/Button";
import ModalSlider from "@/components/ModalSlider/ModalSlider";
import MobileSlider from "@/components/mobileSlider/mobileSlider";

// global context importation
import { Context } from "@/context/Context";

// icons importation
import { IoMdCart } from "react-icons/io";

const Home = () => {
  // global context usage
  const { productDispatch } = useContext(Context)!;

  const [imageIndex, setImageIndex] = useState<number>(0);

  // refs
  const selectorRef = useRef<EventSelector>(null);
  const modalRef = useRef<EventModal>(null);

  const showModal = () => {
    modalRef.current!.defineImageIndex(imageIndex);
    modalRef.current!.openModal();
  };

  return (
    <>
      <ModalSlider ref={modalRef} />
      <main className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center md:my-10">
        <aside className="w-full hidden lg:flex flex-col items-center justify-center gap-5">
          <Image
            src={productPhotos[imageIndex]}
            alt={`Product photo number ${imageIndex} of four`}
            className="w-[70%] h-[390px] object-cover rounded-md"
            onClick={showModal}
          />
          <div className="w-[70%] flex gap-4 items-center justify-between">
            {photoThumbs.map((thumb, index) => {
              return (
                <ProductThumbComponent
                  key={index}
                  src={thumb.src}
                  effect={index == imageIndex ? true : false}
                  event={() => setImageIndex(index)}
                />
              );
            })}
          </div>
        </aside>
        <MobileSlider />
        <section className="flex flex-col px-8 pt-4 justify-center gap-7">
          <header className="flex flex-col gap-3">
            <h3 className="uppercase text-DarkGrayishBlue text-sm font-bold tracking-wide">
              sneaker company
            </h3>
            <h1 className="capitalize text-VeryDarkBlue text-4xl font-bold">
              fall limited edition
              <br />
              sneakers
            </h1>
          </header>
          <p className="text-DarkGrayishBlue text-justify leading-relaxed">
            He then still sent guessing from expressing faster a till. Dream
            something by tempest of prophet ancient till upon was, velvet
            entreating this in morrow clasp mien enchanted grim. From engaged
            god ghastly moment spoken quaint bleak. Back i cushions shadow more
            forgotten token. Lamplight.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-7">
              <span className="text-VeryDarkBlue text-3xl font-bold">
                $125.00
              </span>
              <span className="px-4 py-1 bg-black text-white text-base font-medium rounded">
                50%
              </span>
            </div>
            <small className="text-DarkGrayishBlue text-base font-medium line-through">
              $250.00
            </small>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <Selector ref={selectorRef} />
            <Button
              text="Add to cart"
              icon={<IoMdCart />}
              event={() =>
                productDispatch({
                  type: "SET",
                  payload: selectorRef.current!.getItem(),
                })
              }
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
