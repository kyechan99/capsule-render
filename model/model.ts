import {
  checkReversal,
  checkThemeColor,
  generateAutoByTime,
  generateAutoColor,
  generateAutoGradient,
  generateThemeColor,
} from "../utils/setting";
import { checkCustomColor, isGradientColor } from "../src/verification";
import { ColorMap } from "../types/color";
import { parseColor, parseToNumberArr } from "../utils/parse";
import {
  getAnimation,
  getDesc,
  getStyle,
  getText,
  getTextBg,
} from "../utils/render";

export abstract class Model {
  width = 854;
  height: number;

  type: string;
  section: "footer" | "header";
  reversal: string;
  animation: string;
  rotate: number;

  color: string | ColorMap;
  customColorList: string;
  theme: string;
  gradient?: ColorMap;

  text: string;
  textBg: boolean;
  textBgColor: string;

  desc: string;
  descSize: number;
  descAlign: number;
  descAlignY: number;
  descColor: string;

  fontSize: number;
  fontColor: string;
  fontAlign: number[];
  fontAlignY: number[];
  stroke: string;
  strokeWidth: number;

  constructor(params: any) {
    this.type = params.type || "wave";
    this.section = params.section || "header";
    this.height = Number(params.height) || 120;
    this.text = params.text || "";
    this.desc = params.desc || "";
    this.textBg = params.textBg == "true";
    this.fontSize = Number(params.fontSize) || 70;
    this.fontColor = params.fontColor;
    this.fontAlign = parseToNumberArr(params.fontAlign || "");
    this.fontAlignY = parseToNumberArr(params.fontAlignY || "");
    this.textBgColor = params.textBgColor || "000000";
    this.stroke = params.stroke || (params.strokeWidth ? "B897FF" : "none");
    this.strokeWidth =
      Number(params.strokeWidth) || (params.stroke === "none" ? 0 : 1);
    this.descSize = Number(params.descSize) || 20;
    this.descAlign = Number(params.descAlign) || 50;
    this.descAlignY = Number(params.descAlignY) || 60;
    this.descColor = params.descColor || "000000";
    this.animation = params.animation || "fadeIn";
    this.reversal = checkReversal(params.reversal || "false");
    this.rotate = Number(params.rotate) || 0;
    this.customColorList = params.customColorList || "";
    this.theme = params.theme || "none";
    this.color = params.color || "B897FF";

    // Something needs improvement..
    if (this.theme !== "none" && checkThemeColor(this.theme)) {
      [this.color, this.fontColor, this.textBgColor] = generateThemeColor(
        this.theme,
      );
      this.descColor = this.textBgColor;
    } else {
      if (this.color === "auto") {
        [this.color, this.fontColor, this.textBgColor] = generateAutoColor(
          this.fontColor,
          this.customColorList,
        );
      } else if (this.color === "gradient") {
        [this.color, this.fontColor, this.textBgColor] = generateAutoGradient(
          this.fontColor,
          this.customColorList,
        );
      } else if (this.color === "timeAuto" || this.color === "timeGradient") {
        [this.color, this.fontColor, this.textBgColor] = generateAutoByTime(
          this.color,
          this.fontColor,
        );
      } else {
        this.color = checkCustomColor(this.color);
      }
      this.descColor = this.fontColor;
    }

    if (isGradientColor(this.color)) {
      this.gradient = this.color as ColorMap;
    }
    this.color = parseColor(this.color);
  }

  protected _drawGradient() {
    if (!this.gradient || !isGradientColor(this.gradient)) return "";

    const offset = Object.entries(this.gradient)
      .map(([key, value]) => `<stop offset="${key}%" stop-color="#${value}"/>`)
      .join("");

    return `<defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                ${offset}
              </linearGradient>
            </defs>`;
  }

  protected _drawText() {
    const textBgScript = this.textBg
      ? getTextBg(
          this.textBgColor,
          this.fontAlign,
          this.fontAlignY,
          this.fontSize,
          this.text,
        )
      : "";

    const textContent = getText(
      this.text,
      this.fontColor,
      this.fontAlign,
      this.fontAlignY,
      this.stroke,
      this.strokeWidth,
    );

    return `${textBgScript} ${textContent}`;
  }

  protected _drawStyle() {
    return `<style>
      ${getStyle(this.section, this.fontSize, this.descSize, this.rotate)}
      ${getAnimation(this.animation)}
    </style>`;
  }

  protected _drawDesc() {
    return getDesc(this.desc, this.descColor, this.descAlign, this.descAlignY);
  }

  /**
   * draw <path/>
   */
  abstract path(): string | string[];

  /**
   * draw content
   */
  abstract content(): string;

  /**
   * draw render
   */
  render() {
    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        ${this._drawStyle()}
        ${this._drawGradient()}
        ${this.content()}
        ${this._drawText()}
        ${this._drawDesc()}
      </svg>
    `;
  }
}
