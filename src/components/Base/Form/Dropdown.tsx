"use client";

import { useState } from "react";

export default function Dropdown(props: {
  data: any;
  dropdownSelected: any;
  setDropdownSelected: any;
}) {
  const { data, dropdownSelected, setDropdownSelected } = props;

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleAddDropdown = (val: any) => {
    setDropdownSelected(val);
  };

  const checkSelected = (id: string) => {
    if (dropdownSelected) {
      return dropdownSelected?._id
        ? dropdownSelected._id === id
        : dropdownSelected === id;
    }
    return false;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <div className="flex flex-col items-center relative">
          <div className="w-full">
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="h-[52px] px-3 flex bg-transparent border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none dark:focus:border-[#66768f]"
            >
              <div className="flex flex-auto justify-start items-center text-sm">
                {dropdownSelected?.name || dropdownSelected}
              </div>
              <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  type="button"
                  className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-4 h-4 duration-300 ${
                      openDropdown ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {openDropdown && (
            <div className="absolute shadow top-[53px] bg-gray-100 z-40 w-full rounded max-h-[200px] overflow-y-auto">
              <div className="flex flex-col w-full">
                {data &&
                  data.length > 0 &&
                  data.map((val: any) => (
                    <div
                      key={`Dropdown ${val?._id || val}`}
                      onClick={() => {
                        handleAddDropdown(val);
                        setOpenDropdown(false);
                      }}
                      className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
                    >
                      <div
                        className={`flex w-full items-center p-3 pl-2 border-l-2 relative ${
                          checkSelected(val?._id || val)
                            ? "border-teal-600"
                            : "hover:border-teal-100"
                        }`}
                      >
                        <div className="w-full items-center flex">
                          <div className="mx-2 leading-6 text-sm">
                            {val?.name || val}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
