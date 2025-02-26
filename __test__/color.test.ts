import {
  generateAutoByTime,
  generateAutoColor,
  generateAutoGradient,
} from "../utils/setting";
import { checkCustomColor } from "../src/verification";

import pallete from "../src/pallete.json";
import gradient from "../src/gradient.json";
import { parseColor } from "../utils/parse";

const autoColorCases = [
  {
    query: "timeAuto",
    data: pallete,
  },
  {
    query: "timeGradient",
    data: gradient,
  },
];

describe("Test colors", () => {
  beforeEach(() => {
    jest.spyOn(Math, "random");
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });

  autoColorCases.forEach(({ query, data }) => {
    it(`color = ${query}`, () => {
      // DIFF 1m
      jest.useFakeTimers().setSystemTime(new Date("Wed Jul 22 2020 17:01:00"));

      let [color, fontColor, textBgColor] = generateAutoByTime(
        query,
        "#FF00FF",
      );
      expect(color).toBe(data[1].color);
      expect(textBgColor).toBe(data[1].textBg);
      expect(fontColor).toBe("#FF00FF");

      // DIFF 2m
      jest.useFakeTimers().setSystemTime(new Date("Wed Jul 22 2020 17:02:00"));

      [color, fontColor, textBgColor] = generateAutoByTime(query, "#FF00FF");
      expect(color).toBe(data[2].color);
      expect(textBgColor).toBe(data[2].textBg);
      expect(fontColor).toBe("#FF00FF");

      // Auto Font Color
      [color, fontColor, textBgColor] = generateAutoByTime(query);
      expect(color).toBe(data[2].color);
      expect(textBgColor).toBe(data[2].textBg);
      expect(fontColor).toBe(data[2].text);
    });
  });

  it("color = timeAuto", () => {
    // DIFF 1m
    jest.useFakeTimers().setSystemTime(new Date("Wed Jul 22 2020 17:01:00"));

    let [color, fontColor, textBgColor] = generateAutoByTime(
      "timeAuto",
      "#FF00FF",
    );
    expect(color).toBe(pallete[1].color);
    expect(textBgColor).toBe(pallete[1].textBg);
    expect(fontColor).toBe("#FF00FF");

    // DIFF 2m
    jest.useFakeTimers().setSystemTime(new Date("Wed Jul 22 2020 17:02:00"));

    [color, fontColor, textBgColor] = generateAutoByTime("timeAuto", "#FF00FF");
    expect(color).toBe(pallete[2].color);
    expect(textBgColor).toBe(pallete[2].textBg);
    expect(fontColor).toBe("#FF00FF");

    // Auto Font Color
    [color, fontColor, textBgColor] = generateAutoByTime("timeAuto");
    expect(color).toBe(pallete[2].color);
    expect(textBgColor).toBe(pallete[2].textBg);
    expect(fontColor).toBe(pallete[2].text);
  });

  it("color = timeGradient", () => {
    // DIFF 1m
    jest.useFakeTimers().setSystemTime(new Date("Wed Jul 22 2020 17:01:00"));

    let [color, fontColor, textBgColor] = generateAutoByTime(
      "timeGradient",
      "#FF00FF",
    );
    expect(color).toBe(gradient[1].color);
    expect(textBgColor).toBe(gradient[1].textBg);
    expect(fontColor).toBe("#FF00FF");

    // DIFF 2m
    jest.useFakeTimers().setSystemTime(new Date("Wed Jul 22 2020 17:02:00"));

    [color, fontColor, textBgColor] = generateAutoByTime(
      "timeGradient",
      "#FF00FF",
    );
    expect(color).toBe(gradient[2].color);
    expect(textBgColor).toBe(gradient[2].textBg);
    expect(fontColor).toBe("#FF00FF");

    // Auto Font Color
    [color, fontColor, textBgColor] = generateAutoByTime("timeGradient");
    expect(color).toBe(gradient[2].color);
    expect(textBgColor).toBe(gradient[2].textBg);
    expect(fontColor).toBe(gradient[2].text);
  });

  it("color = auto", () => {
    // Random test case 1
    jest.spyOn(Math, "random").mockReturnValue(0);

    let [color, fontColor, textBgColor] = generateAutoColor("FF00FF", "");
    expect(color).toBe(pallete[0].color);
    expect(textBgColor).toBe(pallete[0].textBg);
    expect(fontColor).toBe("FF00FF");

    // Random test case 2
    [color, fontColor, textBgColor] = generateAutoColor("", "0,1");
    expect(color).toBe(pallete[0].color);
    expect(textBgColor).toBe(pallete[0].textBg);

    // Random test case 3
    jest.spyOn(Math, "random").mockReturnValue(0.9999);

    [color, fontColor, textBgColor] = generateAutoColor("FF00FF", "");
    expect(color).toBe(pallete[pallete.length - 1].color);
    expect(textBgColor).toBe(pallete[pallete.length - 1].textBg);
    expect(fontColor).toBe("FF00FF");
    jest.spyOn(Math, "random").mockReturnValue(0.9999);

    // Random test case 4
    [color, fontColor, textBgColor] = generateAutoColor("", "0,6,3");
    expect(color).toBe(pallete[3].color);
    expect(textBgColor).toBe(pallete[3].textBg);
  });

  it("color = gradient", () => {
    // Random test case 1
    jest.spyOn(Math, "random").mockReturnValue(0);

    let [color, fontColor, textBgColor] = generateAutoGradient("FF00FF", "");
    expect(color).toEqual(gradient[0].color);
    expect(textBgColor).toBe(gradient[0].textBg);
    expect(fontColor).toBe("FF00FF");

    // Random test case 2
    [color, fontColor, textBgColor] = generateAutoGradient("", "0,1");
    expect(color).toEqual(gradient[0].color);
    expect(textBgColor).toBe(gradient[0].textBg);

    // Random test case 3
    jest.spyOn(Math, "random").mockReturnValue(0.9999);

    [color, fontColor, textBgColor] = generateAutoGradient("FF00FF", "");
    expect(color).toEqual(gradient[gradient.length - 1].color);
    expect(textBgColor).toBe(gradient[gradient.length - 1].textBg);
    expect(fontColor).toBe("FF00FF");
    jest.spyOn(Math, "random").mockReturnValue(0.9999);

    // Random test case 4
    [color, fontColor, textBgColor] = generateAutoGradient("", "0,2,2,4,4");
    expect(color).toEqual(gradient[4].color);
    expect(textBgColor).toBe(gradient[4].textBg);
  });

  it("color = custom_gradient", () => {
    const color = checkCustomColor("0:EEFF00,100:a82da8");
    expect(color).toEqual({ 0: "EEFF00", 100: "a82da8" });
  });

  it("generates a color with Math.random() = 0.5", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    const color = parseColor("random");
    expect(color).toMatchInlineSnapshot(`"#888888"`);
  });

  it("generates a different color with Math.random() = 0.1", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.1);
    const color1 = parseColor("random");

    jest.spyOn(Math, "random").mockReturnValue(0.9);
    const color2 = parseColor("random");

    expect(color1).not.toBe(color2);
  });
});
