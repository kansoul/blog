import Image from "next/image";
import TitleOfSection from "../Base/TitleOfSection";
import { Tag } from "@/types/Tag";
import { srcImage } from "@/utils/image";

export default function PopularTag(props: { tags: Tag[] }) {
  const { tags } = props;
  return (
    <div className="mb-24">
      <TitleOfSection
        mainTitle="Popular Tags"
        subTitle="Most searched keywords"
      />
      <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-8">
        {tags &&
          tags.map((value, index) => (
            <div
              key={`Popular Tag ${index}`}
              className="lg:w-[calc(16.666667%-20px)] p-5 border rounded-[16px] bg-[#E8EDF5] dark:bg-[#131C31] border-[#E9EEF5] dark:border-[#222F43] text-sm text-[#344161] dark:text-[#94A9C9]"
            >
              <div className="flex items-center gap-2">
                <Image
                  className="object-cover w-10 h-10 rounded-full"
                  src={srcImage(value?.featuredMedia)}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Travel"
                />
                <div className="font-medium dark:text-white">
                  <p className="whitespace-nowrap">{value?.name}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
