import { headers } from "next/headers";

export default async function DashboardPage() {
  const accessToken = headers().get("x-access-token");
  return <div>Dashboard {accessToken}</div>;
}
