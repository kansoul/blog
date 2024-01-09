import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { verify } from "./utils/jwt_sign_verify";

export default withAuth(
  async function middleware(req) {
    const token = req?.nextauth?.token?.token;

    if (req.nextUrl.pathname.startsWith("/admin") && !token) {
      return NextResponse.redirect(
        new URL("/auth/login?message=You must login first!", req.url)
      );
    }

    try {
      await verify((token as string) || "", process.env.JWT_SECRET as string);
    } catch (error) {
      return NextResponse.redirect(
        new URL(
          "/auth/login?message=Login expired, please log in again!",
          req.url
        )
      );
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
