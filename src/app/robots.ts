import { APP_URL } from "@/config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/*",
    },
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
