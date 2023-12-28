"use client";

import Typewriter from "typewriter-effect";
import ButtonLiner from "../ui/button-liner";
import Image from "next/image";

export default function Introduce() {
  return (
    <div className="flex items-end pt-[100px] px-1 relative z-[1]">
      <div className="animate__animated animate__fadeInUp pt-[50px] w-1/2 ">
        <p className="text-[#7E9CC7] dark:text-[#7F92B0] text-sm font-bold">
          Hello Everyone!
        </p>
        <h1 className="text-[#344161] dark:text-[#E6F0FF] py-5 min-h-[214px]">
          I&apos;m
          <div className="text-transparent text-linear">
            <Typewriter
              options={{
                strings: ["Hồ Đoan", "Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h1>
        <div className="w-3/4">
          <p className="text-[#7E9CC7] dark:text-[#7F92B0] text-base leading-6">
            This website was created by me to share useful information about
            software development. Everything I share is free, easy to understand
            from basic to advanced programming knowledge.
          </p>
        </div>
        <div className="mt-10 mb-[50px] max-w-[390px] bg-[#E9EEF5] border border-[#E9EEF5] dark:bg-[#222F43] dark:border-[#0EA5EA] rounded-[8px] p-[10px] pl-5">
          <form>
            <div className="flex ">
              <input
                type="text"
                id="default-search"
                className="block w-[calc(100%-95px)] h-10 text-sm text-[#7f92b0] focus:outline-none bg-transparent"
                placeholder="Type your email address"
                required
              />
              <ButtonLiner className="!px-4 !py-2 me-0 text-sm">
                Sign Up
              </ButtonLiner>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 animate__animated animate__fadeIn flex justify-center items-end bg-avatar">
        <Image
          alt="Avatar"
          src="/images/avatar.png"
          width={550}
          height={490}
          sizes="auto"
        />
        <div className="icon-1">
          <Image
            alt="Icon chạy lung tung"
            src="/icons/icon-bg-1.svg"
            width={22}
            height={22}
          />
        </div>
        <div className="icon-2">
          <Image
            alt="Icon nhân lên xuống"
            src="/icons/icon-bg-2.svg"
            width={27}
            height={26}
          />
        </div>
        <div className="icon-3">
          <Image
            alt="Icon tròn lên xuống"
            src="/icons/icon-bg-3.svg"
            width={27}
            height={26}
          />
        </div>
        <div className="icon-4">
          <Image
            alt="Icon tròn lên xuống"
            src="/icons/icon-bg-4.svg"
            width={34}
            height={35}
          />
        </div>
      </div>
    </div>
  );
}
