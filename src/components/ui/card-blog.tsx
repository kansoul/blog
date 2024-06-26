import Image from "next/image";
import Author from "../Base/Author";
import { Tag } from "@/types/Tag";
import Link from "next/link";

interface CardBlogProps {
  size: "L" | "XL";
  srcImage: string;
  cardTitle: string;
  cardTag: Tag[];
  url: string;
}

export default function CardBlog(props: CardBlogProps) {
  const { size, srcImage, cardTitle, cardTag, url } = props;

  const styleOfCard = {
    L: {
      width: "lg:w-[calc(33.33%-14px)] w-full",
      image: "h-[200px]",
      title: "text-[20px]",
    },
    XL: {
      width: "lg:w-[calc(50%-10px)] w-full",
      image: "h-[310px]",
      title: "text-[24px]",
    },
  };

  return (
    <div
      className={`card cursor-pointer bg-[#E8EDF5] dark:bg-[#131C31] border border-[#E9EEF5] dark:border-[#222F43] rounded-lg p-[21px] shadow text-[#344161] dark:text-[#B9E0F2] hover:text-[#1cc2e7]  ${styleOfCard[size]["width"]} lg:mb-0 mb-4`}
    >
      <Link href={url}>
        <Image
          className={`rounded-t-lg object-cover w-full ${styleOfCard[size]["image"]}`}
          src={srcImage}
          width={0}
          height={0}
          sizes="100vw"
          alt={cardTitle}
        />
      </Link>
      <div className="w-full flex justify-between items-end mt-5 text-[#4E658A] dark:text-[#66768F] text-sm">
        <div className="flex gap-x-2">
          {cardTag.map((val) => (
            <span
              key={val.name}
              className="hover:text-[#0ea5ea] dark:hover:text-[#0e9ad8] cursor-pointer"
            >
              #{val.name}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 stroke-[#4E658A] dark:stroke-[#66768F] mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>5 mins read</p>
        </div>
      </div>
      <div className="min-h-[118px] pt-5 pb-2 ">
        <Link href={url} className="hover:text-[#0ea5ea] min-h-[90px]">
          <h5
            className={`font-bold tracking-tight line-clamp-3 overflow-clip ${styleOfCard[size]["title"]}`}
          >
            {cardTitle}
          </h5>
        </Link>
      </div>
      <div className="w-full flex justify-between items-center mt-5 text-[#4E658A] dark:text-[#66768F] text-sm">
        <Author />
        <div className="relative">
          <div className="bg-[#F1F3F7] dark:bg-[#0F172A] w-12 h-12 rounded-full mr-12" />
          <p className="absolute bottom-[14px] left-6 text-[#708AB0] dark:text-[#94A9C9] hover:text-[#0ea5ea]">
            Read more
          </p>
        </div>
      </div>
    </div>
  );
}
