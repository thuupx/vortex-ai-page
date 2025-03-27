import { prisma } from "@/lib/prisma";
import { sendWaitlistNotifications } from "@/lib/notifications";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the input data
    const result = waitlistSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.format() },
        { status: 400 },
      );
    }

    const { email } = result.data;

    // Get additional information from the request
    const ipAddress = request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent");
    const referrer = request.headers.get("referer");

    // Check if the email already exists
    const existingUser = await prisma.waitlistUser.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "You're already on our waitlist!" },
        { status: 200 },
      );
    }

    // Create a new waitlist entry
    const waitlistUser = await prisma.waitlistUser.create({
      data: {
        email,
        ipAddress,
        userAgent,
        referrer,
      },
    });

    // Send notifications
    try {
      await sendWaitlistNotifications(email);
    } catch (notificationError) {
      console.error("Failed to send notifications:", notificationError);
      // Continue with the response even if notifications fail
    }

    return NextResponse.json(
      {
        message: "Successfully joined the waitlist",
        userId: waitlistUser.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 },
    );
  }
}
