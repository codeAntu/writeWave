import { inflateSync } from "zlib";
import { create } from "zustand";
import { User , Post } from "../lib/types";
import { ls } from "../lib/ls";
import { stringify } from "querystring";

export interface Store {
  status: boolean;
  userData: User;
  posts: Post[];
  login: (userData: User) => void;
  logout: () => void;
  setPosts: (posts: Post[]) => void;
}

export const useStore = create<Store>((set) => {
  const initialUser = JSON.parse(ls.get("user") || "{}");
  const initialStatus = !!initialUser && Object.keys(initialUser).length > 0;
  const initialPosts = JSON.parse(ls.get("posts") || "[]");
  return {
    status: initialStatus,
    userData: initialUser as User,
    posts: initialPosts as Post[],
    login: (userData: User) => {
      ls.set("user", JSON.stringify(userData));
      set({ status: true, userData });
    },
    logout: () => {
      ls.clear();
      set({ status: false, userData: {} as User });
    },
    setPosts: (posts: Post[]) => {
      ls.set("posts", JSON.stringify(posts));
      set({ posts });
    },
  };
});
