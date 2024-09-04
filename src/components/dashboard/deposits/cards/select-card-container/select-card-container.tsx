import { CardStoreProvider } from "@/providers/card-store.provider";
import { SelectCardWizard } from "../select-card-wizard/select-card-wizard";

export const SelectCardContainer = () => {
  return (
    <CardStoreProvider>
      <SelectCardWizard />
    </CardStoreProvider>
  );
};
