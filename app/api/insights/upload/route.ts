import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 4.5 * 1024 * 1024;

const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          error: "No image file was provided.",
        },
        {
          status: 400,
        }
      );
    }

    if (!ALLOWED_TYPES[file.type]) {
      return NextResponse.json(
        {
          error: "Only JPG, PNG and WEBP images are allowed.",
        },
        {
          status: 400,
        }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error: "Image must be smaller than 4.5 MB.",
        },
        {
          status: 400,
        }
      );
    }

    const extension = ALLOWED_TYPES[file.type];

    const originalName = file.name
      .replace(/\.[^/.]+$/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const safeName = originalName || "insight-image";

    const filename = `insights/${safeName}-${Date.now()}${extension}`;

    const blob = await put(filename, file, {
      access: "public",
      contentType: file.type,
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      filename: blob.pathname,
    });
  } catch (error) {
    console.error("Insight image upload failed:", error);

    return NextResponse.json(
      {
        error: "Unable to upload image.",
      },
      {
        status: 500,
      }
    );
  }
}