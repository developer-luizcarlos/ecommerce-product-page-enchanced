/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable react/display-name */
"use client";

// types and interfaces
export type EventModal = {
  openModal: () => void;
  defineImageIndex: (index: number) => void;
};

// hooks and utilities importation
import { forwardRef, useImperativeHandle, useState } from "react";
import Image from "next/image";

// images importation
import productPhotos from "@/lib/productPhotos";
import photoThumbs from "@/lib/productThumbnailPhoto";

// components importation
import ProductThumbComponent from "../ProductThumb/ProductThumbComponent";

// icons importation
import { IoCloseOutline } from "react-icons/io5";
import { PiLessThan } from "react-icons/pi";
import { TbMathGreater } from "react-icons/tb";

// main component
const ModalSlider = forwardRef<EventModal, {}>(({}, ref) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false); // controls the visibility of the modal slider
  const [imageIndex, setImageIndex] = useState<number>(0); // defines the index of the shown image

  // based on the current value, increment the image index
  const handleIncrementIndex = () => {
    return setImageIndex((previousState) => {
      return previousState < 3 ? (previousState += 1) : 0;
    });
  };

  // based on the current value, decrement the image index
  const handleDecrementIndex = () => {
    return setImageIndex((previousState) => {
      return previousState > 0 ? (previousState -= 1) : 3;
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // used to pass the modal function to the page.tsx entire component
  useImperativeHandle(ref, () => ({
    openModal: () => {
      return setModalIsOpen(true);
    },
    defineImageIndex: (index: number) => {
      return setImageIndex(index);
    },
  }));

  // if false, the modal is closed or not showed
  if (!modalIsOpen) {
    return null;
  }

  return (
    <article
      onClick={closeModal}
      className="fixed top-0 left-0 bottom-0 bg-OpacityBlack bg-opacity-65 z-10 w-dvw h-dvh grid place-items-center"
    >
      <section
        className="absolute w-[430px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex flex-col gap-4">
            <div className="w-full flex items-center justify-end">
              <button
                className="text-4xl text-white font-extrabold"
                onClick={closeModal}
              >
                <IoCloseOutline />
              </button>
            </div>
            <div className="relative w-full h-[460px] rounded-md">
              <div className="absolute top-2/4 w-full flex items-center justify-between">
                <button
                  className="relative right-4 bg-LightGrayishBlue flex items-center justify-center w-9 h-9 rounded-full cursor-pointer"
                  onClick={handleDecrementIndex}
                >
                  <PiLessThan />
                </button>
                <button
                  className="relative left-4 bg-LightGrayishBlue flex items-center justify-center w-9 h-9 rounded-full cursor-pointer"
                  onClick={handleIncrementIndex}
                >
                  <TbMathGreater />
                </button>
              </div>
              <Image
                src={productPhotos[imageIndex].src}
                alt={`Product photo number 0 of four photo`}
                width={500}
                height={200}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            {photoThumbs.map((thumb, index) => {
              return (
                <ProductThumbComponent
                  key={index}
                  src={photoThumbs[index].src}
                  effect={index === imageIndex ? true : false}
                  event={() => setImageIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
});

export default ModalSlider;
