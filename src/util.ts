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

const generateSelectColor = (list, fontColor, customColorList: string) => {
  const colorList = customColorList
    .split(",")
    .filter(item => !isNaN(Number(item)))
    .map(item => Number(item))
    .filter(item => 0 <= item && item < list.length);
  const idx = colorList[Math.floor(Math.random() * colorList.length)];
  const auto = list[idx < list.length ? idx : 0];
  return [auto.color, fontColor ? fontColor : auto.text, auto.textBg];
};

export const generateAutoColor = (fontColor, customColorList = "") => {
  if (customColorList !== "")
    return generateSelectColor(pallete, fontColor, customColorList);

  const auto = pallete[Math.floor(Math.random() * pallete.length)];
  return [auto.color, fontColor ? fontColor : auto.text, auto.textBg];
};

export const generateAutoGradient = (fontColor, customColorList = "") => {
  if (customColorList !== "")
    return generateSelectColor(gradient, fontColor, customColorList);

  const auto = gradient[Math.floor(Math.random() * gradient.length)];
  return [auto.color, fontColor ? fontColor : auto.text, auto.textBg];
};

export const generateAutoByTime = (queryColor: string, fontColor?: string) => {
  if (queryColor === "timeAuto") return randomizedByTime(pallete, fontColor);
  // else 'timeGradient'
  return randomizedByTime(gradient, fontColor);
};

export const checkThemeColor = stats => {
  return pallete_theme[stats];
};

export const generateThemeColor = (stats: string) => {
  return [
    pallete_theme[stats].color,
    pallete_theme[stats].text,
    pallete_theme[stats].textBg,
  ];
};

const randomizedByTime = (colorData: any, fontColor?: string) => {
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

export const checkReversal = (reversal: string | boolean) => {
  if (reversal === "true" || reversal === true) {
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
  text?: string,
  fontColor: string = "000000",
  fontAlign: number[] = [50],
  fontAlignY: number[] = [50],
  stroke: string = "B897FF",
  strokeWidth: number = 0,
) => {
  if (!text) return "";

  const lines = text.split("-nl-");
  const alignX = Array.from(
    { length: lines.length },
    (_, i) => fontAlign[i] ?? 50,
  );
  const alignY = Array.from(
    { length: lines.length },
    (_, i) => fontAlignY[i] ?? undefined,
  );

  return lines
    .map((line, i) => {
      alignY[i] =
        alignY[i] !== undefined ? alignY[i] : alignY[i - 1] + 90 / lines.length;
      // debate : adjustable text-anchor|pos-y. not only pos-x
      return `<text text-anchor="middle" alignment-baseline="middle" x="${alignX[i]}%" y="${alignY[i]}%" class="text" style="fill:#${fontColor};" stroke="#${stroke}" stroke-width="${strokeWidth}" >${line}</text>`;
    })
    .join("");
};

export const checkDesc = (
  desc?: string,
  descColor: string = "000000",
  descAlign: string | number = "50",
  descAlignY: string | number = "60",
) => {
  if (desc === "" || desc === undefined) return "";

  // debate : adjustable text-anchor|pos-y. not only pos-x
  return `<text text-anchor="middle" alignment-baseline="middle" x="${descAlign}%" y="${descAlignY}%" class="desc" style="fill:#${descColor};">${desc}</text>`;
};
