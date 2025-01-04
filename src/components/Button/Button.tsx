// hooks and utilities
import { MouseEventHandler, ReactElement } from "react";

// types and interfaces
interface ButtonProps {
  text: string;
  icon?: ReactElement;
  event?: MouseEventHandler;
}

const Button = ({ text, icon, event }: ButtonProps) => {
  return (
    <button
      onClick={event}
      className="w-full h-12 flex items-center justify-center gap-4 bg-Orange text-VeryDarkBlue text-base font-bold capitalize border-none rounded-md"
    >
      {icon ? icon : ""}
      {text}
    </button>
  );
};

export default Button;
