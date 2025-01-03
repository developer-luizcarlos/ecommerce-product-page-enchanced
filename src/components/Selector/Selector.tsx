/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable react/display-name */
"use client";

// hooks and utilities importation
import { forwardRef, useState, useImperativeHandle } from "react";

// types and interfaces
export type EventSelector = {
  getItem: () => number;
};

// icons importation
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const Selector = forwardRef<EventSelector, {}>((props, ref) => {
  const [quantity, setQuantity] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    getItem: () => {
      return quantity;
    },
  }));

  const handleIncrement = () => {
    setQuantity((previousState) => {
      return previousState + 1;
    });
  };

  const handleDecrement = () => {
    setQuantity((previousState) => {
      return previousState > 0 ? previousState - 1 : previousState;
    });
  };

  return (
    <div className="h-12 w-60 bg-gray-100 rounded overflow-hidden flex items-center justify-between">
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
