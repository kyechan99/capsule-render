import {
  checkColor,
  checkDesc,
  checkReversal,
  checkText,
  checkThemeColor,
  generateAutoByTime,
  generateAutoColor,
  generateAutoGradient,
  generateThemeColor,
} from "../src/util";
import { html } from "../utils/html";
import { css } from "../utils/css";
import { checkCustomColor, isGradientColor } from "../src/verification";
import { ColorMap } from "../types/color";
import { parseToNumberArr } from "../utils/parse";

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
    this.fontColor = params.fontColor || "000000";
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
    this.color = checkColor(this.color);
  }

  getStyle(
    section: "footer" | "header",
    fontSize: number = 70,
    descSize: number = 20,
    rotate: number = 0,
  ) {
    return html`${css(".text", {
      fontSize: `${fontSize}px`,
      fontWeight: 700,
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    })}`
      .append(
        css(".desc", {
          fontSize: `${descSize}px`,
          fontWeight: 500,
          fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
        }),
      )
      .appendIf(
        rotate !== 0,
        css(".text, .desc", {
          transformOrigin: "center center",
          transform: `rotate(${rotate}deg)`,
        }),
      )
      .appendIf(
        section === "footer",
        css("path", {
          transform: "rotate(180deg)",
          transformOrigin: "50% 50%",
        }),
      );
  }

  gradientDef() {
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

  getTextBg(
    bgColor: string | ColorMap,
    posX: number[],
    posY: number[],
    fontHeight: string | number,
    text: string,
  ) {
    if (!this.textBg) return "";

    // 40 : padding value
    const height = Number(fontHeight) + 40;
    // 0.5 : temp sizing.
    const width = text.length * Number(fontHeight) * 0.5 + 40;

    return `
        <rect fill="#${bgColor}" height="${height}" width ="${width}" x="${posX[0]}%" y="${posY[0]}%" transform="translate(-${
          width / 2
        }, -${height / 2})"  rx ="25" ry ="25" />
        `;
  }

  getAnimation(animation: string) {
    if (!animation) return html``;

    return html``
      .appendIf(animation === "fadeIn", [
        css(".text, .desc", {
          animation: "fadeIn 1.2s ease-in-out forwards",
        }),
        css("@keyframes fadeIn", {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }),
      ])
      .appendIf(animation === "scaleIn", [
        css(".text, .desc", {
          animation: "scaleIn .8s ease-in-out forwards",
          transformOrigin: "center",
        }),
        css("@keyframes scaleIn", {
          from: { transform: `scale(0)` },
          to: { transform: `scale(1)` },
        }),
      ])
      .appendIf(animation === "blinking", [
        css(".text, .desc", {
          animation: "blinking 1.6s step-start 0s infinite",
        }),
        css("@keyframes blinking", {
          "20%": { opacity: 1 },
          "50%": { opacity: 0 },
          "80%": { opacity: 1 },
        }),
      ])
      .appendIf(animation === "blink", [
        css(".text, .desc", {
          animation: "blink .6s step-start 0s backwards",
        }),
        css("@keyframes blink", {
          "10%": { opacity: 1 },
          "25%": { opacity: 0 },
          "40%": { opacity: 1 },
          "55%": { opacity: 0 },
          "70%": { opacity: 0 },
          "80%": { opacity: 1 },
        }),
      ])
      .appendIf(animation === "twinkling", [
        css(".text, .desc", {
          animation: "twinkling 4s ease-in-out infinite",
        }),
        css("@keyframes twinkling", {
          "40%": { opacity: 1 },
          "50%": { opacity: 0.5 },
          "60%": { opacity: 1 },
          "70%": { opacity: 0.5 },
          "80%": { opacity: 1 },
        }),
      ]);
  }

  textScript() {
    const textBgScript = this.textBg
      ? this.getTextBg(
          this.color,
          this.fontAlign,
          this.fontAlignY,
          this.fontSize,
          this.text,
        )
      : "";

    const textContent = checkText(
      this.text,
      this.textBg ? this.textBgColor : this.fontColor,
      this.fontAlign,
      this.fontAlignY,
      this.stroke,
      this.strokeWidth,
    );

    return `${textBgScript} ${textContent}`;
  }

  styleScript() {
    return `<style>
      ${this.getStyle(this.section, this.fontSize, this.descSize, this.rotate)}
      ${this.getAnimation(this.animation)}
    </style>`;
  }

  descScript() {
    return checkDesc(
      this.desc,
      this.descColor,
      this.descAlign,
      this.descAlignY,
    );
  }

  /**
   * draw <path/>
   */
  abstract path(): string | string[];

  /**
   * draw render
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
        ${this.styleScript()} ${this.gradientDef()} ${this.content()} ${this.textScript()}
        ${this.descScript()}
      </svg>
    `;
  }
}
