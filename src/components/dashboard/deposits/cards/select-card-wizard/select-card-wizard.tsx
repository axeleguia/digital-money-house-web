"use client";

import { CardForm } from "@/components/cards/card-form/card-form";
import { useCardStore } from "@/providers/card-store.provider";
import { CardSteps } from "../enum";
import { SelectCardForm } from "../select-card-form/select-card-form";
import { SelectCardInfo } from "../select-card-info/select-card-info";
import { SelectCardList } from "../select-card-list/select-card-list";
import { SelectCardVoucher } from "../select-card-voucher/select-card-voucher";

export const SelectCardWizard = () => {
  const step = useCardStore((state) => state.form.step);
  return (
    <>
      {(step === CardSteps.DEFAULT || step === CardSteps.SELECT_CARD_LIST) && (
        <SelectCardList />
      )}
      {step === CardSteps.SELECT_CARD_FORM && <SelectCardForm />}
      {step === CardSteps.SELECT_CARD_INFO && <SelectCardInfo isInfo={false} />}
      {step === CardSteps.SELECT_CARD_VOUCHER && <SelectCardVoucher />}
      {step === CardSteps.ADD_CARD_FORM && (
        <CardForm nextStep={CardSteps.SELECT_CARD_LIST} />
      )}
    </>
  );
};
