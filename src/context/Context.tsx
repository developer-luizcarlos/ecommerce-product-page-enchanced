"use client";

import { createContext, ReactNode, useReducer } from "react";

// types and interfaces
interface ContextComponentProps {
  children: ReactNode;
}

type Action = { type: "SET"; payload: number } | { type: "RESET" };

type ProductQuantityType = { quantity: number };

type ContextType = {
  productState: ProductQuantityType;
  productDispatch: React.Dispatch<Action>;
};

// reducer initial value
const ProductQuantity: ProductQuantityType = { quantity: 0 };

// reducer management function
const ProductReducer = (state: ProductQuantityType, action: Action) => {
  switch (action.type) {
    case "SET":
      return {
        quantity: action.payload,
      };
    case "RESET":
      return {
        quantity: 0,
      };
    default:
      return state;
  }
};

// context creation
export const Context = createContext<ContextType | null>(null);

const ContextComponent = ({ children }: ContextComponentProps) => {
  const [productState, productDispatch] = useReducer(
    ProductReducer,
    ProductQuantity
  );

  return (
    <Context.Provider value={{ productState, productDispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextComponent;
