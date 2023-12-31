"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SearchButton() {
  return (
    <div className="me-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <g clipPath="url(#clip0_1_948)">
              <path
                d="M19.78 19.5L13.78 13.5M15.78 8.5C15.78 9.41925 15.5989 10.3295 15.2472 11.1788C14.8954 12.0281 14.3798 12.7997 13.7297 13.4497C13.0797 14.0998 12.3081 14.6154 11.4588 14.9672C10.6095 15.3189 9.69928 15.5 8.78003 15.5C7.86078 15.5 6.95053 15.3189 6.10125 14.9672C5.25197 14.6154 4.48029 14.0998 3.83028 13.4497C3.18027 12.7997 2.66466 12.0281 2.31287 11.1788C1.96109 10.3295 1.78003 9.41925 1.78003 8.5C1.78003 6.64348 2.51753 4.86301 3.83028 3.55025C5.14304 2.2375 6.92351 1.5 8.78003 1.5C10.6365 1.5 12.417 2.2375 13.7297 3.55025C15.0425 4.86301 15.78 6.64348 15.78 8.5Z"
                stroke="#94A9C9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_948">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.780029 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[350px] text-base bg-[#E8EDF5] dark:bg-[#E8EDF5] z-[99]">
          <DropdownMenuGroup>
            <form>
              <div className="relative">
                <input
                  type="text"
                  id="default-search"
                  className="block w-full pl-3 pr-8 h-[50px] placeholder-[#7E9CC7] dark:bg-gray-600 text-sm rounded-[8px] focus:outline-none"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="absolute end-2.5 bottom-[14px]"
                >
                  <svg
                    className="w-5 h-5 text-[#7E9CC7] dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </DropdownMenuGroup>
          <div className="pt-5">
            <p className="text-sm">Popular tags:</p>
            <div className="flex flex-wrap gap-2.5 text-xs text-[#7E9CC7] pt-3">
              {["Travel", "Tech", "Movie", "Lifestyle", "Sport"].map(
                (value) => (
                  <span key={value}>#{value}</span>
                )
              )}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
