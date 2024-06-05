import { APP_URL } from "@/config";
import { getBlogsByCategory } from "@/services/blog";
import { getCategories, getCategory } from "@/services/category";
import { Blog } from "@/types/Blog";
import { Category } from "@/types/Category";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
  const categories = await getCategories();
  return categories.map((category: any) => ({
    id: category?.slug,
  }));
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const categoryData: Category = await getCategory(id);
  const posts: Blog[] = await getBlogsByCategory(categoryData._id);
  return (posts || []).map((post: Blog) => ({
    url: `${APP_URL}/${post.slug}`,
    lastModified: post.created_at,
  }));
}
