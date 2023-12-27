"use client";

import Image from "next/image";
import ChangeDarkMode from "./ChangeDarkMode";
import { NavigationMenuDemo } from "./NavigationMenu";
import SearchButton from "./SearchButton";
import useScrollHeader from "@/hooks/useScrollHeader";
import ButtonLiner from "../ui/button-liner";

export default function Header() {
  const scrolling = useScrollHeader();
  return (
    <header
      className={`bg-[#F9FBFF] dark:bg-[#0F172A] pt-[15px] ${
        scrolling
          ? "header-scroll border-b border-b-[#e9eef5] dark:border-b-[#222f43]"
          : ""
      }`}
    >
      <div className="container flex justify-between items-center mx-auto p-4">
        <div className="w-full max-w-[230px] flex items-center">
          <Image src="/logo.svg" width={56} height={56} alt="HoDoanIT Logo" />
          <span className="self-center text-xl lg:text-3xl font-black text-gray-500 whitespace-nowrap dark:text-white ml-1">
            Doan IT
          </span>
        </div>
        <nav className="hidden justify-between items-center w-[65%] lg:flex lg:w-auto lg:order-1 ">
          <NavigationMenuDemo />
        </nav>
        <div className="flex items-end justify-end lg:items-center w-full max-w-[225px] lg:order-2">
          <SearchButton />
          <ChangeDarkMode />
          <ButtonLiner className="hidden lg:block">Login</ButtonLiner>
        </div>
      </div>
    </header>
  );
}
