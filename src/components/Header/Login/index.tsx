"use client";

import ButtonLiner from "@/components/ui/button-liner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { API_URL } from "@/config";
import useLogout from "@/hooks/useLogout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const { data: session, status } = useSession();

  const { handleLogout } = useLogout();

  if (status === "loading") return <div className="w-[115px]" />;

  const imageUrl = session?.user.avatar
    ? `${API_URL as string}/media/${session?.user.avatar}`
    : "/icons/avatar-icon.svg";

  return !session?.user ? (
    <Link href={"/auth/login"}>
      <ButtonLiner className="hidden lg:block">Login</ButtonLiner>
    </Link>
  ) : (
    <div className="relative w-[115px] hidden lg:block">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <div className="flex text-sm rounded-full md:me-0">
            <Image
              width={8}
              height={8}
              className="object-cover w-8 h-8 rounded-full"
              src={imageUrl}
              alt="user photo"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto">
          <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/admin/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/admin/user/setting">Setting</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/admin/contact">Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span onClick={() => handleLogout("/")}>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
