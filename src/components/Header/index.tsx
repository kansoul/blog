"use client";

import Image from "next/image";
import ChangeDarkMode from "./ChangeDarkMode";
import { NavigationMenuDemo } from "./NavigationMenu";
import SearchButton from "./SearchButton";
import useScrollHeader from "@/hooks/useScrollHeader";
import ButtonLiner from "../ui/button-liner";
import Logo from "../Base/Logo";

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
        <Logo size="XL" />
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
