"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Category } from "@/types/Category";
import { srcImage } from "@/utils/image";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export default function HotTopic(props: { categories: Category[] }) {
  const { categories } = props;
  return (
    <div className="mb-[70px] animate__animated animate__fadeInUp relative z-20">
      <div className="lg:flex p-6 border rounded-[8px] border-[#C2D4EE] bg-[#E8EDF5] dark:bg-[#131C31] dark:border-[#222F43]">
        <div className="lg:w-2/12">
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
            className="pl-6 animate__animated animate__zoomIn hidden lg:block"
          />
        </div>
        <div className="lg:w-10/12">
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
              {categories &&
                categories.map((value, index) => (
                  <CarouselItem
                    key={`Carouse ${index}`}
                    className="md:basis-1/3 sm:basis-1/2"
                  >
                    <div className="m-2 w-full h-[250px] cursor-pointer relative rounded-md overflow-hidden">
                      <Link href={`/category/${value?.slug}`}>
                        <div className="card-info z-20 peer">
                          <div className="absolute bottom-0 left-0 p-[15px] text-left">
                            <h6 className="text-[#F9FBFF] dark:text-[#B9E0F2] mb-2 text-base font-bold">
                              {value?.name}
                            </h6>
                            <p className="text-xs text-[#708AB0] dark:text-[#94A9C9]">
                              {value?.count} Articles
                            </p>
                          </div>
                        </div>
                        <Image
                          alt={value?.description}
                          src={srcImage(value?.featuredMedia)}
                          width="0"
                          height="0"
                          sizes="100vw"
                          className="object-cover w-full h-full transform transition-transform duration-300 peer-hover:scale-110"
                        />
                      </Link>
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
