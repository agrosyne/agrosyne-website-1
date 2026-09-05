import { NextResponse } from "next/server";

import { posts, type Insight } from "@/lib/insights";
import { incrementViewCount } from "@/lib/insightViews";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function findPublishedArticle(
  slug: string
): Promise<Insight | undefined> {
  /*
   * First check the Admin/API articles.
   */

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const response = await fetch(
      `${baseUrl}/api/insights?public=true`,
      {
        cache: "no-store",
      }
    );

    if (response.ok) {
      const insights: Insight[] =
        await response.json();

      const apiArticle = insights.find(
        (post) =>
          post.slug === slug &&
          post.status === "published"
      );

      if (apiArticle) {
        return apiArticle;
      }
    }
  } catch (error) {
    console.error(
      "Failed to find article from API:",
      error
    );
  }

  /*
   * Fallback to original local articles.
   */

  return posts.find(
    (post) =>
      post.slug === slug &&
      post.status === "published"
  );
}

/*
 * RECORD ONE VIEW
 */

export async function POST(
  request: Request,
  { params }: Props
) {
  try {
    const { slug } = await params;

    const article =
      await findPublishedArticle(slug);

    if (!article) {
      return NextResponse.json(
        {
          error: "Insight not found.",
        },
        {
          status: 404,
        }
      );
    }

    const views = incrementViewCount(slug);

    return NextResponse.json({
      success: true,
      slug,
      views,
    });
  } catch (error) {
    console.error(
      "Failed to record insight view:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to record insight view.",
      },
      {
        status: 500,
      }
    );
  }
}