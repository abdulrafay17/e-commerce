import { NextResponse } from "next/server";


export function middleware(req) {
  const token = req.cookies.get("auth_token")?.value;
  const nextAuthToken =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;
  const url = req.nextUrl.clone();

  
  if (!token && !nextAuthToken) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-account/:path*", "/cart"]
};  