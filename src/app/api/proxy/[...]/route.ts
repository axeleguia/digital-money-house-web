import httpExternalService from "@/services/common/http-external.service";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = req.url.split("/proxy")[1];
  const accessToken = headers().get("x-access-token");
  const response = await httpExternalService.httpGet<any, any>(
    url,
    {},
    accessToken ?? undefined
  );
  return NextResponse.json(response, { status: 200 });
}

export async function PATCH(req: Request) {
  const url = req.url.split("/proxy")[1];
  const body = await req.json();
  const accessToken = headers().get("x-access-token");
  const response = await httpExternalService.httpPatch<any, any>(
    url,
    body,
    accessToken ?? undefined
  );
  return NextResponse.json(response, { status: 200 });
}
