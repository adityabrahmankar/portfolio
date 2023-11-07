import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://adityab-portfolio.vercel.app/sitemap.xml",
    host: "https://adityab-portfolio.vercel.app/",
  };
}
