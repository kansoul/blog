"use client";

import Image from "next/image";
import ChangeDarkMode from "./ChangeDarkMode";
import { NavigationMenuDemo } from "./NavigationMenu";
import SearchButton from "./SearchButton";
import useScrollHeader from "@/hooks/useScrollHeader";

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
      <div className="flex justify-between items-center mx-auto max-w-[1360px] p-4">
        <div className="w-full max-w-[230px] flex items-center">
          <Image src="/logo.svg" width={56} height={56} alt="HoDoanIT Logo" />
          <span className="self-center text-3xl font-black text-gray-500 whitespace-nowrap dark:text-white ml-1">
            Doan IT
          </span>
        </div>
        <nav className="hidden justify-between items-center w-[65%] lg:flex lg:w-auto lg:order-1 ">
          <NavigationMenuDemo />
        </nav>
        <div className="flex items-center w-full max-w-[225px] lg:order-2">
          <SearchButton />
          <ChangeDarkMode />
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
