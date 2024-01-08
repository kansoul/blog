import { getMedia } from "@/services/media";
import { Blog } from "@/types/Blog";
import Image from "next/image";

export default async function PostReview(props: { post: Blog }) {
  const { post } = props;

  return (
    <a
      href="#"
      className="block sm:flex bg-transparent sm:mb-[60px] mb-20 cursor-default"
    >
      <Image
        className="object-cover flex-shrink-0 w-full sm:w-[270px] rounded-[16px] h-[257.05px] hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer"
        src="/images/card-blog/card-1.jpg"
        width={0}
        height={0}
        sizes="100vw"
        alt={post?.title}
      />
      <div className="flex flex-col leading-normal sm:ml-5 mt-4 sm:mt-0">
        <span className="text-[13px] w-fit mb-4 font-bold rounded-[50px] text-[#66768f] dark:text-white py-1 px-4 bg-[#e9eef5] dark:bg-[#222f43] hover:bg-[#0ea5ea] hover:text-white transition-colors duration-500 ease-in-out cursor-pointer">
          {"ReactJS"}
        </span>
        <h5
          dangerouslySetInnerHTML={{ __html: post?.title }}
          className="mb-5 text-2xl font-bold tracking-tight text-[#344161] dark:text-[#B9E0F2] hover:text-[#77d3e7] dark:hover:text-[#1cc2e7] transition-colors duration-500 ease-in-out cursor-pointer"
        />
        <p
          dangerouslySetInnerHTML={{ __html: post?.content }}
          className="mb-5 text-sm font-normal text-[#708AB0] dark:text-[#94A9C9] line-clamp-3 overflow-clip"
        />
        <div className="w-full flex justify-between items-end mt-5 text-[#4E658A] dark:text-[#66768F] text-sm">
          <div className="flex flex-wrap gap-x-3">
            {post.tags.map((val) => (
              <span
                key={val}
                className="hover:text-[#0ea5ea] dark:hover:text-[#0e9ad8] cursor-pointer"
              >
                #{val}
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
            <p>{post.createdAt.toDateString()}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
