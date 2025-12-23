import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ketodiet4u.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://ketodiet4u.com/blog/beginners-guide-to-ketosis",
      lastModified: new Date("2024-12-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ketodiet4u.com/blog/ultimate-keto-breakfast-bowl",
      lastModified: new Date("2024-12-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ketodiet4u.com/blog/low-carb-comfort-foods",
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
