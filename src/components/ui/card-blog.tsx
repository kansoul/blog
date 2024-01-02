import Image from "next/image";
import Author from "../Base/Author";

interface CardBlogProps {
  size: "L" | "XL";
  srcImage: string;
  cardTitle: string;
  cardTag: string;
}

export default function CardBlog(props: CardBlogProps) {
  const { size, srcImage, cardTitle, cardTag } = props;

  const styleOfCard = {
    L: {
      width: "w-[calc(33.33%-14px)]",
      image: "h-[200px]",
      title: "text-[20px]",
    },
    XL: {
      width: "w-[calc(50%-10px)]",
      image: "h-[310px]",
      title: "text-[24px]",
    },
  };

  return (
    <div
      className={`card cursor-pointer bg-[#E8EDF5] dark:bg-[#131C31] border border-[#E9EEF5] dark:border-[#222F43] rounded-lg p-[21px] shadow text-[#344161] dark:text-[#B9E0F2] hover:text-[#1cc2e7]  ${styleOfCard[size]["width"]}`}
    >
      <a href="/article">
        <Image
          className={`rounded-t-lg object-cover w-full ${styleOfCard[size]["image"]}`}
          src={srcImage}
          width={0}
          height={0}
          sizes="100vw"
          alt={cardTitle}
        />
      </a>
      <div className="w-full flex justify-between items-end mt-5 text-[#4E658A] dark:text-[#66768F] text-sm">
        <p>#{cardTag}</p>
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
      <a href="/article" className="hover:text-[#0ea5ea]">
        <h5
          className={`mt-5 mb-6 font-bold tracking-tight ${styleOfCard[size]["title"]}`}
        >
          {cardTitle}
        </h5>
      </a>
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
