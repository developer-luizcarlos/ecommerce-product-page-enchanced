"use client";

// hooks and utilities importation
import { useContext } from "react";
import Image from "next/image";

// global context importation
import { Context } from "@/context/Context";

// components importation
import Button from "../Button/Button";

// images importation
import ProductThumb from "../../../public/images/image-product-1-thumbnail.jpg";

// icons importation
import { GoTrash } from "react-icons/go";

const FilledCart = () => {
  const { productState, productDispatch } = useContext(Context)!;

  const formatedPrice = (productState.quantity * 125).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <article className="w-full h-full px-4 py-5">
      <section className="flex items-center justify-between w-full mb-4">
        <Image
          src={ProductThumb}
          alt="Product small photo"
          width={30}
          height={30}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="text-DarkGrayishBlue text-base  font-normal">
          <h3 className="capitalize">Fall Limited Edition Sneakers</h3>
          <small className="text-base flex items-center gap-2">
            {`$125 x ${productState.quantity}`}
            <span className="text-VeryDarkBlue font-semibold">
              {formatedPrice}
            </span>
          </small>
        </div>
        <button
          className="text-xl"
          onClick={() => productDispatch({ type: "RESET" })}
        >
          <GoTrash />
        </button>
      </section>
      <Button text="checkout" />
    </article>
  );
};

export default FilledCart;
