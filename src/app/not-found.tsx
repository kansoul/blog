import ButtonLiner from "@/components/ui/button-liner";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container flex flex-row color-404">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12">
        <div className="mt-[100px] flex w-4/5">
          <Image src="/404.svg" alt="Page not found" width={385} height={360} />
          <div className="text-left w-1/2 mt-6 ml-12">
            <p className="text-linear text-[45px] font-bold">
              Don&apos;t be spooked !
            </p>
            <p className="text-[#708ab0] dark:text-[#94a9c9] text-[20px]">
              The page you’re looking for has slipped in to an unknown realm.
              Click the button below to go back to the homepage.
            </p>
            <Link href="/home">
              <ButtonLiner className="!px-[26px] !py-2.5 me-0 text-base mt-6">
                Homepage
              </ButtonLiner>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
