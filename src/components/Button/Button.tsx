// types and interfaces
interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="w-full h-12 bg-Orange text-VeryDarkBlue text-base font-bold capitalize border-none rounded-md">
      {text}
    </button>
  );
};

export default Button;
