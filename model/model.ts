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

export abstract class Model {
  color: string | ColorMap;
  height: number;
  section: "footer" | "header";
  text: string;
  desc: string;
  textBg: boolean;
  fontSize: string;
  fontColor: string;
  fontAlign: number;
  fontAlignY: number;
  textBgColor: string;
  stroke: string;
  strokeWidth: string;
  descSize: number;
  descAlign: number;
  descAlignY: number;
  descColor: string;
  animation: string;
  reversal: string;
  rotate: number;
  customColorList: string;
  theme: string;
  type: string;

  constructor(params: any) {
    this.type = params.type || "wave";
    this.section = params.section || "header";
    this.height = params.height || 120;
    this.text = params.text || "";
    this.desc = params.desc || "";
    this.textBg = params.textBg == "true";
    this.fontSize = params.fontSize || "70";
    this.fontColor = params.fontColor || "000000";
    this.fontAlign = params.fontAlign || 0;
    this.fontAlignY = params.fontAlignY || 0;
    this.textBgColor = params.textBgColor || "000000";
    this.stroke = params.stroke || "B897FF";
    this.strokeWidth = params.strokeWidth || "0";
    this.descSize = params.descSize || 20;
    this.descAlign = params.descAlign || 50;
    this.descAlignY = params.descAlignY || 60;
    this.descColor = params.descColor || "000000";
    this.animation = params.animation || "fadeIn";
    this.reversal = checkReversal(params.reversal || "false");
    this.rotate = params.rotate || 0;
    this.customColorList = params.customColorList || "";
    this.theme = params.theme || "none";

    this.color = params.color || "B897FF";
    this.fontColor = params.fontColor || "000000";
    this.stroke = params.stroke || (params.strokeWidth ? "B897FF" : "none");
    this.strokeWidth =
      params.strokeWidth || (params.stroke === "none" ? "0" : "1");

    if (this.theme !== "none" && checkThemeColor(this.theme)) {
      [this.color, this.fontColor, this.textBgColor] = generateThemeColor(
        this.theme,
      );
      this.descColor = this.textBgColor;
    } else {
      this.processColors();
    }
    this.color = checkColor(this.color);
    console.log("this.color", this.color);
  }

  private processColors() {
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
      console.log(this.color, this.fontColor, this.textBgColor);
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

  getStyle(
    section: "footer" | "header",
    fontSize: string = "70",
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
    console.log("gradientDef", this.color);
    if (!isGradientColor(this.color)) return "";

    const offset = Object.entries(this.color)
      .map(([key, value]) => `<stop offset="${key}%" stop-color="#${value}"/>`)
      .join("");
    console.log("def", offset);

    return `<defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                ${offset}
              </linearGradient>
            </defs>`;
  }

  getTextBg(
    bgColor: string | ColorMap,
    posX: number,
    posY: number,
    fontHeight: string | number,
    text: string,
  ) {
    if (!this.textBg) return "";

    // 40 : padding value
    const height = Number(fontHeight) + 40;
    // 0.5 : temp sizing.
    const width = text.length * Number(fontHeight) * 0.5 + 40;

    return `
        <rect fill="#${bgColor}" height="${height}" width ="${width}" x="${posX}%" y="${posY}%" transform="translate(-${
          width / 2
        }, -${height / 2})"  rx ="25" ry ="25" />
        `;
  }

  getAnimation(animation: string, fontAlign: number, fontAlignY: number) {
    if (!animation) return html``;

    return html``
      .appendIf(animation === "fadeIn", [
        css(".text, .desc", {
          animation: "fadeIn 1.2s ease-in-out forwards",
        }),
        css("@keyframes fadeIn", {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        }),
      ])
      .appendIf(animation === "scaleIn", [
        css(".text, .desc", {
          animation: "scaleIn .8s ease-in-out forwards",
        }),
        css("@keyframes scaleIn", {
          from: {
            transform: `translate(${fontAlign}%, ${fontAlignY}%) scale(0)`,
          },
          to: {
            transform: `translate(0%, 0%) scale(1)`,
          },
        }),
      ])
      .appendIf(animation === "blinking", [
        css(".text, .desc", {
          animation: "blinking 1.6s step-start 0s infinite",
        }),
        css("@keyframes blinking", {
          "50%": {
            opacity: 0,
          },
        }),
      ])
      .appendIf(animation === "blink", [
        css(".text, .desc", {
          animation: "blink .6s step-start 0s backwards",
        }),
        css("@keyframes blink", {
          "10%": {
            opacity: 1,
          },
          "25%": {
            opacity: 0,
          },
          "40%": {
            opacity: 1,
          },
          "55%": {
            opacity: 0,
          },
          "70%": {
            opacity: 0,
          },
          "80%": {
            opacity: 1,
          },
        }),
      ])
      .appendIf(animation === "twinkling", [
        css(".text, .desc", {
          animation: "twinkling 4s ease-in-out infinite",
        }),
        css("@keyframes twinkling", {
          "40%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
          "60%": {
            opacity: 1,
          },
          "70%": {
            opacity: 0.5,
          },
          "80%": {
            opacity: 1,
          },
        }),
      ]);
  }

  textScript() {
    const textBgScript = this.textBg
      ? this.getTextBg(
          this.color,
          this.fontAlign || 50,
          this.fontAlignY || 50,
          this.fontSize,
          this.text,
        )
      : "";

    const textContent = this.textBg
      ? checkText(
          this.text,
          this.textBgColor,
          this.fontAlign,
          this.fontAlignY,
          this.stroke,
          this.strokeWidth,
        )
      : checkText(
          this.text,
          this.fontColor,
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
      ${this.getAnimation(this.animation, this.fontAlign, this.fontAlignY)}
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
