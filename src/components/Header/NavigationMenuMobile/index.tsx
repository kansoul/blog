"use client";

import Link from "next/link";
import * as React from "react";
interface props {
  isOpenMenuMobile: boolean;
  setIsOpenMenuMobile: (value: boolean) => void;
}

const menuList: { title: string; href: string }[] = [
  {
    title: "ReactJS",
    href: "/category",
  },
  {
    title: "NextJS",
    href: "/category",
  },
  {
    title: "Laravel",
    href: "/category",
  },
  {
    title: "Flutter",
    href: "/category",
  },
  {
    title: "Frameworks CSS",
    href: "/category",
  },
  {
    title: "See more",
    href: "/blogs",
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
        >
          {value.title}
        </Link>
      ))}
    </div>
  );
}
