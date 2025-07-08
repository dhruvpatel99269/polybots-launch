import { NextResponse } from "next/server";

export async function POST() {
  // Create response with cleared cookie
  const response = NextResponse.json({ success: true });

  // Set cookie with past expiration to clear it
  response.cookies.set({
    name: "admin_token",
    value: "",
    expires: new Date(0),
    path: "/",
  });

  return response;
}
