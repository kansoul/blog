import Breadcrumb from "@/components/Base/Breadcrumb";
import ContentCards from "@/components/Base/ContentCards";
import Pagination from "@/components/Base/Pagination";
import PopularTag from "@/components/PopularTag";
import { API_URL } from "@/config";

async function getTags() {
  const result = await fetch(API_URL + "/tags", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!result.ok) {
    throw new Error(`Error fetching tags`);
  }
  const data = await result.json();
  return data.data || [];
}

export default async function Category() {
  const categories = await getTags();
  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12 relative z-10">
        <div className="lg:flex">
          <div className="mt-[50px] mb-5 px-3 lg:w-7/12">
            <p className="text-linear md:text-[64px] text-[30px] font-extrabold mb-5">
              Travel Tips
            </p>
            <p className="text-[#708ab0] dark:text-[#94a9c9] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis nisi sed turpis vulputate viverra. Morbi ligula elit,
              hendrerit non nisl tincidunt, sodales consequat magna.
            </p>
          </div>
          <div className="flex justify-end items-end lg:w-5/12 mb-5">
            <Breadcrumb />
          </div>
        </div>
        <div className="w-full border-b text-[#708ab0] dark:text-[#94a9c9] mt-2.5 mb-[50px]" />
        <div className="mb-[70px]">
          <ContentCards />
          <Pagination number={5} />
        </div>
        <PopularTag tags={categories || []} />
      </div>
    </div>
  );
}
