import {
  generateAutoColor,
  generateAutoGradient,
  generateThemeColor,
} from "../utils/setting";

import pallete from "../src/pallete.json";
import gradient from "../src/gradient.json";
import pallete_theme from "../src/pallete_theme.json";

describe("Data integrity check", () => {
  Object.keys(pallete_theme).forEach(data => {
    it(`make sure the data in pallete_theme.json is correct ('${data}')`, () => {
      const [color, fontColor, textBgColor] = generateThemeColor(data);
      expect(color).toBeTruthy();
      expect(fontColor).toBeTruthy();
      expect(textBgColor).toBeTruthy();
      expect(color).toBe(pallete_theme[data].color);
      expect(fontColor).toBe(pallete_theme[data].text);
      expect(textBgColor).toBe(pallete_theme[data].textBg);
    });
  });

  pallete.map((data, idx) => {
    it(`make sure the data in pallete.json is correct (idx: ${data.idx})`, () => {
      const [color, fontColor, textBgColor] = generateAutoColor("", `${idx}`);
      expect(color).toBeTruthy();
      expect(fontColor).toBeTruthy();
      expect(textBgColor).toBeTruthy();
      expect(color).toBe(data.color);
      expect(textBgColor).toBe(data.textBg);
      expect(fontColor).toBe(data.text);
    });
  });

  gradient.map((data, idx) => {
    it(`make sure the data in gradient.json is correct (idx: ${data.idx})`, () => {
      const [color, fontColor, textBgColor] = generateAutoGradient(
        "",
        `${idx}`,
      );
      expect(color).toBeTruthy();
      expect(fontColor).toBeTruthy();
      expect(textBgColor).toBeTruthy();
      expect(color).toEqual(data.color);
      expect(textBgColor).toBe(data.textBg);
      expect(fontColor).toBe(data.text);
    });
  });
});
