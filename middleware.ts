import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  if (request.nextUrl.pathname.startsWith("/blog/"))
    requestHeaders.set(
      "x-next-blog-slug",
      request.nextUrl.pathname.replace("/blog/", "")
    );

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/blog/:path*",
};
