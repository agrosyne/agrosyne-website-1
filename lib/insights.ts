export type InsightStatus = "draft" | "published";

export type InsightContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export interface Insight {
  id: string;

  title: string;
  slug: string;
  excerpt: string;

  content: InsightContentBlock[] | string;

  image: string;
  imageAlt: string;

  category: string;
  author: string;
  publishedAt: string;
  readTime: string;

  featured: boolean;
  status: InsightStatus;

  // SEO
  seoTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  canonicalUrl?: string;

  // Social sharing
  socialTitle?: string;
  socialDescription?: string;

  // Search engine control
  noIndex?: boolean;
}