"use client";

import { NavigationMenuMobile } from "@/components/Header/NavigationMenuMobile";
import useScrollHeader from "@/hooks/useScrollHeader";
import Link from "next/link";
import Logo from "../Base/Logo";
import ButtonLiner from "../ui/button-liner";
import ChangeDarkMode from "./ChangeDarkMode";
import { NavigationMenuMain } from "./NavigationMenu";
import SearchButton from "./SearchButton";
import { useEffect, useState } from "react";

export default function Header() {
  const scrolling = useScrollHeader();
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenMenuMobile) {
      // document.body.addEventListener("click", closeSidemenu);
      document.body.classList.add("!overflow-hidden");
    } else {
      document.body.classList.remove("!overflow-hidden");
    }
  }, [isOpenMenuMobile]);

  return (
    <header className="h-[105px] relative z-50">
      <div
        className={`bg-[#F9FBFF] dark:bg-[#0F172A] pt-[15px] ${
          scrolling
            ? "header-scroll border-b border-b-[#e9eef5] dark:border-b-[#222f43]"
            : ""
        }`}
      >
        <div className="container flex justify-between items-center mx-auto p-4">
          <Logo size="XL" />
          <nav className="hidden justify-between items-center w-[65%] lg:flex lg:w-auto lg:order-1 ">
            <NavigationMenuMain />
          </nav>
          <div className="flex items-end justify-end lg:items-center w-full max-w-[225px] lg:order-2">
            <SearchButton />
            <ChangeDarkMode />
            <Link href={"/login"}>
              <ButtonLiner className="hidden lg:block">Login</ButtonLiner>
            </Link>
          </div>
          <div
            className="burger-icon-mobile "
            onClick={() => setIsOpenMenuMobile(true)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
          <NavigationMenuMobile
            isOpenMenuMobile={isOpenMenuMobile}
            setIsOpenMenuMobile={setIsOpenMenuMobile}
          />
          <div
            onClick={() => setIsOpenMenuMobile(false)}
            className={`transition-all ${
              isOpenMenuMobile
                ? "fixed bg-[#0000008a] top-0 left-0 h-full w-full z-[1] right-0 opacity-1 visible"
                : "opacity-0 invisible"
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
}
