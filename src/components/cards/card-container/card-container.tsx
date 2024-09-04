"use client";

import { AddCard } from "@/components/cards/add-card-container/add-card-container";
import { CardForm } from "@/components/cards/card-form/card-form";
import { CardList } from "@/components/cards/card-list/card-list";
import { CardSteps } from "@/components/dashboard/deposits/cards/enum";
import {
  QueryKeys,
  useGetAccountCards,
  useGetQuery,
} from "@/hooks/api-query-hook";
import { useCardStore } from "@/providers/card-store.provider";
import { GetAccountResponseType } from "@/types/account.types";

export const CardContainer = () => {
  const step = useCardStore((state) => state.form.step);
  const accountData = useGetQuery<GetAccountResponseType>(QueryKeys.ACCOUNT);
  const { data: accountCardsData } = useGetAccountCards(accountData?.id!);

  return (
    <>
      {(step === CardSteps.DEFAULT || step === CardSteps.ADD_CARD_LIST) && (
        <AddCard size={accountCardsData?.length!} />
      )}
      {(step === CardSteps.DEFAULT || step === CardSteps.ADD_CARD_LIST) && (
        <CardList data={accountCardsData!} />
      )}
      {step === CardSteps.ADD_CARD_FORM && (
        <CardForm nextStep={CardSteps.ADD_CARD_LIST} />
      )}
    </>
  );
};
