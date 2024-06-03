import Image from "next/image";
import Logo from "../Base/Logo";
import { Blog } from "@/types/Blog";
import { srcImage } from "@/utils/image";
import { getFirstParagraphContent } from "@/utils/helper";

export default function LeftContent({ popularPost }: { popularPost: Blog[] }) {
  const instagramTemps = [
    "/images/card-blog/card-1.jpg",
    "/images/card-blog/card-2.png",
    "/images/card-blog/card-3.png",
    "/images/card-blog/card-4.png",
    "/images/topics/img_1.jpg",
    "/images/topics/img_2.png",
    "/images/card-blog/card-3.png",
    "/images/topics/img_3.jpg",
    "/images/card-blog/card-2.png",
  ];
  return (
    <div className="lg:w-1/3 lg:ml-3 mt-6">
      <div className="rounded-[16px] px-[26px] pt-[26px] bg-[#E8EDF5] dark:bg-[#131C31] border border-[#C2D4EE] dark:border-[#222F43]">
        <p className="mb-2 text-[20px] font-bold text-linear">Popular Posts</p>
        <div className="w-[96px] h-[3px] bg-[#0EA5EA] mb-5" />
        {popularPost.map((post, index) => (
          <div key={`Post Top ${index}`} className="flex pt-5">
            <Image
              className="rounded-full object-cover w-[64px] h-[64px]"
              alt={post.title}
              src={srcImage(post?.featuredMedia)}
              height={64}
              width={64}
            />
            <div
              className={`ml-4 w-full ${
                index === popularPost.length - 1
                  ? ""
                  : "border-b border-[#C2D4EE] dark:border-[#222F43]"
              }`}
            >
              <p className="mb-5 text-base font-bold tracking-tight text-[#344161] dark:text-[#B9E0F2] hover:text-[#77d3e7] dark:hover:text-[#1cc2e7] transition-colors duration-500 ease-in-out cursor-pointer">
                {post.title}
              </p>
              <div className="w-full flex justify-between items-end mt-5 text-[#4E658A] dark:text-[#66768F] text-sm mb-5">
                <div className="flex">
                  <p>7 mins read</p>
                </div>
                <div className="flex justify-center items-center">
                  <p>{new Date(post.created_at).toDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[16px] px-[26px] pt-[26px] bg-[#E8EDF5] dark:bg-[#131C31] border border-[#C2D4EE] dark:border-[#222F43] mt-8">
        <p className="mb-2 text-[20px] font-bold text-linear">Last Comment</p>
        <div className="w-[96px] h-[3px] bg-[#0EA5EA] mb-5" />
        {popularPost.map((post, index) => (
          <div
            key={`Post ${index}`}
            className={`ml-4 mt-5 ${
              index === popularPost.length - 1
                ? ""
                : "border-b border-[#C2D4EE] dark:border-[#222F43]"
            }`}
          >
            <div className="mb-5 text-sm font-normal tracking-tight text-[#708AB0] dark:text-[#94A9C9]">
              &quot;
              <div
                dangerouslySetInnerHTML={{
                  __html: getFirstParagraphContent(post?.content) || "",
                }}
              />
              &quot;
            </div>
            <div className="flex items-center gap-[15px] mb-6 mt-5">
              <Image
                className="w-[32px] h-[32px] rounded-full"
                src="/icons/avatar-icon.svg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="font-medium text-sm text-[#4E658A] dark:text-[#66768F]">
                <div>Ho Doan IT</div>
                <div className="text-[12px] text-[#4E658A] dark:text-[#66768F]">
                  {new Date().toDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[16px] px-[26px] py-[26px] bg-[#E8EDF5] dark:bg-[#131C31] border border-[#C2D4EE] dark:border-[#222F43] mt-8">
        <Logo size="L" />
        <p className="text-base text-[#4E658A] font-bold mt-1 mb-[30px]">
          Follow us on instagram
        </p>
        <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-6 pb-2.5">
          {instagramTemps.map((val, index) => (
            <div
              key={`Image ${index}`}
              className="lg:w-[calc(33.3333333%-16px)]"
            >
              <Image
                alt={`Ảnh số ${index}`}
                src={val}
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover rounded-[8px] w-[84px] h-[84px] mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
