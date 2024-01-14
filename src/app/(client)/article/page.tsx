import Author from "@/components/Base/Author";
import Breadcrumb from "@/components/Base/Breadcrumb";
import LeftContent from "@/components/LeftContent";
import ButtonLiner from "@/components/ui/button-liner";
import Image from "next/image";
import { data } from "./data";

export default function Article() {
  let commentList = [
    "White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.",
    "White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.",
    "White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.",
  ];

  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12 relative z-10">
        <div className="py-6 border-b border-[#c2d4ee] dark:border-[#222f43] w-full">
          <Breadcrumb />
        </div>
        <p className="text-[30px] sm:text-[45px] lg:w-3/4 font-bold mb-5 text-left text-linear mt-[50px]">
          Digital Design That Will Help You Start Your Business
        </p>
        <div className="sm:flex">
          <div className="sm:w-3/4 sm:border-r border-[#c2d4ee] dark:border-[#222f43] py-3 sm:mr-4">
            <Author />
          </div>
          <div className="sm:w-1/4 flex sm:justify-center items-center">
            <p className="font-bold text-base text-[#4E658A] dark:text-[#66768F]">
              Share
            </p>
            <div className="flex ml-4">
              <a
                href="#"
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
              </a>
              <a
                href="#"
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
              </a>
              <a
                href="#"
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
              </a>
              <a
                href="#"
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
              </a>
            </div>
          </div>
        </div>
        <div className="lg:flex mt-[50px]">
          <div className="content lg:w-2/3 w-full dark:content-dark border-b border-[#c2d4ee] dark:border-[#222f43]">
            <div
              dangerouslySetInnerHTML={{
                __html: data,
              }}
            />
            <p>
              The fancy moon going in little artist painting. Thirty days of
              lavender in the dreamy light inside. Other perfect oh plants, for
              and again. I’ve honey feeling. Caring dreamland projects
              noteworthy than minimal, their it oh pretty feeling may. Include
              pink be.
            </p>
            <Image
              src={"/images/avatar.png"}
              alt={"Anh test"}
              height={400}
              width={400}
            />
            <p>
              The fancy moon going in little artist painting. Thirty days of
              lavender in the dreamy light inside. Other perfect oh plants, for
              and again. I’ve honey feeling. Caring dreamland projects
              noteworthy than minimal, their it oh pretty feeling may. Include
              pink be.
            </p>
            <h2>Use your headings</h2>
            <p>
              The fancy moon going in little artist painting. Thirty days of
              lavender in the dreamy light inside. Other perfect oh plants, for
              and again. I’ve honey feeling. Caring dreamland projects
              noteworthy than minimal, their it oh pretty feeling may. Include
              pink be.
            </p>
            <p>
              The fancy moon going in little artist painting. Thirty days of
              lavender in the dreamy light inside. Other perfect oh plants, for
              and again. I’ve honey feeling. Caring dreamland projects
              noteworthy than minimal, their it oh pretty feeling may. Include
              pink be.
            </p>
            <h3>Smaller heading</h3>
            <Image
              src={"/images/avatar.png"}
              alt={"Anh test"}
              height={400}
              width={400}
            />
            <p>
              The fancy moon going in little artist painting. Thirty days of
              lavender in the dreamy light inside. Other perfect oh plants, for
              and again. I’ve honey feeling. Caring dreamland projects
              noteworthy than minimal, their it oh pretty feeling may. Include
              pink be.
            </p>
            <p>
              The fancy moon going in little artist painting. Thirty days of
              lavender in the dreamy light inside. Other perfect oh plants, for
              and again. I’ve honey feeling. Caring dreamland projects
              noteworthy than minimal, their it oh pretty feeling may. Include
              pink be.
            </p>
          </div>
          <LeftContent />
        </div>
        <div className="w-full lg:w-2/3 my-6 flex flex-wrap gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`Tag post ${index}`}
              className="px-5 py-3 cursor-pointer hover:-translate-y-2 transition-transform duration-300 ease-in-out rounded-[8px] border border-[#c2d4ee] dark:border-[#222f43] bg-[#e8edf5] dark:bg-[#131c31] text-[#0b1222] hover:text-[#1cc2e7] dark:text-[#fff]"
            >
              #Nature
            </div>
          ))}
        </div>
        <div className="w-full lg:w-2/3 my-10 border-b border-[#c2d4ee] dark:border-[#222f43]">
          <p className="text-[#7f92b0] dark:text-[#b8cdeb] text-[32px] font-bold mb-5">
            Comments
          </p>
          {commentList.map((comment, index) => (
            <div key={`comment ${index}`} className="sm:flex mb-10">
              <div className="sm:w-[30%]">
                <Author />
              </div>
              <div className="sm:pl-3 sm:w-[70%] mt-3 sm:mt-0">
                <div className="p-5 text-[#7f92b0] dark:text-[#b8cdeb] text-[20px] border bg-[#E8EDF5] dark:bg-[#131C31] rounded-[16px] border-[#C2D4EE] dark:border-[#222F43]">
                  {comment}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-2/3 my-10">
          <p className="text-[#7f92b0] dark:text-[#b8cdeb] text-[32px] font-bold mb-5">
            Leave a comment
          </p>
          <textarea
            name="comment"
            placeholder="Write your comment"
            className="focus:outline-none p-5 w-full placeholder-[#7f92b0] dark:placeholder-[#b8cdeb]  text-[#7f92b0] dark:text-[#b8cdeb] text-base border bg-[#E8EDF5] dark:bg-[#131C31] rounded-[16px] border-[#C2D4EE] dark:border-[#222F43]"
            rows={5}
          />
          <div className="flex mt-6">
            <div className="w-1/2 flex justify-start">
              <span className="">
                <input type="checkbox" />
              </span>
              <p className="pl-4 text-[#708ab0] dark:text-[#94a9c9] text-sm">
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <div className="w-1/2 text-right">
              <ButtonLiner className="!px-4 !py-2.5 text-sm">
                Post comment
              </ButtonLiner>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
