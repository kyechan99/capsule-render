import { ColorMap } from "../types/color";

export const isGradientColor = (color: any) => {
  if (!color) return false;
  return typeof color === "object";
};

export const regexData = (data: any) => {
  return String(data)
    .toLowerCase()
    .replace(/[^a-z]/g, "");
};

export const checkCustomColor = (color: string | ColorMap) => {
  if (typeof color === "object") return color;
  if (color.split(",").length > 1) {
    let temp = color;
    let colorMap: ColorMap = {};
    temp.split(",").forEach(e => {
      const [key, value] = e.split(":");
      colorMap[key] = value;
    });
    return colorMap;
  }

  return color;
};
