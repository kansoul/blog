import { Blog } from "@/types/Blog";
import { getFirstParagraphContent } from "@/utils/helper";
import { srcImage } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

export default async function PostReview(props: { post: Blog }) {
  const { post } = props;

  return (
    <Link href={post.slug}>
      <div className="block sm:flex bg-transparent sm:mb-[60px] mb-20 cursor-default sm:h-[257.05px]">
        <Image
          className="object-cover flex-shrink-0 w-full sm:w-[270px] rounded-[16px] h-[257.05px] hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer"
          src={srcImage(post?.featuredMedia)}
          width={0}
          height={0}
          sizes="100vw"
          alt={post?.title}
        />
        <div className="flex flex-col leading-normal sm:ml-5 mt-4 sm:mt-0 h-full relative w-full">
          <span className="text-[13px] w-fit mb-4 font-bold rounded-[50px] text-[#66768f] dark:text-white py-1 px-4 bg-[#e9eef5] dark:bg-[#222f43] hover:bg-[#0ea5ea] hover:text-white transition-colors duration-500 ease-in-out cursor-pointer">
            {post?.category?.name}
          </span>
          <h5 className="mb-5 text-2xl font-bold tracking-tight text-[#344161] dark:text-[#B9E0F2] hover:text-[#77d3e7] dark:hover:text-[#1cc2e7] transition-colors duration-500 ease-in-out cursor-pointer">
            {post?.title}
          </h5>
          <div
            dangerouslySetInnerHTML={{
              __html: getFirstParagraphContent(post?.content) || "",
            }}
            className="mb-5 text-sm font-normal text-[#708AB0] dark:text-[#94A9C9] line-clamp-3 overflow-clip"
          />
          <div className="sm:absolute sm:bottom-6 sm:w-full">
            <div className="w-full flex justify-between items-end mt-5 text-[#4E658A] dark:text-[#66768F] text-sm">
              <div className="flex flex-wrap gap-x-3">
                {post.tags.map((val) => (
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
                <p>
                  {post?.created_at &&
                    new Date(post?.created_at).toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
