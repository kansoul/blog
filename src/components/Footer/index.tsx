import { Category } from "@/types/Category";
import Logo from "../Base/Logo";
import ButtonLiner from "../ui/button-liner";
import Link from "next/link";

export default function Footer({ categories }: { categories: Category[] }) {
  return (
    <footer className="container w-full relative z-[10]">
      <div className="mx-auto min-h-[573px] border bg-[#E8EDF5] dark:bg-[#131C31] rounded-[48px] border-[#C2D4EE] dark:border-[#222F43] mt-[80px] lg:pt-[90px] pt-6 lg:px-[107px] px-7 pb-[51px]">
        <div className="md:flex flex-wrap pb-[54px] border-b border-[#708AB0] dark:border-[#94A9C9]">
          <div className="md:w-1/3 p-3">
            <Logo size="L" />
            <p className="pt-4 pl-4 text-[#708AB0] dark:text-[#94A9C9] text-sm">
              When an unknown prnoto sans took a galley and scrambled it to make
              specimen book not only five When an unknown prnoto sans took a
              galley and scrambled it to five centurie.
            </p>
            <p className="pt-4 pl-4 text-[#344161] dark:text-[#B9E0F2] text-base font-bold">
              Address
            </p>
            <p className="pt-1.4 pl-4 text-[#708AB0] dark:text-[#94A9C9] text-sm whitespace-pre-line">
              {"14 Phuoc Tan 3, \nEaKuang, Krong Pak, Dak Lak 630000"}
            </p>
          </div>
          <div className="md:w-1/3 p-3">
            <p className="text-[18px] text-[#344161] dark:text-[#B9E0F2] mb-[28px]">
              Categories
            </p>
            <div className="flex flex-wrap gap-y-[14px]">
              {(categories || []).map((val, index) => (
                <a
                  key={val?._id + index}
                  href="#"
                  className="w-1/2 text-base text-[#708AB0] dark:text-[#94A9C9] hover:text-[#0ea5ea] hover:translate-x-2 transition-transform duration-300 ease-in-out"
                >
                  {val?.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 p-3">
            <p className="text-[18px] text-[#344161] dark:text-[#B9E0F2] mb-[28px]">
              Newsletter
            </p>
            <p className="text-base text-[#708AB0] dark:text-[#94A9C9] mb-4">
              Sign up to be first to receive the latest stories inspiring us,
              case studies, and industry news.
            </p>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pt-1 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#7E9CC7] dark:text-[#94A9C9]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-email"
                className="border-b border-[#7E9CC7] dark:border-[#94A9C9] bg-transparent focus:outline-none pl-8 pt-3 py-2 w-full text-sm text-[#7E9CC7] dark:text-[#7187a4] placeholder:text-[#7E9CC7] dark:placeholder:text-[#7187a4]"
                placeholder="Your email"
              />
            </div>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pt-1 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#7E9CC7] dark:text-[#94A9C9]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-user"
                className="border-b border-[#7E9CC7] dark:border-[#94A9C9] bg-transparent focus:outline-none pl-8 pt-3 py-2 w-full text-sm text-[#7E9CC7] dark:text-[#7187a4] placeholder:text-[#7E9CC7] dark:placeholder:text-[#7187a4]"
                placeholder="Your name"
              />
            </div>
            <ButtonLiner className="rounded-[6px] px-4 py-2.5 text-sm font-bold">
              Subscribe-&gt;
            </ButtonLiner>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <div className="text-base">
            <span className="text-[#344161] dark:text-[#B9E0F2]">
              © 2024 Remade by{" "}
            </span>
            <span className="text-[#1CC2E7]">HoDoanIT.com</span>
          </div>
          <div className="flex">
            <Link
              href="https://www.facebook.com/ZaikDG/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="https://www.facebook.com/ZaikDG/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link
              href="https://www.facebook.com/ZaikDG/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href="https://www.facebook.com/ZaikDG/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              href="https://www.facebook.com/ZaikDG/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
