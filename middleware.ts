import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Helper to create a secret key usable by `jose`
function getKey(secret: string) {
  return new TextEncoder().encode(secret);
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith("/admin") && path !== "/admin/login") {
    console.log("Middleware - Checking auth for path:", path);

    const token = request.cookies.get("admin_token")?.value;
    console.log("Middleware - Token exists:", !!token);

    if (!token) {
      console.log("Middleware - No token found, redirecting to login");
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      const { payload } = await jwtVerify(token, getKey(JWT_SECRET));
      console.log("Middleware - Token verified successfully:", payload);

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-admin-authenticated", "true");

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error("Middleware - Token verification error:", error);
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
