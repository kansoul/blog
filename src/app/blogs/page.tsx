import Breadcrumb from "@/components/Base/Breadcrumb";
import TitleOfSection from "@/components/Base/TitleOfSection";
import CardBlog from "@/components/ui/card-blog";
import Link from "next/link";

export default function Blogs() {
  const blogComponents: { title: string; href: string; description: string }[] =
    [
      {
        title: "ReactJS",
        href: "/category",
        description:
          "Powerful JavaScript library for building user interfaces with seamless interactions.",
      },
      {
        title: "NextJS",
        href: "/category",
        description:
          "Efficiently preview content for sighted users behind links with NextJS.",
      },
      {
        title: "Laravel",
        href: "/category",
        description:
          "Visually and semantically separate content using the Laravel framework.",
      },
      {
        title: "Flutter",
        href: "/category",
        description:
          "Create visually stunning cross-platform mobile apps with Flutter's layered content.",
      },
      {
        title: "Frameworks CSS",
        href: "/category",
        description:
          "Easily design and style your projects with powerful frameworks.",
      },
    ];

  const cardTemps = [
    {
      srcImage: "/images/card-blog/card-3.png",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
    },
    {
      srcImage: "/images/card-blog/card-4.png",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
    },
    {
      srcImage: "/images/card-blog/card-1.jpg",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
    },
  ];
  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12 relative z-10">
        <div className="pt-[70px] mb-8">
          <p className="text-center mb-1.5 text-[64px] font-bold">
            <span className="text-linear">See all blogs</span>
          </p>
          <p className="text-center text-[#708AB0] dark:text-[#94A9C9] text-[18px] whitespace-pre-line">
            {
              "With many years of experience in the field of Digital Marketing,\nI'm confident to bring you many outstanding values."
            }
          </p>
          <div className="flex flex-col items-center mt-6">
            <Breadcrumb />
          </div>
        </div>
        <div className="w-full border-b text-[#708ab0] dark:text-[#94a9c9] mt-2.5 mb-[50px]" />

        {blogComponents.map((blog, index) => (
          <div key={`Blog ${index}`} className="mb-[80px]">
            <div className="flex justify-between mb-[20px]">
              <TitleOfSection
                mainTitle={blog.title}
                subTitle={blog.description}
                fontSize="text-[36px]"
                className="w-1/2 !mb-0"
              />
              <Link
                href={"/category"}
                className="text-base text-[#708AB0] dark:text-[#94A9C9] hover:text-[#1cc2e7] mt-auto"
              >
                See more &gt;&gt;&gt;
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-4">
              {cardTemps.map((val, index) => (
                <CardBlog
                  key={`Card blog ${index}`}
                  size={"L"}
                  srcImage={val.srcImage}
                  cardTitle={val.cardTitle}
                  cardTag={val.cardTag}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
