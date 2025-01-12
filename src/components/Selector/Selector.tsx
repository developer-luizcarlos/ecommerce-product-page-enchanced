/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable react/display-name */
"use client";

// hooks and utilities importation
import {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  useContext,
} from "react";

// types and interfaces
export type EventSelector = {
  getItem: () => number;
};

// global context importation
import { Context } from "@/context/Context";

// icons importation
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const Selector = forwardRef<EventSelector, {}>((props, ref) => {
  const { productState } = useContext(Context)!;

  const [quantity, setQuantity] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    getItem: () => {
      return quantity;
    },
  }));

  const handleIncrement = () => {
    return setQuantity((previousState) => {
      return previousState + 1;
    });
  };

  const handleDecrement = () => {
    return setQuantity((previousState) => {
      return previousState > 0 ? previousState - 1 : previousState;
    });
  };

  const handleResetQuantity = () => {
    return setQuantity(0);
  };

  useEffect(() => {
    if (productState.quantity === 0) {
      handleResetQuantity();
    }
  }, [productState.quantity]);

  return (
    <div className="h-12 w-full md:w-52 bg-gray-100 rounded overflow-hidden flex items-center justify-between">
      <button
        onClick={handleDecrement}
        className="w-11 h-full text-Orange flex items-center justify-center"
      >
        <FiMinus />
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-full h-full bg-transparent text-center text-black font-medium border-none outline-none"
      />
      <button
        onClick={handleIncrement}
        className="w-11 h-full text-Orange flex items-center justify-center"
      >
        <GoPlus />
      </button>
    </div>
  );
});

export default Selector;
