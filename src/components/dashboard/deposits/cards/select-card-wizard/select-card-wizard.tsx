"use client";

import { CardForm } from "@/components/cards/card-form/card-form";
import { CardSteps } from "@/components/dashboard/deposits/cards/enum";
import { SelectCardForm } from "@/components/dashboard/deposits/cards/select-card-form/select-card-form";
import { SelectCardInfo } from "@/components/dashboard/deposits/cards/select-card-info/select-card-info";
import { SelectCardList } from "@/components/dashboard/deposits/cards/select-card-list/select-card-list";
import { SelectCardVoucher } from "@/components/dashboard/deposits/cards/select-card-voucher/select-card-voucher";
import { useCardStore } from "@/providers/card-store.provider";

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
