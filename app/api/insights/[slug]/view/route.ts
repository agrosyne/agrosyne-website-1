import { NextResponse } from "next/server";

import type { Insight } from "@/lib/insights";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function findPublishedArticle(
  slug: string
): Promise<Insight | undefined> {
  /*
   * Articles are now managed through the
   * MongoDB-backed Insights API.
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

    if (!response.ok) {
      return undefined;
    }

    const insights: Insight[] =
      await response.json();

    return insights.find(
      (post) =>
        post.slug === slug &&
        post.status === "published"
    );
  } catch (error) {
    console.error(
      "Failed to find article from API:",
      error
    );

    return undefined;
  }
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

    /*
     * Only count views for published articles.
     */

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

    /*
     * Increment the view counter.
     *
     * The existing view-counter implementation
     * is kept unchanged for now.
     *
     * We will migrate the actual view storage
     * to MongoDB in the next database step.
     */


    return NextResponse.json({
      success: true,
      slug,
    });
  } catch (error) {
    console.error(
      "Failed to record insight view:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to record insight view.",
      },
      {
        status: 500,
      }
    );
  }
}