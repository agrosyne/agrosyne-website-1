import { auth } from "@/auth";
import { NextResponse } from "next/server";

import {
  updateInquiry,
  type InquiryStatus,
} from "@/lib/inquiries";

const VALID_STATUSES: InquiryStatus[] = [
  "new",
  "contacted",
  "qualified",
  "quoted",
  "negotiating",
  "won",
  "lost",
];

export async function PATCH(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
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
    const { id } = await context.params;
    const body = await request.json();

    const updates: {
      status?: InquiryStatus;
      notes?: string;
    } = {};

    if (typeof body.status === "string") {
      if (
        !VALID_STATUSES.includes(
          body.status as InquiryStatus
        )
      ) {
        return NextResponse.json(
          {
            error: "Invalid inquiry status.",
          },
          {
            status: 400,
          }
        );
      }

      updates.status = body.status as InquiryStatus;
    }

    if (typeof body.notes === "string") {
      updates.notes = body.notes.trim();
    }

    if (
      updates.status === undefined &&
      updates.notes === undefined
    ) {
      return NextResponse.json(
        {
          error: "No valid changes were provided.",
        },
        {
          status: 400,
        }
      );
    }

    const inquiry = await updateInquiry(
      id,
      updates
    );

    if (!inquiry) {
      return NextResponse.json(
        {
          error: "Inquiry not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error(
      "Failed to update inquiry:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to update inquiry.",
      },
      {
        status: 500,
      }
    );
  }
}