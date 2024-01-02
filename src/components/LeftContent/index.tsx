import Image from "next/image";
import Logo from "../Base/Logo";

export default function LeftContent() {
  const recentPostTemps = [
    {
      imgSrc: "/images/topics/img_1.jpg",
      topic: "Development",
      title: "10 Easy Ways to Be Environmentally Conscious At Home",
      description:
        "Take small but impactful steps towards environmental stewardship and sustainability within the comfort of your own home, contributing to a greener planet",
      tags: ["Travel", "Lifestyle"],
      minuteForRead: "7 mins read",
    },
    {
      imgSrc: "/images/topics/img_2.png",
      topic: "Lifestyle",
      title: "How to Give Your Space a Parisian-Inspired Makeover",
      description:
        "Infuse the timeless elegance of Parisian aesthetics into your living space with expert design guidance, creating an inviting atmosphere that exudes sophistication",
      tags: ["Travel", "Lifestyle"],
      minuteForRead: "7 mins read",
    },
    {
      imgSrc: "/images/topics/img_3.jpg",
      topic: "Business",
      title: "Facts About Business That Will Help You Success",
      description:
        "Equip yourself with essential business insights and proven strategies that can propel your career towards unparalleled success and growth",
      tags: ["Travel", "Lifestyle"],
      minuteForRead: "7 mins read",
    },
    {
      imgSrc: "/images/topics/img.png",
      topic: "Building",
      title: "The 60 Things To Do About Building A Plan",
      description:
        "Dive into the realm of planning and strategic thinking, as you lay the groundwork for a dynamic and effective roadmap to achieve your aspirations",
      tags: ["Travel", "Lifestyle"],
      minuteForRead: "7 mins read",
    },
    {
      imgSrc: "/images/topics/img_1.jpg",
      topic: "Development",
      title: "Master The Art Of Nature With These 7 Tips",
      description:
        "Immerse yourself in the beauty of the natural world, as you learn to connect with and appreciate nature&apos;s wonders through these enlightening tips",
      tags: ["Travel", "Lifestyle"],
      minuteForRead: "7 mins read",
    },
  ];

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
    <div className="w-1/3 ml-3 mt-6">
      <div className="rounded-[16px] px-[26px] pt-[26px] bg-[#E8EDF5] dark:bg-[#131C31] border border-[#C2D4EE] dark:border-[#222F43]">
        <p className="mb-2 text-[20px] font-bold text-linear">Popular Posts</p>
        <div className="w-[96px] h-[3px] bg-[#0EA5EA] mb-5" />
        {recentPostTemps.map((post, index) => (
          <div key={`Post Top ${index}`} className="flex pt-5">
            <Image
              className="rounded-full object-cover w-[64px] h-[64px]"
              alt={post.title}
              src={post.imgSrc}
              height={64}
              width={64}
            />
            <div
              className={`ml-4 ${
                index === recentPostTemps.length - 1
                  ? ""
                  : "border-b border-[#C2D4EE] dark:border-[#222F43]"
              }`}
            >
              <p className="mb-5 text-base font-bold tracking-tight text-[#344161] dark:text-[#B9E0F2] hover:text-[#77d3e7] dark:hover:text-[#1cc2e7] transition-colors duration-500 ease-in-out cursor-pointer">
                {post.title}
              </p>
              <div className="w-full flex justify-between items-end mt-5 text-[#4E658A] dark:text-[#66768F] text-sm mb-5">
                <div className="flex">
                  <p>{post.minuteForRead}</p>
                </div>
                <div className="flex justify-center items-center">
                  <p>25 April 2023</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[16px] px-[26px] pt-[26px] bg-[#E8EDF5] dark:bg-[#131C31] border border-[#C2D4EE] dark:border-[#222F43] mt-8">
        <p className="mb-2 text-[20px] font-bold text-linear">Last Comment</p>
        <div className="w-[96px] h-[3px] bg-[#0EA5EA] mb-5" />
        {recentPostTemps.slice(0, 3).map((post, index) => (
          <div
            key={`Post ${index}`}
            className={`ml-4 mt-5 ${
              index === recentPostTemps.length - 1
                ? ""
                : "border-b border-[#C2D4EE] dark:border-[#222F43]"
            }`}
          >
            <p className="mb-5 text-sm font-normal tracking-tight text-[#708AB0] dark:text-[#94A9C9]">
              &quot;{post.description}&quot;
            </p>
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
                <div>Jese Leos</div>
                <div className="text-[12px] text-[#4E658A] dark:text-[#66768F]">
                  25 April 2023
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
        <div className="flex flex-wrap gap-x-6 gap-y-6 pb-2.5">
          {instagramTemps.map((val, index) => (
            <div key={`Image ${index}`} className="w-[calc(33.3333333%-16px)]">
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
