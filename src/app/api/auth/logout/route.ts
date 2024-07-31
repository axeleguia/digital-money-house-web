import redisService from "@/services/common/redis.service";
import { handleHttpError } from "@/utils/http";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const authCookie = cookies().get("SESSION_ID");
    if (authCookie) {
      const sessionId = authCookie.value;
      redisService.delete(sessionId);
      cookies().delete("SESSION_ID");
      cookies().delete("SESSION_USER");
    }
    return NextResponse.json({});
  } catch (error) {
    return handleHttpError(error);
  }
}
