import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!;

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("Middleware - Incoming request path:", path);

  if (path.startsWith("/admin") && path !== "/admin/login") {
    console.log("Middleware - Protected route, checking auth...");

    const token = request.cookies.get("admin_token")?.value;
    console.log("Middleware - Token exists:", !!token);

    if (!token) {
      console.warn("Middleware - No token found, redirecting to login");
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      console.log("Middleware - Token verified successfully:", payload);

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-admin-authenticated", "true");

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error("Middleware - Token verification failed:", error);
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  console.log("Middleware - Public or login route, continuing...");
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
