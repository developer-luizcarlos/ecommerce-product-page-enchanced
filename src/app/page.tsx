"use client";

// hooks and utilities importation
import { useState } from "react";
import Image from "next/image";

// images importation
import productPhotos from "@/lib/productPhotos";
import photoThumbs from "@/lib/productThumbnailPhoto";

// components importation
import ProductThumbComponent from "@/components/ProductThumb/ProductThumbComponent";

const Home = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  return (
    <>
      <main className="w-full grid grid-cols-2 place-items-center my-10">
        <aside className="w-full flex flex-col items-center justify-center gap-5">
          <Image
            src={productPhotos[imageIndex]}
            alt={`Product photo number ${imageIndex} of four`}
            className="w-[70%] h-[390px] object-cover rounded-md"
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
      </main>
    </>
  );
};

export default Home;
