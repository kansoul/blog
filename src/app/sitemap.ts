import { APP_URL } from "@/config";
import { getBlogs } from "@/services/blog";
import { getCategories } from "@/services/category";
import { Blog } from "@/types/Blog";
import { Category } from "@/types/Category";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories: Category[] = await getCategories();
  const blogs: Blog[] = await getBlogs();
  const siteUrl = APP_URL || "http://localhost:3000";
  const dataSitemapBlog = blogs.map((blog, index) => {
    const data = {
      url: `${siteUrl}/${blog?.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as
        | "yearly"
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "never"
        | undefined,
      priority: (index + blogs.length) / blogs.length,
    };
    return data;
  });
  const dataSitemap = categories.map((category, index) => {
    const data = {
      url: `${siteUrl}/category/${category?.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as
        | "yearly"
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "never"
        | undefined,
      priority: (index + 1) / (categories.length + blogs.length),
    };
    return data;
  });

  return [
    ...(dataSitemap || []),
    ...(dataSitemapBlog || []),
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
