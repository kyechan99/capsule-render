import { isGradientColor } from "./verification";
import pallete from "./pallete.json";
import gradient from "./gradient.json";
import pallete_theme from "./pallete_theme.json";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateSelectColor = (list, fontColor, customColorList) => {
  customColorList = customColorList.split(",").filter(e => !isNaN(e) && e !== "" && 0 <= e && e < list.length);
  const auto = list[customColorList[Math.floor(Math.random() * customColorList.length)]];
  return [auto.color, fontColor ? fontColor : auto.text, auto.textBg];
};

export const generateAutoColor = (fontColor, customColorList = "") => {
  if (customColorList !== "") return generateSelectColor(pallete, fontColor, customColorList);

  const auto = pallete[Math.floor(Math.random() * pallete.length)];
  return [auto.color, fontColor ? fontColor : auto.text, auto.textBg];
};

export const generateAutoGradient = (fontColor, customColorList = "") => {
  if (customColorList !== "") return generateSelectColor(gradient, fontColor, customColorList);

  const auto = gradient[Math.floor(Math.random() * gradient.length)];
  return [auto.color, fontColor ? fontColor : auto.text, auto.textBg];
};

export const generateAutoByTime = (queryColor, fontColor) => {
  if (queryColor === "timeAuto") return randomizedByTime(pallete, fontColor);
  // else 'timeGradient'
  return randomizedByTime(gradient, fontColor);
};

export const checkThemeColor = stats => {
  return pallete_theme[stats];
};

export const generateThemeColor = stats => {
  return [pallete_theme[stats].color, pallete_theme[stats].text, pallete_theme[stats].textBg];
};

const randomizedByTime = (colorData, fontColor) => {
  const buildDate = new Date("Wed Jul 22 2020 17:00:00");
  const nowDate = new Date();
  nowDate.setSeconds(0);
  nowDate.setMilliseconds(0);

  let diffMinute = Math.abs(nowDate.getTime() - buildDate.getTime()) / 60000;
  if (diffMinute >= colorData.length) diffMinute %= colorData.length;

  return [
    colorData[diffMinute].color,
    fontColor ? fontColor : colorData[diffMinute].text,
    colorData[diffMinute].textBg,
  ];
};

export const checkReversal = reversal => {
  if (reversal === "true") {
    return `transform="scale (-1, 1)" transform-origin="center"`;
  }

  return "";
};

export const checkColor = color => {
  if (isGradientColor(color)) return "url(#linear)";
  if (color === "random") return generateRandomColor();
  if (color) return "#" + color;
  return "#B897FF";
};

export const checkText = (
  text,
  fontColor = "000000",
  fontAlign = 0,
  fontAlignY = 0,
  stroke = "B897FF",
  strokeWidth = "0",
) => {
  if (text === "" || text === undefined) return "";

  const lines = text.split("-nl-");
  let lineSpace;
  let firstAlignY;
  if (lines.length > 1) {
    firstAlignY = fontAlignY || 58 / lines.length;
    lineSpace = 90 / lines.length;
  } else {
    firstAlignY = fontAlignY || "50";
  }

  let alignX = [typeof fontAlign === "string" ? fontAlign : fontAlign[0] || 50];
  let alignY = [];

  return lines
    .map((line, i) => {
      if (i > 0)
        alignX.push(typeof fontAlign !== "string" && typeof fontAlign !== "number" && fontAlign[i] ? fontAlign[i] : 50);
      alignY.push(
        typeof fontAlignY !== "string" && typeof fontAlignY !== "number" && fontAlignY[i]
          ? fontAlignY[i]
          : alignY[i - 1]
            ? Number(alignY[i - 1]) + lineSpace
            : firstAlignY,
      );

      // debate : adjustable text-anchor|pos-y. not only pos-x
      return `<text text-anchor="middle" alignment-baseline="middle" x="${alignX[i]}%" y="${alignY[i]}%" class="text" style="fill:#${fontColor};" stroke="#${stroke}" stroke-width="${strokeWidth}" >${line}</text>`;
    })
    .join("");
};

export const checkDesc = (desc, descColor = "000000", descAlign = "50", descAlignY = "60") => {
  if (desc === "" || desc === undefined) return "";

  // debate : adjustable text-anchor|pos-y. not only pos-x
  return `<text text-anchor="middle" alignment-baseline="middle" x="${descAlign}%" y="${descAlignY}%" class="desc" style="fill:#${descColor};">${desc}</text>`;
};
