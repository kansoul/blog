"use client";

import Link from "next/link";
import * as React from "react";
interface props {
  isOpenMenuMobile: boolean;
  setIsOpenMenuMobile: (value: boolean) => void;
}

const menuList: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Me",
    href: "/about",
  },
  {
    title: "Categories",
    href: "/categories",
  },
  {
    title: "Services",
    href: "/",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function NavigationMenuMobile({
  isOpenMenuMobile,
  setIsOpenMenuMobile,
}: props) {
  return (
    <div
      className={`transition-all nav-menu-mobile fixed top-0 right-0 h-screen bg-[#f9fbff] w-full max-w-80 z-10 px-5 py-7 ${
        isOpenMenuMobile
          ? "translate-x-0 visible opacity-1"
          : "translate-x-full opacity-0 invisible"
      }`}
    >
      {menuList.map((value) => (
        <Link
          className="block p-3 text-[#66768f]"
          key={value.title}
          href={value.href}
          onClick={() => setIsOpenMenuMobile(false)}
        >
          {value.title}
        </Link>
      ))}
    </div>
  );
}
