import Image from "next/image";
import ContentCards from "../Base/ContentCards";
import TitleOfSection from "../Base/TitleOfSection";
import ButtonLiner from "../ui/button-liner";

export default function EditorPicked() {
  return (
    <div className="">
      <TitleOfSection
        mainTitle="Editor's picked"
        subTitle="Featured and highly rated articles"
      />
      <ContentCards />
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
