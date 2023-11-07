import { MetadataRoute } from "next";

const addPathToBaseURL = (path: string) =>
  `https://adityab-portfolio.vercel.app${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/projects"].map((route) => ({
    url: addPathToBaseURL(route),
    lastModified: new Date(),
  }));

  return [...routes];
}
