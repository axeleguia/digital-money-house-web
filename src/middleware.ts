import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import apiService from "./services/api.service";

export const config = {
  matcher: "/dashboard",
};

export async function middleware(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const sessionId = cookieStore.get("SESSION_ID")?.value || "";
    const accessToken = await getAccessToken(sessionId);
    if (!accessToken)
      return NextResponse.redirect(new URL("/login", request.url));
    return getAuthHeaders(request, accessToken);
  } catch (e) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

const getAccessToken = async (sessionId: string): Promise<string> => {
  return (await apiService.getRedisValue({ key: sessionId }))?.value;
};

const getAuthHeaders = (request: NextRequest, accessToken: string) => {
  const headers = new Headers(request.headers);
  headers.set("x-access-token", accessToken);
  return NextResponse.next({
    request: {
      headers: headers,
    },
  });
};
