const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export class Html {
  content = "";

  constructor(strings: TemplateStringsArray, values: any[]) {
    this.content = strings.reduce((result, string, i) => {
      const value = Array.isArray(values[i])
        ? values[i].map(v => (v instanceof Html ? v.toString() : v)).join("")
        : values[i] instanceof Html
          ? values[i].toString()
          : values[i] !== undefined
            ? escapeHtml(String(values[i]))
            : "";
      return result + string + value;
    }, "");
  }

  append(newContent: string | Html | string[] | Html[]) {
    return html`${this.content}${newContent}`;
  }

  appendIf(condition: boolean, newContent: string | Html | string[] | Html[]) {
    if (condition) return this.append(newContent);
    return this;
  }

  toString() {
    return this.content;
  }
}

export const html = (strings: TemplateStringsArray, ...values: any[]): Html => {
  return new Html(strings, values);
};
