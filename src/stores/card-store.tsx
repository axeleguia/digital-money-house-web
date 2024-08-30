import { createStore } from "zustand/vanilla";

export type CardState = {
  formIsOpen: boolean;
};

export type CardActions = {
  toggle: (flag: boolean) => void;
};

export type CardStore = CardState & CardActions;

export const defaultInitialState: CardState = {
  formIsOpen: false,
};

export const createCardStore = (initState: CardState = defaultInitialState) => {
  return createStore<CardStore>()((set) => ({
    ...initState,
    toggle: (flag: boolean) =>
      set((state) => ({
        formIsOpen: flag,
      })),
  }));
};
