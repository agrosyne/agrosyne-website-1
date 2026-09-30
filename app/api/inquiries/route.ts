import { auth } from "@/auth";
import { NextResponse } from "next/server";

import {
  createInquiry,
  getInquiries,
} from "@/lib/inquiries";

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
    const inquiries = await getInquiries();

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error(
      "Failed to load inquiries:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to load inquiries.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const company =
      typeof body.company === "string"
        ? body.company.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const phone =
      typeof body.phone === "string"
        ? body.phone.trim()
        : "";

    const inquiryType =
      typeof body.inquiryType === "string"
        ? body.inquiryType.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!name || !email || !message || !inquiryType) {
      return NextResponse.json(
        {
          error:
            "Name, email, inquiry type and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    const inquiry = await createInquiry({
      name,
      company,
      email,
      phone,
      inquiryType,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        inquiry,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Failed to create inquiry:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to submit your inquiry. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}