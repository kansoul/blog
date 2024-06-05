import { APP_URL } from "@/config";
import { getCategories } from "@/services/category";
import { Category } from "@/types/Category";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories: Category[] = await getCategories();
  const siteUrl = APP_URL || "http://localhost:3000";
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
      priority: index / 10,
    };
    return data;
  });
  return [
    ...(dataSitemap || []),
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
