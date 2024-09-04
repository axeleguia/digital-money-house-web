import { ActivityForm } from "@/components/dashboard/activity/activity-form/activity-form";
import { DashboardCardBalance } from "@/components/dashboard/dashboard/dashboard-card-balance/dashboard-card-balance";
import { DashboardOptions } from "@/components/dashboard/dashboard/dashboard-options/dashboard-options";
import { PageLayout } from "@/components/shared/page-layout/page-layout";

export default async function Page() {
  return (
    <PageLayout>
      <DashboardCardBalance />
      <DashboardOptions />
      <ActivityForm />
    </PageLayout>
  );
}
