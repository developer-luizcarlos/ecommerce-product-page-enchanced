"use client";

// hooks and utilities importation
import { useContext } from "react";

// components importation
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

// global context importation
import { Context } from "@/context/Context";

const Cart = () => {
  const { productState } = useContext(Context)!;

  return (
    <article className="w-[360px] z-10 absolute -bottom-56 right-0 bg-white shadow-xl shadow-zinc-300 rounded-md">
      <header className="p-4 text-xl font-bold capitalize border-b-[1px] border-b-zinc-200">
        <h2>Cart</h2>
      </header>
      <div className="h-40">
        {productState.quantity > 0 ? <FilledCart /> : <EmptyCart />}
      </div>
    </article>
  );
};

export default Cart;
