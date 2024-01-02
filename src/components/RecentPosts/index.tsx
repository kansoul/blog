import Image from "next/image";
import TitleOfSection from "../Base/TitleOfSection";
import Logo from "../Base/Logo";
import LeftContent from "../LeftContent";

export default function RecentPosts() {
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

  return (
    <div className="flex">
      <div className="w-2/3 mr-3">
        <TitleOfSection
          mainTitle="Recent posts"
          subTitle="Don't miss the latest trends"
        />
        {recentPostTemps.map((value, index) => (
          <a
            href="#"
            key={`Recent Post Temps ${index}`}
            className="flex bg-transparent mb-[60px] cursor-default"
          >
            <Image
              className="object-cover w-[270px] rounded-[16px] h-[257.05px] hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer"
              src={value.imgSrc}
              width={0}
              height={0}
              sizes="100vw"
              alt={value.title}
            />
            <div className="flex flex-col leading-normal ml-5">
              <span className="text-[13px] w-fit mb-4 font-bold rounded-[50px] text-[#66768f] dark:text-white py-1 px-4 bg-[#e9eef5] dark:bg-[#222f43] hover:bg-[#0ea5ea] hover:text-white transition-colors duration-500 ease-in-out cursor-pointer">
                {value.topic}
              </span>
              <h5 className="mb-5 text-2xl font-bold tracking-tight text-[#344161] dark:text-[#B9E0F2] hover:text-[#77d3e7] dark:hover:text-[#1cc2e7] transition-colors duration-500 ease-in-out cursor-pointer">
                {value.title}
              </h5>
              <p className="mb-5 text-sm font-normal text-[#708AB0] dark:text-[#94A9C9]">
                {value.description}
              </p>
              <div className="w-full flex justify-between items-end mt-5 text-[#4E658A] dark:text-[#66768F] text-sm">
                <div className="flex flex-wrap gap-x-3">
                  {value.tags.map((val) => (
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
                  <p>{value.minuteForRead}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <LeftContent />
    </div>
  );
}
