import { PageLayout } from "@/components/shared/page-layout/page-layout";
import { ActivityForm } from "@/components/dashboard/activity/activity-form/activity-form";
import { ActivityList } from "@/components/dashboard/activity/activity-list/activity-list";

export const ActivityContainer = () => {
  return (
    <PageLayout>
      <ActivityForm />
      <ActivityList />
    </PageLayout>
  );
};
