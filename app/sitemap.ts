import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/services", "/work", "/about", "/contact"].map(path => ({ url: new URL(path, siteUrl).href }));
}
