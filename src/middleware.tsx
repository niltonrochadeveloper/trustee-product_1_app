import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export const config = { matcher: ["/auth/:path*"] };

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  if (!token && process.env.NEXTAUTH_URL) {
    return NextResponse.redirect(new URL(process.env.NEXTAUTH_URL));
  }

  return NextResponse.next();
}
