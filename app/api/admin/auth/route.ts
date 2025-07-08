import { NextRequest, NextResponse } from "next/server";
import { sign } from "jsonwebtoken";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "defaultpassword"; // Set a real password in .env
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Use a real secret in .env

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = sign({ username }, JWT_SECRET, { expiresIn: "24h" });

    // Create response with success message
    const response = NextResponse.json({ success: true });

    // Set cookie in the response
    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("[ADMIN_AUTH_ERROR]:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
