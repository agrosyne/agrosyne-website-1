import { auth } from "@/auth";
import { NextResponse } from "next/server";
import {
  getSettings,
  updateSettings,
} from "@/lib/settings";

export const dynamic = "force-dynamic";

export async function GET() {
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
    return NextResponse.json(getSettings());
  } catch (error) {
    console.error(
      "Failed to load settings:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to load settings.",
      },
      {
        status: 500,
      }
    );
  }
}

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
    const body = await request.json();

    const currentSettings = getSettings();

    const updatedSettings = updateSettings({
      companyName:
        typeof body.companyName === "string"
          ? body.companyName.trim()
          : currentSettings.companyName,

      tagline:
        typeof body.tagline === "string"
          ? body.tagline.trim()
          : currentSettings.tagline,

      email:
        typeof body.email === "string"
          ? body.email.trim()
          : currentSettings.email,

      phone:
        typeof body.phone === "string"
          ? body.phone.trim()
          : currentSettings.phone,

      address:
        typeof body.address === "string"
          ? body.address.trim()
          : currentSettings.address,

      website:
        typeof body.website === "string"
          ? body.website.trim()
          : currentSettings.website,

      linkedin:
        typeof body.linkedin === "string"
          ? body.linkedin.trim()
          : currentSettings.linkedin,

      instagram:
        typeof body.instagram === "string"
          ? body.instagram.trim()
          : currentSettings.instagram,

      facebook:
        typeof body.facebook === "string"
          ? body.facebook.trim()
          : currentSettings.facebook,

      footerDescription:
        typeof body.footerDescription === "string"
          ? body.footerDescription.trim()
          : currentSettings.footerDescription,

      copyrightText:
        typeof body.copyrightText === "string"
          ? body.copyrightText.trim()
          : currentSettings.copyrightText,

      seoTitle:
        typeof body.seoTitle === "string"
          ? body.seoTitle.trim()
          : currentSettings.seoTitle,

      metaDescription:
        typeof body.metaDescription === "string"
          ? body.metaDescription.trim()
          : currentSettings.metaDescription,

      ogImage:
        typeof body.ogImage === "string"
          ? body.ogImage.trim()
          : currentSettings.ogImage,
    });

    return NextResponse.json(updatedSettings);
  } catch (error) {
    console.error(
      "Failed to save settings:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to save settings.",
      },
      {
        status: 500,
      }
    );
  }
}