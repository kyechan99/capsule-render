import { html } from "./html";

export const _ = (initValue: any = html``, ...iter) => {
  let currentValue = initValue;
  if (typeof currentValue === "function") {
    currentValue = currentValue(html``);
  }

  const iterator = iter[Symbol.iterator]();
  let result = iterator.next();

  while (!result.done) {
    const item = result.value;
    if (typeof item === "function") {
      currentValue = item(currentValue);
    } else {
      currentValue = item;
    }
    result = iterator.next();
  }
};
