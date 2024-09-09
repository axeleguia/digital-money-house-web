import { CardContainer } from "@/components/cards/card-container/card-container";
import { CardStoreProvider } from "@/providers/card-store.provider";

export default async function Page() {
  return (
    <CardStoreProvider>
      <CardContainer />
    </CardStoreProvider>
  );
}
