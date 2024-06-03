import Breadcrumb from "@/components/Base/Breadcrumb";
import CardBlog from "@/components/ui/card-blog";
import { getCategories } from "@/services/category";
import { Category } from "@/types/Category";
import { srcImage } from "@/utils/image";
import Link from "next/link";

export default async function Blogs() {
  const categories: Category[] = await getCategories();
  const breads = [{ value: "Blogs", url: `/blog` }];
  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12 relative z-10">
        <div className="pt-[70px] mb-8">
          <p className="text-center mb-1.5 lg:text-[64px] text-[44px] font-bold">
            <span className="text-linear">See all blogs</span>
          </p>
          <p className="text-center text-[#708AB0] dark:text-[#94A9C9] text-[18px] whitespace-pre-line">
            {
              "With many years of experience in the field of Digital Marketing,\nI'm confident to bring you many outstanding values."
            }
          </p>
          <div className="flex flex-col items-center mt-6">
            <Breadcrumb breads={breads} />
          </div>
        </div>
        <div className="w-full border-b text-[#708ab0] dark:text-[#94a9c9] mt-2.5 mb-[50px]" />

        {categories.map((category, index) =>
          category.blogs && category.blogs.length > 0 ? (
            <div key={`Blog ${index}`} className="mb-[80px]">
              <div className="flex justify-between mb-[20px]">
                <p
                  className={`text-linear font-bold lg:text-[36px] text-[26px]`}
                >
                  {category.name}
                </p>

                <Link
                  href={`/category/${category.name}`}
                  className="text-sm text-[#708AB0] dark:text-[#94A9C9] hover:text-[#1cc2e7] mt-auto mb-1"
                >
                  See more &gt;&gt;&gt;
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-4">
                {(category.blogs || []).map((val, index) => (
                  <CardBlog
                    key={`Card blog ${index}`}
                    size={"L"}
                    srcImage={srcImage(val?.featuredMedia)}
                    cardTitle={val.title}
                    url={val.slug}
                    cardTag={[]}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div key={`Blog ${index}`} />
          )
        )}
      </div>
    </div>
  );
}
