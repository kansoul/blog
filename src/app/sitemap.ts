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
      priority: 0.9,
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
      priority: 0.8,
    };
    return data;
  });

  return [
    ...(dataSitemap || []),
    ...(dataSitemapBlog || []),
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
