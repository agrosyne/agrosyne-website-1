import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

import { posts } from "@/lib/insights";
import type { Insight } from "@/lib/insights";

const dataDirectory = path.join(process.cwd(), "data");
const dataFile = path.join(dataDirectory, "insights.json");

async function readAdminInsights(): Promise<Insight[]> {
  try {
    const file = await fs.readFile(dataFile, "utf-8");

    return JSON.parse(file) as Insight[];
  } catch {
    return [];
  }
}

async function writeAdminInsights(insights: Insight[]) {
  await fs.mkdir(dataDirectory, { recursive: true });

  await fs.writeFile(
    dataFile,
    JSON.stringify(insights, null, 2),
    "utf-8"
  );
}

/* GET */

export async function GET(request: Request) {
  try {
    const adminInsights = await readAdminInsights();

    const combinedInsights = [
      ...adminInsights,
      ...posts.filter(
        (post) =>
          !adminInsights.some(
            (adminPost) => adminPost.slug === post.slug
          )
      ),
    ];

    const { searchParams } = new URL(request.url);
    const publicOnly = searchParams.get("public") === "true";

    if (publicOnly) {
      return NextResponse.json(
        combinedInsights.filter(
          (insight) => insight.status === "published"
        )
      );
    }

    return NextResponse.json(combinedInsights);
  } catch (error) {
    console.error("Failed to load insights:", error);

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

/* POST */

export async function POST(request: Request) {
  try {
    const body = await request.json();

    /*
     * Duplicate an existing Admin insight
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

      const adminInsights = await readAdminInsights();

      const sourceInsight = adminInsights.find(
        (item) => item.id === sourceId
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

      /*
       * Generate a unique slug.
       */

      const baseSlug = `${sourceInsight.slug}-copy`;

      let newSlug = baseSlug;
      let counter = 2;

      while (
        adminInsights.some(
          (item) => item.slug === newSlug
        ) ||
        posts.some(
          (post) => post.slug === newSlug
        )
      ) {
        newSlug = `${baseSlug}-${counter}`;
        counter++;
      }

      const duplicatedInsight: Insight = {
        ...sourceInsight,

        id: crypto.randomUUID(),

        title: `${sourceInsight.title} (Copy)`,

        slug: newSlug,

        status: "draft",

        featured: false,

        publishedAt: new Date().toISOString(),
      };

      const updatedInsights = [
        duplicatedInsight,
        ...adminInsights,
      ];

      await writeAdminInsights(
        updatedInsights
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

    const insight: Insight = body;

    if (!insight.title || !insight.slug) {
      return NextResponse.json(
        {
          error: "Title and slug are required.",
        },
        {
          status: 400,
        }
      );
    }

    const adminInsights = await readAdminInsights();

    const existingAdminInsight = adminInsights.find(
      (item) => item.slug === insight.slug
    );

    const existingOriginalInsight = posts.find(
      (item) => item.slug === insight.slug
    );

    if (existingAdminInsight || existingOriginalInsight) {
      return NextResponse.json(
        {
          error: "An insight with this slug already exists.",
        },
        {
          status: 409,
        }
      );
    }

    const updatedInsights = [insight, ...adminInsights];

    await writeAdminInsights(updatedInsights);

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
    console.error("Failed to save insight:", error);

    return NextResponse.json(
      {
        error: "Unable to save insight.",
      },
      {
        status: 500,
      }
    );
  }
}

/* PUT */

export async function PUT(request: Request) {
  try {
    const updatedInsight: Insight = await request.json();

    if (!updatedInsight.id) {
      return NextResponse.json(
        {
          error: "Insight ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!updatedInsight.title || !updatedInsight.slug) {
      return NextResponse.json(
        {
          error: "Title and slug are required.",
        },
        {
          status: 400,
        }
      );
    }

    const adminInsights = await readAdminInsights();

    const insightIndex = adminInsights.findIndex(
      (item) => item.id === updatedInsight.id
    );

    /*
     * Only articles created through the Admin system
     * can currently be edited.
     */

    if (insightIndex === -1) {
      return NextResponse.json(
        {
          error: "Insight not found or cannot be edited.",
        },
        {
          status: 404,
        }
      );
    }

    /*
     * Prevent duplicate slugs.
     */

    const duplicateSlug = adminInsights.some(
      (item) =>
        item.slug === updatedInsight.slug &&
        item.id !== updatedInsight.id
    );

    const originalSlugExists = posts.some(
      (post) => post.slug === updatedInsight.slug
    );

    if (duplicateSlug || originalSlugExists) {
      return NextResponse.json(
        {
          error: "Another insight already uses this slug.",
        },
        {
          status: 409,
        }
      );
    }

    const updatedInsights = [...adminInsights];

    updatedInsights[insightIndex] = updatedInsight;

    await writeAdminInsights(updatedInsights);

    return NextResponse.json(
      {
        success: true,
        insight: updatedInsight,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Failed to update insight:", error);

    return NextResponse.json(
      {
        error: "Unable to update insight.",
      },
      {
        status: 500,
      }
    );
  }
}

/* DELETE */

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          error: "Insight ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    const adminInsights = await readAdminInsights();

    const insightToDelete = adminInsights.find(
      (item) => item.id === id
    );

    if (!insightToDelete) {
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

    const updatedInsights = adminInsights.filter(
      (item) => item.id !== id
    );

    await writeAdminInsights(updatedInsights);

    return NextResponse.json(
      {
        success: true,
        message: "Insight deleted successfully.",
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
        error: "Unable to delete insight.",
      },
      {
        status: 500,
      }
    );
  }
}