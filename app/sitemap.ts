import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/services", "/forward-deployed-engineering", "/ai-workflow-sprint", "/work", "/about", "/contact"].map(path => ({ url: new URL(path, siteUrl).href }));
}
