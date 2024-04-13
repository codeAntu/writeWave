import { inflateSync } from "zlib";
import { create } from "zustand";
import { User } from "../lib/types";
import { ls } from "../lib/ls";
import { stringify } from "querystring";

export interface Store {
  status: boolean;
  userData: User;
  login: (userData: User) => void;
  logout: () => void;
}

export const useStore = create<Store>((set) => {
  const initialUser = JSON.parse(ls.get("user") || "{}");
  const initialStatus = !!initialUser && Object.keys(initialUser).length > 0;

  return {
    status: initialStatus,
    userData: initialUser as User,
    login: (userData: User) => {
      ls.set("user", JSON.stringify(userData));
      set({ status: true, userData });
    },
    logout: () => {
      ls.clear();
      set({ status: false, userData: {} as User });
    },
  };
});
