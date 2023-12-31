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

const blogComponents: { title: string; href: string; description: string }[] = [
  {
    title: "ReactJS",
    href: "/docs/primitives/alert-dialog",
    description:
      "Powerful JavaScript library for building user interfaces with seamless interactions.",
  },
  {
    title: "NextJS",
    href: "/docs/primitives/hover-card",
    description:
      "Efficiently preview content for sighted users behind links with NextJS.",
  },
  {
    title: "Laravel",
    href: "/docs/primitives/scroll-area",
    description:
      "Visually and semantically separate content using the Laravel framework.",
  },
  {
    title: "Flutter",
    href: "/docs/primitives/tabs",
    description:
      "Create visually stunning cross-platform mobile apps with Flutter's layered content.",
  },
  {
    title: "Frameworks CSS",
    href: "/docs/primitives/tooltip",
    description:
      "Easily design and style your projects with powerful frameworks.",
  },
  {
    title: "See more",
    href: "/docs/primitives/tooltip",
    description:
      "Explore additional resources and documentation for expanding your knowledge.",
  },
];

const resourcesComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Tools and Languages",
    href: "/docs/primitives/alert-dialog",
    description:
      "Explore essential tools and programming languages to enhance your development workflow.",
  },
  {
    title: "Libraries and Frameworks",
    href: "/docs/primitives/hover-card",
    description:
      "Discover libraries and frameworks providing a visual preview for enriched content experiences.",
  },
  {
    title: "Programming Communities",
    href: "/docs/primitives/scroll-area",
    description:
      "Connect with like-minded individuals in visually and semantically diverse programming communities.",
  },
  {
    title: "Books and Documentation",
    href: "/docs/primitives/tabs",
    description:
      "Access a curated collection of layered content, organized into tab panels for efficient exploration.",
  },
];

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

export function NavigationMenuDemo() {
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
                    href="/"
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
                      HoDoanIT
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      About me
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="About me">
                Introducing myself and my inspiration for working.
              </ListItem>
              <ListItem
                href="/docs/installation"
                title="Programming Experience"
              >
                The process of learning and using programming languages.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Projects">
                Summary of projects that I have just gone through.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {blogComponents.map((value) => (
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
        </NavigationMenuItem>
        <NavigationMenuItem>
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
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {servicesComponents.map((value) => (
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
