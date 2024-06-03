import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Breadcrumb({
  breads,
}: {
  breads: {
    value: string;
    url: string;
  }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex items-center">
        <li className="">
          <span>
            <Link
              href="/"
              title="Go to Homepage"
              className="flex items-center text-sm font-medium text-[#708ab0] hover:text-blue-600"
            >
              <Image
                src={"/icons/home.svg"}
                alt={"Home"}
                width={24}
                height={24}
                className="mr-2 max-w-fit"
              />
              <p>Home</p>
            </Link>
          </span>
        </li>
        {breads.map((bread, index) => (
          <li key={bread?.value} className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            {index === breads.length - 1 ? (
              <span className="ms-1 text-sm font-medium text-[#708ab0] md:ms-2">
                {bread?.value}
              </span>
            ) : (
              <Link
                href={bread.url}
                title={bread?.value}
                className="ms-1 text-sm font-medium text-[#708ab0] hover:text-blue-600 md:ms-2"
              >
                <span>{bread?.value}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
