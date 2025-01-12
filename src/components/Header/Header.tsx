"use client";

// hooks and utilities importation
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// components importation
import Cart from "../Cart/Cart";

// images importation
import Logo from "../../../public/images/logo.svg";
import Avatar from "../../../public/images/image-avatar.png";

// icons importation
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

// global context importation
import { Context } from "@/context/Context";

const Header = () => {
  const { productState } = useContext(Context)!;

  // state that define if the cart component is being shown or not
  const [cartVisibility, setCartVisibility] = useState<boolean>(false);

  // function that manages the cart visibility state
  const defineCartVisibility = () => {
    setCartVisibility((previousState) => {
      return !previousState;
    });
  };

  return (
    <header className="relative flex items-stretch justify-between px-6 md:px-0 h-24 w-full border-b-2 border-b-LightGrayishBlue">
      <Cart visible={cartVisibility} />
      <nav className="flex items-center gap-5 md:gap-8">
        <button className="md:hidden text-lg cursor-pointer">
          <RxHamburgerMenu />
        </button>
        <Link href="/">
          <Image src={Logo} alt="Logo sneakers" width={200} height={200} />
        </Link>
        <ul className="h-full hidden md:flex items-center justify-center gap-5 text-DarkGrayishBlue font-medium">
          <Link
            href="/collections"
            className="relative h-full flex items-center after:absolute after:-bottom-[1px] after:w-0 after:h-1 after:bg-Orange after:duration-150 after:ease-in-out hover:after:w-full hover:text-VeryDarkBlue"
          >
            Collections
          </Link>
          <Link
            href="/men"
            className="relative h-full flex items-center after:absolute after:-bottom-[1px] after:w-0 after:h-1 after:bg-Orange after:duration-150 after:ease-in-out hover:after:w-full hover:text-VeryDarkBlue"
          >
            Men
          </Link>
          <Link
            href="/women"
            className="relative h-full flex items-center after:absolute after:-bottom-[1px] after:w-0 after:h-1 after:bg-Orange after:duration-150 after:ease-in-out hover:after:w-full hover:text-VeryDarkBlue"
          >
            Women
          </Link>
          <Link
            href="/about"
            className="relative h-full flex items-center after:absolute after:-bottom-[1px] after:w-0 after:h-1 after:bg-Orange after:duration-150 after:ease-in-out hover:after:w-full hover:text-VeryDarkBlue"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="relative h-full flex items-center after:absolute after:-bottom-[1px] after:w-0 after:h-1 after:bg-Orange after:duration-150 after:ease-in-out hover:after:w-full hover:text-VeryDarkBlue"
          >
            Contact
          </Link>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <button className="relative" onClick={defineCartVisibility}>
          <CiShoppingCart className="text-3xl" />
          <span
            className={
              productState.quantity > 0
                ? "absolute h-5 w-5 rounded-md flex items-center justify-center -top-4 -right-2 bg-Orange text-sm text-white"
                : "hidden"
            }
          >
            {productState.quantity}
          </span>
        </button>
        <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-transparent cursor-pointer hover:duration-150 hover:ease-in-out hover:border-Orange">
          <Image
            src={Avatar}
            alt="Client profile photo"
            width={44}
            height={44}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
