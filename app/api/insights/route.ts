import { auth } from "@/auth";
import { NextResponse } from "next/server";

import clientPromise from "@/lib/mongodb";
import type { Insight } from "@/lib/insights";

const DATABASE_NAME = "test";
const COLLECTION_NAME = "articles";

async function getCollection() {
  const client = await clientPromise;

  const db = client.db(DATABASE_NAME);

  return db.collection<Insight>(COLLECTION_NAME);
}

/*
 * GET
 */

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const publicOnly =
      searchParams.get("public") === "true";

    /*
     * Public article listing is allowed.
     * Admin/private article listing requires authentication.
     */

    if (!publicOnly) {
      const session = await auth();

      if (!session?.user) {
        return NextResponse.json(
          {
            error: "Unauthorized.",
          },
          {
            status: 401,
          }
        );
      }
    }

    const collection = await getCollection();

    const filter = publicOnly
      ? { status: "published" as const }
      : {};

    const insights = await collection
      .find(filter)
      .project({ _id: 0 })
      .sort({ publishedAt: -1 })
      .toArray();

    return NextResponse.json(insights);
  } catch (error) {
    console.error(
      "Failed to load insights:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to load insights.",
      },
      {
        status: 500,
      }
    );
  }
}

/*
 * POST
 */

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      {
        error: "Unauthorized.",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const body = await request.json();

    const collection = await getCollection();

    /*
     * Duplicate an existing insight
     */

    if (body.action === "duplicate") {
      const sourceId = body.id;

      if (!sourceId) {
        return NextResponse.json(
          {
            error: "Insight ID is required.",
          },
          {
            status: 400,
          }
        );
      }

      const sourceInsight =
        await collection.findOne(
          { id: sourceId },
          {
            projection: {
              _id: 0,
            },
          }
        );

      if (!sourceInsight) {
        return NextResponse.json(
          {
            error:
              "Insight not found or cannot be duplicated.",
          },
          {
            status: 404,
          }
        );
      }

      const baseSlug =
        `${sourceInsight.slug}-copy`;

      let newSlug = baseSlug;
      let counter = 2;

      while (
        await collection.findOne({
          slug: newSlug,
        })
      ) {
        newSlug =
          `${baseSlug}-${counter}`;

        counter++;
      }

      const duplicatedInsight: Insight = {
        ...sourceInsight,

        id: crypto.randomUUID(),

        title:
          `${sourceInsight.title} (Copy)`,

        slug: newSlug,

        status: "draft",

        featured: false,

        publishedAt:
          new Date().toISOString(),
      };

      await collection.insertOne(
        duplicatedInsight
      );

      return NextResponse.json(
        {
          success: true,
          insight: duplicatedInsight,
        },
        {
          status: 201,
        }
      );
    }

    /*
     * Normal Create Insight
     */

    const insight: Insight = {
      ...body,
      id:
        body.id ||
        crypto.randomUUID(),
    };

    if (
      !insight.title ||
      !insight.slug
    ) {
      return NextResponse.json(
        {
          error:
            "Title and slug are required.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * Prevent duplicate slugs.
     */

    const existingInsight =
      await collection.findOne({
        slug: insight.slug,
      });

    if (existingInsight) {
      return NextResponse.json(
        {
          error:
            "An insight with this slug already exists.",
        },
        {
          status: 409,
        }
      );
    }

    /*
     * If this article is marked as featured,
     * remove featured status from other articles.
     */

    if (insight.featured) {
      await collection.updateMany(
        {
          featured: true,
        },
        {
          $set: {
            featured: false,
          },
        }
      );
    }

    await collection.insertOne(insight);

    return NextResponse.json(
      {
        success: true,
        insight,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Failed to save insight:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to save insight.",
      },
      {
        status: 500,
      }
    );
  }
}

/*
 * PUT
 */

export async function PUT(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      {
        error: "Unauthorized.",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const updatedInsight: Insight =
      await request.json();

    if (!updatedInsight.id) {
      return NextResponse.json(
        {
          error:
            "Insight ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !updatedInsight.title ||
      !updatedInsight.slug
    ) {
      return NextResponse.json(
        {
          error:
            "Title and slug are required.",
        },
        {
          status: 400,
        }
      );
    }

    const collection =
      await getCollection();

    /*
     * Find the existing article.
     */

    const existingInsight =
      await collection.findOne({
        id: updatedInsight.id,
      });

    if (!existingInsight) {
      return NextResponse.json(
        {
          error:
            "Insight not found or cannot be edited.",
        },
        {
          status: 404,
        }
      );
    }

    /*
     * Prevent duplicate slugs.
     */

    const duplicateSlug =
      await collection.findOne({
        slug: updatedInsight.slug,
        id: {
          $ne: updatedInsight.id,
        },
      });

    if (duplicateSlug) {
      return NextResponse.json(
        {
          error:
            "Another insight already uses this slug.",
        },
        {
          status: 409,
        }
      );
    }

    /*
     * Preserve the original publication date.
     *
     * Editing an article should not change
     * when it was originally published/created.
     */

    const articleToSave: Insight = {
      ...updatedInsight,

      publishedAt:
        existingInsight.publishedAt ||
        updatedInsight.publishedAt,
    };

    /*
     * If this article is being made featured,
     * remove featured status from other articles.
     */

    if (articleToSave.featured) {
      await collection.updateMany(
        {
          id: {
            $ne: articleToSave.id,
          },
          featured: true,
        },
        {
          $set: {
            featured: false,
          },
        }
      );
    }

    await collection.replaceOne(
      {
        id: articleToSave.id,
      },
      articleToSave
    );

    return NextResponse.json(
      {
        success: true,
        insight: articleToSave,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Failed to update insight:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to update insight.",
      },
      {
        status: 500,
      }
    );
  }
}

/*
 * DELETE
 */

export async function DELETE(
  request: Request
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      {
        error: "Unauthorized.",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const { searchParams } =
      new URL(request.url);

    const id =
      searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          error:
            "Insight ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    const collection =
      await getCollection();

    const result =
      await collection.deleteOne({
        id,
      });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        {
          error:
            "Insight not found or cannot be deleted.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Insight deleted successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Failed to delete insight:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to delete insight.",
      },
      {
        status: 500,
      }
    );
  }
}