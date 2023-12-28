import Image from "next/image";
import TitleOfSection from "../Base/TitleOfSection";

export default function PopularTag() {
  return (
    <div className="relative z-10">
      <TitleOfSection
        mainTitle="Popular Tags"
        subTitle="Most searched keywords"
      />
      <div className="flex flex-wrap gap-x-6 gap-y-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="w-[calc(16.666667%-20px)] p-5 border rounded-[16px] bg-[#E8EDF5] dark:bg-[#131C31] border-[#E9EEF5] dark:border-[#222F43] text-sm text-[#344161] dark:text-[#94A9C9]"
          >
            <div className="flex items-center gap-2">
              <Image
                className="object-cover w-10 h-10 rounded-full"
                src="/images/topics/img_3.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt="Travel"
              />
              <div className="font-medium dark:text-white">
                <div>Travel</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
