import { NextRequest, NextResponse } from "next/server";
import { updateSessionCookie } from "./lib/session";

export async function middleware(request: NextRequest) {
  const response = await updateSessionCookie(request);

  if (response) {
    return response;
  }

  return NextResponse.next();
}
