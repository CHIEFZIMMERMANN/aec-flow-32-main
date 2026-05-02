import { create } from "zustand";

type UIState = {
  demoOpen: boolean;
  setDemoOpen: (v: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  demoOpen: false,
  setDemoOpen: (v) => set({ demoOpen: v }),
}));
