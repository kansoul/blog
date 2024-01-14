"use client";

import { useState } from "react";

export default function DropdownMultiSelect(props: {
  data: any;
  dropdownSelected: any;
  setDropdownSelected: any;
}) {
  const { data, dropdownSelected, setDropdownSelected } = props;

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleAddDropdown = (val: any) => {
    setDropdownSelected([...(dropdownSelected || []), val]);
  };

  const handleRemoveDropdown = (id: string) => {
    if (!dropdownSelected || dropdownSelected.length < 1) return;
    setDropdownSelected([
      ...(dropdownSelected || []).filter((val: any) => val._id !== id),
    ]);
  };

  const checkSelected = (id: string) => {
    if (dropdownSelected && dropdownSelected.length > 0) {
      return dropdownSelected.some((obj: any) => obj._id === id);
    }
    return false;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <div className="flex flex-col items-center relative">
          <div className="w-full">
            <div className="min-h-[52px] p-2 flex bg-transparent border border-[#c2d4ee] dark:border-[#222f43]  text-sm rounded-[8px] focus:outline-none dark:focus:border-[#66768f]">
              <div className="flex flex-auto flex-wrap">
                {dropdownSelected &&
                  dropdownSelected.length > 0 &&
                  dropdownSelected.map((value: any) => (
                    <div
                      key={`Selected ${value._id}`}
                      className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-700 bg-teal-100 border border-teal-300 "
                    >
                      <div className="text-xs font-normal leading-none max-w-full flex-initial">
                        {value.name}
                      </div>
                      <div className="flex flex-auto flex-row-reverse">
                        <div>
                          <svg
                            onClick={() => handleRemoveDropdown(value._id)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                <div
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex-1"
                >
                  <input
                    placeholder=""
                    readOnly
                    className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800 vie"
                  />
                </div>
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
            <div className="absolute shadow -bottom-[202px] bg-gray-100 z-40 w-full rounded max-h-[200px] overflow-y-auto">
              <div className="flex flex-col w-full">
                {data &&
                  data.length > 0 &&
                  data.map((val: any) => (
                    <div
                      key={`Dropdown ${val._id}`}
                      onClick={() =>
                        checkSelected(val._id)
                          ? handleRemoveDropdown(val._id)
                          : handleAddDropdown(val)
                      }
                      className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
                    >
                      <div
                        className={`flex w-full items-center p-3 pl-2 border-l-2 relative ${
                          checkSelected(val._id)
                            ? "border-teal-600"
                            : "hover:border-teal-100"
                        }`}
                      >
                        <div className="w-full items-center flex">
                          <div className="mx-2 leading-6 text-sm">
                            {val.name}{" "}
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
