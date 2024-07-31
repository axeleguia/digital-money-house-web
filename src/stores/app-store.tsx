import { createStore } from "zustand/vanilla";

export type AppState = {
  isLoggedIn: boolean;
};

export type AppActions = {
  setLoggedIn: (flag: boolean) => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitialState: AppState = {
  isLoggedIn: false,
};

export const createAppStore = (initState: AppState = defaultInitialState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setLoggedIn: (flag: boolean) =>
      set((state) => ({
        isLoggedIn: flag,
      })),
  }));
};
