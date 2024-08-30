"use client";

import { AddCard } from "@/components/cards/add-card/add-card";
import { CardForm } from "@/components/cards/card-form/card-form";
import { CardList } from "@/components/cards/card-list/card-list";
import { useGetAccount, useGetAccountCards } from "@/hooks/api-query-hook";
import { useCardStore } from "@/providers/card-store.provider";

export const CardContainer = () => {
  const formIsOpen = useCardStore((state) => state.formIsOpen);
  const { data: accountData } = useGetAccount();
  const { data: accountCardsData } = useGetAccountCards(accountData?.id!);

  return (
    <>
      {!formIsOpen && <AddCard />}
      {!formIsOpen && <CardList data={accountCardsData!} />}
      {formIsOpen && <CardForm />}
    </>
  );
};
