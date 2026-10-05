import type { MetadataRoute } from "next";

import clientPromise from "@/lib/mongodb";
import type { Insight } from "@/lib/insights";

const DATABASE_NAME = "test";
const COLLECTION_NAME = "articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  /*
   * Static public pages
   */

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/sectors`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/sectors/agriculture`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/sectors/agriculture/rice`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/sectors/agriculture/sugar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/sectors/agriculture/oil-seeds`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/sectors/oil-gas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/sectors/metals-scrap`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/sectors/fertilizers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/tradesolutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /*
   * Published Insight articles
   *
   * Draft articles and noIndex articles are excluded.
   */

  try {
    const client = await clientPromise;

    const db = client.db(DATABASE_NAME);

    const articles = await db
      .collection<Insight>(COLLECTION_NAME)
      .find({
        status: "published",
        noIndex: {
          $ne: true,
        },
      })
      .project({
        _id: 0,
        slug: 1,
        publishedAt: 1,
      })
      .sort({
        publishedAt: -1,
      })
      .toArray();

    const insightPages: MetadataRoute.Sitemap =
      articles
        .filter(
          (article) =>
            Boolean(article.slug)
        )
        .map((article) => ({
          url: `${baseUrl}/insights/${article.slug}`,
          lastModified: article.publishedAt
            ? new Date(article.publishedAt)
            : new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }));

    return [
      ...staticPages,
      ...insightPages,
    ];
  } catch (error) {
    console.error(
      "Failed to generate sitemap:",
      error
    );

    /*
     * If MongoDB is temporarily unavailable,
     * still return the static public sitemap.
     */

    return staticPages;
  }
}