import { NextRequest, NextResponse } from "next/server";
import { updateSessionCookie } from "./lib/session";

export async function middleware(request: NextRequest) {
  const response = await updateSessionCookie(request);

  if (response) {
    return response;
  }

  if (request.nextUrl.pathname.includes("/decks")) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
