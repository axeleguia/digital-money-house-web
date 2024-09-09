import { createStore } from "zustand/vanilla";

export type ActivityState = {
  filterIsOpen: boolean;
  form: {
    search: string;
    filter: string;
    date: string;
  };
};

export type ActivityActions = {
  setFilter: (filter: string) => void;
  setSearch: (value: string) => void;
  setDate: (value: string) => void;
};

export type ActivityStore = ActivityState & ActivityActions;

export const defaultInitialState: ActivityState = {
  filterIsOpen: false,
  form: {
    search: "",
    filter: "",
    date: "",
  },
  selected: undefined,
};

export const createActivityStore = (
  initState: ActivityState = defaultInitialState
) => {
  return createStore<ActivityStore>()((set) => ({
    ...initState,
    setFilter: (filter: string) =>
      set((state) => ({ form: { ...state.form, filter: filter } })),
    setSearch: (value: string) =>
      set((state) => ({ form: { ...state.form, value } })),
    setDate: (value: string) =>
      set((state) => ({ form: { ...state.form, date: value } })),
  }));
};
