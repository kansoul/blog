import Image from "next/image";
import TitleOfSection from "../Base/TitleOfSection";
import ButtonLiner from "../ui/button-liner";
import CardBlog from "../ui/card-blog";

export default function EditorPicker() {
  const cardTemps = [
    {
      srcImage: "/images/card-blog/card-1.jpg",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
      isHot: true,
    },
    {
      srcImage: "/images/card-blog/card-2.png",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
      isHot: true,
    },
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
    <div className="relative z-10">
      <TitleOfSection
        mainTitle="Editor's picked"
        subTitle="Featured and highly rated articles"
      />
      <div className="w-full flex flex-wrap items-center justify-center gap-5">
        {cardTemps.map(({ cardTag, cardTitle, srcImage, isHot }, index) => (
          <CardBlog
            key={index}
            cardTag={cardTag}
            cardTitle={cardTitle}
            srcImage={srcImage}
            size={isHot ? "XL" : "L"}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-[30px] mb-[84px]">
        <ButtonLiner className="rounded-[80px] px-8 py-4 mb-[50px]">
          Show More Posts -&gt;
        </ButtonLiner>
        <Image
          alt="Your banner"
          src="/images/your-banner.png"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover w-[800px] h-[160px] "
        />
      </div>
    </div>
  );
}
