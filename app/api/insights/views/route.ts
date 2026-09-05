import { NextResponse } from "next/server";

import { getTotalViews } from "@/lib/insightViews";

export async function GET() {
  try {
    const totalViews = getTotalViews();

    return NextResponse.json({
      totalViews,
    });
  } catch (error) {
    console.error("Failed to load total views:", error);

    return NextResponse.json(
      {
        error: "Unable to load total views.",
      },
      {
        status: 500,
      }
    );
  }
}