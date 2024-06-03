import Breadcrumb from "@/components/Base/Breadcrumb";
import ContentCards from "@/components/Base/ContentCards";
import Pagination from "@/components/Base/Pagination";
import PopularTag from "@/components/PopularTag";
import { getBlogsByCategory } from "@/services/blog";
import { getCategories, getCategory } from "@/services/category";
import { getTags } from "@/services/tag";
import { Category as CategoryType } from "@/types/Category";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category: CategoryType) => ({
    slug: category.slug,
  }));
}

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const category: CategoryType = await getCategory(params.slug);
  const breads = [{ value: category.name, url: `/${category.slug}` }];
  const posts = await getBlogsByCategory(category._id);
  const tags = await getTags();
  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12 relative z-10">
        <div className="lg:flex">
          <div className="mt-[50px] mb-5 px-3 lg:w-7/12">
            <p className="text-linear md:text-[64px] text-[30px] font-extrabold mb-5">
              {category?.name}
            </p>
            <p className="text-[#708ab0] dark:text-[#94a9c9] text-base">
              {category?.description}
            </p>
          </div>
          <div className="flex justify-end items-end lg:w-5/12 mb-5">
            <Breadcrumb breads={breads} />
          </div>
        </div>
        <div className="w-full border-b text-[#708ab0] dark:text-[#94a9c9] mt-2.5 mb-[50px]" />
        <div className="mb-[70px]">
          <ContentCards posts={posts || []} />
        </div>
        <PopularTag tags={tags || []} />
      </div>
    </div>
  );
}
