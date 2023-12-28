"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function HotTopic() {
  const hostTopics = [
    {
      imgUrl: "/images/topics/img_1.jpg",
      tag: "AI Generate",
      topicCount: 10,
    },
    {
      imgUrl: "/images/topics/img_2.png",
      tag: "Laravel",
      topicCount: 23,
    },
    {
      imgUrl: "/images/topics/img_3.jpg",
      tag: "ReactJs",
      topicCount: 41,
    },
    {
      imgUrl: "/images/topics/img.png",
      tag: "Javascript",
      topicCount: 1,
    },
    {
      imgUrl: "/images/topics/img_1.jpg",
      tag: "NextJs",
      topicCount: 27,
    },
    {
      imgUrl: "/images/topics/img_3.jpg",
      tag: "Flutter",
      topicCount: 8,
    },
    {
      imgUrl: "/images/topics/img_2.png",
      tag: "Tailwind",
      topicCount: 1,
    },
    {
      imgUrl: "/images/topics/img_3.jpg",
      tag: "Others",
      topicCount: 5,
    },
  ];

  return (
    <div className="mb-[70px] animate__animated animate__fadeInUp relative z-10">
      <div className="flex p-6 border rounded-[8px] border-[#C2D4EE] bg-[#E8EDF5] dark:bg-[#131C31] dark:border-[#222F43]">
        <div className="w-2/12">
          <p className="text-[#344161] dark:text-[#B9E0F2] text-[20px] font-bold pb-[14px] animate__animated animate__fadeInUp">
            Hot topics
          </p>
          <p className="text-[#708AB0] dark:text-[#94A9C9] text-[14px] font-normal animate__animated animate__fadeInUp">
            Don&apos;t miss out on the latest news about Travel tips, Hotels
            review, Food guide...
          </p>
          <Image
            alt="Hand to right"
            src="/icons/hand.svg"
            width={100}
            height={100}
            className="pl-6 animate__animated animate__zoomIn"
          />
        </div>
        <div className="w-10/12">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            className="w-full text-center"
          >
            <CarouselContent>
              {hostTopics.map((value, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="m-2 w-[200px] h-[250px] cursor-pointer relative rounded-md overflow-hidden">
                    <div className="card-info z-20 peer">
                      <div className="absolute bottom-0 left-0 p-[15px] text-left">
                        <h6 className="text-[#F9FBFF] dark:text-[#B9E0F2] mb-2 text-base font-bold">
                          {value.tag}
                        </h6>
                        <p className="text-xs text-[#708AB0] dark:text-[#94A9C9]">
                          {value.topicCount} Articles
                        </p>
                      </div>
                    </div>
                    <Image
                      alt={value.tag}
                      src={value.imgUrl}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="object-cover w-full h-full transform transition-transform duration-300 peer-hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
