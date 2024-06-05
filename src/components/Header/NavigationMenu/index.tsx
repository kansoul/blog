"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Category } from "@/types/Category";

const servicesComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Website Development",
    href: "/docs/primitives/alert-dialog",
    description:
      "Crafting dynamic and responsive websites for a seamless user experience.",
  },
  {
    title: "Web Application Development",
    href: "/docs/primitives/hover-card",
    description:
      "Building interactive web applications with modern frameworks.",
  },
  {
    title: "Flutter App Development",
    href: "/docs/primitives/scroll-area",
    description:
      "Creating visually stunning cross-platform mobile apps using Flutter.",
  },
  {
    title: "SEO and Advertisement",
    href: "/docs/primitives/tabs",
    description:
      "Optimizing online visibility through SEO and managing effective ad campaigns.",
  },
];

export function NavigationMenuMain({ categories }: { categories: Category[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/about"
                  >
                    <Image
                      src="/images/avatar.png"
                      alt="Avatar"
                      width={230}
                      height={230}
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Ho Van Doan
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      About me
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about#introduce" title="About me">
                Introducing myself and my inspiration for working.
              </ListItem>
              <ListItem href="/about#experience" title="Programming Experience">
                The process of learning and using programming languages.
              </ListItem>
              <ListItem href="/about#project" title="Projects">
                Summary of projects that I have just gone through.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {(categories || []).map((value) => (
                <ListItem
                  key={value._id}
                  title={value.name}
                  href={`/category/${value.slug}`}
                >
                  {value.description}
                </ListItem>
              ))}
              <ListItem title="See more" href={"/categories"}>
                Explore additional resources and documentation for expanding
                your knowledge.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {resourcesComponents.map((value) => (
                <ListItem
                  key={value.title}
                  title={value.title}
                  href={value.href}
                >
                  {value.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {servicesComponents.map((value) => (
                <ListItem key={value.title} title={value.title} href={"/"}>
                  {value.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href as string}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
