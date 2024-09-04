import { AccountInfo } from "@/components/dashboard/profile/account-info/account-info";
import { PageLayout } from "@/components/shared/page-layout/page-layout";

export default async function Page() {
  return (
    <PageLayout>
      <AccountInfo />
    </PageLayout>
  );
}
