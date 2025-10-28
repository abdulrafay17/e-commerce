import { NextResponse } from "next/server";


export function middleware(req) {
  const token = req.cookies.get("auth_token")?.value;
  const url = req.nextUrl.clone();

  
  if (!token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-account/:path*", "/cart"]
};