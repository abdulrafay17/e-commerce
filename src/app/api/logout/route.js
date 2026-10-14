// src/app/api/logout/route.js
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out",
  });

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0), // immediately expire
    path: "/",
  };

  // Existing email/password session
  response.cookies.set("auth_token", "", cookieOptions);

  // NextAuth Google session in development
  response.cookies.set("next-auth.session-token", "", cookieOptions);

  // NextAuth Google session in production
  response.cookies.set("__Secure-next-auth.session-token", "", {
    ...cookieOptions,
    secure: true,
  });

  return response;
}

