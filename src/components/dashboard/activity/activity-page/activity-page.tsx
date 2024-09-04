import { PageLayout } from "@/components/shared/page-layout/page-layout";
import { ActivityForm } from "../activity-form/activity-form";
import { ActivityList } from "../activity-list/activity-list";

export const ActivityPage = () => {
  return (
    <PageLayout>
      <ActivityForm />
      <ActivityList />
    </PageLayout>
  );
};
