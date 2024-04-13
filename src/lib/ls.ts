import { details } from "../info";

const ls = {
  get: (key: string) => {
    return localStorage.getItem(details.name + key);
  },
  set: (key: string, data: any) => {
    localStorage.setItem(details.name + key, data);
  },
  clear: () => {
    for (let elem in localStorage) {
      if (elem.startsWith(details.name)) localStorage.removeItem(elem);
    }
  },
};

export { ls };
