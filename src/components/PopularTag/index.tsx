import Image from "next/image";
import TitleOfSection from "../Base/TitleOfSection";

export default function PopularTag() {
  const popularTagTemps = [
    {
      image: "/images/card-blog/card-1.jpg",
      tag: "Travel",
    },
    {
      image: "/images/card-blog/card-2.png",
      tag: "Explore",
    },
    {
      image: "/images/card-blog/card-3.png",
      tag: "Destination",
    },
    {
      image: "/images/card-blog/card-4.png",
      tag: "Journey",
    },
    {
      image: "/images/topics/img_1.jpg",
      tag: "Travel Photos",
    },
    {
      image: "/images/topics/img_2.png",
      tag: "Vacation",
    },
    {
      image: "/images/card-blog/card-3.png",
      tag: "Adventure",
    },
    {
      image: "/images/topics/img_3.jpg",
      tag: "World Travel",
    },
    {
      image: "/images/card-blog/card-2.png",
      tag: "Backpacking",
    },
    {
      image: "/images/topics/img_1.jpg",
      tag: "Wanderlust",
    },
    {
      image: "/images/card-blog/card-3.png",
      tag: "Holiday",
    },
    {
      image: "/images/card-blog/card-1.jpg",
      tag: "Discover",
    },
  ];
  return (
    <div className="mb-24">
      <TitleOfSection
        mainTitle="Popular Tags"
        subTitle="Most searched keywords"
      />
      <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-8">
        {popularTagTemps.map((value, index) => (
          <div
            key={`Popular Tag ${index}`}
            className="lg:w-[calc(16.666667%-20px)] p-5 border rounded-[16px] bg-[#E8EDF5] dark:bg-[#131C31] border-[#E9EEF5] dark:border-[#222F43] text-sm text-[#344161] dark:text-[#94A9C9]"
          >
            <div className="flex items-center gap-2">
              <Image
                className="object-cover w-10 h-10 rounded-full"
                src={value.image}
                width={0}
                height={0}
                sizes="100vw"
                alt="Travel"
              />
              <div className="font-medium dark:text-white">
                <p className="whitespace-nowrap">{value.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
