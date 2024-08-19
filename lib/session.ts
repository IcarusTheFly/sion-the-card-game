"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const SESSION_KEY = new TextEncoder().encode(process.env.SESSION_KEY);
const COOKIE_EXPIRY_TIME = 30 * 60 * 1000;
const jwtEncrypt = async (data: any): Promise<any> => {
  return await new SignJWT(data)
    .setProtectedHeader({
      alg: process.env.SESSION_ENCRYPTION_ALGORITHM || "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(SESSION_KEY);
};

const jwtDecrypt = async (data: string): Promise<any> => {
  const { payload } = await jwtVerify(data, SESSION_KEY, {
    algorithms: [process.env.SESSION_ENCRYPTION_ALGORITHM || "HS256"],
  });
  return payload;
};

export const getSessionCookie = async () => {
  const session = cookies().get("session")?.value;
  if (!session) {
    return null;
  }
  return await jwtDecrypt(session);
};

export const createSessionCookie = async (payload: UserPayload) => {
  const expirationDate = new Date(Date.now() + COOKIE_EXPIRY_TIME);
  const session = await jwtEncrypt(payload);

  cookies().set("session", session, {
    expires: expirationDate,
    httpOnly: true,
  });
};

export const destroySessionCookie = () => {
  cookies().set("session", "", {
    expires: new Date(0),
  });
};

export const updateSessionCookie = async (request: NextRequest) => {
  const session = request.cookies.get("session")?.value;
  if (!session) {
    return;
  }

  const decryptedSession = await jwtDecrypt(session);
  decryptedSession.expires = new Date(Date.now() + COOKIE_EXPIRY_TIME);
  const res = NextResponse.next();
  res.cookies.set("session", await jwtEncrypt(decryptedSession), {
    expires: decryptedSession.expires,
    httpOnly: true,
  });
  return res;
};
