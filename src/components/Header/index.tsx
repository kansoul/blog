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
import { SessionProvider } from "next-auth/react";
import Login from "./Login";
import { Category } from "@/types/Category";

export default function Header({ categories }: { categories: Category[] }) {
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
    <SessionProvider>
      <header className="h-[105px] relative z-50">
        <div
          className={`pt-[15px] ${
            scrolling
              ? "header-scroll border-b border-b-[#e9eef5] dark:border-b-[#222f43] bg-[#F9FBFF] dark:bg-[#0F172A] "
              : "bg-transparent"
          }`}
        >
          <div className="container flex justify-between items-center mx-auto p-4">
            <Logo size="XL" />
            <nav className="hidden justify-between items-center w-[65%] lg:flex lg:w-auto lg:order-1 ">
              <NavigationMenuMain categories={categories} />
            </nav>
            <div className="flex items-end justify-end lg:items-center max-w-[225px] lg:order-2">
              <SearchButton />
              <ChangeDarkMode />
              <Login />
              <div
                className="burger-icon-mobile block lg:hidden"
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
            </div>

            <NavigationMenuMobile
              isOpenMenuMobile={isOpenMenuMobile}
              setIsOpenMenuMobile={setIsOpenMenuMobile}
            />
            {isOpenMenuMobile && (
              <div
                onClick={() => setIsOpenMenuMobile(false)}
                className={`transition-all ${
                  isOpenMenuMobile
                    ? "fixed bg-[#0000008a] top-0 left-0 h-full w-full z-[1] right-0 opacity-1 visible"
                    : "opacity-0 invisible"
                }`}
              />
            )}
          </div>
        </div>
      </header>
    </SessionProvider>
  );
}
