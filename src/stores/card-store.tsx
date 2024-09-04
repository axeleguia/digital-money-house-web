import { CardSteps } from "@/components/dashboard/deposits/cards/enum";
import { createStore } from "zustand/vanilla";

export type CardState = {
  form: {
    step: CardSteps | undefined;
    card: GetAccountCardsResponseType | undefined;
    amount: number;
    dated: string | undefined;
  };
};

export type CardActions = {
  setStep: (step: CardSteps) => void;
  setCard: (card: GetAccountCardsResponseType) => void;
  setAmount: (amount: number) => void;
  setDated: (dated: string) => void;
};

export type CardStore = CardState & CardActions;

export const defaultInitialState: CardState = {
  form: {
    step: CardSteps.DEFAULT,
    card: undefined,
    amount: 0,
    dated: undefined,
  },
};

export const createCardStore = (initState: CardState = defaultInitialState) => {
  return createStore<CardStore>()((set) => ({
    ...initState,
    setStep: (step: CardSteps) =>
      set((state) => ({ form: { ...state.form, step } })),
    setCard: (card: GetAccountCardsResponseType) =>
      set((state) => ({ form: { ...state.form, card } })),
    setAmount: (amount: number) =>
      set((state) => ({ form: { ...state.form, amount } })),
    setDated: (dated: string) =>
      set((state) => ({ form: { ...state.form, dated } })),
  }));
};
