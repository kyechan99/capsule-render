import { _, each, map, append, appendIf } from "../utils/_";
import { html, Html } from "../utils/html";
import { parseToNumberArr, parseColor } from "../utils/parse";

describe("Test _ pipe helper", () => {
  it("applies functions to the accumulator in order", () => {
    const result = _(
      1,
      (v: number) => v + 1,
      (v: number) => v * 10,
    );
    expect(result).toBe(20);
  });

  it("defaults the initial value to an empty Html", () => {
    const result = _();
    expect(result).toBeInstanceOf(Html);
    expect(result.toString()).toBe("");
  });

  it("runs array-wrapped functions for side effects without changing the accumulator", () => {
    const seen: number[] = [];
    const result = _(5, [(v: number) => seen.push(v)]);
    expect(result).toBe(5);
    expect(seen).toEqual([5]);
  });

  it("skips entries that are neither functions nor wrapped functions", () => {
    const result = _(3, "not a function" as any, 42 as any);
    expect(result).toBe(3);
  });
});

describe("Test each helper", () => {
  it("iterates the array for side effects when used in a pipe", () => {
    const seen: string[] = [];
    const arr = ["a", "b"];
    _(
      arr,
      each((v: string) => seen.push(v)),
    );
    expect(seen).toEqual(["a", "b"]);
    expect(arr).toEqual(["a", "b"]);
  });
});

describe("Test map helper", () => {
  it("maps values when used in a pipe", () => {
    const result = _(
      [1, 2, 3],
      map((v: number) => v * 2),
    );
    expect(result).toEqual([2, 4, 6]);
  });
});

describe("Test append helpers", () => {
  it("appends content to an Html instance", () => {
    const result = _(html`<p>`, append("hello"));
    expect(result).toBeInstanceOf(Html);
    expect(result.toString()).toBe("&lt;p&gt;hello");
  });

  it("returns the value unchanged when it is not an Html instance", () => {
    expect(append("x")("plain")).toBe("plain");
    expect(appendIf(true, "x")("plain")).toBe("plain");
  });

  it("appendIf appends only when the condition is true", () => {
    const whenTrue = _(html`<p>`, appendIf(true, "yes"));
    const whenFalse = _(html`<p>`, appendIf(false, "no"));
    expect(whenTrue.toString()).toBe("&lt;p&gt;yes");
    expect(whenFalse.toString()).toBe("<p>");
  });
});

describe("Test parseToNumberArr", () => {
  it("returns the default [50] for undefined or empty input", () => {
    expect(parseToNumberArr(undefined)).toEqual([50]);
    expect(parseToNumberArr("")).toEqual([50]);
  });

  it("wraps a number input", () => {
    expect(parseToNumberArr(30)).toEqual([30]);
  });

  it("parses a comma-separated list and drops non-numeric entries", () => {
    expect(parseToNumberArr("10,20,30")).toEqual([10, 20, 30]);
    expect(parseToNumberArr("10,abc,20")).toEqual([10, 20]);
  });

  it("returns the default [50] when no entry is numeric", () => {
    expect(parseToNumberArr("a,b,c")).toEqual([50]);
  });
});

describe("Test parseColor", () => {
  it("returns the gradient url reference for a color map", () => {
    expect(parseColor({ "0": "ff0000", "100": "00ff00" })).toBe("url(#linear)");
  });

  it("prefixes a plain color with #", () => {
    expect(parseColor("B897FF")).toBe("#B897FF");
  });

  it("returns the default color for falsy input", () => {
    expect(parseColor("")).toBe("#B897FF");
    expect(parseColor(undefined)).toBe("#B897FF");
  });

  it("generates a random color for the random keyword", () => {
    const color = parseColor("random");
    expect(typeof color).toBe("string");
    expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });
});
