import { inflateSync } from "zlib";
import { create } from "zustand";

export interface Store {
  status: boolean;
  userData: {};
  login: (userData: {}) => void;
  logout: () => void;
}

export const useStore = create<Store>((set) => ({
  status: false,
  userData: {},
  login: (userData) => set({ status: true, userData }),
  logout: () => set({ status: false, userData: {} }),
}));
