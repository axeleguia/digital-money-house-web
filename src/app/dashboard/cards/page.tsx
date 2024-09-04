import { CardContainer } from "@/components/cards/card-container/card-container";
import { PageLayout } from "@/components/shared/page-layout/page-layout";
import { CardStoreProvider } from "@/providers/card-store.provider";

export default async function Page() {
  return (
    <PageLayout>
      <CardStoreProvider>
        <CardContainer />
      </CardStoreProvider>
    </PageLayout>
  );
}
