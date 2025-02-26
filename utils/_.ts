import { html, Html } from "./html";

export const _ = (initialValue: any = html``, ...iter) => {
  return iter.reduce((acc, fn) => {
    if (typeof fn === "function") {
      return fn(acc);
    } else if (Array.isArray(fn) && typeof fn[0] === "function") {
      fn[0](acc);
      return acc;
    }
    return acc;
  }, initialValue);
};

export const each = fn => {
  return [arr => arr.forEach(fn)];
};

export const map = fn => {
  return val => val.map(fn);
};

export const append = (a: any) => {
  return val => {
    if (val instanceof Html) {
      return val.append(a);
    }
    return val;
  };
};

export const appendIf = (condition: boolean, a: any) => {
  return val => {
    if (val instanceof Html) {
      return val.appendIf(condition, a);
    }
    return val;
  };
};
