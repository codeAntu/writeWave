import { inflateSync } from "zlib";
import { create } from "zustand";

export interface Store {
  status: boolean;
  userData : {}
  login: (status: boolean , userData : {}) => void;
  logout: () => void;
}

export const useStore = create<Store>((set) => ({
  status: false,
  userData : {},
  login: (status , userData) => set({ status , userData }),
  logout: () => set({ status: false , userData : {} }),

}));


