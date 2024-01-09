import ButtonLiner from "@/components/ui/button-liner";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex text-sm rounded-full md:me-0">
                <Image
                  width={8}
                  height={8}
                  className="object-cover w-8 h-8 rounded-full"
                  src={imageUrl}
                  alt="user photo"
                />
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div
                id="dropdownAvatar"
                className="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{session?.user?.name}</div>
                  <div className="font-medium truncate">
                    {session?.user?.email}
                  </div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                </ul>
                <div className="py-2">
                  <span
                    onClick={() => handleLogout("/")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
                  >
                    Sign out
                  </span>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
