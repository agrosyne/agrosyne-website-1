import { NextResponse } from "next/server";

import {
  getSubscribers,
  addSubscriber,
} from "@/lib/newsletter";

/*
 * GET SUBSCRIBERS
 *
 * Used by the admin newsletter page.
 */

export async function GET() {
  try {
    const subscribers = getSubscribers();

    return NextResponse.json(subscribers);
  } catch (error) {
    console.error(
      "Failed to load newsletter subscribers:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to load newsletter subscribers.",
      },
      {
        status: 500,
      }
    );
  }
}

/*
 * POST SUBSCRIBER
 *
 * Used by the website newsletter form.
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    if (!email) {
      return NextResponse.json(
        {
          error: "Email address is required.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * Basic email validation.
     */

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

    const subscriber = addSubscriber(
      email,
      name,
      "Insights"
    );

    return NextResponse.json(
      {
        success: true,
        subscriber,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Failed to subscribe to newsletter:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to subscribe at this time.",
      },
      {
        status: 500,
      }
    );
  }
}