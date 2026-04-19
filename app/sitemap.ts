import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://unit.moneystom7.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
  ]
}
